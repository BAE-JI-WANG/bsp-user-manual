/************************************
 *
 *  
 *  처음 왔으면 readme.md좀 읽어보세요. 아직 없지만.. 
 *  스캐폴딩 구조를 써야된다.
 *
 *
 */
var	gulp = require('gulp'),
    watch = require('gulp-watch'),
    spawn = require('child_process').spawn;


var browserSync = require('browser-sync').create();     // 브라우저 동기화...

// 인메모리 스토리지
var GulpMem = require('gulp-mem');      // 인메모리 스토리지 
var gulpMem = new GulpMem();            // 인메모리 스토리지 생성
gulpMem.enableLog = true;               // 콘솔에 로그를 남겨준다.

gulpMem.serveBasePath = './build'       // gulp의 inmenory storage


gulp.task('dev:local',function () {
    gulp.src(['./its/**/*'])
    // ...
    // Write to memory:
    .pipe(gulpMem.dest('./build'))

    // Start your dev server using the middleware:
    browserSync.init({
        server: {
            baseDir : './build',
            directory : true
        },
        middleware: gulpMem.middleware
    })
});

//gulpfile 수정시 Task restart
gulp.task('gulp-reload', function() {
  spawn('gulp', ['watch'], {stdio: 'inherit'});
  process.exit();
});

gulp.task('watch', function() {
    gulp.watch(['./its/**/*']).on('change', browserSync.reload);
    
    // gulpfile 수정시 task restart
	// gulp.watch('./gulpfile.js',['gulp-reload']);
});

gulp.task('default', ['dev:local','watch']);   // 개발 기본








//var	gulp = require('gulp');     //gulp 기초 불러오기
// extender = require('gulp-html-extend'),
//	// fs = require('fs'),
//	// replace = require('gulp-replace'),
//	// stripComment = require('gulp-strip-comments');


//// sass를 쓰기 위한 옵션. 복붙이라도 편해야지
//var	sass = require('gulp-sass');


//// 어디에 뭐가 들어있는지는 알아야지.
//var	sourcemaps = require('gulp-sourcemaps');



//// 이미지 최적화
//var imagemin = require('gulp-imagemin');




//gulp.task('watch', function () {
//	gulp.watch(['./its/*.html']).on('change', browserSync.changed);
    
//});


////
//// 다음 설정은?
////
//// 이제 탬플릿화를 해놔야 되는거니까...
//// gulp-extend를 써놔야 되는건가??
////
////
////
//// 각자의 서비스 채널에서 볼 수 있어야 한다.
