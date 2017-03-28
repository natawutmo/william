$(document).ready(function() {
	$('.square').click(function() {
		$(this).fadeOut('slow');
	});
	$('.button').click(function() {
		$('#message').html('You pressed the button');
	});
});