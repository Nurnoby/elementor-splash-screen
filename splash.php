add_action('wp_body_open', function () {

if ( ! is_front_page() ) {
return;
}

if ( ! class_exists('\Elementor\Plugin') ) {
return;
}

echo '<div id="intro-overlay">';

  echo \Elementor\Plugin::instance()
  ->frontend
  ->get_builder_content_for_display(1259);

  echo '</div>';

});