<?php 

error_reporting(-1);
ini_set('display_errors', 1);


if (!function_exists('get_footer')) {

    

    function get_footer($route) {

        // $home_js_route = $route . '/assets/js/dist/bundle.home.js';
        // $about_js_route = $route . '/assets/js/dist/bundle.about.js';
    
        ?>
    
        </main>
    
            <?php switch($route) : case 'home' : ?>
    
                <script async defer src="node_modules/three/build/three.min.js"></script>
                
                <script async defer src="assets/js/effects/vanta.birds.min.js"></script>
                
                <script async defer src="assets/js/dist/home.bundle.js"></script>
    
                <?php break; case 'about' : ?>
    
                    <script async defer src="assets/js/dist/about.bundle.js"></script>
    
                <?php break; case 'portfolio' : ?>
    
                    <script async defer src="assets/js/dist/portfolio.bundle.js"></script>
    
                <?php break; case 'services' : ?>
    
                    <script async defer src=""></script>
    
                <?php break; case 'contact' : ?>
    
                    <script async defer src=""></script>
    
                <?php break; ?>
    
            <?php endswitch; ?>

            <script id="__bs_script__">//<![CDATA[ 
                document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.7'><\/script>".replace("HOST", location.hostname)); 
            //]]></script>    
        
        </body>
    
        <?php
    
    }
}

