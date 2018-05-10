<!-- TOC -->
# OpsNow manual build system  

서비스 도움말 문서를 누구나 작성해서 형상관리와 배포관리까지 할 수 있는 flow입니다. 
markdown으로 작성해서 html(online 배포용)과 pdf(오프라인 배포용, 멀지 않은 기한 내 추가될 예정) 두가지로 배포할 수 있는 task runner 집합입니다.

--------------------------------------------------------------------------------


## 환경설정

### 구동을 위한 준비

node.js, Gulp.js, pandoc을 준비합니다.

1.  [node.js](https://nodejs.org/ko/)를 설치합니다.
2.  설치 후 cmd 콘솔을 엽니다.
3.  gulp를 전역으로 설치합니다.
    ` npm install gulp -g `
4.  [pandoc을 설치합니다](https://pandoc.org/installing.html). homebrew와 같은 패키지 매니저가 있다면 손쉽게 설치하실 수 있습니다.

### 로컬 환경 꾸리기
4.  다운로드 받은 저장소에서 설치 명령어를 입력합니다.
    ` npm install --save `
5.  설치 명령어를 입력한 뒤 설치가 완료되면 로컬 서버를 구동하는 명령어를 입력합니다.
    ` gulp local --서비스명 `
    alertnow에 대한 매뉴얼 작업을 하신다면 
    ` gulp local --alertnow ` 를 입력해주세요.

    만일 로컬서버 구동이 정상적으로 되지 않는다면 모든 모듈을 수동으로 설치하는 아래 명령어를 입력합니다.
    `npm install --save gulp gulp-rename gulp-replace image-size gulp-remove-html-comments gulp-pandoc gulp-sass gulp-autoprefixer gulp-connect gulp-livereload del run-sequence gulp-base64 gulp-sourcemaps yargs gulp-imagemin vinyl gulp-callback `

    그래도 구동이 안된다면 UX lab의 UI개발자에게 제보 부탁드립니다.


## 구조

### scaffolding

디렉토리의 구조는 다음과 같습니다.

`bsp-user-manual`

```
/source
├── _resource           // 공통 리소스 파일
│   ├── image           // 공통으로 사용하는 이미지 있음.(brand CI 등)
│   ├── js              // 공통 js 파일
│   ├── style           // 스타일링을 위한 sass 파일
│   └── template        // pandoc markdown에서 markdown 문서를 html로 변환할때 참조하는 탬플릿 파일이 위치합니다.
└── 서비스명(예:alertnow)  // 서비스의 실제 document가 있습니다.
    ├── en              // 영문 markdown 문서
    │   └── resource    // 영문 도움말의 스크린샷이 위치합니다.
    ├── ko              // 국문 markdown 문서
    │   └── resource    // 국문 도움말의 스크린샷이 위치합니다.
    └── zh              // 중문 markdown 문서
        └── resource    // 중문 도움말의 스크린샷이 위치합니다.
```

```
/deploy
 └─ 서비스명(예: alertnow)
    ├── resource        // 공통 리소스 파일
    ├── en              // 영문 도움말
    │   └── resource    // 영문 도움말에 들어가는 이미지
    ├── ko              // 한글 도움말
    │   └── resource    // 한글 도움말에 들어가는 이미지
    └── zh              // 중문 도움말
        └── resource    // 중문 도움말에 들어가느 이미지
```
이 구조에 따라서 추가 서비스/추가 매뉴얼을 구성해 주시면 됩니다. 

로컬 개발시엔 `./devserver` 에 결과물이 쌓이고, 서비스 배포용 파일들은 `./deploy` 에 결과물이 쌓입니다. 




### build operating :: gulp + sass + jquery

Gulp.js라는 태스크 러너를 사용합니다. (ver :: 3.9.1)  

개별 플러그인에 대한 설명은 각 플러그인의 github 저장소를 참조하세요. 

Pandoc markdown + sass + jquery를 이용해 서비스에 배포되는 아웃풋을 만듭니다. 
멀지 않은 시간 내 pdf로 출력할 수 있는 기능을 만들 예정입니다. 

태스크 추가 시 Markdown \> html로 변환하는 과정이나, 트랜스파일 전 종착지(dist)를 깔끔하게 하는 등 반드시 동기화로 태스크가 진행되는 경우가 있으므로 이를 주의해 태스크 순서와 동작을 지정해 주시면 됩니다. 

스타일은 sass로 구성되어 있습니다. 각 섹션별로 파일이 쪼개져 있고, `manual.css`로 최종 빌드됩니다. 

`/source/_resource/template` 중 Html탬플릿은 pandoc markdown에서 참조하여 마크다운을 html 파일로 변환하는데 사용됩니다. 

태스크의 흐름은 아래와 같습니다.

-   local : 임시 디렉토리 삭제 > 이미지 복사 > sass to css convert > markdown convert > js 파일 복사 > 로컬 서버 기동
-   deploy : 임시 디렉토리 삭제(로컬,배포) > 이미지 최소화 후 복사 > sass to css convert > markdown convert > js 파일 복사

버그가 있다면 수정 후 push를 올려주세요 ^^;;

--------------------------------------------------------------------------------


## [배포 자동화](./_readme/for_ci.md)
## [proxy server 설정](./_readme/for_service_link.md)
## [markdown 문서 작성](./_readme/for_writer.md)

--------------------------------------------------------------------------------


<!--

여기부터는 latex으로 매뉴얼 빌드를 할 때 작성합니다.

## 매뉴얼을 pdf로 만들기

mac os 기준으로 설명합니다.
다른 플랫폼에서는 맞지 않을 수 있습니다.


brew 패키지매니저를 이용하거나 아니면 [한국 tex 사용자모임의 mac 사용자 xelatex 설치 안내 방법에 따라 설치]합니다.

mactex를 설치합니다.  
용량도 크고 속도도 느립니다. 한참 걸려요

```
brew install mactex
```
터미널을 껐다가 다시 켭니다.

아래 명령어를 입력해서 저장소를 추가합시다.

```
sudo tlmgr repository add http://ftp.ktug.org/KTUG/texlive/tlnet ktug
```

저장소의 정보는 여기를 참조합시다.
http://wiki.ktug.org/wiki/wiki.php/KtugPrivateRepository

sudo tlmgr pinning add ktug "*"
sudo tlmgr install nanumttf hcr-lvt
sudo tlmgr update --all --self
```

여기서 마지막 구문 업데이트를 걸면 하세월입니다.
정말 시간날때 하세요 :(

만일 `/usr/local/texlive/2017/tlpkg/` 이 퍼미션이 없다고 하면 다음 구문을 넣고 퍼미션을 추가해줍시다.

```
chmod 777 /usr/local/texlive/2017/tlpkg/
```





pdf-engine을 xelatex 로 하는 경우

```
pandoc user_guide_alertnow_ko.md -s -o user_guide_alertnow_ko.pdf --pdf-engine=xelatex --variable mainfont='Nanum Myeongjo'
```

폰트 설정을 해주지 않으면 한글이 제대로 보이지 않습니다.
우리는 noto-sans로 쓰고 있으니까 noto-sans를 쓰자.

스타일을 설정해 줘야되고
noto

이렇게 설정하면 될지도 모르겠다.
```
pandoc user_guide_alertnow_ko.md  -o ~/desktop/test.pdf  --pdf-engine=wkhtmltopdf
```
-->
