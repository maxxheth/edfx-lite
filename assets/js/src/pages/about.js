
import renderMenu from '../global/menu';
// import { changeBgColor } from '../logic/change-bg-color';

// import '../../../css/src/style.scss';

// // import SmoothScroll from 'smoothscroll-for-websites';

// const edfxBg = document.querySelector('.edfx__bg');

import footerLinkAnimation from '../effects/footer-link-animation';

import swapBGMenuSlide from '../effects/swapBGMenuSlide';



renderMenu();

footerLinkAnimation();

swapBGMenuSlide(2000);

// changeBgColor(edfxBg)('#00a0ff','#fd3819')(10000);