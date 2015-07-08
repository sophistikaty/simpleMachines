(function(){
	//about chess clock
	// var clock = new chessClock;

	this.chessClock = function() {

		console.log('got clock js');

		var chessClock = this;
			// clock.init();
	}

	chessClock.prototype.init = function (){
		var allClocksDB = JSON.parse(localStorage.chessClock);
    		clocks = allClocksDB.clocks;
    	console.log('allClocksDB is ', allClocksDB, clocks);
    	for (var i in clocks){
    		console.log('this inside init is ',this, chessClock );
    		console.log('clocks[i] is ', clocks[i]);
    		this.build(clocks[i]);
  
    	}
	}

	 chessClock.prototype.build = function (clock){
		console.log('building clock ', clock);
		clock.wrapper = document.getElementById('chessClock');
		clock.trigger = document.getElementById('chessClockBtn');
		clock.class = "clock";
		clock.input = document.getElementsByClassName('taskInput');
		
		// clock.trigger.addEventListener("click", clock.start(clock));
			// console.log('this is ', this, c);
	}

	chessClock.prototype.update = function(clock, wrapper){
			console.log('updating clock with clock and wrapper ', clock, wrapper);
		}
			// console.log('clockButton is ', clockButton);

		var Task = function (clock){
				// console.log('constructing new task for clock ',clock);
			
		}

		chessClock.prototype.start = function(clock){
			// console.log('clockWrapper inside goClocks is', clockWrapper);
			// console.log('clicked clock button fired chessClock.start fired on this clock ', clock);
			var clocks = document.getElementsByClassName(clock.class);
			// console.log('clocks array & length is ', clocks, clocks.length);

			for (i=0; i < clock.input.length ; i++){
				var input = clock.input[i];
				input.classList.remove('hidden');
			}
			 
			clock.element = document.createElement('div');
			clock.element.classList.add( clock.class );
			clock.element.id = "clock"+clocks.length;
			clock.id = clock.element.id.toString();
			clock.wrapper.appendChild(clock.element);
				// console.log('this.element is ', clock.element);

			var task = new Task(clock);
			
			this.save(clock);
			
		}

		chessClock.prototype.save = function(clock){
			console.log('saving this clock with element', clock, clock.element.id);
			console.log('saving to localStorage section', clock.wrapper.id);
			var allClockDB = JSON.parse(localStorage.getItem(clock.wrapper.id));
				console.log('need to access clock datasource from machines array here with engine.stack.chessClock reference ', engine.stack.chessClock);
				console.log('allClockDB is ', allClockDB, allClockDB.clocks);
				if (allClockDB.clocks == undefined){
					allClockDB["clocks"] = {};
				}
				allClockDB.clocks[clock.element.id] = clock;
				console.log('allClockDB after is ', allClockDB, allClockDB.clocks);
				allClockDBstr = JSON.stringify(allClockDB);
				localStorage.setItem(clock.wrapper.id, allClockDBstr);
				console.log('localStorage after all clock save is ', localStorage);
		}


		function addTask () {
			// console.log('clicked clock button fired goClocks');

		}
})();
