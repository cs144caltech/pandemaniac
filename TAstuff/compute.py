import argparse
import itertools
import json
import networkx as nx
import os
import random
import sim

METHODS = ["degree", "r-degree", "closeness", "r-closeness", "betweenness", \
    "clustering", "r-clustering", "d-clustering", "b-clustering"]

DISADVANTAGE = 4.0/5

def create_graph(adj_list):
  """
  Function: create_graph
  ----------------------
  Creates a NetworkX graph from an adjacency list.
  """
  G = nx.Graph()
  # Loop through the adjacency list to add edges.
  for (n1, neighbors) in adj_list.items():
    for n2 in neighbors:
      G.add_edge(str(n1), str(n2))
      G.add_edge(str(n2), str(n1))
  return G


def randomize(lst1, lst2):
  """
  Function: randomize
  -------------------
  Combines two lists and shuffles them as if we were randomly picking nodes
  from each one of them.
  """
  result = lst1 + lst2
  random.shuffle(result)
  return result


def normal_random(lst, n):
  """
  Function: normal_random
  -----------------------
  Gets n random numbers from lst with probabilities drawn from a normal
  distribution.

  lst: The list to drawn from.
  n: The number of values to choose from that list.
  """
  # Indices to choose from.
  indices = set()
  while len(indices) < n:
    i = abs(int(random.normalvariate(0, int(n * 1.5))))
    if i >= len(lst):
      i = len(lst) - 1
    indices.add(i)

  return [lst[i] for i in indices]


def sort(nodes):
  """
  Function: sort
  --------------
  Sorts a list of nodes by the second element in the tuple.
  """
  nodes = sorted(list(set(nodes.items())), key=lambda x: x[1], reverse=True)
  return [x[0] for x in nodes]


def subset(adj_list, nodes):
  """
  Function: subset
  ----------------
  Gets a subset of an adjacency list with particular nodes.
  """
  return dict([x for x in adj_list.items() if x[0] in nodes])


def by_clustering(adj_list):
  """
  Function: by_clustering
  -----------------------
  Finds the nodes and their clustering coefficient.
  """

  def get_triangles(node):
    """
    Function: get_triangles
    -----------------------
    Gets the number of triangles centered at this node.
    """
    triangles = 0
    neighbors = adj_list[node]
    for i in xrange(len(neighbors)):
      for j in xrange(i + 1, len(neighbors)):
        if neighbors[j] in adj_list[str(neighbors[i])]:
          triangles += 1
    return triangles

  def get_triples(node):
    """
    Function: get_triples
    ---------------------
    Returns the number of triples centered at this node.
    """
    degree = len(adj_list[node])
    return degree * (degree - 1) / 2.0


  cluster = {}
  for node in adj_list.keys():
    clustering = 0
    # Clustering defined to be 0 if there were no triples.
    if get_triples(node) != 0:
      clustering = get_triangles(node) / get_triples(node)
    cluster[node] = clustering

  return cluster


def by_random(adj_list, num):
  """
  Function: by_random
  -------------------
  Selects num random nodes.
  """
  return random.sample(adj_list.keys(), num)


