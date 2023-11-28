const animateEDFXLogo = () => {
	const circle = document.querySelector(".circle"),
		line01 = document.querySelector(".line-01"),
		tri01 = document.querySelector(".triangle-01");

	//const tl = new TweenMax();

	const pathArr01 = [".st0", ".st1", ".st2", ".st3"],
		pathArr02 = [".st4", ".st5"];

	const char00 = document.querySelector(".st0"),
		char01 = document.querySelector(".st1"),
		char02 = document.querySelector(".st2"),
		char03 = document.querySelector(".st3"),
		charSet04 = Array.from(document.querySelectorAll(".st4")),
		charSet05 = Array.from(document.querySelectorAll(".st5")),
		linGradArr = Array.from(document.querySelectorAll("linearGradient")),
		stopArr = [].slice.call(document.querySelectorAll("stop"));

	let count = 0;

	const snapStopArr = stopArr.map((arr) => {
		arr = Snap(arr).attr({ id: "stop-" + count++ });

		return arr;
	});

	snapStopArr.forEach((arr) => arr.attr({ "stop-opacity": 0 }));

	const snapStopSet01 = [snapStopArr[0], snapStopArr[1]],
		snapStopSet02 = [snapStopArr[2], snapStopArr[3]],
		snapStopSet03 = [snapStopArr[4], snapStopArr[5]],
		snapStopSet04 = [snapStopArr[6], snapStopArr[7]];

	const pathSelector = document.querySelectorAll("path");

	pathSelector.forEach((path) => {
		path.style.zIndex = "2000";

		path.style.position = "absolute";
	});

	console.log(pathSelector[0]);

	//document.addEventListener('DOMContentLoaded', () => {

	for (let i = 8; i < snapStopArr.length; i++) {
		((i) => {
			setInterval(
				() => {
					setTimeout(
						() => {
							snapStopArr[i].animate(
								{ "stop-opacity": 1 },
								1200 / Math.PI,
								mina.easeinout,
							);
						},
						(i * 150) / Math.PI,
					);
				},
				(i * 90) / Math.PI,
			);

			console.log(i);
		})(i);
	}

	const tl = new TimelineLite();

	// tl.from(char00, 2, { x: '-100%',  ease: Power4.easeInOut}, '-=0.8')
	// 	.from(char01, 2.5, { y: '-200%', ease: Power3.easeInOut}, '-=1.8')
	// 	.from(char02, 1.5, { x: '300%', ease: Power3.easeInOut}, '-=2')
	// 	.from(char03, 3, { y: '400%', ease: Power3.easeInOut }, '-=3');

	anime({
		targets: pathArr01[0],
		strokeDashoffset: [anime.setDashoffset, 0],
		fill: [{ value: "#000" }],
		easing: "easeInOutSine",
		duration: 2100,
		delay: 0,
		direction: "alternate",
		loop: false,
		update: function (anim, currentTime) {
			currentTime = Math.round(anim.currentTime);

			if (currentTime <= 500) {
				snapStopSet01.forEach((arr) =>
					arr.animate({ "stop-opacity": 1 }, 1000, mina.backin),
				);
			}
		},
	});

	anime({
		targets: pathArr01[1],
		strokeDashoffset: [anime.setDashoffset, 0],
		fill: [{ value: "#000" }],
		easing: "easeInOutSine",
		duration: 2200,
		delay: 0,
		direction: "alternate",
		loop: false,
		update: function (anim, currentTime) {
			currentTime = Math.round(anim.currentTime);

			if (currentTime <= 700) {
				snapStopSet02.forEach((arr) =>
					arr.animate({ "stop-opacity": 1 }, 900, mina.backin),
				);
			}
		},
	});

	anime({
		targets: pathArr01[2],
		strokeDashoffset: [anime.setDashoffset, 0],
		fill: [{ value: "#000" }],
		easing: "easeInOutSine",
		duration: 2600,
		delay: 0,
		direction: "alternate",
		loop: false,
		update: function (anim, currentTime) {
			currentTime = Math.round(anim.currentTime);

			if (currentTime <= 800) {
				snapStopSet03.forEach((arr) =>
					arr.animate({ "stop-opacity": 1 }, 1000, mina.backin),
				);
			}
		},
	});

	anime({
		targets: pathArr01[3],
		strokeDashoffset: [anime.setDashoffset, 0],
		fill: [{ value: "#000" }],
		easing: "easeInOutSine",
		duration: 3000,
		delay: 0,
		direction: "alternate",
		loop: false,
		update: function (anim, currentTime) {
			currentTime = Math.round(anim.currentTime);

			if (currentTime <= 900) {
				snapStopSet04.forEach((arr) =>
					arr.animate({ "stop-opacity": 1 }, 1100, mina.backin),
				);
			}
		},
	});
};

export default animateEDFXLogo;
