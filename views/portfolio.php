<?php get_header(); ?>

<?php global $root_url; ?>

    <main class="master-grid-box">
		<div id="printdallas-grid-box" class="grid-box">
			<div class="side logo-image"><img src="<?php echo $root_url . '/images/printdallas-logo.png'; ?>" id="printdallas-logo" class="portfolio-logo" alt="Print Dallas Logo"></div>
			<div class="side site-thumbnail site-thumbnail__print-dallas" style="background-image: url('/images/printdallas-home-page.jpg')"></div>
			<div class="grid-title-box">
				<h3 class="grid-title"></h3>
			</div>
		</div>
		<div class="grid-box">
			<div class="side logo-image"><img src="<?php echo $root_url . '/images/westllp-logo.png'; ?>" alt="WestLLP Logo"></div>
			<div class="side site-thumbnail site-thumbnail__westllp" style="background-image: url('/images/westllp-home-page.jpg')"></div>
			<div class="grid-title-box">
				<h3 class="grid-title"></h3>
			</div>
		</div>
		<div class="grid-box">
			<div class="side logo-image"><img src="<?php echo $root_url . '/images/blue-prynt-logo.jpeg'; ?>" alt="Blue-Prynt Logo"></div>
			<div class="side site-thumbnail site-thumbnail__blue-prynt" style="background-image: url('/images/blue-prynt-home-page.jpg')"></div>
			<div class="grid-title-box">
				<h3 class="grid-title"></h3>
			</div>
		</div>
		<div class="grid-box">
			<div class="side logo-image"><img src="<?php echo $root_url . '/images/rcpstartups-logo.png'; ?>" alt="Royal Caledonian Partners Logo"></div>
			<div class="side site-thumbnail site-thumbnail__rcpstartups" style="background-image: url('/images/rcpstartups-home-page.jpg')"></div>
			<div class="grid-title-box">
				<h3 class="grid-title"></h3>
			</div>
		</div>
		<!-- <div class="grid-box">
			<div class="side logo-image"><h3>This is the logo image.</h3></div>
			<div class="side site-thumbnail"><h3>This is the site thumbnail.</h3></div>
			<div class="grid-title-box">
				<h3 class="grid-title"></h3>
			</div>
		</div>
		<div class="grid-box">
			<div class="side logo-image"><h3>This is the logo image.</h3></div>
			<div class="side site-thumbnail"><h3>This is the site thumbnail.</h3></div>
			<div class="grid-title-box">
				<h3 class="grid-title"></h3>
			</div>
		</div>     -->
    </main>

<?php get_footer('portfolio'); ?>