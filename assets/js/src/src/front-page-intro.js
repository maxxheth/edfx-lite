// require('intersection-observer');

import grabCSSProps from './grabCSSProps';

import grabBgColors from './grabBgColors';

import getType from './gettype';

import SplitText from "../node_modules/gsap/SplitText.js";


// Preflight JS HTML Injection

const wistiaVideo = Wistia.api('cxdtou9jyn'),

mkElem = elemType => document.createElement(elemType);
cpElem = (elem, getInner = false) => !getInner ? elem.cloneNode() : elem.cloneNode(true);

if (wistiaVideo.embedded) {

	const 	wistiaFrag = document.createDocumentFragment(),
			wTextBox = mkElem('div'),
			wFrontPageHeader = mkElem('h1'),
			wIntro = mkElem('div'),
			wUSP = mkElem('div'),
			wFindOut = mkElem('div'),
			wIntroButton = mkElem('button'),
			wChevronCont = mkElem('div'),
			wChevron01 = mkElem('div'),
			wChevron02 = mkElem('div'),
			wChevron03 = mkElem('div'),

			wIntroRedShadowText01 = cpElem(wIntro),
			wIntroBlueShadowText01 = cpElem(wIntro),
			wIntroRedShadowText02 = cpElem(wIntro),
			wIntroBlueShadowText02 = cpElem(wIntro),
			wIntroRedShadowText03 = cpElem(wIntro),
			wIntroBlueShadowText03 = cpElem(wIntro),
			wIntroRedShadowText04 = cpElem(wIntro),
			wIntroBlueShadowText04 = cpElem(wIntro),
			wIntroRedShadowText05 = cpElem(wIntro),
			
			wTextBoxStyles = {

				padding: '4rem',
				position: 'absolute',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column'

			};

			Object.keys(wTextBoxStyles).forEach(key => {

				wTextBox.style[key] = wTextBoxStyles[key];

			});

			wTextBox.id = 'text-box';

			wFrontPageHeader.classList.add('front-page-header');
			wFrontPageHeader.innerHTML = '<span style="display:none">Welcome To EDFX!</span>';

			wIntroRedShadowText01.classList.add('intro', 'red-shadow-text');
			wIntroBlueShadowText02.classList.add('intro', 'blue-shadow-text');

			/**
			 * 
			 * The idea is to render the marquee container and elements first
			 * before inserting them into the Wistia video container once it's
			 * fully embedded.
			 * 
			 * 
			 */


}




