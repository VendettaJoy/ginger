const hamburger = document.querySelector(".nav-hamburger");
const nav = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("is-active");

	const active = hamburger.getAttribute("aria-pressed") === "true";
	hamburger.setAttribute("aria-pressed", String(!active));
	hamburger.setAttribute("aria-expanded", String(!active));

	nav.setAttribute("expanded", String(!active));
});
