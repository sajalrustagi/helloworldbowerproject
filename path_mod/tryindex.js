(function(factory) {
  module.exports = factory();
}(function(){
  'use strict';

  var Index = function() {
    this.increaseCount = function (count) {
      return count + 1;
    };
  };
  return Index;
}));
