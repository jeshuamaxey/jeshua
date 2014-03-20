<?php
/**
 * @package WordPress
 * @subpackage HTML5-Reset-WordPress-Theme
 * @since HTML5 Reset 2.0
 */
?>
	<footer id="footer" class="source-org vcard copyright" role="contentinfo">
		<small>&copy;<?php echo date("Y"); echo " "; bloginfo('name'); ?></small>
	</footer>
	
	</div> <!-- #content -->

	<?php //get_sidebar(); ?>

	<?php //wp_footer(); ?>


<!-- javascript -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src=\'<?php bloginfo("template_directory"); ?>/_/js/jquery-1.9.1.min.js\'><\/script>')</script>
<script src="<?php bloginfo('template_directory'); ?>/_/js/debouncer.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/_/js/jquery.lettering.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/_/js/functions.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/_/js/highlight/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
	
</body>

</html>
