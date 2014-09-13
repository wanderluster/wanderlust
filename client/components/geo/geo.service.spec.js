'use strict';
describe('Location Service Api', function(){
  beforeEach(module('wanderlustApp'));
  var geo;

  beforeEach(inject(function(Geo){
  	geo = Geo;
  }));
  
  describe('Navigator.geolocation', function(){
    it('Should have supported status', function(){
      console.log(geo.error);
      expect(geo.support).not.toBe(undefined);
    });

    it('Should have a location object', function(){
      if(geo.support){
        expect(geo.LocationObject).not.toBe(undefined);
        expect(typeof geo.LocationObject).toBe('object');
      }
    });
  });

  describe('location', function(){
    it('Should have method location', function(){
      if(geo.support){
        expect(geo.location).not.toBe(undefined);
        expect(typeof geo.location).toBe('function');
      }
    });

    it('Should return a promise', function(done){
      if(geo.support){
        var position = geo.location();
        position.then(function(data){
          expect(data).not.toBe(undefined);
          console.log(data);
          return done();
        })
        .catch(function(err){
          expect(err).not.toBe(undefined);
          console.log(err);
          return done();
        });
      }
    });
  });

  describe('watch', function(){
    it('Should have method watch', function(){
      if(geo.support){
        expect(geo.watch).not.toBe(undefined);
        expect(typeof geo.location).toBe('function');
      }
    });

    it('Should return a promise', function(done){
      if(geo.support){
        var position = geo.watch();
        position.then(function(data){
          expect(data).not.toBe(undefined);
          console.log(data);
          return done();
        })
        .catch(function(err){
          expect(err).not.toBe(undefined);
          console.log(err);
          return done();
        });
      }
    });
  });
});