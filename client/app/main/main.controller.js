'use strict';

angular.module('booksFamilyApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.books = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $http.get('/api/books').success(function(books) {
      $scope.books = books;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.addBook = function() {
      if($scope.newBook === '') {
        return;
      }
      $http.post('/api/books', { name: $scope.newBook });
      $scope.newBook = '';
    };

    $scope.deleteBook = function(book) {
      $http.delete('/api/books/' + book._id);
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

  });