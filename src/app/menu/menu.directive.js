(function () {
    'use strict';

    angular
        .module('app')
        .directive('menuDirective', menuDirective);

    function menuDirective() {

        var directive = {
            templateUrl: 'src/app/menu/menu.html',
            restrict: 'AE'
        };
        return directive;
    }
})();