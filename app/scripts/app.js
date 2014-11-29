'use strict';

/**
 * @ngdoc overview
 * @name seanvoellerdotcomApp
 * @description
 * # seanvoellerdotcomApp
 *
 * Main module of the application.
 */
angular
  .module('seanvoellerdotcomApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

document.domain = 'seanvoeller.com';