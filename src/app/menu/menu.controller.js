(function () {
    'use strict';

    angular
        .module('app')
        .controller('menuController', menuController);

    function menuController(dataservice) {

        var vm = this;
        vm.menu;

        activate();

        /////////////

        function activate() {
            return dataservice.getMenu()
                .then(function (data) {
                    return vm.menu = data;
                });
        }
    }
})();







