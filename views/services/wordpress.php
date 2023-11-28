<?php 

error_reporting(E_ALL);

ini_set('display', true);

require_once dirname(__DIR__, 2) . '/components/sliders/swiper-loader.php';

require_once dirname(__DIR__, 2) . '/components/modals/modal-loader.php';

use EDFX\ModalComponent as Modal;

use EDFX\SwiperComponent as Swiper;

$swiper = new Swiper();

$modal = new Modal(['modalName' => 'contactModal']);;

?>

<?php get_header(); ?>

<div class="edfx__info-card--outer">
    <section class="edfx__info-card--inner">
        <h1 class="edfx__info-card--title">WordPress Development Services</h1>
        
        <img class="edfx__info-card--img edfx__info-card--img-left" src="/images/services/wordpress-development-design.jpg" />

        <p class="edfx__info-card--text">Do you use WordPress? We can help you out! We can tweak existing themes and plugins, optimize WordPress websites that are slow to load and a constant source of headaches for owners and customers alike, and even build custom themes and plugins!
        </p>
        <p class="edfx__info-card--text">We have experience customizing Divi, Avada, Salient, and Genesis themes. Truth be told though, most WordPress themes generally work with WordPress in similar ways, so even if we haven't worked with the theme before, we can still easily modify it for your needs.</p>
        <p class="edfx__info-card--text">In addition to theme and plugin services, we also offer maintenance and hosting services that are geared towards keeping your site up and running 24/7 with guaranteed 99.9% uptime. We'll handle all that technical mumbo-jumbo so you can focus on your business. Plain and simple!</p>

        <button class="button edfx__button edfx__button--centered edfx__button--contact-modal rippleJS">Set Up A Free Consultation<div class="rippleJS"></div></button>
    </section>
    <div class="edfx__info-card--slider">
        <?php echo $swiper->swiperInstance; ?>
    </div>
</div>

<aside class="edfx__info-card--modal edfx__info-card--modal--contact">
    
    <?php echo $modal->modalInstance; ?>
    
</aside>


<?php get_footer('service-page'); ?>
