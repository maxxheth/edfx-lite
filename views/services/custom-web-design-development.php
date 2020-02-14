<?php


error_reporting(E_ALL);
ini_set('display_errors', 1);

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

        <h1 class="edfx__info-card--title">Custom Web Design & Development</h1>
        
        <img class="edfx__info-card--img edfx__info-card--img-left" src="/images/services/design-desktop.jpg" />

        <p class="edfx__info-card--text">Here at EDFX, we build custom websites for clients that need something truly unique</p>
        
        <p class="edfx__info-card--text">What makes our custom websites better than templated solutions?</p>  
        
        <p class="edfx__info-card--text">For one, they're much faster. Speed matters in an attention-starved world, and your customers aren't going to wait while your site takes forever to load.</p> 
        
        <p class="edfx__info-card--text">Need proof? This website is entirely custom-built from the ground up. It's lighter than a feather and yet looks just as good as any other templated website out there.</p>

        <p class="edfx__info-card--text">Here's what <a target="_blank" href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fedfx.co&tab=mobile">Google thinks of this site</a>.</p>

        <p class="edfx__info-card--text">Site speed isn't everything, but making it one less thing to worry about sure is a nice-to-have, isn't it?</p>
        
        <p class="edfx__info-card--text">Your users can actually enjoy the content you publish on your website at reasonable speeds even if they're on slow Internet connections, <a target="_blank" href="https://mashable.com/article/best-worst-internet-speeds-america/">which is way more common than you might think.</a></p> 
        
        <p class="edfx__info-card--text">When you build a custom site, you're not handcuffed to the limitations of the platform, just the ability for our designers and developers to turn your vision into reality.</p>

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