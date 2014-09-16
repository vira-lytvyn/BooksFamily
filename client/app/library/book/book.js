'use strict';

angular.module('booksFamilyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/book',
        templateUrl: 'app/library/book/book.html',
        controller: 'BookCtrl'
      });
  });