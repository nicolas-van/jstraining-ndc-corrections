
(function () {
    "use strict";

    var mySuperApp = angular.module('mySuperApp', []);

    mySuperApp.controller("MainPageCtrl", ["$scope", function($scope) {

        $scope.displayedTexts = [];
        $scope.inputText = "";

        $scope.copyText = function() {
            $scope.displayedTexts.push({txt: $scope.inputText});
        };

    }]);

})();
