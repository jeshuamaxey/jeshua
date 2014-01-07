// Browser detection for when you get desparate.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

var app = app || {};

app.main = function() {
	app.setupNav();
};

app.setupNav = function() {
	//find .snap-draw-left & .snap-draw-right add add general class
	$('[class^="snap-drawer-"]').addClass('snap-drawer');
	var snapSettings = {
	    element: document.getElementById('content'),
	    dragger: null,
	    disable: 'none',
	    addBodyClasses: true,
	    hyperextensible: true,
	    resistance: 0.5,
	    flickThreshold: 50,
	    transitionSpeed: 0.3,
	    easing: 'ease',
	    maxPosition: 200,
	    minPosition: -200,
	    tapToClose: true,
	    touchToDrag: true,
	    slideIntent: 40,
	    minDragDistance: 5
	}
	//initialise the menu
	app.snapNav = new Snap(snapSettings);
	//add the toggle event listener
	$('').on('click', function(){
	    if( app.snapNav.state().state=="left" ){
	        app.snapNav.close();
	    } else {
	        app.snapNav.open('left');
	    }
	});
}

// Must go last
$(document).ready(app.main);