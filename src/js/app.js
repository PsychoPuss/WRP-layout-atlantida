import * as functions from "./modules/functions.js";
functions.bindStickyHeader();

const swiperMainCarousel = new Swiper(".swiper.swiper-main", {
	loop: true,
	pagination: {
		el: ".swiper-main .swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-main .swiper-button-next",
		prevEl: ".swiper-main .swiper-button-prev",
	},
});

const swiper3PerRowCarousel = new Swiper(".swiper.swiper-3-per-row", {
	autoplay: {
		delay: 3000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
	loop: true,
	slidesPerView: 1,
	spaceBetween: 15,
	breakpoints: {
		577: {
			slidesPerView: 2,
		},
		990: {
			slidesPerView: 3,
		},
	},
});

const swiperWide = new Swiper(".swiper.swiper-wide", {
	slidesPerView: 1,
	centeredSlides: true,
	pagination: {
		el: ".swiper-wide .swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		990: {
			initialSlide: 1,
			slidesPerView: 1.5,
			spaceBetween: 15,
		},
	},
});

window.onload = function () {
	const isotopeContainer = document.querySelector(".gallery"),
		filterButtons = document.querySelector(".gallery-filter > ul");

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

			if (el.target.localName == "li" && !el.target.classList.contains("gallery-filter-active")) {
				items.forEach((i) => i.classList.remove("gallery-filter-active"));
				el.target.classList.add("gallery-filter-active");
				isotope.arrange({ filter: dataFilter });

				// isotope.once("arrangeComplete", function () {
				// 	isotope.layout();
				// });

				console.log(dataFilter);
				Fancybox.bind(dataFilter, {
					hideScrollbar: false,
					groupAll: true,
				});
			}
		});

		Fancybox.bind('.gallery__item', {
			hideScrollbar: false,
			groupAll: true,
		});
	}
};
