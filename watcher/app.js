(function() {
  'use strict';

  angular.module('CounterApp', [])
    .controller('CounterController', ['$scope', CounterController]);

  function CounterController($scope) {

    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.counterMin = 10;

    $scope.name = "Ahmed";

    $scope.showNumberOfWatchers = function() {
      console.log("# of Watchers: ", $scope.$$watchersCount);
      console.log($scope);
    };

    $scope.countOnce = function() {
      $scope.onceCounter = 1;
    };

    $scope.downCounter = function() {
      $scope.counterMin--;
    };

    $scope.upCounter = function() {
      $scope.counter++;
    };

    $scope.$watch(function () {
      console.log("Digest Loop fired!");
    });

    $scope.$watch('onceCounter', function (newValue, oldValue) {
      console.log("Once counter oldValue", oldValue);
      console.log("Once counter newValue", newValue);
    });

    $scope.$watch('counter', function (newValue, oldValue) {
      console.log("counter oldValue", oldValue);
      console.log("counter newValue", newValue);
    });

    $scope.$watch('counterMin', function (newValue, oldValue) {
      console.log("counterMin oldValue", oldValue);
      console.log("counterMin newValue", newValue);
    });
  };

})();
