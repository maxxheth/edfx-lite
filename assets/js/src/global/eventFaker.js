const eventFaker = (eventName = "event", callback, ...elems) => {
    /**
     * @param eventName
     * @param callback
     * @param elems
     *
     * The event faker is a useful utility that devs can use to easily create custom events
     * or simulate core JS events such as click, mouseenter, dblclick, etc.
     *
     */

    const event = new Event(eventName);

    if (elems.length > 1) {
        /**
         * If the length of the elements array is greater than 1,
         * then execute a forEach loop to add the event handlers.
         *
         */
        elems.forEach(elem => elem.addEventListener(event, callback));

        /**
         * The curried function will trigger the dispatcher, which will call the event
         * and trigger all attached event handlers.
         *
         */

        return () => elems.forEach(elem => elem.dispatchEvent(event));
    } else {
        /**
         * Grab the one and only event from the elements array.
         *
         */
        const [elem] = elems;

        /**
         * Add the event handler.
         *
         */
        elem.addEventListener(event, callback);

        /**
         * Return the curried dispatch function and fire at will!
         *
         */
        return () => elem.dispatchEvent(event);
    }
};

export default eventFaker;
