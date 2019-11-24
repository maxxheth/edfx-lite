<?php 

error_reporting(-1);
ini_set('display_errors', 1);

require __DIR__ . '/views/templates/header.php';

require __DIR__ . '/views/templates/footer.php';

require __DIR__ . '/vendor/autoload.php';

function renderMarkdownPost($post_slug, $footer_template = '') {

    $Parsedown = new Parsedown();

    $handle = fopen(__DIR__ . '/views/blog/' . $post_slug . '.md', 'r');

    $contents = fread($handle, filesize(__DIR__ . '/views/blog/' . $post_slug . '.md'));       
    
    get_header();
    
    echo $Parsedown->text($contents);

    if (!empty($footer_template)) {

        get_footer($footer_template);

    } else {

        get_footer('home');

    }

}