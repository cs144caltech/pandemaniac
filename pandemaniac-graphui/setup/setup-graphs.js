var minute = 60
  , descriptions = { degree: "[TA GRAPH] This TA will pick the nodes with the highest degree!"
                   , fewer: "[TA GRAPH] This TA will get to pick fewer seed nodes."
                   , eyeball: "[TA GRAPH] This TA will pick nodes by 'eyeballing' the graph."
                   };

db.graphs.drop();

load("/Users/jianchichen/Documents/pandemaniac/pandemaniac-graphui/setup/setup-graphs-day1.js");
