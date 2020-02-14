import anime from "animejs";

import "intersection-observer";

// import isInViewport from '../global/is-in-viewport';

export const launchSvgAnimations = () => {
    const weBuildSVG = document.getElementById("we-build-svg");

    const weBuildRenderPath = document.querySelector("#we-build-render");

    const jarallax01 = document.getElementById("jarallax-scene-01");

    const jarallax01SvgCont = jarallax01.querySelector(".jarallax-svg-cont");

    const options = {
        root: document.body,
        threshold: 1.0
    };

    const weBuildAnimeSettings = {
        targets: weBuildRenderPath,
        loop: false,
        direction: "normal",
        strokeDashoffset: [anime.setDashoffset, 0],
        fill: ["rgba(0,0,0,0)", "#000000"],
        easing: "easeInOutSine",
        duration: 3000,
        delay: () => 1000
    };

    const WeBuildObserver = new IntersectionObserver(() => {
        weBuildSVG.style.display = "block";

        // weBuildRenderPath.setAttribute('fill', 'rgba(0,0,0,1)');

        anime(weBuildAnimeSettings);
    }, options);

    WeBuildObserver.observe(jarallax01SvgCont);
};
