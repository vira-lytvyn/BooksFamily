'use strict';

angular.module('booksFamilyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/book',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('author', {
        url: '/author',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      });
  });