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
        <h1 class="edfx__info-card--title">Logo & Graphic Design Services</h1>
        
        <img class="edfx__info-card--img edfx__info-card--img-left" src="/images/services/logo-graphic-motion-design.jpg" />

        <p class="edfx__info-card--text">Do you need a fresh logo design? New brochures? A fresh coat of paint for your ebook or case study that'll turn heads and drop jaws? How about a promo video with slick 3D animations that you can use for landing pages and social media ads?</p>
        <p class="edfx__info-card--text">Our designers have worked with top talent in the entertainment industry, event planners, and various corporations.</p>
        <p class="edfx__info-card--text">We've got the eye, the talent, and the visual instincts to make your message come to life. Bring your ideas and we'll bring our skills and make magic happen!</p>
        <p class="edfx__info-card--text">The services that we offer are as follows:</p>
        <ul class="edfx__info-card--list">
        
            <li>Logo Design</li>
            <li>Graphic Design</li>
            <li>3D Animation / Motion Design</li>
            <li>Branding Package</li>

        </ul>


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
