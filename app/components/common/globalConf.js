angular
    .module('myApp.globalConf', [])
    .service('globalConf', function () {
        return {
            base: 'https://dev13874.service-now.com',
            user: 'admin',
            passwd: ''
        }
    })
