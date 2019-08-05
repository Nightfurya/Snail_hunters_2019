var gulp = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-sync"),
  cleancss = require("gulp-clean-css"),
  concat = require("gulp-concat"),
  del = require("del"),
  gutil = require("gulp-util"),
  notify = require("gulp-notify"),
  rsync = require("gulp-rsync"),
  sass = require("gulp-sass"),
  stripCssComments = require("gulp-strip-css-comments"),
  uglify = require("gulp-uglify-es").default;

// task на автообновление страницы в браузере при каждом сохранении изменений
gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "project"
    },
    notify: false
  });
});

// Работа со стилями, файлы scss: определяет путь и файлы для слежения; переводит sass/scss -> css; собирает все файлы в единый css; расставляет префиксы; путь для хранения нового файла
// browserSync.stream() -> чаще для css файлов
gulp.task("styles", function() {
  return gulp
    .src("./project/scss/*.scss")
    .pipe(sass())
    .pipe(concat("all.min.css"))
    .pipe(autoprefixer(["last 15 versions"]))
    .pipe(stripCssComments())
    .pipe(cleancss())
    .pipe(gulp.dest("project/ready-css"))
    .pipe(browserSync.stream());
});

// Работа со скриптами: определяет путь и файлы для слежения; собирает все файлы в единый js; mifify js; путь для хранения нового файла
// browserSync.reload() -> чаще для js файлов
gulp.task("js", function() {
  return gulp
    .src("./project/js/*.js")
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("project/ready-js"))
    .pipe(browserSync.reload({ stream: true }));
});

// следит за установленными папками и файлами и при их изменении выполняет соответствующий task
gulp.task("watch", ["styles", "js", "browser-sync"], function() {
  gulp.watch("./project/scss/*.scss", ["styles"]);
  gulp.watch("./project/js/*.js", ["js"]);
  gulp.watch("./project/*.html", browserSync.reload);
});

gulp.task("build", ["deletepublic", "styles", "js"], function() {
  var buildFiles = gulp.src(["project/*.html"]).pipe(gulp.dest("public"));

  var buildCss = gulp.src(["project/ready-css/*"]).pipe(gulp.dest("public/ready-css"));

  var buildJs = gulp.src("project/ready-js/*.js").pipe(gulp.dest("public/ready-js"));

  var buildImg = gulp.src(["project/assets/*"]).pipe(gulp.dest("public/assets"));

  var buildFonts = gulp.src(["project/fonts/*"]).pipe(gulp.dest("public/fonts"));

  var buildFontAwesome = gulp.src(["project/font-awesome/**/*"]).pipe(gulp.dest("public/font-awesome"));
});

gulp.task("deletepublic", function() {
  return del.sync("public");
});
gulp.task("clearcache", function() {
  return cache.clearAll();
});

gulp.task("default", ["watch"]);
