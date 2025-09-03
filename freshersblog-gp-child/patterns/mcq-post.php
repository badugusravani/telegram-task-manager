<?php
/**
 * Title: MCQ Quiz Post
 * Slug: freshersblog/mcq-post
 * Categories: freshersblog
 * Description: Single quiz post scaffold with CTA and answer sections
 */

register_block_pattern(
    'freshersblog/mcq-post',
    array(
        'title'       => __( 'MCQ Quiz Post', 'freshersblog' ),
        'description' => _x( 'Single quiz post scaffold with CTA and answer sections', 'Pattern description', 'freshersblog' ),
        'content'     => '<!-- wp:post-title {"level":1} /-->

<!-- wp:paragraph -->
<p>Test your knowledge with this comprehensive quiz. Read each question carefully and select the best answer from the given options.</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"quiz-cta","layout":{"type":"constrained"}} -->
<div class="wp-block-group quiz-cta"><!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"className":"btn"} -->
<div class="wp-block-button btn"><a class="wp-block-button__link wp-element-button" href="#quiz-start">Start Quiz</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->

<!-- wp:shortcode -->
[rank_math_breadcrumb]
<!-- /wp:shortcode -->

<!-- wp:separator {"style":{"spacing":{"margin":{"top":"2rem","bottom":"2rem"}}}} -->
<hr class="wp-block-separator has-alpha-channel-opacity" style="margin-top:2rem;margin-bottom:2rem"/>
<!-- /wp:separator -->

<!-- wp:heading {"anchor":"quiz-start","level":2} -->
<h2 class="wp-block-heading" id="quiz-start">MCQ Quiz</h2>
<!-- /wp:heading -->

<!-- wp:shortcode -->
[quiz_shortcode_here]
<!-- /wp:shortcode -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Answers &amp; Explanations</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Detailed explanations for each question are provided below. Review the answers to understand the concepts better and improve your knowledge.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Try Next Quiz</h3>
<!-- /wp:heading -->

<!-- wp:group {"className":"fb-card-list","layout":{"type":"constrained"}} -->
<div class="wp-block-group fb-card-list"><!-- wp:group {"className":"fb-card","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group fb-card"><!-- wp:image {"width":"80px","height":"60px","className":"thumb"} -->
<figure class="wp-block-image thumb" style="width:80px;height:60px"><img alt="Quiz thumbnail"/></figure>
<!-- /wp:image -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"level":4,"fontSize":"medium"} -->
<h4 class="wp-block-heading has-medium-font-size">Related Quiz Title</h4>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"meta"} -->
<p class="meta">Updated Jan 15, 2024</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"fb-card","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group fb-card"><!-- wp:image {"width":"80px","height":"60px","className":"thumb"} -->
<figure class="wp-block-image thumb" style="width:80px;height:60px"><img alt="Quiz thumbnail"/></figure>
<!-- /wp:image -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"level":4,"fontSize":"medium"} -->
<h4 class="wp-block-heading has-medium-font-size">Another Quiz Title</h4>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"meta"} -->
<p class="meta">Updated Jan 12, 2024</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"fb-card","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group fb-card"><!-- wp:image {"width":"80px","height":"60px","className":"thumb"} -->
<figure class="wp-block-image thumb" style="width:80px;height:60px"><img alt="Quiz thumbnail"/></figure>
<!-- /wp:image -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"level":4,"fontSize":"medium"} -->
<h4 class="wp-block-heading has-medium-font-size">More Quiz Content</h4>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"meta"} -->
<p class="meta">Updated Jan 10, 2024</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
        'categories'  => array( 'freshersblog' ),
    )
);