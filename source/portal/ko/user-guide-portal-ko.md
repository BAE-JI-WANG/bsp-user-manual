---
service : alertnow
title   : AlertNow
ko : true
multiLang:
    - ko : false
    - en : true
    - zh : false
...

<!-- TOC -->


# Service Portal

사용 중인 서비스들의 요약 정보와 구성원들의 권한, Cloud Account, 서비스 그룹을 관리할 수 있습니다.

--------------------------------------------------------------------------------



## 대시보드

>   Service Portal - *Dashboard*

현재 이용 중인 서비스들의 요약 정보를 카드로 제공하며, 각 서비스로 빠르게 이동할 수 있는 바로가기 기능을 제공합니다.
또한 사용하지 않는 서비스의 설명을 제공하며, 바로 서비스를 신청할 수 있습니다.

![][dashboard_1_1]




### Asset Management

현재 사용 중인 Infra 자원들의 Usage, Performance의 요약 정보를 확인할 수 있습니다.

![][dashboard_2_1]

1.  Asset Management 바로가기
    Asset Management 서비스로 바로 이동할 수 있는 링크를 제공합니다. 이름을 클릭하시면 Asset Management 서비스의 대시보드 화면으로 이동합니다.
2.  Total
    운영 중인 모든 Multi Cloud, Hybrid 환경의 서버, DB 사용 수량과 퍼포먼스에 따른 수량 분포를 확인할 수 있습니다.
3.  Vendor 별 정보
    벤더별 서버, DB 사용 수량과 퍼포먼스에 따른 수량 분포를 확인할 수 있습니다.
    카드를 펼치면 해당 벤더의 서버, DB의 수량 및 퍼포먼스에 따른 수량 분포를 확인할 수 있습니다.

### Metering

자원 사용으로 인한 발생 비용을 확인할 수 있습니다.

![][dashboard_2_2]

1.  Metering 바로가기
    Metering 서비스로 바로 이동할 수 있는 링크를 제공합니다. 이름을 클릭하시면 Metering 서비스의 대시보드 화면으로 이동합니다.
2.  Total
    운영 중인 모든 Multi Cloud에서 발생한 비용이 표시됩니다.
    이번달에 발생한 비용과 이번달의 전체 예상 비용이 표시되며, 이번달 예상 비용과 발생 비용을 막대 그래프로 확인할 수 있습니다.
    현재 일 기준으로 전월 동일 기간에 대한 발생 비용과 전원 전체의 비용을 표시하며, 전월 전체 비용과 전월 동일 기간에 대한 발생 비용을 막대 그래프로 확인할 수 있습니다.
3.  Vendor 별 정보
    벤더별 발생 비용을 확인할 수 있습니다.
    카드를 펼쳐 해당 벤더에서 발생한 전체 비용과 이번달 비용/예상 비용, 전월 비용/전월 동일 기간 비용을 확인할 수 있습니다.




### Monitoring Dahsboard

운영 중인 서버들의 상태와 발생한 알람의 수를 확인할 수 있습니다.

![][dashboard_2_3]

1.  Monitoring Dashboard 바로가기
    Monitoring Dashboard 서비스로 바로 이동할 수 있는 링크를 제공합니다. 이름을 클릭하시면 Monitoring Dashboard 서비스의 대시보드 화면으로 이동합니다.
2.  Total
    운영 중인 모든 자원의 상태별 수량을 표시합니다.
    발생한 알람의 수를 확인할 수 있습니다.

3.  Vendor 별 정보
    벤더별 자원들의 상태별 수량과 발생 알람 수를 표시합니다.
    카드를 펼쳐 해당 벤더에서 사용하고 있는 자원들의 상태별 수량과 발생한 알람 수를 확인할 수 있습니다.




### 서비스 소개, 신청

사용하지 않는 서비스에 대한 소개와 서비스를 신청하기 위한 바로가기를 제공합니다.
서비스에 대한 내용을 확인할 수 있으며, 바로 서비스를 신청해 사용할 수 있습니다.

![][dashboard_2_4]

1.  LEARN MORE
    서비스 상세 안내 페이지로 이동할 수 있는 바로가기를 제공합니다.
2.  서비스 신청
    서비스 신청할 수 있는 페이지로 이동할 수 있는 바로가기를 제공합니다.




--------------------------------------------------------------------------------



## 사용자 그룹 관리

>   Service Portal - *User Group*

사용자의 권한 관리는 유저 그룹을 통해 이루어집니다.
유저 그룹에 컴퍼니 그룹을 연결해 유저 그룹 내 모든 사용자들의 권한을 일괄 적용할 수 있습니다.
유저 그룹에는 여러개의 컴퍼니 그룹을 연결할 수 있으며, 유저 그룹의 사용자들은 컴퍼니 그룹에 포함된 회사들의 서비스/메뉴 별 권한, 클라우드 Account 들에 대한 권한을 가지게 됩니다.

위 그룹들은 아래와 같은 구조로 연결되어 있습니다.

![][permission_structure]

### 새 유저 그룹 만들기

새로운 유저 그룹을 생성하고, 컴퍼니 그룹을 연결해 유저 그룹의 권한을 설정할 수 있습니다.

#### 유저 그룹 만들기

1.  \[그룹 추가\] 버튼을 클릭합니다.
    ![][user_group_1_1_1]

2.  "새로운 사용자 그룹 생성" 팝업이 표시됩니다.
    새롭게 생성할 유저 그룹의 이름을 입력 후, \[확인\] 버튼을 클릭합니다.
    ![][user_group_1_1_2]

3.  유저 그룹 목록에 새로운 유저 그룹이 추가된 것을 확인할 수 있습니다.


#### 유저 그룹에 사용자 추가하기

1.  유저 그룹 목록에서 새롭게 추가된 유저 그룹의 \[수정\] 버튼을 클릭합니다.
    ![][user_group_1_2_1]

2.  사용자 목록의 \[{더하기}\] 버튼을 클릭합니다.
    ![][user_group_1_2_2]

3.  "그룹 사용자 수정" 팝업이 표시됩니다.
    팝업의 왼쪽 목록에는 현재 유저 그룹에 추가된 사용자가 표시되고, 오른쪽 목록에는 현재 회사에 가입된 모든 사용자가 표시됩니다. 오른쪽 목록에서 새로운 유저 그룹에 추가할 사용자를 선택 후 
    ![][btn_demo_add_portal] 버튼을 클릭합니다.
    ![][user_group_1_2_3]

4.  사용자 추가 후 \[적용\] 버튼을 클릭합니다.
    ![][user_group_1_2_4]

5.  사용자 목록에 선택한 사용자가 유저 그룹에 추가되었음을 확인할 수 있습니다.
    ![][user_group_1_2_5]


#### 유저 그룹에 권한 설정하기

1.  유저 그룹에 연결할 컴퍼니 그룹을 선택합니다.
    컴퍼니 그룹 목록에서 연결할 컴퍼니 그룹의 체크박스를 선택합니다.
    여러개의 컴퍼니 그룹을 선택할 수 있습니다.
    컴퍼니 그룹은 권한 관리 메뉴에서 설정할 수 있습니다.
    ![][user_group_1_3_1]

