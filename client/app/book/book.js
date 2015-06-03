'use strict';

angular.module('booksFamilyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/book',
        templateUrl: 'app/book/book.html',
        controller: 'BookCtrl'
      })
      .state('create', {
        url: '/newBook',
        templateUrl: 'app/bookForm/bookForm.html',
        controller: 'BookCtrl'
      })
      .state('edit', {
        url: '/book/:id',
        templateUrl: 'app/bookForm/bookForm.html',
        controller: 'BookCtrl'
      });
  });
