angular
    .module('myApp.modal', [])
    .service('modalSrv', function ($modal) {
        return {
            show: function (tpl, itemData, size, callback) {
                var myModal = $modal.open({
                    templateUrl: tpl,
                    size: size,
                    resolve: {
                        model: function () {
                            return itemData;
                        }
                    },
                    controller: function ($scope, model) {
                        $scope.model = model;
                        $scope.ok = function (valid) {
                            if (valid) {
                                myModal.close($scope);
                            } else {
                                $scope.errorMsg = true;
                            }
                        };
                        $scope.cancel = function () {
                            myModal.dismiss('cancel');
                        };
                    }
                });
                myModal.result.then(function (modalData) {
                    callback(modalData);
                }, function (info) {
                    console.log(info);
                })
            }
        }
    })
