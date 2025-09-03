<?php
/**
 * Title: All Quizzes Grid
 * Slug: freshersblog/all-quizzes-grid
 * Categories: freshersblog
 * Description: Grid layout for all quizzes with pagination
 */

register_block_pattern(
    'freshersblog/all-quizzes-grid',
    array(
        'title'       => __( 'All Quizzes Grid', 'freshersblog' ),
        'description' => _x( 'Grid layout for all quizzes with pagination', 'Pattern description', 'freshersblog' ),
        'content'     => '<!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="wp-block-heading has-text-align-center">All Quizzes</h2>
<!-- /wp:heading -->

<!-- wp:query {"queryId":2,"query":{"perPage":12,"pages":0,"offset":0,"postType":"qsm_quiz","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"layout":{"type":"constrained"}} -->
<div class="wp-block-query"><!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
<!-- wp:group {"className":"fb-card","layout":{"type":"constrained"}} -->
<div class="wp-block-group fb-card"><!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","className":"thumb"} /-->

<!-- wp:post-title {"level":3,"isLink":true,"fontSize":"medium"} /-->

<!-- wp:post-date {"format":"Updated M j, Y","style":{"typography":{"fontSize":"0.875rem"},"color":{"text":"#64748b"}},"className":"meta"} /-->

<!-- wp:post-excerpt {"moreText":"Start Quiz →","excerptLength":15} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
<!-- wp:query-pagination-previous /-->

<!-- wp:query-pagination-numbers /-->

<!-- wp:query-pagination-next /-->
<!-- /wp:query-pagination --></div>
<!-- /wp:query -->',
        'categories'  => array( 'freshersblog' ),
    )
);