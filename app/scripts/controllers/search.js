'use strict';

/**
 * @ngdoc function
 * @name dictanovaSearchJiApp.controller:SearchCtrl
 * @description
 * # MainCtrl
 * Controller of the dictanovaSearchJiApp
 */
angular.module('dictanovaSearchJiApp')
  .controller('SearchCtrl', function(Conf, $http, $scope) {
    $scope.onLoadButtonClicked = function() {
      $scope.isMessageLoadingPending = true;
      var Message = Parse.Object.extend('Message');
      var query = new Parse.Query(Message);
      query.find({
        success: function(result) {
          var messages = [];
          for (var i = 0; i < result.length; ++i) {
            messages.push({ id : result[i].id, data : result[i].get('message')});
          }
          $scope.isMessageLoadingPending = false;
          $scope.messages = messages;
          $scope.$apply();
        },
        error: function(error) {
          console.log('Error' + error);
        }
      });
    };
  });
