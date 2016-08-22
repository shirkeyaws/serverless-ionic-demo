(function(){
  'use strict';
  angular.module('app')
    .factory('Backend', Backend);

  function Backend($http, Storage, C){
    return {
      getPeople: getPeople,
      getTwitts: getTwitts
    };

    function getPeople(){
      return $http.get('https://ax835992ui.execute-api.ap-southeast-1.amazonaws.com/dev/myapp').then(function(res){
        return res.data
      })
    }
    function getTwitts(){
      return $http.get(C.backendUrl+'/twitts.json').then(function(res){
        return Storage.setTwitts(res.data).then(function(){
          return res.data;
        });
      });
    }
  }
})();
