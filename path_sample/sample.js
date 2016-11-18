(function(factory) {
  module.exports = factory(require('../index'));
}(function(sdk){
  'use strict';

  var api = new sdk.Api();
  var model = new sdk.TryIndex() ;

  (function() {
    var count = api.initializeCount() ;
    console.log(model.increaseCount(count));
  })();

}));
