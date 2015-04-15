'use strict';

/**
 * @ngdoc function
 * @name booksFamilyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the booksFamilyApp
 */
angular.module('booksFamilyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
