var gulp = require('gulp')
    rename = require('gulp-rename'),          // 확장자를 변경하거나
    replace = require('gulp-replace'),        // 이미지 프로퍼티 확장용도
    imageSize = require('image-size'),        // 이미지 파일의 크기 반환
    removeHtmlComment = require('gulp-remove-html-comments')
    pipecallback = require('gulp-callback'),
    pandoc = require('gulp-pandoc'),
	sass = require('gulp-sass'),               // 스타일시트 처리
	autoprefixer = require('gulp-autoprefixer'),    // 혹시 모를 레거시 브라우저 처리
	connect = require('gulp-connect'),
    clean = require('del'),
    livereload   = require('gulp-livereload'),
    runSequence  = require('run-sequence'),
    base64 = require('gulp-base64'),
    vinyl = require('vinyl'),
    fs = require('fs'),
	sourcemaps = require('gulp-sourcemaps')    // 개발용 소스맵 처리
;


// 경로 설정
var path = {
    source : {
        root : './source',
        style : './_resource/style',
        js : './_resource/js',
        template : './_resource/template',
        alertnow : './source/alertnow'
    },
    devserver : {
        root : './.devserver',
        alertnow : './.devserver/alertnow'
    },
    build : {
        root : './build'
    }
};


// 개발용 서버 설정
gulp.task('connect', function() {
	connect.server({
		root: path.devserver.root,
		port : 7080,
		livereload: true,
        directory:true
	});
});

// 파일 변경 감지 :: 로컬 개발 전용
gulp.task('watch', function(callback) {
    livereload.listen();
    gulp.watch(path.source.js+'/*.js',['copy:js'],callback);
    gulp.watch(path.source.style+'/*.{scss,sass,css}',['convert:sass:sourcemap'],callback);
    gulp.watch(path.source.template+'/**/*.html', ['convert:md2html'],callback);
    gulp.watch(path.source.root+'/**/*.md', ['convert:md2html']);
});


// 로컬에서 개발 시작할때 깨끗하게
gulp.task('clean:devserver',function () {
	return clean(path.devserver.root);
});



// 로컬 개발모드 구동
gulp.task('local',function () {
	runSequence('clean:devserver','copy:image',['convert:sass:sourcemap','convert:md2html','copy:js'],['connect','watch']);
})


gulp.task('build:run:opsnow', function () {
	runSequence(
        'clean:devserver',
        'copy:image',
        ['convert:sass:sourcemap','convert:md2html','copy:js'],
        'build')
});


gulp.task('build',function () {
    return gulp.src(path.devserver.alertnow + '/**/*')
                .pipe(gulp.dest(path.build.root));
});


// 스타일시트 변환
gulp.task('convert:sass:sourcemap', function () {
    return gulp.src(path.source.style + '/**/manual.scss')
        .pipe(sourcemaps.init()) 					//sass-sourcemap 추가
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 10', 'ie 11'],
            expand: true,
            flatten: false
        }))
        .pipe(base64())         // 이미지를 인라인화 하자
        .pipe(sourcemaps.write('./'))
        // .pipe(gulp.dest(path.devserver.alertnow + '/resource')) // 이거는 배포시스템 정리하고 나서 !!!!!
        .pipe(gulp.dest(path.devserver.alertnow))
        .pipe(livereload());
});

// js 파일 복사
gulp.task('copy:js',function () {
    return gulp.src(path.source.js + '/*.js')
        // .pipe(gulp.dest(path.devserver.alertnow + '/resource'))  // 이거는 배포시스템 정리하고 나서 !!!!!
        .pipe(gulp.dest(path.devserver.alertnow))
});

// 이미지 복사
// 각 서비스 폴더로 들어가야 되지 않겠냐;;
gulp.task('copy:image',function () {
    return gulp.src(path.source.root + '/**/*.{jpg,png}')
        .pipe(gulp.dest(path.devserver.root))
});

