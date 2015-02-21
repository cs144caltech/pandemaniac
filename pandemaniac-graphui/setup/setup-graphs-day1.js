var category = "day1"
  , start = ISODate("2015-02-20T17:42:00.000-08:00Z")
  , end = ISODate("2015-02-21T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "2.5.01"
, category: category
, file: "2.5.1.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.5.01"
, category: category
, file: "4.5.1.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.10.01"
, category: category
, file: "4.10.1.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "2.10.010"
, category: category
, file: "2.10.10.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.degree
});
db.graphs.insert({
  name: "2.10.020"
, category: category
, file: "2.10.20.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.fewer
});
db.graphs.insert({
  name: "2.10.030"
, category: category
, file: "2.10.30.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.more
});
db.graphs.insert({
  name: "8.10.01"
, category: category
, file: "8.10.1.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.01"
, category: category
, file: "8.20.1.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.02"
, category: category
, file: "8.20.2.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.35.01"
, category: category
, file: "8.35.1.json"
, timeout: minute * 5
, start: start
, end: end
});