2.  연결한 컴퍼니 그룹을 펼쳐 회사 목록을 확인합니다.
    회사를 선택하면 선택한 회사에 연결된 "서비스 권한 그룹" 목록과 "클라우드 그룹" 목록이 표시됩니다.
    선택한 유저 그룹에 부여할 회사 별 서비스 권한 그룹과 클라우드 그룹을 선택합니다.  
    ![][user_group_1_3_2]

3.  \[저장\] 버튼을 클릭합니다.  
    ![][user_group_1_3_3]

4.  유저 그룹 목록으로 돌아가 선택한 권한이 적용된 것을 확인할 수 있습니다.  
    ![][user_group_1_3_4]


### 유저 그룹 수정하기

기존 유저 그룹의 구성원을 수정하거나, 권한을 변경할 수 있습니다.

### 유저 그룹에 사용자 추가/제거하기

1.  유저 그룹 목록에서 구성원을 추가/제거할 유저 그룹의 \[수정\] 버튼을 클릭합니다.
    ![][user_group_1_2_1]

2.  사용자 목록의 \[+\] 버튼을 클릭합니다.
    ![][user_group_1_2_2]

3.  "그룹 사용자 수정" 팝업이 표시됩니다.
    오른쪽 전체 목록에서 유저 그룹에 추가할 사용자를 선택 후  ![][btn_demo_add_portal] 버튼을 클릭하거나(추가), 왼쪽 유저 그룹 내 사용자 목록에서 사용자 선택 후 ![][btn_demo_remove_portal]을 클릭합니다.(제거) 
    ![][user_group_1_2_3]

4.  사용자 편집 후 \[적용\] 버튼을 클릭합니다.
    ![][user_group_1_2_4]

5.  사용자 목록에서 사용자가 수정되었음을 확인할 수 있습니다.  
    ![][user_group_1_2_5]


#%## 유저 그룹의 권한 변경하기

1.  유저 그룹 목록에서 권한을 변경할 유저 그룹의 \[수정\] 버튼을 클릭합니다.
2.  "컴퍼니 그룹"을 변경해 연결할 컴퍼니 그룹을 변경할 수 있습니다.  
    ![][user_group_2_2_1]

3.  선택된 "컴퍼니 그룹"에서 회사를 선택해 회사 별로 "서비스 권한 그룹", "클라우드 그룹"을 선택해 권한을 변경할 수 있습니다.  
    ![][user_group_1_3_2]

4.  \[저장\] 버튼을 클릭해 변경 내용을 저장합니다.




#### 유저 그룹 삭제하기

유저 그룹을 삭제할 수 있습니다.
유저 그룹 삭제 시 유저 그룹에 포함되어 있던 유저들은 Default Group으로 이동합니다.

1.  삭제할 유저 그룹 선택 후, \[x\] 버튼을 클릭합니다 
    ![][user_group_3_1]

2.  "그룹 삭제 확인" 팝업이 표시됩니다.
    \[확인\] 버튼 클릭시 유저 그룹이 삭제되고, 기존 유저는 Default Group으로 이동합니다.  
    ![][user_group_3_2]


#### 유저 그룹에 새 사용자 초대하기

회사에 새로운 유저를 초대해 회사의 구성원으로 만들 수 있습니다.

1.  \[사용자 초대\] 버튼을 클릭합니다.  
    ![][user_group_4_1]

2.  "사용자 초대" 팝업이 표시됩니다.
    이 팝업에서 초대할 사용자의 이메일 주소와 초대할 사용자가 소속될 유저 그룹을 선택 후 \[보내기\] 버튼을 클릭합니다.

    ![][user_group_4_2]

3.  입력한 메일 주소로 초대 메일이 발송됩니다.
    이 메일을 통해 계정을 생성하면 사용자 초대가 완료됩니다.




--------------------------------------------------------------------------------



## 권한 관리

>   Service Portal - *Permission*

로그인한 사용자가 접근할 수 있는 회사, 서비스, 클라우드 서비스의 Account 들을 각각 그룹으로 만들 수 있습니다.
만들어진 회사, 서비스, 클라우드 Account 그룹들을 유저 그룹에 연결해 유저 그룹에 포함된 사용자들의 권한을 제어할 수 있습니다.
권한 관리 메뉴에서는 회사, 서비스, 클라우드 Account 들을 그룹으로 구성하고, 구성된 그룹들의 수정 및 삭제가 가능합니다.

-   *컴퍼니 그룹* : 여러 회사를 그룹으로 묶어 그룹사로 관리할 수 있습니다.
-   *서비스 권한 그룹* : 서비스 및 각 메뉴와, 메뉴에 대한 권한들을 그룹으로 묶어 관리할 수 있습니다.
-   *클라우드 그룹* : 클라우드 벤더와 벤더 별 Account(Subscription)들을 그룹으로 관리할 수 있습니다.

위 그룹들은 아래와 같은 구조로 연결되어 있습니다.
![][permission_structure]





### 컴퍼니 그룹

>   Service Portal - Permission - *Company Group*

개별 회사들을 컴퍼니 그룹으로 묶을 수 있습니다.
부서 별로 가입 후 가입한 부서들을 컴퍼니 그룹으로 묶어 한 회사로 관리하거나 계열사 별로 가입 후 계열사들을 하나의 그룹으로 묶어 그룹사로 관리할 수 있습니다.

#### 컴퍼니 그룹 정보 보기

이미 추가된 컴퍼니 그룹의 정보를 확인할 수 있습니다.

1.  컴퍼니 그룹 목록에서 정보를 확인할 컴퍼니 그룹을 클릭합니다.
    ![][company_group_1_1]

2.  컴퍼니 그룹 상세 화면에 선택한 컴퍼니 그룹에 포함된 회사들의 목록이 표시됩니다.
3.  회사 목록에서 \[+\] 버튼을 클릭해 선택한 회사에서 사용 중인 서비스 정보를 확인할 수 있습니다.
    ![][company_group_1_2]





#### 컴퍼니 그룹 만들기

새로운 컴퍼니 그룹을 생성하고, 컴퍼니 그룹에 회사를 추가할 수 있습니다.

1.  \[컴퍼니 그룹 추가\] 버튼을 클릭합니다.
    ![][company_group_2_1]

2.  "새로운 컴퍼니 그룹 생성" 팝업이 표시됩니다.
    ![][company_group_2_2]

3.  "새로운 컴퍼니 그룹 생성" 팝업에서 추가할 컴퍼니 그룹의 이름을 입력하고 \[확인\] 버튼을 클릭합니다.
    ![][company_group_2_3]

4.  컴퍼니 그룹 목록에 새로운 컴퍼니 그룹이 추가된 것을 확인할 수 있습니다.
    ![][company_group_2_4]

5.  컴퍼니 그룹 상세 화면에서 컴퍼니 그룹에 추가할 수 있는 회사의 목록이 표시됩니다.
    체크박스를 선택해 추가할 회사를 선택합니다.
    ![][company_group_2_5]

6.  \[변경사항 저장\] 버튼을 클릭합니다.
    ![][company_group_2_6]

7.  새로운 컴퍼니 그룹의 추가가 완료되었습니다.






#### 컴퍼니 그룹 수정하기

