//My user class that has my username and picture
var User = {
	username: '@Garretttaco',
	profile_pic: 'images/g.JPG'
}

var renderThread = function(message) {
	var source = $('#thread-template').html();
	var template = Handlebars.compile(source);
	return template({
	tweet: renderTweet(message)
	});
}

var renderTweet = function(message, username, profile_pic) {
	var source = $('#tweet-template').html();
	var template = Handlebars.compile(source);
	return template({
	message: message,
	username: User.username,
	profile_pic: User.profile_pic
	});
}

var renderCompose = function() {
	var source = $('#compose-template').html();
	var template = Handlebars.compile(source);
}



$(function(){

	//State Management for all Compose textareas
	$(document).on('click', '.compose', function(){
		$(this).toggleClass('expand');
	});

	//State Management of all replies
	$(document).on('click','.tweet', function(){
		$(this).parents('.thread').toggleClass('expand');
	});


	// Counting how many characters left in textarea starting at 140
	$('textarea').keyup(function () {
    var left = 140 - $(this).val().length;
    if (left < 0) {
        left = 0;
    }
    //displaying how many characters are left
    $('.count').text(left);
	});

	// Calling to function renderThread which creates a new thread when clicking on the submit button
	$('header form').on('submit', function(event){
		//deactivate the button from submitting
		event.preventDefault();
		//Call the function renderThread and pass the value that was input in textarea
		var threadHTML = renderThread($('textarea').val());
		//assigning the textarea to a variable so that it is easier for JQuery to identify
		var tweet_text = $('textarea');
		//if the length is greater than 0, then prepend to .tweets
		if(tweet_text.val().length) {
			$('.tweets').prepend(threadHTML);
		}
		//Setting the textarea to an empty string after it is submitted 
		tweet_text.val('');

	});


	//This is where i am selecting the 



});