# OpsNow manual build system  

서비스 도움말 문서를 누구나 작성해서 형상관리와 배포관리까지 할 수 있는 flow입니다. 

markdown으로 작성해서 html(online 배포용)과 pdf(오프라인 배포용, 멀지 않은 기한 내 추가될 예정) 두가지로 배포할 수 있는 task runner 집합입니다.



--------------------------------------------------------------------------------


## for common



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
.
└── 서비스명(예: alertnow)
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



--------------------------------------------------------------------------------



## for UI/task developer

UI/Task 개발자를 위한 설명입니다.



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



## for writer

테크니컬 라이터 / service maintain 개발자가 마크다운 파일에서 신규 파일 생성이나 실제 컨텐트를 작성할때 아셔야 할 내용을 설명합니다.

### 파일 네이밍

마크다운 파일의 네이밍은 아래 규칙을 따릅니다.

> user_guide\_서비스명\_언어.md

예시로 보시면 

> user_guide_alertnow_ko.md
> user_guide_alertnow_en.md
> user_guide_alertnow_zh.md

**반드시 지켜주셔야 합니다**. 이름 기반으로 다국어 링크등이 추가되거나, 파일의 존재 유무를 파악합니다. 




### 이미지 네이밍

특별하게 지켜야 할 규칙은 없습니다.
지정된 경로 `/언어/resource`에 이미지를 넣어주시고 마크다운 파일에서 위치를 지정해주시면 됩니다.


### 마크다운 문법

세상에는 많고 많은 마크다운 format이 존재하지만 그중에 **pandoc markdown**을 채택했습니다.
유연하게 테이블을 지원하고 있고, html/LaTex/ePub/pdf등 다양한 포맷을 지원합니다.

