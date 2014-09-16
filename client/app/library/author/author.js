'use strict';

angular.module('booksFamilyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('author', {
        url: '/author',
        templateUrl: 'app/library/author/author.html',
        controller: 'AuthorCtrl'
      });
  });