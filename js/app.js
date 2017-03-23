var example = angular.module("example", ['ui.router']);

example.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('secure', {
            url: '/secure',
            templateUrl: 'templates/secure.html',
            controller: 'SecureController'
        });
    $urlRouterProvider.otherwise('/login');
});

example.controller("LoginController", function($scope) {

    $scope.login = function() {
      
      window.location.href =  "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9d8..z.hDcPLYDRVrSqJ5pcFcQCPXiP58IRC2vsAuzN0mKBzj.JT2UsxLrbPyWM.parNXJDbz3sbvKgdu&redirect_uri=http://localhost/index.html#/secure"
        }

});

example.controller("SecureController", function($scope) {

    $scope.accessToken = JSON.parse(window.localStorage.getItem("imgur")).oauth.access_token;

});