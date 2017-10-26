var Tips = new Array();
Tips[0] = "i don't exist anymore and it's awesome";
Tips[1] = "in the mood for u to be unhealthily obsessed w me";
Tips[2] = "*chokes on an apple* yung money";
Tips[3] = "what's with the mortality bro";
Tips[4] = "masturbating to yr higher self";
Tips[5] = "brb confronting impermanence";
Tips[6] = "it's not reality till u avoid it";
Tips[7] = "types of lost: me";
Tips[8] = "fuck the son marry the spirit kill the father";
Tips[9] = "open 2 chakras at once bb i'm not playin";
Tips[10] = "a cool date wld be w someone imaginary shaped exactly like my emptiness";
Tips[11] = "s/o to sexualizing loneliness, fear, guilt, envy and candy";
Tips[12] = "brb masking the pain w obsessive fantasy";
Tips[13] = "drive-thru spiritual awakening";
Tips[14] = "want my aura to be darker";
Tips[15] = "let's rub our dopamine together and make a fake okayness";
Tips[16] = "bitch i might repress my feelings and/or needs to avoid feeling vulnerable";
Tips[17] = "bitch i might let my compulsions prevent me from achieving intimacy w the divine light that exists within all";
Tips[18] = "don't want to be responsible for my face anymore";
Tips[19] = "can u just conform to my fantasy thx";
Tips[20] = "artist's statement: trying to stay alive";
Tips[21] = "want jesus to like me as more than a friend";
Tips[22] = "chromed out attentionseeking w the validation rims";
Tips[23] = "feel like ppl think i'm 'going through something'";
Tips[24] = "if u don't exist i'm in love w u";
Tips[25] = "show me on the doll where my poetry touched you";
Tips[26] = "excited to gloss over meaningful things w bullshit";
Tips[27] = "yes i built this prison myself";
Tips[28] = "in space no one can hear u review art";
Tips[29] = "trying to look cute bc the abyss";
Tips[30] = "feel like dogs are judging me";
Tips[31] = "bitch i might be a spiritual being having a human experience";
Tips[32] = "i want yr phone in my mouth";
Tips[33] = "one time i didn't care what ppl thought of me but it was by accident";



$(document).ready(function(){
	var position = 0;
	writeSlogan(position);
	$('#clicky').click(function(event) {
		$("#submit").fadeToggle(2000);
		$("#modal").fadeToggle(2000);
		$('#submit').one('click',function() {
			$("#submit").fadeToggle(2000);
			$("#modal").fadeToggle(2000);
		});
		event.stopPropagation();
	});

	var ShuffledTips = shuffle(Tips);

	$('#tip').click(function(event) {
		if(position==Tips.length-1){
			position = 0;
		} else {
			position++;
		}
		writeSlogan(position);
	});

	function writeSlogan(position){
		var random = Math.floor(Math.random()*Tips.length);

		$('.awesome h1').fadeOut(300, function(){
			$('.awesome h1').html(ShuffledTips[position]);
		});
		$('.awesome h1').fadeIn(300);
	}

	function shuffle(array) {
		var tmp, current, top = array.length;

		if(top) while(--top) {
			current = Math.floor(Math.random() * (top + 1));
			tmp = array[current];
			array[current] = array[top];
			array[top] = tmp;
		}
		return array;
	}

	$('form#suggestion .submit').click(function(){
		$('#suggestion .error').hide();
		var name = $('input#name').val();
		if (name == "" || name == " " || name == "Name") {
			$('input#name').focus().before('<div class="error">You don\'t have a name?</div>');
			return false;
		}

		var email_test = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		var email = $('input#email').val();
		if (email == "" || email == " ") {
			$('input#email').focus().before('<div class="error">You missed one!</div>');
			return false;
		} else if (!email_test.test(email)) {
			$('input#email').select().before('<div class="error">Enter a valid e-mail address.</div>');
			return false;
		}

		var message = $('#message').val();
		if (message == "" || message == " " || message == "Message") {
			$('#message').focus().fadeIn('slow').before('<div class="error">You forgot to type a message!</div>');
			return false;
		}
		
		var data_string = $('form#suggestion').serialize();

		$.ajax({
			type:       "POST",
			url:        "email.php",
			data:       data_string,
				success:    function() {
					$('form#suggestion').fadeOut(100).before('<div id="success"><p></p></div>');
					$('#success p').delay(100).html('Thanks. We will e-mail you if the tip gets featured.').fadeIn(50).delay(5000).$("#submit").fadeToggle(100).$("#modal").toggle(100);
				}
			})
		return false;
	})
});