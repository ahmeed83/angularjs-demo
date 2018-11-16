(function () {
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('love', LoveFilter)
    .filter('plus5', Plus5FilterFunction);

    MsgController.$inject = ['$scope', '$filter', 'loveFilter', 'plus5Filter'];

    function MsgController($scope, $filter, loveFilter) {

      $scope.name = "Ahmed";
      $scope.stateOfBeing = "hungry";
      $scope.cookieCost = 4;

      $scope.sayMessage = function () {
        var msg = "Ahmed likes food!";
        var output = $filter('uppercase')(msg);
        return output;
      };

      $scope.sayLoveMessage = function () {
        var msg = "Ahmed likes food!";
        var output = loveFilter(msg);
        return output;
      };

      $scope.feedAhmed = function () {
        $scope.stateOfBeing = "feed";
      };
    };

    function LoveFilter() {
      return function (input) {
        input = input || "";
        return input.replace("likes", "loves");
      };
    }

    function Plus5FilterFunction() {
      return function (input) {
        input = input || "";
        return input * 5;
      };
    }
})();
