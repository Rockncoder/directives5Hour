(function(){
    "use strict";

    angular.module("datePickerMod",[])
        .directive('datepicker', function(){
            return {
                restrict: 'EA',
                require: '?ngModel',
                scope: {
                    select: '&'
                },
                link: function(scope, element, attrs, ngModel){
                    if(!ngModel) return;

                    var optionsObj = {};

                    optionsObj.dateFormat = 'mm/dd/yy';
                    var updateModel = function(dateTxt){
                        scope.$apply(function () {
                            ngModel.$setViewValue(dateTxt);
                        });
                    };

                    optionsObj.onSelect = function(dateTxt, picker){
                        updateModel(dateTxt);
                        if(scope.select){
                            scope.$apply(function(){
                                scope.select({date: dateTxt});
                            });
                        }
                    }

                    ngModel.$render = function(){
                        element.datepicker('setDate', ngModel.$viewValue || '');
                    };

                    element.datepicker(optionsObj);
                }
            };
        });
}());