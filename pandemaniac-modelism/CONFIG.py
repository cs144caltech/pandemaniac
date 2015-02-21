# Location of files.
GRAPH_FOLDER = "../pandemaniac-graphui/private/graphs/"
TEAMS_FOLDER = "../pandemaniac-graphui/private/uploads/"
OUTPUT_FOLDER = "../pandemaniac-graphui/private/runs/"
DOWNLOAD_FOLDER = "../pandemaniac-graphui/public/download/"

# MongoDB configuration.
DB_SERVER = "localhost"
DB_PORT = 27017

# Maximum number of generations to run the simulation.
MAX_ROUNDS = 100

# Number of games in each round
GAMES = 50

# Points for places.
POINTS = {1:20, 2:15, 3:12, 4:9, 5:6, 6:4, 7:2, 8:1}

# Graphs for each day.
DAYS = {
  "1": [
    # ([graph name], [number of players], [number of nodes]) OR
    # ([graph name], [team name], [number of nodes])
    #   which means it's a 1 vs. 1 with a specific TA team and a student team.
    ("2.5.01", 2, 5),
    ("4.5.01", 4, 5),
    ("4.10.01", 4, 10),
    ("8.10.01", 8, 10),
    ("8.20.01", 8, 20),
    ("8.20.02", 8, 20),
    ("8.35.01", 8, 35),
    ("2.10.010", "TA_degree", 10),
    ("2.10.020", "TA_fewer", 10),
    ("2.10.030", "TA_more", 10)
  ],
  "2": [
    ("2.5.2", 2, 5),
    ("4.5.2", 4, 5),
    ("4.10.2", 4, 10),
    ("8.10.2", 8, 10),
    ("8.20.3", 8, 20),
    ("8.25.1", 8, 25),
    ("8.35.2", 8, 35),
    ("2.10.11", "TA_degree", 10),
    ("2.10.21", "TA_fewer", 10),
    ("2.10.31", "TA_more", 10)
  ],
  "3": [
    ("2.5.3", 2, 5),
    ("4.5.3", 4, 5),
    ("4.10.3", 4, 10),
    ("8.10.3", 8, 10),
    ("8.20.4", 8, 20),
    ("8.30.1", 8, 30),
    ("8.40.1", 8, 40),
    ("2.10.12", "TA_degree", 10),
    ("2.10.22", "TA_fewer", 10),
    ("2.10.32", "TA_more", 10)
  ],
  "4": [
    ("2.5.4", 2, 5),
    ("4.5.4", 4, 5),
    ("4.10.4", 4, 10),
    ("8.10.4", 8, 10),
    ("8.20.5", 8, 20),
    ("8.25.2", 8, 25),
    ("8.40.2", 8, 40),
    ("2.10.13", "TA_degree", 10),
    ("2.10.23", "TA_fewer", 10),
    ("2.10.33", "TA_more", 10)
  ],
  "5": [
    ("2.5.5", 2, 5),
    ("4.5.5", 4, 5),
    ("4.10.5", 4, 10),
    ("8.10.5", 8, 10),
    ("8.20.6", 8, 20),
    ("8.20.7", 8, 20),
    ("8.35.3", 8, 35),
    ("2.10.14", "TA_degree", 10),
    ("2.10.24", "TA_fewer", 10),
    ("2.10.34", "TA_more", 10)
  ],
  "round1": [
    ("16.10.1", 16, 10),
    ("8.10.6", 8, 10),
    ("4.10.6", 4, 10),
  ],
  "round2": [
    ("16.10.2", 16, 10),
    ("8.20.8", 8, 20),
    ("4.10.7", 4, 10),
  ],
  "round3": [
    ("16.10.3", 16, 10),
    ("8.20.9", 8, 20),
    ("4.20.1", 4, 20),
  ]
}
