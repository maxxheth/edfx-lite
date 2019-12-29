<?php

error_reporting(-1);
ini_set('display_errors', 1);

$routingData = json_decode(file_get_contents(dirname(__DIR__, 1) . '/routing-data.json'), true);

$seoBlogArticleData = json_decode(file_get_contents(dirname(__DIR__, 1) . '/seo-data.json'), true);

$seoBlogArticleData = $seoBlogArticleData['posts'];

$blogURLRoutes = $routingData['blog'];

?>

<main class="blog-articles">

    <?php foreach($blogURLRoutes as $routeKey => $route) : ?>

        <?php 
            
            $blogTitle = $seoBlogArticleData[$routeKey]['title']; 

            $blogDescription = $seoBlogArticleData[$routeKey]['metaDescription'];
        
        ?>

        <div class="blog-articles__section">

            <h2 class="blog-articles__section--title">

                <a href="<?php echo $root_url . $route['requestURI']; ?>"><?php echo $blogTitle; ?></a>

                <p><?php echo $blogDescription; ?></p>

                <button><a href="<?php echo $root_url . $route['requestURI']; ?>">Read More</a></button>

            </h2>

        </div>

    <?php endforeach; ?>

</main>


<?php

?>