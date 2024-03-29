require.config({
	baseUrl:"../library/",
	shim:{
		"bootstrap":{
			deps:["jquery"],
			exports:"bot"
		},
		"ui-router":{
			deps:["angular"]
		},
		"angular":{
			exports:"angular"
		}
	},
	paths:{
		"jquery":"jquery/jquery-1.11.3",
		"bootstrap":"bootstrap/js/bootstrap",
		"angular":"angular/angular",
		"ui-router":"angular/angular-ui-router",
		"app":"../src/js/app",
		"controller":"../src/js/controller",
		"router":"../src/js/router"
	}
})
require(["angular","ui-router","jquery","bootstrap","app","router","controller"],function(angular){
	angular.bootstrap(document,["app"]);
})
