
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

    mySuperApp.controller("AsyncCtrl", ["$scope", "$http", "$q", function($scope, $http, $q) {

        $scope.results = [];

        var p1 = $http.get("/mult?arg1=1&arg2=2");
        var p2 = $http.get("/mult?arg1=2&arg2=3");
        var p3 = $http.get("/mult?arg1=3&arg2=4");
        var p4 = $http.get("/mult?arg1=4&arg2=5");
        var p5 = $http.get("/mult?arg1=5&arg2=6");

        $q.all([p1, p2, p3, p4, p5]).then(function(results) {
            results.forEach(function(element) {
                $scope.results.push(element.data);
            });
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
