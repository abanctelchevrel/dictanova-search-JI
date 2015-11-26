'use strict';

/**
 * @ngdoc function
 * @name dictanovaSearchJiApp.controller:actionLeverPopoverCtrl
 * @description
 * # actionLeverPopoverCtrl
 * Controller of the dictanovaSearchJiApp
 */
angular.module('dictanovaSearchJiApp')
    .controller('actionLeverPopoverCtrl', function ($scope, $route, messageEntityManager) {
        // query popover
        $scope.popoverElement = {
            isOpen: false,
            templateUrl: '../../views/popover/actionLeverPopover.html',

            create: function create(content) {
                messageEntityManager.create(content).then(function () {
                    $scope.popoverElement.isOpen = false;
                    $route.reload();
                });
            }
        };
    });
