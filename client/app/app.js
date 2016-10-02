'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';

import 'angular-toArrayFilter';
import 'angular-socket-io';
import 'angular-localforage';
import uiRouter from 'angular-ui-router';

// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import 'angular-highlightjs';

import header from '../components/header/header.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import './app.scss';

angular.module('hackerEarthCognizantApp', [ngCookies, ngResource, ngSanitize, ngMaterial,
    'btford.socket-io',
    uiRouter, header, footer, main, constants, socket, util,
    'LocalForageModule','angular-toArrayFilter',
    'hljs',
  ])
  .config(routeConfig)
  .config(['$localForageProvider', function($localForageProvider){
    'ngInject';

    $localForageProvider.config({
        driver      : 'webSQLStorage', // if you want to force a driver
        name        : 'code-cafe', // name of the database and prefix for your data, it is "lf" by default
        version     : 1.0, // version of the database, you shouldn't have to use this
        storeName   : 'stats', // name of the table
        description : 'processed stats.'
    });
  }])
  .config(function (hljsServiceProvider) {
    'ngInject';

    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      tabReplace: ' '
    });
  })
  .filter('key',function() {
    return function(input) {
        var tmp;
        if (input) {
            tmp = Object.keys(input).filter((item) => {
              return item.indexOf('$') !== 0 ;
            });

            return tmp[0];    
        }
    }
  })
  .filter('keyvalue',function() {
    return function(input) {
        var tmp;
        if (input) {
            tmp = Object.keys(input).filter((item) => {
              return item.indexOf('$') !== 0 ;
            });

            return input[tmp[0]];
        }
    }
  })
  .filter('range', function() {
    return function(input, total) {
      total = parseInt(total);

      for (var i=0; i<total; i++) {
        input.push(i);
      }

      return input;
    };
  })
  
//   .filter('unique', function () {

//   return function (items, filterOn) {

//     if (filterOn === false) {
//       return items;
//     }

//     if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
//       var hashCheck = {}, newItems = [];

//       var extractValueToCompare = function (item) {
//         if (angular.isObject(item) && angular.isString(filterOn)) {
//           return item[filterOn];
//         } else {
//           return item;
//         }
//       };

//       angular.forEach(items, function (item) {
//         var valueToCheck, isDuplicate = false;

//         for (var i = 0; i < newItems.length; i++) {
//           if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
//             isDuplicate = true;
//             break;
//           }
//         }
//         if (!isDuplicate) {
//           newItems.push(item);
//         }

//       });
//       items = newItems;
//     }
//     return items;
//   };
// });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['hackerEarthCognizantApp'], {
      strictDi: true
    });
  });
