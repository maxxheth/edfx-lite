<?php

error_reporting(-1);
ini_set('display_errors', 1);

$request = $_SERVER['REQUEST_URI'];

$root_uri = $_SERVER['SERVER_NAME'];

$header = 'https://';

$root_url = $header . $root_uri;

$trailingSlashRegex = '/(?=.*)\/$/';

$blogSlugRegex = '/(blog)/';

$emrgSlugRegex = '/emrg\/(.*)/';

$emrgOnlySlugRegex = '/(emrg)/';

preg_match($emrgSlugRegex, $request, $emrgSlugResults);

$emrgOnlySlugResults = array_filter($emrgSlugResults, function ($result) use ($emrgOnlySlugRegex) {
    preg_match($emrgOnlySlugRegex, $result, $resultMatches);

    return count($resultMatches) > 0;
});

// if (isset($emrgOnlySlugResults)) {
    
// }

// echo '<pre>';

// print_r($emrgSlugResults);

// echo '</pre>';

preg_match($trailingSlashRegex, $request, $requestMatches);

preg_match($blogSlugRegex, $request, $blogSlugResults);

/** This block of code removes trailing slashes from all URLs
 * except the home page URL. */

if (is_array($requestMatches) && count($requestMatches) > 0 && $request != '/') {
    $request = preg_replace('/(?=.*)\/$/', '', $request);

    header('Location: ' . $request, 301);
}

if (is_array($blogSlugResults) && count($blogSlugResults) > 0) {
    header('Location: /', 302);
}

require_once __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/views/templates/header.php';

require_once __DIR__ . '/views/templates/footer.php';

require_once __DIR__ . '/helper_funcs/markdown-blog-router.php';

//require_once __DIR__ . '/helper_funcs/base64Encoder.php';

$routingData = json_decode(file_get_contents(__DIR__ . '/routing-data.json'), true);

$mainRoutingData = $routingData['main'];

$blogRoutingData = $routingData['blog'];

$servicesRoutingData = $routingData['services'];

$commonRoutingData = array_merge($mainRoutingData, $blogRoutingData, $servicesRoutingData);

foreach ($commonRoutingData as $routeKey => $routingDataset) {
    preg_match('/^\/(blog)\/\w+/', $routingDataset['requestURI'], $blogMatches);

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

    if (count($blogMatches) > 0) {
        if ($request == $routingDataset['requestURI']) {
            $blogPostSlug = preg_replace('/\/(blog)\//', '', $routingDataset['requestURI']);
        
            renderMarkdownPost($blogPostSlug);

            break;
        }
    } else {
        if ($request == $routingDataset['requestURI']) {
            require __DIR__ . $routingDataset['routeFileDir'];

            break;
        }
    }
}


// $html = ob_get_contents();

// $minifiedHTML = HTMLMinify::minify($html);

// echo $minifiedHTML;
