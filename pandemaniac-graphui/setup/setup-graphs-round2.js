var category = "round2"
  , start = ISODate("2015-02-26T00:00:00.000-08:00Z")
  , end = ISODate("2015-02-27T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "16.10.4"
, category: category
, file: "16.10.4.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "16.10.5"
, category: category
, file: "16.10.5.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "16.10.6"
, category: category
, file: "16.10.6.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.10.7"
, category: category
, file: "8.10.7.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.10.8"
, category: category
, file: "8.10.8.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.01"
, category: category
, file: "8.20.01.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "4.10.8"
, category: category
, file: "4.10.8.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.10.9"
, category: category
, file: "4.10.9.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.20.2"
, category: category
, file: "4.20.2.json"
, timeout: minute * 5
, start: start
, end: end
});