이미 추가된 컴퍼니 그룹의 이름을 변경할 수 있고, 새로운 회사를 추가하거나 추가된 회사를 제거할 수 있습니다.




#### 컴퍼니 그룹 이름 바꾸기

1.  컴퍼니 그룹 목록에서 이름을 변경할 컴퍼니 그룹을 선택합니다.
2.  컴퍼니 그룹 상세 화면에 선택한 컴퍼니 정보가 표시됩니다.
3.  컴퍼니 그룹 이름 옆의 \[수정\] 버튼을 클릭합니다.
    ![][company_group_3_1_1]

4.  컴퍼니 그룹의 이름이 편집 가능한 상태로 변경됩니다.
    컴퍼니 그룹의 이름을 변경합니다.
    ![][company_group_3_1_2]

5.  이름 변경 후, \[{체크}\] 버튼을 클릭합니다.
    ![][company_group_3_1_3]

6.  컴퍼니 그룹의 이름 변경이 완료되었습니다.





#### 컴퍼니 그룹 내 회사 추가/제거하기

1.  컴퍼니 그룹 목록에서 회사를 추가/제거할 컴퍼니 그룹을 선택합니다.
2.  컴퍼니 그룹 상세 화면에 선택한 컴퍼니 그룹에 추가되었거나, 추가할 수 있는 회사들의 목록이 표시됩니다.
3.  이미 추가된 회사의 체크박스를 선택 해제 하거나(제거), 추가할 회사의 체크박스를 선택합니다.(추가)
    ![][company_group_3_2_1]

4.  \[변경사항 저장\] 버튼을 클릭합니다.
    ![][company_group_3_2_2]

5.  컴퍼니 그룹 내 회사 추가/제거가 완료되었습니다.




#### 컴퍼니 그룹 삭제하기

추가된 컴퍼니 그룹을 삭제할 수 있습니다.

1.  컴퍼니 그룹 목록에서 삭제할 컴퍼니 그룹을 선택합니다.
2.  \[X\] 버튼을 클릭합니다.
    ![][company_group_4_1]

3.  그룹 삭제를 확인하는 팝업이 표시됩니다.
    팝업의 \[확인\] 버튼을 클릭합니다.
    ![][company_group_4_2]

4.  컴퍼니 그룹의 삭제가 완료되었습니다.




### 서비스 권한 그룹

>   Service Portal - Permission - *Service*

서비스들과 서비스 내 메뉴들의 편집 권한의 묶음을 그룹으로 만들 수 있습니다.
서비스 권한 그룹을 유저 그룹에 연결해 간편하게 유저 그룹 내 유저들이 볼 수 있는 메뉴와 메뉴 별 편집 권한을 설정할 수 있습니다.

#### OpsNow 서비스 그룹 정보 보기

이미 추가된 OpsNow 서비스 그룹의 정보를 확인할 수 있습니다.

1.  서비스 권한 그룹 목록에서 정보를 확인할 컴퍼니 그룹을 클릭합니다.  
    ![][bsp_group_1_1]

2.  서비스 권한 그룹 상세 화면에 선택한 서비스 권한 그룹에 포함된 서비스들이 표시됩니다.  
    ![][bsp_group_1_2]

3.  서비스 별 \[+\] 버튼을 클릭해 서비스에서 사용 가능한 메뉴와 메뉴 별 권한을 확인할 수 있습니다.  
    ![][bsp_group_1_3]


#### 서비스 권한 그룹 만들기

새로운 서비스 권한 그룹을 만들고, 서비스 권한 그룹에 서비스/메뉴 별 권한을 설정할 수 있습니다.

1.  \[서비스 권한 그룹 추가\] 버튼을 클릭합니다.  
    ![][bsp_group_2_1]

2.  "새로운 서비스 권한 그룹 생성" 팝업이 표시됩니다.  
    ![][bsp_group_2_2]

3.  "새로운 서비스 권한 그룹 생성" 팝업에서 추가할 서비스 권한 그룹의 이름을 입력하고 \[확인\] 버튼을 클릭합니다.  
    ![][bsp_group_2_3]

4.  서비스 권한 그룹 목록에 새로운 서비스 권한 그룹이 추가된 것을 확인할 수 있습니다.  
    ![][bsp_group_2_4]

5.  서비스 권한 그룹 상세 화면에 선택 가능한 서비스들의 목록이 표시됩니다.
    이 목록에는 신청한 서비스들이 표시됩니다.
    서비스 이름 앞의 \[+\] 버튼을 클릭해 서비스 내 메뉴 별 상세 권한을 설정할 수 있습니다.
    체크박스를 선택해 메뉴 별 권한을 설정합니다.  
    ![][bsp_group_2_5]

6.  \[변경사항 저장\] 버튼을 클릭합니다.  
    ![][bsp_group_2_6]

7.  새로운 서비스 권한 그룹의 추가가 완료되었습니다.




#### 서비스 권한 그룹 수정하기

이미 추가된 서비스 권한 그룹의 이름을 변경할 수 있고, 서비스 별 권한을 변경할 수 있습니다.

#### 서비스 권한 그룹 이름 바꾸기

1.  서비스 권한 그룹 목록에서 이름을 변경할 서비스 권한 그룹을 선택합니다.
2.  서비스 권한 그룹 상세 화면에 선택한 서비스 권한 그룹 정보가 표시됩니다.
3.  서비스 권한 그룹 이름 옆의 \[{연필 아이콘}\] 버튼을 클릭합니다.
    ![][bsp_group_3_1_1]

4.  서비스 권한 그룹의 이름이 편집 가능한 상태로 변경됩니다.
    서비스 권한 그룹의 이름을 변경합니다.
    ![][bsp_group_3_1_2]

5.  이름 변경 후, \[확인\] 버튼을 클릭합니다.
    ![][bsp_group_3_1_3]

6.  서비스 권한 그룹의 이름 변경이 완료되었습니다.




#### 서비스 권한 그룹의 권한 변경하기

1.  서비스 권한 그룹 목록에서 권한을 변경할 서비스 권한 그룹을 선택합니다.
2.  서비스 권한 그룹 상세 화면에 선택한 서비스 권한 그룹에서 사용 가능한 서비스의 목록과 서비스 내 메뉴의 권한을 확인할 수 있습니다.
3.  서비스 내 메뉴의 체크박스를 선택 해제 하거나(권한 제거), 메뉴 별 권한을 변경할 수 있습니다.(권한 변경)
    ![][bsp_group_3_2_1]

4.  \[변경사항 저장\] 버튼을 클릭합니다.
    ![][bsp_group_3_2_2]

5.  서비스 권한 그룹 내 권한 변경이 완료되었습니다.





#### 서비스 권한 그룹 삭제하기

추가된 서비스 권한 그룹을 삭제할 수 있습니다.

1.  서비스 권한 그룹 목록에서 삭제할 서비스 권한 그룹을 선택합니다.
2.  \[X\] 버튼을 클릭합니다.
    ![][bsp_group_4_1]

3.  그룹 삭제를 확인하는 팝업이 표시됩니다.
    팝업의 \[확인\] 버튼을 클릭합니다.
    ![][bsp_group_4_2]

4.  서비스 권한 그룹의 삭제가 완료되었습니다.




### 클라우드

