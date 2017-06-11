$(document).ready(function() {
	$('.tile').click(function() {
		$(this).addClass('seltile');
	});
	$('#mainbutton').click(function() {
		var pw = $('input[name=maininput]').val();
		if (pw === '103332') {
			document.location.href = "cinco.html";
		}
		else {
			$('#prompt').html('Incorrect password!');
		}
		$('input[name=maininput]').val("");
	});
});