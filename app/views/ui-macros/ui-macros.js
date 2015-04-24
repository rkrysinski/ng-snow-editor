angular
    .module('myApp.ui-macros', [])
    .config(function ($stateProvider) {
        $stateProvider.state('ui-macros', {
            url: '/ui-macros',
            templateUrl: 'views/ui-macros/ui-macros-tmpl.html',
            controller: 'UiMacroCtrl'
        });
    })
    .controller('UiMacroCtrl', function ($scope, uiMacrosSrv) {
        $scope.uiMacros = [];

        uiMacrosSrv.fetch(function (responseData) {
            $scope.uiMacros = responseData.result;
        });
    })