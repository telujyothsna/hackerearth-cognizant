'use strict';

describe('Component: header', function() {
  // load the component's module
  beforeEach(module('hackerEarthCognizantApp.header'));

  var headerComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    headerComponent = $componentController('header', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
