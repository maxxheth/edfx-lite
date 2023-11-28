export const copyElement = (elem, getInnerHTML = false) =>
	!getInnerHTML ? elem.cloneNode() : elem.cloneNode(true);
