
(function(){

	this.Machines = function(){

		// Creates an array full of objects, or machines, that are working in the app.
		// This makes it easier to add or remove without having  to change them in multiple places.

		Machines.prototype.stack = {
			'welcome':{
		        name     : 'welcome',
		        id       : 'header',
		        content  : '<h1>welcome to simple machines</h1><p>Hover over things on the page to find out what they can do.</p>'
		    },
		    'sidebar':{
		        name     : 'transitional sidebar',
		        id       : 'sidebar',
		        content  : '<h1>transitional sidebar</h1><p>Easy menu access with less dedicated real estate.</p>'
		    },
			'sideNav':{
		        name     : 'fixed-position side-nav',
		        id       : 'sideNav',
		        content  : '<h1>fixed-position side-nav</h1><p>Use the fixed-position side nav arrows to jump to the top or bottom of the page.</p>'
		    },
		    'pic-yoself': {
		        name     : 'picture yourself',
		        id       : 'pic-yoself',
		        content  : '<h1>picture yourself in this website</h1><p>Use the form fields to make changes and see what this site would look like with your customizations.</p>'
		    },
		    'local':{
		        name     : 'local storage',
		        id       : 'local',
		        content  : '<h1>local storage</h1><p>Keep or ignore all kinds of information about what you do online. Turn it on or off with the click of a button.</p>'
		    },
		    'chessClock':{
		        name     : 'task rabbit\'s chess clock',
		        id       : 'chessClock',
		        // datasource : function(){var allClocksDB = localStorage.getItem(chessClock); 
		        // 			console.log('allClocksDB on machinesJS load is ', allClocksDB);
		        // 		}(),
		        init     : function(){var clock = new chessClock;},
		        content  : '<h1>task rabbit\'s chess clock</h1><p>Multi-client freelancer? Runner? Track the time spend on all the tasks you do, in any way you choose.</p>'
		    },
		    'clues':{
		        name     : 'page tour',
		        id       : 'clues',
		        content  : '<h1>page tour</h1><p>You can turn off the page tour or turn it back on at the top of the page anytime.</p>'
		    }
		};

		var machines = Machines.prototype.stack;
		// console.log('machines are ', machines);
		// function machineSetup() {
		// 	console.log('machineSetup with chessClock datasource ', Machines.stack.chessClock.datasource());
		// }();

		//----- Listen for hover events. when an event happens, it runs contentChanger()

		function hoverView(){
			// console.log('machines in hoverView are ', machines);

		  	// The first part of the contentChanger() function has access to the
		    // key value pairs of the objects in the machines array, and can
		    // insert them into the DOM.

		    function contentChanger(ev){
		    	// console.log(ev);
		     //    console.log('this is ', this);
		        document.getElementById('clues').innerHTML = this.content;
		        var clues = document.getElementById('clues');
		        clues.classList.add("highlight");

			        setTimeout(function() {
				     clues.classList.remove("highlight");
				    }, 1000);
		    }
					document.getElementById("pgTourToggle").onclick = function(ev){
						console.log(ev);
				 		 document.getElementById('clues').classList.toggle("hidden");
				 		  document.getElementById('pgTourToggle').classList.toggle("go");
				 		 document.getElementById('On').classList.toggle("hidden");
				 		 document.getElementById('Off').classList.toggle("hidden");
				 	}

		 	function ignition(ev){
		 		// console.log(ev);
		   //      console.log('starting '+this.name);

		        var machine = this;
		        console.log('starting ', machine);
		        machine.init();
		        

		 	}

		 	for (var i in machines) {
		    	// console.log(machines[i].name, machines[i]);
		        document.getElementById(machines[i].id).onmouseover = contentChanger.bind(machines[i]);
		        document.getElementById(machines[i].id).onclick = ignition.bind(machines[i]);
		        // window.onload = machineSetup;
		        
		    }

	//--- Will possibly emulate the machines object array with something similar for buttons-------------

		// var buttons = [{
		//         name     : 'Page Tour Toggle',
		//         id       : 'pgTourToggle',
		//         action   : ''
		//     },

		// ];

		    // function buttonAction(){
		    // 	document.getElementById('clues').toggleClass('hidden');
		    // }

		    // Here we are looping through our array of objects, userTypes. When
		    // any of these elements are clicked, we bind that object to the
		    // contentChanger() function. This way it can access its key value
		    // pairs when we want to insert the HTML into the DOM.

		 //    for (var i = 0; i < buttons.length; i++) {
			// 	console.log(buttons[i]);
			// 	 document.getElementById(buttons[i].id).onclick = buttonAction.bind(buttons[i]);
			// }
		}

		// start listening for that sheezy

		 hoverView();

	//------ Function to prevent fixed-position side nav from scrolling left----------------
		// Toggles on mouse right-click

		$('#sideNav').mousedown(function(ev){
		    if(ev.which == 3)
		    {
		    	$('#sideNav').toggleClass('stayLeft');
		    }
		});


	// ------ Ajax Social feeds: "En Progresse" ---------------
	// function insta() {
	//   var hashtag = 'food';
	//   if (hashtag) {

	      var Instagram = {};

	//       Instagram.Template = {};

	      Instagram.Views = {

	        "photo": "<div class= 'photo'>" +
	            "<a href= '{url}' target='_blank'>"+ 
	            "<img class='main' src='{photo_url}' width='250' height='250' /></a>" +
	            "<p>{text}</p>" + "<span class='heart'><strong>{like_count}</strong></span>" +
	            "</div>"
	      };

	      // (function() {

	        function toScreen(photos) {
	          $.each(photos.data, function (index, photo) {
	            // console.log(photo);
	            photo = toTemplate(photo);
	            $('div#instagram').append(photo);
	          });
	        }

	          function search (hashtag) {
	          var url = "https://api.instagram.com/v1/tags/" + hashtag + "/media/recent?callback=?&amp;client_id=5d38e4277bc0461f8fa6283e68f85258"
	          $.getJSON (url, toScreen);
	          console.log(hashtag);
	        }

	//         function toTemplate(photo) {
	//           photo = {
	//             like_count: photo.likes.count,
	//             text: photo.caption.text,
	//             photo_url: photo.images.standard_resolution.url,
	//             url:photo.link
	//           };

	//           return Instagram.Template.generate(photo, Instagram.Template.Views['photo']);
	//         }

	//         Instagram.Template.generate = function (photo, template) {
	//         var re;
	        
	//         for (var attribute in photo) {
	//           // console.log(attribute);
	//           // console.log(photo);
	//           re = new RegExp('{' + attribute + '}', 'g');
	//           template = template.replace(re, photo[attribute]);
	//         }

	//         return template;
	//        };

	//         Instagram.search = search;
	//       })();

	//       Instagram.search (hashtag.tag);
	//   }
	// }
	}

})();
var engine = new Machines;