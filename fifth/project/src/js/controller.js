define(["app"],function(app){
	app.controller("bookCtrl",function($scope, $stateParams,$http){
		if ($stateParams.type) {
			$http.get("../public/jsons/books" + $stateParams.type + ".json")
		     .success(function(data){
		     	 $scope.books = data;
		     })
		}
		
	}).controller("indexCtrl", function($scope,$http){
			function getgoods(type,obj){
				$http({
					method:"get",
					url:"../public/php/getgoods.php",
					params:{
						"type":type
					},
					responseType:"json"
				}).success(function(data){
					console.log(data)
					$scope[obj]=data;
				})
			}
			getgoods("mainpush","mainpushs");
			getgoods("recommend","recommends");
			getgoods("newpro","newpros");
	})
})
