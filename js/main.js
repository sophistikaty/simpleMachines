
$(document).ready(function(){

	// Function to prevent fixed-position side nav from scrolling left
	// Toggles on mouse right-click

	$('#sideNav').mousedown(function(ev){
	    if(ev.which == 3)
	    {
	    	$('#sideNav').toggleClass('stayLeft');
	    }
	});

//Function to change #clues html based on what user hovers over

	// Creates an array full of objects, or nachines, that are working in the app.
	// This makes it easier to add or remove without having
	// to change them in multiple places.

	var machines = [{
	        name     : 'welcome',
	        id       : 'header',
	        content  : '<h1>welcome to simple machines</h1><p>Hover over things on the page to find out what they can do.</p>'
	    },
		{
	        name     : 'fixed-position side-nav',
	        id       : 'sideNav',
	        content  : '<h1>fixed-position side-nav</h1><p>Use the fixed-position side nav arrows to jump to the top or bottom of the page.</p>'
	    },
	    {
	        name     : 'Page Tour',
	        id       : 'clues',
	        content  : '<h1>page tour</h1><p>You can turn off the page tour or turn it back on at the top of the page anytime.</p>'
	    }
	];

	// var buttons = [{
	//         name     : 'Page Tour Toggle',
	//         id       : 'pgTourToggle',
	//         action   : ''
	//     },

	// ];

	// Listen for hover events. when an event happens, it runs contentChanger()

	function hoverView(){

	  	// The first part of the contentChanger() function has access to the
	    // key value pairs of the objects in the machines array, and can
	    // insert them into the DOM.

	    function contentChanger(ev){
	    	// console.log(ev);
	     //    console.log('this is '+this.name);
	        document.getElementById('clues').innerHTML = this.content;
	        var clues = document.getElementById('clues');
	        clues.classList.add("highlight");

		        setTimeout(function() {
			     clues.classList.remove("highlight");
			    }, 1000);
			 // if (this.name === 'Page Tour') {
			 	
			 // }
	    }
				document.getElementById("pgTourToggle").onclick = function(ev){
					console.log(ev);
			 		 document.getElementById('clues').classList.toggle("hidden");
			 		  document.getElementById('pgTourToggle').classList.toggle("go");
			 		 document.getElementById('On').classList.toggle("hidden");
			 		 document.getElementById('Off').classList.toggle("hidden");
			 	}

	    // function buttonAction(){
	    // 	document.getElementById('clues').toggleClass('hidden');
	    // }

	    // Here we are looping through our array of objects, userTypes. When
	    // any of these elements are clicked, we bind that object to the
	    // contentChanger() function. This way it can access its key value
	    // pairs when we want to insert the HTML into the DOM.

	    for (var i = 0; i < machines.length; i++) {
	    	console.log(machines[i]);
	        document.getElementById(machines[i].id).onmouseover = contentChanger.bind(machines[i]);
	        
	    }

	 //    for (var i = 0; i < buttons.length; i++) {
		// 	console.log(buttons[i]);
		// 	 document.getElementById(buttons[i].id).onclick = buttonAction.bind(buttons[i]);
		// }
	}

	// start listening for that sheezy

	 hoverView();


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


});