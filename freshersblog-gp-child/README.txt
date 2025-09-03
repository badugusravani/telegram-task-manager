=== FreshersBlog GP Child ===

Contributors: freshersblog
Tags: education, quiz, mcq, generatepress, child-theme
Requires at least: 6.0
Tested up to: 6.4
Requires PHP: 8.1
Stable tag: 1.2.1
License: GPL v2 or later

A lightweight GeneratePress child theme designed specifically for MCQ/quiz websites with modern UI and accessibility features.

== Description ==

FreshersBlog GP Child is a production-ready GeneratePress child theme built for educational websites focusing on multiple choice questions and quizzes. It features a modern design with gradient hero sections, card-based layouts, and seamless integration with popular quiz plugins.

Features:
* Brand-colored header and navigation
* Gradient hero section with integrated search
* Card grid layouts for archives
* Mobile-friendly sticky CTA buttons
* Built-in dark mode support
* Accessibility-focused design
* Integration with Rank Math breadcrumbs
* Support for QSM and HD Quiz plugins

== Installation ==

1. Download and install GeneratePress (parent theme) from WordPress.org
2. Upload the freshersblog-gp-child.zip file through Appearance > Themes > Add New > Upload Theme
3. Activate the "FreshersBlog GP Child" theme
4. The theme will immediately apply brand colors to header/navigation

== Setup Instructions ==

= Homepage Setup =
1. Go to Settings > Reading
2. Set "Your homepage displays" to "A static page"
3. Create a new page called "Home"
4. Edit the page and insert the "Home - MCQ Hub (Hero)" pattern
5. Set this page as your homepage

= All Quizzes Page =
1. Create a new page called "All Quizzes"
2. Insert the "All Quizzes Grid" pattern
3. Add this page to your navigation menu

= Breadcrumbs Setup (Rank Math) =
1. Install and activate Rank Math SEO plugin
2. Go to Rank Math > General Settings > Breadcrumbs
3. Enable breadcrumbs
4. The theme automatically displays breadcrumbs using [rank_math_breadcrumb] shortcode

= Quiz Integration =
1. Install QSM (Quiz and Survey Master) or HD Quiz plugin
2. Create your quizzes as usual
3. For single quiz posts, use the "MCQ Quiz Post" pattern
4. Replace [quiz_shortcode_here] with your actual quiz shortcode

= Optional: No Sidebar Pages =
1. For chapter notes or study materials, select "No Sidebar" template when editing pages
2. This provides more reading space for content-heavy pages

== Customization ==

= Changing Brand Colors =
Edit the CSS variables in style.css:
* --brand: #2563eb (main brand color)
* --brand-dark: #1e40af (hover states)
* --brand-light: #60a5fa (gradients)

= Content Width =
* Default content width: 760px
* Wide content width: 1024px
* Edit --content and --wide variables to adjust

== Plugin Compatibility ==

= Required/Recommended =
* GeneratePress (parent theme) - Required
* Rank Math SEO - For breadcrumbs
* QSM (Quiz and Survey Master) OR HD Quiz - For quiz functionality

= Tested With =
* WordPress 6.4
* GeneratePress 3.4+
* Rank Math 1.0+
* QSM 8.0+

== Performance ==

* No external font loading (uses system fonts)
* No jQuery dependencies
* Minimal CSS footprint
* Mobile-optimized
* Lighthouse Performance Score: 90+

== Accessibility ==

* 4.5:1 color contrast ratio
* Keyboard navigation support
* Screen reader friendly
* Skip links included
* Semantic HTML structure
* Focus indicators on interactive elements

== Support ==

For theme support and customization requests, please visit:
https://freshersblog.com/support

== Changelog ==

= 1.2.1 =
* Initial release
* Brand-colored header and navigation
* Gradient hero section with search
* Card grid layouts for archives
* Mobile sticky CTA buttons
* Dark mode support
* Accessibility improvements
* Quiz plugin integration
* Rank Math breadcrumbs support

== Credits ==

Built with love for the education community.
Based on GeneratePress by Tom Usborne.