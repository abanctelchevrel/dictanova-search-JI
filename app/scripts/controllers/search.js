'use strict';

/**
 * @ngdoc function
 * @name dictanovaSearchJiApp.controller:SearchCtrl
 * @description
 * # MainCtrl
 * Controller of the dictanovaSearchJiApp
 */
angular.module('dictanovaSearchJiApp')
    .controller('SearchCtrl', function (Conf, $scope, messageEntityManager) {
        $scope.isMessageLoadingPending = true;
        messageEntityManager.loadAll().then(function (messages) {
            $scope.isMessageLoadingPending = false;
            $scope.messages = messages;
        });
    });
