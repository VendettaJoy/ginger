const hamburger = document.querySelector(".nav-hamburger");
const nav = document.querySelector(".nav-menu");

const media = window.matchMedia("(max-width: 80em)");
const main = document.querySelector("main");

function checkWindowSize(e) {
	if (e.matches) {
		// console.log("nav hidden");
		// make nav not interacitve/tabbable
		nav.setAttribute("inert", "");
		nav.style.transition = "none";
	} else {
		// console.log("nav shown");
		// make nav interactive/tabbable
		nav.removeAttribute("inert");
	}
}

function toggleMobileNav() {
	// change hamburger icon to x
	hamburger.classList.toggle("is-active");

	// get boolean value of hamburger aria attributes
	const active = hamburger.getAttribute("aria-pressed") === "true";

	// set boolean value of hamburger to the opposite value
	hamburger.setAttribute("aria-pressed", String(!active));
	hamburger.setAttribute("aria-expanded", String(!active));

	// show/hide nav
	nav.setAttribute("expanded", String(!active));

	// set interactiveness if nav is shown/hidden
	if (nav.getAttribute("expanded") === "true") {
		// make nav interactive
		nav.removeAttribute("inert");
		nav.removeAttribute("style");
		// make rest of app not interactive
		main.setAttribute("inert", "");
	} else {
		// make nav not interactive
		nav.setAttribute("inert", "");
		// make rest of app interactive
		main.removeAttribute("inert");
	}
}

hamburger.addEventListener("click", () => toggleMobileNav());
media.addEventListener("change", (e) => checkWindowSize(e));
