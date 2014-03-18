<?php
/**
 * @package WordPress
 * @subpackage HTML5-Reset-WordPress-Theme
 * @since HTML5 Reset 2.0
 */
 get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<div class="post-wrapper" >
		
			<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
				
				<h1 class="entry-title"><?php the_title(); ?></h1>

				<p class="posted-on">
					<?php posted_on(); ?>
				</p>
				
				<div class="entry-content">
					
					<?php the_content(); ?>
					<hr>

					<p>
						<?php wp_link_pages(array('before' => __('Pages: '), 'next_or_number' => 'number')); ?>
						<br>
						<?php the_tags( __('Tags: '), ', ', ''); ?>
						<br>
						<?php posted_on(); ?>
					</p>

				</div>
				
				<?php edit_post_link(__('Edit this entry'),'','.'); ?>

				<?php if ( comments_open() ) : ?>
					<button id="show-comments" class="toggle-comments">Show Comments</button>
				<?php endif; ?>
				
			</article>

		</div>
	<div class="comments-wrapper">
		<?php comments_template(); ?>
	</div>

	<?php endwhile; endif; ?>

<?php post_navigation(); ?>

<?php get_footer(); ?>