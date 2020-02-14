
<?php 


error_reporting('E_ALL');

ini_set('display', true);


require_once dirname(__DIR__, 2) . '/components/sliders/swiper-loader.php';

require_once dirname(__DIR__, 2) . '/components/modals/modal-loader.php';

use EDFX\ModalComponent as Modal;

use EDFX\SwiperComponent as Swiper;

$swiper = new Swiper();

$modal = new Modal(['modalName' => 'contactModal']);

?>

<?php get_header(); ?>

<main class="edfx__info-card--outer">
    <section class="edfx__info-card--inner">
        <h1 class="edfx__info-card--title">Web Migration Services</h1>
        
        <img class="edfx__info-card--img edfx__info-card--img-left" src="/images/services/design-desktop.jpg" />

        <p class="edfx__info-card--text">Do you need to migrate your website to a different host or a different domain name? Or both?</p>
        <p class="edfx__info-card--text">Website migrations can be tricky to get right, and no two migrations are exactly the same.</p>
        <p class="edfx__info-card--text">Here's how we handle migrations here at EDFX:</p>

        <ol class="edfx__info-card--text">
            <li>Technical Analysis Of Your Website: We analyze your website from top to bottom for </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </section>

    <div class="edfx__info-card--slider">
        <?php echo $swiper->swiperInstance; ?>
    </div>

</main>

<?php get_footer('web-custom'); ?>