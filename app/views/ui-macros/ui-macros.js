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
            $scope.save = function () {
                $scope.uiMacro.xml = $scope.aceEditor;
                uiMacrosSrv.update({sys_id: $scope.uiMacro.sys_id}, $scope.uiMacro);
            };
        });
        $scope.aceLoaded = function (_editor) {
            _editor.commands.addCommands([{
                name: "showSettingsMenu",
                bindKey: {win: "Ctrl-q", mac: "Command-q"},
                exec: function(editor) {
                    ace.config.loadModule("ace/ext/settings_menu", function (module) {
                        module.init(editor);
                        editor.showSettingsMenu()
                    })
                },
                readOnly: true
            }]);
            _editor.commands.addCommand({
                name: "showKeyboardShortcuts",
                bindKey: {win: "Ctrl-Alt-h", mac: "Command-Alt-h"},
                exec: function (editor) {
                    ace.config.loadModule("ace/ext/keybinding_menu", function (module) {
                        module.init(editor);
                        editor.showKeyboardShortcuts()
                    })
                }
            })

        };
    })