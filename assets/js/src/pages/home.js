import renderMenu from "../global/menu";
import { flipCards } from "../logic/flip-cards";
import footerLinkAnimation from "../effects/footer-link-animation";
import swapBGMenuSlide from "../effects/swapBGMenuSlide";
import IEHacks from "../logic/ie-hacks";
import "simplebar";
import { TextTypeFactory } from "../global/text-typer-factory";
import { cardLineAnimator } from "../global/card-line-animator";

const TextType = TextTypeFactory({
	el: ".red-card-01-typewriter",
	loopOnce: true,
	period: 5000,
	blinkerSpeed: 200,
});

TextType.start();

const typeWriterElems = document.querySelectorAll(".typewriter");

for (const elem of typeWriterElems) {
	const backup = elem.querySelector(".backup");
	if (backup !== null) backup.style.display = "none";
}
console.log("Wazzzzuuup!");
footerLinkAnimation();
renderMenu();
flipCards();
swapBGMenuSlide(1000);
IEHacks();
cardLineAnimator();
