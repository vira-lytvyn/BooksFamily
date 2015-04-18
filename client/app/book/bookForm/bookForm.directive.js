'use strict';

angular.module('booksFamilyApp')
  .directive('bookForm', function () {
    return {
      templateUrl: 'app/book/bookForm/bookForm.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });