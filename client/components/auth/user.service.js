'use strict';

angular.module('wanderlustApp')
  .factory('User', function ($resource) {
    // var currentUser = Auth.getCurrentUser();
    // console.log(currentUser);
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      addTour: {
        method: 'PUT',
        params: {
          controller:'tours'
        }
      }
    });
  });
