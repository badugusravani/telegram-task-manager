<?php
/**
 * Template Name: No Sidebar
 * 
 * Page template without sidebar
 */

// Force no sidebar layout
add_filter( 'generate_sidebar_layout', function() {
    return 'no-sidebar';
} );

get_header(); ?>

<div class="container">
    <main id="main" class="site-main">
        
        <?php while ( have_posts() ) : the_post(); ?>
            
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                
                <header class="entry-header">
                    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                </header>

                <div class="entry-content">
                    <?php
                    the_content();
                    
                    wp_link_pages( array(
                        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'freshersblog' ),
                        'after'  => '</div>',
                    ) );
                    ?>
                </div>

            </article>

        <?php endwhile; ?>

    </main>
</div>

<?php get_footer(); ?>