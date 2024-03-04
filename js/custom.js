
function changeOrientation() {
	if ($(window).width() < 1330) { // Portrait mode
		$("#portTxbEmail").val($("#landTxbEmail").val());
		$(".divLandscape").hide();
		$(".divPortrait").show();
	}
	else { // Landscape mode
		$("#landTxbEmail").val($("#portTxbEmail").val());
		$(".divPortrait").hide();
		$(".divLandscape").show();
	}
	errHideNotice();
}

function clearInputs() {
	$("#landTxbEmail").val("");
	$("#portTxbEmail").val("");
}

function errHideNotice() {
	$(".imgError").hide();
	$(".divInvalidEmail").hide();
}

function errShowNotice() {
	$(".imgError").show();
	$(".divInvalidEmail").show();
}

function isValidEmail(strEmail) {
	// Get index of matching email.
	let intPos = strEmail.search(/^[A-Za-z0-9\.\_]+\@[A-Za-z0-9\-]+\.[A-Za-z0-9]+$/g);
	if (intPos >= 0) return true; // Match found.
	return false; // No match found.
}

$(document).ready(function() {
	// Set up listeners.
		// Landscape
	$("#landAncSubmit").click(function(event) {
		if (!isValidEmail($("#landTxbEmail").val().trim())) { // Invalid email address
			errShowNotice();
		}
		event.preventDefault();
	});
	$("#landTxbEmail").focus(function(event) { // Focus on email address
		errHideNotice();
		event.preventDefault();
	});
		// Portrait
	$("#portAncSubmit").click(function(event) {
		if (!isValidEmail($("#portTxbEmail").val().trim())) { // Invalid email address
			errShowNotice();
		}
		event.preventDefault();
	});
	$("#portTxbEmail").focus(function(event) { // Focus on email address
		errHideNotice();
		event.preventDefault();
	});
		// General
	$(window).on("resize", function() {
		changeOrientation();
	});
	// Begin execution.
	clearInputs();
	changeOrientation();
});