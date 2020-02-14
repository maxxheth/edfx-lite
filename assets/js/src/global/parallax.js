const getParallaxElems = elemClass => [
    ...document.querySelectorAll(`.${elemClass}`)
];

const newPos = (pos, adjust, ratio) => (pos - adjust) * ratio + "px";

const containerize = parallaxElems => {
    //const parallaxElems = getParallaxElems(parallaxElemClass);

    let parallaxContainers = [];

    for (let x = 0; x < parallaxElems.length; x++) {
        let parallaxContainer = document.createElement("div");

        parallaxContainer.classList.add("jarallax-container");

        parallaxContainer.appendChild(parallaxElems[x]);

        parallaxContainers.push(parallaxContainer);
    }

    const parallaxElemsParent = parallaxElems.reduce((acc, curr) => {
        if (!acc.includes(curr.parentNode)) acc.push(curr.parentNode);

        return acc[0];
    }, []);

    parallaxElems.forEach((elem, elemIndex) =>
        parallaxElemsParent.replaceChild(parallaxContainers[elemIndex], elem)
    );
};

const move = (parallaxElems, parallaxRange) => {
    //var pos = measure.offset().top;
    var pos = window.scrollY;

    parallaxElems.forEach(
        (elem, elemIndex) =>
            (elem.style.top = newPos(pos, 0, -(parallaxRange / elemIndex)))
    );
};

const runParallax = (parallaxElemClass, parallaxRange) => {
    let didScroll = false;

    const parallaxElems = getParallaxElems(parallaxElemClass);

    containerize(parallaxElems);

    window.addEventListener("scroll", () => (didScroll = true));

    setInterval(() => {
        if (didScroll) {
            didScroll = false;
            move(parallaxElems, parallaxRange);
        }
    }, 10);
};

export default runParallax;