>   Service Portal - Permission - *Cloud*

사용하고 있는 Perblic Cloud Service와 Cloud Service들의 Account(Subscription)에 대한 접근 권한을 그룹으로 만들 수 있습니다.
클라우드 그룹을 유저 그룹에 연결해 유저 그룹 내 유저들이 확인할 수 있는 Perblic Cloud Service 와 Account(Subscription)의 접근 권한을 설정할 수 있습니다.

#### 3.1 클라우드 그룹 정보 보기

이미 추가된 클라우드 그룹의 정보를 확인할 수 있습니다.

1.  클라우드 그룹 목록에서 정보를 확인할 클라우드 그룹을 클릭합니다.
    ![][cloud_group_1_1]

2.  클라우드 그룹 상세 화면에 선태한 클라우드 그룹에 속한 Public Cloud Service들이 표시됩니다.
    ![][cloud_group_1_2]

3.  Public Cloud Service 별 \[+\] 버튼을 클릭해 클라우드 그룹에서 확인 가능한 Account(Subscription)들이 표시됩니다.
    ![][cloud_group_1_3]


#### 클라우드 그룹 만들기

새로운 클라우드 그룹을 만들고, 클라우드 그룹에서 사용 가능한 Public Cloud Service와 Account(Subscription)를 설정할 수 있습니다.

1.  \[클라우드 그룹 추가\] 버튼을 클릭합니다.
    ![][cloud_group_2_1]

2.  "새로운 클라우드 그룹 생성" 팝업이 표시됩니다.
    ![][cloud_group_2_2]

3.  "새로운 클라우드 그룹 생성" 팝업에서 추가할 클라우드 그룹의 이름을 입력하고 \[확인\] 버튼을 클릭합니다.
    ![][cloud_group_2_3]

4.  클라우드 그룹 목록에 새로운 클라우드 그룹이 추가된 것을 확인할 수 있습니다.
    ![][cloud_group_2_4]

5.  클라우드 그룹 상세 화면에 선택 가능한 Public Cloud Service와 Account(Subscription) 목록이 표시됩니다.
    Service Portal > Cloud Account 메뉴에서 등록한 계정 정보가 표시됩니다.
    Public Cloud Service 의 체크박스를 선택해 해당 서비스의 사용 가능 여부를 선택할 수 있습니다.
    그리고 서비스 내 Account(Subscription)의 체크박스를 선택해 해당 계정의 사용 가능 여부를 선택할 수 있습니다.
    ![][cloud_group_2_5]

6.  \[변경사항 저장\] 버튼을 클릭합니다.
    ![][cloud_group_2_6]

7.  새로운 클라우드 그룹의 추가가 완료되었습니다.


#### 클라우드 그룹 수정하기

#### 클라우드 그룹 이름 바꾸기

1.  클라우드 그룹 목록에서 이름을 변경할 클라우드 그룹을 선택합니다.
2.  클라우드 그룹 상세 화면에 선택한 클라우드 그룹 정보가 표시됩니다.
3.  클라우드 그룹 이름 옆의 \[수정\] 버튼을 클릭합니다.
    ![][cloud_group_3_1_1]

4.  클라우드 그룹의 이름이 편집 가능한 상태로 변경됩니다.
    클라우드 그룹의 이름을 변경합니다.
    ![][cloud_group_3_1_2]

5.  이름 변경 후, \[확인\] 버튼을 클릭합니다.  
    ![][cloud_group_3_1_3]

6.  클라우드 그룹의 이름 변경이 완료되었습니다.




#### 클라우드 그룹 권한 변경하기

1.  클라우드 그룹 목록에서 권한을 변경할 클라우드 그룹을 선택합니다.
2.  클라우드 그룹 상세 화면에 선택한 클라우드 그룹에서 사용 가능한 Public Cloud Service의 목록과 확인 가능한 Account(Subscription) 정보가 표시됩니다.
3.  Public Cloud Service, Account(Subscription)의 체크박스를 선택 해제 하거나(권한 제거), 체크박스를 선택해 권한을 변경할 수 있습니다.(권한 변경) 
    ![][bsp_group_3_2_1]

4.  \[변경사항 저장\] 버튼을 클릭합니다.  
    ![][bsp_group_3_2_2]

5.  서비스 권한 그룹 내 권한 변경이 완료되었습니다.




#### 클라우드 그룹 삭제하기

추가된 클라우드 그룹을 삭제할 수 있습니다.

1.  클라우드 그룹 목록에서 삭제할 클라우드 그룹을 선택합니다.
2.  \[X\] 버튼을 클릭합니다.  
    ![][cloud_group_4_1]

3.  그룹 삭제를 확인하는 팝업이 표시됩니다.
    팝업의 \[확인\] 버튼을 클릭합니다.  
    ![][cloud_group_4_2]

4.  서비스 권한 그룹의 삭제가 완료되었습니다.




--------------------------------------------------------------------------------






## 클라우드 계정 관리

>   Service Portal - *Cloud Account*

클라우드 서비스의 계정 연동으로 클라우드 서비스에서 이용하고 있는 자원의 현황과 발생 비용을 확인할 수 있습니다.
클라우드 계정 관리 메뉴에서는 사용하고 있는 클라우드 서비스들의 계정을 등록할 수 있는 기능을 제공합니다.
Asset Management, Metering 서비스를 사용하기 위해서는 반드시 클라우드 계정 등록이 필요합니다.
각 서비스에 따른 필수 입력 항목은 벤더 별 입력 항목을 참고해 주세요.

**새로운 계정의 추가 후 데이터의 적재를 위해 조금의 시간이 소요될 수 있으며, 이 과정 중에는 Asset Management/Metering 에서 데이터를 가져오지 못할 수 있습니다**.

### 벤더 별 서비스 이용을 위한 필수 입력 항목

#### Amazon Web Service

<!--
|                     | Asset Management                                             | Metering          
| Account Name        | 필수                                                         | 필수 
| Access Key          | 필수                                                         | -    
| Secret Key          | 필수                                                         | -    
| Linked Account 여부 | 필수, Linked Account, 비 linked Account 중 선택              |      
| S3 Bucket Name      | 비 linked Account 일 경우 필수                               |      
| Region              | Access Key, Secret Key 입력 시 자동 입력Access Key, Secret Key 미 입력 시 필수(단, 먼저 등록된 계정이 있다면 그 계정의 Region 을 따라감으로 선택 불가) |      
| Status              | 계정의 데이터 수집 상태(Account ID 만 입력한 경우 표시되지 않음) |      
-->

<table>
    <thead>
        <tr>
            <th></th>
            <th>Asset Management</th>
            <th>Metering</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Account Name</th>
            <td>필수</td>
            <td>필수</td>
        </tr>
        <tr>
            <th>Access Key</th>
            <td>필수</td>
            <td>-</td>
        </tr>
        <tr>
            <th>Secret Key</th>
            <td>필수</td>
            <td>-</td>
        </tr>
        <tr>
            <th>Linked Account 여부</th>
            <td colspan="2">필수, Linked Account, 비 linked Account 중 선택</td>
        </tr>
        <tr>
            <th>S3 Bucket Name</th>
            <td colspan="2">비 linked Account 일 경우 필수</td>
        </tr>
        <tr>
            <th>Region</th>
            <td colspan="2">Access Key, Secret Key 입력 시 자동 입력<br>Access Key, Secret Key 미 입력 시 필수<br>(단, 먼저 등록된 계정이 있다면 그 계정의 Region 을 따라감으로 선택 불가)</td>
        </tr>
        <tr>
            <th>Status</th>
            <td colspan="2">계정의 데이터 수집 상태(Account ID 만 입력한 경우 표시되지 않음)</td>
        </tr>
    </tbody>
