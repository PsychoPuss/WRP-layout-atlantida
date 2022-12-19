/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.stickyHeader();\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.swipersInit();\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isotopeInit();\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.parallaxInit();\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.careersTop();\r\n\r\n\r\n\r\n\r\n\r\n\r\n// window.onload = function () {\r\n// \tconst isotopeContainer = document.querySelector(\".gallery\"),\r\n// \t\tfilterButtons = document.querySelector(\".gallery-filter > ul\");\r\n\r\n// \tif (isotopeContainer) {\r\n// \t\tconst isotope = new Isotope(isotopeContainer, {\r\n// \t\t\titemSelector: \".gallery__item\",\r\n// \t\t\tmasonry: {\r\n// \t\t\t\tcolumnWidth: \".grid-sizer\",\r\n// \t\t\t\tgutter: \".grid-gutter-sizer\",\r\n// \t\t\t},\r\n// \t\t});\r\n\r\n// \t\tisotope.layout();\r\n\r\n// \t\tfilterButtons.addEventListener(\"click\", function (el) {\r\n// \t\t\tlet items = filterButtons.querySelectorAll(\"li\"),\r\n// \t\t\t\tdataFilter = el.target.dataset.filter;\r\n\r\n// \t\t\tif (el.target.localName == \"li\" && !el.target.classList.contains(\"gallery-filter-active\")) {\r\n// \t\t\t\titems.forEach((i) => i.classList.remove(\"gallery-filter-active\"));\r\n// \t\t\t\tel.target.classList.add(\"gallery-filter-active\");\r\n// \t\t\t\tisotope.arrange({ filter: dataFilter });\r\n\r\n// \t\t\t\t// isotope.once(\"arrangeComplete\", function () {\r\n// \t\t\t\t// \tisotope.layout();\r\n// \t\t\t\t// });\r\n\r\n// \t\t\t\tFancybox.bind(dataFilter, {\r\n// \t\t\t\t\thideScrollbar: false,\r\n// \t\t\t\t\tgroupAll: true,\r\n// \t\t\t\t});\r\n// \t\t\t}\r\n// \t\t});\r\n\r\n// \t\tFancybox.bind(\".gallery__item\", {\r\n// \t\t\thideScrollbar: false,\r\n// \t\t\tgroupAll: true,\r\n// \t\t});\r\n// \t}\r\n// };\r\n\r\n// window.addEventListener(\"scroll\", function () {\r\n// \tconst items = document.querySelectorAll(\".parallax__wrapper\");\r\n\r\n// \titems.forEach((i) => {\r\n// \t\tlet parallaxBg = i.querySelector(\".parallax__bg\"),\r\n// \t\t\t{ top: t, height: h } = i.getBoundingClientRect(),\r\n// \t\t\toffset = window.innerHeight - t;\r\n\r\n// \t\tparallaxBg.style.transform = `translateY(${(offset - h / 2) * 0.3}px)`;\r\n\r\n// \t\tif (h >= window.innerHeight) {\r\n// \t\t\tparallaxBg.style.height = `${window.innerHeight + h / 3}px`;\r\n// \t\t} else if (h < window.innerHeight) {\r\n// \t\t\tparallaxBg.style.height = `${(window.innerHeight + h) / 2}px`;\r\n// \t\t}\r\n// \t});\r\n// });\r\n\n\n//# sourceURL=webpack://atlantida/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"careersTop\": () => (/* binding */ careersTop),\n/* harmony export */   \"isWebp\": () => (/* binding */ isWebp),\n/* harmony export */   \"isotopeInit\": () => (/* binding */ isotopeInit),\n/* harmony export */   \"parallaxInit\": () => (/* binding */ parallaxInit),\n/* harmony export */   \"stickyHeader\": () => (/* binding */ stickyHeader),\n/* harmony export */   \"swipersInit\": () => (/* binding */ swipersInit)\n/* harmony export */ });\n/* Проверка поддержки webp браузером */\r\nfunction isWebp() {\r\n\tfunction testWebP(callback) {\r\n\t\tlet webP = new Image();\r\n\t\twebP.onload = webP.onerror = function () {\r\n\t\t\tcallback(webP.height == 2);\r\n\t\t};\r\n\t\twebP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n\t}\r\n\ttestWebP(function (support) {\r\n\t\tif (support == true) {\r\n\t\t\tdocument.querySelector(\"body\").classList.add(\"webp\");\r\n\t\t} else {\r\n\t\t\tdocument.querySelector(\"body\").classList.add(\"no-webp\");\r\n\t\t}\r\n\t});\r\n}\r\n\r\nfunction stickyHeader() {\r\n\tconst hasMainCarousel = document.querySelector(\".swiper-main\"),\r\n\t\theader = document.querySelector(\"header\");\r\n\r\n\thasMainCarousel ? header.classList.add(\"header_contrast\") : \"\";\r\n\r\n\tlet handleScroll = () => {\r\n\t\tif (window.scrollY > 0) {\r\n\t\t\theader.classList.add(\"header_fixed\");\r\n\t\t\thasMainCarousel ? header.classList.remove(\"header_contrast\") : \"\";\r\n\t\t} else {\r\n\t\t\theader.classList.remove(\"header_fixed\");\r\n\t\t\thasMainCarousel ? header.classList.add(\"header_contrast\") : \"\";\r\n\t\t}\r\n\t};\r\n\twindow.addEventListener(\"scroll\", handleScroll);\r\n\thandleScroll();\r\n}\r\n\r\nfunction parallaxInit() {\r\n\tlet parallax = () => {\r\n\t\tconst items = document.querySelectorAll(\".parallax__wrapper\");\r\n\t\titems.forEach((i) => {\r\n\t\t\tlet parallaxBg = i.querySelector(\".parallax__bg\"),\r\n\t\t\t\t{ top: t, height: h } = i.getBoundingClientRect(),\r\n\t\t\t\toffset = window.innerHeight - t;\r\n\t\t\tparallaxBg.style.transform = `translateY(${(offset - h / 2) * 0.3}px)`;\r\n\t\t\tif (h >= window.innerHeight) {\r\n\t\t\t\tparallaxBg.style.height = `${window.innerHeight + h / 3}px`;\r\n\t\t\t} else {\r\n\t\t\t\tparallaxBg.style.height = `${(window.innerHeight + h) / 1.9}px`;\r\n\t\t\t}\r\n\t\t});\r\n\t};\r\n\twindow.addEventListener(\"scroll\", parallax);\r\n\twindow.addEventListener(\"resize\", parallax);\r\n\tparallax();\r\n}\r\n\r\nfunction isotopeInit() {\r\n\tconst isotopeContainer = document.querySelector(\".gallery\"),\r\n\t\tfilterButtons = document.querySelector(\".nav-filter > ul\");\r\n\r\n\tlet isotopeGallery = () => {\r\n\t\tif (isotopeContainer) {\r\n\t\t\tconst isotope = new Isotope(isotopeContainer, {\r\n\t\t\t\titemSelector: \".gallery__item\",\r\n\t\t\t\tmasonry: {\r\n\t\t\t\t\tcolumnWidth: \".grid-sizer\",\r\n\t\t\t\t\tgutter: \".grid-gutter-sizer\",\r\n\t\t\t\t},\r\n\t\t\t});\r\n\r\n\t\t\tisotope.layout();\r\n\r\n\t\t\tfilterButtons.addEventListener(\"click\", function (el) {\r\n\t\t\t\tlet items = filterButtons.querySelectorAll(\"li\"),\r\n\t\t\t\t\tdataFilter = el.target.dataset.filter;\r\n\r\n\t\t\t\tif (el.target.localName == \"li\" && !el.target.classList.contains(\"nav-filter-active\")) {\r\n\t\t\t\t\titems.forEach((i) => i.classList.remove(\"nav-filter-active\"));\r\n\t\t\t\t\tel.target.classList.add(\"nav-filter-active\");\r\n\t\t\t\t\tisotope.arrange({ filter: dataFilter });\r\n\r\n\t\t\t\t\t// isotope.once(\"arrangeComplete\", function () {\r\n\t\t\t\t\t// \tisotope.layout();\r\n\t\t\t\t\t// });\r\n\r\n\t\t\t\t\tFancybox.bind(dataFilter, {\r\n\t\t\t\t\t\thideScrollbar: false,\r\n\t\t\t\t\t\tgroupAll: true,\r\n\t\t\t\t\t});\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tFancybox.bind(\".gallery__item\", {\r\n\t\t\t\thideScrollbar: false,\r\n\t\t\t\tgroupAll: true,\r\n\t\t\t});\r\n\t\t}\r\n\t};\r\n\r\n\twindow.addEventListener(\"load\", isotopeGallery);\r\n\t// isotopeGallery();\r\n}\r\n\r\nfunction careersTop() {\r\n\tlet careersTopOffset = () => {\r\n\t\tconst div = document.querySelector(\".gallery-careers\"),\r\n\t\t\theader = document.querySelector(\"header\");\r\n\t\tdiv.style.marginTop = `${header.offsetHeight - 125}px`;\r\n\t};\r\n\twindow.addEventListener(\"load\", careersTopOffset);\r\n\twindow.addEventListener(\"resize\", careersTopOffset);\r\n\tcareersTopOffset();\r\n}\r\n\r\nfunction swipersInit() {\r\n\tconst swiperMainCarousel = new Swiper(\".swiper.swiper-main\", {\r\n\t\tloop: false,\r\n\t\tpagination: {\r\n\t\t\tel: \".swiper-main .swiper-pagination\",\r\n\t\t\tclickable: true,\r\n\t\t},\r\n\t\tnavigation: {\r\n\t\t\tnextEl: \".swiper-main .swiper-button-next\",\r\n\t\t\tprevEl: \".swiper-main .swiper-button-prev\",\r\n\t\t},\r\n\t});\r\n\r\n\tconst swiper1PerRowCarousel = new Swiper(\".swiper.swiper-1-per-row\", {\r\n\t\tautoplay: {\r\n\t\t\tdelay: 3000,\r\n\t\t\tpauseOnMouseEnter: true,\r\n\t\t\tdisableOnInteraction: false,\r\n\t\t},\r\n\t\tloop: true,\r\n\t\tslidesPerView: 1,\r\n\t\tspaceBetween: 50,\r\n\t\tpagination: {\r\n\t\t\tel: \".swiper-1-per-row .swiper-pagination\",\r\n\t\t\tclickable: true,\r\n\t\t},\r\n\t});\r\n\r\n\tconst swiper3PerRowCarousel = new Swiper(\".swiper.swiper-3-per-row\", {\r\n\t\tautoplay: {\r\n\t\t\tdelay: 3000,\r\n\t\t\tpauseOnMouseEnter: true,\r\n\t\t\tdisableOnInteraction: false,\r\n\t\t},\r\n\t\tloop: true,\r\n\t\tslidesPerView: 1,\r\n\t\tspaceBetween: 15,\r\n\t\tbreakpoints: {\r\n\t\t\t577: {\r\n\t\t\t\tslidesPerView: 2,\r\n\t\t\t},\r\n\t\t\t990: {\r\n\t\t\t\tslidesPerView: 3,\r\n\t\t\t},\r\n\t\t},\r\n\t});\r\n\r\n\tconst swiperWide = new Swiper(\".swiper.swiper-wide\", {\r\n\t\tslidesPerView: 1,\r\n\t\tcenteredSlides: true,\r\n\t\tpagination: {\r\n\t\t\tel: \".swiper-wide .swiper-pagination\",\r\n\t\t\tclickable: true,\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t990: {\r\n\t\t\t\tinitialSlide: 1,\r\n\t\t\t\tslidesPerView: 1.5,\r\n\t\t\t\tspaceBetween: 15,\r\n\t\t\t},\r\n\t\t},\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack://atlantida/./src/js/modules/functions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;