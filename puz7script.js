$(document).ready(function() {
	var msg = $("#prompt");
	var lastclick = "";
	var i, j;
	for (i=1; i<=25; i++) {
		$('#tile'+i).click(function() {
			if (lastclick === ("tile" + (parseInt($(this).attr("id").substring(4))-1))) {
				$(this).css("background-color", "blue");
				lastclick = $(this).attr("id");
				msg.text("Yay!");
			}
			else {
				for (j=1; j<=25; j++) {
					$('#tile'+j).css("background-color", "red");
				}
				lastclick = "";
				msg.text("Oh no!");
			}
			if (lastclick === "" && $(this).attr("id") === "tile1") {
				$(this).css("background-color", "blue");
				lastclick = $(this).attr("id");
				msg.text("You can do it!");
			}
			if (lastclick === "tile25") {
				document.location.href = "puzzleacht.html";
			}
		});
	}
});
