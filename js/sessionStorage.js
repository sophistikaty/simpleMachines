$(document).ready(function(){
	//------- use sessionStorage to preserve form selections through portions of the form-fill process 
	//that require page-reload, i.e. adding documents
	var remember = document.getElementById('sessionForm');

	remember.onchange = function(e){
		console.log(e);
		
		//	Function to make session data available if it exists, and record for changes to session data before page re-load

		function saveSession(remember){

				console.log('saving session');
			console.log('arguments are ', remember);

			var temp = sessionStorage.getItem('current');
			console.log(sessionStorage.current);
			debugger
			var viewCurrent = $.parseJSON(temp);

				console.log('current session data is: ', viewCurrent);
				
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

		function Report(sysLev, subSys, configItem) {
			this.system_level = sysLev;
			this.subsys = subSys;
			this.config_item_index = configItem;
		}
	}
});