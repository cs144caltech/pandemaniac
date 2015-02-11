var category = "round2"
  , start = ISODate("2014-02-25T00:00:00.000-08:00Z")
  , end = ISODate("2014-02-26T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "8.10.6"
, category: category
, file: "email-Enron-forest-fire-1000-0.6-92.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.8"
, category: category
, file: "email-Enron-forest-fire-2000-0.6-93.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.9"
, category: category
, file: "Slashdot0902-forest-fire-5000-0.6-5.json"
, timeout: minute * 5
, start: start
, end: end
});
