(function () {
    'use strict';

    angular.module('app', [
        'ngRoute'
    ]);
})();
angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/app/menu/menu.html',
            controller: 'menuController',
            controllerAs: 'vm'
        })
        .when('/book', { // Improvement: add functionality to handle query strings. 
            templateUrl: 'src/app/book/book.html',
            controller: 'menuController',
            controllerAs: 'vm'
        })
        .when('/gymproducts', {
            templateUrl: 'src/app/explore/explore.html',
            controller: 'menuController',
            controllerAs: 'vm'
        })
        .when('/venues', {
            templateUrl: 'src/app/venues/venues.html',
            controller: 'menuController',
            controllerAs: 'vm'
        })
        .when('/special', {
            templateUrl: 'src/app/collection/collection.html',
            controller: 'menuController',
            controllerAs: 'vm'
        })
        .when('/2', {
            templateUrl: 'src/app/history/history.html',
            controller: 'menuController',
            controllerAs: 'vm'
        })
        .when('/3', {
            templateUrl: 'src/app/haircuts/haircuts.html',
            controller: 'menuController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhcHAuY29uZmlnLmpzIiwibWVudS9kYXRhLnNlcnZpY2UuanMiLCJtZW51L21lbnUuY29udHJvbGxlci5qcyIsIm1lbnUvbWVudS5kaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xyXG4gICAgICAgICduZ1JvdXRlJ1xyXG4gICAgXSk7XHJcbn0pKCk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJylcclxuICAgIC5jb25maWcoY29uZmlnKTtcclxuXHJcbmZ1bmN0aW9uIGNvbmZpZygkcm91dGVQcm92aWRlcikge1xyXG4gICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgICAud2hlbignLycsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL21lbnUvbWVudS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ21lbnVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbignL2Jvb2snLCB7IC8vIEltcHJvdmVtZW50OiBhZGQgZnVuY3Rpb25hbGl0eSB0byBoYW5kbGUgcXVlcnkgc3RyaW5ncy4gXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9ib29rL2Jvb2suaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdtZW51Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLndoZW4oJy9neW1wcm9kdWN0cycsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL2V4cGxvcmUvZXhwbG9yZS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ21lbnVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbignL3ZlbnVlcycsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL3ZlbnVlcy92ZW51ZXMuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdtZW51Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLndoZW4oJy9zcGVjaWFsJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9hcHAvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnbWVudUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC53aGVuKCcvMicsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ21lbnVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbignLzMnLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9oYWlyY3V0cy9oYWlyY3V0cy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ21lbnVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAub3RoZXJ3aXNlKHtcclxuICAgICAgICAgICAgcmVkaXJlY3RUbzogJy8nXHJcbiAgICAgICAgfSk7XHJcbn07IiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5zZXJ2aWNlKCdkYXRhc2VydmljZScsIGRhdGFzZXJ2aWNlKTtcclxuXHJcbiAgICBkYXRhc2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJ107XHJcblxyXG4gICAgZnVuY3Rpb24gZGF0YXNlcnZpY2UoJGh0dHAsICRsb2cpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlcnZpY2UgPSB7XHJcbiAgICAgICAgICAgIGdldE1lbnU6IGdldE1lbnVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldE1lbnUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy4vc3JjL2FwcC9tZW51L2RhdGEuanNvbicpXHJcbiAgICAgICAgICAgICAgICAudGhlbihnZXREYXRhQ29tcGxldGUpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0RGF0YUZhaWxlZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldERhdGFDb21wbGV0ZShyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RGF0YUZhaWxlZChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gJGxvZy5lcnJvcignVW5hYmxlIHRvIGdldCBkYXRhJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdtZW51Q29udHJvbGxlcicsIG1lbnVDb250cm9sbGVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtZW51Q29udHJvbGxlcihkYXRhc2VydmljZSkge1xyXG5cclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgIHZtLm1lbnU7XHJcblxyXG4gICAgICAgIGFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5nZXRNZW51KClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZtLm1lbnUgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdtZW51RGlyZWN0aXZlJywgbWVudURpcmVjdGl2ZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWVudURpcmVjdGl2ZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL21lbnUvbWVudS5odG1sJyxcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBRSdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XHJcbiAgICB9XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
