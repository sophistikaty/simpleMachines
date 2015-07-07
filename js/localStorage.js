$(document).ready(function(){
	//------- use local Storage to preserve form selections through portions of the form-fill process 
	//that require page-reload, i.e. adding documents
	
	// var Piece = function (elem) {
	// 	this.onkeydown = see(e);
	// };

	function Report(element) {
		// console.log('starting new report with element ', element);
		this.name = element.name;
		this.storageObject = {};
		var storageObject = this.storageObject;
		storageObject["nebulous"] = "";
		// console.log('this inside report constructor is ', this);

		}


	var remember = document.forms;
	// console.log('remember is ',remember);

	for (i=0; i < remember.length; i++){
		var form = remember[i];
			formChildren = form.children;
			// console.log('form is ', form);

			var report = new Report(form);

			for(i=0;i<formChildren.length;i++){
				
				var name = formChildren[i].name;
					id = formChildren[i].id;

					if (name !== undefined){
						// console.log('report at child field push is ', report);
						report.storageObject[name] = "";
						// console.log('report AFTER child field push is ', report);
						
					}

				formChildren[i].classList.add('store-it');
				
				// console.log('formChildren[i] is ', formChildren[i]);
			}
			var storageObject = JSON.stringify(report.storageObject);
			// console.log('fields are ', fields);
			// console.log('report storage object is  ', storageObject);
			localStorage.setItem(report.name, storageObject);
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
		// console.log('initiating tracker with element and report and this ', element, report, this);

		var letters = [];
		
			par = element.parentElement;
			localStoreName = par.name;
			localStoreKey = element.name;
			// console.log('element parent and id are ',par, localStoreName);
			localSection = localStorage.getItem(localStoreName);	
			storeFields = JSON.parse(localSection);
			// console.log('storeFields is ', storeFields);

			// fld = function (storeFields) {

			// 	console.log('storeFields is ', storeFields);

			// 	for (i=0;i<storeFields.length; i++){
			// 		var field = storeFields[i];
			// 		console.log('field is ', field);
			// 			console.log('localStoreKey is ', localStoreKey);

			// 		if (field === localStoreKey){
			// 			console.log('match with ', field, localStoreKey);
						
			// 		}

			// 		return field;
			// 	}
			// }
			

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
			// console.log('letters on up is ',letters);
			str = letters[0];

			// console.log('event up is ',e);
			// console.log('storeFields is ',storeFields);
			// console.log('fld up is ',fld());
			// fld(storeFields);
			// console.log('fld(storeFields) up is ',fld(storeFields));

			for (key in storeFields){

				// console.log('storeFields and key are ', storeFields , key );

				var field = key;
			
					// console.log('field is ', field, key);
					// console.log('localStoreKey is ', localStoreKey);

				if (key === localStoreKey){
					// console.log('match with ', key, localStoreKey);
					var localObject = JSON.parse(localStorage.getItem(localStoreName));
					// console.log('json parsed storageObject after field update is ', localObject);
					localObject[key] = str;
					
					// console.log('localStorage set item localStoreName with json stringify local object '
						// , localStoreName, JSON.stringify(localObject));
					var updateString = JSON.stringify(localObject);
					updateLocalStorage(localStoreName,updateString);
					
					
				}
			}

			 
		};

	}

	function updateLocalStorage (field, value){
		console.log('field, value in update localStorage is ', field, value);
		localStorage.setItem(field, value);
		console.log('inside updateLocalStorage with updated: ',localStorage);
	}

	function savelocal(remember){

			// 	console.log('saving local');
			// console.log('arguments are ', remember);

			var temp = localStorage.getItem('letters');
			// console.log('localStorage is ',localStorage);
			var viewCurrent = $.parseJSON(temp);

				// console.log('letters local data is: ', viewCurrent);
				

			 $('.pgReload').click(function(e){
			 	debugger
			 	var report = new Report(system_level.value, subsys.value, config_item_index.value);
			 	// console.log(report);
				localStorage.setItem('current', JSON.stringify(report));

			 	savelocal(remember);
			 	// console.log(e);
			 })

			 $('.clearFormData').click(function(e){
					debugger
					var report = new Report("", "", "");
			 		// console.log(report);
					localStorage.setItem('current',  JSON.stringify(report));
					// console.log('clearing local.current storage and re-loading window '+localStorage.current);
					window.location.reload();
				})

		}savelocal(remember);
	
	// remember.onchange = function(e){
	// 	console.log(e);
		
		//	Function to make local data available if it exists, and record for changes to local data before page re-load

		
	// }
});