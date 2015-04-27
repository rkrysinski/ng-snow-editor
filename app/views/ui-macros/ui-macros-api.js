angular
    .module('myApp.ui-macros-api', ['ngResource'])
    .service('uiMacrosSrv', function ($resource, $rootScope, Base64) {
        return $resource($rootScope.conf.base + 'sys_ui_macro/:sys_id', {sys_id: "@sys_id"}, {
            getAll: {
                method: 'GET',
                params: {
                    sysparm_fields: 'sys_name,sys_id'
                },
                headers: {
                    Authorization: 'Basic ' + Base64.encode($rootScope.conf.user + ':' + $rootScope.conf.passwd)
                }
            },
            get: {
                method: 'GET',
                headers: {
                    Authorization: 'Basic ' + Base64.encode($rootScope.conf.user + ':' + $rootScope.conf.passwd)
                }
            },

            update: {
                method: 'PUT',
                headers: {
                    Authorization: 'Basic ' + Base64.encode($rootScope.conf.user + ':' + $rootScope.conf.passwd)
                }
            },
            add: {
                method: 'POST'
            }
            //delete: {
            //    method: 'DELETE'
            //}
            //https://dev13874.service-now.com/api/now/v1/table/sys_dictionary?sysparm_query=internal_type=xml^ORinternal_type=script
        });
    })
