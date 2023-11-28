const triggerEvent = (el, type) => {
	let e;

	if ("createEvent" in document) {
		// modern browsers, IE9+
		e = document.createEvent("HTMLEvents");
		e.initEvent(type, false, true);
		el.dispatchEvent(e);
	} else {
		// IE 8
		e = document.createEventObject();
		e.eventType = type;
		el.fireEvent("on" + e.eventType, e);
	}
};

export default triggerEvent;
