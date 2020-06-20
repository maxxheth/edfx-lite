<?php

error_reporting(-1);
ini_set('display_errors', 1);

// require __DIR__ . '/templates/header.php';
// require __DIR__ . '/templates/footer.php';

$weSpecSVG = file_get_contents(dirname(__DIR__, 1) . '/svg/we-build.svg');

?>

<?php get_header(); ?>

<div class="card-container">

    <!--BEGIN 1ST SECTION-->

    <section id="home-section-01" class="home-section home-section-01">

        <div id="red-card-01" class="card card--red-bg card--top">

            <img class="card__logo" src="/images/edfx-logo.png" alt="edfx logo">

            <h2 class="card-title" id="web-des-dev-title">
            
                <span class="typewriter red-card-01-typewriter" data-period="5000" data-type='[ "First Class Designers & Developers." ]' data-looponce="true">
                    <span class="wrap"></span>
                    <span class="backup">First Class Designers & Developers.</span>
                </span>

               
                
            </h2>

        </div>

        <div id="blue-card-01" class=" card--blue-bg card">


            <p>EDFX (pronounced "Ed Effects") comes from the Latin word "aedifex", which means architects, builders, and
                creators.</p>

            <p>We are a top-tier web design and development agency that builds best-in-class websites for businesses
                looking for unique ways to stand out from the competition.</p>

            <p>Whether you're looking for something fresh or need your current site to be overhauled, we can get it done
                and get it done fast!</p>

            <button class="edfx-ripple edfx-ripple--red"><a href="#">Learn More</a></button>

        </div>

        <!-- <div class="card card__video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uiGv9PXFjec?controls=0&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> -->

        <!-- <div id="mobile-card-01" class="mobile-card">

            <div class="mobile-card__side mobile-card__side--red">
                <h2>First-Class Web Designers &amp; Developers</h2>

                <h3 class="tap-me-prompt">Tap Me!</h3>

            </div>

            <div class="mobile-card__side mobile-card__side--blue mobile-card__side--top">
                <p>EDFX (pronounced "Ed Effects") comes from the Latin word "aedifex", which means architects, builders,
                    and
                    creators.</p>

                <p>We are a top-tier web design and development agency that builds best-in-class websites for businesses
                    looking for unique ways to stand out from the competition.</p>

                <p>Whether you're looking for something fresh or need your current site to be overhauled, we can get it
                    done and get it done fast!</p>

                <button class="edfx-ripple edfx-ripple--red"><a href="#">Learn More</a></button>

            </div> -->

    </section>


    <!--BG IMG ARRAY-->


    <!--JARALLAX SCENE 01-->


    <div id="jarallax-scene-01" class="jarallax"
        style="background-image: url(/images/people-meeting-workspace-team-1_compressed.jpg)">
        <!-- <h2 class="jarallax-title">We Get Results</h2> -->
        <!-- <div class="jarallax-svg-cont">
        
            <span><?php //echo $weSpecSVG;?></span>

        </div> -->
    </div>


    <!--END 1ST SECTION-->

    <!--BEGIN 2ND SECTION-->

    <section id="home-section-02" class="home-section home-section-02" style="flex-direction: row-reverse">

        <div id="red-card-02" class=" card card--red-bg card--center">

            <div class="card__line"></div>

            <h2 class="card-title">What Kind Of Website Can You Build?</h2>

            <div class="card__line"></div>

        </div>

        <div id="blue-card-02" class=" card--blue-bg card">

            <!-- <p>Our process is simple:</p>

            <p>We work with you from the get-go to get your ideas out on the table and get those creative juices
                flowing.
            </p>

            <p>Each project we take on consists of five phases:</p>

            <ul style="padding-top:unset;padding-bottom:unset">
                <li>Discovery</li>
                <li>Design / Prototype</li>
                <li>Development</li>
                <li>Testing</li>
                <li>Launch!</li>
            </ul>

            <p>The end result is an outstanding website that you can confidently launch and use to grow your business.
            </p> -->

            <p>We specialize in building custom websites that help our clients stand out from their competitors while remaining fast and easy to access and use, no matter the device or Internet speed.</p>

            <p>What you get when you work with us is access to a professional team of passionate designers and developers who want to help you showcase your business in the best light possible.</p>

            <p>We work with you from the very start to understand who you are, who your customers are, and how we can create a product that can help get them the answers they're looking for so you can focus on doing what you do best for them.</p> 

            <button class="edfx-ripple edfx-ripple--red"><a href="#">Learn More</a></button>

        </div>

    

    </section>

    <!--JARALLAX SCENE 02-->


    <div id="jarallax-scene-02" class="jarallax"
        style="background-image: url( '/images/discussing-plans-for-design-1_compressed.jpg')">
    </div>






    <!--END 2ND SECTION-->

    <!--BEGIN 3RD SECTION-->

    <section id="home-section-03" class="home-section home-section-03">

        <div id="red-card-03" class=" card card--red-bg card--center">

            <h2 class="card-title">First-Class Services & Support</h2>

        </div>

        <div id="blue-card-03" class="card--blue-bg card">

            <p>What happens after your site is built?</p>

            <p>In order for it to be available online, you have to host it somewhere.</p>

            <p>We offer premium service packages that offer not only cloud-based, scalable hosting
                but also automated backups, SSL certificates & setup, advanced caching for lightning-fast load speeds,
                email hosting, security updates, maintenance, and more!</p>

            <button class="edfx-ripple edfx-ripple--red"><a href="#">Learn More</a></button>

        </div>

    

    </section>

    <!--JARALLAX SCENE 03-->


    <div id="jarallax-scene-03" class="jarallax"
        style="background-image: url(/images/web-design-team-working_compressed.jpg )">
    </div>


    <!--END 3RD SECTION-->

    <!--BEGIN 4TH SECTION-->

    <!-- <section id="home-section-04" class="home-section home-section-04">

        <canvas class="home-section-canvas"></canvas>

        <div id="blue-card-04" class=" card card--blue-bg">

            <p>After the design is completely finished to your satisfaction, we will work on implementing any advanced
                features
                that you requested during the first phase.</p>

            <p>Ultimately, the goal is to create a site that you yourself would gladly use if you were one of your
                customers.
                Why have it any other way?</p>

        </div>

        <div id="red-card-04" class=" card card--red-bg">

            <h2 class="card-title" id="dev-phase">Development Phase</h2>

        </div>

        <div id="mobile-card-04" class="mobile-card">

            <div class="mobile-card__side mobile-card__side--red">
                <h2>Development Phase</h2>

                <h3 class="tap-me-prompt">Tap Me!</h3>

            </div>

            <div class="mobile-card__side mobile-card__side--blue">
                <p>After the design is completely finished to your satisfaction, we will work on implementing any
                    advanced features
                    that you requested during the first phase.</p>

                <p>Ultimately, the goal is to create a site that you yourself would gladly use if you were one of your
                    customers.
                    Why have it any other way?</p>


            </div>

        </div>

    </section> -->

    <!--JARALLAX SCENE 04-->


    <!-- <div id="jarallax-scene-04" class="jarallax"
        style="background-image: url(/images/maik-jonietz-535261-unsplash-1024x683.jpg )"></div> -->


    <!--END 4TH SECTION-->

    <!--BEGIN 5TH SECTION-->

    <!-- <section id="home-section-05" class="home-section home-section-05">

        <div id="blue-card-05" class=" card card--blue-bg">

            <p>After development is completed, we meet with you once again to review the site in full and also conduct
                thorough
                tests on all major desktop and mobile browsers to ensure that your site is working perfectly.</p>

            <p>At this stage, we\'ll also invite you to test every feature out for yourself to make sure they\'re all
                working
                perfectly.</p>

        </div>

        <div id="red-card-05" class=" card card--red-bg">

            <h2 class="card-title" id="testing-phase-title">Testing Phase</h2>

        </div>

        <div id="mobile-card-05" class="mobile-card">

            <div class="mobile-card__side mobile-card__side--red">
                <h2>Testing Phase</h2>

                <h3 class="tap-me-prompt">Tap Me!</h3>

            </div>

            <div class="mobile-card__side mobile-card__side--blue">
                <p>After development is completed, we meet with you once again to review the site in full and also
                    conduct thorough
                    tests on all major desktop and mobile browsers to ensure that your site is working perfectly.</p>

                <p>At this stage, we\'ll also invite you to test every feature out for yourself to make sure they\'re
                    all working
                    perfectly.</p>

            </div>

        </div>

    </section> -->

    <!--JARALLAX SCENE 05-->

    <!-- <div id="jarallax-scene-05" class="jarallax"
        style="background-image: url(/images/markus-spiske-207946-unsplash-1024x683.jpg )"></div> -->


    <!--END 5TH SECTION-->

    <!--BEGIN 6TH SECTION-->

    <!-- <section id="home-section-06" class="home-section home-section-06">

        <div id="blue-card-06" class=" card card--blue-bg">

            <p>Once testing is fully completed and all development has been thoroughly accounted for, now it\'s time to
                launch
                the site!</p>

            <p>If you already have your own hosting service, then you\'ll be good to go, but if you don\'t really want
                to
                deal
                with the hassle of setting up your own hosting server, we\'ll gladly take care of that for you under our
                one
                of our
                monthly hosting and maintenance plans!</p>

        </div>

        <div id="red-card-06" class=" card card--red-bg">

            <h2 class="card-title">Time To Launch The Site!</h2>

        </div>

        <div id="mobile-card-06" class="mobile-card">

            <div class="mobile-card__side mobile-card__side--red">
                <h2>Time To Launch The Site!</h2>

                <h3 class="tap-me-prompt">Tap Me!</h3>

            </div>

            <div class="mobile-card__side mobile-card__side--blue">
                <p>Once testing is fully completed and all development has been thoroughly accounted for, now it\'s time
                    to launch
                    the site!</p>

                <p>If you already have your own hosting service, then you\'ll be good to go, but if you don\'t really
                    want to deal
                    with the hassle of setting up your own hosting server, we\'ll gladly take care of that for you under
                    our one of
                    our monthly hosting and maintenance plans!</p>


            </div>

        </div>

    </section> -->


    <!--JARALLAX SCENE 06-->


    <!-- <div id="jarallax-scene-06" class="jarallax"
        style="background-image: url(/images/clement-h-544786-unsplash-1024x683.jpg)"></div> -->


    <!--END 6TH SECTION-->

</div>


<?php get_footer('home'); ?>