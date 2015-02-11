var category = "day1"
  , start = ISODate("2014-02-20T00:00:00.000-08:00Z")
  , end = ISODate("2014-02-21T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "2.5.1"
, category: category
, file: "email-Enron-forest-fire-100-0.6-42.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.5.1"
, category: category
, file: "email-Enron-forest-fire-200-0.6-6.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.10.1"
, category: category
, file: "email-Enron-forest-fire-500-0.6-126.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "2.10.10"
, category: category
, file: "email-Enron-forest-fire-500-0.6-205.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.degree
});
db.graphs.insert({
  name: "2.10.20"
, category: category
, file: "email-Enron-forest-fire-500-0.6-70.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.fewer
});
db.graphs.insert({
  name: "2.10.30"
, category: category
, file: "email-Enron-forest-fire-500-0.6-321.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.eyeball
});
db.graphs.insert({
  name: "8.10.1"
, category: category
, file: "email-Enron-forest-fire-1000-0.6-66.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.1"
, category: category
, file: "email-Enron-forest-fire-2000-0.6-32.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.2"
, category: category
, file: "Slashdot0902-forest-fire-5000-0.6-17.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.35.1"
, category: category
, file: "soc-Epinions1-forest-fire-10000-0.6-8.json"
, timeout: minute * 5
, start: start
, end: end
});