기본 마크다운 문법은 여기에서 설명하지 않습니다. 기본 마크다운 문법 중 궁금하신 점은 다음의 링크를 참조해주세요 :) 
[기본 마크다운 문법](https://daringfireball.net/projects/markdown/)

기본 마크다운 외, 도움말 빌드시스템에서 반드시 알아야 할 점에 대해서 설명합니다.

#### 머리말
각 설명의 중간 제목이 되는 부분입니다. `#`을 이용해서 제목을 구분합니다.
제목은 총 6단계로 구성됩니다.

``` markdown
#
##
###
####
#####
######
```

각 제목은 html h1~h6의 heading 엘리먼트로 변환되며 왼쪽의 local navigation bar에 있는 메뉴 링크로 생성해 줍니다. 

제목 작성시 아래 문법 규칙을 준수해 주세요.

``` markdown
### 인시던트 {#incident}
 1     2        3

1:(제목의 단계)
2:(변환 후 보여질 제목)
3:(링크가 될 문장)
```

**3의 링크가 될 문장은 반드시 영문/국문/중문 동일하게 작성해주셔야 합니다**.
언어셋이 변경되도 같은 링크로 태울 수 있게 하기 위함입니다.

예시를 들면 이렇습니다.

``` markdown
### 개요 {#summary}
### summary {#summary}
```


#### 테이블


기본이 되는 테이블 문법은 아래와 같습니다.

각 행의 구분을 `-`로 하며, 열간의 구문은 `+`와 `|`로 표시합니다.
테이블 셀의 제목이 있는 경우, 제목 아래 구분선에 `=`로 표시합니다.

``` markdown
에) 열의 제목이 없는 테이블 문법
+---------+---------------------------------------------------+
| 내용 11 | 내용 12
+---------+---------------------------------------------------+
| 내용 21 | 내용 22
+---------+---------------------------------------------------+
| 내용 31 | 내용 32
+---------+---------------------------------------------------+

에) 열의 제목이 있는 테이블 문법
+---------+---------------------------------------------------+
| 제목 1  | 제목 2
+=========+===================================================+
| 내용 1  | 내용 2
+---------+---------------------------------------------------+

예) 열의 제목이 있는 테이블 문법
+---------+---------------------------------------------------+
| Preset  | 기간
+=========+===================================================+
| 전체    | 인시던트가 발생한 전체 기간을 검색합니다.
+---------+---------------------------------------------------+
| 오늘    | 현재 날짜를 선택한다.
+---------+---------------------------------------------------+
| 어제    | 어제의 날짜를 선택한다.
+---------+---------------------------------------------------+
```

테이블 안에 목록형 문법을 추가할 수 있습니다.

``` markdown
+-------------------+---------------------------------------------------------------+-----------------------------+
| 항목              |  설명                                                         | 비고
+===================+===============================================================+=============================+
| 서비스            |  -    신규 서비스 생성                                        | 필수 선택 사항  
|                   |       인티그레이션 생성 시, 서비스도 동시에 생성을 합니다.    | 중복 선택 불가
|                   |  -    서비스 선택                                             |
|                   |       인티그레이션 생성 시, 기존에 있는 서비스를 매핑 합니다. |
+-------------------+---------------------------------------------------------------+-----------------------------+
```

테이블 안에 html을 추가할 수 있습니다.

``` md
+---------------------------+--------------------------------------------------------------------------+
| Case                    	|  설명
+===========================+==========================================================================+
| Use Case 1)               |  서비스 메뉴에서 오른쪽 상위에 있는 “서비스 생성” 버튼을 클릭 합니다.
| “서비스” 메뉴에서 생성    |  <button class="demo black">서비스 생성</button>
|                           |  서비스를 생성 합니다.
|                           |  이 경우, 서비스 이름과 에스컬레이션 규칙 설정으로 생성 할 수 있습니다.
+---------------------------+--------------------------------------------------------------------------+
```


##### 테이블 작성 시 주의사항

**셀 병합을 지원하지 않습니다**.
셀 병합이 있는 경우 반드시 컨텐트 구성에서 케이스 따라 재량껏 풀어서 써주셔야 됩니다.

행간 구분선에 따라 테이블 셀간 넓이가 결정됩니다.

``` markdown
예) 왼쪽 셀보다 오른쪽 셀이 더 넓은 테이블이 그려집니다.

>> 마크다운 테이블 문법
+--------------------+-----------------------------------------+
|                    |  
+====================+=========================================+
|                    |  
|                    |  
|                    |  
|                    |  
+--------------------+-----------------------------------------+

>>변환 결과
...
\<col width="35%" /\>
\<col width="65%" /\>
...



예) 오른쪽 셀보다 왼쪽 셀이 더 넓은 테이블이 그려집니다.
>>마크다운 테이블 문법
+--------------------------------------+----------------------+
|                        	           |
+======================================+======================+
|                                      |
|                                      |
|                                      |
|                                      |
+--------------------------------------+----------------------+

>> 변환결과
...
\<col width="65%" /\>
\<col width="35%" /\>
...

```
예시로는 두가지 열만 보여드렸지만 다중열 테이블의 경우도 마찬가지로 눈에 보이는 셀의 넓이가 거의 그대로 반영됩니다.





#### 이미지 넣기

아래 두가지 방법 어느것을 사용하셔도 무방합니다.

``` markdown
이미지 위치를 잡고 설명을 추가하는 방법

![이미지 설명][이미지 링크]
...(중략)...
[이미지 링크]: ./resource/이미지 주소.확장자

// 예시)
![인티그레이션 설명][integration_01]
...(중략)...
[integration_01]: ./resource/bnr_service_case2_01_ko.png


-----------------------------------------------------

이미지 위치와 설명을 같이 쓰는 방법
![이미지 설명](이미지 위치)

// 예시)
![인티그레이션 설명](./resource/bnr_service_case2_01_ko.png)

```

**opsnow의 이미지 포맷은 고밀도 디스플레이(레티나, 맥북프로등...)를 지원해야 합니다**.
따라서 스크린샷 촬영시 가급적 고밀도 디스플레이에서 촬영해 주시고.
일반 모니터(72ppi)로 촬영하셨을 경우 이미지에 `{sizez=normal}`이란 flag를 다음과 같이 붙여주세요.

``` markdown
![이미지 설명][이미지 링크]
[이미지 링크]: ./resource/이미지 주소.확장자 {sizes=normal}

![이미지 설명](이미지 위치) {sizes=normal}

// 예시)
![인티그레이션 설명][integration_01]
[integration_01]: ./resource/bnr_service_case2_01_ko.png {sizes=normal}

![인티그레이션 설명](./resource/bnr_service_case2_01_ko.png) {sizes=normal}

```

마크다운 파일을 html로 변환할때 이미지를 50% 크기로 불러오게 하는 장치가 되어있는데, `{sizes=normal}`이란 플래그를 발견하면 이미지 크기를 원래 크기대로 보여주게 html 코드가 설정됩니다.


더 자세한 설명을 원하시면 [pandoc markdown의 이미지 항목 설명][pandoc#image]을 보아주세요.










### 에디터

실시간으로 pandoc-markdown을 파싱할 수 있는 편집기면 아무거나 사용하셔도 됩니다. [이 링크](https://github.com/jgm/pandoc/wiki/Pandoc-Extras#editors)에 자세한 설명이 있습니다.

-   [Markdown monster](https://markdownmonster.west-wind.com/) (windows)
-   [ghost writer](https://wereturtle.github.io/ghostwriter/) (windows & linux)
-   [marked 2](http://marked2app.com/) (mac, 유료)

다른 방법으로 로컬에서도 웹서버를 설정해 확인할 수도 있습니다.

1.  [node.js](https://nodejs.org/ko/)를 설치합니다.
2.  설치 후 cmd 콘솔을 엽니다.
3.  gulp를 전역으로 설치합니다.
    ` npm install gulp -g `
4.  다운로드 받은 저장소에서 설치 명령어를 입력합니다.
    ` npm install --save `
5.  설치 명령어를 입력한 뒤 설치가 완료되면 로컬 서버를 구동하는 명령어를 입력합니다.
    ` gulp local --서비스명 `
    alertnow에 대한 매뉴얼 작업을 하신다면 
    ` gulp local --alertnow ` 를 입력해주세요.

    만일 로컬서버 구동이 정상적으로 되지 않는다면 모든 모듈을 수동으로 설치하는 아래 명령어를 입력합니다.
    `npm install --save gulp gulp-rename gulp-replace image-size gulp-remove-html-comments gulp-pandoc gulp-sass gulp-autoprefixer gulp-connect gulp-livereload del run-sequence gulp-base64 gulp-sourcemaps yargs gulp-imagemin vinyl gulp-callback `

    그래도 구동이 안된다면 UX lab의 UI개발자에게 제보 부탁드립니다.




### 환경 설정 구문

각 도움말 markdown 파일 상단에는 설정에 관련된 값이 적혀 있습니다.

기본 포맷 예시

``` yaml
---
service : alertnow
title   : AlertNow
ko : true
multiLang: 
    - ko : false
    - en : true 
    - zh : false
...
```

-   service : 
    서비스명을 적어줍니다. 파일명 등에 쓰입니다. 전부 소문자로 작성합니다.

-   title   : 
    페이지 제목을 적어줍니다. h1 등의 타이틀 엘리먼트에 사용됩니다.

-   en/ko/zh : true
    작성하는 문서가 영문/한글/중문에 따라서 기술합니다.
    **문법 규칙상 *true* 만 존재합니다.**
    `예) ko : true`

-   multiLang:
    다국어 문서의 링크 생성을 위해 기술합니다.
    기본적으로 ko/en/zh의 세가지 유형을 가집니다.

    **현재 기술하고 있는 문서에 대한 언어는 반드시 반대로 설정하시거나 삭제하셔야 합니다**.

    예) 

    ``` yaml 
    en : true

    ...

    multiLang:
        - en : false
    ```

[pandoc#image]: https://pandoc.org/MANUAL.html#images
[pandoc_link]: https://pandoc.org/MANUAL.html


--------------------------------------------------------------------------------


## for CI/CD

자동배포를 하시려면 아래 설정을 참조하셔서 jenkins 내의 console command를 완성하세요.  

1.  배포서버에 node/npm/gulp가 설치되어 있는지 확인  
    배포서버에 원격 접속(ssh)하신 뒤 아래의 명령어를 각각 실행해서 node/npm/gulp가 설치되어 있는지 확인하세요.

    ``` bash
    node -v
    npm -v
    npm list gulp -g --depth=0          << 3.9.1이 출력되면 설치된 것입니다.
    ```

    위 모듈들이 설치가 되어있지 않으면 설치 후 다음 진행을 합니다.

2.  확인이 되었으면 cli 콘솔에 다음과 같은 명령어를 입력합니다.
    ` gulp deploy --서비스명 `

    alertnow를 예로 든다면 
    ` gulp deploy --alertnow`

    이렇게 작성해주시면 됩니다.

만일 정상동작하지 않을 경우 ux Lab의 UI개발자들에게 문의해 주세요 :)

이 이후 서비스명 아래 디렉토리를 서비스 도움말 문서의 root directory로 복사하는 shell script를 작성해주세요.




--------------------------------------------------------------------------------


## for server URL rule

도움말 디렉토리는 ng-routing 규칙에서 벗어나게 되므로, nginx rewrite rule의 설정이 필요합니다.  
다음은 각 서비스별 도움말 문서 root directory입니다.

서비스명 : 디렉토리명

alertnow : **/doc/** 
