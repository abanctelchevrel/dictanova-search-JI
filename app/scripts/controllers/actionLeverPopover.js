'use strict';

/**
 * @ngdoc function
 * @name dictanovaSearchJiApp.controller:actionLeverPopoverCtrl
 * @description
 * # actionLeverPopoverCtrl
 * Controller of the dictanovaSearchJiApp
 */
angular.module('dictanovaSearchJiApp')
    .controller('actionLeverPopoverCtrl', function ($scope) {
        // query popover
        $scope.popoverElement = {
            isOpen: false,
            templateUrl: '../../views/popover/actionLeverPopover.html',
            open: function open(id) {
                $scope.data = id;
                $scope.popoverElement.data = 'Hello!';
            },

            close: function close() {
                $scope.popoverElement.isOpen = false;
            }
        };
    });
