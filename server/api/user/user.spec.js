'use strict';

// var should = require('should');
var chai = require('chai');
var should = chai.Should();
var app = require('../../app');
var request = require('supertest');
var User = require('./user.model');
var Tour = require('../tour/tour.model');

var tourCreater = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

var traveler = new User({
  provider: 'local',
  name: 'traveler',
  email: 'traveler@123.com',
  password: 'password'
})

var tour1 = new Tour({
  title: 'The Mission Mission',
  author: tourCreater._id,
  description: 'dig out the places to eat around Hack Reactor',
  reviews:[{body:'good',rating:4},{body:'okay',rating:3}],
  city: 'San Francisco',
  cost:'$$',
  duration: 'All day',
  theme: ['Romantic'],
  neighborhood: ['Mission'],
  spots:[{task: 'take a pic', points: 5}, {task: 'get a sword', points: 10}]
});

var tour2 = new Tour({
  title: 'Grand Sunset',
  author: tourCreater._id,
  city:'San Francisco'
});

// beforeEach(function(done){
//   Tour.remove().exec().then(function(){
//     Tour.create(tour1,tour2,function(err){
//       if(err) done(err);
//       done();
//     });
//   });
// });

describe('Get /api/user/:id', function() {
  var token;
  beforeEach(function(done){
    User.create(traveler).then(function(){
      request(app)
        .post('/auth/local')
        .send({
          email: 'traveler@123.com',
          password: 'password'
        })
        .expect(200)
        .end(function(err,res){
          token = res.body.token;
          done();
        })
    });
  });

  afterEach(function(done){
    User.remove().exec().then(function(){
      Tour.remove().exec().then(function(){
        done();
      });
    });
  });

  it(' /username should provide username for requested user', function(done){
    request(app)
      .get('/api/users/' + traveler._id + '/username')
      .expect(200)
      .set('authorization', 'Bearer ' + token)
      .end(function(err, res){
        if(err){
          console.log(err)
        }
        var name = res.body.name
        name.should.equal('traveler');
        done();
      });
  })

  it(' /username should provide username for requested user', function(done){
    request(app)
      .get('/api/users/' + traveler._id + '/username')
      .set('authorization', 'Bearer ' + token)
      .expect(200)
      .end(function(err, res){
        if(err){
          console.log(err)
        }
      });
    request(app)
      .get('/api/users/' + traveler._id + '/trackedtours')
      .set('authorization', 'Bearer ' + token)
      .expect(200)
      .end(function(err, res){
        if(err){
          console.log(err)
        }
        console.log(res.body);
        done();
      });
  })

  it(' /username should provide username for requested user', function(done){
    request(app)
      .get('/api/users/' + traveler._id + '/username')
      .expect(200)
      .set('authorization', 'Bearer ' + token)
      .end(function(err, res){
        if(err){
          console.log(err)
        }
        var name = res.body.name
        name.should.equal('traveler');
        done();
      });
  })
})







describe('PUT /api/users/:id/tours', function() {
  var token;
  beforeEach(function(done){
    User.create(traveler).then(function(){
      request(app)
        .post('/auth/local')
        .send({
          email: 'traveler@123.com',
          password: 'password'
        })
        .expect(200)
        .end(function(err,res){
          token = res.body.token;
          done();
        })
    });
  });

  afterEach(function(done){
    User.remove().exec().then(function(){
      Tour.remove().exec().then(function(){
        done();
      });
    });
  });

  it('should use PUT to add to a user field', function(done){
    request(app)
      .put('/api/users/' + traveler._id + '/tours')
      .set('authorization', 'Bearer ' + token)
      .send({'tourObject':{'key':'value'}})
      .expect(200)
      .end(function(err, res){
        if(err){
          console.log(err)
        }
        done();
      });
  })
  it('should add an object to the tours array', function(done){
    request(app)
      .put('/api/users/' + traveler._id + '/tours')
      .set('authorization', 'Bearer ' + token)
      .send({'tourObject':{'key':'value'}})
      .expect(200)
      .end(function(err, res){
        if(err){
          console.log(err)
        }
        var tours = res.body.tours;
        tours.should.be.a('array');
        tours.length.should.equal(1);
        var testTour = tours[0];
        testTour.key.should.equal('value');
        done();
      });
  });

});


describe('GET /api/user/:id/tours', function(){
  var token;

  beforeEach(function(done){
    User.create(traveler).then(function(){
      request(app)
        .post('/auth/local')
        .send({
          email: 'traveler@123.com',
          password: 'password'
        })
        .expect(200)
        .end(function(err,res){
          token = res.body.token;
          done();
        })
    });
  });

  afterEach(function(done){
    User.remove().exec().then(function(){
      Tour.remove().exec().then(function(){
        done();
      });
    });
  });

  it('should not be able to get the tours if not the author', function(done){
    request(app)
      .get('/api/users/' + tourCreater._id + '/tours')
      .set('authorization', 'Bearer ' + token)
      .expect(401)
      .end(function(err,res){
        done();
      });
  });

  it('should be able to get the tours if the author', function(done){
    Tour.create({title: 'created by traveler', author: traveler._id}).then(function(tour){
      request(app)
        .get('/api/users/' + traveler._id + '/tours')
        .set('authorization', 'Bearer ' + token)
        .expect(200)
        .end(function(err,res){
          res.body.length.should.equal(1);
          done();
        });
    });
  });

});

