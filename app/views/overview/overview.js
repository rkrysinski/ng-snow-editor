angular
    .module('myApp.overview', [])
    .config(function ($stateProvider) {
        $stateProvider.state('overview', {
            url: '/overview',
            templateUrl: 'views/overview/overview-tmpl.html'
        });
    });