'use strict';

/**
 * @ngdoc function
 * @name onTheMoveApp.controller:TerminalCtrl
 * @description
 * # TerminalCtrl
 * Controller of the onTheMoveApp
 */
angular.module('onTheMoveApp')
  .controller('TerminalCtrl', ['$scope', function ($scope) {
    this.waitingTime = 
      [ ];

    $scope.someData = [[
      ['Heavy Industry', 12],['Retail', 9], ['Light Industry', 14],
      ['Out of home', 16],['Commuting', 7], ['Orientation', 9]
    ]];

  }]);
