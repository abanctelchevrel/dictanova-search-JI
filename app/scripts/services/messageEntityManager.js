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
        var Message = Parse.Object.extend('Message');
        return {
            loadAll: function () {
                var deferred = $q.defer();
                var query = new Parse.Query(Message);
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
            },
            create: function (data) {
                var deferred = $q.defer();
                var message = new Message();
                message.set('message', data);
                message.save(null, {
                    success: function(message) {
                        deferred.resolve(message);
                    },
                    error: function(message, error) {
                        deferred.reject(error);
                    }
                });

                return deferred.promise;
            }
        };
}]);
