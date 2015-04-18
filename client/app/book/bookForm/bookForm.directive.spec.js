'use strict';

describe('Directive: bookForm', function () {

  // load the directive's module and view
  beforeEach(module('booksFamilyApp'));
  beforeEach(module('app/book/bookForm/bookForm.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<book-form></book-form>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the bookForm directive');
  }));
});