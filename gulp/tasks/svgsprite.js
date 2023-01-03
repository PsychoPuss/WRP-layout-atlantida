import svgSpriter from "gulp-svg-sprite";

export const svgsprite = () => {
	/**
	 * Config: https://github.com/svg-sprite/svg-sprite/tree/main/docs
	 */
	let config = {
		mode: {
			symbol: {
				sprite: "../svg.html",
			},
		},
		svg: {
			xmlDeclaration: false,
			namespaceClassnames: false,
			rootAttributes: {
				class: "svg-sprite",
			},
		},
	};

	return app.gulp
		.src(app.path.src.svgiconsIn)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SVG sprite",
					message: "<%= error.message %>",
				})
			)
		)
		.pipe(svgSpriter(config))
		.pipe(app.gulp.dest(app.path.src.svgspriteOut));
};
