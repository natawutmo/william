$(document).ready(function() {
	var isAsh = false;
	var isMisty = false;
	var isBrock = false;
	$('#mainbutton').click(function() {
		var pw = $('input[name=maininput]').val();
		if ((isAsh && pw === '394')) {
			$('#mainmessage').html('Password accepted!');
			isAsh = false;
			$('#ash').after('17');
			$('#ash').remove();
		}
		else if (isMisty && pw === '109') {
			$('#mainmessage').html('Password accepted!');
			isMisty = false;
			$('#misty').after('8');
			$('#misty').remove();
		}
		else if (isBrock && pw === '776') {
			$('#mainmessage').html('Password accepted!');
			isBrock = false;
			$('#brock').after('31');
			$('#brock').remove();
		}
		else if (pw === '29018') {
			document.location.href = "puz2.html";
		}
		else {
			$('#mainmessage').html('Incorrect password!');
		}
		$('input[name=maininput]').val("");
	});
	$('#ash').click(function() {
		isAsh = true;
		isMisty = false;
		isBrock = false;
		$('#mainmessage').html('<p style="color:red">Please enter Ash\'s password.</p>')
	});
	$('#misty').click(function() {
		isAsh = false;
		isMisty = true;
		isBrock = false;
		$('#mainmessage').html('<p style="color:blue">Please enter Misty\'s password.</p>')
	});
	$('#brock').click(function() {
		isAsh = false;
		isMisty = false;
		isBrock = true;
		$('#mainmessage').html('<p style="color:gray">Please enter Brock\'s password.</p>')
	});
});