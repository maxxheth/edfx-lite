<?php 

error_reporting(-1);
ini_set('display_errors', 1);

use League\CommonMark\CommonMarkConverter;

function renderMarkdownPost($post_slug, $footer_template = '') {

    get_header();

    $converter = new CommonMarkConverter();
    
    $contents = file_get_contents(dirname(__DIR__, 1) . '/views/blog/' . $post_slug . '.md');

    ?>

    <article class="blog-content">

        <?php  echo $converter->convertToHtml($contents); ?>

    </article>

    <?php

    if (!empty($footer_template)) {

        get_footer($footer_template);

    } else {

        get_footer('home');

    }

}