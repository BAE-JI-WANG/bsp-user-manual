<!-- TOC -->
# OpsNow manual build system  



## 배포


### 배포 자동화 처리

자동배포를 하시려면 아래 설정을 참조하셔서 jenkins 내의 console command를 완성하세요.  

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
