'use strict';

angular
    .module('myApp', [
        'ui.router',
        'ngResource',
        'ui.bootstrap',
        'myApp.views',
        'myApp.modal',
        'myApp.services'
    ])
    .config(function ($urlRouterProvider, $resourceProvider, $httpProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $httpProvider.defaults.withCredentials = true;
        $urlRouterProvider.otherwise('/overview');
    });
