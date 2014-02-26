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
	})
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

// Must go last
$(document).ready(j.main);