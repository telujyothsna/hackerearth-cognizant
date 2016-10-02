'use strict';
const angular = require('angular');

export class statsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('hackerEarthCognizantApp.stats', [])
  .component('stats', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: statsComponent
  })
  .name;
