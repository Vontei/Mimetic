var matchPath = require('../lib/matching.js');


//what am i describing
describe('#matchPath', function () {

  it('returns an object that matches the inputs exactly', function () {
    //setup-define inputs
    var routeDefinitions =[
      {verb: 'get', path: '/me'}
    ];
    //execution -call your function
    var actual = matchPath(routeDefinitions, 'get', '/me');

    //expectation checks the result against an expected result
    expect(actual).toEqual({verb: 'get', path: '/me'})
  });
  // 
  // it('returns null if the verb does not match routeDefinitions', function () {
  //   //setup-define inputs
  //   var routeDefinitions =[
  //     {verb: 'get', path: '/me'}
  //   ];
  //   //execution -call your function
  //   var actual = matchPath(routeDefinitions, 'post', '/me');
  //
  //   // //expectation checks the result against an expected result
  //   // expect(matchPath(routeDefinitions, 'post', '/me')).toEqual(null)
  //   // expect(matchPath(routeDefinitions, 'get', '/you')).toEqual(null)
  // });

});
