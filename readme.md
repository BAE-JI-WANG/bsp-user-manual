# OpsNow manual system

서비스 도움말 문서를 누구나 작성해서 형상관리와 배포관리까지 할 수 있는 flow입니다. 

markdown으로 작성해서 html(online 배포용)과 pdf() 두가지로 배포할 수 있는 task runner 집합입니다.



--------------------------------------------------------------------------------


## for common

## for Developer

UI / Task 개발자를 위한 설명입니다.

### scaffolding

디렉토리의 구조는 다음과 같습니다. 디렉토리에 설명 추가합니다.

`bsp-user-manual/source/`

```
.
├── _resource           // 공통 리소스 파일
│   ├── image           // 공통으로 사용하는 이미지 있음.(brand CI 등)
│   ├── js              // 공통 js 파일
│   ├── style           // 스타일링을 위한 sass 파일
│   └── template        // pandoc markdown에서 markdown 문서를 html로 변환할때 참조하는 탬플릿 파일이 위치합니다.
└── alertnow            // 서비스의 실제 document가 있습니다.
    ├── en              // 영문 markdown 문서
    │   └── resource    // 영문 도움말의 스크린샷이 위치합니다.
    ├── ko              // 국문 markdown 문서
    │   └── resource    // 국문 도움말의 스크린샷이 위치합니다.
    └── zh              // 중문 markdown 문서
    │   └── resource    // 중문 도움말의 스크린샷이 위치합니다.
```





## 작성자를 위해

테크니컬 라이터 / service maintain 개발자가 마크다운 파일에서 신규 파일 생성이나 실제 컨텐트를 작성할때 아셔야 할 내용을 설명합니다.

### 파일 네이밍

마크다운 파일의 네이밍은 아래 규칙을 따릅니다.

> user_guide\_서비스명\_언어.md

> 예)
> user_guide_alertnow_ko.md
> user_guide_alertnow_en.md
> user_guide_alertnow_zh.md

**반드시 지켜주셔야 합니다**. 이름 기반으로 다국어 링크등이 추가되거나, 존재 유뮤를 파악합니다.

### 이미지 네이밍 & 스크린샷
특별하게 지켜야 할 규칙은 없습니다.
지정된 경로 `/언어/resource`에 이미지를 넣고 아래 예시처럼 이미지를 추가해주시면 됩니다.

아래 두가지 방법 어느것을 사용하셔도 무방합니다.


더 궁금하신 점이 있다면 [pandoc markdown의 이미지 항목 설명][pandoc#image]을 보아주세요




[pandoc#image]: https://pandoc.org/MANUAL.html#images


### mar
세상에는 많고 많은 마크다운 format이 존재하지만 그중에 **pandoc markdown**을 채택했습니다.


[pandoc markdown][pandoc_link] 사용.

table option이 확장이라서 어쩔수가 없었어요! 이게 그나마 멀티라인 테이블을 지원해 주더라구요??

사용중인 옵션


### heading




## 에디터
실시간으로 마크다운을 보여줄 수 있는 편집기면 아무거나 환영합니다.
물론 로컬에서도 개발할 수 있게 웹서버를 띄워서 개발할 수도 있습니다.

!!!! 음..뭔가 pandoc markdown을 편하게 사용할 수 있는 편집기 같은게 있었으면 좋겠네 그려

없다고 해도 괜찮습니다. 로컬에서 UI개발환경을 갖추면 실시간 바로보기가 되거든요.


## 스크린샷 이미지
레티나 대응을 위해서 고밀도 디스플레이에서 스크린샷을 촬영해서 붙여주시면 됩니다.
각 언어에 맞는 스크린샷을 만들어서 각 언어 폴더셋에 넣어주세요.




## 마크다운 파일의 상단에 있는  설정 구문
 YAML template for 도움말

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

    참고사항으로 현재 기술하고 있는 문서는 반드시 반대로 설정하시거나 삭제하셔야 합니다.

    예) 
    ```
    en : true

    ...

    multiLang:
        - en : false
    ```


기본 포맷 예시



```
---
service : alertnow
title   : AlertNow
en : true
multiLang: 
    - ko : true
    - en : false
    - zh : false
...
```







--------------------------------------------------------------------------------


[pandoc_link]: https://pandoc.org/MANUAL.html





























Service channel Manual Build system
각 서비스 채널의 매뉴얼을 개발할 수 있는 저장소입니다. 현재는 ITS/opsnow만 정형화되어 있습니다.

개발의 경우는 ./source/* 의 담당 서비스에서 하시면 되고, 빌드의 경우는 ./build/* 폴더에 빌드 결과물이 쌓입니다.

가이드의 위치에 그대로 복사해서 serving 할 수 있게 구성하였습니다.

설치
아래의 명령어를 따라주세요.

console에서 명령어 npm install --save 입력 후 엔터
console에서 명령어 npm install browser-sync -g 입력 후 엔터
사용법
console에 gulp를 입력합니다.

? BSP 매뉴얼 빌더 :: 서비스를 고르세요 (Use arrow keys)
❯ ITS
  OpsNow
이렇게 보이구요. 자신의 서비스에서 enter키를 클릭합니다.

저는 opsnow를 선택하겠습니다.

선택 후 다음과 같이 진행됩니다.

? 매뉴얼 개발하실건가요? build해서 배포하실건가요? (Use arrow keys)
❯ 개발
  build
매뉴얼 수정이나 추가를 원하시면 개발을 선택해 주시고, 다 만든것을 배포하려 하시면 Build를 골라주세요.

scaffolding
다음과 같은 형태로 네이밍을 진행합니다.

서비스도메인(가변) / 루트폴더(고정) / 언어(가변) / 파일명.확장자(고정)
service.bespinglobal.com / doc / en / user_guide.html













