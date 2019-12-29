const grabCSSProps = (elem, prop) => {

    return window.getComputedStyle(elem, null).getPropertyValue(prop);

};

export default grabCSSProps;