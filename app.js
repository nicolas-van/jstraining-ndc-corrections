
(function () {
    "use strict";

    var mySuperApp = angular.module('mySuperApp', ['ngRoute']);

    mySuperApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/page1', {
            templateUrl: 'views/page1.html',
            controller: 'MainPageCtrl',
          });
        $routeProvider.when('/page2', {
            templateUrl: 'views/page2.html',
          }).
          when('/async', {
            templateUrl: 'views/async.html',
            controller: 'AsyncCtrl',
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

    mySuperApp.controller("AsyncCtrl", ["$scope", "$http", function($scope, $http) {

        $scope.results = [];

        var p1 = $http.get("/add?arg1=1&arg2=2").then(function(result) {
            $scope.results.push(result.data);
            return $http.get("/add?arg1=" + result.data + "&arg2=3");
        }).then(function(result) {
            $scope.results.push(result.data);
            return $http.get("/add?arg1=" + result.data + "&arg2=4");
        }).then(function(result) {
            $scope.results.push(result.data);
            return $http.get("/add?arg1=" + result.data + "&arg2=5");
        }).then(function(result) {
            $scope.results.push(result.data);
        });

        console.log("b");

    }]);

    mySuperApp.directive('helloText', [function() {
      return {
        restrict: 'E',
        templateUrl: 'views/hello-text.html',
        scope: {},
        link: function($scope, element, attr) {
            $scope.date = new Date();
            setInterval(function() {
                $scope.date = new Date();
                $scope.$apply();
            }, 100);
        },
      };
    }]);

})();
