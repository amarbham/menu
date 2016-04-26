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