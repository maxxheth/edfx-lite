import $ from "jquery";

import RippleFactoryInit from "./jquery.ripples.min.js";

RippleFactoryInit($);

const makeWaterRipples = elem => {
    const $elem = $(elem);

    const menuToggleButton = document.querySelector(".edfx-toggle-button");

    $elem.ripples();

    let isActive = false;

    // setInterval(() => {

    //     $elem.ripples('pause');

    //     console.log('Pause!');

    //     setTimeout(() => {

    //         $elem.ripples('play');

    //         console.log('Play!');

    //     }, 5 * 1000)

    // }, 30 * 1000);

    menuToggleButton.addEventListener("click", () => {
        if (!isActive) {
            $elem.ripples("hide");

            isActive = true;
        } else {
            $elem.ripples("show");

            isActive = false;
        }
    });
};

export default makeWaterRipples;
