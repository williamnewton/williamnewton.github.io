// Animation for radio


// on click '.radio-stream-item' toggle 'radio-player'

$('.radio-stream-item').click(function(){
    $('.radio-player').addClass('active');

});

$('.click-back').click(function(){
    $('.radio-player').removeClass('active');

});

