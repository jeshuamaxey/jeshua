// global namespace
var j = j || {};

j.main = function() {
	$('.nav-toggle').on('click', function() {
		$('body').toggleClass('active-nav');
	})
	$('.sidebar-toggle').on('click', function() {
		$('body').toggleClass('active-sidebar');
	})
};

// //uses snapfit.js library to create native app like side navigation
// j.setupNav = function() {
// 	//find .snap-draw-left & .snap-draw-right add add general class
// 	$('[class^="snap-drawer-"]').addClass('snap-drawer');
// 	var snapSettings = {
// 	    element: document.getElementById('content'),
// 	    dragger: null,
// 	    disable: 'right',
// 	    addBodyClasses: true,
// 	    hyperextensible: true,
// 	    resistance: 0.5,
// 	    flickThreshold: 50,
// 	    transitionSpeed: 0.3,
// 	    easing: 'ease',
// 	    maxPosition: 260,
// 	    minPosition: -260,
// 	    tapToClose: true,
// 	    touchToDrag: true,
// 	    slideIntent: 40,
// 	    minDragDistance: 5
// 	}
// 	//initialise the menu
// 	j.snapNav = new Snap(snapSettings);
// 	//add the toggle event listener
// 	$('.nav-toggle').on('click', function(){
// 	    if( j.snapNav.state().state=="left" ){
// 	        j.snapNav.close();
// 	    } else {
// 	        j.snapNav.open('left');
// 	    }
// 	});
// }

// //
// j.setupHeader = function() {
// 	var headroomSettings = {
// 	  "tolerance": 5,
// 	  "offset": 200,
// 	  "classes": {
// 	    "initial": "animated",
// 	    "pinned": "slideDown",
// 	    "unpinned": "slideUp"
// 	  }
// 	};
// 	$("#header").headroom(headroomSettings);
// }

// Must go last
$(document).ready(j.main);