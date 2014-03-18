var f = {};
var four = [3,7,8,11,13,15,16,17,18,19,23];
var zero = [2,6,8,11,13,16,18,22];
var spacing = 800;

/*
* sets the displaying of 404 in motion
*/
f.main = function() {
	//create img tag
	f.src = window.location.origin + '/wp-content/themes/jeshua-3/img/vhs.gif';
	var tv = '<img src="' + f.src + '" class="tv blackout"></img>';
	//add 25 image tags
	for (var i = 25; i > 0; i--) {
		$('#tv-grid').append(tv);
	};

	//turn on tvs in random order
	f.startup = setInterval(function() {
		var $blackout = $('.blackout');
		if(!$blackout.length) {
			clearInterval(f.startup)
		} else {
			var n = Math.floor(Math.random()*$blackout.length);
			$($blackout[n]).removeClass('blackout');
		}
	}, 40);

	//display 1st four immediately
	setInterval(function() {
		f.blackout(four);
	}, spacing*4)

	//display zero
	setTimeout(function() {
		setInterval(function() {
			f.blackout(zero);
		}, spacing*4);
	}, spacing);

	//display 2nd four
	setTimeout(function() {
		setInterval(function() {
			f.blackout(four);
		}, spacing*4);
	}, spacing*2);

}

/*
* blackouts the tvs indicated by the
* array passed as an arguement
*/
f.blackout = function(num) {
	//length of time char is displayed
	var time = 500;
	//blackout out tvs
	for (var i = num.length - 1; i >= 0; i--) {
		$($('.tv')[num[i]]).addClass('blackout')//css('opacity', 0.1);
	};
	//wait before showing them again
	setTimeout(function() {
		for (var i = num.length - 1; i >= 0; i--) {
			$($('.tv')[num[i]]).removeClass('blackout')//css('opacity', 1);
		};
	}, time)
}

$(document).ready(f.main);