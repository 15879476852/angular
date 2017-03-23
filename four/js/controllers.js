var app = angular.module("myApp", []);
app.controller("formCtrl", function($scope, $http){
	$scope.submitForm = function(valid) {
//		$http({
//			method: "get",
//			url:"http://127.0.0.1/day33_angular03/user.php",
//			params:{
//				"user": $scope.user
//			},
//			responseType:"json",
//			headers: { "Content-Type": "application/x-www-form-urlencoded" }
//		}).success(function(data){
//			console.log(data);
//		})
		$http.get("http://127.0.0.1/day33_angular03/user.php",{user: $scope.user}).success(function(data){
			console.log(data);
		});

		
//		$.post("user.php",{user:"zhangsan"},function(data){
//			console.log(data);
//		})
	}
})