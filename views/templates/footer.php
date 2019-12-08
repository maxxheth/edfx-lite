<?php 

error_reporting(-1);
ini_set('display_errors', 1);


if (!function_exists('get_footer')) {

    function get_footer($route) {

        global $root_url, $root_uri;
        
        ?>

            <section class="edfx-footer">
                <div class="edfx-footer__half">
                    <div class="edfx-footer__links">
                        <a href="<?php echo $root_url . '/'; ?>" class="edfx-footer__link">Home</a>
                        <a href="<?php echo $root_url . '/about'; ?>" class="edfx-footer__link">About</a>
                        <a href="<?php echo $root_url . '/services'; ?>" class="edfx-footer__link">Services</a>
                        <a href="<?php echo $root_url . '/portfolio'; ?>" class="edfx-footer__link">Portfolio</a>
                        <a href="<?php echo $root_url . '/blog'; ?>" class="edfx-footer__link">Blog</a>
                        <a href="<?php echo $root_url . '/contact'; ?>" class="edfx-footer__link">Contact</a>
                    </div>
                    <img id="edfx-logo" class="edfx-footer__logo" src="<?php echo $root_url . '/images/edfx-logo.png'; ?>">
                </div>
                <div class="edfx-footer__half">
                    <div class="edfx-footer__social-media-links">
                        <a href="#" class="edfx-footer__social-media-link"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="edfx-footer__social-media-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="edfx-footer__social-media-link"><i class="fab fa-linkedin"></i></a>

                    </div>
                </div>
                </div>
            </section>

            </main>

            <script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js"></script>

            <?php switch($route) : case 'home' : ?>

                    <script async defer src="/assets/js/dist/home.bundle.js"></script>

                <?php break; case 'about' : ?>

                    <script async defer src="/assets/js/dist/about.bundle.js"></script>

                <?php break; case 'portfolio' : ?>

                    <script async defer src="/assets/js/dist/portfolio.bundle.js"></script>

                <?php break; case 'services' : ?>

                    <script async defer src="/assets/js/dist/services.bundle.js"></script>

                <?php break; case 'contact' : ?>

                    <script async defer src=""></script>

                <?php break; ?>

            <?php endswitch; ?>



            <script id="__bs_script__">
                //<![CDATA[
                document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.7'><\/script>"
                    .replace("HOST", location.hostname));
                //]]>
            </script>

            </body>

        <?php
        
    }
}