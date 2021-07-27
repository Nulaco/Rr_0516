var gulp = require("gulp"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  cssnano = require("gulp-cssnano"),
  autoprefixer = require("gulp-autoprefixer"),
  header = require("gulp-header"),
  replace = require("gulp-replace");

var pkg = require("./package.json");
var banner = [
  "// ==================================================",
  "// fancyBox v${pkg.version}",
  "//",
  "// Licensed GPLv3 for open source use",
  "// or fancyBox Commercial License for commercial use",
  "//",
  "// http://fancyapps.com/fancybox/",
  "// Copyright ${new Date().getFullYear()} fancyApps",
  "//",
  "// ==================================================",
  ""
].join("\n");

// Concatenate & Minify JS

gulp.task("scripts", function() {
  return gulp
    .src([
      "srcjs/core.js",
      "srcjs/media.js",
      "srcjs/guestures.js",
      "srcjs/slideshow.js",
      "srcjs/fullscreen.js",
      "srcjs/thumbs.js",
      "srcjs/hash.js",
      "srcjs/wheel.js"
    ])
    .pipe(concat("jquery.fancybox.js"))
    .pipe(replace(/({fancybox-version})/g, pkg.version))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest("dist"))
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest("dist"));
});

// Compile CSS

gulp.task("css", function() {
  return gulp
    .src("src/css/*.css") // Gets all files src/css
    .pipe(
      autoprefixer({
        browsers: ["last 5 versions"],
        cascade: false
      })
    )
    .pipe(concat("jquery.fancybox.css"))
    .pipe(gulp.dest("dist"))
    .pipe(rename({suffix: ".min"}))
    .pipe(cssnano({zindex: false}))
    .pipe(gulp.dest("dist"));
});

// Default Task
gulp.task("default", ["scripts", "css"]);
