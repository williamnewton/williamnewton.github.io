

$(document).ready(function () {

	$('.img-responsive').click(function(){
		// this image src = var
		// var added to appended image thingy
		var thisImage = $(this).attr('src');
		$('body').append('<div class="close-button"><div class="image-viewer"><img src="' + thisImage + '" /></div></div>');

	});


    $(document).on('click', ".close-button",
      function () {
          $('.close-button').remove();
    });
      

  });