'use strict';

angular.module('myApp.routing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/medstudents', {
    templateUrl: 'volunteers/medstudents.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.when('/physicians', {
    templateUrl: 'volunteers/physicians.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.when('/socialwork', {
    templateUrl: 'volunteers/socialwork.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.when('/occupationaltherapy', {
    templateUrl: 'volunteers/occupationaltherapy.html',
    controller: 'RoutingCtrl'
  });
}])

.controller('RoutingCtrl', [function() {

}]);