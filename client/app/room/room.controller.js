'use strict';

angular.module('frizzleApp')
    .controller('RoomCtrl', function($scope, $routeParams, $firebase, localStorageService) {
        var ref = new Firebase("https://frizzle.firebaseio.com/rooms/" + $routeParams.roomId);
        var usersRef = new Firebase("https://frizzle.firebaseio.com/rooms/" + $routeParams.roomId + "/users");

        var sync = $firebase(ref);
        var userSync = $firebase(usersRef);

        var syncObject = sync.$asObject();
        $scope.users = userSync.$asArray();

        syncObject.$bindTo($scope, "roomData");

        $scope.users.$loaded().then(function() {
            var localUser = localStorageService.get('frizzle_user');

            if (_.findIndex($scope.users, localUser) === -1) {
                $scope.users.$add(localUser);
            }
        });



    });
