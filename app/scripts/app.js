'use strict';

/**
 * @ngdoc overview
 * @name dictanovaSearchJiApp
 * @description
 * # dictanovaSearchJiApp
 *
 * Main module of the application.
 */
angular
  .module('dictanovaSearchJiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function() {
    Parse.initialize("RqcXBJok81aVrDb32C9wbcCrW7i6sv9cwLC15jNl", "3gmt89OcVsGUp2K7DwfIYnEUDJ1y7iLIbmtBqFdw");
    // var TestObject = Parse.Object.extend("TestObject");
    // var testObject = new TestObject();
    // testObject.save({
    //   foo: "bar"
    // }).then(function(object) {
    //   alert("yay! it worked");
    // });
  });