def get_top_N(adj_list, method, num):
  """
  Function: get_top_N
  -------------------
  Get the top N nodes of the graph using a particular method.

  adj_list: Adjacency representation of the graph.
  method: The method used to compute the "value" of each node.
  num: The number of nodes to take.
  """
  G = create_graph(adj_list)
  results = {}

  # Top nodes by degree.
  if method == "degree":
    results = sort(nx.degree_centrality(G))

  # Get the top n * 3 nodes, then draw n nodes from that using a randomly
  # drawn variable from a normal distribution.
  elif method == "r-degree":
    results = sort(nx.degree_centrality(G))
    results = normal_random(results, num)

  elif method == "closeness":
    results = sort(nx.closeness_centrality(G))

  elif method == "r-closeness":
    results = sort(nx.closeness_centrality(G))
    results = normal_random(results, num)

  elif method == "betweeness" or method == "betweenness":
    results = sort(nx.betweenness_centrality(G))

  elif method == "r-betweenness" or method == "r-betweeness":
    results = sort(nx.betweenness_centrality(G))
    results = normal_random(results, num)

  elif method == "clustering":
    results = sort(by_clustering(adj_list))

  elif method == "r-clustering":
    results = sort(by_clustering(adj_list))
    results = normal_random(results, num)

  # Finds the top nodes by degree and clustering, and randomly chooses between
  # the two methods.
  elif method == "d-clustering":
    r1 = sort(nx.degree_centrality(G))
    r2 = sort(by_clustering(adj_list))
    results = randomize(r1[0:num], r2[0:num])

  # Finds the top nodes first by clustering, then computes the betweenness of
  # those nodes and finds the top nodes.
  elif method == "b-clustering":
    c = sort(by_clustering(adj_list))
    G = create_graph(subset(adj_list, c[0:num*4]))
    results = sort(nx.betweenness_centrality(G))

  # Randomly generates nodes.
  elif method.startswith("random"):
    return by_random(adj_list, num)

  # Get the top N.
  return results[0:num]


def main(graph, num):
  graph_file = open("graphs/" + graph, "r")
  adj_list = json.loads("".join(graph_file.readlines()))
  graph_file.close()

  possible_methods = METHODS
  old_possible_methods = METHODS

  # Compute nodes for each method.
  method_nodes = {}
  method_nodes_half = {}
  for method in METHODS:
    print "Computing", method
    nodes = get_top_N(adj_list, method, num)
    method_nodes[method] = nodes
    method_nodes_half[method] = nodes[0:int(num*DISADVANTAGE)]

  while True:
    # Keep a count of how many times each method wins.
    methods = {}
    for method in possible_methods:
      methods[method] = 0

    # Do all pairs matching.
    for method1, method2 in itertools.permutations(possible_methods, 2):
      print "Matching", method1, "and", method2
      result = sim.run(adj_list, {
          method1 : method_nodes_half[method1],
          method2 : method_nodes[method2]
      })
      # Want to see if method1 (the method with half as many nodes) wins. If so,
      # increment their counter.
      won = (1 if result[method1] >= result[method2] else 0)
      methods[method1] += won

    # Check to see if there is a clear winner. If not, do a rematch with the
    # teams that tie.
    possible_methods = []
    methods = sorted(list(methods.iteritems()), key=lambda x: x[1], \
      reverse=True)
    top_score = methods[0][1]
    for method, score in methods:
      if score == top_score:
        possible_methods.append(method)
      else:
        break

    print str(methods)

    # If we are done (no teams tied).
    if len(possible_methods) == 1:
      # Record the winning team's nodes.
      winner = possible_methods[0]
      print "Winner is", winner
    
      if not os.path.exists("results"):
        os.makedirs("results")
      output = open("results/" + graph + "-" + winner, "w")
      for node in method_nodes_half[winner]:
        output.write(str(node) + "\n")
      output.close()
      break

    # If there is no clear winner, do a new team that is a randomized version
    # of these teams.
    if sorted(possible_methods) == sorted(old_possible_methods):
      all_nodes = set()
      for method in possible_methods:
        for node in method_nodes[method]:
          all_nodes.add(node)
      all_nodes = list(all_nodes)
      random.shuffle(all_nodes)

      # Record the nodes.
      winners = "+".join(possible_methods)
      print "Winners are", winners

      if not os.path.exists("results"):
        os.makedirs("results")
      output = open("results/" + graph + "-" + winners, "w")
      for node in all_nodes[0:int(num*DISADVANTAGE)]:
        output.write(str(node) + "\n")
      output.close()
      break


    old_possible_methods = possible_methods


if __name__ == "__main__":
  # Parse the command-line arguments to get the graph and teams participating.
  parser = argparse.ArgumentParser(description='Get the graph and teams.')
  parser.add_argument("--graph")
  parser.add_argument("--num")
  args = parser.parse_args()
  (graph, num) = (args.graph, int(args.num))
  main(graph, num)
