(function(){
	//about chess clock
	// var clock = new chessClock;

	this.chessClock = function() {

		console.log('got clock js');

		var chessClock = this;
			// clock.init();
	}

	chessClock.prototype.init = function (){
		// console.log('inside clock init');
		var allClocksDB = JSON.parse(localStorage.chessClock);
		// console.log('allClocksDB is ', allClocksDB);
    		clocks = allClocksDB.clocks;

    	// console.log('allClocksDB is ', allClocksDB, clocks);

    	if (clocks && clocks[0] !== undefined){
    		for (var i in clocks){
	    		console.log('clocks[i] is ', clocks[i]);
	    		this.setup(clocks[i]);
	    		console.log('create method here to tell setup and build methods that these \
	    			are pre-existing clocks, and to build them on the dom automatically.\
	    			use a variable setting passed into functions?');
	  
	    	}
    	}
    	else {
    		console.log('creating new field "clocks" in allClocksDB ', allClocksDB);
    		allClocksDB["clocks"] = {};
    		allClocksDBstr = JSON.stringify(allClocksDB);
				localStorage.setItem("chessClock", allClocksDBstr);
				// console.log('localStorage after clock field insert is ', localStorage);
			var clock = new chessClock;
			clock.setup(clock);

    	}
    	
	}

	chessClock.prototype.getDB = function(section){
		var allClocksDB = JSON.parse(localStorage.getItem(section));
			console.log('allClocksDB in getDB is ',allClocksDB);

			return allClocksDB;
	}

	 chessClock.prototype.setup = function (clock){

	 	console.log('setting up clock ', clock);

	 	var setupInputs = document.getElementsByClassName('taskInput');
	 	// console.log('setupInputs are ', setupInputs);
	 	for (i=0; i < setupInputs.length ; i++){
				var input = setupInputs[i];
				input.classList.remove('hidden');
			}
		
		clock.wrapper = document.getElementById('chessClock');
		clock.trigger = document.getElementById('newClock');
		clock.class = "clock";
		clock.input = document.getElementById('taskInput');
		clock.name = clock.input.value;
		var trigger = clock.trigger;
		
		trigger.onclick = checkSrcElement(clock, event);

		function checkSrcElement(clock, e){
			// console.log('inside checkSrcElement, e.srcElement is ',e.srcElement);
			var source = e.srcElement;
				trigger = clock.trigger;
			// console.log('inside checkSrcElement, this, clock and clock.trigger are ',this, clock, clock.trigger);
			if (source === trigger){
				// console.log ('matched, source and trigger are ', source, trigger);
				clock.build(clock,e);
			}
			else{
				// console.log ('no match, source and trigger are ', source, trigger);
			}
			
		}
	}

	chessClock.prototype.update = function(clock, wrapper){
			console.log('updating clock with clock and wrapper ', clock, wrapper);
		}
			// console.log('clockButton is ', clockButton);

		var Task = function (clock){
				console.log('constructing new task for clock ',clock);
			
		}

		chessClock.prototype.build = function(clock, e){

			console.log('event clicked clock trigger ', e, clock.trigger,' fired chessClock.build on clock ', clock);
			var clocks = document.getElementsByClassName(clock.class);
			console.log('clocks array & length is ', clocks, clocks.length);

			var DB = clock.getDB('chessClock');
			 // console.log('var db is ', DB);
			clock.element = document.createElement('div');
			clock.element.classList.add( clock.class );
			clock.element.id = "clock"+clocks.length;
			clock.name = DB.newClock;
			clock.id = clock.element.id.toString();
			clock.startBtn = '<button id="startClock'+clock.id+'"class="'+clock.class+'" type="button">Start</button>';
			clock.stopBtn = '<button id="stopClock'+clock.id+'"class="'+clock.class+'" type="button">Stop</button>';
			clock.element.innerHTML = '<p>'+clock.name+', <br>'+clock.id+'</p><br>'+clock.startBtn+clock.stopBtn;
			
			clock.wrapper.appendChild(clock.element);
				console.log('this.element is ', clock.element);

			var task = new Task(clock);
			
			this.save(clock);
			
		}

		chessClock.prototype.save = function(clock){
			console.log('saving this clock with element', clock, clock.element.id);
			console.log('saving to localStorage section', clock.wrapper.id);
			var allClocksDB = JSON.parse(localStorage.getItem(clock.wrapper.id));
				console.log('need to access clock datasource from machines array here with engine.stack.chessClock reference ', engine.stack.chessClock);
				console.log('allClockDB is ', allClocksDB, allClockDB.clocks);
				// if (allClocksDB.clocks == undefined){
				// 	allClocksDB["clocks"] = {};
				// }
				allClocksDB.clocks[clock.element.id] = clock;
				console.log('allClockDB after is ', allClocksDB, allClocksDB.clocks);
				allClocksDBstr = JSON.stringify(allClocksDB);
				localStorage.setItem(clock.wrapper.id, allClocksDBstr);
				console.log('localStorage after all clock save is ', localStorage);
		}


		function addTask () {
			console.log('clicked clock button fired goClocks');

		}
})();
