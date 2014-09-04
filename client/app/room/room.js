'use strict';

angular.module('frizzleApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/room/:roomId', {
        templateUrl: 'app/room/room.html',
        controller: 'RoomCtrl'
      });
  });
