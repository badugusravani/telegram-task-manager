<?php
/**
 * Title: Home - MCQ Hub (Hero)
 * Slug: freshersblog/home-mcq-hub-hero
 * Categories: freshersblog
 * Description: Homepage hero section with search and trending topics
 */

register_block_pattern(
    'freshersblog/home-mcq-hub-hero',
    array(
        'title'       => __( 'Home - MCQ Hub (Hero)', 'freshersblog' ),
        'description' => _x( 'Homepage hero section with search and trending topics', 'Pattern description', 'freshersblog' ),
        'content'     => '<!-- wp:group {"className":"fb-hero","layout":{"type":"constrained"}} -->
<div class="wp-block-group fb-hero"><!-- wp:heading {"textAlign":"center","level":1} -->
<h1 class="wp-block-heading has-text-align-center">Find MCQs, Chapters &amp; Quizzes</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">Practice with thousands of multiple choice questions across all subjects. Get instant answers and detailed explanations.</p>
<!-- /wp:paragraph -->

<!-- wp:search {"label":"Search","showLabel":false,"placeholder":"Search for quizzes, topics, or questions...","width":100,"widthUnit":"%","buttonText":"Search","buttonPosition":"button-inside","buttonUseIcon":true} /-->

<!-- wp:spacer {"height":"2rem"} -->
<div style="height:2rem" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center","flexWrap":"wrap"}} -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"white","textColor":"black","style":{"border":{"radius":"20px"},"spacing":{"padding":{"left":"1rem","right":"1rem","top":"0.5rem","bottom":"0.5rem"}}},"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-black-color has-white-background-color has-text-color has-background wp-element-button" style="border-radius:20px;padding-top:0.5rem;padding-right:1rem;padding-bottom:0.5rem;padding-left:1rem">Class 12 English</a></div>
<!-- /wp:button -->

<!-- wp:button {"backgroundColor":"white","textColor":"black","style":{"border":{"radius":"20px"},"spacing":{"padding":{"left":"1rem","right":"1rem","top":"0.5rem","bottom":"0.5rem"}}},"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-black-color has-white-background-color has-text-color has-background wp-element-button" style="border-radius:20px;padding-top:0.5rem;padding-right:1rem;padding-bottom:0.5rem;padding-left:1rem">Chemistry</a></div>
<!-- /wp:button -->

<!-- wp:button {"backgroundColor":"white","textColor":"black","style":{"border":{"radius":"20px"},"spacing":{"padding":{"left":"1rem","right":"1rem","top":"0.5rem","bottom":"0.5rem"}}},"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-black-color has-white-background-color has-text-color has-background wp-element-button" style="border-radius:20px;padding-top:0.5rem;padding-right:1rem;padding-bottom:0.5rem;padding-left:1rem">OOP</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"3rem"} -->
<div style="height:3rem" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="wp-block-heading has-text-align-center">Newest Quizzes</h2>
<!-- /wp:heading -->

<!-- wp:query {"queryId":1,"query":{"perPage":8,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"layout":{"type":"constrained"}} -->
<div class="wp-block-query"><!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"4/3","style":{"border":{"radius":"10px"}}} /-->

<!-- wp:post-title {"level":3,"isLink":true,"fontSize":"medium"} /-->

<!-- wp:post-date {"format":"M j, Y","style":{"typography":{"fontSize":"0.875rem"},"color":{"text":"#64748b"}}} /-->
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