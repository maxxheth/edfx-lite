export const readMoreTweaks = () => {

    // const readMoreButtons = [...document.querySelectorAll('.blog-articles__section--read-more')];

    document.addEventListener('click', event => {

        // console.log(event); //eslint-disable-line

        // console.log("readMore button clicked!"); //eslint-disable-line

        if (!event.target.matches('.blog-articles__section--read-more')) return;

        const eventLink = event.target.querySelector('a');

        if (!eventLink) return;

        if (eventLink.href !== '' && eventLink.href !== '#')  {
            
            location.href = eventLink.href;

        }

    }, false); 

};