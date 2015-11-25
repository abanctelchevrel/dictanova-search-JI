'use strict';

/**
 * @ngdoc function
 * @name dictanovaSearchJiApp.controller:SearchCtrl
 * @description
 * # MainCtrl
 * Controller of the dictanovaSearchJiApp
 */
angular.module('dictanovaSearchJiApp')
    .controller('SearchCtrl', function (Conf, $scope, $uibModal, messageEntityManager) {
        $scope.addActionLever = function(messageId) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/Modal/modalSearch.html',
                controller: 'ModalCtrl',

                resolve: {
                    id: function () {
                        return messageId;
                    }
                }

            });

            modalInstance.result.then(function () {
                console.log('Ok');
            }, function () {
               console.log('Cancel');
            });
        };

        $scope.isMessageLoadingPending = true;
        messageEntityManager.loadAll().then(function (messages) {
            $scope.isMessageLoadingPending = false;
            $scope.messages = messages;
        });
    });
