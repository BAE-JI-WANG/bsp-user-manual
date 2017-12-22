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
    inquirer = require('inquirer'),
    browserSync = require('browser-sync').create(),    // 브라우저 동기화...
    imagemin = require('gulp-imagemin'),               // 이미지 사이즈 줄이기... 이건 build option에서 처리를 하자.
    sass = require('gulp-sass'),                       // 확실히 sass가 쓰기는 편해
	sourcemaps = require('gulp-sourcemaps'),           // 소스맵 바인딩
	autoprefixer = require('gulp-autoprefixer'),         // ie10은 지원해줘야...
	notify = require('gulp-notify')                     // noti로 알려줍니다.


// path setting
var path = {
    resource : './_resource/',
    its  : './source/its',
    devServer : './.dev-server'
};

// 인메모리 스토리지로 잡파일 생성을 하지 않게 만들자
// 인메모리 스토리지가 문제가 좀 있는게, directory view가 되질 않는데다, browsersync 몇몇의 옵션 설정이 아예 되질 않네.
// var GulpMem = require('gulp-mem');      // 인메모리 스토리지 
// var gulpMem = new GulpMem();            // 인메모리 스토리지 생성
// gulpMem.enableLog = true;               // 콘솔에 로그를 남겨준다.

// gulpMem.serveBasePath = path.devServer       // gulp의 inmenory storage
// 사용 일례 :: 아레 코드처럼 gulp.dest 대산에 gulpMem.dest를 사용한다.
// .pipe(gulpMem.dest(path.devServer + '/resource'))
// middleware : gulp.middleware


// 서버 기동
gulp.task('server:start', function() {
    browserSync.init({
        server: {
            baseDir: path.devServer,
            directory:true
        },
        port : 3000,
        open : false
    });
});


// 스타일 처리
gulp.task('dev:its:style:sourcemap', function () {
	return gulp.src(path.resource + '*.scss')
		.pipe(sourcemaps.init({
            largeFile: true
        })) 					//sass-sourcemap 추가
		.pipe(sass({ errLogToConsole: false }))
		.on('error', function(err) {
			notify().write(err);
			this.emit('end');
		})
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'ie 10', 'ie 11'],
			expand: true,
			flatten: true
		}))
        .pipe(sourcemaps.write('./'))	
    //sass-sourcemap 작성. sourcemap에서 정확한 위치를 반영하려면 전처리가 모두 끝난 위치에 반영해주어야 한다.
        .pipe(gulp.dest(path.devServer + '/resource'))
        .pipe(browserSync.stream());
});


// 스크립트와 폰트파일 복사
gulp.task('dev:copy:asset',function () {
    return gulp.src(
        [
            path.resource + '/*',
            '!'+path.resource+'/*.scss'
        ]
    ).pipe(gulp.dest(path.devServer + '/resource'));
});

gulp.task('dev:its:make-html',function () {
    var its_path = './source/its/'
    
    // html파일은 일단 복사만...
    gulp.src(its_path + '/*.html') 
    .pipe(gulp.dest(path.devServer))
});

// 이미지 파일은 압축해서 넘김 
gulp.task('dev:its:imagemin', function () {
    var its_path = './source/its/'

    gulp.src(its_path + '**/*.png') 
    .pipe(imagemin())
    .pipe(gulp.dest(path.devServer))
});

// watch option
gulp.task('watch', function() {
    gulp.watch('./source/**/*.html',['dev:its:make-html']).on('change', browserSync.reload);
    gulp.watch(path.resource + "/*.scss", ['dev:its:style:sourcemap']);
});

// 이제 뭘 만들건지 confirm을 받아야지? 매뉴얼 빌드가 워낙 여러개 있을거니까.
gulp.task('default', function(done) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'select',
            message: "BSP 매뉴얼 빌더 :: 서비스를 고르세요",
            choices : [
                {
                    name : 'ITS',
                    value : 'its'
                },
                {
                    name : 'MD',
                    value : 'md'
                },
                {
                    name : 'OpsNow',
                    value : 'opsnow'
                }
            ]
        },
        {
            type: 'list',
            name: 'devOrBuild',
            message: '매뉴얼을 개발과 build중 고르세요',
            choices : [
                {
                    name : '개발',
                    value : 'dev'
                },
                {
                    name : 'build',
                    value : 'build'
                }
            ]
        }
    ]).then(function (answers) {
        console.log(JSON.stringify(answers, null, '  '));

        //답 받아왔지?
        if (answers.select === 'its' && answers.devOrBuild === 'dev') {
            gulp.start('dev:run:its');  //   ITS 개발모드 시작
        
        } else {
            console.log('현재는 지원하지 않습니다. 곧 만들게요 ㅜㅜ. 종료합니다!');
            done();
        }

    });
});


// 태스크 모임

// ITS 매뉴얼 개발 
gulp.task('dev:run:its', [
    'watch',
    'server:start',
    'dev:its:style:sourcemap',
    'dev:copy:asset',
    'dev:its:imagemin',
    'dev:its:make-html'

]);








//var	gulp = require('gulp');     //gulp 기초 불러오기
//	// fs = require('fs'),
//	// replace = require('gulp-replace'),
//	// stripComment = require('gulp-strip-comments');




//// 어디에 뭐가 들어있는지는 알아야지.



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
    // extender = require('gulp-html-extend'),             // 탬플릿 엔진으로 gulp-html-extend를 설정함
