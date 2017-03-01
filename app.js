(function () {
    'use strict';

    angular.module('assignement1', [])
    .controller('assignementController', Controller);

    Controller.$inject = ['$scope'];
    function Controller($scope) {
        $scope.lunch = "";

        $scope.checkLunch = function () {
            var plates = $scope.lunch.split(",");
            var plate = "";

            var aa = plate.length;

            var platesCount = 0;
            for (var i = 0; i <= plates.length ; i++) {
                plate = plates[i];
                if (plates[i] != undefined) {
                    platesCount += (plates[i].trim().length > 0 ? 1 : 0);
                }
            }

            var aetTooMuch = (platesCount > 3);

            if (aetTooMuch) {
                $scope.lunchResult = "Ate too much!";
            }else{
                if (platesCount == 0) {
                    $scope.lunchResult = "Please enter data first";
                } else {
                    $scope.lunchResult = "Enjoy!";
                }
            }
            return $scope.lunchResult;
        };
        $scope.checkLunch();


    }


})();