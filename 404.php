<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>404</title>
	<link rel="stylesheet" href="<?php bloginfo("template_directory"); ?>/404.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
	<div class="four-oh-four">
		<div id="tv-grid" class="tv-grid"></div>
		<div class="text">
			<p>Page not found</p>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Take me home</a>
		</div>
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src=\'<?php bloginfo("template_directory"); ?>/_/js/jquery-1.9.1.min.js\'><\/script>')</script>
	<script src="<?php bloginfo("template_directory"); ?>/_/js/404.js"></script>
</body>
</html>