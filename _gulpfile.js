/************************************
 *
 *  처음 왔으면 readme.md좀 읽어보세요. 아직 없지만.. 
 *  스캐폴딩 구조를 써야된다.
 *
 */

var	gulp = require('gulp'),
	clean = require('gulp-clean'),                      // 개발 혹은 빌드 전 이전 파일들을 꺠끗하게 비우고 시작함
    stripComment = require('gulp-strip-comments'),      // 빌드할때 써먹을 설정입니다.  
    watch = require('gulp-watch'),
    inquirer = require('inquirer'),
    browserSync = require('browser-sync').create(),    // 브라우저 동기화...
    imagemin = require('gulp-imagemin'),               // 이미지 사이즈 줄이기... 이건 build option에서 처리를 하자.
    sass = require('gulp-sass'),                       // 확실히 sass가 쓰기는 편해
	sourcemaps = require('gulp-sourcemaps'),           // 소스맵 바인딩
	autoprefixer = require('gulp-autoprefixer'),         // ie10은 지원해줘야...
	notify = require('gulp-notify');                     // noti로 알려줍니다.

// path setting
var path = {
    resource : './_resource/',
    its  : './source/its',
    opsnow  : './source/opsnow',
    devServer : './.dev-server',
    build : './build'
};
//
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


// 공통 dev :: 로컬 개발 스타일 처리
gulp.task('dev:style:sourcemap', function () {
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


// 공통 build :: build 스타일 처리
gulp.task('build:style', function () {
	return gulp.src(path.resource + '*.scss')
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
        .pipe(gulp.dest(path.build + '/resource'));
});



// 공통 dev :: 스크립트와 폰트파일 복사
gulp.task('dev:copy:asset',function () {
    return gulp.src(
        [
            path.resource + '/*',
            '!'+path.resource+'/*.scss'
        ]
    )
    .pipe(gulp.dest(path.devServer + '/resource'))
    .pipe(browserSync.stream());
});

// 공통 build :: 스크립트와 폰트파일 복사
gulp.task('build:copy:asset',function () {
    return gulp.src(
        [
            path.resource + '/*',
            '!'+path.resource+'/*.scss'
        ]
    )
    .pipe(gulp.dest(path.build + '/resource'));
});


// ITS 개발 :: html 파일
gulp.task('dev:its:make-html',function () {
    
    // html파일은 일단 복사만...
    gulp.src(path.its + '/*.html') 
    .pipe(gulp.dest(path.devServer))
});

// ITS 빌드 :: html 파일
gulp.task('build:its:make-html',function () {
    
    // html파일은 일단 복사만...
    gulp.src(path.its + '/*.html') 
    .pipe(stripComment())
    .pipe(gulp.dest(path.build))
});

// opsnow dev :: html 파일
gulp.task('dev:opsnow:make-html',function () {
    
    // html파일은 일단 복사만...
    gulp.src(path.opsnow + '/*.html') 
    .pipe(gulp.dest(path.devServer))
});

// opsnow build :: html 파일
gulp.task('build:opsnow:make-html',function () {
    
    // html파일은 일단 복사만...
    gulp.src(path.opsnow + '/*.html') 
    .pipe(stripComment())
    .pipe(gulp.dest(path.build))
});



// ITS dev :: 이미지 파일 처리
gulp.task('dev:its:image', function () {
    gulp.src(path.opsnow + '/**/*') 
    .pipe(gulp.dest(path.devServer))
});

// ITS build :: 이미지 파일은 압축해서 넘김 
gulp.task('build:its:image', function () {
    console.log('image 압축 과정이 시간이 좀 걸립니다. 1~2분 정도 시간이 소요되니까 잠시 기다려 주세요.');
    gulp.src(path.its + '/**/*') 
    .pipe(imagemin())
    .pipe(gulp.dest(path.build))
});



// opsnow dev :: 이미지 파일 처리
gulp.task('dev:opsnow:image', function () {
    gulp.src(path.opsnow + '/**/*') 
    .pipe(gulp.dest(path.devServer))
});

// opsnow build :: 이미지 파일은 압축해서 넘김 
gulp.task('build:opsnow:image', function () {
    console.log('image 압축 과정이 시간이 좀 걸립니다. 1~2분 정도 시간이 소요되니까 잠시 기다려 주세요.');
    gulp.src(path.opsnow + '/**/*') 
    .pipe(imagemin())
    .pipe(gulp.dest(path.build))
});






// watch option
gulp.task('watch', function() {
    gulp.watch('./source/**/*.html',[
        'dev:its:make-html',
        'dev:opsnow:make-html'
    ]).on('change', browserSync.reload);

    gulp.watch(path.resource + "/*.scss", [
        'dev:style:sourcemap'
    ]);

    gulp.watch(path.resource + "/*.js", ['dev:copy:asset']);
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
                    name : 'OpsNow',
                    value : 'opsnow'
                }
            ]
        },
        {
            type: 'list',
            name: 'devOrBuild',
            message: '매뉴얼 개발하실건가요? build해서 배포하실건가요?',
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
        // console.log(JSON.stringify(answers, null, '  '));

        //답 받아왔지?
        if (answers.select === 'its') {
            if (answers.devOrBuild === 'dev') {
                gulp.src(path.build, {read:false}).pipe(clean());
                gulp.start('dev:run:its');  //   ITS 개발모드 시작
            } else if (answers.devOrBuild === 'build') {
                gulp.src(path.devServer, {read:false}).pipe(clean());
                console.log('build를 시작합니다.')
                gulp.start('build:run:its')
            }
        } else if (answers.select === 'opsnow') {
            if (answers.devOrBuild === 'dev') {
                gulp.src(path.build, {read:false}).pipe(clean());
                gulp.start('dev:run:opsnow');  //   ITS 개발모드 시작
            } else if (answers.devOrBuild === 'build') {
                gulp.src(path.devServer, {read:false}).pipe(clean());
                console.log('build를 시작합니다.')
                gulp.start('build:run:opsnow')
            }
        } else {
            console.log('현재는 지원하지 않습니다. 곧 만들게요 ㅜㅜ. 종료합니다!');
            done();
        }
    });
});


// 태스크 모임
gulp.task('clean',function () {
    gulp.src(path.build).pipe(clean());
    gulp.src(path.devServer).pipe(clean());
});

var path = {
    resource : './_resource/',
    its  : './source/its',
    opsnow  : './source/opsnow',
    devServer : './.dev-server',
    build : './build'
};
// dev :: ITS 매뉴얼
gulp.task('dev:run:its', [
    'clean',
    'watch',
    'server:start',
    'dev:style:sourcemap',
    'dev:copy:asset',
    'dev:its:image',
    'dev:its:make-html'
]);

// dev :: opsnow 매뉴얼
gulp.task('dev:run:opsnow', [
    'clean',
    'watch',
    'server:start',
    'dev:style:sourcemap',
    'dev:copy:asset',
    'dev:opsnow:image',
    'dev:opsnow:make-html'
]);

// build :: ITS 매뉴얼
gulp.task('build:run:its', [
    'clean',
    'build:style',
    'build:copy:asset',
    'build:its:image',
    'build:its:make-html'
]);

// build :: opsnow 매뉴얼
gulp.task('build:run:opsnow', [
    'clean',
    'build:style',
    'build:copy:asset',
    'build:opsnow:image',
    'build:opsnow:make-html'
]);






//var	gulp = require('gulp');     //gulp 기초 불러오기
//	// fs = require('fs'),
//	// replace = require('gulp-replace'),



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
