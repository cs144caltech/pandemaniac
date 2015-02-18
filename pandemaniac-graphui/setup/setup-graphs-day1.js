var category = "day1"
  , start = ISODate("2015-02-17T00:00:00.000-08:00Z")
  , end = ISODate("2015-02-18T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "2.10.10"
, category: category
, file: "2.10.10.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.degree
});