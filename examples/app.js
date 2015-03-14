(function () {
    "use strict";

    angular.module("ex2", [])
        .controller("SomeController", ["$scope", function ($scope) {
            //$scope.title = "Click me to expand";
            //$scope.text = "Hi there folks. I am now visible";
        }])
        .directive("expander", function () {
            return {
                restrict: "EA",
                replace: true,
                transclude: true,
                scope: {
                    title: "@expanderTitle",
                    line2: "@secondLine"
                },
                template: "<div>" +
                '<div class="title" ng-click="toggle()">{{title}}</div>' +
                '<div class="body" ng-show="showMe" ><div ng-transclude></div>{{line2}}</div>' +
                '</div>',
                link: function (scope, element, attrs) {
                    scope.line2 =  scope.line2 || "Troy is a programmer";
                    scope.showMe = false;
                    scope.toggle = function () {
                        scope.showMe = !scope.showMe;
                    }
                }
            };
        });
}());