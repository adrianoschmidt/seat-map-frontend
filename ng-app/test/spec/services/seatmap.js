'use strict';

describe('Service: seatmap', function () {

  // load the service's module
  beforeEach(module('seatmap'));

  // instantiate service
  var seatmap;
  beforeEach(inject(function (_seatmap_) {
    seatmap = _seatmap_;
  }));

  it('should do something', function () {
    expect(!!seatmap).toBe(true);
  });

});
