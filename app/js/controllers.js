'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('BigTableController', ['$scope', '$http', function ($scope, $http) {
        $http.get('/data/big-table.json').then(function(response){
           $scope.rows = response.data;
        });
    }]);