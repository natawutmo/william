$(document).ready(function () {
	$('#mainbutton').click(function() {
		var pw = $('input[name=maininput]').val();
		if (pw === '8839201') {
			document.location.href = "fourthpuz.html";
		}
		else {
			$('#prompt').html('Incorrect password!');
		}
		$('input[name=maininput]').val("");
	});
});