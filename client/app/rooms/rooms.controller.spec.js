'use strict';

describe('Controller: RoomsCtrl', function () {

  // load the controller's module
  beforeEach(module('frizzleApp'));

  var RoomsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoomsCtrl = $controller('RoomsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
