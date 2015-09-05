'use strict';

/**
 * @ngdoc overview
 * @name onTheMoveApp
 * @description
 * # onTheMoveApp
 *
 * Main module of the application.
 */
angular
  .module('onTheMoveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/terminal', {
        templateUrl: 'views/terminal.html',
        controller: 'TerminalCtrl',
        controllerAs: 'terminal'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
