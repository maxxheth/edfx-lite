import {
    renderMenu
} from '../global/menu';
import {
    flipCards
} from '../logic/flip-cards';

import SmoothScroll from 'smoothscroll-for-websites';

// import waterRippleInit from '../effects/waterRippleInit';

import makeWaterRipples from '../effects/makeWaterRipples';

// import canvasDoodle from '../effects/doodle';

// import {
//     createSketchParticlesInstance,
//     dupeSketchParticlesInstance
// } from '../effects/sketchParticles';

// const homeSections = [...document.querySelectorAll('.home-section')];

// const SketchParticleInstance = createSketchParticlesInstance(homeSections[0])



// homeSections.forEach(section => {

//     createSketchParticlesInstance(section)

//     ('#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423')

//     (280);

// });

SmoothScroll({

    animationTime: 300, // [ms]
    stepSize: 75, // [px]

    // Acceleration
    accelerationDelta: 50, // 50
    accelerationMax: 10, // 3

    // Keyboard Settings
    keyboardSupport: true, // option
    arrowScroll: 50, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 5,
    pulseNormalize: 1,

    // Other
    touchpadSupport: true, // ignore touchpad by default
    fixedBackground: true,
    excluded: ''

});

// import launchVantaBirds from '../effects/launchVantaBirds';

// import '../../../css/src/style.scss';

renderMenu();
flipCards();
makeWaterRipples('.home-section');

// const homeSectionDimensions = () => {

//     const homeSection = document.querySelector('.home-section');

//     const homeSectionWidth = getComputedStyle(homeSection).width;

//     const homeSectionHeight = getComputedStyle(homeSection).height;

//     return {
//         homeSectionWidth,
//         homeSectionHeight
//     };

// };

// const {
//     homeSectionWidth,
//     homeSectionHeight
// } = homeSectionDimensions();

// canvasDoodle('.home-section-canvas')({
//     canvasWidth: homeSectionWidth,
//     canvasHeight: homeSectionHeight
// });