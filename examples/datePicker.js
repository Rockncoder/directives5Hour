(function(){
    "use strict";

    angular.module("datePickerMod",[])
        .directive('datePicker', function(){
            return {
                restrict: 'EA',
                require: '?ngModel',

            };
        });
}());