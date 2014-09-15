'use strict';
angular.module('wanderlustApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user_profile', {
        url: '/user_profile',
        templateUrl: 'app/User/user.html',
        controller: 'UserProfileController'
      });
  });