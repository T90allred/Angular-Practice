(function() {

  var app = angular.module('customersApp', ['ngRoute']);

  app.config(function($RouteProvider) {
    $RouteProvider
      .when('/', {
        controller: 'CustomersController',
        templateUrl: 'app/views/customers.html'
      })
      .otherwise( { redirectTo: '/'});
  });

}());
