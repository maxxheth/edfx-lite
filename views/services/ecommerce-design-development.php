
<?php 


error_reporting(E_ALL);

ini_set('display', true);


require_once dirname(__DIR__, 2) . '/components/sliders/swiper-loader.php';

require_once dirname(__DIR__, 2) . '/components/modals/modal-loader.php';

use EDFX\ModalComponent as Modal;

use EDFX\SwiperComponent as Swiper;

$swiper = new Swiper();

$modal = new Modal(['modalName' => 'contactModal']);

?>

<?php get_header(); ?>

<div class="edfx__info-card--outer">
    <section class="edfx__info-card--inner">
        <h1 class="edfx__info-card--title">Ecommerce Design & Development</h1>
        
        <img class="edfx__info-card--img edfx__info-card--img-left" src="/images/services/shopify-development-design.jpg" />

        <p class="edfx__info-card--text">Are you looking to launch your ecommerce business for the first time? Are you looking for ways to revamp your current ecommerce store so you can convert curious visitors into loyal customers at a higher rate? We can help!</p>
        <p class="edfx__info-card--text">We specialize in WooCommerce (i.e., the ecommerce platform for WordPress) and  Shopify development, which are more than sufficient for most ecommerce sites.</p>
        <p></p>
        <p class="edfx__info-card--text">Here are the following services that we provide:</p>
        <ul class="edfx__info-card--list">
        
            <li>Custom Ecommerce Theme Development (WooCommerce & Shopify)</li>
            <li>Custom Ecommerce Plugin Development (WooCommerce)</li>
            <li>Custom Landing Page Designs (WooCommerce & Shopify)</li>
            <li>Google Analytics Customization For Ecommerce Sites</li>
        </ul>
        <button class="button edfx__button edfx__button--centered edfx__button--contact-modal rippleJS">Request A Free Consultation<div class="rippleJS"></div></button>
    </section>

    <div class="edfx__info-card--slider">
        <?php echo $swiper->swiperInstance; ?>
    </div>
</div>

<aside class="edfx__info-card--modal edfx__info-card--modal--contact">
    
    <?php echo $modal->modalInstance; ?>
    
</aside>


<?php get_footer('service-page'); ?>
