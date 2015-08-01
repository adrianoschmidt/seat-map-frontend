'use strict';

describe('Controller: SeatMapController', function () {

  // load the controller's module
  beforeEach(module('seatmap'));

  var seatmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    seatmapCtrl = $controller('SeatMapController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
