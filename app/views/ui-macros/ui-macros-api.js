angular
    .module('myApp.ui-macros-api', ['ngResource'])
    .service('uiMacrosSrv', function ($resource, $rootScope, Base64) {
        return $resource($rootScope.conf.base + 'sys_ui_macro?sysparm_fields=sys_name,sys_id', {}, {
            fetch: {
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + Base64.encode($rootScope.conf.user + ':' + $rootScope.conf.passwd)
                }
            },
            update: {
                method: 'PUT'
            },
            add: {
                method: 'POST'
            }
            //delete: {
            //    method: 'DELETE'
            //}
        });
    })
