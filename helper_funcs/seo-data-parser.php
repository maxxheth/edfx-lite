<?php

error_reporting(-1);
ini_set('display_errors', 1);

//file_get_contents(__DIR__ . '/seo-data.json')

class SEOToolBox {

    private static $JSONSEOData = null;

    private static $pageSEOData = null;

    private static $postSEOData = null;

    private static $pageSlugs = [

        '', // Home
        'about',
        'portfolio',
        'services',
        'blog',
        'contact'

    ];

    private static $SEOData = null;

    private static $SEOTitle = null;

    private static $SEOMetaDescription = null;

    public static function SEOParser($jsonDataPath) {

        self::$JSONSEOData = json_decode(file_get_contents($jsonDataPath), true);   
    
        self::$pageSEOData = self::$JSONSEOData['pages'] ?? null;
        
        self::$postSEOData = self::$JSONSEOData['posts'] ?? null;

        $key = preg_replace('/^\//', '', $_SERVER['REQUEST_URI']);

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

    public static function printCoreSEOData($type) {

        $key = preg_replace('/^\//', '', $_SERVER['REQUEST_URI']);

        $SEOData = null;

        switch($type) {

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
    
        self::$SEOMetaDescription = $SEOData['metaDescription'] ?? null;
    
        ?>
    
            <title><?php echo self::$SEOTitle ?? 'A title has not been set for this page!'; ?></title>

            <meta name="description" content="<?php echo self::$SEOMetaDescription ?? 'A meta description has not been set for this page!'; ?>">

        <?php

    }

}