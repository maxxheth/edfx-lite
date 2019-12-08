import  '../node_modules/intersection-observer/intersection-observer.js';
import lozad from 'lozad';

const lazyLoader = () => {

    // if (!document.querySelectorAll('.lazy-load')) return;

    console.log('Lozad is running!');
    
    const lozadInstance = lozad('.lazy-load', {

        rootMargin: "300px 0px",
        loaded(el) {

            el.classList.add('is-loaded');

        }

    });

    lozadInstance.observe();

};

export default lazyLoader;