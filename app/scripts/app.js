'use strict';
/**
 * @ngdoc overview
 * @name similityApp
 * @description
 * # similityApp
 *
 * Main module of the application.
 */
angular.module('similityApp', ['ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ui.router', 'rzModule', 'ui.bootstrap']).config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('/', {
        url: '/',
        views: {
            "header": {
                templateUrl: "../views/main.html",
                controller: 'mainCtrl',
                controllerAs: 'vm'
            },
            "content": {
                templateUrl: "../views/content.html",
                controller: 'contentCtrl',
                controllerAs: 'vm'
            }
        }
    });
}]);