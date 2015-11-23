'use strict';

/**
 * @ngdoc function
 * @name dictanovaSearchJiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dictanovaSearchJiApp
 */
angular.module('dictanovaSearchJiApp')
  .controller('MainCtrl', function(Conf, $http, $scope) {
    $scope.onPostButtonClicked = function() {
      $scope.isMessageCreationPending = true;
      //Example of message creation via a POST request : 
      var req = {
        url: 'https://api.parse.com/1/classes/Message/',
        headers: {
          'X-Parse-Application-Id': Conf.parseAppId,
          'X-Parse-REST-API-Key': Conf.parseRestApiKey
        },
        withCredentials: false,
        method: 'POST',
        data: {
          'message': 'Foo bar'
        }
      };

      $http(req)
        .then(function(res) {
          console.log(res);
          $scope.isMessageCreationPending = false;
        });

    }


  });