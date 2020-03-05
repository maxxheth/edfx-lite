import renderMenu from "../global/menu";
import { flipCards } from "../logic/flip-cards";

// import {launchTippyConfig} from '../helper-funcs/tippy-config';

import footerLinkAnimation from "../effects/footer-link-animation";

import swapBGMenuSlide from "../effects/swapBGMenuSlide";

import IEHacks from "../logic/ie-hacks";

import "simplebar";

import { TextTypeFactory } from "../global/text-typer-factory";

import { cardLineAnimator } from "../global/card-line-animator";

//import {isInViewport} from '../global/is-in-viewport';

// import triggerEvent from '../helper-funcs/triggerEvent';

// window.triggerEvent = triggerEvent;

// import makeWaterRipples from '../effects/makeWaterRipples';

// if (matchMedia('(min-width: 1100px)').matches) {
const TextType = TextTypeFactory({
    el: ".red-card-01-typewriter",
    loopOnce: true,
    period: 5000,
    blinkerSpeed: 200
});

TextType.start();

const typeWriterElems = document.querySelectorAll(".typewriter");

typeWriterElems.forEach(elem => {
    const backup = elem.querySelector(".backup");

    if (backup !== null) backup.style.display = "none";
});

console.log("This is me adding a console.log statement.");

footerLinkAnimation();
renderMenu();
flipCards();
swapBGMenuSlide(1000);
IEHacks();
cardLineAnimator();
