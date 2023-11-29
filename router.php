<?php

require __DIR__ . '/vendor/autoload.php';

error_reporting(-1);

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);

$dotenv->load();

$carbon = new \Carbon\Carbon();

$today = $carbon->now();

$app_mode = $_ENV['APP_MODE'];

ini_set('display_errors', 1);

$request = $_SERVER['REQUEST_URI'];

$root_uri = $_SERVER['SERVER_NAME'];

$header = $app_mode === 'production' ? 'https://' : 'http://';

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


if ($request === '/assets/misc/vcards/contact_0.vcf') {
    $file = '/var/www/edfx.co/assets/misc/vcards/contact_0.vcf';

    if (file_exists($file)) {
        header('Content-Description: File Transfer');
        header('Content-Type: text/vcard');
        #header('Content-Disposition: inline; filename="'.basename($file).'"');
        header('Content-Disposition: attachment; filename="'.basename($file).'"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file));
        readfile($file);
        exit;
    } else {
        // The file does not exist, you can choose to redirect to a 404 page or something similar
        header('HTTP/1.0 404 Not Found');
        exit;
    }
}

if ($request === '/assets/videos/pretty-girl.webm') {
    $file = '/var/www/edfx.co/assets/videos/pretty-girl.webm';

    if (file_exists($file)) {
        header('Content-Description: File Transfer');
        header('Content-Type: video/webm');
        header('Content-Disposition: inline; filename="'.basename($file).'"'); // Display video inline
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file));
        readfile($file);
        exit;
    } else {
        // The file does not exist, you can choose to redirect to a 404 page or something similar
        header('HTTP/1.0 404 Not Found');
        exit;
    }
}

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

        // Check if the "publishOn" property exists and if its date is greater than today
        if (isset($routingDataset['publishOn'])) {
            $publishOn = new $carbon($routingDataset['publishOn']);
            if ($publishOn->greaterThan($today)) {
                header('Location: /blog', 302);
                continue;
            }
        }

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
