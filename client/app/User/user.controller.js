'use strict';

angular.module('wanderlustApp')
.controller('UserProfileController', function($scope){
  var temp = {
  	username:function(){return 'Pie'; }, 
  	trackedTours:function(){ return {a:1, b:2,c:3};}, 
  	createdTours:function(){ return {a:4, b:5, c:6}; },
  	score:function() { return 45;} 
  };

  $scope.username = {};
  $scope.trackedtours = {};
  $scope.score = {};
  $scope.createdTours = {};

  $scope.getUsername = function(){
  	$scope.username = temp.username();
  };

  $scope.getTrackedTours = function(){
  	$scope.trackedTours = temp.trackedTours();
  };

  $scope.getScore = function(){
   	$scope.score = temp.score();
  };

  $scope.getCreatedTours = function(){
  	$scope.createdTours = temp.createdTours();
  };

  $scope.setInitial = function(){
	$scope.getUsername();
  	$scope.getTrackedTours();
  	$scope.getScore();
  	$scope.getCreatedTours();
  };

  $scope.setInitial();
});

//just copy and past the structure, an example of what would be returned for each