</table>



#### Microsoft Azure
<table>
    <thead>
        <tr>
            <th colspan="2"></th>
            <th>Asset Management</th>
            <th>Metering</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="2">Account Name</th>
            <td>필수</td>
            <td>필수</td>
        </tr>
        <tr>
            <th colspan="2">ID</th>
            <td>필수</td>
            <td>필수</td>
        </tr>
        <tr>
            <th colspan="2">Password</th>
            <td>필수</td>
            <td>필수</td>
        </tr>
        <tr>
            <th colspan="2">Region</th>
            <td colspan="2">Subscription 조회 시 자동 입력</td>
        </tr>
        <tr>
            <th colspan="2">Status</th>
            <td colspan="2">계정의 데이터 수집 상태</td>
        </tr>
        <tr>
            <th colspan="2">EA Account 여부</th>
            <td>필수</td>
            <td>필수</td>
        </tr>
        <tr>
            <th rowspan="5">Subscription</th>
            <td>Subscription ID</td>
            <td colspan="2">Subscription 선택</td>
        </tr>
        <tr>
            <th>State</th>
            <td colspan="2">-</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>필수</td>
            <td>필수</td>
        </tr>
        <tr>
            <th>Offer ID</th>
            <td>필수</td>
            <td>필수</td>
        </tr>
        <tr>
            <th>Billing day</th>
            <td>필수</td>
            <td>필수</td>
        </tr>
        <tr>
            <th colspan="2">Enrollment</th>
            <td colspan="2">EA Account 인 경우에만 필수</td>
        </tr>
        <tr>
            <th colspan="2">Token</th>
            <td colspan="2">EA Account 인 경우에만 필수</td>
        </tr>
    </tbody>
</table>



### Amazon Web Service 계정 등록

>   Service Portal - Cloud Account - *AWS*

AWS 에서 이용 중인 자원의 현황, 비용을 확인하기 위해 AWS 계정을 등록합니다.

1.  좌측의 벤더 목록에서 AWS 선택합니다.
    등록된 AWS 계정들이 목록에 표시됩니다.
    ![][cloud_account_aws_1_1]

2.  \[계정 추가\] 버튼을 클릭합니다.
    ![][cloud_account_aws_1_2]

3.  추가할 계정을 위한 새로운 행이 표시됩니다.
    여기에 새롭게 추가할 계정 정보를 입력합니다.
    ![][cloud_account_aws_1_3]

4.  \[확인\] 버튼을 클릭해 입력한 내용을 저장합니다.
    ![][cloud_account_aws_1_4]

5.  Account 목록에서 새로운 계정이 추가된 것을 확인할 수 있습니다.
    ![][cloud_account_aws_1_5]




--------------------------------------------------------------------------------





## 서비스 그룹 관리

>   Service Portal - *Service Group*

Multi Cloud, Hybrid 환경의 모든 자원들을 실제 운영하고 있는 서비스 기준으로 그룹핑할 수 있는 Service Group 기능을 제공하고 있습니다.
Service Group 기능을 통해 자원들을 재 그룹핑함으로써 운영하고 있는 서비스들의 자원 사용량, 발생 비용, 상태를 확인할 수 있습니다.

### Service Group 소개

Service Group 기능은 자원들을 필요한 기준에 따라 분류할 수 있는 기능을 제공합니다. 향상된 Service Group 기능을 통해 좀 더 쉽고 세밀하게 자원들을 구분할 수 있습니다. 새로운 Service Group 기능을 통해 자원들을 효율적으로 관리해 보세요.


### 시작하기

#### 자동으로 새로운 View & Service Group 만들기

![][service_group_2_1_1]
-	Account, Tag key rule 조건을 사용하여 자동으로 View목록 생성된 View를 생성/관리합니다.
-	자동 배치 여부는 사용자가 on/off를 선택하여 관리할 수 있습니다.
-	초기 진입 시 : 보유한 Account가 있는 경우 account View를 디폴트로 제공합니다.
    (사용자가 보유한 account별로 서비스 그룹이 자동 생성된 View)

1.  Tag를 기준으로 새로운 View & Service Group 만들기

    자동 View 만들기 선택
    ![][service_group_2_1_1_1]

    Tag Key 기준으로 만들기 선택
    ![][service_group_2_1_1_2]

    보유한 Tag key 선택
    ![][service_group_2_1_1_3]

    Tag key에 속한 Tag value별로 Service Group이 자동으로 생성됩니다.
    ![][service_group_2_1_1_4]

    생성 완료 시 좌측 메뉴에서 View 의 정보를 확인 할 수 있으며 View를 선택하면 우측에 자동으로 생성된 Tag 기준의 Service Group List와 Service Group이 생성된 Rule 조건을 확인 할 수 있습니다.
    ![][service_group_2_1_1_5]

    생성된 Service Group의 수정을 원하실 경우 Mouse Over 시 아이콘이 나타납니다.
    해당 버튼을 통해 이름 편집, 리소스 추가, Rule 편집, 삭제가 가능합니다.
    (상세 내용은 3, 4 매뉴얼 참조)
    ![][service_group_2_1_1_6]

2.  Account를 기준으로 새로운 View & 서비스 그룹 만들기

    자동 View 만들기 선택
    ![][service_group_2_1_2_1]

    Account 기준으로 만들기 선택 
    ![][service_group_2_1_2_2]

    Account 별로 자동으로 Service Group이 생성됩니다.  
    ![][service_group_2_1_2_3]

    생성 완료 시 좌측 메뉴에서 View 의 정보를 확인 할 수 있으며 View를 선택하면 우측에 자동으로 생성된 Account 기준의 Service Group List와 Service Group이 생성된 Rule 조건을 확인 할 수 있습니다.  
    ![][service_group_2_1_2_4]

    생성된 Service Group의 수정을 원하실 경우 Mouse Over 시 아이콘이 나타납니다.
    해당 버튼을 통해 이름 편집, 리소스 추가, Rule 편집, 삭제가 가능합니다.
    (상세 내용은 3, 4 매뉴얼 참조) 
    ![][service_group_2_1_2_5]




#### 수동으로 새로운 View & 서비스 그룹 만들기

