$(document).ready(function() {
	var msg = $('#prompt');
	var done1 = false;
	var done2 = false;
	$('#mainbutton1').click(function() {
		var box = $('input[name=maininput1]');
		var pw = box.val();
		if (pw === '837294') {
			done1 = true;
			box.attr('disabled', 'disabled');
			msg.html('Password accepted! Your brother\'s password is 111888444.');
		}
		else if (pw === '406851') {
			msg.html('Try that password in the other box!');
			box.val("");
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('#mainbutton2').click(function() {
		var box = $('input[name=maininput2]');
		var pw = box.val();
		if (pw === '406851') {
			done2 = true;
			box.attr('disabled', 'disabled');
			msg.html('Password accepted! Your brother\'s password is 111888444.');
		}
		else if (pw === '837294') {
			msg.html('Try that password in the other box!');
			box.val("");
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('.button').click(function() {
		if (done1 && done2) {
			document.location.href = "se7en.html";
		}
	});
});
