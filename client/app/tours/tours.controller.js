'use strict';

angular.module('wanderlustApp')

  .directive('starRating', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-star"></span>'
    };
  })

  .directive('tagPrice', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-usd"></span>'
    };
  })

  .directive('tagCamera', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-camera"></span>'
    };
  })

  .directive('tagTree', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-tree-conifer"></span>'
    };
  })

  .factory('httpGET', function($http){
    return {
      getData: function(callback){
        return $http({
          method: 'GET',
          url: '/api/tours'
          }).success(function(data){
            callback(data);
          });
      }
    }
  })

  .controller('ToursCtrl', function ($scope, $location, $http, httpGET, toursFactory) {
    
    httpGET.getData(function(data){
      $scope.tours = data;
      console.log($scope.tours);
      toursFactory.tours = data;
      console.log(toursFactory);
    });

    //route to tour on click
    $scope.selectedTour = function(self){
        $location.path('/tours/showtour');
        toursFactory.selectedTour = self;
    };
  });
