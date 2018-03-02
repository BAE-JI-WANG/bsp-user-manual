# Service channel Manual Build system

각 서비스 채널의 매뉴얼을 개발할 수 있는 저장소입니다.
현재는 ITS/opsnow만 정형화되어 있습니다.

개발의 경우는 `./source/*` 의 담당 서비스에서 하시면 되고,
빌드의 경우는 `./build/*` 폴더에 빌드 결과물이 쌓입니다.

가이드의 위치에 그대로 복사해서 serving 할 수 있게 구성하였습니다.

## 설치

아래의 명령어를 따라주세요.

1.  console에서 명령어 `npm install --save` 입력 후 엔터
2.  console에서 명령어 `npm install browser-sync -g` 입력 후 엔터




## 사용법
console에 `gulp`를 입력합니다.

    ? BSP 매뉴얼 빌더 :: 서비스를 고르세요 (Use arrow keys)
    ❯ ITS
      OpsNow

이렇게 보이구요.
자신의 서비스에서 `enter`키를 클릭합니다.

저는 *opsnow*를 선택하겠습니다.

선택 후 다음과 같이 진행됩니다.

    ? 매뉴얼 개발하실건가요? build해서 배포하실건가요? (Use arrow keys)
    ❯ 개발
      build

매뉴얼 수정이나 추가를 원하시면 **개발**을 선택해 주시고, 다 만든것을 배포하려 하시면 **Build**를 골라주세요.

## scaffolding
다음과 같은 형태로 네이밍을 진행합니다.


    서비스도메인(가변) / 루트폴더(고정) / 언어(가변) / 파일명.확장자(고정)
    service.bespinglobal.com / doc / en / user_guide.html

