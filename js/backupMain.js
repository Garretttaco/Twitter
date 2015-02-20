var user = {
			username: '@GARRETT_TACO',
			message: message,
			img: 'images/g.JPG'
		};
// 	var renderTweet = function(message){
// 		tweet_compose = $(this).parent('div').siblings('textarea');
// 		tweet = tweet_compose.val();
// 		if(tweet.length) {
// 		var source = $('#tweet-template').html();
// 		var template = Handlebars.compile(source);
		
// 		var finalProduct = template({
// 			username: '@GARRETT_TACO',
// 			message: message,
// 			img: 'images/g.JPG'
// 		});


// }
	var renderThread = function(garrett){
		// var compose = $(document.createElement('div')).addClass('tweet');
		// var img = $(document.createElement('img')).attr('src', 'images/g.JPG');
		// var body = $(document.createElement('div')).addClass('body');
		// var h3 = $(document.createElement('h3')).addClass('title').text(garrett.username);
		// var p = $(document.createElement('p')).addClass('message').text(garrett.tweet);
		// $('.replies').append(compose.append(img).append(body).append(h3).append(p));
		thread_compose = $('.header').children('textarea');
		tweet = tweet_compose.val();
		if(tweet.length) {
		var source = $('#thread-template').html();
		var template = Handlebars.compile(source);
		
		var finalProduct = template({
			username: '@GARRETT_TACO',
			message: message,
			img: 'images/g.JPG'
		});
		return 

	}
$(function() {



	var composeExpander = function(thing) {
		$(thing).toggleClass('expand');
	}
	
	$('.compose').on('click', function(){
		composeExpander(this);
	});

	$('header button').on('click', function(){
		var mainTweet = renderThread({
			message: $('.message').val()
		});
		$('.tweets').prepend(mainTweet);

		
	}	
		tweet_compose.val('');
		$(this).parents('.compose').removeClass('expand');

		return false;
	});

	$('textarea').keyup(function () {
    var left = 140 - $(this).val().length;
    if (left < 0) {
        left = 0;
    }
    $('.count').text(left);
});
	$('.replies button').on('click', function(){
		var tweet_reply = $(this).parent('div').siblings('textarea');
		var tweet = tweet_reply.val();
		if(tweet.length) {
			renderThread({
				username: '@garretttaco',
				tweet: tweet
			});
		}	
		tweet_reply.val('');
		$(this).parents('.compose').removeClass('expand');

		return false;
	});

	// var replyExpander = function(thing) {
	// 	$(thing).toggleClass('expand');
	// }
	$('.tweet').on('click', function() {
		$(this).parent().toggleClass('expand');

	});	

});
 		
	


	