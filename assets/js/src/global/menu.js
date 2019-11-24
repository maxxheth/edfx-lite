export const renderMenu = () => {

    const docElemStyle = document.documentElement.style;
    const transitionProp = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';

    const menuContent = document.querySelector('.edfx-toggle-menu'),

        toggleParent = document.querySelector('.edfx-toggle-button'),

        toggleBox = document.querySelector('.hamburger-box'),

        toggleInner = document.querySelector('.hamburger-inner');

    // let tlIn = new TimelineLite(),
    //     tlOut = new TimelineLite();


    [...menuContent.children].forEach(child => child.style.transition = '0.2s all ease-in-out');

    // Show an element
    const show = elem => {

        elem.style.opacity = 1;

        elem.classList.add('is-visible');

        const setHeight = (elem, height) => {

            elem.style.height = height;

        }

        setTimeout(() => {
            // Make the element visible
            elem.style.height = '100%'; // Update the max-height

            const prepToggle = setHeight(elem, '100%');

            setTimeout(prepToggle, 700);

            

        }, 1000);

        setTimeout(() => {

            toggleMenuChildren(menuContent)(true)(false);

        }, 1400);

    };

    const staggerElemStyleProps = elems => styleProp => styleValue => {

        console.log(elems);

        elems.forEach((elem, elemIndex) => {

            elem.style[ transitionProp + 'Delay' ] = ( elemIndex * 50 ) + 'ms';

            elem.style[styleProp] = styleValue;

        }); 

        // for ( var i=0; i < items.length; i++ ) {
        //   var item = items[i];
        //   // stagger transition with transitionDelay
        //   item.style[ transitionProp + 'Delay' ] = ( i * 50 ) + 'ms';
        //   item.classList.toggle('is-moved');
        // }
      };

    // Hide an element
    const hide = elem => {

        // Give the element a height to change from
        elem.style.height = elem.scrollHeight + 'px';

        toggleMenuChildren(menuContent)(false)(() => {

            elem.style.height = '0';

            setTimeout(() => {

                elem.classList.remove('is-visible');

            }, 800);

            setTimeout(() => {

                elem.style.opacity = 0;

            }, 1200);

        });

    };


    const toggleMenuChildren = menuElem => isActive => callback => {

        const menuChildren = [...menuElem.children];


        if (!!isActive) {

            // return tlIn.staggerTo(menuChildren, 0.2, {
            //     opacity: 1
            // }, 0.05, '-=0.1');

            staggerElemStyleProps(menuChildren)('opacity')(1);


        } else {

            // return tlOut.staggerTo(menuChildren, 0.2, {
            //     opacity: 0
            // }, 0.05, '-=0.1');

            staggerElemStyleProps(menuChildren)('opacity')(0);
        }

        if (callback) callback();

    };


    const runToggleMenu = (event, eventTargetToggleType) => {

        switch (eventTargetToggleType) {

            case 'toggleParent':

                if (!event.target.classList.contains('is-active')) {

                    event.target.classList.add('is-active');

                    show(menuContent);

                } else if (event.target.classList.contains('is-active')) {

                    event.target.classList.remove('is-active');

                    hide(menuContent);

                }

                break;

            case 'toggleBox':

                if (!event.target.parentElement.classList.contains('is-active')) {

                    event.target.parentElement.classList.add('is-active');

                    show(menuContent);

                } else if (event.target.parentElement.classList.contains('is-active')) {

                    event.target.parentElement.classList.remove('is-active');

                    hide(menuContent);

                }

                break;

            case 'toggleInner':

                if (!event.target.parentElement.parentElement.classList.contains('is-active')) {

                    event.target.parentElement.parentElement.classList.add('is-active');

                    show(menuContent);

                } else if (event.target.parentElement.parentElement.classList.contains('is-active')) {

                    event.target.parentElement.parentElement.classList.remove('is-active');

                    hide(menuContent);

                }
            
            break;

        }

    };

    const togglePrep = (event) => {

        const removeEventListenerDelay = 2000;

        switch (event.target) {

            case toggleParent:

                runToggleMenu(event, 'toggleParent');

                document.removeEventListener('click', togglePrep, true);

                setTimeout(() => {

                    document.addEventListener('click', togglePrep, true);

                }, removeEventListenerDelay);

                break;

            case toggleBox:

                runToggleMenu(event, 'toggleBox');

                document.removeEventListener('click', togglePrep, true);

                setTimeout(() => {

                    document.addEventListener('click', togglePrep, true);

                }, removeEventListenerDelay);

                break;

            case toggleInner:

                runToggleMenu(event, 'toggleInner');

                document.removeEventListener('click', togglePrep, true);

                setTimeout(() => {

                    document.addEventListener('click', togglePrep, true);

                }, removeEventListenerDelay);

                break;

        }

    };

    // Listen for click events
    document.addEventListener('click', togglePrep, true);

};