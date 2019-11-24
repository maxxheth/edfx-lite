<?php 

require __DIR__ . '/vendor/autoload.php';

error_reporting(-1);
ini_set('display_errors', 1);

$article_route = $_SERVER['REQUEST_URI'];

$Parsedown = new Parsedown();

function process_routes($routes = array()) {

    global $article_route, $Parsedown;

    foreach($routes as $route) {

        switch($route) {

            case $article_route: 

                $handle = fopen($route . 'md', 'r');

                $contents = fread($handle, filesize($route . 'md'));

                echo $Parsedown->text($contents);

            break;
        }

    }

}


process_routes(array(
    '/view/blog/hello-world'
));