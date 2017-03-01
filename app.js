(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', Controller);

    Controller.$inject = ['$scope'];
    function Controller($scope) {
        $scope.lunch = "";
        $scope.status = "";

        $scope.checkLunch = function () {
            var plates = $scope.lunch.split(",");

            var platesCount = 0;
            for (var i = 0; i <= plates.length ; i++) {
                if (plates[i] != undefined) {
                    platesCount += (plates[i].trim().length > 0 ? 1 : 0);
                }
            }

            var aetTooMuch = (platesCount > 3);

            $scope.status = "Ok";
            if (aetTooMuch) {
                $scope.lunchResult = "Ate too much!";
            }else{
                if (platesCount == 0) {
                    $scope.lunchResult = "Please enter data first";
                    $scope.status = "Error";
                } else {
                    $scope.lunchResult = "Enjoy!";
                }
            }
            return $scope.lunchResult;
        };

    }


})();