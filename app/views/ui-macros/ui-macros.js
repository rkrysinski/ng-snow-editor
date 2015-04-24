angular
    .module('myApp.ui-macros', [])
    .config(function ($stateProvider) {
        $stateProvider.state('ui-macros', {
            url: '/ui-macros',
            templateUrl: 'views/ui-macros/ui-macros-tmpl.html'
        });
    });