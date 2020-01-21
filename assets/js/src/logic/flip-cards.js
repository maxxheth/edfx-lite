import grabCSSProps from '../global/grabCSSProps';

import grabBgColors from '../global/grabBgColors';

import getSiblings from '../helper-funcs/getSiblings';

import {jarallax} from 'jarallax';

export const flipCards = () => {

    function navTest(navType) {

        return navigator.userAgent.match(navType);

    }

    const siteContainer = document.querySelector('.site-container');

    /**
     * 
     * This block of code manipulates the cards you see in every section
     * on the home page.
     * 
     * Whenever you hover over a card, it flips over and reveals the other side,
     * and when the mouse cursor leaves the card area, it flips back.
     * 
     * It's fairly straightforward, but I also added a little twist by 
     * changing the color of the parallax sections so as to maintain contrast all 
     * throughout. 
     * 
     */

    const cards = [...document.querySelectorAll('.card')];

    const jarallaxContainers = [...document.querySelectorAll('.jarallax')];

    cards.forEach(card => {

        if (card.classList.contains('card--blue-bg'))

            card.style.transform = 'rotateX(-90deg)';

    });

    const multipleEvents = 'click' || 'touchstart';

    // cards.forEach(card => {

    // const transformRotate90 = 'rotateX(90deg)';

    const transformRotate0 = 'rotateX(0deg)';

    const transformRotateNeg90 = 'rotateX(-90deg)';

    // const zIndexToggle = target1 => target2 => delay => {

    //     setTimeout(() => {

    //         target1.style.zIndex = -1;

    //         target2.style.zIndex = 0;

    //     }, delay);

    // };

    document.addEventListener(multipleEvents, e => {

        // const redCard = e.target.matches('.card--red-bg') ? e.target : null;

        let redCard;

        if (e.target.matches('.card--red-bg')) {

            redCard = e.target;

        } else if (e.target.parentNode.matches('.card--red-bg')) {

            redCard = e.target.parentNode;

        } else {

            redCard = null;

        }

        if (!redCard) return;

        const redCardSiblings = getSiblings(redCard);

        const blueCard = redCardSiblings.find(elem => elem.classList ? elem.classList.contains('card--blue-bg') : null);

        if (!!blueCard && !!redCard) {

            redCard.style.transform = 'rotateX(90deg)';

            blueCard.style.transform = 'rotateX(0deg)';

            const blueCards = cards.filter(card => card.classList ? card.classList.contains('card--blue-bg') && card !== blueCard : null);

            const redCards = cards.filter(card => card.classList ? card.classList.contains('card--red-bg') && card !== redCard : null);

            redCards.forEach(card => {

                if (card.style.transform !== transformRotate0) {

                    card.style.transform = transformRotate0;

                }

                setTimeout(() => {

                    card.style.zIndex = 0;

                }, 50);

            });

            blueCards.forEach(card => {

                if (card.style.transform !== transformRotateNeg90) {

                    card.style.transform = transformRotateNeg90;

                }

                setTimeout(() => {

                    card.style.zIndex = -1;

                }, 50);

            });

            // blueCards.forEach(card => !!card ? card.style.transform = transformRotate0 : null);

            jarallaxContainers.forEach(container => {

                container.classList.add('jarallax-alt');

            });

            setTimeout(() => {

                redCard.style.zIndex = -1;

                blueCard.style.zIndex = 0;

            }, 50);

        }

    }, false);



    document.addEventListener(multipleEvents, e => {

        let blueCard;

        if (e.target.matches('.card--blue-bg')) {

            blueCard = e.target;

        } else if (e.target.closest('.card--blue-bg')) {

            if (e.target.tagName === 'BUTTON' || e.target.parentNode.tagName === 'BUTTON') return; 

            blueCard = e.target.closest('.card--blue-bg');

        } else {

            blueCard = null;

        }

        if (!blueCard) return;

        const blueCardSiblings = getSiblings(blueCard);

        const redCard = blueCardSiblings.find(elem => elem.classList ? elem.classList.contains('card--red-bg') : null);

        if (!!redCard && !!blueCard) {

            redCard.style.transform = 'rotateX(0deg)';

            blueCard.style.transform = 'rotateX(-90deg)';

            const blueCards = cards.filter(card => card.classList ? card.classList.contains('card--blue-bg') && card !== e.target : null);

            const redCards = cards.filter(card => card.classList ? card.classList.contains('card--red-bg') && card !== e.target : null);

            redCards.forEach(card => {

                if (card.style.transform !== transformRotate0)

                    card.style.transform = transformRotate0;

                setTimeout(() => {

                    card.style.zIndex = 0;

                }, 50);

            });

            blueCards.forEach(card => {

                if (card.style.transform !== transformRotateNeg90)

                    card.style.transform = transformRotateNeg90;

                setTimeout(() => {

                    card.style.zIndex = -1;

                }, 50);

            });

            jarallaxContainers.forEach(container => {

                container.classList.remove('jarallax-alt');

            });

            setTimeout(() => {

                redCard.style.zIndex = 0;

                blueCard.style.zIndex = -1;

            }, 50);

        }

    }, false);

    // });


    const jarallaxScenes = [...document.querySelectorAll('.jarallax')];

    jarallax(jarallaxScenes, {speed: 1.5});

    if (navigator.userAgent.indexOf('MSIE') !== -1 ||
        navigator.appVersion.indexOf('Trident/') > -1 ||
        window.navigator.userAgent.indexOf('Edge') > -1) {

        jarallax(jarallaxScenes, 'destroy');

        jarallaxScenes.forEach(scene => {

            scene.style.backgroundSize = 'cover';

            scene.style.backgroundRepeat = 'no-repeat';

        });

    }

    jarallaxScenes.forEach(scene => {

        /** Note: This a bug fix! 
         * Set add width and height properties with a value of 100vw and 100vh respectively 
         * so that each Jarallax scene is properly initialized. */

        scene.style.width = '100vw';

        scene.style.height = '60vh';

    });


    // Mobile card toggling

    const mobileBlueCards = [...document.querySelectorAll('.mobile-card__side--blue')],
        mobileRedCards = [...document.querySelectorAll('.mobile-card__side--red')];

    mobileRedCards.forEach(card => card.dataset.flipped = 'false');

    mobileBlueCards.forEach(card => card.dataset.flipped = 'true');

    const eventSwap = 'click' || 'touchstart';

    document.addEventListener(eventSwap, e => {

        if (e.target.matches('.mobile-card__side--red') || e.target.matches('.mobile-card__side--blue')) {

            e.target.parentNode.style.zIndex = 1;

            let eTargetTapPrompt = e.target.querySelector('.tap-me-prompt') ? e.target.querySelector('.tap-me-prompt') : null;

            if (eTargetTapPrompt !== null) eTargetTapPrompt.style.opacity = 0;

        }


        let mobRed = [...document.querySelectorAll('.mobile-card__side--red')],
            mobBlue = [...document.querySelectorAll('.mobile-card__side--blue')],
            mobCards = [...mobRed, ...mobBlue];

        setTimeout(() => {

            mobCards.forEach(card => {

                card.parentElement.style.zIndex = 0;

            });

        }, 500);

        if (e.target.classList.contains('mobile-card__side--red') && e.target.parentNode.classList.contains('mobile-card')) {

            if (!(e.target.classList.contains('flip-red') && e.target.nextElementSibling.classList.contains('flip-blue'))) {

                e.target.classList.add('flip-red');

                e.target.nextElementSibling.classList.add('flip-blue');

            }

        } else if (e.target.parentNode.classList.contains('mobile-card__side--red') && e.target.parentNode.parentNode.classList.contains('mobile-card')) {

            if (!(e.target.parentNode.classList.contains('flip-red') && e.target.parentNode.nextElementSibling.classList.contains('flip-blue'))) {

                e.target.parentNode.classList.add('flip-red');

                e.target.parentNode.nextElementSibling.classList.add('flip-blue');

            }

        }

        if (e.target.classList.contains('mobile-card__side--blue') && e.target.parentNode.classList.contains('mobile-card')) {

            if (e.target.classList.contains('flip-blue') && e.target.previousElementSibling.classList.contains('flip-red')) {

                e.target.classList.remove('flip-blue');

                e.target.previousElementSibling.classList.remove('flip-red');

            }

        } else if (e.target.parentNode.classList.contains('mobile-card__side--blue') && e.target.parentNode.parentNode.classList.contains('mobile-card')) {

            if (e.target.parentNode.classList.contains('flip-blue') && e.target.parentNode.previousElementSibling.classList.contains('flip-red')) {

                e.target.parentNode.classList.remove('flip-blue');

                e.target.parentNode.previousElementSibling.classList.remove('flip-red');

            }

        }

    });

    // document.addEventListener("scroll", scrollYCheck);

    // const mobileCardSides = [].slice.call(document.querySelectorAll('.mobile-card__side'));



    // const borderColors = {

    //     purpleBorder: '75, 33, 173',
    //     redBorder: '253, 56, 25',
    //     blueBorder: '0, 160, 255'

    // };

    const mouseDownOrTap = 'click' || 'touch';

    document.addEventListener(mouseDownOrTap, e => {

        // let eTargetCousins = mobileCardSides.filter(card => card !== e.target);

        // const resetCousins = (cousins, fullRed, fullBlue, eTarget) => {

        //     const hasClass = (elem, className) => {
            
        //         console.log(elem);
                
        //         return elem.classList ? elem.classList.contains(className) : false;
            
        //     };

        //     const tapPropSwap = elem => {

        //         if (hasClass(elem, 'mobile-card__side--red') && hasClass(elem, 'flip-red')) {

        //             if (elem === eTarget) return;

        //             elem.style.backgroundColor = 'rgba(' + fullRed.join(',') + ')';

        //             const elemSiblings = getSiblings(elem);

        //             const blueSibling = elemSiblings.find(sibling => hasClass(sibling, 'mobile-card__side--blue'));

        //             // elem.classList.remove('flip-red');

        //             blueSibling.style.backgroundColor = 'rgba(' + fullBlue.join(',') + ')';

        //             // if (blueSibling.classList.contains('flip-blue')) blueSibling.classList.remove('flip-blue');

        //             if (!elem.querySelector('.tap-me-prompt')) return;

        //             elem.querySelector('.tap-me-prompt').style.opacity = 1;

        //         } else if (hasClass(elem, 'mobile-card__side--blue') && hasClass(elem, 'flip-blue')) {

        //             if (elem === eTarget) return;

        //             elem.style.backgroundColor = 'rgba(' + fullBlue.join(',') + ')';

        //             const elemSiblings = getSiblings(elem);

        //             const redSibling = elemSiblings.find(sibling => hasClass(sibling, 'mobile-card__side--red'));

        //             // elem.classList.remove('flip-blue');

        //             redSibling.style.backgroundColor = 'rgba(' + fullRed.join(',') + ')';

        //             // if (redSibling.classList.contains('flip-red')) redSibling.classList.remove('flip-red');

        //             if (!elem.querySelector('.tap-me-prompt')) return;

        //             elem.querySelector('.tap-me-prompt').style.opacity = 0;

        //         }

        //         elem.style.removeProperty('border');

        //     };

        //     return cousins.forEach(cousin => tapPropSwap(cousin));

        // };

        const createRGBPropObj = (firstVal, secondVal) => {

            const RGBPropsObj = {

                RGBNumsRed: grabBgColors(firstVal),
                RGBNumsBlue: grabBgColors(secondVal),
                RGBANumsOpac05Red() {

                    return RGBPropsObj.RGBNumsRed.concat('0.5');

                },
                RGBANumsOpac1Red() {

                    return RGBPropsObj.RGBNumsRed.concat('1');

                },
                RGBANumsOpac05Blue() {

                    return RGBPropsObj.RGBNumsBlue.concat('0.5');

                },
                RGBANumsOpac1Blue() {

                    return RGBPropsObj.RGBNumsBlue.concat('1');

                }

            };

            return RGBPropsObj;


        };



        if (e.target.matches('.mobile-card__side') && e.target.matches('.mobile-card__side--red')) {

            let cssPropValRed = grabCSSProps(e.target, 'background-color'),
                cssPropValBlue = grabCSSProps(e.target.nextElementSibling, 'background-color'),
                redPropObj = createRGBPropObj(cssPropValRed, cssPropValBlue);

            e.target.style.backgroundColor = 'rgba(' + redPropObj.RGBANumsOpac05Red().join(',') + ')';

            // e.target.style.border = '4px solid rgba(' + borderColors.blueBorder + ')';

            /** 
             * For some weird reason, I have to give JavaScript half a second to assign the blue RGBA color 
             * backgroundColor property, otherwise it'll just parse the whole string as an RBG value and truncate
             * the alpha value at the end.
             * 
             */

            setTimeout(() => {

                e.target.nextElementSibling.style.backgroundColor = 'rgba(' + redPropObj.RGBANumsOpac05Blue().join(',') + ')';

                // e.target.nextElementSibling.style.border = '4px solid rgba(' + borderColors.redBorder + ')';

            }, 500);

            // resetCousins(eTargetCousins, redPropObj.RGBANumsOpac1Red(), redPropObj.RGBANumsOpac1Blue());

        } else if (e.target.matches('.mobile-card__side') && e.target.matches('.mobile-card__side--blue')) {

            let eTargetTapPrompt = e.target.previousElementSibling.querySelector('.tap-me-prompt');

            eTargetTapPrompt.style.opacity = 0;

            let cssPropValBlue = grabCSSProps(e.target, 'background-color'),
                cssPropValRed = grabCSSProps(e.target.previousElementSibling, 'background-color'),
                bluePropObj = createRGBPropObj(cssPropValRed, cssPropValBlue);

            e.target.style.backgroundColor = 'rgba(' + bluePropObj.RGBANumsOpac05Blue().join(',') + ')';

            // e.target.style.border = '4px solid rgba(' + borderColors.redBorder + ')';

            setTimeout(() => {

                e.target.previousElementSibling.style.backgroundColor = 'rgba(' + bluePropObj.RGBANumsOpac05Red().join(',') + ')';

                // e.target.previousElementSibling.style.border = '4px solid rgba(' + borderColors.blueBorder + ')';

            }, 500);

            // resetCousins(eTargetCousins, bluePropObj.RGBANumsOpac1Red(), bluePropObj.RGBANumsOpac1Blue(), e.target);

        }

    });

    if (navTest(/Mobi/) || navTest(/Tablet/) || navTest(/Nexus/)) {

        siteContainer.style.width = '100%';
        siteContainer.style.padding = '0';

    }

};