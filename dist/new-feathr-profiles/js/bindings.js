

function toggleMenu() {
	var sliderLocation = $('.slider').css('left');
	if (sliderLocation != '0px') {
		$('.slider').animate({'left' : '0px'}, 'fast');
		$('.box1, .box4, .box5, .box6').css({'display':'block'});
		$('.box2').css({'display':'none'});
	}
	else {
		$('.slider').animate({'left' : '-320px'}, 'fast');
		$('.box1, .box4, .box5, .box6').css({'display':'none'});
		$('.box2').css({'display':'block'});
	}
}

$('.box1').on('click', function(){
	$('.screen_switch').html('<img src="./img/notes.jpg" />');
	toggleMenu();
});

$('.box4').on('click', function(){
	$('.screen_switch').html('<img src="./img/twitter.jpg" />');
	toggleMenu();

});

$('.box5').on('click', function(){
	$('.screen_switch').html('<img src="./img/web.jpg" />');
	toggleMenu();
});

$('.box6').on('click', function(){
	$('.screen_switch').html('<img src="./img/suggestion.jpg" />');
	toggleMenu();
});

$('.box2').on('click', toggleMenu);


$('.box3').on('click', function(){
	$('.mask').css({'display':'block'});
	$('.mask').animate({'opacity':1}, 'fast');
});

$('.mask').on('click', function(){
	$('.mask').animate({'opacity':0}, 'fast', function(){
		$('.mask').css({'display':'none'});
	});
});