var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

// An event listener is Defined
document.addEventListener("deviceready", onDeviceReady, false);


function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {

// Another event listener is Defined as are Lifecycle events - onResume and onPause
// These handlers check for different states that the phone is in depending on what the user is doing on the device
// They then execute the commands based on those states

	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);

	launched_count++;
	updateDisplay();

	alert("device ready");
    }


    function onPause() {

	paused_count++;
	updateDisplay();

	alert("pause");
    }


    function onResume() {

	resumed_count++;
	updateDisplay();

	alert("resume");
    }
