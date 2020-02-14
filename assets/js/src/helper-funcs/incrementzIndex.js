import getSiblings from "./getSiblings";

const incrementzIndexHoverState = {};

const timeStampGenerator = () => {
    const date = new Date();

    return `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getSeconds()}${date.getMilliseconds()}`;
};

const timeStampReducer = (timeStampObj = {}) => {
    const maxDate = Math.max(...Object.keys(timeStampObj));

    return timeStampObj[maxDate];
};

const incrementzIndexOnHover = (elemClass, zIndexNum, ...childClasses) => {
    let originalZIndex = "auto";

    const zIndexData = {
        isParent: false
    };

    const setZIndex = e => {
        originalZIndex = getComputedStyle(e.target)["zIndex"];

        if (!zIndexData.isParent) {
            e.target.style.zIndex = zIndexNum;
        } else {
            e.target.parentNode.style.zIndex = zIndexNum;
        }
    };

    const resetZIndex = e => {
        if (!zIndexData.isParent) {
            e.target.style.zIndex = originalZIndex;
        } else {
            e.target.parentNode.zIndex = originalZIndex;
        }
    };

    const createZIndexEventHandler = callback => e => {
        console.log(e);

        if (e.target.matches) {
            if (
                e.target.matches(`.${elemClass}`) &&
                !e.target.matches(`.master-${elemClass}`)
            ) {
                zIndexData.isParent = false;

                callback(e);
            }

            childClasses.forEach(childClass => {
                if (
                    e.target.matches(`.${childClass}`) &&
                    e.target.parentNode.classList.contains(elemClass)
                ) {
                    zIndexData.isParent = true;

                    callback(e);
                }
            });
        } else if (e.target.classList) {
            if (e.target.classList.contains(elemClass)) {
                zIndexData.isParent = false;

                callback(e);
            }

            childClasses.forEach((childClass, childClassIndex) => {
                if (
                    e.target.classList.contains(childClass) &&
                    e.target.parentNode.classList.contains(elemClass)
                ) {
                    zIndexData.isParent = true;

                    callback(e);
                }
            });
        }
    };

    const setZIndexEventHandler = createZIndexEventHandler(setZIndex);

    const resetZIndexEventHandler = createZIndexEventHandler(resetZIndex);

    document.addEventListener("mouseover", setZIndexEventHandler, false);

    document.addEventListener("mouseleave", resetZIndexEventHandler, true);
};

export default incrementzIndexOnHover;
