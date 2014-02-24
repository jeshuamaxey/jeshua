// global namespace
var j = j || {};

j.main = function() {
	$('.nav-toggle').on('click', function() {
		$('html').toggleClass('scroll-lock');
		$('body').toggleClass('active-nav');
	})
	$('.sidebar-toggle').on('click', function() {
		$('html').toggleClass('scroll-lock');
		$('body').toggleClass('active-sidebar');
	})
};

//
j.setupHeader = function() {
	var headroomSettings = {
	  "tolerance": 5,
	  "offset": 200,
	  "classes": {
	    "initial": "animated",
	    "pinned": "slideDown",
	    "unpinned": "slideUp"
	  }
	};
	$("#header").headroom(headroomSettings);
}

// Must go last
$(document).ready(j.main);