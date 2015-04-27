angular
    .module('myApp.globalConf', [])
    .service('globalConf', function () {
        return {
            base: 'https://dev13874.service-now.com/api/now/v1/table/',
            user: 'admin',
            passwd: 'Kry123$#'
        }
    })
