const tweenFunc = (scrollTrigNum, elem, scrollYValue, flipOnXAxis) => {
	console.log(scrollTrigNum);
	console.log(elem);
	console.log(scrollYValue);
	console.log(flipOnXAxis);

	console.log("tweenFunc function has been executed");

	scrollYValue += 350;

	if (!flipOnXAxis) {
		if (scrollYValue > scrollTrigNum) {
			elem.style.transform = "rotateY(0)";
			elem.style.opacity = "1";
		} else {
			elem.style.transform = "rotateY(180deg)";
			elem.style.opacity = "0";
		}
	} else {
		if (scrollYValue > scrollTrigNum) {
			elem.style.transform = "rotateX(0)";
			elem.style.opacity = "1";
		} else {
			elem.style.transform = "rotateX(180deg)";
			elem.style.opacity = "0";
		}
	}
};

export default tweenFunc;
