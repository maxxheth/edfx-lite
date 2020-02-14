<?php

error_reporting(E_ALL);
ini_set('display_errors', true);

// require_once dirname(__DIR__, 1) . '/helper_funcs/contact-form.php';

require_once dirname(__DIR__, 1) . '/components/loaders/sk-cube-loader.php';

use EDFX\LoaderComponent as Loader;

$loader = new Loader('skCubeLoader');

?>

<?php get_header(); ?>

<main class="edfx__contact-form edfx__bg">

  <form id="edfx-contact-form">

    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Name" required>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input class="input" type="email" placeholder="Email" required>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Subject" required>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="How Can We Help?" required></textarea>
      </div>
    </div>

    <div class="field is-grouped buttons">
      <div class="control">
        <button id="submit-button" class="edfx__contact-form__button--submit button is-link"> Submit<div class="edfx__contact-form__button--submit--inner rippleJS"></div></button>
      </div>
      <div class="control">
        <button class="rippleJS edfx__contact-form__button--cancel button is-link is-light">Cancel</button>
      </div>
    </div>

  </form>

</main>

<?php echo $loader->loaderInstance; ?>

<?php get_footer('contact'); ?>