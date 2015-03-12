$(document).ready(function() {

	var User = {
		'username'	: '@Garretttaco',
		'profile_pic': 'images/g.JPG'
	}

	//STATE MANAGEMENT
	$(document).on('click', '.tweet', function(){
		$(this).parents('.thread').toggleClass("expand");
	});
	$(document).on('click', '.compose textarea', function(){
		$(this).parents('.compose').toggleClass("expand");
	});

	//FUNCTIONS
	var makeThread = function(message, User) {
		var source = $('#template-thread').html();
		var template = Handlebars.compile(source);
		return template({
			'tweet': makeTweet(message, User),
			'compose': makeCompose()
		});
	}
 	var makeCompose = function() {
		var source = $('#template-compose').html();
		var template = Handlebars.compile(source);
		return template();
	}
	var makeTweet = function(message, User) {
		var source = $('#template-tweet').html();
		var template = Handlebars.compile(source);
		return template({
			'username': User.username,
			'profile_pic': User.profile_pic,
			'message': message
		});
	}


	//COMPOSE NEW TWEET

	$('header').on('submit', 'form', function(event){
		event.preventDefault();
			
		var message = $('form textarea').val();
		if(message.length > 0){
			var threadHTML = makeThread(message, User);
			$('.tweets').prepend(threadHTML);
			$('form textarea').val('');
			$(this).parents('.compose').toggleClass("expand");
		}

	});

	//COMPOSE REPLY
	$('.tweets').on('click', 'button', function(event){
		event.preventDefault();
		var message = $(this).parents('.compose').find('textarea').val();
		if(message.length > 0){
			var tweetHTML = makeTweet(message, User);
			$(this).parents('.replies').append(tweetHTML);
			$('form textarea').val('');
			$(this).parents('.compose').toggleClass("expand");
		}
	});

$('textarea').on('keydown', function(event){

		// Get ength of message
		var msg_lnth = $(this).val().length;


		// Find Parent compose
		var p = $(this).parents('.compose');


		// Find child in compose called count
		var c = $('.count', p);
		console.log(c.text()- msg_lnth);
		//update text in count to be 140 - length of message
		c.text(140 - msg_lnth);

	});	
});