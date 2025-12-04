const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function build() {
  return src("assets/scss/**/**.scss").pipe(sass()).pipe(dest("assets/scss/"));
}

function watcher() {
  watch(["assets/scss/**/**.scss"], build);
}

exports.default = series(build, watcher);
