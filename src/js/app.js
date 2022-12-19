import * as functions from "./modules/functions.js";
functions.stickyHeader();
functions.swipersInit();
functions.isotopeInit();
functions.parallaxInit();
functions.careersTop();






// window.onload = function () {
// 	const isotopeContainer = document.querySelector(".gallery"),
// 		filterButtons = document.querySelector(".gallery-filter > ul");

// 	if (isotopeContainer) {
// 		const isotope = new Isotope(isotopeContainer, {
// 			itemSelector: ".gallery__item",
// 			masonry: {
// 				columnWidth: ".grid-sizer",
// 				gutter: ".grid-gutter-sizer",
// 			},
// 		});

// 		isotope.layout();

// 		filterButtons.addEventListener("click", function (el) {
// 			let items = filterButtons.querySelectorAll("li"),
// 				dataFilter = el.target.dataset.filter;

// 			if (el.target.localName == "li" && !el.target.classList.contains("gallery-filter-active")) {
// 				items.forEach((i) => i.classList.remove("gallery-filter-active"));
// 				el.target.classList.add("gallery-filter-active");
// 				isotope.arrange({ filter: dataFilter });

// 				// isotope.once("arrangeComplete", function () {
// 				// 	isotope.layout();
// 				// });

// 				Fancybox.bind(dataFilter, {
// 					hideScrollbar: false,
// 					groupAll: true,
// 				});
// 			}
// 		});

// 		Fancybox.bind(".gallery__item", {
// 			hideScrollbar: false,
// 			groupAll: true,
// 		});
// 	}
// };

// window.addEventListener("scroll", function () {
// 	const items = document.querySelectorAll(".parallax__wrapper");

// 	items.forEach((i) => {
// 		let parallaxBg = i.querySelector(".parallax__bg"),
// 			{ top: t, height: h } = i.getBoundingClientRect(),
// 			offset = window.innerHeight - t;

// 		parallaxBg.style.transform = `translateY(${(offset - h / 2) * 0.3}px)`;

// 		if (h >= window.innerHeight) {
// 			parallaxBg.style.height = `${window.innerHeight + h / 3}px`;
// 		} else if (h < window.innerHeight) {
// 			parallaxBg.style.height = `${(window.innerHeight + h) / 2}px`;
// 		}
// 	});
// });
