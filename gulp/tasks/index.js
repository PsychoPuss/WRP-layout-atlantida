/**
 * https://gist.github.com/Shwartz/815fd88e35312fd2844145089e788888
 * Utility to create index file with a list of all files
 */
export const index = (done) => {
	let fileList = "";

	app.plugins.fs.readdir(app.path.build.html, { withFileTypes: true }, (err, dirents) => {
		const filesNames = dirents.filter((dirent) => dirent.isFile()).map((dirent) => dirent.name);
		filesNames.forEach(function (file) {
			if (file != "index-list.html") {
				fileList += '<li><a href="' + file + '">' + file + "</a></li>";
			}
		});
		app.plugins.fs.writeFileSync(`${app.path.build.html}index-list.html`, "<html><head></head><body><h3>Content</h3><ul>" + fileList + "</ul></body></html>");
	});

	done();
};
