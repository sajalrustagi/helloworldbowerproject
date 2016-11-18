(function(factory) {
  module.exports = factory(require('../index'),require('chai'));
}(function(sdk,chai){
  'use strict';

  var api = new sdk.Api();
  var model = new sdk.TryIndex() ;

  describe('CreateUserApiTest', function() {

    var assert =  chai.assert;

    this.timeout("1000");

    before(function(done) {
      done();
    });

    it('testCount', function(done) {
      var count = api.initializeCount() ;
      var new_count = model.increaseCount(count);
      assert.isNotNull(new_count);
      done();
    });

  });

}));
