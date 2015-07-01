$(document).ready(function(){
	//------- use sessionStorage to preserve form selections through portions of the form-fill process 
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
			sessionStorage.setItem(report.name, report.fields);
			console.log('report and session storage after children loop is ',report,  sessionStorage);

			var sesh = document.getElementsByClassName('store-it');
			// console.log('sesh is ',sesh);

			for( i = 0 ; i < sesh.length; i++ ){

				var seshElement = sesh[i];
				// console.log('individual seshElement is ', seshElement);
				SeshTracker(seshElement, report);
			}
	}

	

	function SeshTracker (element, report){

		var letters = [];
		
			par = element.parentElement;
			sessionStoreName = par.name;
			console.log('element parent and id are ',par, sessionStoreName);
			sessionSection = sessionStorage.getItem(sessionStoreName);	
				console.log('getting session section ', sessionSection);

		element.onkeydown = function(e){
			// console.log(e.keyIdentifier, e.keyCode);
			if (e.keyIdentifier === "Enter") {
				e.preventDefault();

				 	saveSession(remember);
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

			var storeFields = sessionSection.split(",");
				field = JSON.parse(storeFields[0]);
			console.log('got field ready for update after event listener ', field);
			// return letters;
			 
		};

	}

	function saveSession(remember){

				console.log('saving session');
			console.log('arguments are ', remember);

			var temp = sessionStorage.getItem('letters');
			console.log('sessionStorage is ',sessionStorage);
			var viewCurrent = $.parseJSON(temp);

				console.log('letters session data is: ', viewCurrent);
				

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
	
	// remember.onchange = function(e){
	// 	console.log(e);
		
		//	Function to make session data available if it exists, and record for changes to session data before page re-load

		
	// }
});