<?php

error_reporting(-1);
ini_set('display_errors', 1);

require dirname(__DIR__, 1) . '/blog_parser.php';

process_routes(array(

    '/blog/hello-world'

));