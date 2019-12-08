import isEven from './is-even';

const IEHacks = () => {

    if (navigator.userAgent.indexOf('Trident') === -1) return;

    const homeSections = [...document.querySelectorAll('.home-section')];

    homeSections.forEach((section, sectionIndex) => {

        if (isEven(sectionIndex)) return;

        if (getComputedStyle(section).flexDirection === 'row-reverse') {

            section.style.flexDirection = 'row';

            const sectionCards = section.querySelectorAll('.card');

            sectionCards.forEach(sectionCard => sectionCard.style.right = 0);

        }

    });

};

export default IEHacks;