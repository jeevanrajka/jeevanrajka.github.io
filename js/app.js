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
    console.log($scope.authCode);
    if ($scope.authCode !== undefined && $scope.authCode !== null) {



        // use $.param jQuery function to serialize data from JSON 
        $scope.url = "grant_type=authorization_code&code=" + $scope.authCode + "&client_id=3MVG9d8..z.hDcPLYDRVrSqJ5pWGR1jR_nr62gB4mFDdhczCF88mUN3hSc0kpWqMCAgmjE1Ci9kyBPvhN892H&client_secret=484651292492712585&redirect_uri=https://jeevanrajka.github.io/oauth_callback.html"
        console.log($scope.url);


   /*     $http.post('https://login.salesforce.com/services/oauth2/token', $scope.url)
        .success(function(successData){
          console.log(successData.id);
        }); 
        */


                $http({
                method : "GET",
                url : "https://login.salesforce.com/services/oauth2/token?" + $scope.url
            }).then(function mySucces(response) {
                $scope.myWelcome = response.data;
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
                console.log(response.data.id);
            });
    
    
   /*     if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "https://login.salesforce.com/services/oauth2/token?"+$scope.url, true);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;

        $scope.id = xmlDoc.getElementByTagName("id");
        console.log($scope.id);
        */

        window.location.href = "https://jeevanrajka.github.io/#/secure";
       // https://jeevanrajka.github.io/oauth_callback.html

    }
    else {
        alert("Problem authenticating");
    }

});

example.controller("LoginController", function ($scope) {

    $scope.login = function () {
        window.location.href = "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9d8..z.hDcPLYDRVrSqJ5pWGR1jR_nr62gB4mFDdhczCF88mUN3hSc0kpWqMCAgmjE1Ci9kyBPvhN892H&redirect_uri=https://jeevanrajka.github.io/oauth_callback.html"
    }

});

example.controller("SecureController", function ($scope) {

    //  $scope.accessToken = JSON.parse(window.localStorage.getItem("imgur")).oauth.access_token;

});
