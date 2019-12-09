import renderMenu from '../global/menu';
import {
    flipCards
} from '../logic/flip-cards';

import footerLinkAnimation from '../effects/footer-link-animation';

import swapBGMenuSlide from '../effects/swapBGMenuSlide';

import IEHacks from '../logic/ie-hacks';

import 'simplebar';

import tippy, {followCursor} from 'tippy.js';

tippy(document.querySelectorAll('.card--red-bg'), {

    content: 'Click to flip me over!',
    followCursor: true,
    plugins: [followCursor],
    placement: 'top'

});

footerLinkAnimation();
renderMenu();
flipCards();
swapBGMenuSlide(2000);
IEHacks();