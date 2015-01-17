'use strict';

/**
 * @ngdoc function
 * @name booksFamilyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the booksFamilyApp
 */
angular.module('booksFamilyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
