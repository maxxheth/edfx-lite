import $ from 'jquery';

import './jquery.ripples.min.js';

const makeWaterRipples = elem => {

    const $elem = $(elem);

    $elem.ripples();

};

export default makeWaterRipples;