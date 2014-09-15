'use strict';
angular.module('wanderlustApp')
.factory('Geo', function($q){
  var geo = {};
  var watchId = [];
  geo.error = [];

  var loc = navigator.geolocation;
  //Promisifies the geolocation functions
  function promisify(functionName, position){
   	var defer = $q.defer();
  	var res = resolver(defer);
  	var id = functionName.call(loc, res.success, res.failure, position);
  	if(id !== undefined){
  		watchId.push(id);
  	}
  	return defer.promise; 	
  }
  //Used for resolving promises
  function resolver(deferObject){
  	var defer = deferObject;
  	return {
  		success: function(data){
  			defer.resolve(data);
  		},
  		failure: function(err){
  			geo.err.push(err);
  			defer.reject(err);
  		}
  	};
  }
  if(loc !== undefined){

  	//Gets the users current position
  	//position param is an optional position object
  	var getUserLocation = function(position){
  	  return promisify(loc.getCurrentPosition, position);
  	};

  	var watchUserPosition = function(position){
  		return promisify(loc.watchPosition, position);
  	};
  	var stopWatch = function(){
  		watchId.forEach(function(id){
  			loc.clearWatch(id);
  		});
  	};

  	//Added to geo object to be returned
  	geo.support = true;
  	geo.LocationObject = loc;
  	geo.location = getUserLocation;
  	geo.watch = watchUserPosition;
  	geo.stop = stopWatch;

  } else {
  	geo.support = false;
  	geo.error.push({NOT_SUPPORTED:'Geolocation services are not supported by your browser'});
  }
	return geo;
});