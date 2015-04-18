'use strict';

angular.module('booksFamilyApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.newestBooks = [];

    $http.get('/api/books').success(function(newestBooks) {
      $scope.newestBooks = newestBooks;
      socket.syncUpdates('book', $scope.newestBooks);
    });

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

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('book');
    });
  });
