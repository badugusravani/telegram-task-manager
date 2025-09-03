<?php
/**
 * FreshersBlog GP Child Theme Functions
 */

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Enqueue child theme stylesheet
 */
function fb_enqueue_child_styles() {
    $theme_version = wp_get_theme()->get('Version');
    
    wp_enqueue_style(
        'fb-child-style',
        get_stylesheet_uri(),
        array( 'generate-style' ),
        $theme_version
    );
}
add_action( 'wp_enqueue_scripts', 'fb_enqueue_child_styles' );

/**
 * Replace GeneratePress footer credit
 */
add_filter( 'generate_footer_copyright', function( $output ) {
    return '© ' . date('Y') . ' Freshers Blog. All rights reserved.';
}, 10, 1 );

/**
 * Show "Updated on {date}" under single post titles
 */
add_action( 'generate_after_entry_title', function() {
    if ( is_singular( 'post' ) ) {
        echo '<p class="meta updated-on">Updated on ' . esc_html( get_the_modified_time( get_option('date_format') ) ) . '</p>';
    }
}, 12 );

/**
 * Helper to output thumbnail or SVG placeholder
 */
function fb_thumb_img( $size = 'medium' ) {
    if ( has_post_thumbnail() ) {
        return get_the_post_thumbnail( null, $size, array( 'class' => 'thumb-img' ) );
    }
    
    return '<img class="thumb-img" alt="No image" src="data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"600\\" height=\\"400\\"><rect width=\\"100%\\" height=\\"100%\\" fill=\\"%23f3f4f6\\"/><text x=\\"50%\\" y=\\"50%\\" dominant-baseline=\\"middle\\" text-anchor=\\"middle\\" fill=\\"%239ca3af\\" font-size=\\"20\\">No image</text></svg>">';
}

/**
 * Register block patterns
 */
function fb_register_block_patterns() {
    // Register pattern category
    register_block_pattern_category(
        'freshersblog',
        array( 'label' => __( 'Freshers Blog', 'freshersblog' ) )
    );

    // Load patterns from patterns directory
    $patterns_dir = get_stylesheet_directory() . '/patterns/';
    $pattern_files = array(
        'home-mcq-hub-hero.php',
        'all-quizzes-grid.php',
        'mcq-post.php'
    );

    foreach ( $pattern_files as $file ) {
        if ( file_exists( $patterns_dir . $file ) ) {
            include_once $patterns_dir . $file;
        }
    }
}
add_action( 'init', 'fb_register_block_patterns' );

/**
 * Add skip link for accessibility
 */
add_action( 'generate_before_header', function() {
    echo '<a class="skip-link screen-reader-text" href="#main">Skip to main content</a>';
} );

/**
 * Customize excerpt length for cards
 */
function fb_custom_excerpt_length( $length ) {
    if ( is_category() || is_post_type_archive( 'qsm_quiz' ) ) {
        return 15;
    }
    return $length;
}
add_filter( 'excerpt_length', 'fb_custom_excerpt_length' );