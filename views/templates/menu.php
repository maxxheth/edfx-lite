<?php

error_reporting(-1);
ini_set('display_errors', 1);

if (!function_exists('loadMenu')) {


function loadMenu() {

    $menu_items = array(

        'home' => array(
            'link' => '/',
            'name' => 'Home'
        ),
        'about' => array(
            'link' => '/about',
            'name' => 'About'
        ),
        'portfolio' => array(
            'link' => '/portfolio',
            'name' => 'Portfolio'
        ),
        'services' => array(
            'link' => '/services',
            'name' => 'Services'

        ),
        'blog' => array(
            'link' => '/blog',
            'name' => 'Blog'
        ),  
        'contact' => array(
            'link' => '/contact',
            'name' => 'Contact'
        )

    );



    ?>

        <nav class="edfx-menu-container">

            <ul class="edfx-toggle-menu">

                <?php foreach($menu_items as $menu_item) : ?>

                    <li class="menu-item"><a href="<?php echo $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['SERVER_NAME'] . $menu_item['link']; ?>" rel="noopener noreferrer"><?php echo $menu_item['name']; ?></a></li>

                <?php endforeach; ?>

            </ul>

        </nav>

    <?php

}

}