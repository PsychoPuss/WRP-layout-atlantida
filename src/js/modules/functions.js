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

export function careersTop() {
	let careersTopOffset = () => {
		const div = document.querySelector(".gallery-careers_top"),
			header = document.querySelector("header");
		if (div) {
			div.style.marginTop = `${header.offsetHeight - 125}px`;
		}
	};
	window.addEventListener("load", careersTopOffset);
	window.addEventListener("resize", careersTopOffset);
	careersTopOffset();
}

export function formSelectInit() {
	const contactsSelectSimple = new lc_select('select[name="title"], select[name="request_callback"], select[name="discover"]', {
		wrap_width: "100%",
		pre_placeh_opt: true,
		enable_search: false,
	});

	const contactsSelectMultiple = new lc_select('select[name="site"], select[name="location"]', {
		wrap_width: "100%",
		pre_placeh_opt: true,
		enable_search: false,
		// max_opts : 3,
	});
}

export function toggleTab() {
	const tabButtons = document.querySelectorAll(".btn.btn_tab"),
		headersAll = document.querySelectorAll(`.tabs-header .tab`),
		contentsAll = document.querySelectorAll(`.tabs-property .tab`);

	tabButtons.forEach((btn) => {
		let page = btn.dataset.tab,
			tabHeader = document.querySelector(`.tabs-header .tab[data-tab='${page}']`),
			tabContent = document.querySelector(`.tabs-property .tab[data-tab='${page}']`),
			introContent = document.querySelector(".property__header");

		btn.addEventListener("click", () => {
			tabButtons.forEach((i) => {
				if (!btn.classList.contains("btn_favourites") && !i.classList.contains("btn_favourites")) {
					i.classList.remove("active");
				}
			});

			if (!btn.classList.contains("btn_favourites")) {
				btn.classList.add("active");
			}

			if (tabHeader) {
				headersAll.forEach((i) => {
					i.classList.remove("active");
				});
				tabHeader.classList.add("active");
			}

			if (tabContent && !tabContent.classList.contains("active")) {
				contentsAll.forEach((i) => {
					i.classList.remove("active");
				});
				tabContent.classList.add("active");

				setTimeout(() => {
					introContent.classList.add("blink");
					setTimeout(() => {
						introContent.classList.remove("blink");
					}, 800);
				}, 0);
			}
		});
	});
	document.querySelector(".btn.btn_tab").click();
}

export function toggleFloor() {
	const floorButtons = document.querySelectorAll(".floors__list>li"),
		floorsInfoAll = document.querySelectorAll(`.floors__info>div`),
		floorsDetailsAll = document.querySelectorAll(`.floors__details>div`);

	floorButtons.forEach((btn) => {
		let floor = btn.dataset.floor,
			floorInfo = document.querySelector(`.floors__info>div[data-floor='${floor}']`),
			floorDetails = document.querySelector(`.floors__details>div[data-floor='${floor}']`);

		btn.addEventListener("click", () => {
			floorButtons.forEach((i) => {
				i.classList.remove("active");
			});

			btn.classList.add("active");

			floorsInfoAll.forEach((i) => {
				i.classList.remove("active");
			});

			floorsDetailsAll.forEach((i) => {
				i.classList.remove("active");
			});

			floorInfo.classList.add("active");
			floorDetails.classList.add("active");
		});
	});
	document.querySelector(".floors__list>li").click();
}
