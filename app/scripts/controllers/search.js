'use strict';

/**
 * @ngdoc function
 * @name dictanovaSearchJiApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the dictanovaSearchJiApp
 */
angular.module('dictanovaSearchJiApp')
    .controller('SearchCtrl', function ($scope, messageEntityManager) {
        $scope.isMessageLoadingPending = true;
        messageEntityManager.loadAll().then(function (messages) {
            $scope.isMessageLoadingPending = false;
            $scope.messages = messages;
        });
    });
