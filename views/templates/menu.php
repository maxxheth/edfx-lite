<?php

error_reporting(-1);
ini_set('display_errors', 1);

if (!function_exists('loadMenu')) {


function loadMenu() {

    global $root_url;

    $menu_items = array(

         array(
            'link' => '/',
            'name' => 'Home'
        ),
        array(
            'link' => '/about',
            'name' => 'About'
        ),
        array(
            'link' => '/portfolio',
            'name' => 'Portfolio'
        ),
        array(
            'link' => '/services',
            'name' => 'Services'

        ),
        array(
            'link' => '/blog',
            'name' => 'Blog'
        ),  
        array(
            'link' => '/contact',
            'name' => 'Contact'
        )

    );

    //$menu_items_int = array_map('intval', $menu_items);

    ?>

        <nav class="edfx-menu-container">

            <ul class="edfx-toggle-menu">

                <?php foreach($menu_items as $menu_item_index => $menu_item) : ?>

                    <?php $isEven = $menu_item_index % 2 == 0; ?>

                    <li class="edfx-toggle-menu__item"><a class="edfx-toggle-menu__link" href="<?php echo $root_url . $menu_item['link']; ?>" data-menu-item-color="<?php echo $isEven ? 'blue' : 'red'; ?>" data-menu-item-even-check="<?php echo  $menu_item_index; ?>" data-menu-item-name="<?php echo strtolower($menu_item['name']) ?>" rel="noopener noreferrer"><?php echo $menu_item['name']; ?></a></li>

                <?php endforeach; ?>

                
            </ul>

            <?php foreach($menu_items as $menu_item) : ?>

<div class="edfx-toggle-menu__item--slide" data-menu-item-slide="<?php echo strtolower($menu_item['name']); ?>"></div>

<?php endforeach; ?>

<div class="edfx-toggle-menu__item--slide edfx-toggle-menu__item--slide--negative"></div>
        </nav>

    <?php

}

}