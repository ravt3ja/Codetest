var app = angular.module("myapp", []);
app.controller("SearchController", function ($scope, $http) {
    
    $http.get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {     
      $scope.data = response.data;
  });
    
});