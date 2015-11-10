
(function () {
    "use strict";

    var mySuperApp = angular.module('mySuperApp', ['ngRoute']);

    mySuperApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
          when('/page1', {
            templateUrl: 'views/page1.html',
            controller: 'MainPageCtrl',
          }).
          when('/page2', {
            templateUrl: 'views/page2.html',
          }).
          otherwise({
            redirectTo: '/page1',
          });
    }]);

    mySuperApp.controller("MainPageCtrl", ["$scope", function($scope) {

        $scope.displayedTexts = [];
        $scope.inputText = "";

        $scope.copyText = function() {
            $scope.displayedTexts.push({txt: $scope.inputText});
        };

    }]);

})();
