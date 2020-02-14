<?php 

error_reporting(-1);

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
        <h1 class="edfx__info-card--title">Technical SEO</h1>
        
        <img class="edfx__info-card--img edfx__info-card--img-left" src="/images/services/seo-letters.jpg" />

        <p class="edfx__info-card--text">Although we're primarily a web design and development agency, we recognize that companies need to drive traffic to their websites and generate leads.</p>
        
        <p class="edfx__info-card--text">As you're probably aware, one of the most popular ways to do this is through SEO. As enticing as it sounds to drive traffic for "free" from Google, SEO presents a number of challenges to websites that may not be as easy for the average SEO or business owner to tackle on their own depending on the technical restraints or challenges presented.</p>

        <p class="edfx__info-card--text">Such issues typically can include the following:</p>
        
        <ul class="edfx__info-card--list">
            <li>Super-slow page load speeds</li>
            <li>Broken Links</li>
            <li>Redirect Chains</li>
            <li>Incorrect Schema Markup</li>
            <li>Semantically Incorrect HTML Markup</li>
            <li>URLs that are too long</li>
            <li>Pages that aren't mobile-responsive</li>
            <li>Duplicate pages</li>
            <li>Googlebot not crawling certain pages</li>
        </ul>

        <p class="edfx__info-card--text">The above-listed issues are all things that Google does indeed frown upon if they affect the user experience negatively.</p> 
        
        <p class="edfx__info-card--text">If your site is tanking in the SERPs, it's always easy to determine what the issue is, but, in many cases, it has to due with issues that affect your onsite SEO, which is where we come in.</p>

        <p class="edfx__info-card--text">For example, some of the most difficult issues that many websites grapple with are slow-as-molasses page load speeds.</p>

        <p class="edfx__info-card--text">Google published a report stating that for web pages that took anywhere from 1 to 10 seconds to load, the probability of a user bouncing (i.e., abandoning) from a web page increased by 123%!</p>
        
        <p class="edfx__info-card--text">What this means in layman's terms is that if your website takes longer than 10 seconds to load, the likelihood of virtually every single person giving up on your site and heading to a competitor's website instead increases by orders of magnitude more than it ever should.</p>

        <p class="edfx__info-card--text">In terms of SEO, the best SEO wizardry in the world will not save a website that takes forever and a day to load. In fact, not fixing your slow website could undermine all the money, time, and effort that went into ranking your website, especially if users say "Forget it" and bounce! (That's a negative SEO signal btw!)</p>

        <p class="edfx__info-card--text">
            That said, even if an SEO points this out as a potential issue, do they have the expertise to address this issue head-on? Do you? Most likely, if the answer were yes, you wouldn't be reading this right now.
        </p>


        <p class="edfx__info-card--text">This isn't meant as a criticism; oftentimes achieving page load speeds often means analyzing a website using tools meant for web developers and making edits directly to a website's code base in order to effectively remove "bloat" (i.e. unnecessary code) that's slowing a website down.</p>

        <p class="edfx__info-card--text">Typically, SEOs specialize in SEO, not web development. So it's not uncommon for SEOs who pinpoint issues to not be versed in the programming languages that your site is built in, which is where we come in.</p>

        <p class="edfx__info-card--text">So what do we provide? And for who? We provide technical SEO services to either SEOs or business owners who don't have the manpower or expertise to tackle complex technical SEO issues themselves.</p>
        
        <p class="edfx__info-card--text">Here's a breakdown of the technical SEO services that we offer:</p>

        <ul class="edfx__info-card--list">
        
            <li>A technical SEO audit that provides an in-depth analysis on:
            <div>
                <ol class="edfx__info-card--num-list">
                    <li>Site structure (i.e., how many clicks it takes to reach the most critical pages on your site, how many internal links are present on each page, etc.)</li>
                    <li>Page structure, which assesses how many elements are in place that are considered critical for SEO, such as the title tag, meta description, H1 header, etc.</li>
                    <li>How much duplicate content is present on the site, which can affect your site's ability to rank in certain cases.</li>      
                    <li>Broken links, which can result in a negative experience and thus a loss in rankings if left unchecked.</li>
                    <li>Redirect chains. At most, you only want to redirect once if absolutely necessary and return the appropriate HTTP status code depending on your intent. If done incorrectly, this can affect your site's ability to rank.</li>
                    <li>How slow your sites are on desktop and mobile devices across various Internet connection speeds.</li>
                </ol>
                </div>
            </li>
            <li>Page speed optimization. Based on the data we gather from the technical audit, we'll determine what needs to be adjusted in order to achieve faster site speeds and then create an action plan to get it done. </li>
            <li>If we find that certain plugins or other such third-party software are causing your website to load slowly, we'll suggest alternatives and also custom solutions if no third-party alternatives are available.</li>

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