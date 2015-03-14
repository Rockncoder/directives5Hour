(function () {
    "use strict";

    angular.module("Mad01App", [])
        .directive('hello', function () {
            return {
                restrict: 'E',
                //template: '<div>Hi there</div>',  // make this line active an see it work without fetching a file (Faster)
                templateUrl: 'hello.html',
                replace: true                      // change this to false to see how the markup changes
            };
        })
        .directive('hellot', function () {
            return {
                template: '<div>Hi there <span ng-transclude></span></div>',
                transclude: true
            };
        })
        .directive("expander", function () {
            return {
                restrict: "EA",
                replace: true,
                transclude: true,
                scope: {title: "=expanderTitle"},
                template: '<div>' +
                '<div class="title" ng-click="toggle()">{{title}}</div>' +
                '<div class="body" ng-show="showMe" ng-transclude></div>' +
                '</div>',
                link: function (scope, element, attrs) {
                    scope.showMe = false;
                    scope.toggle = function toggle() {
                        scope.showMe = !scope.showMe;
                    }
                }
            };
        })
        .directive("expander2", function () {
            return {
                restrict: "EA",
                replace: true,
                transclude: true,
                scope: {title: "@expanderTitle"},
                template: '<div>' +
                '<div class="title" ng-click="toggle()">{{title}}</div>' +
                '<div class="body" ng-show="showMe" ng-transclude></div>' +
                '</div>',
                link: function (scope, element, attrs) {
                    scope.showMe = false;
                    scope.toggle = function toggle() {
                        scope.showMe = !scope.showMe;
                    }
                }
            };
        })
        .controller("SomeController", ["$scope", function ($scope) {
            $scope.title = "Click me to expand";
            $scope.text = "Hi there folks, I am the content that was hidden but is now shown.";
        }])
        .controller("EmployeeController", ["$scope", function ($scope) {
            $scope.employees = [
                {name: "Alpha"},
                {name: "Beta"},
                {name: "Delta"},
                {name: "Epsilon"},
                {name: "Gamma"}
            ];
        }]);
}());
