<?php 

error_reporting(E_ALL);
ini_set('display_errors', true);

class PrefetchGenerator {

    public $prefetchLinks = [
        'path' => [
            'prefetchHref' => '/path-to-asset/asset.js',
            'nextHref' => '/path-to-page'
        ]
    ];

    public $rootUrl = '';

    public function __construct($prefetchLinks = [], $autoPrint = false, $rootUrl = '') {

        $this->prefetchLinks = $prefetchLinks;

        $this->rootUrl = $rootUrl;

        if ($autoPrint && !empty($rootUrl)) {

            $this->printLinks();

        } else {

            throw new Exception("Please enter a root URL!");

        }

    }

    public function printLinks() {

        if (count($this->prefetchLinks) > 0) {

            ?> 

                <?php foreach($this->prefetchLinks as $linkSet) : ?>

                    <link rel="prefetch" href="<?php echo $linkSet->prefetchHref; ?>">

                    <link rel="next" href="<?php echo $this->rootUrl . $linkSet->nextHref; ?>">

                <?php endforeach; ?>

            <?php            

        }

    }     

}