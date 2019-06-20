var x, y;
window.onload = function() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	    location.href = "https://heb12.ml/mobile/m";
	}
	setInterval(function() {
		document.getElementById('main').style.backgroundPosition = x + "px " + y + "px";
	},1);
}

function getMouse(event) {
	x = event.clientX/60 - 25;
	y = event.clientY/20 - 100;
}