(function () {

	document.addEventListener("DOMContentLoaded", function () {

		const tl = new TimelineMax();

		const textBox = document.getElementById('text-box');

		const intro = Array.prototype.slice.call(document.getElementsByClassName('intro'));

		const usp = Array.prototype.slice.call(document.getElementsByClassName('usp'));

		const findOut = Array.prototype.slice.call(document.getElementsByClassName('find-out'));

		const introButton = document.getElementById('intro-button');

		const chevronArrowDiv = document.getElementsByClassName("chevron-container")[0];

		const sizzle = document.getElementById('sizzle');

		const brand = document.getElementById('brand');

		const sizzlinBrand = [sizzle, brand];

		const videoDiv = document.getElementById('bg-video');

		const siteCont = document.getElementsByClassName('site-container')[0];

		const siteInner = document.getElementsByClassName('site-inner')[0];

		const brandLetters = Array.prototype.slice.call(document.getElementsByClassName('brand-letter'));

		const swingInStart = {

			rotationY: '180deg',
			opacity: 0,
			ease: Elastic.easeOut.config(1.2, 0.4)

		};

		const swingInStartDelay = {

			rotationY: '180deg',
			opacity: 0,
			delay: 5,
			ease: Elastic.easeOut.config(1.2, 0.4)


		};

		const swingInStartDelayLong = {

			rotationY: '180deg',
			opacity: 0,
			delay: 7,
			ease: Elastic.easeOut.config(1.2, 0.4)

		}

		const swingInStartDelayLonger = {

			rotationY: '180deg',
			opacity: 0,
			delay: 10,
			ease: Elastic.easeOut.config(1.2, 0.4)

		}

		const swingInEnd = {

			rotationY: 0,
			opacity: 1,
			ease: Elastic.easeOut.config(1.2, 0.4)

		};

		let elemFontSize, elemFontWeight;

		sizzlinBrand.forEach(elem => {

			elemFontSize = elem.style.fontSize;
			elemFontWeight = elem.style.fontWeight;

		});


		const mathRand = (num) => {

			if (!!num) {

				return num * Math.random();

			} else {

				return Math.random();

			}

		};

		// Animation configurations for #sizzle element

		const sizzlinStart = {

			x: mathRand(7),
			y: mathRand(8),
			scaleX: 0.8,
			scaleY: 1.2,
			rotation: '+=' + (Math.PI * 8) * mathRand() + 'deg',
			textShadow: '2px 2px 4px #00a0ff'


		};

		const sizzlinEnd = {

			x: mathRand(10),
			y: mathRand(6),
			scaleX: 1.3,
			scaleY: 0.9,
			rotation: '-=' + (Math.PI * 10) * mathRand() + 'deg',
			textShadow: '2px 2px 4px #fd3819',
			ease: RoughEase.ease.config({
				strength: 8,
				points: 20,
				template: Linear.easeNone,
				randomize: true
			}),
			repeat: -1,
			yoyo: true,
			clearProps: "x"

		};

		// Since it's a span element, it must be set as an inline block in order for transforms to work properly.

		sizzle.style.display = 'inline-block';

		// Set animations to originate from the center using transform-origin.

		sizzle.style.transformOrigin = 'center';


		// Animation configurations for brand letters


		brandLetters.forEach(function (letter) {
			letter.style.display = 'inline-block';
		});

		const buttonAnimationFrom = {

			x: 500,

			y: -250,

			scale: 0,

			rotationX: '360deg'

		};

		const buttonAnimationTo = {

			x: 0,
			y: 0,
			rotationX: 0,
			scale: 1,
			ease: Elastic.easeOut.config(1, 0.2)

		};

		chevronArrowDiv.style.opacity = 0;

		textBox.style.transformOrigin = 'left';

		intro.forEach(introElem => introElem.style.transformOrigin = 'left');

		usp.forEach(uspElem => uspElem.style.transformOrigin = 'right');

		findOut.forEach(findElem => findElem.style.transformOrigin = 'left');

		introButton.style.transformOrigin = 'right';


		// Start the sequence

		let textChildren;


		if (!(navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1 || window.navigator.userAgent.indexOf("Edge") > -1)) {

		

		tl.call(() => {

				textBox.removeChild(introButton);

				textBox.removeChild(chevronArrowDiv);

			})

			.call(() => {

				textChildren = Array.prototype.slice.call(textBox.children);

				textChildren = textChildren.filter(child => child.classList.contains('find-out'));

				textChildren.forEach(child => textBox.removeChild(child));

			})

			.call(() => {

				textChildren = Array.prototype.slice.call(textBox.children);

				textChildren = textChildren.filter(child => child.classList.contains('usp'));

				textChildren.forEach(child => textBox.removeChild(child));

			})

			.staggerFromTo(intro, 3, swingInStart, swingInEnd, 0.2)

			.staggerTo(intro, 4, swingInStartDelayLong, 0.3)

			.call(() => {

				textChildren = Array.prototype.slice.call(textBox.children);

				textChildren = textChildren.filter(child => child.classList.contains('intro'));

				textChildren.forEach(child => textBox.removeChild(child));

				usp.forEach(uspElem => textBox.appendChild(uspElem));

			})

			.staggerFromTo(usp, 3, swingInStartDelay, swingInEnd, 0.2)

			.fromTo(sizzle, Math.random() * 0.2, sizzlinStart, sizzlinEnd, '-=3')

			.staggerFromTo(brandLetters, 1, {
				scaleX: 1,
				scaleY: 1,
				paddingRight: 0
			}, {
				scaleX: 2,
				scaleY: 2,
				paddingRight: 10,
				yoyo: true,
				repeat: 1
			}, 0.2, '-=0.5')

			.fromTo(brandLetters[0], '0.2', {
				color: '#fff'
			}, {
				color: 'rgba(253, 56, 25, 1)',
				repeat: -1,
				yoyo: true
			}, '-=1.3')
			.fromTo(brandLetters[1], '0.2', {
				color: '#fff'
			}, {
				color: 'rgba(0, 163, 255, 1)',
				repeat: -1,
				yoyo: true
			}, '-=1.4')
			.fromTo(brandLetters[2], '0.2', {
				color: '#fff'
			}, {
				color: 'rgba(253, 56, 25, 1)',
				repeat: -1,
				yoyo: true
			}, '-=1.5')
			.fromTo(brandLetters[3], '0.2', {
				color: '#fff'
			}, {
				color: 'rgba(0, 163, 255, 1)',
				repeat: -1,
				yoyo: true
			}, '-=1.6')
			.fromTo(brandLetters[4], '0.2', {
				color: '#fff'
			}, {
				color: 'rgba(253, 56, 25, 1)',
				repeat: -1,
				yoyo: true
			}, '-=1.7')

			.staggerTo(usp, 4, swingInStartDelayLonger, 0.3)

			.call(() => {

				textChildren = Array.prototype.slice.call(textBox.children);

				textChildren = textChildren.filter(child => child.classList.contains('usp'));

				textChildren.forEach(child => textBox.removeChild(child));

				findOut.forEach(child => textBox.appendChild(child));

			})

			.staggerFromTo(findOut, 3, swingInStart, swingInEnd, 0.2)

			.staggerTo(findOut, 4, swingInStartDelayLong, 0.3)

			.call(() => {

				textChildren = Array.prototype.slice.call(textBox.children);

				textChildren = textChildren.filter(child => child.classList.contains('find-out'));

				textChildren.forEach(child => textBox.removeChild(child));

				textBox.appendChild(introButton);

			})


			.fromTo(introButton, 4, buttonAnimationFrom, buttonAnimationTo)

			.call(() => {

				textBox.appendChild(chevronArrowDiv);

			})


			.to(chevronArrowDiv, 1, {
				opacity: 1
			});

		} else {

			siteCont.removeChild(videoDiv);

			siteInner.style.paddingTop = '100px';

		}

	});

     

}());


