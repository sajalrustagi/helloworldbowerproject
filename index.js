(function(factory) {
    module.exports = factory(require('./path_mod/tryindex.js'),require('./path_api/api.js'));
}(function(tryIndex,api){
  'use strict';

  var Index = {
    TryIndex: tryIndex,
    Api : api
  };

  return Index;
}));
