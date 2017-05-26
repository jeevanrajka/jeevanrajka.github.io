var app = angular.module('AEMPOCApp', []);

app.controller('loginCtrl', function ($scope, $http, $location) {
	
	console.log("inside controller");


window.location.href = "https://login.salesforce.com/services/oauth2/authorize?response_type=token&client_id=3MVG9d8..z.hDcPLJIboTbSCe.hQL0J7cxs90k3ygaESovPoxopXp62fv6l.cBqJV72HVEM5KMQwPmNsgrbdI&redirect_uri=https://jeevanrajka.github.io/success.html";

});


app.controller('successCtrl', function ($scope, $http) {
    $scope.hide = true;

	 $scope.a = (document.URL).split("#")[1];
	 $scope.b = $scope.a.split("=")[0];
	 if($scope.b == "access_token"){
		 $scope.hide = false;
		 $scope.accessToken = $scope.a.split("access_token=")[1];
		 $scope.accessToken = $scope.accessToken.split("&refresh_token")[0];
         console.log($scope.accessToken);
		 $scope.refreshToken = $scope.a.split("refresh_token=")[1];
		 $scope.refreshToken = $scope.refreshToken.split("&expires_in=")[0];
         console.log($scope.refreshToken);
	 }
	 
	 else
	 {
		 $scope.hide = false;
	 }

   
});
