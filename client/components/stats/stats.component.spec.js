'use strict';

describe('Component: stats', function() {
  // load the component's module
  beforeEach(module('hackerEarthCognizantApp.stats'));

  var statsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    statsComponent = $componentController('stats', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
