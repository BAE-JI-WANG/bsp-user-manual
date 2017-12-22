var	gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
	connect = require('gulp-connect');

gulp.task('server', function () {
	connect.server({
		root: './',
		port: 3050,
		livereload: true
	});
});

gulp.task

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(['user_guide_opsnow_ko.html','style/**','images/**']).on('change', livereload.changed);
});

gulp.task('default', ['watch','server']);
