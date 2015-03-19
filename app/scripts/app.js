'use strict';

// PouchDB.debug.enable('*');

// var db = new PouchDB('http://localhost:5984/books');

// db.info().then(function (info) {
//   console.log(info);
// });

// var doc = {
//   '_id': '111-111-111-111',
//   'name': 'Test book name 1',
//   'authors': ['Name Surname'],
//   'year': 2015,
//   'janres': [
//     'novel',
//     'romantic',
//     'historical'
//   ]
// };

// db.put(doc);

// db.get('111-111-111-111').then(function (doc) {
//   console.log(doc);
// });

// // fetch 111-111-111-111
// db.get('111-111-111-111').then(function (doc) {
//   // update his year
//   doc.year = 2014;
//   // put him back
//   return db.put(doc);
// }).then(function () {
//   // fetch 111-111-111-111 again
//   return db.get('111-111-111-111');
// }).then(function (doc) {
//   console.log(doc);
// });