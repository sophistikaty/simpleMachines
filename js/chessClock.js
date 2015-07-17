(function(){
	//about chess clock
	// var clock = new chessClock;

	this.chessClock = function() {

		console.log('got clock js');
		// var chessClock = this;
		this.trigger = document.getElementById('newClock');
		this.wrapper = document.getElementById('chessClock');
		this.class = "clock";
		this.input = document.getElementById('taskInput');

		this.DB = function(){
			var allClocksDB = JSON.parse(localStorage.getItem('chessClock'));
				return allClocksDB;
		}

		this.setup = function (clock){

	 	console.log('setting up clock ', clock);

	 	clock.showHideInputs();
		clock.name = clock.input.value;
		var trigger = clock.trigger;
			console.log('trigger is ', trigger);
		trigger.addEventListener('click', clock.build(clock, event));

		// function checkSrcElement(clock, e){
		// 	console.log('inside checkSrcElement, e.srcElement is ',e.srcElement);
		// 	var source = e.srcElement;
		// 		trigger = clock.trigger;
		// 	console.log('inside checkSrcElement, this, clock and clock.trigger are ',this, clock, clock.trigger);
		// 	if (source === trigger){
		// 		console.log ('matched, source and trigger are ', source, trigger);
		// 		clock.build(clock,e);
		// 	}
		// 	else{
		// 		console.log ('no match, source and trigger are ', source, trigger);
		// 	}
			
		// }
		}

		this.build = function(clock, e){

			// console.log('event clicked clock trigger ', e, clock.trigger,' fired chessClock.build on clock ', clock);
			var clocks = document.getElementsByClassName(clock.class);
			// console.log('clocks array & length is ', clocks, clocks.length);
			 // console.log('var db is ', DB);
			console.log('clock is ', clock);
			clock.element = document.createElement('div');
			clock.element.classList.add( clock.class );
			clock.element.id = "clock"+clocks.length;
			clock.name = clock.DB.newClock;
			clock.id = clock.element.id.toString();
			clock.time = clock.getClockTime(clock);
			clock.face = '<div id="'+clock.id+'Face" class="'+clock.class+' clockFace"><p>'+clock.time+'</p></div>'
			clock.startBtn = '<button id="startClock'+clock.id+'"class="'+clock.class+'" type="button">Start</button>';
			clock.stopBtn = '<button id="stopClock'+clock.id+'"class="'+clock.class+'" type="button">Stop</button>';
			clock.resetBtn = '<button id="resetClock'+clock.id+'"class="'+clock.class+'" type="button">Reset</button>';
			clock.element.innerHTML = '<p>'+clock.name+', '+clock.id+'</p><br>'+clock.face
									   +clock.startBtn+clock.stopBtn+clock.resetBtn;
			
			clock.wrapper.appendChild(clock.element);
				// console.log('this.element is ', clock.element);

			var task = new Task(clock);
			
			this.save(clock);
			
		}

		this.getClockTime = function(clock){
			
		    var DB = clock.DB();
		    console.log('clock is ', clock, clock.DB);
		    if(DB.clocks[clock.id]){
		    	var clockTime = DB.clocks[clock.id].time;
		    }
		    else {
		    	var clockTime = 0;
		    }
		    	
		    	console.log('DB and clockTime in getClockTime are ', clockTime);
		    	return clockTime;
		  }

			this.createAddBtn = function () {

			}
			console.log('this is ', this);
		console.log('chessClock is ', chessClock);

	}

	chessClock.prototype.init = function (){
		console.log('inside clock init');
		var DB = chessClock.prototype.getDB('chessClock');
    		clocks = DB.clocks;
    	console.log('DB is ', DB, clocks);

    	if (clocks){
    		// var 
    		for (var i in clocks){
	    		console.log('clocks[i] is ', clocks[i]);
	    		var clock = new chessClock;
	    		clock.build(clocks[i]);
	    		// console.log('create method here to tell setup and build methods that these \
	    		// 	are pre-existing clocks, and to build them on the dom automatically.\
	    			// use a variable setting passed into functions?');
	    	}

	    	// var addClockBtn = document.createElement('button');
	    	// 	addClockBtn.id ='addClockBtn';
	    	// 	addClockBtn.classList.add('clock');
	    	// 	addClockBtn.innerHTML = "+";
	    	// 	chessClock.wrapper.appendChild(addClockBtn);
	    	// 	addClockBtn.onclick = chessClock.prototype.showHideInputs();

    	}
    	else {
    		console.log('creating new field "clocks" in DB ', DB);
    		DB["clocks"] = {};
    		DBstr = JSON.stringify(DB);
				localStorage.setItem("chessClock", DBstr);
				// console.log('localStorage after clock field insert is ', localStorage);
			var clock = new chessClock;
			clock.setup(clock);

    	}
    	
	}

	chessClock.prototype.getDB = function(section){
		// console.log('section is ', section);
		var allClocksDB = JSON.parse(localStorage.getItem(section));
			// console.log('allClocksDB in getDB is ',allClocksDB);

			return allClocksDB;
	}

	chessClock.prototype.showHideInputs = function (){

		var Inputs = document.getElementsByClassName('taskInput');
	 	// console.log('setupInputs are ', setupInputs);
	 	for (i=0; i < Inputs.length ; i++){
				var input = Inputs[i];
				input.classList.toggle('hidden');
			}
	}

	 

	chessClock.prototype.update = function(clock, wrapper){
			console.log('updating clock with clock and wrapper ', clock, wrapper);
		}
			// console.log('clockButton is ', clockButton);

		var Task = function (clock){
				console.log('constructing new task for clock ',clock);
			
		}

	

		chessClock.prototype.save = function(clock){
			console.log('saving this clock with element', clock, clock.element.id);
			console.log('saving to localStorage section', clock.wrapper.id);
			var DB = chessClock.prototype.getDB(clock.wrapper.id);
				// console.log('need to access clock datasource from machines array here with engine.stack.chessClock reference ', engine.stack.chessClock);
				console.log('DB is ', DB, DB.clocks);
				DB.clocks[clock.element.id] = clock;
				// console.log('DB after is ', DB, DB.clocks);
				DBstr = JSON.stringify(DB);
				localStorage.setItem(clock.wrapper.id, DBstr);
				console.log('localStorage after all clock save is ', localStorage);
		}


		function addTask () {
			console.log('clicked clock button fired goClocks');

		}

		chessClock.prototype.reset = function(){
			time = 0;
			render();
		}



		chessClock.prototype.render = function(){
		    timer.innerHTML = clock/1000; 
		  }
})();
