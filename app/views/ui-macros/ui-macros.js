angular
    .module('myApp.ui-macros', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('ui-macros', {
                url: '/ui-macros',
                templateUrl: 'views/ui-macros/ui-macros-tmpl.html',
                controller: 'UiMacrosCtrl'
            })
            .state('ui-macros.detail', {
                url: '/:sys_id',
                templateUrl: 'views/ui-macros/ui-macro-tmpl.html',
                controller: 'UiMacroCtrl'
            })
    })
    .controller('UiMacrosCtrl', function ($scope, uiMacrosSrv) {
        $scope.uiMacros = [];
        uiMacrosSrv.getAll(function (responseData) {
            $scope.uiMacros = responseData.result;
        });
    })
    .controller('UiMacroCtrl', function ($scope, $stateParams, uiMacrosSrv) {
        $scope.uiMacro = {};
        uiMacrosSrv.get({sys_id: $stateParams.sys_id}, function (responseData) {
            $scope.uiMacro = responseData.result;
            $scope.aceEditor = $scope.uiMacro.xml;
            $scope.save = function() {
                $scope.uiMacro.xml = $scope.aceEditor;
                uiMacrosSrv.update({sys_id: $scope.uiMacro.sys_id}, $scope.uiMacro);
            };
        });
    })