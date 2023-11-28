export const TextTypeFactory = ({
	el = ".typewrite",
	toRotate = {},
	period = "",
	blinkerSpeed = 500,
	textSrcDir = "",
	loopOnce = false,
} = {}) => {
	const TextTypeProto = {
		toRotate: toRotate,
		el: el,
		loopNum: 0,
		period: parseInt(period, 10),
		txt: "",
		textSrcDir: textSrcDir || "",
		loopOnceCount: 0,
		blinkerSpeed: blinkerSpeed,
		loopOnce,
		tick() {
			if (this.loopOnce) {
				if (this.loopOnceCount === this.toRotate.length) return;
			}

			const i = this.loopNum % this.toRotate.length;
			const fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

			const that = this;

			let delta = 200 - Math.random() * 100;

			if (this.isDeleting) {
				delta /= 2;
			}

			let isBlinking = false;

			if (!this.isDeleting && this.txt === fullTxt) {
				const wrap = this.el.querySelector(".wrap");

				setInterval(() => {
					if (!isBlinking) {
						wrap.style.borderRight = "0.08em solid rgba(255,255,255,0)";

						isBlinking = true;
					} else {
						wrap.style.borderRight = "0.08em solid rgba(255,255,255,1)";

						isBlinking = false;
					}
				}, blinkerSpeed);

				delta = this.period;
				this.isDeleting = true;

				this.loopOnceCount++;
			} else if (this.isDeleting && this.txt === "") {
				this.isDeleting = false;
				this.loopNum++;

				delta = 500;
			}

			setTimeout(() => {
				that.tick();
			}, delta);
		},
		setRenderTarget() {},
		start() {
			let elements = document.querySelectorAll(this.el);

			for (let i = 0; i < elements.length; i++) {
				let toRotate = elements[i].getAttribute("data-type");
				let period = elements[i].getAttribute("data-period");

				let looponce = elements[i].getAttribute("data-looponce") === "true";

				if (toRotate) {
					const TextType = TextTypeFactory({
						el: elements[i] || document.querySelectorAll(this.el)[i],
						toRotate:
							(this.toRotate.length && this.toRotate.length > 0) ||
							JSON.parse(toRotate),
						period: !isNaN(this.period) ? this.period : period,
						loopOnce: this.loopOnce || looponce,
						typewriterCont:
							this.typewriterCont !== ""
								? document.querySelector(this.typewriterCont)
								: "",
						textSrcDir: this.textSrcDir !== "" ? this.textSrcDir : "",
						blinkerSpeed: !isNaN(this.blinkerSpeed) ? this.blinkerSpeed : 500,
					});

					TextType.tick();
				}
			}

			return this;
		},
	};

	return TextTypeProto;
};

// const TextType = TextTypeFactory({
//     el: '.typewrite',
//     loopOnce: true,
//     period: 5000,
//     blinkerSpeed: 200
// });

// TextType.start();

// const TextTyper = TextTypeFactory({els: '.typewriter', loopOnce: true, period: 3000});

// TextTyper.start();
