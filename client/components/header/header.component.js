'use strict';
const angular = require('angular');

export class headerComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('hackerEarthCognizantApp.header', [])
  .component('header', {
    template: require('./header.html'),
    bindings: { message: '<' },
    controller: headerComponent
  })
  .name;
