<?php

error_reporting(-1);
ini_set('display_errors', 1);

$request = $_SERVER['REQUEST_URI'];

$root_uri = $_SERVER['SERVER_NAME'];

$header = 'http://';

$root_url = $header . $root_uri;

$trailingSlashRegex = '/(?=.*)\/$/';

$blogSlugRegex = '/(blog)/';

preg_match($trailingSlashRegex, $request, $requestMatches);

preg_match($blogSlugRegex, $request, $blogSlugResults);

/** This block of code removes trailing slashes from all URLs
 * except the home page URL. */

if (is_array($requestMatches) && count($requestMatches) > 0 && $request != '/') {
    $request = preg_replace('/(?=.*)\/$/', '', $request);

    header('Location: ' . $request, 301);
}

// if (is_array($blogSlugResults) && count($blogSlugResults) > 0) {
//     header('Location: /', 302);
// }

require_once __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/views/templates/header.php';

require_once __DIR__ . '/views/templates/footer.php';

require_once __DIR__ . '/helper_funcs/markdown-blog-router.php';

require_once __DIR__ . '/helper_funcs/prettyPrint.php';

require_once __DIR__ . '/helper_funcs/injectKeyAsMarker.php';

//require_once __DIR__ . '/helper_funcs/base64Encoder.php';

$routingData = json_decode(file_get_contents(__DIR__ . '/routing-data.json'), true);

// Inject key as marker into each routing data block.

$mainRoutingData = injectKeyAsMarker($routingData['main'], 'main');

$blogRoutingData = injectKeyAsMarker($routingData['blog'], 'blog');

$servicesRoutingData = injectKeyAsMarker($routingData['services'], 'services');

$commonRoutingData = array_merge($mainRoutingData, $blogRoutingData, $servicesRoutingData);

// prettyPrint($mainRoutingData);
$datasets = [$mainRoutingData, $blogRoutingData, $servicesRoutingData, $commonRoutingData];

// foreach ($datasets as $dataset) {
//     prettyPrint($dataset);
// }

/**
 *
 * Reminder: The routing logic needs to be adjusted to use markers instead of
 * regex expressions based on URL slugs so that routing configurations are decoupled
 * from having to use URL slugs to determine routing.
 *
 * The ideal approach in this case would be to loop through the datasets
 * and then use a switch statement to set up routing configurations
 * based on the marker for each routing dataset.
 *
 */

foreach ($commonRoutingData as $routingDataset) {

    // NEW CODE

    /**
     *
     * If the request URI isn't in the routing dataset,
     * skip to the next one.
     *
     * Otherwise, use a switch statement to process each routing dataset
     * separately according to its marker.
     *
     */

    if ($request != $routingDataset['requestURI']) {
        continue;
    } else {
        switch ($routingDataset['marker']) {

            case 'main':
                
                require __DIR__ . $routingDataset['routeFileDir'];

            break;

            case 'services':

                require __DIR__ . $routingDataset['routeFileDir'];
            
            break;
            case 'blog':

                renderMarkdownPost($routingDataset['requestURI']);
        }

        break;
    }
}


// $html = ob_get_contents();

// $minifiedHTML = HTMLMinify::minify($html);

// echo $minifiedHTML;