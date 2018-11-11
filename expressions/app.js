(function () {
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', ['$scope', MsgController]);

    // MsgController.$inject = ['$scope'];

    function MsgController($scope) {
      
      $scope.name = "Ahmed";

      $scope.sayMessage = function () {
        return "Ahmed loves food!"
      }
    }

})();
