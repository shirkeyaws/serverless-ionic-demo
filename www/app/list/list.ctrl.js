(function(){
  'use strict';
  angular.module('app')
    .controller('ListCtrl', ['$scope', '$state', '$http', ListCtrl]);

  function ListCtrl($scope, $state, $http){
    var fn = {}, data = {};
    // https://ax835992ui.execute-api.ap-southeast-1.amazonaws.com/dev/myapp
    //data = {"records":[{"text":"Hello Singapore","id":"999","lastUpdated":"1471836305171","ip":"127.0.0.1","user":"kevin"},{"text":" hahahahaha  : from Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 ","id":"33","lastUpdated":"1471853830115","ip":"54.240.199.105","user":"aaa"},{"text":"aaaaa","id":"2","lastUpdated":"1471853155177","ip":"203.116.140.180","user":"LCW"},{"text":"123","id":"asdzxc","lastUpdated":"1471836286149","ip":"asd","user":"asd"},{"text":"jmnmmm","id":"8","lastUpdated":"1471834167505","ip":"9.9.9.9","user":"iii"},{"text":" undefined  : from Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_4 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G35 Safari/601.1 ","id":"1","lastUpdated":"1471861730225","ip":"180.255.252.186","user":"Mo"},{"text":"test by","id":"777","lastUpdated":"1471853105111","ip":"203.116.140.180","user":"durian"},{"text":"sddsfdsgsg","id":"88","lastUpdated":"1471833493603","ip":"1.2.3.4","user":"mma"},{"text":"Hello Singapore","id":"27","lastUpdated":"1471773375971","ip":"127.0.0.1","user":"John Doe"},{"text":"hello","id":"test","lastUpdated":"1471853099686","ip":"203.116.140.180","user":"test"},{"text":"Welcome to AWS training","id":"hello","lastUpdated":"1471836994618","ip":"10.10.10.10","user":"tchernsan"},{"text":"try to catch my fake ip","id":"555","lastUpdated":"1471853072451","ip":"203.116.140.180","user":"kevin"},{"text":"blablabla","id":"123456789","lastUpdated":"1471836267718","ip":"10.255.255.100","user":"abcdefgh"},{"text":"123","id":"asd","lastUpdated":"1471836281377","ip":"asd","user":"asd"},{"text":"1.1.1.","id":"11","lastUpdated":"1471781220373","ip":"1.1.1.1","user":"Fft"},{"text":"qwe","id":"qwe","lastUpdated":"1471853064469","ip":"203.116.140.180","user":"qwe"},{"text":"I am chernsan","id":"123","lastUpdated":"1471853069909","ip":"203.116.140.180","user":"tohchernsan"},{"text":"walau eh","id":"asda","lastUpdated":"1471836415566","ip":"asdasd","user":"asdasd"},{"text":"12","id":"12","lastUpdated":"1471836230531","ip":"12","user":"12"},{"text":"lambda test","id":"991","lastUpdated":"1471838267670","ip":"8.8.8.8","user":"tester2"}]}
    $scope.fn = fn;
    $scope.data = data;
    $http({
      method: 'GET',
      url: 'https://ax835992ui.execute-api.ap-southeast-1.amazonaws.com/dev/myapp'
    }).then(function successCallback(response) {
      console.log('success:', response);
      data = response.data;
      $scope.data = response.data;
    }, function errorCallback(response) {
      // console.log('failure:', response);
    });
  }
})();
