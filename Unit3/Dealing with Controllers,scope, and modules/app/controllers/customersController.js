(function() {

  var CustomersController = function ($scope) {
  $scope.sortBy = 'name';
  $scope.reverse = false;

  $scope.customers =  [{joined: '2000-12-02', name: 'Derek', city: 'Pleasant Grove', orderTotal: '50.4334'},
            {joined: '2016-04-06', name: 'Sam', city: 'Lindon', orderTotal: '100.5555'},
            {joined: '2005-04-10', name: 'Nate', city: 'Orem', orderTotal: '34.4389'},
            {joined: '2015-12-23', name: 'Maddy', city: 'Washington', orderTotal: '123.2763'}];
  $scope.doSort = function(propName) {
    $scope.sortBy=propName;
    $scope.reverse = !$scope.reverse;
  };
};

  angular.module('customersApp')
    .controller('CustomersController', ['$scope', CustomersController]);
}());
