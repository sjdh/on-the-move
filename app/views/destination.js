'use strict';

/**
 * @ngdoc function
 * @name onTheMoveApp.controller:TerminalCtrl
 * @description
 * # TerminalCtrl
 * Controller of the onTheMoveApp
 */
angular.module('onTheMoveApp')
  .controller('DestinatonCtrl', ['$scope', function ($scope) {
    this.waitingTime = 
      [ ];

    $scope.someData = [[
      ['Nederland', 'NL'], ['België', 'BE'], ['Frankrijk', 'FR'], ['Duitsland', 'DE'], ['Nederland', 'NL'],
    ]];

  }]);