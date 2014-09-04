'use strict';

angular.module('frizzleApp')
    .controller('LoginCtrl', function($scope, localStorageService, $location) {
        $scope.genders = [{
            name: 'Male'
        }, {
            name: 'Female'
        }];
        $scope.gender = $scope.genders[0];

        $scope.login = function() {
        	localStorageService.set('frizzle_user', {
        		gender: $scope.gender.name, 
        		name: $scope.name
        	})
        	
        	$location.path('/rooms')
        };
    });
