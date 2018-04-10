var gulp              = require('gulp')

    rename            = require('gulp-rename'),                // 확장자를 변경하거나
    replace           = require('gulp-replace'),               // 이미지 프로퍼티 확장용도
    imageSize         = require('image-size'),                 // 이미지 파일의 크기 반환
    removeHtmlComment = require('gulp-remove-html-comments')
    pandoc            = require('gulp-pandoc'),
	sass              = require('gulp-sass'),                  // 스타일시트 처리
	autoprefixer      = require('gulp-autoprefixer'),          // 혹시 모를 레거시 브라우저 처리
	connect           = require('gulp-connect'),
    livereload        = require('gulp-livereload'),
    clean             = require('del'),
    runSequence       = require('run-sequence'),
    base64            = require('gulp-base64'),
	sourcemaps        = require('gulp-sourcemaps'),            // 개발용 소스맵 처리
    args              = require('yargs').argv,

    makePdf           = require('gulp-html-pdf'),
    styleInject       = require("gulp-style-inject"),

    imagemin          = require('gulp-imagemin'),
    vinyl             = require('vinyl'),                      // 디버그 용도
    pipecallback      = require('gulp-callback')               // 디버그 용도
;
var pdf = require('gulp-pandoc-pdf');


// 경로 설정
var path = {
    source : {
        root : './source',
        style : './source/_resource/style',
        js : './source/_resource/js',
        template : './source/_resource/template'
    },
    devserver : './.devserver',
    deploy : './deploy',
    pdf : './pdf'

    //  디렉토리 예약어
    // .devserver
    // deploy
    // pdf
};

// 서비스명에 따라서 종착 디렉토리를 지정해줌
var source_path,dist_path,lang_path,locations;

// 개발용 서버 설정
gulp.task('connect', function() {
	connect.server({
		root: path.devserver,
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
    gulp.watch(path.source.root+'/**/*.png', ['copy:image','convert:md2html'],callback);
    gulp.watch(path.source.root+'/**/*.md', ['convert:md2html']);
});

// 빌드전 청소
gulp.task('clean:devserver',function () {
	return clean(path.devserver);
});

gulp.task('clean:deploy',function () {
	return clean(path.deploy);
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
        .pipe(gulp.dest(dist_path + '/' + source_path + '/resource'))
        .pipe(livereload());
});

gulp.task('convert:sass', function () {
    return gulp.src(path.source.style + '/**/manual.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 10', 'ie 11'],
            expand: true,
            flatten: false
        }))
        .pipe(base64())         // 이미지를 인라인화 하자
        .pipe(gulp.dest(dist_path + '/' + source_path + '/resource'))
        .pipe(livereload());
});

// js 파일 복사
gulp.task('copy:js',function () {
    return gulp.src(path.source.js + '/*.js')
        .pipe(gulp.dest(dist_path + '/' +  source_path + '/resource'))
        .pipe(livereload());
});

// 이미지 복사 :: 각 서비스 폴더
gulp.task('copy:image',function () {
    return gulp.src([
            path.source.root + '/' +  source_path + '/**/*.{jpg,png}',
            '!**/_resource/**'
        ])
        .pipe(gulp.dest(dist_path + '/' + source_path))
        .pipe(livereload());
});

