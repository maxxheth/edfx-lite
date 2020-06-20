// import removeContentSideBarWrap from './remove-content-sidebar-wrap.js';
// import { TimelineMax } from '../node_modules/gsap/TweenMax.js';
import renderMenu from "../global/menu.js";
// import flippingCards from './flipping-cards-portfolio.js';
// import incrementzIndexOnHover from '../helper-funcs/incrementzIndex';

// import SmoothScroll from "smoothscroll-for-websites";

import footerLinkAnimation from "../effects/footer-link-animation";

import swapBGMenuSlide from "../effects/swapBGMenuSlide";

// import '../../../css/src/style.scss';

// incrementzIndexOnHover('grid-box', 4, 'logo-image', 'site-thumbnail');

// SmoothScroll({
//     animationTime: 300, // [ms]
//     stepSize: 75, // [px]

//     // Acceleration
//     accelerationDelta: 50, // 50
//     accelerationMax: 10, // 3

//     // Keyboard Settings
//     keyboardSupport: true, // option
//     arrowScroll: 50, // [px]

//     // Pulse (less tweakable)
//     // ratio of "tail" to "acceleration"
//     pulseAlgorithm: true,
//     pulseScale: 5,
//     pulseNormalize: 1,

//     // Other
//     touchpadSupport: true, // ignore touchpad by default
//     fixedBackground: true,
//     excluded: ""
// });

swapBGMenuSlide(2000);

renderMenu();

footerLinkAnimation();
