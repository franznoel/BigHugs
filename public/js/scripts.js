'use strict';

angular.module('bighugs',[
  'ngRoute'
]);

angular.module('bighugs')
  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider,$routeProvider) {
      $routeProvider
        .when('/',{
          templateUrl: 'views/login.html'
        })
        .when('/dashboard',{
          templateUrl: 'views/dashboard.html'
        })
        .when('/services',{
          templateUrl: 'views/services.html'
        })
        .when('/service-order',{
          templateUrl: 'views/service-order.html'
        })
        .when('/service-order-detail',{
          templateUrl: 'views/service-order-detail.html'
        })
        .when('/sign-up',{
          templateUrl: 'views/sign-up.html'
        })
        .otherwise({
          templateUrl: '404.html'
        });

      $locationProvider.html5Mode(history.pushState);

    }
  ]);

angular.module('bighugs');
