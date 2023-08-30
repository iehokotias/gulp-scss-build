const gulp = require("gulp");
const { watch } = require("gulp");
const postcss = require("gulp-postcss");

const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const dartSass = require("gulp-dart-sass");

const autoprefixer = require("autoprefixer");
const mqpacker = require("css-mqpacker");
const cssnano = require("cssnano");

const paths = {
  scss: {
    src: "scss/**/index.scss",
    dest: "assets/css",
  },
};

const plugin = [autoprefixer(), mqpacker()];

const devScss = () => {
  return gulp
    .src(paths.scss.src)
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    )
    .pipe(
      dartSass({
        outputStyle: "expanded",
      })
    )
    .pipe(postcss(plugin))
    .pipe(gulp.dest(paths.scss.dest));
};

const scss = () => {
  return gulp
    .src(paths.scss.src)
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    )
    .pipe(
      dartSass({
        outputStyle: "expanded",
      })
    )
    .pipe(postcss(Object.assign(plugin, [cssnano({ autoprefixer: false })])))
    .pipe(gulp.dest(paths.scss.dest));
};

const watchDevSass = () => {
  watch(paths.scss.src, devScss);
};

const watchSass = () => {
  watch(paths.scss.src, scss);
};

exports.devScss = devScss;
exports.scss = scss;

exports.watchDevSass = watchDevSass;
exports.watchSass = watchSass;

exports.default = gulp.series(scss);
