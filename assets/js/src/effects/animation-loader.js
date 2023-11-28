import animateEDFXLogo from "./edfx-svg-logo";

const animationLoader = (logoCont) => {
	if (Object.prototype.toString.call(logoCont) !== "HTMLDivElement") {
		if (document.querySelector(logoCont)) {
			logoCont = document.querySelector(logoCont);
		}
	}

	logoCont.style.display = "block";

	logoCont.style.opacity = 1;

	animateEDFXLogo();

	setTimeout(() => {
		logoCont.style.opacity = 0;
	}, 2000);

	setTimeout(() => {
		logoCont.style.display = "none";
	}, 1000);
};

export default animationLoader;
