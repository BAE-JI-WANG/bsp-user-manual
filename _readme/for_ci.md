<!-- TOC -->

# OpsNow manual build system  

## 배포와 웹서버 설정 

### node/npm/gulp가 설치 확인  

배포서버에 원격 접속(ssh)하신 뒤 아래의 명령어를 각각 실행해서 node/npm/gulp가 설치되어 있는지 확인하세요.

``` bash
node -v
npm -v
npm list gulp -g --depth=0          << 3.9.1이 출력되면 설치된 것입니다.
```

위 모듈들이 설치가 되어있지 않으면 설치 후 다음 진행을 합니다.





### 명령어 입력

확인이 되었으면 cli 콘솔에 다음과 같은 명령어를 입력합니다.

` gulp deploy --서비스명 `

alertnow를 예로 든다면 

` gulp deploy --alertnow`

이렇게 작성해주시면 됩니다.

이 이후 서비스명 아래 디렉토리를 서비스 도움말 문서의 root directory로 복사하는 shell script를 작성해주세요.

### pandoc의 설정





### 프로젝트에 따라  URL rule 수정

도움말 디렉토리는 ng-routing 규칙에서 벗어나게 되므로, nginx rewrite rule의 설정이 필요합니다.  
빌드 시스템에서 만들어진 도움말 디렉토리는 ng-routing 규칙에서 벗어나게 되므로, proxy server인 nginx rewrite rule의 설정이 필요합니다.  

각 서비스의 환경에 맞게 설정해주세요.


### 하나의 프로젝트에 여러개의 도움말을 배포할 경우

현재 *빌드 스크립트* `gulp deploy`는 다음과 같이 실행되도록 구성되어 있습니다.

1.  임시폴더와 배포폴더의 삭제
2.  이미지를 목적지로 복사
3.  sass 파일을 스타일시트로 변환
4.  markdown을 html 파일로 변환
5.  JS 파일을 목적지로 복사

여기서 여러개를 매뉴얼을 하나의 프로젝트로 복사하실 경우 *빌드 스크립트 실행 > bash에서 아웃풋의 복사* 과정을 순차적으로 실행해 주셔야 이미 배포처리한 매뉴얼이 삭제되지 않습니다.

pseudo code로 간략히 표시하면 이렇습니다.

``` 
// ITS의 경우
> gulp deploy --alarm
> cp -r 아웃풋 운영서버
> gulp deploy --project
> cp -r 아웃풋 운영서버
.....
```

위 의사코드와 같이 하나씩 복사하고 빌드하는 과정을 기술해주시면 됩니다.

