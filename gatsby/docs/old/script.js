$(document).ready(function(){
	$(".headshot").mouseenter(function(){
		$(".sidenote").animate({ opacity : 1, top : "0em"}, "fast" );
	});
	$(".headshot").mouseleave(function(){
		$(".sidenote").animate({ opacity : 0, top : "-2em"}, "fast" );
	});
});