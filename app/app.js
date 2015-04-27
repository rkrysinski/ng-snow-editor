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
        //$httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode($rootScope.conf.user + ':' + $rootScope.conf.passwd);
        //$httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common['Accept'] = 'application/json';
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
