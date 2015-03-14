(function(){
    "use strict";

    angular.module("ex3", [])
        .controller("EmployeeController", ["$scope", function ($scope) {
            $scope.employees = [
                {name: "Bob"},
                {name: "Joe"},
                {name: "Frank"},
                {name: "Alan"},
                {name: "Derek"},
                {name: "Eric"},
                {name: "Larry"}
            ];
        }]);

}());