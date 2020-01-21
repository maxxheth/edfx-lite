<?php

error_reporting(E_ALL);
ini_set('display_errors', true);

?>

<?php get_header(); ?>

<main class="edfx__contact-form edfx__bg">

<form>
    
    <div class="field">
  <!-- <label class="label">Name</label> -->
  <div class="control">
    <input class="input" type="text" placeholder="Name">
  </div>
</div>

<div class="field">
  <div class="control">
    <input class="input" type="text" placeholder="Subject">
  </div>
</div>

<div class="field">
  <div class="control">
    <textarea class="textarea" placeholder="How Can We Help?"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button id="submit-button" class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>

</form> 

</main>

<?php get_footer('home'); ?>