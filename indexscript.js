$(document).ready(function() {
	$('#mainbutton').click(function() {
		var pw = $('input[name=maininput]').val();
		if (pw === '9228') {
			document.location.href = "puz1.html";
		}
	});
});