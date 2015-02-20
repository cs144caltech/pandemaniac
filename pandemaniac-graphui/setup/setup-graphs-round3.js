var category = "round3"
  , start = ISODate("2015-02-25T00:00:00.000-08:00Z")
  , end = ISODate("2015-02-26T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "16.10.3"
, category: category
, file: "16.10.3.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.9"
, category: category
, file: "8.20.9.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "4.20.1"
, category: category
, file: "4.20.1.json"
, timeout: minute * 5
, start: start
, end: end
});