//markdown 파일 변환, 이미지 정보를 가공하는 곳이 있으므로 반드시 이미지 복사가 끝난 후에 처리가 되어야 한다.
gulp.task('convert:md2html',function () {
    return gulp.src(path.source.root + '/' + source_path + '/**/*.md')
        .pipe(pandoc({
            // from:'markdown+hard_line_breaks+grid_tables-pipe_tables-simple_tables-multiline_tables+link_attributes',           // 개행에서 실수할수도 있으니 CR마다 강제 개행을 처리한다.

            // 개행에서 실수할수도 있으니 CR마다 강제 개행을 처리한다.
            from:'markdown+hard_line_breaks+link_attributes',
            to : 'html5',
            ext : '.html',
            args : ['--standalone','--toc','--template=./source/_resource/template/master_web.html','--toc-depth=6','--tab-stop=4']
        }))
        // 이미지 크기 매핑
        .pipe(replace(/<img src="(.+?)".+?>/gi,function (matchString,p1) {
            var is2x = Boolean(p1.match(/@2x/gi));
            var lang = (function (string) {
                // 여기에서 string은 gulp-vinyl에서 얻어온 이름입니다. 대개 태스크에서 prototype.src로 넘어오는 경로입죠.
                // 항상 다국어 폴더를 끼고 오도록 되어있으니 다국어 폴더 자체를 반환한다. cross os전략.
                if (/(ko|en|zh)/gi.test(string)) {
                    return string.replace(/[\w]+.(html|md)/gi,'');
                }
            })(this.file.relative);

            var _path = p1.replace('./',this.file.base+lang);
            var _width = !!is2x ? Math.round(imageSize(_path).width/2) : imageSize(_path).width;
            // var _height = !!is2x ? Math.round(imageSize(_path).height/2) : imageSize(_path).height;

            var alt = matchString.match(/alt=["'].+?["']/gi);

            // 이제 이미지의 넓이와 크기를 구해올 시간입니다.
            // !!!! 이미지의 높이는 당분간 배제하고 넓이만 가지고 처리하는 방법으로 처리(ratio 때문에 ㅜㅜ)
            // return '<img src="' + p1 + '" width="' + _width + '" height="' + _height + '" ' + (!!alt ? alt : ' ') + ' />';
            return '<img src="' + p1 + '" width="' + _width + '" '+ (!!alt ? alt : ' ') + ' />';
        })) 
        .pipe(removeHtmlComment())      //코멘트 제거
        .pipe(gulp.dest(dist_path + '/' +  source_path))
        .pipe(livereload());
});



// 이미지 압축
// 20mb 압축에 통상 30분 좀 넘게 걸려서 CI 자동배포는 못써먹을거 같음.
gulp.task('copy:image:min', function() {
    // 최종 배포시에만 적용.
    console.log('/**************************************************************/');
    console.log('/**                                                          **/');
    console.log('/**     이미지 압축에 오랜 시간이 걸립니다. 참고하세요!      **/');
    console.log('/**                                                          **/');
    console.log('/**************************************************************/');

    return gulp.src([path.source.root + '/' + source_path + '/**/*.{png,jpg,gif}','!**/_resource/**'])
        .pipe(imagemin({verbose:true}))
        .pipe(gulp.dest(dist_path + '/' + source_path));
});

gulp.task('local',function (){

    if (!!args.alertnow) {
        source_path = 'alertnow';
        dist_path = path.devserver;
    } else {
        console.log('\n\nhelp를 참조하셔서 명령어를 잘 넣어 주세요 :)\n\n');
        return;
    }

    runSequence('clean:devserver','copy:image','convert:sass:sourcemap','convert:md2html','copy:js',['connect','watch']);
    console.log('간간히 브랜치에 있는 이미지들 수동으로 minify 돌려서 푸시해 주세요. 배포시간이 줄어듭니다. :)');
});

// 배포모드 구동
gulp.task('deploy',function () {

    if (!!args.alertnow) {
        source_path = 'alertnow';
        dist_path = path.deploy;
    } else {
        console.log('\n\nhelp를 참조하셔서 명령어를 잘 넣어 주세요 :)\n\n');
        return;
    }


	runSequence(['clean:devserver','clean:deploy'],'copy:image:min','convert:sass','convert:md2html','copy:js');
})


gulp.task('pdf',function () {
    console.log(args.lang);
    if ((args.lang !=='ko' && args.lang !== 'en' && args.lang !== 'zh') || !args.alertnow) {
        console.log(`
PDF는 언어셋 별로 만들어집니다.
아래처럼 명령어를 입력해주세요.

> gulp pdf --서비스명 --언어=ko|zh|en

예)
> gulp pdf --alertnow --lang=ko

help를 참조하셔서 명령어를 잘 넣어 주세요 :)

            `);
        return;

    }
    if (!!args.alertnow) {
        source_path = 'alertnow';
        dist_path = path.pdf;
        lang_path = args.lang
    } 

	runSequence(['clean:devserver','clean:pdf'],'convert:scss:pdf','convert:md2pdf');
});

gulp.task('pdf:dev',function () {
    console.log('pdf 미리보기 시간 걸리니까 편의상 빨리빨리 프리뷰 하라고 만들어 놨습니다.');

    if ((args.lang !=='ko' && args.lang !== 'en' && args.lang !== 'zh') || !args.alertnow) {
        return console.log('arguments 없는거 아니냐?');
    }

    if (!!args.alertnow) {
        source_path = 'alertnow';
        dist_path = path.pdf;
        lang_path = args.lang;
    } 

	runSequence(['clean:devserver','clean:pdf'],'convert:scss:pdf','convert:md2pdf',['watch:pdf']);
});



// --------------------------------------------------------------------------------

//pdf 빌드 전 watch형식으로 보려고..
gulp.task('watch:pdf', function(callback) {
    livereload.listen();
    gulp.watch(path.source.style+'/*.{scss,sass,css}',['convert:scss:pdf','convert:md2pdf'],callback);
    gulp.watch(path.source.root+'/**/*.{png|jpg|gif}', ['convert:md2pdf'],callback);
    gulp.watch(path.source.root+'/**/*.md', ['convert:md2pdf']);
});

//


gulp.task('clean:pdf',function () {
	return clean(path.pdf);
});

// print.css
gulp.task('convert:scss:pdf', function () {
    return gulp.src(path.source.style + '/pdf.scss')
        .pipe(sass())
        .pipe(base64())         // 이미지를 인라인화 하자
        .pipe(gulp.dest(path.devserver))
        .pipe(livereload());
});

// make pdf
gulp.task('convert:md2pdf', function() {
    return gulp.src(path.source.root + '/' + source_path + '/' + lang_path + '/*.md')
    // 테이블 처리
        .pipe(pandoc({
            from:'markdown+hard_line_breaks+grid_tables+link_attributes',           // 개행에서 실수할수도 있으니 CR마다 강제 개행을 처리한다.
            to : 'html5',
            ext : '.html',
            args : ['--standalone','--toc','--template=./source/_resource/template/master_pdf.html','--toc-depth=1']
        }))
        // pdf에서는 절대경로만 사용한다.
        .pipe(replace(/<img src="(.+?)".+?>/gi,function (matchString,p1) {

            var is2x = Boolean(p1.match(/@2x/gi));
            var lang = (function (string) {
                // 여기에서 string은 gulp-vinyl에서 얻어온 이름입니다. 대개 태스크에서 prototype.src로 넘어오는 경로입죠.
                // 항상 다국어 폴더를 끼고 오도록 되어있으니 다국어 폴더 자체를 반환한다. cross os전략.
                if (/(ko|en|zh)/gi.test(string)) {
                    return string.replace(/[\w]+.(html|md)/gi,'');
                }
            })(this.file.relative);


            var _path = p1.replace('./',this.file.base+lang);
            var _width = !!is2x ? Math.round(imageSize(_path).width/5) : Math.round(imageSize(_path).width/2.5); 
            var _height = !!is2x ? Math.round(imageSize(_path).height/5) : Math.round(imageSize(_path).height/2.5);

            var alt = matchString.match(/alt=["'].+?["']/gi);

            // console.log(_path,is2x);
            // 이제 이미지의 넓이와 크기를 구해올 시간입니다.
            return '<img src="file://' + _path + '" style="width:' + _width + 'px; height:' + _height + 'px;" />';
        })) 
        .pipe(styleInject())    //스타일을 별개로 빼내기 어려우므로...
        .pipe(makePdf(pdfConfig))
        .pipe(gulp.dest(path.pdf));
});



gulp.task('help', function() {
    var comment;
    comment=`

opsnow 서비스의 도움말을 자동으로 빌드하는 flow입니다.
아래와 같은 명령어를 가집니다.

$ gulp [task] --arg

예시)
$ gulp local  --alertnow

task의 종류
    local:자신의 PC에서 처리된 사용자 도움말을 확인할때 사용합니다.
    deploy:서비스하고 있는 서버에 반영할 파일을 얻습니다.
    pdf(예정): pdf로 아웃풋을 내보낼 수 있습니다.(기능 준비중)

arg의 종류
    자신의 컴퓨터에서 확인하거나 혹은 배포용 파일들을 얻기 위한 서비스명을 적어주시면 됩니다.
    현재 가능한 서비스 목록은 아래와 같습니다.

    --aleetnow

사용예)
$ gulp local --alertnow    // 로컬에서 alertnow의 사용자 도움말을 확인합니다. http://localhost:7080에서 기동됩니다.
$ gulp deploy --alertnow   // 개발/검증/운영서버에 반영될 alertnow 도움말 파일 산출물을 얻을 수 있습니다.


보다 자세한 설명은 아래 주소의 문서를 읽어주세요.
http://61.100.13.19:7990/projects/UX/repos/bsp-user-manual/browse

    `
    return console.log(comment);
});

gulp.task('default', ['help']);



// pdf output만들 때 필요한 내용

var pdfConfig = {
    // Export options
    directory: path.devserver,       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'

    // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
    format: 'A4',        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    orientation: 'portrait', // portrait or landscape

    // Page options
    border: {
        top: '8mm',            // default is 0, units: mm, cm, in, px
        right: '12mm',
        bottom: '8mm',
        left: '12mm'
    },

    paginationOffset: 1,       // Override the initial pagination number
    header: {
        height: '10mm',
        contents: `
            <header>USER GUIDE</header>
        `
    },
    footer: {
        height: '10mm',
        contents: {
            first: '   ',
            default: `
                <footer class="layout-footer">{{page}}/{{pages}}</footer>
            `, // fallback value
        }
    },


    // Rendering options
    // "base": 'file:///Users/mycoolade/workspace/bsp-user-manual/'+path.devserver, // Base path that's used to load files (images, css, js) when they aren't referenced using a host

    // Zooming option, can be used to scale images if `options.type` is not pdf
    zoomFactor: '1', // default is 1

    // File options
    type: 'pdf',             // allowed file types: png, jpeg, pdf
    quality: '90'           // only used for types png & jpeg

    // Script options
}
