$(document).ready(function() {
	var isAsh = false;
	var isMisty = false;
	var isBrock = false;
	var message = $('#prompt');
	$('#mainbutton').click(function() {
		var pw = $('input[name=maininput]').val();
		if (isAsh) {
			message.css('color', 'red');
			if (pw === '394') {
				message.html('Password accepted!');
				isAsh = false;
				$('#ash').after('1701');
				$('#ash').remove();
			}
			else {
				message.html('Incorrect password!');
			}
		}
		else if (isMisty) {
			message.css('color', 'blue');
			if (pw === '109') {
				message.html('Password accepted!');
				isMisty = false;
				$('#misty').after('801');
				$('#misty').remove();
			}
			else {
				message.html('Incorrect password!');
			}
		}
		else if (isBrock) {
			message.css('color', 'gray');
			if (pw === '776') {
				message.html('Password accepted!');
				isBrock = false;
				$('#brock').after('3101');
				$('#brock').remove();
			}
			else {
				message.html('Incorrect password!');
			}
		}
		else if (pw === '29018') {
			document.location.href = "puz2.html";
		}
		else {
			message.css('color', 'black');
			message.html('Incorrect password!');
		}
		$('input[name=maininput]').val("");
	});
	$('#ash').click(function() {
		isAsh = true;
		isMisty = false;
		isBrock = false;
		message.html('Please enter Ash\'s password.');
		message.css('color', 'red');
	});
	$('#misty').click(function() {
		isAsh = false;
		isMisty = true;
		isBrock = false;
		message.html('Please enter Misty\'s password.');
		message.css('color', 'blue');
	});
	$('#brock').click(function() {
		isAsh = false;
		isMisty = false;
		isBrock = true;
		message.html('Please enter Brock\'s password.');
		message.css('color', 'gray');
	});
});