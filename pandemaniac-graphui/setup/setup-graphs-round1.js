var category = "round1"
  , start = ISODate("2014-02-25T00:00:00.000-08:00Z")
  , end = ISODate("2014-02-26T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "16.10.1"
, category: category
, file: "email-Enron-forest-fire-2000-0.6-83.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "16.10.2"
, category: category
, file: "twitter_combined-forest-fire-5000-0.6-10.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "16.10.3"
, category: category
, file: "soc-Epinions1-forest-fire-10000-0.6-7.json"
, timeout: minute * 5
, start: start
, end: end
});
