import json
import sys
import sim

if __name__ == '__main__':
    graph_file = open(sys.argv[1], 'r')
    graph = json.loads("".join(graph_file.readlines()))
    graph_file.close()
    games = 50
    nodes_len = int(graph_file.split('.')[1])
    nodes_list = {}
    for i in range(2, len(sys.argv)):
        name = 'strategy' + str(i-1)
        with open(sys.argv[i], 'r') as f:
            nodes = f.read().split('\n')
            nodes_list[name] = []
            for i in range(games):
                nodes_list[name].append(nodes[nodes_len*i: nodes_len*(i+1)-1])
    print nodes_list
    result = sim.run(graph, nodes_list, games)
    for score, nodes in result:
        print score
        print nodes
