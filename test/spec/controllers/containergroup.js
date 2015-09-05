'use strict';

describe('Controller: ContainergroupCtrl', function () {

  // load the controller's module
  beforeEach(module('onTheMoveApp'));

  var ContainergroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContainergroupCtrl = $controller('ContainergroupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContainergroupCtrl.awesomeThings.length).toBe(3);
  });
});
