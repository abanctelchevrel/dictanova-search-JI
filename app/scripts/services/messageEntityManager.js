'use strict';

/**
 * @ngdoc service
 * @name dictanovaSearchJiApp.messageEntityManager
 * @description
 * # messageEntityManager
 * Factory in the dictanovaSearchJiApp.
 */
angular.module('dictanovaSearchJiApp')
    .factory('messageEntityManager', ['$http', '$q', function ($http, $q) {
        return {
            loadAll: function () {
                var message = Parse.Object.extend('Message');
                var deferred = $q.defer();
                var query = new Parse.Query(message);
                var messages = [];

                query.find({
                    success: function (result) {
                        for (var i = 0; i < result.length; ++i) {
                            messages.push({id: result[i].id, data: result[i].get('message')});
                        }
                        deferred.resolve(messages);
                    },
                    error: function (error) {
                        deferred.reject(error);
                    }
                });

                return deferred.promise;
            }
        };
}]);
