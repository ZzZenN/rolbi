// Подключаем Gulp
var gulp = require("gulp");
var npmDist = require('gulp-npm-dist');
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

gulp.task('pug', function() {
    return gulp.src("src/pug/*.pug")
    .pipe(pug({
    	pretty: true
    }))
    .pipe(gulp.dest("dist"))
    .pipe(reload({stream: true}))
});

gulp.task('sass', function() {
	return gulp.src("src/sass/*.scss")
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest("dist/css"))
		.pipe(reload({stream: true}))
});

gulp.task('images', function() {
 	return gulp.src('src/images/**/*.{gif,jpg,png,svg}')
    	.pipe(gulp.dest('dist/images'));
});

gulp.task('scripts', function() {
 	return gulp.src('src/js/**/*.*')
    	.pipe(gulp.dest('dist/js'));
});

gulp.task('libs', function() {
 	return gulp.src('src/libs/**/*.*')
    	.pipe(gulp.dest('dist/libs'));
});

// Copy dependencies to ./public/libs/
gulp.task('nodelibs', function() {
  return gulp.src(npmDist(), {base:'./node_modules'})
    .pipe(gulp.dest('dist/libs'));
});

// Задача слежения за измененными файлами
gulp.task("watch", function() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch('src/images/**/*.{gif,jpg,png,svg}', gulp.series('images'));
	gulp.watch('src/js/**/*.*', gulp.series('scripts'));
    gulp.watch('src/libs/**/*.*', gulp.series('libs'));
    gulp.watch("src/sass/*.scss", gulp.series('sass'));
	gulp.watch("src/pug/**/*.pug", gulp.series('pug'));
});

gulp.task("build", gulp.parallel(['images', 'scripts', 'libs', 'nodelibs', 'sass', 'pug']));

// Запуск тасков по умолчанию
gulp.task("default", gulp.series('watch'));