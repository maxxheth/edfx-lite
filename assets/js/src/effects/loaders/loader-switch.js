export const loaderSwitch = (loaderElem) => {
	if (loaderElem.style.opacity === "0") {
		loaderElem.style.opacity = "1";
	} else if (loaderElem.style.opacity === "1") {
		loaderElem.style.opacity = "0";
	}
};
