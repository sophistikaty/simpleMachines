$(document).ready(function(){
	//------- use localStorage to preserve form selections through portions of the form-fill process 
	//that require page-reload, i.e. adding documents
	
	var Piece = function (elem) {
		this.onkeydown = see(e);
	};

	function Report(element) {
		console.log('starting new report with element ', element);
		this.name = element.name;
		this.fields = [];
			var nebulous = { "nebulous" : "" };
				nebulousField = JSON.stringify(nebulous);
		this.fields.push(nebulousField);

		}


	var remember = document.forms;
	// console.log('remember is ',remember);

	for (i=0; i < remember.length; i++){
		var form = remember[i];
			formChildren = form.children;
			console.log('form is ', form);

			var report = new Report(form);

			for(i=0;i<formChildren.length;i++){
				console.log('report and report.fields inside children loop is ',report,  report.fields);
				var name = formChildren[i].name;
					id = formChildren[i].id

					if (name !== undefined){

						childField = '{ "'+name+'" : \"\" }';
						report.fields.push(childField);
					}

				formChildren[i].classList.add('store-it');
				
				// console.log('formChildren[i] is ', formChildren[i]);
			}
			// var fields = JSON.parse(report.fields);
			// console.log('fields are ', fields);
			// console.log('report fields are ', report.fields, fields);
			localStorage.setItem(report.name, report.fields);
			console.log('report and local storage after children loop is ',report,  localStorage);

			var local = document.getElementsByClassName('store-it');
			// console.log('local is ',local);

			for( i = 0 ; i < local.length; i++ ){

				var localElement = local[i];
				// console.log('individual localElement is ', localElement);
				localTracker(localElement, report);
			}
	}

	

	function localTracker (element, report){

		var letters = [];
		
			par = element.parentElement;
			localStoreName = par.name;
			localStoreKey = element.name;
			console.log('element parent and id are ',par, localStoreName);
			localSection = localStorage.getItem(localStoreName);	
			storeFields = localSection.split(",");
			for (i=0;i<storeFields.length; i++){
				var field = storeFields[i];
				console.log('field is ', field);
			}
			

		element.onkeydown = function(e){
			// console.log(e.keyIdentifier, e.keyCode);
			if (e.keyIdentifier === "Enter") {
				e.preventDefault();

				 	savelocal(remember);
				 	console.log(e);
			}

			letters.pop(element.value);
			console.log('event down is ',e);
			console.log('letters on down is ',letters);
			console.log ('textval down is ',element.value);
		};


		element.onkeyup = function(e){
			letters.push(element.value);
			console.log('letters on up is ',letters);

			console.log('event up is ',e);

			var storeFields = localSection.split(",");
				field = JSON.parse(storeFields[0]);
			console.log('got field ready for update after event listener ', field);
			// return letters;
			 
		};

	}

	function savelocal(remember){

				console.log('saving local');
			console.log('arguments are ', remember);

			var temp = localStorage.getItem('letters');
			console.log('localStorage is ',localStorage);
			var viewCurrent = $.parseJSON(temp);

				console.log('letters local data is: ', viewCurrent);
				

			 $('.pgReload').click(function(e){
			 	debugger
			 	var report = new Report(system_level.value, subsys.value, config_item_index.value);
			 	console.log(report);
				localStorage.setItem('current', JSON.stringify(report));

			 	savelocal(remember);
			 	console.log(e);
			 })

			 $('.clearFormData').click(function(e){
					debugger
					var report = new Report("", "", "");
			 		console.log(report);
					localStorage.setItem('current',  JSON.stringify(report));
					console.log('clearing local.current storage and re-loading window '+localStorage.current);
					window.location.reload();
				})

		}savelocal(remember);
	
	// remember.onchange = function(e){
	// 	console.log(e);
		
		//	Function to make local data available if it exists, and record for changes to local data before page re-load

		
	// }
});