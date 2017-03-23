$(function(){	
	$("body").on("click",".addCart",function(event){
		var addcar = $(this);
		var target = $(".target");
		var src = $(this).parent().parent().parent().find("img").attr("src");
		var flyer = $('<img class="flyer" src="'+src+'">');	
//		flyer.offset({left:'event.clientX',top:'event.clientY'});
		$(this).parent().parent().parent().append(flyer);
//		console.log(flyer.css("left"))
//		var prePos = {
//				x:flyer.offset().left,
//				y:flyer.offset().top
//		}
		
//		console.log(target.offset().left)
//		var targetPos = {
//			x:target.offset().left-flyer.offset().left,
//			y:target.offset().top-flyer.offset().top
//		}
		$(".flyer").animate({left:"target.offset().left+'px'",top:"target.offset().top+'px'"});
//		console.log(targetPos.y)
//		var a = 0.002;
//		var b = (targetPos.y - a * targetPos.x * targetPos.x )/ targetPos.x;
//		var x = 0;
//		var timer = setInterval(function(){
//			x+=2;
//			flyer.offset({left:'prePos.x+x',top:'prePos.y+(a * x * x + b * x)'});
////			flyer.css("left","prePos.x+x");
////			flyer.css("top","prePos.y+(a * x * x + b * x)");
////			flyer.style.left = prePos.x+x+"px";
////			flyer.style.top = prePos.y+(a * x * x + b * x)+"px";
////			if(flyer.offsetLeft >= target.offsetLeft){
////				flyer.offsetLeft = target.offsetLeft;
////				flyer.offsetTop = target.offsetTop;
////				clearInterval(timer);
////			}
//		},1) 				
				
	})
	
	
	
})
