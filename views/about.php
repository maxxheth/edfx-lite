<?php

error_reporting(-1);
ini_set('display_errors', 1);

require __DIR__ . '/templates/header.php';
require __DIR__ . '/templates/footer.php';

?> 

<?php get_header(); ?>

<main class="edfx__bg">
    <section class="edfx__desc">
        <h1 class="edfx__desc--title">
            What Is EDFX?
        </h1>
        <p class="edfx__desc--text">EDFX is all about building websites or web apps that help ambitious entrepreneurs like you connect with the people you want to do business with.</p>
        <p class="edfx__desc--text">Sometimes, that can involve something simple, and sometimes it can involve something more sophisticated and nuanced depending on your target market.</p>
        <p class="edfx__desc--text">Here at EDFX, we specialize in creating custom solutions for our clientele.</p>
    </section>
</main>

<?php get_footer('about'); ?>