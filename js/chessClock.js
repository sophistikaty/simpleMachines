(function(){
	//about chess clock
	// var clock = new chessClock;

	this.chessClock = function() {

		console.log('got clock js');

		var c = this;

		c.wrapper = document.getElementById('chessClock');
		c.trigger = document.getElementById('chessClockBtn');
		c.class = "clock";
		c.input = document.getElementsByClassName('taskInput');
		
		c.trigger.addEventListener("click",c.start(c));
			console.log('this is ', this, c);
	}

	chessClock.prototype.update = function(clock, wrapper){
			console.log('updating clock with clock and wrapper ', clock, wrapper);
		}
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

		// var Clock = function (clockSection){
				
		// }

		
		

		chessClock.prototype.start = function(clockSection){
			// console.log('clockWrapper inside goClocks is', clockWrapper);
			console.log('clicked clock button fired goClocks on this ', this);

			// var inputArr = this.input;
			// 	console.log()

			for (i=0; i < this.input.length ; i++){
				var input = this.input[i];
				input.classList.remove('hidden');
			}
			 
			this.section = document.createElement('div');
			this.section.classList.add( this.class );

			var clocks = document.getElementsByClassName('"'+this.class+'"');
			console.log('clocks array is ', clocks);

				if(clocks !== undefined){

					for (i=0; i<clocks.length; i++){
						console.log('clocks[i] is ', clocks[i]);
						this.section.id = "clock"+i;
					}

				}
				else {
					this.section.id = "clock"+0;
				}

				this.wrapper.appendChild(this.section);
				console.log('this.section is ', this.section);
			var task = new Task(this.section);
			
			
		}


		function addTask () {
			// console.log('clicked clock button fired goClocks');

		}
})();
