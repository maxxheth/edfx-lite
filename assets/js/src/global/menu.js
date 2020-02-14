import { hideSiteContainer } from "../helper-funcs/container-hide";

const siteContainer = document.querySelector(".site-container");

siteContainer.style.transition = "all 0.1s ease-in-out";

const renderMenu = () => {
    const docElemStyle = document.documentElement.style;
    const transitionProp =
        typeof docElemStyle.transition == "string"
            ? "transition"
            : "WebkitTransition";

    const menuContent = document.querySelector(".edfx-toggle-menu"),
        toggleParent = document.querySelector(".edfx-toggle-button"),
        toggleBox = document.querySelector(".hamburger-box"),
        toggleInner = document.querySelector(".hamburger-inner");

    // let tlIn = new TimelineLite(),
    //     tlOut = new TimelineLite();

    [...menuContent.children]
        .filter(child => child.tagName === "LI")

        .forEach(child => (child.style.transition = "0.2s all ease-in-out"));

    const menuItemSlides = [
        ...document.querySelectorAll(".edfx-toggle-menu__item--slide")
    ];

    const prepMenuItemSlide = menuItemSlides => (doShow = true) => {
        menuItemSlides.forEach(slide => {
            if (doShow) {
                Object.assign(slide.style, {
                    width: "100%",
                    height: "100%"
                });
            } else {
                Object.assign(slide.style, {
                    width: "0%",
                    height: "0%"
                });
            }
        });
    };

    // Show an element
    const show = elem => {
        elem.style.opacity = 1;

        elem.classList.add("is-visible");

        elem.style.zIndex = 400;

        const setHeight = (elem, height) => {
            elem.style.height = height;
        };

        setTimeout(() => {
            // Make the element visible

            elem.style.height = "100%"; // Update the max-height

            const prepToggle = setHeight(elem, "100%");

            setTimeout(prepToggle, 700);
        }, 400);

        setTimeout(() => {
            toggleMenuChildren(menuContent)(true)(false);
        }, 800);
    };

    const staggerElemStyleProps = elems => styleProp => styleValue => {
        console.log(elems);

        elems.forEach((elem, elemIndex) => {
            elem.style[transitionProp + "Delay"] = elemIndex * 50 + "ms";

            elem.style[styleProp] = styleValue;
        });
    };

    // Hide an element
    const hide = elem => {
        // Give the element a height to change from
        elem.style.height = elem.scrollHeight + "px";

        toggleMenuChildren(menuContent)(false)(() => {
            setTimeout(() => {
                elem.style.height = 0;
            }, 400);

            setTimeout(() => {
                elem.style.opacity = 0;
            }, 800);

            setTimeout(() => {
                elem.classList.remove("is-visible");

                elem.style.zIndex = -1;
            }, 1200);
        });
    };

    const toggleMenuChildren = menuElem => isActive => callback => {
        const menuChildren = [...menuElem.children].filter(
            child => child.tagName === "LI"
        );

        console.log(menuChildren);

        if (isActive) {
            menuChildren.forEach(child => {
                if (child.firstChild.tagName === "A") {
                    if (child.firstChild.style.zIndex) {
                        child.firstChild.style.removeProperty("z-index");
                    }
                }
            });

            staggerElemStyleProps(menuChildren)("opacity")(1);
        } else {
            menuChildren.forEach(child => {
                if (child.firstChild.tagName === "A") {
                    if (!child.firstChild.style.zIndex) {
                        child.firstChild.style.zIndex = "-1";
                    }
                }
            });

            staggerElemStyleProps(menuChildren)("opacity")(0);
        }

        if (callback) callback();
    };

    const toggleSwitch = (target, classToCheck) => {
        if (!target.classList.contains(classToCheck)) {
            target.classList.add("is-active");

            show(menuContent);

            hideSiteContainer(true, siteContainer, 1000);

            prepMenuItemSlide(menuItemSlides)(true);
        } else {
            target.classList.remove("is-active");

            hide(menuContent);

            hideSiteContainer(false, siteContainer, 0);

            prepMenuItemSlide(menuItemSlides)(false);
        }
    };

    const runToggleMenu = (event, eventTargetToggleType) => {
        switch (eventTargetToggleType) {
            case "toggleParent":
                toggleSwitch(event.target, "is-active");

                break;

            case "toggleBox":
                toggleSwitch(event.target.parentElement, "is-active");

                break;

            case "toggleInner":
                toggleSwitch(
                    event.target.parentElement.parentElement,
                    "is-active"
                );

                break;
        }
    };

    const togglePrep = event => {
        const removeEventListenerDelay = 1000;

        switch (event.target) {
            case toggleParent:
                runToggleMenu(event, "toggleParent");

                document.removeEventListener("click", togglePrep, true);

                setTimeout(() => {
                    document.addEventListener("click", togglePrep, true);
                }, removeEventListenerDelay);

                break;

            case toggleBox:
                runToggleMenu(event, "toggleBox");

                document.removeEventListener("click", togglePrep, true);

                setTimeout(() => {
                    document.addEventListener("click", togglePrep, true);
                }, removeEventListenerDelay);

                break;

            case toggleInner:
                runToggleMenu(event, "toggleInner");

                document.removeEventListener("click", togglePrep, true);

                setTimeout(() => {
                    document.addEventListener("click", togglePrep, true);
                }, removeEventListenerDelay);

                break;
        }
    };

    // Listen for click events
    document.addEventListener("click", togglePrep, true);
};

export default renderMenu;
