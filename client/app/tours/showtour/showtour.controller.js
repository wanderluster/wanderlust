'use strict';

angular.module('wanderlustApp')

  .factory('GoExplore', function(){
    //this function activates on ng-click for the button "Go Exploring!"
    return {
      glhf: function(){
        alert('good luck, have fun!');
      }
    };
  })

  .controller('ShowtourCtrl', function ($scope, GoExplore, toursFactory, User) {
    $scope.glhf = function(){
      User.addTour({'tourObject': this.tours});
      return GoExplore.glhf();      
    }; 
    $scope.tours = toursFactory.tours[toursFactory.selectedTour];
  });