1.  수동으로 새로운 View & Service Group 만들기

    Custom View 만들기 선택하세요.
    ![][service_group_2_2_1]

    Custom View 이름을 지정 할 수 있습니다.
    이름은 최대 48자까지 가능하며 영문, 숫자, 하이픈(-) 만 입력 가능합니다.
    ![][service_group_2_2_2]

    다음을 선택하면 지정된 이름으로 View가 생성 안내 메시지가 출력됩니다.
    해당 설정으로 생성 하시려면 생성을 선택하시고 다른 이름 지정을 원하실 경우 이전 버튼을 선택하면 됩니다.
    ![][service_group_2_2_3]

    생성된 View는 왼쪽 메뉴에서 확인이 가능하며 수동으로 생성된 View 이기 때문에 최초에 등록된 Service Group이 없이 생성되며 Service Group 생성 버튼을 통해 등록이 가능합니다.
    ![][service_group_2_2_4]

    Service Group 생성을 선택하면 Service Group 이름을 지정 할 수 있는 화면이 나타납니다.
    원하는 이름과 설명을 지정하여 Service Group을 생성 할 수 있습니다.
    ![][service_group_2_2_5]

    Service Group을 생성하면 아래와 같이 화면에서 확인이 가능합니다.
    해당 Service Group에 자동/수동으로 Resource를 Mapping하여 관리가 가능합니다.
    (매뉴얼 3 참조)
    ![][service_group_2_2_6]


#### Category를 만들어 Service Group 구분하기

생성된 Service Group들을 다시 한번 묶어서 관리를 하고 싶은 경우 Category 기능을 사용 할 수 있습니다.

1.  Category 생성하기

    Category 지정 방법은 왼쪽의 View 에 Mouse Over 시 생성되는 버튼을 선택하여 생성이 가능합니다.
    ![][service_group_2_3_1]

    Category 생성 시 좌측 View List에 Category 모양의 아이콘과 우측의 Service Group List 화면에 Category가 생성됨을 확인 할 수 있습니다.
    ![][service_group_2_3_2]

2.  Category 변경하기

    Category의 명칭을 변경하거나 삭제를 원하실 경우 우측의 아이콘을 클릭하여 변경이 가능합니다.
    ![][service_group_2_3_3]

3.  Service Group 등록하기

    Category에 Service Group을 등록하는 방법은 왼쪽 메뉴에서 Drag & Drop 또는 Mouse Over 시 생기는 버튼을 이용하여 등록이 가능합니다.
    ![][service_group_2_3_4]

    Button Click 시 선택 가능한 Category를 선택 할 수 있는 Popup이 제공되며, 이동하고자 하는 Category를 선택 한 후 확인 버튼을 누르면 원하는 Category로 이동하게 됩니다.
    ![][service_group_2_3_5]

    이동을 완료한 Service Group의 모습은 아래와 같습니다.
    ![][service_group_2_3_6]


### 자원 추가하기

여러 개의 Account 를 사용하시는 사용자나 Console/Portal의 Tag 기능을 통해 이미 자원을 잘 분류하고 계시는 사용자 분들은 Service Group 을 만들기 위해 수고로운 작업을 또 하실 필요가 없습니다. 클릭 몇 번 만으로 자원들을 손쉽게 분류할 수 있습니다.

#### 조건을 설정해 자동으로 자원 추가하기

Service Group 별로 자원 추가 Rule 을 설정할 수 있는 기능을 제공합니다. 사전에 조건만 설정하면 새로운 자원이 추가되더라도 자동으로 자원을 분류됩니다.
Rule 설정은 어렵지 않습니다. Service Group 에 포함되어야 할 자원들의 Tag, Account, Region, Product 만 선택하면 해당 조건의 자원들이 자동으로 선택한 Service Group 에 추가됩니다.

1.  Tag를 기준으로 만들어진 Service Group의 자원 자동 추가 조건 설정
    Mouse over 상태에서 나타나는 편집버튼을 클릭하여 편집모드로 전환합니다.
    ![][service_group_3_1_1_1]

    View 상세 화면에서 Rule 편집모드 진입
    ![][service_group_3_1_1_2]

    Service Group 상세 화면에서 Rule 편집모드 진입

    각 항목별로 조건을 설정합니다. 이 때, Tag value 조건은 필수로 선택되어야 합니다.
    ![][service_group_3_1_1_3]
    ![][service_group_3_1_1_4]
    Tag 기준 Rule 설정화면


    \[Add New Rule\]버튼을 선택하면 리스트가 확장되며 설정 옵션이 표시됩니다. 기 설정된 조건이 있을 경우 같이 표시되며 Tag value 조건이 선택되지 않았거나 중복된 조건이 다른 Service Group 에 설정 되어 있는 경우 경고메시지가 출력되며 저장되지 않습니다.
    ![][service_group_3_1_1_5]

    Tag 기준 Rule 설정이 완료된 화면


2.  Account를 기준으로 만들어진 Service Group의 자원 자동 추가 조건 설정
    Mouse over 상태에서 나타나는 편집버튼을 클릭하여 편집모드로 전환합니다.
    ![][service_group_3_1_2_1]

    View 상세 화면에서 Rule 편집모드 진입
    ![][service_group_3_1_2_2]

    Service Group 상세 화면에서 Rule 편집모드 진입


    각 항목별로 조건을 설정합니다. 이 때, Account 조건은 필수로 선택되어야 합니다.
    ![][service_group_3_1_2_3] 
    ![][service_group_3_1_2_4] 
    Account 기준 Rule 설정화면


    \[Add New Rule\]버튼을 선택하면 리스트가 확장되며 설정 옵션이 표시됩니다. 기 설정된 조건이 있을 경우 같이 표시되며 Account 조건이 선택되지 않았거나 중복된 조건이 다른 Service Group 에 설정 되어 있는 경우 경고메시지가 출력되며 저장되지 않습니다.  
    ![][service_group_3_1_2_5]

    Account 기준 Rule 설정이 완료된 화면

3.  사용자가 직접 생성한 Service Group의 자원 자동 추가 조건 설정
    Mouse over 상태에서 나타나는 편집버튼을 클릭하여 편집모드로 전환합니다.  
    ![][service_group_3_1_3_1]

    View 상세 화면에서 Rule 편집모드 진입 
    ![][service_group_3_1_3_2]

    Service Group 상세 화면에서 Rule 편집모드 진입 
    각 항목별로 조건을 설정합니다.  
    ![][service_group_3_1_3_3]

    직접 생성한 서비스 그룹 Rule 설정화면 

    \[Add New Rule\]버튼을 선택하면 리스트가 확장되며 설정 옵션이 표시됩니다. 기 설정된 조건이 있을 경우 같이 표시되며 중복된 조건이 다른 Service Group 에 설정 되어 있는 경우 경고메시지가 출력되며 저장되지 않습니다.  
    ![][service_group_3_1_3_4]

    직접 생성한 서비스 그룹 Rule 설정이 완료된 화면


Rule은 언제든지 자유롭게 추가, 변경하실 수 있고 Rule 을 켜거나 끌 수 있습니다. 그리고 Pin 기능을 사용해 특정한 자원이 Rule 의 영향을 받지않도록 설정할 수도 있습니다.

#### 수동으로 자원 추가하기

1.  Service Group 상세 화면에서 리소스 추가 버튼을 클릭하여 Add resource/Intelligent search 화면으로 이동합니다.
    ![][service_group_3_2_1]

2.  Intelligent Search를 이용하여 조건을 설정, 검색결과에서 리소스를 선택하여 \[선택한 리소스 추가\] 버튼을 클릭합니다.
    ![][service_group_3_2_2]

