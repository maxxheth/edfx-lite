import Swiper from "swiper";

import { getType } from "../helper-funcs/gettype";

export const swiperSlideCreator = ({
	sliderContent = [],
	slideClass = "",
} = {}) => {
	return sliderContent.testimonials.reduce((acc, curr, currIndex) => {
		const { company, content, logo } = curr;

		const swiperContentWrapperObject = {
			slideContent: {
				company,
				content,
				logo,
			},
			slideId: `0${currIndex + 1}`,
			slideClass: `${slideClass}`,
		};

		acc.push(swiperContentWrapperObject);

		return acc;
	}, []);
};

export const slideHTMLCreatorLayout01 = ({ company, logo, content }) => {
	if (logo !== "") {
		return `
            <div class="swiper-content">
                <div class="swiper-title">
                    <img src="${logo}" />
                </div>
                <blockquote><p>${content}</p></blockquote>
                <h2>${company}</h2>
            </div>
            `;
	}

	return `
		<div class="swiper-content">
			<blockquote><p>${content}</p></blockquote>
			<h2>${company}</h2>
		</div>
		`;
};

export const swiperInit = ({
	containerClass = ".swiper-container",
	wrapperClass = ".swiper-wrapper",
	// paginationClass = '.swiper-pagination',
	nextButtonClass = ".swiper-button-next",
	prevButtonClass = ".swiper-button-prev",
	scrollbarClass = ".swiper-scrollbar",
	swiperSlides = [
		{
			slideId: ".swiper-slide-01",
			slideContent: "slideContent",
			slideClass: ".swiper-slide",
		},
	], //eslint-disable-line
	slideHTMLCreatorCB = () => {},
}) => {
	const swiper = new Swiper(containerClass, {
		direction: "horizontal",

		loop: true,

		autoplay: { delay: 5000 },

		// pagination: { el: paginationClass },

		navigation: {
			nextEl: nextButtonClass,
			prevEl: prevButtonClass,
		},

		effect: "fade",

		scrollbar: { el: scrollbarClass },

		fadeEffect: { crossFade: true },

		observer: true,

		observeParents: true,

		breakpoints: {
			1099: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
	});

	const swiperContainer = document.querySelector(containerClass);

	const swiperWrapper = swiperContainer.querySelector(wrapperClass);

	swiperContainer.style.width = "100%";

	const swiperFrag = document.createDocumentFragment();

	swiperSlides.forEach((slide) => {
		const { slideId, slideContent, slideClass } = slide;

		const slideElem = document.createElement("div");

		slideElem.classList.add(slideClass);

		slideElem.id = slideId;

		if (getType(slideContent) === "object") {
			const { company, logo, content } = slideContent;

			const slideHTML = slideHTMLCreatorCB({
				company,
				logo,
				content,
			});

			slideElem.innerHTML = slideHTML;
		} else {
			slideElem.textContent = slideContent;
		}

		slideElem.id = slideId;

		swiperFrag.appendChild(slideElem);
	});

	swiperWrapper.appendChild(swiperFrag);

	return swiper;
};
