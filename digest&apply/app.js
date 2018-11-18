(function() {
  'use strict';

  angular.module('CounterApp', [])
    .controller('CounterController', ['$scope', CounterController]);
    // .controller('CounterController', CounterController);

  // CounterController.$inject = ['$scope', '$timeout'];

  function CounterController($scope, $timeout) {

    $scope.counter = 0;

    // if we want to apply a javascript methods that not in angular. We can use
    // apply to apply js method inside angular
    
    $scope.upCounter = function() {
      setTimeout(function() {
        $scope.$apply(function () {
          $scope.counter++;
          console.log($scope.counter);
        });
      }, 2000);
    };

    // scone way we can just call $scope.$digest();

    // $scope.upCounter = function() {
    //   setTimeout(function () {
    //     $scope.counter++;
    //     console.log($scope.counter);
    //     $scope.$digest();
    //   }, 2000);
    // };


    // we can also just calles the service timeout (angular has the timeour service)

    // $scope.upCounter = function() {
    //   $timeout(function() {
    //     $scope.counter++;
    //     console.log($scope.counter);
    //   }, 2000);
    // };

  };

})();
