<!-- TOC -->

# OpsNow manual build system  

서비스 도움말 문서를 누구나 작성해서 형상관리와 배포관리까지 할 수 있는 flow입니다.   
markdown으로 작성해서 온라인 웹서비스와 pdf버전 두가지로 배포할 수 있는 task runner입니다.


## 환경

**node.js**, **Gulp.js**, **pandoc**을 준비합니다.

1.  [node.js](https://nodejs.org/ko/)를 설치합니다.

2.  gulp를 전역으로 설치합니다.  
    ` npm install gulp -g `

3.  [pandoc을 설치합니다](https://pandoc.org/installing.html).   
    homebrew와 같은 패키지 매니저가 있다면 손쉽게 설치하실 수 있습니다.

4.  다운로드 받은 저장소에서 설치 명령어를 입력합니다.	
    ` npm install --save `

5.  설치 명령어를 입력한 뒤 설치가 완료되면 로컬 서버를 구동하는 명령어를 입력합니다.  
    ` gulp local --서비스명 `

    예를 들어서 alertnow에 대한 매뉴얼 작업을 하신다면 아래와 같이 입력해주세요.
    ` gulp local --alertnow ` 

    만일 로컬서버 구동이 정상적으로 되지 않는다면 모든 모듈을 수동으로 설치하는 아래 명령어를 입력합니다.	

    ```
    npm install --save gulp gulp-rename gulp-replace image-size gulp-remove-html-comments gulp-pandoc gulp-sass gulp-autoprefixer gulp-connect gulp-livereload del run-sequence gulp-base64 gulp-sourcemaps yargs gulp-imagemin vinyl gulp-callback 
    ```

여기까지 무리없이 진행하셨다면 아래 필요한 부분의 설명을 찾아서 읽으시면 됩니다.

-   [환경](./_readme/env.md)
-   [도움말 작성자를 위한 설명](./_readme/for_writer.md)
-   [배포와 서버 환경설정](./_readme/for_ci.md)
-   [자동 빌드 시스템 유지보수/확장](./_readme/for_maintanance.md)




## 실행명령

-   자신의 pc에서 만들어진걸 확인하고 싶을때
    ```
    gulp local --asset
         ^^^^^
    ```
-   배포용 버전을 만들 때
    ```
    gulp deploy- --metering
         ^^^^^^
    ```

-   pdf를 생성할때
    ```
    gulp pdf --alertnow --ko
         ^^^              ^^
                          1
    1. 언어. pdf 생성은 언어 단위별로 생성되니 반드시 언어 옵션을 붙여주세요 

    ** pdf는 예외적으로 모든 문서 생성이 가능합니다. 서비스명 위치에 --all option을 부여해주세요.
    ```
