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

      getUsername: {
        method: 'GET',
        params: {
          controller:'username'
        }
      },

      getTrackedTours: {
        method: 'GET',
        params: {
          controller:'trackedtours'
        }
      },

      getScore: {
        method: 'GET',
        params: {
          controller: 'score'
        }
      },

      getCreatedTours: {
        method: 'GET',
        params: {
          controller: 'createdtours'
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
