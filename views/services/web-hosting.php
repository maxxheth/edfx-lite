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

<div class="edfx__info-card--outer">
    <section class="edfx__info-card--inner">
        <h1 class="edfx__info-card--title">
            Web Hosting</h1>

        <img class="edfx__info-card--img edfx__info-card--img-left" src="/images/services/web-hosting.jpg" />

        <p class="edfx__info-card--text">When your website is finished, you need to host it somewhere, and preferably
            with a service that has guaranteed uptime, amazing customer support, automated backups, and top-notch
            security built right in.</p>

        <p class="edfx__info-card--text">What we offer is a premium hands-off hosting and maintenance service that makes
            the whole process invisible to you.</p>

        <p class="edfx__info-card--text">No more futzing around with a drab-looking interface listing a whole bunch of
            options written in geek-speak.</p>

        <p class="edfx__info-card--text">We handle all of the technical stuff so you can focus your time and energy
            serving your clients.</p>

        <p class="edfx__info-card--text">Here are some of the perks that we offer:</p>

        <ul class="edfx__info-card--list">
            <li>A SSL certificate that we set up and deploy for you at no extra charge.</li>
            <li>Advanced caching to ensure your existing website loads as quickly as possible. (If necessary, we will
                offer recommendations if your website needs servicing to take full advantage of this feature).</li>
            <li>Routine updates and maintenance to ensure that your website remains up-to-date and to prevent security
                vulnerabilities.</li>
            <li>Advanced security monitoring and restriction capabilities that keep your site and customers safe and
                sound.</li>
            <li>Round-the-clock backups to ensure that your site, your content, and all the time and money you've
                invested into it is always safeguarded.</li>
            <li>Complimentary migration from your current hosting provider to our servers</li>
        </ul>


        <button class="button edfx__button edfx__button--centered edfx__button--contact-modal rippleJS">Set Up A Free
            Consultation<div class="rippleJS"></div></button>

    </section>

    <div class="edfx__info-card--slider">
        <?php echo $swiper->swiperInstance; ?>
    </div>

</div>

<aside class="edfx__info-card--modal edfx__info-card--modal--contact">

    <?php echo $modal->modalInstance; ?>

</aside>

<?php get_footer('service-page'); ?>