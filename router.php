<?php 

error_reporting(-1);
ini_set('display_errors', 1);

$request = $_SERVER['REQUEST_URI'];

$root_uri = $_SERVER['SERVER_NAME'];

$header = $_SERVER['REQUEST_SCHEME'] . '://';

$root_url = $header . $root_uri;

require_once __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/views/templates/header.php';

require_once __DIR__ . '/views/templates/footer.php';

require_once __DIR__ . '/helper_funcs/markdown-blog-router.php';

require_once __DIR__ . '/helper_funcs/base64Encoder.php';

$routingData = json_decode(file_get_contents(__DIR__ . '/routing-data.json'), true);

$mainRoutingData = $routingData['main'];

$blogRoutingData = $routingData['blog'];

$commonRoutingData = array_merge($mainRoutingData, $blogRoutingData);

foreach($commonRoutingData as $routeKey => $routingDataset) {

    preg_match('/^\/(blog)\/\w+/', $routingDataset['requestURI'], $matches);

    /**
     * If there are no matches containing the blog slug,
     * then test to see if the request matches the request URI property 
     * of the current $routingDataset array.
     * 
     * If true, serve the PHP file for that route and break the loop.
     * 
     * If there's a match containing the blog slug, strip it and 
     * pass the remaining URL slug to the renderMarkdownPost function,
     * which will fetch the corresponding Markdown file and render it. 
     * 
     */

    if (!count($matches) > 0) { 

        if ($request == $routingDataset['requestURI']) {

            require __DIR__ . $routingDataset['routeFileDir'];

            break;

        }

    } else {

        if ($request == $routingDataset['requestURI']) {

            $blogPostSlug = preg_replace('/\/(blog)\//', '', $routingDataset['requestURI']);
        
            renderMarkdownPost($blogPostSlug);

            break;

        }

    }

}