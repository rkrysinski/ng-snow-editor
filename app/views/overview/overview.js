angular
    .module('myApp.overview', [])
    .config(function ($stateProvider) {
        $stateProvider.state('overview', {
            url: '/overview',
            templateUrl: 'views/overview/overview-tmpl.html',
            controller: 'OverviewCtrl'
        });
    })
    .controller('OverviewCtrl', function ($scope, globalConf) {
        $scope.globalConf = globalConf;
    });