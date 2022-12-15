export const vendors = () => {
	return vendorJS();
	// return vendorJS(), vendorCSS();
};

function vendorJS() {
	const modules = [
		"node_modules/swiper/swiper-bundle.min.js",
		"node_modules/swiper/swiper-bundle.min.js.map",
		"node_modules/isotope-layout/dist/isotope.pkgd.min.js",
		"node_modules/@fancyapps/ui/dist/fancybox.umd.js",
	];
	return app.gulp.src(modules).pipe(app.gulp.dest(app.path.build.js));
}

function vendorCSS() {
	// const modules = ["node_modules/@fancyapps/ui/dist/fancybox.css"];
	return app.gulp.src(modules).pipe(app.gulp.dest(app.path.build.css));
}
