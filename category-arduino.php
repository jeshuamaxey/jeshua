<?php
/*
 * Template Name: Labs
 */
 get_header(); ?>
	<article class="post">
		<h2>Arduino</h2>
		<div class="entry">
			<p><a href="http://decoded.co">Decoded</a> asked me to spend a lunch time talking to them about the Arduino, an amazing open source platform for hacking together intelligent reactive and interactive physical devices. I couldn't turn down the chance to rave about the internet of things and promptly whipped out my breadboard and wire cutters getting to work building a presentation and some fun exercises for beginners. It got to a point where I thought this might be worth sharing. Below you'll also find a few posts with some simple Arduino excercises suitable for novices.</p> 
			<p>Enough of an introduction, let's get going. Start with the presentation <a href="http://jeshuamaxey.com/labs/arduino-slides" target="_blank">here</a> (opens in a new window) and hop back to the posts below as and when you need to.</p>
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
