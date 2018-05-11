
#### 배포서버에 node/npm/gulp가 설치되어 있는지 확인  

배포서버에 원격 접속(ssh)하신 뒤 아래의 명령어를 각각 실행해서 node/npm/gulp가 설치되어 있는지 확인하세요.

``` bash
node -v
npm -v
npm list gulp -g --depth=0          << 3.9.1이 출력되면 설치된 것입니다.
```

위 모듈들이 설치가 되어있지 않으면 설치 후 다음 진행을 합니다.

#### 확인이 되었으면 cli 콘솔에 다음과 같은 명령어를 입력합니다.
` gulp deploy --서비스명 `

alertnow를 예로 든다면 
` gulp deploy --alertnow`

이렇게 작성해주시면 됩니다.

이 이후 서비스명 아래 디렉토리를 서비스 도움말 문서의 root directory로 복사하는 shell script를 작성해주세요.






### 프로젝트에 따라  URL rule 수정

도움말 디렉토리는 ng-routing 규칙에서 벗어나게 되므로, nginx rewrite rule의 설정이 필요합니다.  
빌드 시스템에서 만들어진 도움말 디렉토리는 ng-routing 규칙에서 벗어나게 되므로, proxy server인 nginx rewrite rule의 설정이 필요합니다.  
다음은 각 서비스별 도움말 문서 root directory입니다.

서비스명 : 디렉토리명

alertnow : **/doc/** 


