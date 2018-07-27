$(function(){


	$(".global").hover(
		function () {
			$(this).find(".ddd").show()
		},
		function () {
			$(this).find(".ddd").hide()
		}
	);
	$(".global").click(

			console.log(123)

	);


	$(".close").click(function(){
		$(".box,.mask").hide();
	});

	$(window).scroll(function(){
		var s = $(document).scrollTop();	
		if(s > 88){
			$(".top_header").fadeIn();
		}else{
			$(".top_header").fadeOut();
		}
	});
	
	
	

});

function alertBox(){
	$(".box,.mask").show();
}
