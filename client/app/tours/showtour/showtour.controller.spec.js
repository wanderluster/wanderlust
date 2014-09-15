'use strict';

describe('Controller: ShowtourCtrl', function () {

  // load the controller's module
  beforeEach(module('wanderlustApp'));

  var ShowtourCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, toursFactory) {

    scope = $rootScope.$new();
    scope.tours = [
    {
      name: 'The Mission Mission',
      author: 'Ash Ketchum',
      length: 'all day',
      description: 'Note all clues hitherto are bounded by the following streets: 16th and 26th and Dolores and one after Balmy (referred to as The Mission). Hint: a majority of the spots lie on or very close to Valencia. The attendees of the scavenger hunt will be referred to as the “Scavengers”. DISCLAIMER: once The Hunt has begun, the use of any smartphone technology for navigational purposes will be frowned upon.',
      spots: {
        1: {
          number: 1,
          info: 'Obtain a wooden sword from a pirate shop',
          points: '10'
        },
        2: {
          number: 2,
          info: 'Find the following graffiti',
          points: '5'
        },
        3: {
          number: 3,
          info: 'Catch Pikachu',
          points: '20'
        }
      }

    }
    ];
    

  }));

  it('should ...', function () {
    // console.log(scope);
    expect(1).toEqual(1);
  });
});
