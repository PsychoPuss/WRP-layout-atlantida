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
	});

	const contactsSelectMultiple = new lc_select('select[name="site"], select[name="location"]', {
		wrap_width: "100%",
		pre_placeh_opt: true,
		enable_search: false,
		// max_opts : 3,
	});
}