// FLIPPING CARDS

(function () {

	function navTest(navType) {

		return navigator.userAgent.match(navType);

	}

	const siteInner = document.querySelector('.site-inner');

	document.addEventListener("DOMContentLoaded", function () {

		const blueCard01 = document.getElementById("blue-card-01"),
			blueCard02 = document.getElementById("blue-card-02"),
			blueCard03 = document.getElementById("blue-card-03"),
			blueCard04 = document.getElementById("blue-card-04"),
			blueCard05 = document.getElementById("blue-card-05"),
			blueCard06 = document.getElementById("blue-card-06"),
			redCard01 = document.getElementById("red-card-01"),
			redCard02 = document.getElementById("red-card-02"),
			redCard03 = document.getElementById("red-card-03"),
			redCard04 = document.getElementById("red-card-04"),
			redCard05 = document.getElementById("red-card-05"),
			redCard06 = document.getElementById("red-card-06");

		let isIndexEven;

		const blueCards = [
			blueCard01,
			blueCard02,
			blueCard03,
			blueCard04,
			blueCard05,
			blueCard06
		];

		const redCards = [
			redCard01,
			redCard02,
			redCard03,
			redCard04,
			redCard05,
			redCard06
		];

		const cards = [...blueCards, ...redCards];

		const even = (num) => {

			num = num % 2 === 0;

			return num;

		};

		const cardLocSet = (cards, xAxis) => {

			/* 	Set transform-origin property dynamically based on
				the index of the current item, and set it on 
				the x or y axis based on whether the xAxis param returns 
				true or false. */

			if (!xAxis) {

				cards.forEach((card, index) => {

					card.style.position = "relative";

					isIndexEven = even(index);

					if (isIndexEven) {

						card.style.transformOrigin = 'left';

					} else {

						card.style.transformOrigin = 'right';

					}

					card.style.transform = "rotateY(180deg)";

					card.style.opacity = 0;

				});

			} else {

				cards.forEach((card, index) => {

					card.style.position = "relative";

					isIndexEven = even(index);

					if (isIndexEven) {

						card.style.transformOrigin = 'top';

					} else {

						card.style.transformOrigin = 'bottom';

					}

					card.style.transform = "rotateX(0)";

					card.style.opacity = 0;

				});

			}

		};

		if (!navTest(/Mobi/) && !navTest(/Tablet/) && !navTest(/Nexus/)) {

			cardLocSet(blueCards, false);

			cardLocSet(redCards, true);

		}


		const tweenFunc = (scrollTrigNum, elem, scrollYValue, flipOnXAxis) => {

			let tl = new TimelineMax();

			scrollYValue += 350;

			if (!flipOnXAxis) {

				if (scrollYValue > scrollTrigNum) {

					tl.to(elem, 1, {
						rotationY: 0,
						opacity: 1,
						ease: Back.easeOut.config(1.7)
					});

				} else {

					tl.to(elem, 1, {
						rotationY: 180,
						opacity: 0,
						ease: Back.easeOut.config(1.7)
					});

				}

			} else {

				if (scrollYValue > scrollTrigNum) {

					tl.to(elem, 1, {
						rotationX: 0,
						opacity: 1,
						ease: Back.easeOut.config(1.7)
					});

				} else {

					tl.to(elem, 1, {
						rotationX: 180,
						opacity: 0,
						ease: Back.easeOut.config(1.7)
					});

				}

			}

		};

		// Get an element's distance from the top of the page
		const getElemDistance = (elem) => {

			let location = 0;
			if (elem.offsetParent) {
				do {
					location += elem.offsetTop;
					elem = elem.offsetParent;
				} while (elem);
			}
			return location >= 0 ? location : 0;
		};

		const jarallaxScenes = Array.prototype.slice.call(document.querySelectorAll('.jarallax'));

		// if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1) {

		jarallax(jarallaxScenes, {
			speed: 0.2
		});

		// Disable Jarallax on mobile!!

		jarallax(document.querySelectorAll('.jarallax'), {
			disableParallax: /iPad|iPhone|iPod|Android/,
			disableVideo: /iPad|iPhone|iPod|Android/
		});

		if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1 || window.navigator.userAgent.indexOf("Edge") > -1) { 

			jarallax(jarallaxScenes, 'destroy');

			jarallaxScenes.forEach(scene => {

				scene.style.backgroundSize = 'cover';

				scene.style.backgroundRepeat = 'no-repeat';

			});

		}

		jarallaxScenes.forEach(scene => {

			/** Note: This a bug fix! 
			 * Set add width and height properties with a value of 100vw and 100vh respectively 
			 * so that each Jarallax scene is properly initialized. */

			scene.style.width = '100vw';

			scene.style.height = '100vh';

		});


		const scrollYCheck = () => {


			//if (!navTest(/Mobi/) && !navTest(/Tablet/) && !navTest(/Nexus/)) {


			// PageYOffset is an alternative for scrollY for IE compatibility.
			const scrollYValue = window.scrollY || pageYOffset;

			cards.forEach(card => {

				if (card.classList.contains('card--blue-bg')) {

					tweenFunc(getElemDistance(card), card, scrollYValue, false);

				} else if (card.classList.contains('card--red-bg')) {

					tweenFunc(getElemDistance(card), card, scrollYValue, true);

				}

			});


		};

		// Mobile card toggling

		const slice = elem => Array.prototype.slice.call(elem);

		const mobileBlueCards = slice(document.querySelectorAll('.mobile-card__side--blue')),
		mobileRedCards = slice(document.querySelectorAll('.mobile-card__side--red'));
		// mobileCards = slice(document.querySelectorAll('.mobile-card'));

		const toBool = val => Boolean.call(val);

		mobileRedCards.forEach(card => card.dataset.flipped = 'false');

		mobileBlueCards.forEach(card => card.dataset.flipped = 'true');

		const eventSwap = 'click' || 'touchstart';

		document.addEventListener(eventSwap, (e) => {

			if (e.target.matches('.mobile-card__side--red') || e.target.matches('.mobile-card__side--blue')) {

				e.target.parentNode.style.zIndex = 1;

				let eTargetTapPrompt = !!e.target.querySelector('.tap-me-prompt') ? e.target.querySelector('.tap-me-prompt') : null;

				if (eTargetTapPrompt !== null) eTargetTapPrompt.style.opacity = 0; }

			// } else if (!e.target.matches('.mobile-card__side--red') || !e.target.matches('.mobile-card__side--blue')) {

			// 	const tapPrompts = [].slice.call(document.querySelectorAll('.tap-me-prompt'));

			// 	tapPrompts.forEach(prompt => {

			// 		if (prompt.style.opacity === 0) {
			// 			prompt.style.opacity = 0;
			// 		}

			// 	});

			// }

			let mobRed = [].slice.call(document.querySelectorAll('.mobile-card__side--red')),
			mobBlue = [].slice.call(document.querySelectorAll('.mobile-card__side--blue')),
			mobCards = [...mobRed, ...mobBlue];

			setTimeout(() => {

				mobCards.forEach(card => {

					card.parentElement.style.zIndex = 0;

				});

			}, 500);

		

			console.log(e.target);

				if (e.target.classList.contains('mobile-card__side--red') && e.target.parentNode.classList.contains('mobile-card') && toBool(e.target.dataset.flipped) === false) {

					if (!(e.target.classList.contains('flip-red') && e.target.nextElementSibling.classList.contains('flip-blue'))) {
						
						e.target.classList.add('flip-red');

						e.target.nextElementSibling.classList.add('flip-blue');

					}			

				} else if (e.target.parentNode.classList.contains('mobile-card__side--red') && e.target.parentNode.parentNode.classList.contains('mobile-card') && toBool(e.target.parentNode.dataset.flipped) === false) {

					if (!(e.target.parentNode.classList.contains('flip-red') && e.target.parentNode.nextElementSibling.classList.contains('flip-blue'))) {
						
						e.target.parentNode.classList.add('flip-red');

						e.target.parentNode.nextElementSibling.classList.add('flip-blue');

					}	

				}
				
				if (e.target.classList.contains('mobile-card__side--blue') && e.target.parentNode.classList.contains('mobile-card') && !toBool(e.target.dataset.flipped) === true) {

					if (e.target.classList.contains('flip-blue') && e.target.previousElementSibling.classList.contains('flip-red')) {
						
						e.target.classList.remove('flip-blue');

						e.target.previousElementSibling.classList.remove('flip-red');

					}

				} else if (e.target.parentNode.classList.contains('mobile-card__side--blue') && e.target.parentNode.parentNode.classList.contains('mobile-card') && !toBool(e.target.parentNode.dataset.flipped) === true) {

					if (e.target.parentNode.classList.contains('flip-blue') && e.target.parentNode.previousElementSibling.classList.contains('flip-red')) {
						
						e.target.parentNode.classList.remove('flip-blue');

						e.target.parentNode.previousElementSibling.classList.remove('flip-red');

					}

				}

		});

		window.addEventListener("scroll", scrollYCheck);

		const mobileCardSides = [].slice.call(document.querySelectorAll('.mobile-card__side'));

		

		const borderColors = {

			purpleBorder: '75, 33, 173',
			redBorder: '253, 56, 25',
			blueBorder: '0, 160, 255'

		}

		const mouseDownOrTap = 'click' || 'touch';

		document.addEventListener(mouseDownOrTap, e => {

			/**
			 * 
			 * I want to refactor this as a more functional expression so I can follow DRY 
			 * more closely.
			 * 
			 */

			let eTargetCousins = mobileCardSides.filter(card => card !== e.target);

			const resetCousins = (cousins, fullRed, fullBlue) => {

				return cousins.forEach(cousin => {

					if (cousin.classList.contains('mobile-card__side--red')) {

						cousin.style.backgroundColor = 'rgba(' + fullRed.join(',') + ')';

						cousin.style.removeProperty('border');

						cousin.querySelector('.tap-me-prompt').style.opacity = 1;

					} else if (cousin.classList.contains('mobile-card__side--blue')) {

						cousin.style.backgroundColor = 'rgba(' + fullBlue.join(',') + ')';

						cousin.style.removeProperty('border');

					}

				});

			};

			const createRGBPropObj = (firstVal, secondVal) => {

			 	const RGBPropsObj = {

					RGBNumsRed: grabBgColors(firstVal),
					RGBNumsBlue: grabBgColors(secondVal),
					RGBANumsOpac05Red() { return RGBPropsObj.RGBNumsRed.concat('0.5') },
					RGBANumsOpac1Red() { return RGBPropsObj.RGBNumsRed.concat('1') },
					RGBANumsOpac05Blue() { return RGBPropsObj.RGBNumsBlue.concat('0.5') },
					RGBANumsOpac1Blue() { return RGBPropsObj.RGBNumsBlue.concat('1') }

				}

				return RGBPropsObj;
			

			};

			

			if (e.target.matches('.mobile-card__side') && e.target.matches('.mobile-card__side--red')) {		

				let cssPropValRed = grabCSSProps(e.target, 'background-color'), 
					cssPropValBlue = grabCSSProps(e.target.nextElementSibling, 'background-color'),
					redPropObj = createRGBPropObj(cssPropValRed, cssPropValBlue);

				e.target.style.backgroundColor = 'rgba(' + redPropObj.RGBANumsOpac05Red().join(',') + ')';

				e.target.style.border = '4px solid rgba(' + borderColors.blueBorder + ')';

				/** 
				 * For some weird reason, I have to give JavaScript half a second to assign the blue RGBA color 
				 * backgroundColor property, otherwise it'll just parse the whole string as an RBG value and truncate
				 * the alpha value at the end.
				 * 
				  */

				setTimeout(() => {

					e.target.nextElementSibling.style.backgroundColor = 'rgba(' + redPropObj.RGBANumsOpac05Blue().join(',') + ')';

					e.target.nextElementSibling.style.border = '4px solid rgba(' + borderColors.redBorder + ')';

				}, 500);

				resetCousins(eTargetCousins, redPropObj.RGBANumsOpac1Red(), redPropObj.RGBANumsOpac1Blue());

			} else if (e.target.matches('.mobile-card__side') && e.target.matches('.mobile-card__side--blue')) {

				let eTargetTapPrompt = e.target.previousElementSibling.querySelector('.tap-me-prompt');

				eTargetTapPrompt.style.opacity = 0;

				let cssPropValBlue = grabCSSProps(e.target, 'background-color'), 
					cssPropValRed = grabCSSProps(e.target.previousElementSibling, 'background-color'),
					bluePropObj = createRGBPropObj(cssPropValRed, cssPropValBlue);

				e.target.style.backgroundColor = 'rgba(' + bluePropObj.RGBANumsOpac05Blue().join(',') + ')';

				e.target.style.border = '4px solid rgba(' + borderColors.redBorder + ')';

				setTimeout(() => {

					e.target.previousElementSibling.style.backgroundColor = 'rgba(' + bluePropObj.RGBANumsOpac05Red().join(',') + ')';

					e.target.previousElementSibling.style.border = '4px solid rgba(' + borderColors.blueBorder + ')';

				}, 500);

				resetCousins(eTargetCousins, bluePropObj.RGBANumsOpac1Red(), bluePropObj.RGBANumsOpac1Blue());

			}

		});

		if (navTest(/Mobi/) || navTest(/Tablet/) || navTest(/Nexus/)) {

			siteInner.style.width = '100%';
			siteInner.style.padding = '0';

		}


	});

})();

