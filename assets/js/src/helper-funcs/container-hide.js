export const hideSiteContainer = (
    doHide = true,
    elemToHide = document.createElement("div"),
    delay = 0
) => {
    const doHideSwitch = () => {
        if (doHide) {
            elemToHide.style.opacity = 0;
        } else {
            elemToHide.style.opacity = 1;
        }
    };

    if (delay > 0) {
        setTimeout(doHideSwitch, delay);
    } else {
        doHideSwitch();
    }
};
