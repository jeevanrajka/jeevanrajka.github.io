var example = angular.module("example", ['ui.router']);

example.config(function ($stateProvider, $urlRouterProvider) {
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

example.controller("HttpGetController", function ($scope, $http) {

    $scope.authCode = (document.URL).split("=")[1];
    //$scope.authCode = $scope.authCode.split("&")[0];
   // alert($scope.authCode);
    if ($scope.authCode !== undefined && $scope.authCode !== null) {



        // use $.param jQuery function to serialize data from JSON 
        $scope.postData = "grant_type=authorization_code&code=" + $scope.authCode + "&client_id=3MVG9d8..z.hDcPLYDRVrSqJ5pcFcQCPXiP58IRC2vsAuzN0mKBzj.JT2UsxLrbPyWM.parNXJDbz3sbvKgdu&client_secret=5679420362518686539&redirect_uri=http://localhost/oauth/oauth_callback.html"
      // scope.postData = "grant_type=refresh_token&client_id=3MVG9d8..z.hDcPLYDRVrSqJ5pWGR1jR_nr62gB4mFDdhczCF88mUN3hSc0kpWqMCAgmjE1Ci9kyBPvhN892H&refresh_token=5Aep8613hy0tHCYdhyrLKTOqkGaICl.XlyhckFVF1waP8Z46N4WkdMfkRig7rbyPvAWFxTxh31dyLUvBIa8ZsHt&format=json"
        console.log("$scope.postData:::",$scope.postData);


       /*    $http.post('https://login.salesforce.com/services/oauth2/token', $scope.postData)
           .success(function(successData){
             alert("hi");
           });*/

/*var dataURL1  = "https://login.salesforce.com/services/oauth2/token";
var x = dataURL1 + "grant_type=authorization_code&code=";
console.log("x:",x);

var aduthCode = x + $scope.authCode;
console.log("aduthCode:",aduthCode);

console.log("dataUrl ::",dataURL1);

var dataURL2 =  "&client_id=3MVG9d8..z.hDcPLYDRVrSqJ5pcFcQCPXiP58IRC2vsAuzN0mKBzj.JT2UsxLrbPyWM.parNXJDbz3sbvKgdu&client_secret=5679420362518686539&redirect_uri=http://localhost/oauth/oauth_callback.html";
console.log("dataUrl ::",dataURL2);

var DataUrl = dataURL2 + dataURL2;
console.log("dataUrl ::",DataUrl);*/
$scope.a = "https://login.salesforce.com/services/oauth2/token?"+$scope.postData;
alert($scope.a);
var req = {
    method: 'POST',
    url: "https://login.salesforce.com/services/oauth2/token",
    crossDomain: true,
    headers: {
        'Content-Type': 'application/json' , 
	       'Access-Control-Allow-Origin': '*',
	        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
	      'Access-Control-Allow-Headers':'X-Requested-With'	
    },
    params: {   grant_type : "authorization_code", 
                code : $scope.authCode,
                client_id : "3MVG9d8..z.hDcPLYDRVrSqJ5pcFcQCPXiP58IRC2vsAuzN0mKBzj.JT2UsxLrbPyWM.parNXJDbz3sbvKgdu",
                client_secret : 5679420362518686539,
                redirect_uri : "http://localhost/oauth/oauth_callback.html"
              }
}

$http(req).then(function (responce) {
    alert("success");
}, function (responce) {
    alert("error");
});
        
        

    }
    else {
        alert("Problem authenticating");
    }

});

example.controller("LoginController", function ($scope) {

    $scope.login = function () {
        window.location.href = "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9d8..z.hDcPLYDRVrSqJ5pdJna2uaTNMqqhdBxwWKPGWbMfJWnsboxtw6xgr8iyvltmL75.WAqzwy2FbW&redirect_uri=https://jeevanrajka.github.io/oauth_callback.html"
    }

});

example.controller("SecureController", function ($scope) {

    //  $scope.accessToken = JSON.parse(window.localStorage.getItem("imgur")).oauth.access_token;

});
