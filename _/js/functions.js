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

	// colour the blog roll
	//var numOfArticles = $('article[class^="post"]').length;
	$('article[class^="post"]').each(function(i) {
		var classList = $(this).attr('class').split(' ');
		classList.forEach(function(c) {
			if(c.substr(0,5) == 'post-') {
				$('.'+ c).parent().addClass('post-n' + (i%4 + 1) );
			}
		});
	});

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