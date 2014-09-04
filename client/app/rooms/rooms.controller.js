'use strict';

angular.module('frizzleApp')
    .controller('RoomsCtrl', function($scope, $firebase) {
        var ref = new Firebase("https://frizzle.firebaseio.com/rooms");
        var sync = $firebase(ref);
        $scope.rooms = sync.$asArray();
        $scope.addRoom = function(name) {
            $scope.rooms.$add({
                name: name
            });
        }
    });
