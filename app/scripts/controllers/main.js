'use strict';

/**
 * @ngdoc function
 * @name onTheMoveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onTheMoveApp
 */
angular.module('onTheMoveApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.containers = [
      {id: 1,
        destination: "Berlin",
        ship: 1,
        prediction: {}

      },
      {id: 2,
        destination: "Berlin",
        ship: 1,
        prediction: {}
      },
      {id: 1,
        destination: "Berlin",
        ship: 1,
        prediction: {}

      },
      {id: 2,
        destination: "Berlin",
        ship: 1,
        prediction: {}
      } 
    ];

    $scope.destinations = [
    { id: 1,
      name: "Berlin"
    },
    { id: 2,
      name: "Enschede"
    }
    ]; 

    }]);


