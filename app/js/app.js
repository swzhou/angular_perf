'use strict';


// Declare app level module w
// hich depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'pasvaz.bindonce',
    'sf.virtualScroll',
    'myApp.controllers'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/big-table', {templateUrl: 'partials/big-table.html', controller: 'BigTableController'});
        $routeProvider.otherwise({redirectTo: '/big-table'});
    }]);