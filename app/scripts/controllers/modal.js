'use strict';

/**
 * @ngdoc function
 * @name dictanovaSearchJiApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the dictanovaSearchJiApp
 */
angular.module('dictanovaSearchJiApp')
  .controller('ModalCtrl', function ($scope, $uibModalInstance, id) {
      $scope.messageId = id;
      $scope.ok = function () {
        $uibModalInstance.close();
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss();
      };
  });
