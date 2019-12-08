import EDFXColors from '../global/globalVars';

const { EDFXRed, EDFXBlue } = EDFXColors;

const slides = [...document.querySelectorAll('.edfx-toggle-menu__item--slide')];

const swapBGMenuSlide = () => {

    const menuItemSlides = [...document.querySelectorAll('.edfx-toggle-menu__item--slide')]
    
        .filter(slide => !slide.classList.contains('edfx-toggle-menu__item--slide--negative'));

    const menuItemLinks = [...document.querySelectorAll('.edfx-toggle-menu__link')];

    const menuToggleBody = document.querySelector('.edfx-toggle-menu');

    const siteContainer = document.querySelector('.site-container');

    // document.addEventListener('click', e => {

    const hideSiteContainer = (doHide = true) => {

        if (doHide) {
            
            siteContainer.style.opacity = 0;
        
        } else {

            siteContainer.style.opacity = 1;

        }

    };

    menuItemLinks.forEach(link => {

        link.addEventListener('mouseenter', e => {

            hideSiteContainer(true);

            const eParent = e.currentTarget.parentNode;

            if (eParent.classList.contains('edfx-toggle-menu__item') && e.currentTarget.tagName === 'A') {

                const dataMenuItemName = e.currentTarget.dataset.menuItemName;
            
                const menuItemSlide = menuItemSlides.find(slide => slide.dataset.menuItemSlide ? slide.dataset.menuItemSlide === dataMenuItemName : null);

                const otherMenuItemSlides = menuItemSlides.filter(slide => slide !== menuItemSlide);

                if (!menuItemSlide) return;

                const color = e.currentTarget.dataset.menuItemColor;

                console.log(color);

                if (color === 'blue') {

                    e.currentTarget.style.color = EDFXBlue;

                    menuItemSlide.style.backgroundColor = EDFXRed;

                    menuItemSlide.style.opacity = 1;

                    menuItemSlide.classList.add('slide-is-active');

                    menuToggleBody.style.backgroundColor = 'rgba(253, 56, 25, 0)';

                    otherMenuItemSlides.forEach(slide => {

                        if (slide.classList.contains('slide-is-active')) {

                            slide.classList.remove('slide-is-active');

                        }

                        slide.style.opacity = 0;

                    });

                    return;

                } 
                
                if (color === 'red') {

                    e.currentTarget.style.color = EDFXRed;

                    menuItemSlide.style.backgroundColor = EDFXBlue;

                    menuItemSlide.style.opacity = 1;

                    menuItemSlide.classList.add('slide-is-active');

                    menuToggleBody.style.backgroundColor = 'rgba(253, 56, 25, 0)';

                    otherMenuItemSlides.forEach(slide => {

                        if (slide.classList.contains('slide-is-active')) {

                            slide.classList.remove('slide-is-active');

                        }

                        slide.style.opacity = 0;

                    });

                    return;

                }
               
            }

        
        });

        link.addEventListener('mouseleave', e => {

            hideSiteContainer(false);

            const eParent = e.currentTarget.parentNode;

            if (eParent.classList.contains('edfx-toggle-menu__item') && e.currentTarget.tagName === 'A') {

                const dataMenuItemName = e.currentTarget.dataset.menuItemName;
            
                const menuItemSlide = menuItemSlides.find(slide => slide.dataset.menuItemSlide ? slide.dataset.menuItemSlide === dataMenuItemName : null);

                if (!menuItemSlide) return;

                e.currentTarget.style.color = '#fff';

                menuToggleBody.style.backgroundColor = 'rgba(253, 56, 25, 1)';
                
                // setTimeout(() => {

                menuItemSlide.style.opacity = 0;

                // }, 500);

                // clearInterval(bgSlideCheck);
                // EE.removeListener('bg-slide-activated', bgSlideCheck);

            }



        });

    });

};

export default swapBGMenuSlide;