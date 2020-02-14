// import grabCSSProps from '../global/grabCSSProps';

// import grabBgColors from '../global/grabBgColors';

// import getSiblings from '../helper-funcs/getSiblings';

import { jarallax } from "jarallax";

export const flipCards = () => {
    function navTest(navType) {
        return navigator.userAgent.match(navType);
    }

    const siteContainer = document.querySelector(".site-container");

    /**
     *
     * This block of code manipulates the cards you see in every section
     * on the home page.
     *
     * Whenever you hover over a card, it flips over and reveals the other side,
     * and when the mouse cursor leaves the card area, it flips back.
     *
     * It's fairly straightforward, but I also added a little twist by
     * changing the color of the parallax sections so as to maintain contrast all
     * throughout.
     *
     */

    const jarallaxScenes = [...document.querySelectorAll(".jarallax")];

    jarallax(jarallaxScenes, { speed: 1.5 });

    if (
        navigator.userAgent.indexOf("MSIE") !== -1 ||
        navigator.appVersion.indexOf("Trident/") > -1 ||
        window.navigator.userAgent.indexOf("Edge") > -1
    ) {
        jarallax(jarallaxScenes, "destroy");

        jarallaxScenes.forEach(scene => {
            scene.style.backgroundSize = "cover";

            scene.style.backgroundRepeat = "no-repeat";
        });
    }

    jarallaxScenes.forEach(scene => {
        /** Note: This a bug fix!
         * Set add width and height properties with a value of 100vw and 100vh respectively
         * so that each Jarallax scene is properly initialized. */

        scene.style.width = "100vw";

        scene.style.height = "60vh";
    });

    if (navTest(/Mobi/) || navTest(/Tablet/) || navTest(/Nexus/)) {
        siteContainer.style.width = "100%";
        siteContainer.style.padding = "0";
    }
};
