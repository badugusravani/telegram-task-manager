<?php
/**
 * QSM Quiz archive template with card grid layout
 */

get_header(); ?>

<div class="container">
    <main id="main" class="site-main">
        
        <?php if ( have_posts() ) : ?>
            
            <header class="page-header" style="text-align: center; margin-bottom: 2rem;">
                <h1 class="page-title"><?php post_type_archive_title(); ?></h1>
                <p class="archive-description">Practice quizzes with instant answers and explanations.</p>
            </header>

            <div class="fb-grid">
                <?php while ( have_posts() ) : the_post(); ?>
                    <article class="fb-card">
                        <a href="<?php the_permalink(); ?>" style="text-decoration: none; color: inherit;">
                            <div class="thumb">
                                <?php echo fb_thumb_img('medium'); ?>
                            </div>
                            <h3><?php the_title(); ?></h3>
                            <p class="meta">Updated <?php echo esc_html( get_the_modified_time( get_option('date_format') ) ); ?></p>
                            <?php if ( has_excerpt() ) : ?>
                                <p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 15 ) ); ?></p>
                            <?php endif; ?>
                        </a>
                    </article>
                <?php endwhile; ?>
            </div>

            <?php
            the_posts_pagination( array(
                'mid_size'  => 2,
                'prev_text' => __( '&laquo; Previous', 'freshersblog' ),
                'next_text' => __( 'Next &raquo;', 'freshersblog' ),
            ) );
            ?>

        <?php else : ?>
            
            <section class="no-results not-found">
                <header class="page-header">
                    <h1 class="page-title"><?php esc_html_e( 'No quizzes found', 'freshersblog' ); ?></h1>
                </header>
                <div class="page-content">
                    <p><?php esc_html_e( 'No quizzes are available at the moment. Please check back later!', 'freshersblog' ); ?></p>
                </div>
            </section>

        <?php endif; ?>

    </main>
</div>

<?php get_footer(); ?>