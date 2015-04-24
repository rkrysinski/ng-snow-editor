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
        //$httpProvider.defaults.withCredentials = true;
        //$httpProvider.defaults.useXDomain = true;
        $urlRouterProvider.otherwise('/overview');
    })
    .run(function ($rootScope, globalConf, modalSrv) {
        $rootScope.conf = globalConf;
        if (globalConf.passwd === '') {
            modalSrv.show('components/modal/modal-login-tmpl.html', null, 'sm', function (model) {
                globalConf.passwd = model.pass;
            });
        }
    });
