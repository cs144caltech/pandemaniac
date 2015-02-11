var category = "round3"
  , start = ISODate("2014-02-25T00:00:00.000-08:00Z")
  , end = ISODate("2014-02-26T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "4.10.6"
, category: category
, file: "email-Enron-forest-fire-500-0.6-172.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.10.7"
, category: category
, file: "email-Enron-forest-fire-1000-0.6-79.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.20.1"
, category: category
, file: "email-Enron-forest-fire-2000-0.6-25.json"
, timeout: minute * 5
, start: start
, end: end
});
