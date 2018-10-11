var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false); // LISTENING for when app is fully launched
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() { // HANDLING when app is launched
	
	document.addEventListener("resume", onResume, false); // LISTENING for when app is resumed
	document.addEventListener("pause", onPause, false); // LISTENING for when app is paused
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() { // HANDLING when app is paused
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() { // HANDLING when app is resumed
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
