/* Проверка поддержки webp браузером */
export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		if (support == true) {
			document.querySelector("body").classList.add("webp");
		} else {
			document.querySelector("body").classList.add("no-webp");
		}
	});
}

export function bindStickyHeader() {
	let hasMainCarousel = document.querySelector(".swiper-main"),
		header = document.querySelector("header");

	hasMainCarousel ? header.classList.add("header_contrast") : "";

	let handleScroll = () => {
		if (window.scrollY > 0) {
			header.classList.add("header_fixed");
			hasMainCarousel ? header.classList.remove("header_contrast") : "";
		} else {
			header.classList.remove("header_fixed");
			hasMainCarousel ? header.classList.add("header_contrast") : "";
		}
	};
	window.addEventListener("scroll", handleScroll);
	handleScroll();
}
