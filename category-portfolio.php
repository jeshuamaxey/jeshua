<?php
/*
 * Template Name: Labs
 */
 get_header(); ?>
	<article class="post">
		<h2>Portfolio</h2>
		<div class="entry">
			Below are some select projects of mine complete with a description of the technologies used and links to live demos and code where posible.
		</div>
	</article>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<article class="post" id="post-<?php the_ID(); ?>">

			<h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>

			<?php //posted_on(); ?>

			<div class="entry">

				<?php the_content(); ?>

				<?php wp_link_pages(array('before' => __('Pages: '), 'next_or_number' => 'number')); ?>

			</div>

			<?php edit_post_link(__('Edit this entry.'), '<p>', '</p>'); ?>

		</article>
		
		<?php comments_template(); ?>

		<?php endwhile; endif; ?>

<?php //get_sidebar(); ?>

<?php get_footer(); ?>
