var minute = 60
  , descriptions = { degree: "[TA GRAPH] This TA will pick the nodes with the highest degree!"
                   , fewer: "[TA GRAPH] This TA will get to pick fewer seed nodes."
                   , eyeball: "[TA GRAPH] This TA will pick nodes by 'eyeballing' the graph."
                   };

db.graphs.drop();

load("/cs/courses/cs144/pandemaniac/pandemaniac-graphui/setup/setup-graphs-round2.js");
load("/cs/courses/cs144/pandemaniac/pandemaniac-graphui/setup/setup-graphs-day1.js");
load("/cs/courses/cs144/pandemaniac/pandemaniac-graphui/setup/setup-graphs-day2.js");
load("/cs/courses/cs144/pandemaniac/pandemaniac-graphui/setup/setup-graphs-day3.js");
load("/cs/courses/cs144/pandemaniac/pandemaniac-graphui/setup/setup-graphs-day4.js");
load("/cs/courses/cs144/pandemaniac/pandemaniac-graphui/setup/setup-graphs-day5.js");
load("/cs/courses/cs144/pandemaniac/pandemaniac-graphui/setup/setup-graphs-round1.js");
load("/cs/courses/cs144/pandemaniac/pandemaniac-graphui/setup/setup-graphs-round3.js");
