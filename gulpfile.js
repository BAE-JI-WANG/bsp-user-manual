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

    imagemin          = require('gulp-imagemin'),
    vinyl             = require('vinyl'),                      // 디버그 용도
    pipecallback      = require('gulp-callback')               // 디버그 용도
;

// 경로 설정
var path = {
    source : {
        root : './source',
        style : './source/_resource/style',
        js : './source/_resource/js',
        template : './source/_resource/template'
    },
    devserver : './.devserver',
    deploy : './deploy'

    //  디렉토리 예약어
    // .devserver
    // deploy
    // pdf
};

// 서비스명에 따라서 종착 디렉토리를 지정해줌
var source_path,dist_path;

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
    gulp.watch(path.source.root+'/**/*.png', ['copy:image'],callback);
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

var a = [];

//markdown 파일 변환, 이미지 정보를 가공하는 곳이 있으므로 반드시 이미지 복사가 끝난 후에 처리가 되어야 한다.
gulp.task('convert:md2html',function () {
    // html 변환할때 이미지 파일의 정보를 얻어온다.
    return gulp.src(path.source.root + '/' + source_path + '/**/*.md')
        // markdown > html
        .pipe(pandoc({
            from:'markdown+hard_line_breaks+grid_tables-pipe_tables-simple_tables-multiline_tables+link_attributes',           // 개행에서 실수할수도 있으니 CR마다 강제 개행을 처리한다.
            to : 'html5',
            ext : '.html',
            args : ['--standalone','--toc','--template=./source/_resource/template/master.html','--toc-depth=6','--tab-stop=4']
        }))
        // 이미지에 레티나 대응하는 프로퍼티를 덧씌운다.
        // width만 설정한다. 세로를 기준으로 설정하게 되면 ratio가 달라지는 그림들이 생길 수 있음.
        .pipe(replace(/<img.+?>/gi,function (matchString) {

            var image = {
                origin : matchString,
                location : this.file.path.replace(/[\w-_]+(?=\.).html/i,'') + matchString.match(/[\w-_\/\.]+\.(png|gif|jpg)/gi)[0],
                relativePath : matchString.match(/[\w-_\/\.]+\.(png|gif|jpg)/gi)[0],
                file : matchString.match(/\w+\.(png|gif|jpg)/gi)[0],
                alt : matchString.match(/alt="(.+?)"/gi),
                sizes : !!matchString.match(/sizes="normal"/gi)
            };


            image.width = (function (text) {
                // 노멀한 크기라면 sizes="normal" 이면 width 뱉어야되고
                // 그것도 아니라면 레티나 대응해야되고
                return !!image.sizes ? imageSize(image.location).width : Math.round(imageSize(image.location).width / 2)
            })(matchString);

            // 혹시 width prop가 있다면 그걸 가지고 온다.
            return '<img src="'  + image.relativePath + '"' + ' '
                    + ('width="' + image.width + '"') + ' '
                    + (image.alt || '')     // alt prop가 있다면 같이 넣어준다.
                    + ' />';
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

//make pdf
gulp.task('convert:md2pdf', function (){
    // return gulp.src(path.source.root + '/' + source_path + '/**/*.md')
    return gulp.src('./source/alertnow/ko/user_guide_alertnow_ko.md')
        .pipe(pandoc({
            from:'markdown',           // 개행에서 실수할수도 있으니 CR마다 강제 개행을 처리한다.
            to : 'pdf',
            ext : '.pdf',
        }))
        .pipe(gulp.dest('./pdf'));
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
