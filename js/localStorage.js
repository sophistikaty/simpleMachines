$(document).ready(function(){
	//------- use local Storage to preserve form selections through portions of the form-fill process 
	//that require page-reload, i.e. adding documents
	
	// var Piece = function (elem) {
	// 	this.onkeydown = see(e);
	// };

	function Report(element) {
		// console.log('starting new report with element ', element);
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
			// console.log('form is ', form);

			var report = new Report(form);

			for(i=0;i<formChildren.length;i++){
				// console.log('report and report.fields inside children loop is ',report,  report.fields);
				var name = formChildren[i].name;
					id = formChildren[i].id;

					if (name !== undefined){

						childField = '{ "'+name+'" : \"\" }';
						report.fields.push(childField);
					}

				formChildren[i].classList.add('store-it');
				
				// console.log('formChildren[i] is ', formChildren[i]);
			}
			// var fields = JSON.parse(report.fields);
			// console.log('fields are ', fields);
			// console.log('report fields are ', report.fields);
			localStorage.setItem(report.name, report.fields);
			// console.log('report and local storage after children loop is ',report,  localStorage);

			var storeIt = document.getElementsByClassName('store-it');
			// console.log('storeIt is ',storeIt, storeIt.length);

			for( i = 0 ; i < storeIt.length ; i++ ){

				var storeElement = storeIt[i];
				// console.log('individual storeElement is ', storeElement);
				localTracker(storeElement, report);
			}
	}

	

	function localTracker (element, report){
		console.log('initiating tracker with element and report ', element, report);

		var letters = [];
		
			par = element.parentElement;
			localStoreName = par.name;
			localStoreKey = element.name;
			console.log('element parent and id are ',par, localStoreName);
			localSection = localStorage.getItem(localStoreName);	
			storeFields = localSection.split(",");

			fld = function (storeFields) {

				console.log('storeFields is ', storeFields);

				for (i=0;i<storeFields.length; i++){
					var field = storeFields[i];
					console.log('field is ', field);
						console.log('localStoreKey is ', localStoreKey);

					if (field === localStoreKey){
						console.log('match with ', field, localStoreKey);
						
					}

					return field;
				}
			}
			

		element.onkeydown = function(e){
			// console.log(e.keyIdentifier, e.keyCode);
			if (e.keyIdentifier === "Enter") {
				e.preventDefault();

				 	// savelocal(remember);
				 	console.log(e);
			}

			letters.pop(element.value);
			// console.log('event down is ',e);
			// console.log('letters on down is ',letters);
			// console.log ('textval down is ',element.value);
		};


		element.onkeyup = function(e){
			letters.push(element.value);
			console.log('letters on up is ',letters);
			str = letters[0];

			// console.log('event up is ',e);
			// console.log('storeFields is ',storeFields);
			// console.log('fld up is ',fld());
			// fld(storeFields);
			// console.log('fld(storeFields) up is ',fld(storeFields));

			for (i=0;i<storeFields.length; i++){

				var field = JSON.parse(storeFields[i]);
					for (var keys in field){
						key = keys;
						console.log('key is ', key);
					}
					console.log('field is ', field, key);
					console.log('localStoreKey is ', localStoreKey);

				if (key === localStoreKey){
					console.log('match with ', key, localStoreKey);
					field[key] = str;
					console.log('field updated after event listener ', field, str);
					
				}
			}

			 
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