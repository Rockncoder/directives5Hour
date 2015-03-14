(function(){
    "use strict";

    angular.module("ex4", ['datePickerMod'])
        .controller("MainController",['$scope', function($scope){
            $scope.myText = "Not selected";
            $scope.currentDate = '';
        }]);



}());