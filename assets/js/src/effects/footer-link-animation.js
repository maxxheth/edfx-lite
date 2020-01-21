import isEven from '../logic/is-even';

const footerLinkAnimation = () => {

    const edfxFooter = document.querySelector('.edfx-footer');

    const edfxFooterLinks = [...edfxFooter.querySelectorAll('a')]
    
        .filter(link => link.classList.contains('edfx-footer__link'));

    const edfxFooterFirstHalf = edfxFooter.querySelectorAll('.edfx-footer__half')[0];

    const edfxFooterSecondHalf = edfxFooter.querySelectorAll('.edfx-footer__half')[1];

    const edfxSocialMediaLinks = [...document.querySelectorAll('.edfx-footer__social-media-link')];

    let origLinkFontSize;

    edfxFooterLinks.forEach((link, linkIndex) => {

        // link.style.left = (90 * linkIndex) + 'px';

        link.addEventListener('mouseenter', () => {

            if (!isEven(linkIndex)) {

                link.classList.add('edfx-blue');

            } else {

                link.classList.add('edfx-red');

            }


            const otherLinks = edfxFooterLinks.filter(footerLink => footerLink !== link);

            otherLinks.forEach(otherLink => otherLink.classList.add('edfx-beige'));

            edfxSocialMediaLinks.forEach(smLink => smLink.classList.add('edfx-blue'));

            origLinkFontSize = getComputedStyle(link).fontSize;

            edfxFooterFirstHalf.classList.add('edfx-black-bg');

            edfxFooterSecondHalf.classList.add('edfx-beige-bg');

        });

        link.addEventListener('mouseleave', () => {

            if (!isEven(linkIndex)) {

                link.classList.remove('edfx-blue');

            } else {

                link.classList.remove('edfx-red');

            }


            const otherLinks = edfxFooterLinks.filter(footerLink => footerLink !== link);

            otherLinks.forEach(otherLink => otherLink.classList.remove('edfx-beige'));

            edfxSocialMediaLinks.forEach(smLink => smLink.classList.remove('edfx-blue'));

            link.style.fontSize = origLinkFontSize;

            edfxFooterFirstHalf.classList.remove('edfx-black-bg');

            edfxFooterSecondHalf.classList.remove('edfx-beige-bg');

        });

    });

};

export default footerLinkAnimation;