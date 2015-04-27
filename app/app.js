'use strict';

angular
    .module('myApp', [
        'ui.router',
        'ngResource',
        'ui.bootstrap',
        'ui.ace',
        'myApp.views',
        'myApp.modal',
        'myApp.services'
    ])
    .config(function ($urlRouterProvider, $resourceProvider, $httpProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = true;
        //$httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common['Accept'] = 'application/json';
        $urlRouterProvider.otherwise('/overview');
    })
    .run(function ($rootScope, globalConf, modalSrv) {
        $rootScope.conf = globalConf;
        modalSrv.show('components/modal/modal-login-tmpl.html', globalConf, '', function(model) {
            $rootScope.conf.base = model.base;
            $rootScope.conf.user = model.user;
            $rootScope.conf.passwd = model.passwd

        });

    });
