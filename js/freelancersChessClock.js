$(document).ready(function(){
	//about chess clock

	console.log('got clock js');

	var clockSection = document.getElementById('chessClock');
	var clockButton = document.getElementById('chessClockBtn');
	var clock = document.createObject('div');

		console.log('clockButton and clock are ', clockButton, clock);
	

	function goClocks(){
		console.log('clicked clock button fired goClocks');
	}

	clockButton.addEventListener.on('click', goClocks);
});