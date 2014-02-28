// global namespace
var j = j || {};

j.main = function() {
	//toggle navigation pane
	$('.nav-toggle').on('click', function() {
		$('html').toggleClass('scroll-lock');
		$('body').toggleClass('active-nav');
	});

	//toggle sidebar pane
	$('.sidebar-toggle').on('click', function() {
		$('html').toggleClass('scroll-lock');
		$('body').toggleClass('active-sidebar');
	});

	//view comments
	$('#show-comments').on('click', function() {
		$('.comments-wrapper').show();
		var y = $('.comments-wrapper').offset().top + 5;
		j.smoothScrollTop(y, 500);
	});
	$('#hide-comments').on('click', function() {
		var y = $('.post').offset().top + 5;
		j.smoothScrollTop(0, 1000, function() {
			$('.comments-wrapper').hide();
		});
	});

	//intercept navigation to post to add colour infor to URL
	$('.blog .post h2 a').on('click', j.goToPost);

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

j.goToPost = function(e) {
	e.preventDefault();
	self = this;
	var colourScheme;
	$('.blog .post h2 a').each(function(i) {
		if( $(this).attr('href') == $(self).attr('href') ) colourScheme = i%4;
	});
	console.log($(self).attr('href'))
	//window.location = $(self).attr('href') + 
}

j.smoothScrollTop = function(y, dur, callback) {
	//set defaults
	var y = y || 0;
	var dur = dur || 1000;
	var callback = callback || null;
	//scroll
	$('html,body').animate({
    scrollTop: y
  }, dur, callback);

}

// Must go last
$(document).ready(j.main);