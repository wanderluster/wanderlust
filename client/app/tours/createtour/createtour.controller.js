'use strict';

angular.module('wanderlustApp')
  .controller('CreatetourCtrl', function ($scope, $http, Auth) {
    $scope.spots = [{}];
    $scope.tour = {spots: $scope.spots};
    $scope.neighborhoods = ['Bayview', 'Bernal Heights', 'Castro', 'Chinatown', 'Crocker Amazon', 'Dogpatch', 'Downtown', 'Excelsior', 'Financial District', 'Glen Park', 'Golden Gate Park', 'Haight-Ashbury', 'Inner Richmond', 'Inner Sunset', 'Lakeshore', 'Marina', 'Mission', 'Nob Hill', 'Noe Valley', 'North Beach', 'Ocean View', 'Outer Mission', 'Outer Richmond', 'Outer Sunset', 'Pacific Heights', 'Parkside', 'Portola', 'Potrero Hill', 'Russian Hill', 'South of Market', 'Tenderloin', 'Visitacion Valley', 'West of Twin Peaks', 'Western Addition'];
    $scope.isValid = {};
    $scope.addSpot = function() {
      $scope.spots.push({});
    };

    $scope.createTour = function() {
      var title = $scope.tour.title;
      $scope.isValid = true;
      $scope.title = null;
      if(title && title.length > 3 ){
        console.log('Trying to POST ', $scope.tour);
        return $http.post('/api/tours', $scope.tour)
        .success(function(data) {
          console.log('Post successful!');
          $scope.title = title;
          return data;
        })
        .error(function(data) {
          console.log('Error sending post request', data);
          return data;
        });
      } else {
        $scope.isValid = false;
      }
    };

  });
