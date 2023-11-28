import anime from "animejs/lib/anime.es";

import Swal from "sweetalert2";

import validate from "validate.js";

//import Pristine from "pristinejs";

//import { getValidationContraints } from "../data/validation-constraints";

const constraints = {
	fullName: {
		format: {
			pattern: /[A-Za-z]+\s*[A-Za-z]*\s*/g,
			flags: "i",
			message: "Please enter your full name using letters only. Thanks!",
		},
	},
	emailAddress: {
		email: true,
	},
};

export const contactModalToggle = () => {
	const contactModalOpenButton = document.querySelector(
		".edfx__button--contact-modal",
	);

	const contactModalCloseButton = document.querySelector(
		".modal-close__contact-modal",
	);

	const contactModal = document.querySelector(
		".edfx__info-card--modal--contact",
	);

	contactModalOpenButton.addEventListener(
		"click",
		(event) => {
			event.preventDefault();

			contactModal.style.display = "block";

			let posYValue;

			if (matchMedia("(max-width: 1099px)").matches) {
				posYValue = "-45%";
			} else {
				posYValue = "-50%";
			}

			anime({
				targets: contactModal,
				translateX: {
					value: "-50%",
					duration: 400,
					easing: "cubicBezier(0, 0, 0.2, 1)",
				},
				translateY: {
					value: posYValue,
					duration: 400,
					easing: "cubicBezier(0.22, 0.61, 0.36, 1)",
				},
				opacity: 1,
			});
		},
		false,
	);

	contactModalCloseButton.addEventListener(
		"click",
		(event) => {
			event.preventDefault();

			const triggerDisplayNoneAfterAnim = new Promise((resolve, reject) => {
				try {
					anime({
						targets: contactModal,
						translateX: {
							value: "350%",
							duration: 400,
							easing: "easeInOutSine",
						},
						translateY: {
							value: "-50%",
							duration: 400,
							easing: "easeInOutSine",
						},
						opacity: 0,
					});

					resolve(contactModal);
				} catch (error) {
					reject(error);
				}
			});

			triggerDisplayNoneAfterAnim
				.then((elem) => {
					if (elem)
						setTimeout(() => {
							elem.style.display = "none";
						}, 800);
				})
				.catch((error) => console.log(error));
		},
		false,
	);
};

export const contactModalAJAX = (destination) => {
	const contactModalForm = document.querySelector("form.contact-modal");

	const contactModalNameInput = document.querySelector(".contact-modal-name");

	const contactModalEmailInput = document.querySelector(".contact-modal-email");

	const contactModalBudgetInput = document.querySelector(
		".contact-modal-budget",
	);

	const contactModalMessageInput = document.querySelector(
		".contact-modal-message",
	);

	const contactModalSubmitButton =
		contactModalForm.querySelector('[type="submit"]');

	const contactModalInputs = [
		contactModalNameInput,
		contactModalEmailInput,
		contactModalMessageInput,
		contactModalSubmitButton,
	];

	const contactModal = document.querySelector(
		".edfx__info-card--modal--contact",
	);

	const createPayload = ({
		nameInput,
		emailInput,
		budgetInput,
		messageInput,
	}) => {
		const name = nameInput.value;

		const email = emailInput.value;

		const budget = budgetInput[budgetInput.selectedIndex].textContent;

		const message = messageInput.value;

		if (!name) {
			Swal.fire(
				"Hang on a sec...",
				"Please enter your name, thanks!",
				"warning",
			);
			return;
		}

		if (!email) {
			Swal.fire(
				"Hang on a sec...",
				"Please enter your email address, thanks!",
				"warning",
			);
			return;
		}

		if (budgetInput.selectedIndex === 0) {
			Swal.fire(
				"Hang on a sec...",
				"Please choose a budget range, thanks!",
				"warning",
			);
			return;
		}

		console.log({ name, email });

		// const isNotName = validate({ fullName: name }, constraints);

		const isNotEmail = validate({ emailAddress: email }, constraints);

		// console.log({ isNotName, isNotEmail });

		// if (isNotName) {
		//     Swal.fire(
		//         "Hang on a sec...",
		//         "Please enter only letters, thanks!",
		//         "warning"
		//     );
		//     return;
		// }

		if (isNotEmail) {
			Swal.fire(
				"Hang on a sec...",
				"Please enter a valid email address, thanks!",
				"warning",
			);
			return;
		}

		if (message.length === 0) {
			Swal.fire(
				"Hang on a sec...",
				"Care to tell us how we can help you?",
				"warning",
			);

			return;
		}

		const payload = {
			name,
			email,
			budget,
			message,
		};

		return payload;
	};

	contactModalSubmitButton.addEventListener(
		"click",
		(event) => {
			event.preventDefault();

			const payloadObject = createPayload({
				nameInput: contactModalNameInput,
				emailInput: contactModalEmailInput,
				budgetInput: contactModalBudgetInput,
				messageInput: contactModalMessageInput,
			});

			// contactModalInputs.forEach(inputElem => (inputElem.value = ""));

			if (!payloadObject) return;

			payloadObject.origin = "contactModal";

			console.log({ payloadObject });

			const payload = JSON.stringify(payloadObject);

			console.log({ payload });

			const PromisifiedAJAX = new Promise((resolve, reject) => {
				const xhr = new XMLHttpRequest();

				xhr.addEventListener("readystatechange", () => {
					switch (xhr.readyState) {
						case 4:
							if (xhr.status === 200) {
								resolve(xhr.response);
							} else {
								reject(xhr.status);
							}

							break;
					}
				});

				// const destination =
				//     location.protocol +
				//     "//" +
				//     location.host +
				//     "/helper_funcs/project-inquiry.php";

				xhr.open("POST", destination);

				xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

				xhr.send(payload);
			});

			PromisifiedAJAX.then((response) => {
				console.log({ response });

				const breakRegex = /\n+(.*)/g;

				const responseArr = response.match(breakRegex);

				const JSONResponse = responseArr[responseArr.length - 1].replace(
					/\n+/g,
					"",
				); // eslint-disable-line

				console.log(JSONResponse);

				const { sentBool } = JSON.parse(JSONResponse);

				console.log({ sentBool });

				if (sentBool) {
					Swal.fire({
						title: "Message sent!",
						html: "<p>We'll get back to you in 1-2 business days regarding your business enquiry. Thanks for reaching out!</p>",
						icon: "success",
					});

					const SwalConfirmButton = Swal.getConfirmButton();

					console.log(SwalConfirmButton);

					SwalConfirmButton.addEventListener(
						"click",
						() => {
							anime({
								targets: contactModal,
								translateX: {
									value: "350%",
									duration: 400,
									easing: "easeInOutSine",
								},
								translateY: {
									value: "-50%",
									duration: 400,
									easing: "easeInOutSine",
								},
								opacity: 0,
							});
						},
						false,
					);
				} else {
					Swal.fire(
						"There was an issue...",
						"There seems to be a technical issue with our server. In the meantime, please reach out to us at admin@edfx.co. Thanks!",
						"warning",
					);
				}
			}).catch((error) => {
				console.log(error);
			});
		},
		false,
	);
};
