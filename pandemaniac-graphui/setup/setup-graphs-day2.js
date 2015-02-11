var category = "day2"
  , start = ISODate("2014-02-21T00:00:00.000-08:00Z")
  , end = ISODate("2014-02-22T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "2.5.2"
, category: category
, file: "email-Enron-forest-fire-100-0.6-32.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.5.2"
, category: category
, file: "email-Enron-forest-fire-200-0.6-87.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.10.2"
, category: category
, file: "email-Enron-forest-fire-500-0.6-267.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "2.10.11"
, category: category
, file: "email-Enron-forest-fire-500-0.6-105.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.degree
});
db.graphs.insert({
  name: "2.10.21"
, category: category
, file: "email-Enron-forest-fire-500-0.6-325.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.fewer
});
db.graphs.insert({
  name: "2.10.31"
, category: category
, file: "email-Enron-forest-fire-500-0.6-41.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.eyeball
});
db.graphs.insert({
  name: "8.10.2"
, category: category
, file: "email-Enron-forest-fire-1000-0.6-67.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.3"
, category: category
, file: "email-Enron-forest-fire-2000-0.6-37.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.25.1"
, category: category
, file: "soc-Epinions1-forest-fire-5000-0.6-6.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.35.2"
, category: category
, file: "twitter_combined-forest-fire-10000-0.6-19.json"
, timeout: minute * 5
, start: start
, end: end
});
