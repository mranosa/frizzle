'use strict';

angular.module('frizzleApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'LocalStorageModule',
  'firebase'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/login'
      });

    $locationProvider.html5Mode(true);
  });