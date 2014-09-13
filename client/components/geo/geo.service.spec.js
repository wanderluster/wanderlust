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
      expect(geo.support).toBe(true);
    });

    it('Should have a location object', function(){
      expect(geo.LocationObject).not.toBe(undefined);
      expect(typeof geo.LocationObject).toBe('object');
    });
  });

  describe('location', function(){
    it('Should have method location', function(done){
      expect(geo.location).not.toBe(undefined);
      expect(typeof geo.location).toBe('function');
    });

    it('Should return a promise', function(done){
      geo.location()
      .then(function(data){
        expect(data).not.toBe(undefined);
        done();
      })
      .catch(function(err){
        expect(err).not.toBe(undefined);
        done();
      });
    });
  });
});