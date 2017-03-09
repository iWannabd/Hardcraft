var app = angular.module('myApp',['ui.router']);

app.config(function ($stateProvider){
  var landing  = {
    name:"main",
    url:"/",
    controller:'landingCtrl',
    templateUrl:'templates/landing.htm'
  };
  $stateProvider.state(landing);
});

app.controller('mainCtrl',function ($scope) {
    $scope.hello = "Hai"
});
