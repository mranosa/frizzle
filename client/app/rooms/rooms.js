'use strict';

angular.module('frizzleApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rooms', {
        templateUrl: 'app/rooms/rooms.html',
        controller: 'RoomsCtrl'
      });
  });
