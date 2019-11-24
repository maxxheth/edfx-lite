// Get an element's distance from the top of the page
const getElemDistance = (elem) => {

    console.log('getElemDistanceFunc has been executed');

    let location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};

export default getElemDistance;