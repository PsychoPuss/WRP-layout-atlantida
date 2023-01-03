// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes("--build"),
	isDev: !process.argv.includes("--build"),
	gulp: gulp,
	path: path,
	plugins: plugins,
};

// Импорт задач
import { vendors } from "./gulp/tasks/vendors.js";
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/img.js";
import { svgsprite } from "./gulp/tasks/svgsprite.js";
import { index } from "./gulp/tasks/index.js";
import { deploy } from "./gulp/tasks/deploy.js";

// Наблюдатель за изменениями
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.img, img);
}

// Основные задачи
const mainTasks = gulp.parallel(vendors, copy, html, scss, js, img);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, index, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, index);

// Экспорт сценариев
export { dev };
export { build };
export { svgsprite };
export { index };
export { deploy };

// Выполнение сценария по-умолчанию
gulp.task("default", dev);
