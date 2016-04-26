(function() {
    'use strict';

    angular
        .module('app')
        .service('dataservice', dataservice);

    dataservice.$inject = ['$http', '$log'];

    function dataservice($http, $log) {

        var service = {
            getMenu: getMenu
        }

        function getMenu() {
            return $http.get('./src/app/menu/data.json')
                .then(getDataComplete)
                .catch(getDataFailed)
        }

        function getDataComplete(response) {
            return response.data
        }

        function getDataFailed(error) {
            return $log.error('Unable to get data')
        }

        return service
        ////////////////

    }
})();