3.  서비스 그룹 상세 화면으로 이동되며 N개의 리소스 추가 되었다는 \[리소스 추가 확인 팝업\] 이 제공됩니다.
    ![][service_group_3_2_3]


### Service Group 관리하기

#### Default View 설정

사용자는 여러 개의 View 중에서 기준이 되는 Default View를 설정할 수 있습니다.
Asset, Metering 서비스에서는 Default View를 기준으로 정보가 조회됩니다.

1.  왼쪽 메뉴에서 디폴트 view 아이콘을 클릭하거나, View 상세화면에서 Default View 설정 메뉴를 클릭하여 사용자는 Default View를 선택 할 수 있습니다.
    ![][service_group_4_1_1]

    클릭 시 확인 팝업 창이 제공되며, 확인 버튼을 누를 경우 선택한 View가 Default View로 변경됩니다.
    ![][service_group_4_1_2]


#### Auto update ON/OFF

Rule을 삭제하지 않아도 Auto update 기능을 ON/OFF 함으로서 서비스그룹이 Rule 조건의 영향을 받거나, 받지 않도록 변경할 수 있습니다.

1.  Rule 편집모드에서 Auto update 항목을 체크 해제합니다.
    ![][service_group_4_2_1]

    체크 해제 시 Auto update 상태가 OFF로 전환된 것을 확인 할 수 있습니다.
    ![][service_group_4_2_2]

    Auto update OFF 상태에서는 더 이상 Rule 조건에 따라 자원이 분류되지 않습니다. 다시 Auto Update를 체크하여 ON 상태로 변환하면 Rule 조건에 따라 자동으로 분류됩니다.

#### 리소스 PIN

PIN 기능을 사용해 특정한 자원이 Rule 의 영향을 받지않도록 설정할 수도 있습니다.

1.  PIN 처리할 자원들을 체크하여 한번에 Pin 처리가 가능하며, Status 항목에서 개별로 PIN 처리가 가능합니다.
    ![][service_group_4_3_1]

2.  복수의 자원을 PIN 처리할 경우 경고팝업이 제공되며, 확인시 선택된 자원들이 PIN처리 되어 더 이상 RULE의 영향을 받지 않는 자원으로 변경됩니다.
    ![][service_group_4_3_2]


#### View, Category, Service Group 제거하기

1.  View 제거

    View 상세화면에서 오른쪽 상단메뉴를 이용하여 Delete View 메뉴를 클릭합니다(Default View는 삭제할 수 없습니다).
    ![][service_group_4_4_1_1]

    Delete View 메뉴 클릭 시 삭제 확인 팝업이 제공되며, 삭제 버튼 클릭 시 선택된 View가 삭제됩니다.
    ![][service_group_4_4_1_2]

2.  Category 제거

    생성된 Category 이름에 Mouse over 시 나타나는 휴지통 버튼을 클릭합니다.
    ![][service_group_4_4_2_1]

    휴지통 버튼 클릭 시 Category 삭제 확인 팝업이 제공되며 삭제 버튼 클릭 시 선택한 Category는 지워지고, Category 안에 포함되어 있던 Service Group Category에 포함되지 않는 Service Group 으로 변경됩니다.
    ![][service_group_4_4_2_2]

3.  Service Group 제거

    Service Group 상세화면에서 Service Group 삭제 버튼을 클릭합니다.
    ![][service_group_4_4_3_1]

    또는 View 상세화면에서 삭제할 Service Group을 Mouse over 하여 휴지통 버튼을 클릭하거나, 삭제할 Service Group들을 체크하여 Service Group 삭제 버튼을 클릭하면 복수의 Service Group을 한번에 삭제할 수 있습니다.
    ![][service_group_4_4_3_2]

    삭제 버튼 클릭시 삭제 확인 팝업이 제공되며, 삭제를 선택하면 Service Group이 삭제됩니다.
    ![][service_group_4_4_3_3]













<!-- 이미지 모음 -->
[dashboard_1_1]:          ./resource/dashboard_1_1.png
[dashboard_2_1]:          ./resource/dashboard_2_1.png
[dashboard_2_2]:          ./resource/dashboard_2_2.png
[dashboard_2_3]:          ./resource/dashboard_2_3.png
[dashboard_2_4]:          ./resource/dashboard_2_4.png

[permission_structure]:   ./resource/permission_structure.png
[btn_demo_add_portal]:    ./resource/btn_demo_add_portal.png

[user_group_1_1_1]:       ./resource/user_group_1_1_1.png
[user_group_1_1_2]:       ./resource/user_group_1_1_2.png
[user_group_1_2_1]:       ./resource/user_group_1_2_1.png
[user_group_1_2_2]:       ./resource/user_group_1_2_2.png
[user_group_1_2_3]:       ./resource/user_group_1_2_3.png
[user_group_1_2_4]:       ./resource/user_group_1_2_4.png
[user_group_1_2_5]:       ./resource/user_group_1_2_5.png
[user_group_1_3_1]:       ./resource/user_group_1_3_1.png
[user_group_1_3_2]:       ./resource/user_group_1_3_2.png
[user_group_1_3_3]:       ./resource/user_group_1_3_3.png
[user_group_1_3_4]:       ./resource/user_group_1_3_4.png
[user_group_1_2_1]:       ./resource/user_group_1_2_1.png
[user_group_1_2_2]:       ./resource/user_group_1_2_2.png

[btn_demo_add_portal]:    ./resource/btn_demo_add_portal.png
[btn_demo_remove_portal]: ./resource/btn_demo_remove_portal.png

[user_group_1_2_3]:       ./resource/user_group_1_2_3.png
[user_group_1_2_4]:       ./resource/user_group_1_2_4.png
[user_group_1_2_5]:       ./resource/user_group_1_2_5.png
[user_group_2_2_1]:       ./resource/user_group_2_2_1.png
[user_group_1_3_2]:       ./resource/user_group_1_3_2.png
[user_group_3_1]:         ./resource/user_group_3_1.png
[user_group_3_2]:         ./resource/user_group_3_2.png
[user_group_4_1]:         ./resource/user_group_4_1.png
[user_group_4_2]:         ./resource/user_group_4_2.png

[permission_structure]:   ./resource/permission_structure.png

[company_group_1_1]:      ./resource/company_group_1_1.png
[company_group_1_2]:      ./resource/company_group_1_2.png
[company_group_2_1]:      ./resource/company_group_2_1.png
[company_group_2_2]:      ./resource/company_group_2_2.png
[company_group_2_3]:      ./resource/company_group_2_3.png
[company_group_2_4]:      ./resource/company_group_2_4.png
[company_group_2_5]:      ./resource/company_group_2_5.png
[company_group_2_6]:      ./resource/company_group_2_6.png
[company_group_3_1_1]:    ./resource/company_group_3_1_1.png
[company_group_3_1_2]:    ./resource/company_group_3_1_2.png
[company_group_3_1_3]:    ./resource/company_group_3_1_3.png
[company_group_3_2_1]:    ./resource/company_group_3_2_1.png
[company_group_3_2_2]:    ./resource/company_group_3_2_2.png
[company_group_4_1]:      ./resource/company_group_4_1.png
[company_group_4_2]:      ./resource/company_group_4_2.png

