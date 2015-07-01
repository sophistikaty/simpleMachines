$(document).ready(function(){
	//about chess clock

	console.log('got clock js');

	var clockWrapper = document.getElementById('chessClock');
	var clockButton = document.getElementById('chessClockBtn');
	

		// console.log('clockButton is ', clockButton);

	var Task = function (clockSection){
			// console.log('constructing new task at clockSection ',clockSection);
		// var taskInput = document.createElement('input');
		// 	taskInput.type = "text";
		// 	taskInput.id = "taskInput";
		// 	taskInput.label = "What do you want to time?"

		// 	clockSection.appendChild(taskInput);


		// 	console.log('taskInput is', taskInput);

			// console.log('created new task', task);
	}

	var Clock = function (clockSection){
			console.log('constructing new clock at clockSection ',clockSection, this);
		var clock = document.createElement('div');
		clock.classList.add("clock");
		clock.innerHTML = "<p>Hey, I'm a clock.</p>";
		clockSection.appendChild(clock);

		// console.log('created new clock', clock);
	}
	

	function goClocks(){
		// console.log('clockWrapper inside goClocks is', clockWrapper);
		// console.log('clicked clock button fired goClocks on this ', this, event);

		var taskInput = document.getElementsByClassName('taskInput');

		for (i=0;i<taskInput.length; i++){
			taskInput[i].classList.remove('hidden');
		}
		// var clockWrapper = 
		var clockSection = document.createElement('div');
			clockSection.id = "clockSection";
			clockWrapper.appendChild(clockSection);
			console.log('clockSection is ', clockSection);
		var task = new Task(clockSection);
		var clock = new Clock(clockSection);
		
		
		
	}

	function addTask () {
		// console.log('clicked clock button fired goClocks');

	}

	clockButton.onclick = goClocks;
});