<?php

//error_reporting(0);

error_reporting(-1);
ini_set('display_errors', 1);

require(__DIR__ . '\menu.php');

require dirname(__DIR__, 2) . '/helper_funcs/generateSass.php';

require dirname(__DIR__, 2) . '/helper_funcs/seo-data-parser.php';



if(!function_exists('get_header')) {

    function get_header() {

        global $root_url;

        ?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->



<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php 
    
        SEOToolBox::SEOParser(dirname(__DIR__, 2) . '/seo-data.json');
    
    ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preload" href="/assets/css/dist/bundle.css" as="style">

    <link rel="prefetch" href="/assets/css/dist/bundle.css">

    <?php switch($_SERVER['REQUEST_URI']) : case '/' : ?>

            <link rel="preload" href="/assets/js/dist/home.bundle.js" as="script">

            <link rel="prefetch" href="/assets/js/dist/about.bundle.js">
            
            <link rel="next" href="/about">

            <link rel="prefetch" href="/assets/js/dist/portfolio.bundle.js">

            <link rel="next" href="/portfolio">
            
            <link rel="prefetch" href="/assets/js/dist/services.bundle.js">

            <link rel="next" href="/services">

        <?php break; case '/about' : ?>
        
            <link rel="preload" href="/assets/js/dist/about.bundle.js" as="script">

            <link rel="prefetch" href="/assets/js/dist/home.bundle.js">
        
            <link rel="next" href="/">

            <link rel="prefetch" href="/assets/js/dist/portfolio.bundle.js">

            <link rel="next" href="/portfolio">
        
            <link rel="prefetch" href="/assets/js/dist/services.bundle.js">

            <link rel="next" href="/services">

        <?php break; case '/portfolio' : ?>
        
            <link rel="preload" href="/assets/js/dist/portfolio.bundle.js" as="script">

            <link rel="prefetch" href="/assets/js/dist/about.bundle.js">

            <link rel="next" href="/about">

            <link rel="prefetch" href="/assets/js/dist/home.bundle.js">

            <link rel="next" href="/">

            <link rel="prefetch" href="/assets/js/dist/services.bundle.js">

            <link rel="next" href="/services">

        <?php break; case '/services' : ?>
        
            <link rel="preload" href="/assets/js/dist/services.bundle.js" as="script"></script>

            <link rel="prefetch" href="/assets/js/dist/about.bundle.js">

            <link rel="next" href="/about">

            <link rel="prefetch" href="/assets/js/dist/home.bundle.js">

            <link rel="next" href="/">

            <link rel="prefetch" href="/assets/js/dist/portfolio.bundle.js">

            <link rel="next" href="/portfolio">
            

        <?php break; case '/contact' : ?>
        
            <!-- <link rel="preload" href="/assets/js/dist/home.bundle.js" as="script"></script> -->

            <!-- <script async defer src=""></script> -->

        <?php break; ?>

        <?php endswitch; ?>


    <link type="text/css" rel="stylesheet" href="/assets/css/dist/bundle.css">

    <link rel="preload" href="https://fonts.googleapis.com/css?family=Montserrat|Oswald&display=swap" as="style">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Oswald&display=swap" rel="stylesheet">

    

    <noscript>
        <style>
            /**
            * Reinstate scrolling for non-JS clients
            */
            .simplebar-content-wrapper {
                overflow: auto;
            }
        </style>
    </noscript>

</head>

<body>     

    <?php loadMenu(); ?>

    <button class="edfx-toggle-button hamburger hamburger--elastic" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>

    <main class="site-container">

     <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

        <?php

    }

}