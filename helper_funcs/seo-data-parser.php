<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

//file_get_contents(__DIR__ . '/seo-data.json')

/**
 *
 * The goal of this class is to provide utility methods for injecting SEO
 * data into pages efficiently.
 *
 * There's a distinct
 *
 */

class SEOToolBox
{
    private static $JSONSEOData = null;

    private static $pageSEOData = null;

    private static $postSEOData = null;

    private static $pageSlugs = [];

    private static $SEOTitle = null;

    private static $SEOMetaDescription = null;

    private static function getKey()
    {
        $pageTypes = '(services|portfolio|testimonial)';

        preg_match('/^\/' . $pageTypes . '\/(?=\w+)/', $_SERVER['REQUEST_URI'], $keyMatches);

        if (is_array($keyMatches) && count($keyMatches) > 0) {
            $key = preg_replace('/^\/' . $pageTypes . '\/(?=\w+)/', '', $_SERVER['REQUEST_URI']);
        } else {
            $key = preg_replace('/^\//', '', $_SERVER['REQUEST_URI']);
        }

        return $key;
    }

    public static function insertPageSlugs($pageSlugs = [])
    {
        self::$pageSlugs = $pageSlugs;
    }

    public static function SEOParser($jsonDataPath)
    {
        self::$JSONSEOData = json_decode(file_get_contents($jsonDataPath), true);
    
        self::$pageSEOData = self::$JSONSEOData['pages'] ?? null;
        
        self::$postSEOData = self::$JSONSEOData['posts'] ?? null;

        $key = self::getKey();

        if (in_array($key, self::$pageSlugs) || empty($key)) { // An empty key will default to "home"
            
            if (isset(self::$pageSEOData)) {
                self::printCoreSEOData('page');
            }
        } else {
            if (isset(self::$postSEOData)) {
                self::printCoreSEOData('post');
            }
        }
    }

    

    public static function printCoreSEOData($type)
    {
        $key = self::getKey();

        $SEOData = null;

        switch ($type) {

            case 'page':
        
                // If the key resolves to an empty string, return the 'home' string.

                $pageSEODataKey = !empty($key) ? $key : 'home';

                if (isset(self::$pageSEOData[$pageSEODataKey])) {
                    $SEOData = self::$pageSEOData[$pageSEODataKey];
                } else {
                    ?>

                        <title>SEO data has not been set for this page.</title>

                        <meta name="description" content="SEO data has not been set for this page.">

                    <?php

                    return;
                }
            
                
                
            break;
            
            case 'post':

                if (strpos($key, 'blog') > -1) {
                    $key = preg_replace('/\/(blog)\//', '', $_SERVER['REQUEST_URI']);
                    
                    $SEOData = self::$postSEOData[$key];
                }
                
            break;

        }

        self::$SEOTitle = $SEOData['title'] ?? null;
    
        self::$SEOMetaDescription = $SEOData['metaDescription'] ?? null; ?>
    
            <title><?php echo self::$SEOTitle ?? 'A title has not been set for this page!'; ?></title>

            <meta name="description" content="<?php echo self::$SEOMetaDescription ?? 'A meta description has not been set for this page!'; ?>">

        <?php
    }
}
