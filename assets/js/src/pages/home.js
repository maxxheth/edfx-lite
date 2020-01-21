import renderMenu from '../global/menu';
import {flipCards} from '../logic/flip-cards';

import {launchTippyConfig} from '../helper-funcs/tippy-config';

import footerLinkAnimation from '../effects/footer-link-animation';

import swapBGMenuSlide from '../effects/swapBGMenuSlide';

import IEHacks from '../logic/ie-hacks';

import 'simplebar';

import triggerEvent from '../helper-funcs/triggerEvent';

// import {setSocialMediaLogosDistance} from '../global/socialMediaLinksDistance';

window.triggerEvent = triggerEvent;

// import makeWaterRipples from '../effects/makeWaterRipples';

launchTippyConfig('black', 'white');


// animationLoader(document.getElementsById('edfx-svg-logo-cont'));
    
// makeWaterRipples('.home-section');


footerLinkAnimation();
renderMenu();
flipCards();
swapBGMenuSlide(1000);
IEHacks();