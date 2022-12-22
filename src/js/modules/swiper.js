import { Swiper } from 'swiper/bundle';

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