//markdown 파일 변환
gulp.task('convert:md2html',function () {
    // html 변환할때 이미지 파일의 정보를 얻어온다.
    return gulp.src(path.source.root + '/**/*.md')

        // markdown > html
        .pipe(pandoc({
            from:'markdown+hard_line_breaks+grid_tables-pipe_tables-simple_tables-multiline_tables+link_attributes',           // 개행에서 실수할수도 있으니 CR마다 강제 개행을 처리한다.
            to : 'html5',
            ext : '.html',
            args : ['--standalone','--toc','--template=./_resource/template/master.html','--toc-depth=6']
        }))
        .pipe(gulp.dest(path.devserver.root))
        // 이미지에 레티나에 대응하는 프로퍼티를 덧씌운다.
        .pipe(replace(/<img.+?>/gi,function (matchString) {

            // console.log(this.file.path.replace(/\w+(?=\.).html/i,'') + matchString.match(/[\w\/\.]+\.(png|gif|jpg)/gi)[0]);
            var image = {
                origin : matchString,
                location : this.file.path.replace(/[\w-_]+(?=\.).html/i,'') + matchString.match(/[\w-_\/\.]+\.(png|gif|jpg)/gi)[0],
                relativePath : matchString.match(/[\w-_\/\.]+\.(png|gif|jpg)/gi)[0],
                file : matchString.match(/\w+\.(png|gif|jpg)/gi)[0],
                alt : matchString.match(/alt="(.+?)"/gi),
            };

            image.width = (function (text) {
                var text = matchString.match(/width=".+?"/gi);
                return !!text ? Math.round(text[0].split('"')[1]) : imageSize(image.location).width / 2
            })(matchString);

            // 이미지 파일에서 이미지 크기를 읽어 1/4로 축소시킨 뒤 레티나에 대응한다.
            // 혹시 width prop가 있다면 그걸 가지고 온다.
            return '<img src="'  + image.relativePath + '"' + ' '
                    + 'width="'  + image.width        + '"' + ' '
                    // + 'height="' + image.height       + '"' + ' '
                    + (image.alt || '')     // alt prop가 있다면 같이 넣어준다.
                    + ' />';
        }))

        // 다국어 링크 추가
        .pipe(replace('<!-- @@insert :: multi language link -->',function() {
            // console.dir(this.file.relative)


            return '<span>한국어</span>';
            // !!!! 임시 조치로 한국어 처리부터
            // 그렇다면 이제 변수룰 설정해볼까.
            var path = (function (pathStrtng) {
                // 이제 각종 가공을 해야될 차례인가...
                // console.log(pathString.history[0]);

                var _row = pathString.history[0];
                var _split = _row.split('/');
                var _length = _split.length;

                var _array = {
                    fullpath : _row,
                    filename : _split[_length-1],
                    currentLanguage : _split[_length-2],
                };

                // 이제 가지고 와야 될거는 다국어 옵션을 처리하기 위한 거군뇨.
                // !!!! 여기부터 작업하면 됩니다.
                console.log(_array);

            })(this.file);



            var targetDirectory = this.file.history[0].replace(/\/[\w\-_]+\.m[dk][d]*/gi,'');
            var ko,zn,en;
            var dom = '';
            var files = fs.readdirSync(targetDirectory);
            var isCurrentLanguageFile = this.file.relative.split('/')[this.file.relative.split.length-1].split('.')[0];

            for(var i in files) {
                if (/ko.+\.m[dk][d]*/gi.test(files[i])) {
                    if (isCurrentLanguageFile === files[i].split('.')[0]) {
                        dom += '<span>한국어</span>';
                    } else {
                        dom += '<a href="' + '">한국어</a>';
                    }
                } else if (/en.+\.m[dk][d]*/gi.test(files[i])) {
                    if (isCurrentLanguageFile === files[i].split('.')[0]) {
                        dom += '<span>English</span>';
                    } else {
                        dom += '<a href="' + '">English</a>';
                    }
                } else if (/zn.+\.m[dk][d]*/gi.test(files[i])) {
                    if (isCurrentLanguageFile === files[i].split('.')[0]) {
                        dom += '<span>简体中文</span>';
                    } else {
                        dom += '<a href="' + '">简体中文</a>';
                    }
                }
            };

            // 이제 저기에 추가되어야 할 설정은 저거 남았네.
            // 각 서비스에 맞는 path설정만 하면 되겠구나.
            return dom;
        }))

        .pipe(removeHtmlComment())      //코멘트 제거
        .pipe(gulp.dest(path.devserver.root))
        .pipe(livereload());
});

gulp.task('lang',function () {
    return gulp.src(path.source.root + '/**/*.md')
        .pipe(replace('<!-- @@insert :: multi language link -->',function() {
            // Replace foobaz with barbaz and log a ton of information
            // See http://mdn.io/string.replace#Specifying_a_function_as_a_parameter

            // File {
            //     history:
            //     [ '/Users/mycoolade/Desktop/user_manual/source/alertnow/test.md' ],
            //         cwd: '/Users/mycoolade/Desktop/user_manual',
            //         base: '/Users/mycoolade/Desktop/user_manual/source/',
            //         stat:

            var targetDirectory = this.file.history[0].replace(/\/\w+(?=\.).md/gi,'');

            fs.readdir(targetDirectory, (err, files) => {
                files.forEach(file => {
                    console.log(file);
                });
            })
            // 닷파일 제외하고, 폴더 제외함 확장자는 md와 mkd만 취급함
            // 중국어 파일이 있으면 중국어 파일 링크를 가지고 오고, dom을 추가하고.
            // 자기 파일은 자기 언어셋 가지고 오고 dom 추가하고.
            // 지금은 버튼으로 되어있는데, 버튼 말고 a element로 변경한다.
            // 지금 내가 보고 있는 파일인지 아닌지도 중요하군?

            var zn = (function (){

            })();

        }))
            // .pipe(pipecallback(function () {
            //     var targetDirectory = process.cwd()
            //     fs.readdir(targetDirectory, (err, files) => {
            //         files.forEach(file => {
            //             console.log(file);
            //         });
            //     })
            // }))
});




