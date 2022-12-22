import { Fancybox } from "@fancyapps/ui";

const isotopeContainer = document.querySelector(".gallery"),
	filterButtons = document.querySelector(".nav-filter > ul");

let isotopeGallery = () => {
	if (isotopeContainer) {
		const isotope = new Isotope(isotopeContainer, {
			itemSelector: ".gallery__item",
			masonry: {
				columnWidth: ".grid-sizer",
				gutter: ".grid-gutter-sizer",
			},
		});

		isotope.layout();

		filterButtons.addEventListener("click", function (el) {
			let items = filterButtons.querySelectorAll("li"),
				dataFilter = el.target.dataset.filter;

			if (el.target.localName == "li" && !el.target.classList.contains("nav-filter-active")) {
				items.forEach((i) => i.classList.remove("nav-filter-active"));
				el.target.classList.add("nav-filter-active");
				isotope.arrange({ filter: dataFilter });

				// isotope.once("arrangeComplete", function () {
				// 	isotope.layout();
				// });

				Fancybox.bind(dataFilter, {
					hideScrollbar: false,
					groupAll: true,
				});
			}
		});

		Fancybox.bind(".gallery__item", {
			hideScrollbar: false,
			groupAll: true,
		});
	}
};

window.addEventListener("load", isotopeGallery);
// isotopeGallery();