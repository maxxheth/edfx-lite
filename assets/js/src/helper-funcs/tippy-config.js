import tippy, {followCursor} from 'tippy.js';
//import { addDevServerEntrypoints } from 'webpack-dev-server';

export const launchTippyConfig = (textColor, BGColor) => {

    const tippyTooltip = document.querySelector('.tippy-tooltip');

    const redCards = document.querySelectorAll('.card--red-bg');

    console.log(redCards);

    const setTippyColors = () => {

        console.log('event fired!');

        if (!tippyTooltip) return;

        tippyTooltip.style.color = textColor;

        tippyTooltip.style.backgroundColor = BGColor;

    };

    redCards.forEach(card => {


        card.addEventListener('mouseenter', setTippyColors);

    });



    tippy(document.querySelectorAll('.card--red-bg'), {

        content: 'Click to flip me over!',
        followCursor: true,
        plugins: [followCursor],
        placement: 'top'

    });





};