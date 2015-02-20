var category = "round1"
  , start = ISODate("2015-02-25T00:00:00.000-08:00Z")
  , end = ISODate("2015-02-26T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "16.10.1"
, category: category
, file: "16.10.1.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.10.6"
, category: category
, file: "8.10.6.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "4.10.6"
, category: category
, file: "4.10.6.json"
, timeout: minute * 3
, start: start
, end: end
});
