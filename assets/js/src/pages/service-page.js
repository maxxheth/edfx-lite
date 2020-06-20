import renderMenu from "../global/menu";

import { swiperInit } from "../global/swiper";
import { swiperSlideCreator } from "../global/swiper";
import testimonialSliderContent from "../../../../testimonial-slider-content.json";
import footerLinkAnimation from "../effects/footer-link-animation";
import swapBGMenuSlide from "../effects/swapBGMenuSlide";
import { slideHTMLCreatorLayout01 } from "../global/swiper";
import init from "vanilla-ripplejs/lib";
import { contactModalToggle } from "../global/modals";
import { contactModalAJAX } from "../global/modals";

import Pristine from "pristinejs";

const contactModalForm = document.querySelector(".contact-modal");

const pristineModal = new Pristine(contactModalForm);

contactModalForm.addEventListener("submit", event => {
    event.preventDefault();

    const isValid = pristineModal.validate();

    console.log(isValid);
});

const swiperContentArray = swiperSlideCreator({
    sliderContent: testimonialSliderContent,
    sliderId: "swiper-slide",
    slideClass: "swiper-slide"
});

const swiper = swiperInit({
    swiperSlides: swiperContentArray,
    slideHTMLCreatorCB: slideHTMLCreatorLayout01
});

const consultationButton = document.querySelector(
    ".edfx__button--contact-modal"
);

document.addEventListener("orientationchange", () => {
    swiper.update();
});

// if (location.pathname === "/services/logo-graphic-motion-design") {
//     consultationButton.style.top = "1rem";
// }

renderMenu();

footerLinkAnimation();

swapBGMenuSlide(2000);

init(document.querySelector(".rippleJS"));

contactModalToggle();

contactModalAJAX(
    `${location.protocol}//${location.host}/helper_funcs/email-relay-contact.php`
);
