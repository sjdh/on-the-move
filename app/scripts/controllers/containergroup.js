'use strict';

/**
 * @ngdoc function
 * @name onTheMoveApp.controller:ContainergroupCtrl
 * @description
 * # ContainergroupCtrl
 * Controller of the onTheMoveApp
 */
angular.module('onTheMoveApp')
  .controller('ContainerGroupCtrl', ['$scope', function ($scope) {
    this.containers = $scope.waiting;
  }]);
