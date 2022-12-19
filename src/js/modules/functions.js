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

export function stickyHeader() {
	const hasMainCarousel = document.querySelector(".swiper-main"),
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

export function parallaxInit() {
	let parallax = () => {
		const items = document.querySelectorAll(".parallax__wrapper");
		items.forEach((i) => {
			let parallaxBg = i.querySelector(".parallax__bg"),
				{ top: t, height: h } = i.getBoundingClientRect(),
				offset = window.innerHeight - t;
			parallaxBg.style.transform = `translateY(${(offset - h / 2) * 0.3}px)`;
			if (h >= window.innerHeight) {
				parallaxBg.style.height = `${window.innerHeight + h / 3}px`;
			} else {
				parallaxBg.style.height = `${(window.innerHeight + h) / 1.9}px`;
			}
		});
	};
	window.addEventListener("scroll", parallax);
	window.addEventListener("resize", parallax);
	parallax();
}

export function isotopeInit() {
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
}

export function swipersInit() {
	const swiperMainCarousel = new Swiper(".swiper.swiper-main", {
		loop: false,
		pagination: {
			el: ".swiper-main .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-main .swiper-button-next",
			prevEl: ".swiper-main .swiper-button-prev",
		},
	});

	const swiper1PerRowCarousel = new Swiper(".swiper.swiper-1-per-row", {
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter: true,
			disableOnInteraction: false,
		},
		loop: true,
		slidesPerView: 1,
		spaceBetween: 50,
		pagination: {
			el: ".swiper-1-per-row .swiper-pagination",
			clickable: true,
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
}
