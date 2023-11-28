export const cardLineAnimator = () => {
	const cardLines = [...document.querySelectorAll(".card__line")];

	const cardLineStyle01 = {
		backgroundColor: "red",
		width: "0",
		height: "0.2rem",
		transition: "0.2s all ease-in-out",
	};

	const cardLineStyle02 = {
		backgroundColor: "red",
		width: "0",
		height: "0.2rem",
		transition: "0.2s all ease-in-out",
	};

	cardLines.forEach((cardline, cardlineIndex) => {
		switch (cardlineIndex) {
			case 0:
				Object.keys(cardLineStyle01).forEach((styleAttr) => {
					cardline.style[styleAttr] = cardLineStyle01[styleAttr];
				});

				break;

			case 1:
				Object.keys(cardLineStyle02).forEach((styleAttr) => {
					cardline.style[styleAttr] = cardLineStyle02[styleAttr];
				});

				break;
		}
	});
};
