'use strict';

var _ = require('lodash');
var Author = require('./author.model');

// Get list of authors
exports.index = function(req, res) {
  Author.find(function (err, authors) {
    if(err) { return handleError(res, err); }
    return res.json(200, authors);
  });
};

// Get a single author
exports.show = function(req, res) {
  Author.findById(req.params.id, function (err, author) {
    if(err) { return handleError(res, err); }
    if(!author) { return res.send(404); }
    return res.json(author);
  });
};

// Creates a new author in the DB.
exports.create = function(req, res) {
  Author.create(req.body, function(err, author) {
    if(err) { return handleError(res, err); }
    return res.json(201, author);
  });
};

// Updates an existing author in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Author.findById(req.params.id, function (err, author) {
    if (err) { return handleError(res, err); }
    if(!author) { return res.send(404); }
    var updated = _.merge(author, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, author);
    });
  });
};

// Deletes a author from the DB.
exports.destroy = function(req, res) {
  Author.findById(req.params.id, function (err, author) {
    if(err) { return handleError(res, err); }
    if(!author) { return res.send(404); }
    author.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}