[bsp_group_1_1]:          ./resource/bsp_group_1_1.png
[bsp_group_1_2]:          ./resource/bsp_group_1_2.png
[bsp_group_1_3]:          ./resource/bsp_group_1_3.png
[bsp_group_2_1]:          ./resource/bsp_group_2_1.png
[bsp_group_2_2]:          ./resource/bsp_group_2_2.png
[bsp_group_2_3]:          ./resource/bsp_group_2_3.png
[bsp_group_2_4]:          ./resource/bsp_group_2_4.png
[bsp_group_2_5]:          ./resource/bsp_group_2_5.png
[bsp_group_2_6]:          ./resource/bsp_group_2_6.png
[bsp_group_3_1_1]:        ./resource/bsp_group_3_1_1.png
[bsp_group_3_1_2]:        ./resource/bsp_group_3_1_2.png
[bsp_group_3_1_3]:        ./resource/bsp_group_3_1_3.png
[bsp_group_3_2_1]:        ./resource/bsp_group_3_2_1.png
[bsp_group_3_2_2]:        ./resource/bsp_group_3_2_2.png
[bsp_group_4_1]:          ./resource/bsp_group_4_1.png
[bsp_group_4_2]:          ./resource/bsp_group_4_2.png

[cloud_group_1_1]:        ./resource/cloud_group_1_1.png
[cloud_group_1_2]:        ./resource/cloud_group_1_2.png
[cloud_group_1_3]:        ./resource/cloud_group_1_3.png
[cloud_group_2_1]:        ./resource/cloud_group_2_1.png
[cloud_group_2_2]:        ./resource/cloud_group_2_2.png
[cloud_group_2_3]:        ./resource/cloud_group_2_3.png
[cloud_group_2_4]:        ./resource/cloud_group_2_4.png
[cloud_group_2_5]:        ./resource/cloud_group_2_5.png
[cloud_group_2_6]:        ./resource/cloud_group_2_6.png
[cloud_group_3_1_1]:      ./resource/cloud_group_3_1_1.png
[cloud_group_3_1_2]:      ./resource/cloud_group_3_1_2.png
[cloud_group_3_1_3]:      ./resource/cloud_group_3_1_3.png

[bsp_group_3_2_1]:        ./resource/bsp_group_3_2_1.png
[bsp_group_3_2_2]:        ./resource/bsp_group_3_2_2.png

[cloud_group_4_1]:        ./resource/cloud_group_4_1.png
[cloud_group_4_2]:        ./resource/cloud_group_4_2.png
[cloud_account_aws_1_1]:  ./resource/cloud_account_aws_1_1.png
[cloud_account_aws_1_2]:  ./resource/cloud_account_aws_1_2.png
[cloud_account_aws_1_3]:  ./resource/cloud_account_aws_1_3.png
[cloud_account_aws_1_4]:  ./resource/cloud_account_aws_1_4.png
[cloud_account_aws_1_5]:  ./resource/cloud_account_aws_1_5.png

[service_group_2_1_1]:    ./resource/service_group_2_1_1.png
[service_group_2_1_1_1]:  ./resource/service_group_2_1_1_1.png
[service_group_2_1_1_2]:  ./resource/service_group_2_1_1_2.png
[service_group_2_1_1_3]:  ./resource/service_group_2_1_1_3.png
[service_group_2_1_1_4]:  ./resource/service_group_2_1_1_4.png
[service_group_2_1_1_5]:  ./resource/service_group_2_1_1_5.png
[service_group_2_1_1_6]:  ./resource/service_group_2_1_1_6.png
[service_group_2_1_2_1]:  ./resource/service_group_2_1_2_1.png
[service_group_2_1_2_2]:  ./resource/service_group_2_1_2_2.png
[service_group_2_1_2_3]:  ./resource/service_group_2_1_2_3.png
[service_group_2_1_2_4]:  ./resource/service_group_2_1_2_4.png
[service_group_2_1_2_5]:  ./resource/service_group_2_1_2_5.png
[service_group_2_2_1]:    ./resource/service_group_2_2_1.png
[service_group_2_2_2]:    ./resource/service_group_2_2_2.png
[service_group_2_2_3]:    ./resource/service_group_2_2_3.png
[service_group_2_2_4]:    ./resource/service_group_2_2_4.png
[service_group_2_2_5]:    ./resource/service_group_2_2_5.png
[service_group_2_2_6]:    ./resource/service_group_2_2_6.png
[service_group_2_3_1]:    ./resource/service_group_2_3_1.png
[service_group_2_3_2]:    ./resource/service_group_2_3_2.png
[service_group_2_3_3]:    ./resource/service_group_2_3_3.png
[service_group_2_3_4]:    ./resource/service_group_2_3_4.png
[service_group_2_3_5]:    ./resource/service_group_2_3_5.png
[service_group_2_3_6]:    ./resource/service_group_2_3_6.png
[service_group_3_1_1_1]:  ./resource/service_group_3_1_1_1.png
[service_group_3_1_1_2]:  ./resource/service_group_3_1_1_2.png
[service_group_3_1_1_3]:  ./resource/service_group_3_1_1_3.png
[service_group_3_1_1_4]:  ./resource/service_group_3_1_1_4.png
[service_group_3_1_1_5]:  ./resource/service_group_3_1_1_5.png
[service_group_3_1_2_1]:  ./resource/service_group_3_1_2_1.png
[service_group_3_1_2_2]:  ./resource/service_group_3_1_2_2.png
[service_group_3_1_2_3]:  ./resource/service_group_3_1_2_3.png
[service_group_3_1_2_4]:  ./resource/service_group_3_1_2_4.png
[service_group_3_1_2_5]:  ./resource/service_group_3_1_2_5.png
[service_group_3_1_3_1]:  ./resource/service_group_3_1_3_1.png
[service_group_3_1_3_2]:  ./resource/service_group_3_1_3_2.png
[service_group_3_1_3_3]:  ./resource/service_group_3_1_3_3.png
[service_group_3_1_3_4]:  ./resource/service_group_3_1_3_4.png
[service_group_3_2_1]:    ./resource/service_group_3_2_1.png
[service_group_3_2_2]:    ./resource/service_group_3_2_2.png
[service_group_3_2_3]:    ./resource/service_group_3_2_3.png
[service_group_4_1_1]:    ./resource/service_group_4_1_1.png
[service_group_4_1_2]:    ./resource/service_group_4_1_2.png
[service_group_4_2_1]:    ./resource/service_group_4_2_1.png
[service_group_4_2_2]:    ./resource/service_group_4_2_2.png
[service_group_4_3_1]:    ./resource/service_group_4_3_1.png
[service_group_4_3_2]:    ./resource/service_group_4_3_2.png
[service_group_4_4_1_1]:  ./resource/service_group_4_4_1_1.png
[service_group_4_4_1_2]:  ./resource/service_group_4_4_1_2.png
[service_group_4_4_2_1]:  ./resource/service_group_4_4_2_1.png
[service_group_4_4_2_2]:  ./resource/service_group_4_4_2_2.png
[service_group_4_4_3_1]:  ./resource/service_group_4_4_3_1.png
[service_group_4_4_3_2]:  ./resource/service_group_4_4_3_2.png
[service_group_4_4_3_3]:  ./resource/service_group_4_4_3_3.png
