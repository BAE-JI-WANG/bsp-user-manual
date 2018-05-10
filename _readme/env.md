<!-- TOC -->

# OpsNow manual build system  

## 구조

도움말 빌드 시스템의 구조에 대해 설명합니다.


### task flow
흐름은 아래와 같습니다.

-   local : 임시 디렉토리 삭제 > 이미지 복사 > sass to css convert > markdown convert > js 파일 복사 > 로컬 서버 기동
-   deploy : 임시 디렉토리 삭제(로컬,배포) > 이미지 최소화 후 복사 > sass to css convert > markdown convert > js 파일 복사





### 파일 이름 지정

문서의 파일명은 아래 규칙을 따릅니다.

> user-guide-서비스명-언어.md  


예시로 보시면 

> user-guide-alertnow-ko.md

> user-guide-alertnow-en.md

> user-guide-alertnow-zh.md  

**반드시 지켜주셔야 합니다**.   
이름 기반으로 다국어 링크등이 추가되거나, 파일의 존재 유무를 파악합니다. 




### 스캐폴딩

디렉토리의 구조는 다음과 같습니다.

`bsp-user-manual`

```
/source
├── _resource           // 공통 리소스 파일
│   ├── image           // 공통이미지 있음.(brand CI 등)
│   ├── js              // 공통 js 
│   ├── style           // 스타일링 sass 파일
│   └── template        // pandoc markdown에서 markdown 문서를 html/pdf로 변환할때 참조하는 탬플릿 파일이 위치합니다.
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

로컬 개발시엔 `./.devserver` 에 결과물이 쌓이고 이를 기준으로 서버가 기동됩니다.   
서비스 배포용 파일들은 `./deploy` 에 결과물이 쌓입니다. jenkins등에서 활용할 수 있습니다.  
