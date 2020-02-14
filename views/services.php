<?php

error_reporting(-1);
ini_set('display_errors', 1);

$pageContent = json_decode(file_get_contents(dirname(__DIR__, 1) . '/page-content.json'), true);

$mainServicesBlocks = $pageContent['services'];

?> 

<?php get_header(); ?>

<article class="edfx-grid-block__main">
    
    <h1 style="position:absolute;top:3rem;">EDFX Web Design & Development Services</h1>

    <?php foreach ($mainServicesBlocks as $block) : ?>

    <section class="edfx-grid-block__card">

        <div class="edfx-grid-block__card--img" style="background-image:url(<?php echo $block['imgDir']; ?>)"> 
        
            <h2><?php echo $block['title']; ?></h2>
        
        </div>

        <a class="edfx-grid-block__button" href="<?php echo $block['link']; ?>">
            
            <button>Learn More</button>
            
        </a>
        
    </section>

    <?php endforeach; ?>

</article>

<?php get_footer('about'); ?>