var category = "day4"
  , start = ISODate("2014-02-23T00:00:00.000-08:00Z")
  , end = ISODate("2014-02-24T00:00:00.000-08:00Z");

// NOTE: variables `minute` and `descriptions` defined in setup-graphs.js

db.graphs.insert({
  name: "2.5.4"
, category: category
, file: "email-Enron-forest-fire-100-0.6-88.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.5.4"
, category: category
, file: "email-Enron-forest-fire-200-0.6-69.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "4.10.4"
, category: category
, file: "email-Enron-forest-fire-500-0.6-33.json"
, timeout: minute * 3
, start: start
, end: end
});
db.graphs.insert({
  name: "2.10.13"
, category: category
, file: "email-Enron-forest-fire-500-0.6-308.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.degree
});
db.graphs.insert({
  name: "2.10.23"
, category: category
, file: "email-Enron-forest-fire-500-0.6-62.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.fewer
});
db.graphs.insert({
  name: "2.10.33"
, category: category
, file: "email-Enron-forest-fire-500-0.6-101.json"
, timeout: minute * 5
, start: start
, end: end
, desc: descriptions.eyeball
});
db.graphs.insert({
  name: "8.10.4"
, category: category
, file: "email-Enron-forest-fire-1000-0.6-54.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.20.5"
, category: category
, file: "email-Enron-forest-fire-2000-0.6-58.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.25.2"
, category: category
, file: "twitter_combined-forest-fire-5000-0.6-6.json"
, timeout: minute * 5
, start: start
, end: end
});
db.graphs.insert({
  name: "8.40.2"
, category: category
, file: "twitter_combined-forest-fire-10000-0.6-10.json"
, timeout: minute * 5
, start: start
, end: end
});
