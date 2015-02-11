var category = "day3"
  , start = ISODate("2014-02-22T00:00:00.000-08:00Z")
  , end = ISODate("2014-02-23T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "2.5.3"
, category: category
, file: "email-Enron-forest-fire-100-0.6-53.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.5.3"
, category: category
, file: "email-Enron-forest-fire-200-0.6-86.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.10.3"
, category: category
, file: "email-Enron-forest-fire-500-0.6-66.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "2.10.12"
, category: category
, file: "email-Enron-forest-fire-500-0.6-199.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.degree
});
db.graphs.insert({
  name: "2.10.22"
, category: category
, file: "email-Enron-forest-fire-500-0.6-80.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.fewer
});
db.graphs.insert({
  name: "2.10.32"
, category: category
, file: "email-Enron-forest-fire-500-0.6-90.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.eyeball
});
db.graphs.insert({
  name: "8.10.3"
, category: category
, file: "email-Enron-forest-fire-1000-0.6-75.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.4"
, category: category
, file: "email-Enron-forest-fire-2000-0.6-23.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.30.1"
, category: category
, file: "twitter_combined-forest-fire-5000-0.6-14.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.40.1"
, category: category
, file: "Slashdot0902-forest-fire-10000-0.6-18.json"
, timeout: minute * 5
, start: start
, end: end
});
