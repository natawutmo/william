$(document).ready(function() {
	var msg = $("#prompt");
	var lastclick = "";
	var i, j;
	for (i=1; i<=25; i++) {
		$('#tile'+i).click(function() {
			if ($(this).css("background-color") === "rgb(255, 48, 48)") {
				$(this).css("background-color", "rgb(48, 255, 48)");
			}
			else if ($(this).css("background-color") === "rgb(48, 255, 48)") {
				$(this).css("background-color", "rgb(48, 48, 255)");
			}
			else if ($(this).css("background-color") === "rgb(48, 48, 255)") {
				$(this).css("background-color", "rgb(255, 48, 48)");
			}
			if ($("#tile1").css("background-color") === "rgb(255, 48, 48)" && $("#tile2").css("background-color") === "rgb(48, 255, 48)" && $("#tile3").css("background-color") === "rgb(48, 255, 48)" && $("#tile4").css("background-color") === "rgb(48, 48, 255)" && $("#tile5").css("background-color") === "rgb(255, 48, 48)" && $("#tile6").css("background-color") === "rgb(48, 255, 48)" && $("#tile7").css("background-color") === "rgb(48, 48, 255)" && $("#tile8").css("background-color") === "rgb(48, 255, 48)" && $("#tile9").css("background-color") === "rgb(255, 48, 48)" && $("#tile10").css("background-color") === "rgb(255, 48, 48)" && $("#tile11").css("background-color") === "rgb(48, 48, 255)" && $("#tile12").css("background-color") === "rgb(48, 48, 255)" && $("#tile13").css("background-color") === "rgb(48, 48, 255)" && $("#tile14").css("background-color") === "rgb(48, 255, 48)" && $("#tile15").css("background-color") === "rgb(48, 255, 48)" && $("#tile16").css("background-color") === "rgb(255, 48, 48)" && $("#tile17").css("background-color") === "rgb(48, 48, 255)" && $("#tile18").css("background-color") === "rgb(255, 48, 48)" && $("#tile19").css("background-color") === "rgb(255, 48, 48)" && $("#tile20").css("background-color") === "rgb(48, 255, 48)" && $("#tile21").css("background-color") === "rgb(48, 255, 48)" && $("#tile22").css("background-color") === "rgb(48, 255, 48)" && $("#tile23").css("background-color") === "rgb(48, 48, 255)" && $("#tile24").css("background-color") === "rgb(255, 48, 48)" && $("#tile25").css("background-color") === "rgb(48, 48, 255)") {
				document.location.href = "pzl9.html";
			}
		});
	}
});
