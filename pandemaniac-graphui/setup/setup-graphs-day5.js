var category = "day5"
  , start = ISODate("2014-02-24T00:00:00.000-08:00Z")
  , end = ISODate("2014-02-25T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "2.5.5"
, category: category
, file: "email-Enron-forest-fire-100-0.6-94.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.5.5"
, category: category
, file: "email-Enron-forest-fire-200-0.6-48.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.10.5"
, category: category
, file: "email-Enron-forest-fire-500-0.6-224.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "2.10.14"
, category: category
, file: "email-Enron-forest-fire-500-0.6-341.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.degree
});
db.graphs.insert({
  name: "2.10.24"
, category: category
, file: "email-Enron-forest-fire-500-0.6-332.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.fewer
});
db.graphs.insert({
  name: "2.10.34"
, category: category
, file: "email-Enron-forest-fire-500-0.6-92.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.eyeball
});
db.graphs.insert({
  name: "8.10.5"
, category: category
, file: "email-Enron-forest-fire-1000-0.6-3.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.6"
, category: category
, file: "email-Enron-forest-fire-2000-0.6-78.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.7"
, category: category
, file: "Slashdot0902-forest-fire-5000-0.6-20.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.35.3"
, category: category
, file: "soc-Epinions1-forest-fire-10000-0.6-3.json"
, timeout: minute * 5
, start: start
, end: end
});
