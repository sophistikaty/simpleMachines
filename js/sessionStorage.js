$(document).ready(function(){
	//------- use sessionStorage to preserve form selections through portions of the form-fill process 
	//that require page-reload, i.e. adding documents
	
	var Piece = function (elem) {
		this.onkeydown = see(e);
	};

	function Report(letters) {
			this.letters = letters;
		}


	var remember = document.forms;
	console.log(remember);

	var sesh = document.getElementById('store-it');
	console.log(sesh);

	var letters = [];

	sesh.onkeydown = function(e){
		console.log(e.keyIdentifier, e.keyCode);
		if (e.keyIdentifier === "Enter") {
			console.log('pressed enter');
			var report = new Report(letters);
			 	console.log(report);
				sessionStorage.setItem('letters', JSON.stringify(report));

			 	saveSession(remember);
			 	console.log(e);
		}
		 // debugger
		// console.log (sesh.value);
		// console.log (remember);
		letters.pop(sesh.value);
		console.log('event down is ',e);
		console.log('letters on down is ',letters);
		
		
		
	};

	sesh.onkeyup = function(e){
		letters.push(sesh.value);
		console.log ('textval down is ',sesh.value);
		console.log('letters on up is ',letters);

		console.log('event up is ',e);
		 // debugger
	};

	remember.onchange = function(e){
		console.log(e);
		
		//	Function to make session data available if it exists, and record for changes to session data before page re-load

		function saveSession(remember){

				console.log('saving session');
			console.log('arguments are ', remember);

			var temp = sessionStorage.getItem('letters');
			console.log(sessionStorage.current);
			debugger
			var viewCurrent = $.parseJSON(temp);

				console.log('letters session data is: ', viewCurrent);
				
			// var sl = system_level,
			// 	sub = subsys,
			// 	cfi = config_item_index; 
			
			// sl.value = viewCurrent.system_level;
			// sub.value = viewCurrent.subsys;
			// cfi.value = viewCurrent.config_item_index;
			
			// console.log(sl.value, sl, sub.value, sub, cfi.value, cfi );

			// var div = '<div style="background: gray; color: white; font-size: 15px; padding: 10px;"> <h1>Testing session-data-storage: </h1> <h5> data persists in this div and in the wbs box, but can be adapted cross-platform</h5><br> System level: '
			// 			+ viewCurrent.system_level + ' .<br> Subsystem: '
			// 			+ viewCurrent.subsys + ' .<br> Configured Item: '
			// 			+ viewCurrent.config_item_index + '. </div>';
			// $('div#show').html(div);
			//e.preventDefault();

			 $('.pgReload').click(function(e){
			 	debugger
			 	var report = new Report(system_level.value, subsys.value, config_item_index.value);
			 	console.log(report);
				sessionStorage.setItem('current', JSON.stringify(report));

			 	saveSession(remember);
			 	console.log(e);
			 })

			 $('.clearFormData').click(function(e){
					debugger
					var report = new Report("", "", "");
			 		console.log(report);
					sessionStorage.setItem('current',  JSON.stringify(report));
					console.log('clearing session.current storage and re-loading window '+sessionStorage.current);
					window.location.reload();
				})

		}saveSession(remember);
	}
});