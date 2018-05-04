---
service : portal-admin
title   : Admin Service Portal
ko : true
...

<!-- TOC -->



# Admin Service Portal

서비스 플랫폼을 사용 중인 회사들의 정보를 확인할 수 있습니다.

--------------------------------------------------------------------------------



## 고객사 관리

>   Admin Service Portal - *고객사관리*

전체 고객사의 Summary 정보 및 고객사 리스트 정보를 확인 할 수 있습니다.

![][customer_customer01]

>   Admin Service Portal - 고객사관리 - *요약정보*

전체 Activated 고객사 수, Deactivated 고객사 수, Activated User 수, Deactivated User 수 Instance(EC2, VM, IDC-Server) 수 및 총 유저 수 정보를 제공합니다.

![][customer_customer_summary]

1.	Activated 고객사 : 조회 시점 기준 Activated 고객사 수
2.	Deactivated 고객사 : 조회 시점 기준 Deactivated 고객사 수
3.	Actiavted User : 조회 시점 기준 Activated User 수
4.	Deactivated User : 조회 시점 기준 Deactivated User 수
5.	전체 고객사 Instance 및 Account 관리 개수 : 조회 시점 기준 AWS-EC2, AZURE-VM, IDC-SERVER 자원의 개수 및 Account 수
6.	전체 고객사 USER : 전체 고객사 유저 수

>   Admin Service Portal - 고객사관리 - *고객사 목록*

고객사명, User 수, 활성화 여부 및 유/무료 상태, Account 및 자원 정보, 서비스 이용 상태를 제공합니다.
또한 Filter 및 검색 기능으로 원하는 조건의 고객사를 조회 할 수 있습니다.

![][customer_customer_list]

목록의 회사명을 클릭하여 상세화면으로 이동할 수 있습니다.

### 회사정보

>   Admin Service Portal - 고객사 관리 - 상세화면 - *회사정보*

#### 회사 정보

1.  해당 회사의 기본정보를 조회 및 수정할 수 있습니다.
    ![][customer_company01]

    -   Service Status : 서비스 이용 상태를 나타냅니다. Paid, Free, None, Trial 상태가 있으며 Trial일 경우 남은 날짜와 Trial 이용 기간을 표시합니다.
    -   취소 : COMPANY 탭의 모든 수정 내용이 변경 취소 됩니다.





#### 고객사 담당자

해당 고객사를 관리할 MSP의 사용자를 등록합니다.

![][customer_company02]

1.  \[Add User\] 버튼을 클릭합니다.
    ![][customer_company01]

2.  원하는 사용자를 선택후 저장합니다.
    ![][customer_company02]

    Sales Manager, System Engineer Manager 는 중복 등록 가능합니다.





### 서비스사용정보

>   Admin Service Portal - 고객사 관리 - 상세화면 - *서비스사용정보*

고객사의 서비스별 사용유무를 설정할 수 있습니다. 특정 서비스의 경우 사용자수와 기간을 선택하여 요금결제방법을 등록할 수 있습니다.

![][customer_company03]


### 클라우드계정관리

>   Admin Service Portal - 고객사 관리 - 상세화면 - *클라우드계정관리*

고객사의 클라우드 계정을 대신 등록할 수 있습니다.
클라우드 서비스의 계정 연동으로 클라우드 서비스에서 이용하고 있는 자원의 현황과 발생 비용을 확인할 수 있습니다.
클라우드 계정 관리 메뉴에서는 사용하고 있는 클라우드 서비스들의 계정을 등록할 수 있는 기능을 제공합니다.
Asset Management, Metering 서비스를 사용하기 위해서는 반드시 클라우드 계정 등록이 필요합니다.
각 서비스에 따른 필수 입력 항목은 벤더 별 입력 항목을 참고해 주세요.

**새로운 계정의 추가 후 데이터의 적재를 위해 조금의 시간이 소요될 수 있으며, 이 과정 중에는 Asset Management/Metering 에서 데이터를 가져오지 못할 수 있습니다.**




#### 벤더 별 서비스 이용을 위한 필수 입력 항목

##### Amazon Web Service

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



#### Amazon Web Service 계정 등록

AWS 에서 이용 중인 자원의 현황, 비용을 확인하기 위해 AWS 계정을 등록합니다.

1.  좌측의 벤더 목록에서 AWS 선택합니다.
    등록된 AWS 계정들이 목록에 표시됩니다.
    ![][customer_cloud01]

2.  \[계정 추가\] 버튼을 클릭합니다.
    ![][customer_cloud02]

3.  추가할 계정을 위한 새로운 행이 표시됩니다.
    여기에 새롭게 추가할 계정 정보를 입력합니다.
    ![][customer_cloud03]

4.  \[확인\] 버튼을 클릭해 입력한 내용을 저장합니다.
    ![][customer_cloud04]

5.  Account 목록에서 새로운 계정이 추가된 것을 확인할 수 있습니다.
    ![][customer_cloud05]






### 결제정보

>   Admin Service Portal - 고객사 관리 - 상세화면 - *결제정보*

#### 결제 방법 관리

1.  입력한 결제 정보로 매달 20, 25일 또는 말일에 결제됩니다.
    ![][customer_billinginfo01]

2.  결제 방법에는 카드 결제, 무통장 입금, 계좌 이체가 있습니다. 결제 방법 선택 후 각 항목에 맞는 정보를 입력 및 저장합니다.
    ![][customer_billinginfo02]


#### 요금 담당자 및 세금계산서 정보 관리

1.  요금에 관련되어 연락할 수 있는 요금 담당자와 세금 계산서 발행 시 사용하는 정보를 관리할 수 있습니다.
    ![][customer_billinginfo03]

2.  요금 담당자 정보와 세금 계산서 정보를 입력 한 후 저장합니다.
    ![][customer_billinginfo04]






### 사용자

>   Admin Service Portal - 고객사 관리 - 상세화면 - *사용자*

#### 사용자 관리

1.  해당 고객사에 소속 된 사용자 목록을 조회 할 수 있습니다.
    ![][customer_user01]

2.  사용자 상태는 다음과 같습니다.

    +-----------------+---------------+-----------------------------------------------+
    |                 | 사용자 상태   | 비고
    +=================+===============+===============================================+
    | **Activated**   | 활성화 상태   |
    +-----------------+---------------+-----------------------------------------------+
    | **Deactivated** | 비활성화 상태 |
    +-----------------+---------------+-----------------------------------------------+
    | **Invited**     | 초대 상태     | 사용자 관리 팝업에서 가입 메일 재전송 가능
    +-----------------+---------------+-----------------------------------------------+
    | **Inactivated** | 미인증 상태   | 사용자 관리 팝업에서 인증 메일 재전송 가능
    +-----------------+---------------+-----------------------------------------------+
    | **Locked**      | 잠금 상태     | 서비스 플랫폼에서 비밀번호 재설정 필요
    +-----------------+---------------+-----------------------------------------------+


3.  사용자의 상세 정보를 조회 및 수정 할 수 있습니다.
    ![][customer_user02]


#### 사용자 초대

1.  INVITE USER를 클릭합니다.
    ![][customer_user03]

2.  사용자의 EMAIL을 입력하고 사용자가 가입 완료 후 소속될 USER GROUP을 선택합니다. 초대된 사용자에게 가입 메일이 발송됩니다.
    ![][customer_user04]

    타 회사에 소속 또는 초대된 상태의 사용자의 경우 초대할 수 없습니다.

3.  초대 취소 또는 재 초대 할 수 있습니다.
    ![][customer_user05]


### 사용자그룹관리

>   Admin Service Portal - 고객사 관리 - *사용자그룹관리*

Service Portal의 '사용자그룹관리 가이드'를 참고해주십시오.

### 권한관리

>   Admin Service Portal - 고객사 관리 - *권한관리*

Service Portal의 '권한관리 가이드'를 참고해주십시오.

### 고객사 통계

>   Admin Service Portal - 고객사 관리 - *고객사 통계*

1.  서비스에 가입한 고객사들의 통계자료를 기간별로 확인할 수 있습니다.
2.  조회기간 설정 후 Apply 버튼 클릭하여 조회할 수 있습니다.
    ![][customer_statistics01]


### 고객사 그룹 관리

>   Admin Service Portal - 고객사 관리 - *고객사 그룹 관리*

1.  관련된 고객사를 그룹 지을 수 있습니다.
2.  좌측 리스트에서 원하는 회사를 선택합니다.
    ![][customer_companygroup01]

3.  \[컴퍼니 수정\] 또는 \[컴퍼니 추가\] 버튼을 클릭합니다.
    ![][customer_companygroup02]

4.  좌측 리스트에서 관리하기를 원하는 회사를 선택 후 우측으로 이동 후 저장합니다.
    ![][customer_companygroup03]

5.  해당 회사에 고객사들이 그룹된 것을 확인할 수 있습니다.
    ![][customer_companygroup04]

6.  사용자 권한 관리 링크를 클릭하여 그룹된 고객사들의 컴퍼니 그룹 권한 관리를 할 수 있습니다.
    ![][customer_companygroup05]

7.  해당 예시는 회사 MASTER(GUIDE)가 컴퍼니 그룹 권한에서 MASTER(GUIDE),MANAGED01(GUIDE),MANAGED02(GUIDE),MANAGED03(GUIDE) 회사를 관리 할 수 있음을 의미합니다.

### 파트너사 그룹 관리

>   Admin Service Portal - 고객사 관리 - *파트너사 그룹 관리*

1.  좌측의 \[+\]버튼을 클릭하여 파트너 그룹을 생성합니다.
    ![][customer_partner01]

2.  \[컴퍼니 추가\] 또는 \[컴퍼니 수정\] 버튼을 클릭하여 파트너 그룹에 회사를 추가하거나 제거할 수 있습니다.
    ![][customer_partner02]

3.  등록된 파트너사는 Metering Admin 의 Azure 에서 확인가능합니다.
    ![][customer_partner03]


### 고객사 등록

>   Admin Service Portal - 고객사 관리 - *고객사 등록*

고객사를 직접 등록할 수 있습니다.

1.  고객사 정보를 입력합니다.
2.  입력한 admin email로 고객사의 계정이 생성됩니다.
    ![][customer_register01]







--------------------------------------------------------------------------------




## MSP 관리

>   Admin Service Portal - *MSP 관리*

전체 MSP사 수, Activated 고객사 수, Deactivated 고객사 수, Activated MSP User 현황, Deactivated MSP User 현황,Instance(EC2, VM, IDC-Server) 수 정보를 제공합니다.
![][summary01]

MSP 관리 리스트 정보 MSP사 명, MSP사가 보유한 고객사 수, 총 유저수, 활성화 여부, Account 및 자원 정보, 서비스 이용 상태를 제공합니다. 또한 Filter 및 검색 기능을 제공하여 원하는 상태의 MSP사를 따로 표시 할 수 있습니다.
![][list01]


### 기본정보

>   Admin Service Portal - MSP 관리 - 상세화면 - *기본정보*

MSP 서비스를 위한 기본 정보를 입력합니다. 인증서 정보 및 서비스 도메인을 조회할 수 있습니다.




#### 인증서 관리

1.  인증서의 비밀번호와, path, 등록일, 만료일을 입력합니다.
    ![][msp_defaultinfo02]

2.  입력 도중 변경 내용을 취소하고 싶으면 \[취소\] 버튼을 클릭하여 마지막 저장 상태로 되돌릴 수 있습니다.
    ![][msp_defaultinfo03]

3.  \[저장\] 버튼을 클릭합니다. 저장된 내용은 수정 가능 합니다.
    ![][msp_defaultinfo04]

4.  \[인증서 등록 확인\] 버튼을 클릭합니다.
    ![][msp_defaultinfo05]

5.  인증서 등록 확인 이후에는 수정할 수 없으니 재 확인후 등록해주시기 바랍니다.
    ![][msp_defaultinfo06]




#### 도메인 관리

MSP 서비스를 위한 도메인을 관리합니다. MSP 가입시 입력한 Domain과 Alias가 사용됩니다.

1.  가입시 등록한 도메인에 따라 각 서비스의 domain 예시가 보여집니다. 각 서비스 마다 사용할 도메인과 Cname을 입력합니다.
    ![][msp_defaultinfo07]

2.  \[CNAME 복사\] 버튼을 클릭하면 CName 입력칸의 내용이 클립보드에 저장됩니다.
    ![][msp_defaultinfo08]

3.  입력 도중 변경 내용을 취소하고 싶으면 \[취소\] 버튼을 클릭하여 마지막 저장 상태로 되돌릴 수 있습니다.
    ![][msp_defaultinfo09]

4.  \[저장\] 버튼을 클릭합니다. 저장된 내용은 수정 가능 합니다.
    ![][msp_defaultinfo10]

5.  \[도메인 등록 확인\] 버튼을 클릭합니다. 도메인 등록 확인 이후에는 수정할 수 없으니 재 확인후 등록해주시기 바랍니다.
    ![][msp_defaultinfo11]





### 회사정보

>   Admin Service Portal - MSP 관리 - *회사정보*

#### 회사정보

1.  해당 회사의 기본정보를 조회 및 수정할 수 있습니다.
    ![][msp_company01]

    -	Contract Status : MSP 서비스 계약 일자를 의미합니다.
    -	취소 : COMPANY 탭의 모든 수정 내용이 변경 취소 됩니다.


#### MSP담당자

해당 MSP의 영업담당자를 등록합니다.

1.  \[Add User\] 버튼을 클릭합니다.
    ![][msp_company03]

2.  원하는 사용자를 선택후 저장합니다.
    ![][msp_company04]





### 서비스사용정보

Admin Service Portal - 회사정보 관리 - *서비스사용정보*

1.  \[서비스 시작\] 버튼을 클릭하면 MSP 서비스가 시작됩니다,
    ![][msp_service01]


2.  해당 MSP가 고객사에게 제공하는 Service의 상태를 조회 할 수 있습니다. 또한 각 서비스별로 시작일과 해지일을 조회할 수 있습니다
    ![][msp_service02]






### 클라우드

>   Admin Service Portal - 회사정보 관리 - 기본정보 - *클라우드*

1.  해당 MSP가 고객사에게 제공하는 Cloud Vendor의 상태를 조회 할 수 있습니다. 또한 각 Cloud Vendor별로 시작일과 종료일을 조회할 수 있습니다.
    ![][msp_cloud01]

    -   취소 : CLOUD 탭의 모든 수정 내용이 변경 취소 됩니다.

2.  "AZURE CSP"를 선택하면 서비스 플랫폼을 통해 Azure CSP 계정을 등록할 수 있는 기능을 제공합니다.
3.  "AZURE CSP 가입 서비스"를 선택하면 서비스 플랫폼을 통해 Azure CSP에 가입할 수 있는 기능을 제공합니다.







### MSP 이용현황

>   Admin Service Portal - 회사정보 관리 - *MSP 이용현황*

1.  MSP에 소속된 고객사의 자원정보 및 유저 정보를 제공합니다.
2.  MSP에 소속된 고객사 목록을 확인 할 수 있습니다. 고객사의 유저 수, Cloud Vendor 및 자원 정보를 확인 할 수 있으며 검색기능을 제공하고 있습니다.
    ![][msp_mspusage01]






### 결제정보

>   Admin Service Portal - MSP 관리 - *결제정보*

1.  요금에 관련되어 연락할 수 있는 요금 담당자와 세금 계산서 발행 시 사용하는 정보를 관리할 수 있습니다.
    ![][msp_billinginfo03]

2.  요금 담당자 정보와 세금 계산서 정보를 입력 한 후 저장합니다.
    ![][msp_billinginfo04]







### 권한관리

>   Admin Service Portal - MSP 관리 - *권한관리*

MSP 회사마다 접근가능한 메뉴 권한을 설정할 수 있습니다.
![][msp_permission01]






### 어드민사용자

>   Admin Service Portal - MSP 관리 - *어드민사용자*

Admin Service Portal의 '어드민사용자관리 가이드'를 참고해주십시오.







### 어드민사용자그룹관리

>   Admin Service Portal - MSP 관리 - *어드민사용자그룹관리*

Admin Service Portal의 '어드민사용자관리 가이드'를 참고해주십시오.





### 사이트관리

>   Admin Service Portal - MSP 관리 - *사이트관리*





#### 홈페이지 정보 관리

>   Admin Service Portal - MSP 관리 - 사이트 관리 - *홈페이지 정보관리*

1.  홈페이지와 관련된 설정을 등록 및 수정할 수 있습니다. 홈페이지에 표시할 로고를 이미지 혹은 텍스트로 설정하고 Favicon을 설정할 수 있습니다.
    ![][msp_sitemngt02]

    -   이미지로 로고 관리하기
        ![][msp_sitemngt03]

    -   텍스트로 로고 관리하기

2.  홈페이지 Footer에 들어갈 정보를 설정합니다. 사이트별로 대표자, 주소, 전화번호 등을 등록할 수 있습니다.
    ![][msp_sitemngt04]

3.  홈페이지 Footer에 들어갈 기술지원 정보를 입력합니다.
    ![][msp_sitemngt05]






#### 고객약관

>   Admin Service Portal - MSP 관리 - 사이트 관리 - *고객약관*

1.  개인정보 및 서비스약관을 등록할 수 있습니다. 약관을 버전을 갱신하며 등록할 수 있으며 약관을 사이트에 적용할 수 있습니다. 적용된 약관은 서비스가입시에 표시됩니다.
    ![][msp_sitemngt06]






#### 화이트페이퍼

>   Admin Service Portal - MSP 관리 - 사이트 관리 - *화이트페이퍼*

1.  서비스 설명이 들어가는 Whitepaper의 이미지를 저장할 수 있습니다.
2.  각 서비스별로 이미지를 등록할 수 있으며 기본이미지를 제공합니다.
    ![][msp_sitemngt07]













--------------------------------------------------------------------------------












## CSP Operator

>   Admin Service Portal - *CSP Operator*

해당 메뉴에서는 CSP를 신청한 고객사에 대하여 CSP Operator가 확인 절차를 거칠 수 있습니다. 보류 또는 확인을 할 경우 각 대상자에게 메일이 발송됩니다.
‘어드민 사용자 관리 메뉴’에서 CSP Operator를 위한 별도의 어드민 사용자 그룹을 생성 후 사용자를 관리하는 것을 권장합니다.

CSP Operator가 확인해야 하는 CSP 신청 회사 목록을 조회할 수 있습니다.

>   Admin Service Portal - CSP Operator - *요약정보*

![][operator_summary]

1.	신청 완료 : 고객사가 CSP 신청을 완료한 상태
2.	승인 보류 : CSP operator가 승인을 보류한 상태 (입력 정보 부족 또는 오류의 경우)
3.	회사정보 확인 완료 : CSP operator가 신청 정보를 확인한 상태

>   Admin Service Portal - CSP Operator - *고객사 목록*

Filter 및 검색 기능으로 원하는 조건의 고객사를 조회할 수 있습니다.

![][operator_list]

-   목록의 회사명을 클릭하여 상세화면으로 이동할 수 있습니다.





### CSP 신청 상태

>   Admin Service Portal - CSP Operator - 상세화면 - *CSP 신청 상태*

고객사의 CSP 신청 상태를 변경할 수 있습니다.
회사 정보 확인 완료 시, 자동으로 Microsoft Partner Center에 CSP 계정을 등록하게 됩니다.

**신청 상태 변경 시 각 상태의 메일 대상자에게 메일이 발송됩니다**.

+------------------------+---------------+---------------+
| CSP 상태 구분          | 메일 수신인   | 내용
+========================+===============+===============+
| **승인 보류**          | 신청자        | 보류 사유
+------------------------+---------------+---------------+
| **회사정보 확인 완료** | CSP Operator  | CSP 신청 정보
+------------------------+---------------+---------------+
| CSP 영업 담당자        | CSP 신청 정보 |
+------------------------+---------------+---------------+




#### 신청 완료

Service Portal에서 신청을 완료한 회사에 대한 상태입니다.
    회사 정보 확인 상태에 따라 \[승인 보류\] 또는 \[회사 정보 확인 완료\] 상태로 변경할 수 있습니다.
    ![][operator_status01]

#### 승인 보류

회사 정보 확인 중 문제가 있다면 \[승인 보류\] 버튼을 클릭하여 승인을 보류할 수 있습니다.
![][operator_status02]

승인 보류시에는 반드시 보류 사유를 입력해야 합니다.
신청자에게 보류 사유를 알리는 메일이 발송되며 부족한 내용을 추가할 수 있도록 알릴 수 있습니다.
![][operator_holding01]

고객의 회사 정보가 수정됨을 확인 후 \[확인 완료\] 버튼을 클릭하여 회사정보 확인을 완료할 수 있습니다.
![][operator_status03]





#### 회사정보 확인 완료

회사 정보 확인 완료 시, 자동으로 Microsoft Partner Center에 CSP 계정을 등록하고 고객에게 등록된 CSP 계정의 정보를 발송합니다.
해당 고객사에 등록된 영업담당자에게 회사 정보 확인이 완료됐음을 메일로 알립니다.




### CSP 신청 정보

>   Admin Service Portal - CSP Operator - 상세화면 - *CSP 신청 정보*

고객사의 CSP 신청 정보를 변경할 수 있습니다.
![][operator_joininfo01]

'Azure CSP 구독 보유' 타입의 회사는 관리자 계정을 입력해야하며, 'Azure CSP 신규 신청' 타입의 회사는 관리자 게정을 입력할 필요가 없습니다.




### CSP 영업 담당자

>   Admin Service Portal - CSP Operator - 상세화면 - *CSP 영업 담당자*

해당 고객사의 CSP 영업 담당자를 지정할 수 있습니다.
**CSP 영업담당자는 CSP 영업 담당자에 권한이 있는 사용자만이 가능하므로 CSP 영업 담당자에 지정하기 전 ‘어드민 사용자 관리 메뉴’에서 해당 사용자가 CSP 영업 담당자 메뉴에 권한이 있는지 확인해주세요**.
















--------------------------------------------------------------------------------







## CSP 영업담당자

>   Admin Service Portal - *CSP 영업담당자*

해당 메뉴에서는 CSP Operator가 확인을 끝낸 CSP 신청 고객사에 대하여 확인 절차를 거칠 수 있습니다. 보류 또는 확인을 할 경우 각 대상자에게 메일이 발송됩니다.
‘어드민 사용자 관리 메뉴’에서 CSP 영업담당자를 위한 별도의 어드민 사용자 그룹을 생성 후 사용자를 관리하는 것을 권장합니다.

CSP 영업담당자가 확인해야 하는 CSP 신청 회사 목록을 조회할 수 있습니다.





>   Admin Service Portal - CSP 영업 담당자 - *요약정보*

![][sales_summary]

1.	계약정보 입력 중 : CSP operator가 신청 정보를 확인한 상태
2.	승인 보류 : CSP 영업 담당자가 승인을 보류한 상태
3.	등록 완료 : 고객사의 CSP 신청이 최종 등록된 상태





>   Admin Service Portal - CSP 영업 담당자 - *고객사 목록*

Filter 및 검색 기능으로 원하는 조건의 고객사를 조회할 수 있습니다.
![][sales_list]

목록의 회사명을 클릭하여 상세화면으로 이동할 수 있습니다.






### CSP 신청 상태

>   Admin Service Portal - CSP 영업 담당자 - 상세화면 - *CSP 신청 상태*

고객사의 CSP 신청 상태를 변경할 수 있습니다.
등록 완료 시 Metering 서비스에 대한 무료 서비스 권한을 가지게 됩니다.

<table>
    <tbody>
        <tr>
            <th>CSP 상태 구분</th>
            <th>메일 수신인</th>
            <th>내용</th>
        </tr>
        <tr>
            <td><b>승인 보류</b></td>
            <td>신청자</td>
            <td>보류 사유</td>
        </tr>
        <tr>
            <td rowspan="3"><b>등록 완료</b></td>
            <td>CSP Operator</td>
            <td>CSP 신청 정보</td>
        </tr>
        <tr>
            <td>CSP 영업 담당자</td>
            <td>CSP 신청 정보</td>
        </tr>
        <tr>
            <td>신청자</td>
            <td>Azure CSP 계정 정보</td>
        </tr>
    </tbody>
</table>





### 계약정보 입력 중

1.  CSP operator가 신청 정보를 확인한 상태입니다.
    계약정보 입력 상태에 따라 \[승인 보류\] 또는 \[등록 완료\] 상태로 변경할 수 있습니다.
    ![][sales_status01]


###  승인 보류

1.  계약정보 입력 중 문제가 있다면 \[승인 보류\] 버튼을 클릭하여 승인을 보류할 수 있습니다.
    ![][sales_status02]

2.  승인 보류시에는 반드시 보류 사유를 입력해야 합니다.
    신청자에게 보류 사유를 알리는 메일이 발송되며 부족한 내용을 추가할 수 있도록 알릴 수 있습니다.
    ![][sales_holding01]

3.  계약정보 입력 완료 후 \[등록 완료\] 버튼을 클릭하여 고객사의 CSP 등록을 완료할 수 있습니다.
    ![][sales_status03]


### 등록 완료

1.  등록 완료 시, Metering 서비스에 대한 무료 서비스 권한을 가지게 됩니다.

    <table>
        <tbody>
            <tr>
                <th></th>
                <th>메뉴</th>
                <th>사용 가능 여부</th>
            </tr>
            <tr>
                <td rowspan="5"><b>METERING</b></td>
                <td>DASHBOARD</td>
                <td>사용 가능</td>
            </tr>
            <tr>
                <td>BILLING</td>
                <td>사용 가능</td>
            </tr>
            <tr>
                <td>BUDGETING</td>
                <td>사용 가능</td>
            </tr>
            <tr>
                <td>PAYMENT &amp; DISCOUNT</td>
                <td>사용 가능</td>
            </tr>
            <tr>
                <td>REPORT</td>
                <td>사용 가능</td>
            </tr>
        </tbody>
    </table>


2.  CSP Operator, 해당 고객사에 등록된 영업담당자, 신청자에게 등록이 완료됐음을 메일로 알립니다.





### CSP 신청 정보

>   Admin Service Portal - CSP 영업 담당자 - 상세화면 - *CSP 신청 정보*

고객사의 CSP 신청 정보를 변경할 수 있습니다.
![][sales_joininfo01]

'Azure CSP 구독 보유' 타입의 회사는 관리자 계정을 입력 해야하며, 'Azure CSP 신규 신청' 타입의 회사는 관리자 계정을 입력할 필요가 없습니다.




### CSP 영업 담당자

>   Admin Service Portal - CSP 영업 담당자 - 상세화면 - *CSP 영업 담당자*

해당 고객사의 CSP 영업 담당자를 지정할 수 있습니다.

**CSP 영업담당자는 CSP 영업 담당자에 권한이 있는 사용자만이 가능하므로 CSP 영업 담당자에 지정하기 전 ‘어드민 사용자 관리 메뉴’에서 해당 사용자가 CSP 영업 담당자 메뉴에 권한이 있는지 확인해주세요**.













--------------------------------------------------------------------------------














## 회사정보 관리

>   Admin Service Portal - *회사정보 관리*

회사의 고객사 수, 고객사 유저 수, 자원정보(EC2, VM, IDC-Server) 및 Account정보를 제공하고 현재 이용하고 있는 서비스를 카드 형태의 리스트로 제공합니다.
![][company_summary01]




### 기본정보 / 기본정보

>   Admin Service Portal - 고객사 관리 - 기본정보 - *기본정보*





#### 인증서 관리

MSP 서비스를 위한 기본 정보를 입력합니다. 인증서 정보 및 서비스 도메인을 조회할 수 있습니다.

1.  인증서의 비밀번호와, path, 등록일, 만료일을 입력합니다.
    ![][company_basicinfo02]

2.  입력 도중 변경 내용을 취소하고 싶으면 \[취소\] 버튼을 클릭하여 마지막 저장 상태로 되돌릴 수 있습니다.
    ![][company_basicinfo03]

3.  \[저장\] 버튼을 클릭합니다. 저장된 내용은 수정 가능 합니다.
    ![][company_basicinfo04]

4.  \[인증서 등록 확인\] 버튼을 클릭합니다.
    ![][company_basicinfo05]

5.  인증서 등록 확인 이후에는 수정할 수 없으니 재 확인후 등록해주시기 바랍니다.
    ![][company_basicinfo06]





#### 도메인 관리

MSP 서비스를 위한 도메인을 관리합니다. MSP 가입시 입력한 Domain과 Alias가 사용됩니다.

1.  가입시 등록한 도메인에 따라 각 서비스의 domain 예시가 보여집니다. 각 서비스 마다 사용할 도메인과 Cname을 입력합니다.
    ![][company_basicinfo07]

2.  \[CNAME 복사\] 버튼을 클릭하면 CName 입력칸의 내용이 클립보드에 저장됩니다.
    ![][company_basicinfo08]

3.  입력 도중 변경 내용을 취소하고 싶으면 \[취소\] 버튼을 클릭하여 마지막 저장 상태로 되돌릴 수 있습니다.
    ![][company_basicinfo09]

4.  \[저장\] 버튼을 클릭합니다. 저장된 내용은 수정 가능 합니다.
    ![][company_basicinfo10]

5.  \[도메인 등록 확인\] 버튼을 클릭합니다. 도메인 등록 확인 이후에는 수정할 수 없으니 재 확인후 등록해주시기 바랍니다.
    ![][company_basicinfo11]






### 기본정보 - 회사정보

>   Admin Service Portal - 고객사 관리 - 기본정보 - *회사정보*

해당 회사의 기본정보를 조회 및 수정할 수 있습니다.
![][company_company01]

 -  Contract Status : MSP 서비스 계약 일자를 의미합니다. 
 -  취소 : COMPANY 탭의 모든 수정 내용이 변경 취소 됩니다.


### 기본정보 - 서비스사용정보

>   Admin Service Portal - 회사정보 관리 - 기본정보 - *서비스사용정보*

로그인한 User의 소속 MSP가 고객사에게 제공하는 Service의 상태를 조회 할 수 있습니다. 또한 각 서비스별로 시작일과 해지일을 조회할 수 있습니다
![][company_service01]






### 기본정보 - 클라우드

>   Admin Service Portal - 회사정보 관리 - 기본정보 - *클라우드*

로그인한 User의 소속 MSP가 고객사에게 제공하는 Cloud Vendor의 상태를 조회 할 수 있습니다. 또한 각 Cloud Vendor별로 시작일과 종료일을 조회할 수 있습니다.
![][company_cloud01]










### 기본정보 - 결제정보

>   Admin Service Portal - 회사정보 관리 - 기본정보 - *결제정보*

1.  요금에 관련되어 연락할 수 있는 요금 담당자와 세금 계산서 발행 시 사용하는 정보를 관리할 수 있습니다.
    ![][company_billinginfo01]

2.  요금 담당자 정보와 세금 계산서 정보를 입력 한 후 저장합니다.
    ![][company_billinginfo02]








### 사이트관리 - 홈페이지 정보 관리

>   Admin Service Portal - 회사정보 관리 - 사이트 관리 - *홈페이지 정보관리*

1.  홈페이지와 관련된 설정을 등록 및 수정할 수 있습니다. 홈페이지에 표시할 로고를 이미지 혹은 텍스트로 설정하고 Favicon을 설정할 수 있습니다.
    ![][company_sitemngt02]

    -   이미지로 로고 관리하기
        ![][company_sitemngt03]

    -   텍스트로 로고 관리하기

2.  홈페이지 Footer에 들어갈 정보를 설정합니다. 사이트별로 대표자, 주소, 전화번호 등을 등록할 수 있습니다.
    ![][company_sitemngt04]

3.  홈페이지 Footer에 들어갈 기술지원 정보를 입력합니다.
    ![][company_sitemngt05]






### 사이트관리 - 고객약관

>   Admin Service Portal - 회사정보 관리 - 사이트 관리 - *고객약관*

개인정보 및 서비스약관을 등록할 수 있습니다. 약관을 버전을 갱신하며 등록할 수 있으며 약관을 사이트에 적용할 수 있습니다. 적용된 약관은 서비스가입시에 표시됩니다.
![][company_sitemngt06]


### 사이트관리 - 화이트페이퍼

>   Admin Service Portal - 회사정보 관리 - 사이트 관리 - *화이트페이퍼*

1.  서비스 설명이 들어가는 Whitepaper의 이미지를 저장할 수 있습니다.

2.  각 서비스별로 이미지를 등록할 수 있으며 기본이미지를 제공합니다.
    ![][company_sitemngt07]















--------------------------------------------------------------------------------


















## 어드민 사용자 관리

>   Admin Service Portal - *어드민 사용자 관리*

어드민 사용자 등록 수정 및 권한을 관리할 수 있습니다.




### 어드민 권한 등록

>   Admin Service Portal - 어드민 사용자 관리 - *어드민 사용자 목록*




#### 어드민 권한 등록하기

1.  Admin User 목록에서 \[Admin 권한 등록\]을 클릭합니다.
    ![][adminuser_usergroup02]

2.  \[Admin 권한 등록\] 팝업이 표시됩니다.
    ![][adminuser_userlist03]

    왼쪽 '전체 사용자'에는 MSP 회사에 소속된 Admin 권한이 없는 활성화된 사용자가 보입니다. 오른쪽에는 Admin Site에 접근 가능한 어드민 사용자가 보입니다.

3.  왼쪽 ‘전체 사용자에서’ 어드민으로 등록할 사용자를 선택합니다.

4.  오른쪽 상단의 어드민 사용자 그룹 목록에서 선택한 사용자가 소속될 어드민 그룹을 선택 후 추가 버튼을 클릭합니다.
    ![][adminuser_userlist04]




#### 사용자 상세정보 수정

1.  User의 기본 정보를 조회 및 수정 할 수 있습니다.
2.  User의 Admin 권한을 해제할 수 있습니다.
    ![][adminuser_userlist05]




### 어드민 사용자그룹 & 권한

>   Admin Service Portal - 어드민 사용자 관리 - *어드민 사용자 그룹 수정*


#### 어드민 권한 등록

1.  Admin User 목록에서 \[Admin 권한 등록\]을 클릭합니다.
    ![][adminuser_usergroup02]

2.  \[Admin 권한 등록\] 팝업이 표시됩니다.
    ![][adminuser_userlist03]

    왼쪽 '전체 사용자'에는 MSP 회사에 소속된 Admin 권한이 없는 활성화된 사용자가 보입니다. 오른쪽에는 어드민 사이트에 접근 가능한 어드민 사용자가 보입니다.

3.  왼쪽 ‘전체 사용자에서’ 어드민으로 등록할 사용자를 선택합니다.
    ![][adminuser_userlist04]

4.  오른쪽 상단의 어드민 사용자 그룹 목록에서 선택한 사용자가 소속될 어드민 그룹을 선택 후 추가 버튼을 클릭합니다.




#### 어드민 사용자 그룹 수정

1.  \[어드민 사용자 그룹 수정\] 버튼을 클릭합니다.
    ![][adminuser_usergroup03]

2.  사용자 그룹 수정 팝업이 나타납니다.
    ![][adminuser_usergroup04]

    -   왼쪽 '전체 사용자'에는 MSP 회사에 소속된 Admin 권한이 없는 활성화된 사용자가 보입니다. 오른쪽에는 Admin Site에 접근 가능한 어드민 사용자가 보입니다.

3.  어드민 사용자를 등록하기 위해서, 왼쪽 ‘전체 사용자에서’ 어드민으로 등록할 사용자를 선택 후 추가 버튼을 클릭합니다.





#### 어드민 사용자 그룹 이동

1.  \[Move Group\] 버튼을 클릭합니다.
    ![][adminuser_usergroup05]

2.  원하는 어드민 그룹을 선택후 적용합니다.
    ![][adminuser_usergroup06]






#### 사용자 상세정보 수정

1.  User의 기본 정보를 조회 및 수정 할 수 있습니다.
2.  User의 Admin 권한을 해제할 수 있습니다.
    ![][adminuser_userlist05]














--------------------------------------------------------------------------------

















## 고객지원 

>   Admin Service Portal - *SUPPORT*

### 공지사항 관리

![][support_support01]

>   Admin Service Portal - SUPPORT - *공지사항 관리*

### 목록 조회

1.  공지사항 등록
    왼쪽 상단의 카드포켓을 클릭하여 새로운 공지사항을 추가할 수 있습니다.

2.  공지사항 내용 보기
    조회된 공지사항을 클릭하여 상새 내용 조회가 가능합니다.


### 내용 보기

목록에서 선택한 공지사항의 내용을 조회하는 화면입니다. 제목, 등록일, 조회수, 상세 내용 확인 및 첨부파일 다운로드 기능을 지원합니다.
![][support_support02]

1.  공지사항 삭제
    조회된 공지사항을 삭제합니다.

2.  공지사항 수정
    조회된 공지사항을 수정하는 화면으로 이동합니다.

3.  목록보기
    목록 조회 화면으로 이동합니다.


### 등록/수정

새로운 공지사항을 등록하거나, 등록된 공지사항을 수정합니다.
![][support_support03]

1.  파일 첨부
    게시될 공지사항에 첨부파일을 추가합니다. 첨부파일은 문서, 그림파일 등 허용된 확장자를 가진 파일만 첨부 가능합니다.

2.  미리보기
    미리보기 화면을 통해 등록 후 게시물의 형태를 확인 할 수 있습니다.

3.  등록 취소
    공지사항 등록 / 수정 작업을 취소하고 목록 조회 화면으로 이동합니다.

4.  등록/수정
    공지사항 등록/수정 작업을 완료하고 등록/수정된 게시물의 상세 내용 보기 화면으로 이동합니다.










--------------------------------------------------------------------------------








## 캠페인

>   Admin Service Portal - 캠페인 - *캠페인 관리*

등록 되어있는 캠페인 리스트 정보를 확인할 수 있습니다.
![][campaign_campaign01]

캠페인명, 제목, 발송일시, 상태, 발신인, 작성자, 수신인수를 제공합니다.

-   상태 : 발송성공, 발송예약, 임시저장, 발송취소, 발송실패의 상태를 나타냅니다.
-   작성하기 : 캠페인 작성페이지로 이동할 수 있습니다.
-   목록의 상세보기 버튼을 클릭하여 상세보기 팝업을 활성화 할 수 있습니다.





### 캠페인 관리


#### 상세보기

해당 캠페인의 상세내용을 조회 및 수정, 삭제를 할 수 있습니다.

1.  상세보기 버튼을 클릭합니다.
    ![][campaign_campaign02]

2.  해당 캠페인의 상세내용을 조회 및 수정, 삭제를 할 수 있습니다.
    ![][campaign_campaign03]

    1.	삭제 : 등록된 캠페인을 삭제합니다.
    2.	수정 : 등록된 캠페인을 수정할 수 있는 화면으로 이동합니다.
    3.	확인 : 상세보기 팝업을 닫을 수 있습니다.





#### 작성하기

등록 되어있는 캠페인 리스트 정보를 확인할 수 있습니다.

1.  캠페인 메일 작성 버튼을 클릭합니다.
    ![][campaign_campaign04]


3.  캠페인 메일을 작성할 수 있습니다.
    ![][campaign_campaign05]

    1.  발신인 목록 : 발신인을 선택할 수 있는 팝업이 활성화 됩니다.
    2.	수신인 검색 : 수신인을 검색하여 선택할 수 있는 팝업이 활성화 됩니다.
    3.	발송 예약 설정 : 발송예약일시를 선택할 수 있는 팝업이 활성화 됩니다.
    4.	템플릿 불러오기 : 저장되어져 있는 템플릿을 불러와 에디터에 나타냅니다.
    5.	임시저장 : 작성된 캠페인을 임시저장합니다.
    6.	미리보기 : 작성된 캠페인을 미리보기 팝업으로 확인할 수 있습니다.
    7.	취소 : 작성중인 캠페인을 취소하고 캠페인리스트 화면으로 돌아갑니다.
    8.	보내기 : 작성된 캠페인을 발송합니다.





#### 발신인목록

등록 되어있는 발신인을 확인할 수 있습니다.

1.  발신인목록 버튼을 클릭합니다.
    ![][campaign_campaign06]


3.  발신인을 추가, 선택할 수 있습니다.
    ![][campaign_campaign07]

    1.	발신인 추가 : 입력한 발신인을 등록합니다.
    2.	취소 : 작업중인 내용을 취소하고 팝업을 종료합니다.
    3.	확인 : 선택한 발신인을 작성하기 화면에 반영하고 팝업을 종료합니다.






#### 수신인 검색

1.  수신인 검색 버튼을 클릭합니다.
    ![][campaign_campaign08]

3.  고객사 리스트를 조회하고 선택된 고객사의 사용자 리스트를 조회 할 수 있습니다.
    ![][campaign_campaign09]

    -   고객사 리스트
        1.	선택한 고객사와 총 고객사를 숫자로 한눈에 확인 가능합니다.
        2.	조회조건 : Activity Status, Service Status, 가입일
        3.	APPLY : 조회조건에 해당하는 고객사를 조회합니다.
        4.	Select All : 조회된 고객사를 전체 선택할 수 있습니다.

    -   고객사 User 리스트
        1.	선택한 고객사에 속해있는 사용자를 조회합니다.
        2.	조회조건 : Company, User group
        3.	APPLY : 조회조건으로 사용자를 조회합니다.
        4.	검색어 입력 : 조회된 사용자 리스트에서 입력한 검색어로 재 검색 합니다.
        5.	취소 : 작업중인 내용을 취소하고 팝업을 종료합니다.
        6.	확인 : 선택한 고객사 사용자를 작성하기 화면에 반영하고 팝업을 종료합니다.


#### 발송예약 설정

1.  발송예약 설정 버튼을 클릭합니다.
    ![][campaign_campaign10]


3.  발송예약 시간을 설정할 수 있습니다.
    ![][campaign_campaign11]

    1.	기준시간 : 기준시간을 선택합니다.
    2.	예약시간 : 일자, 시간, 분을 선택합니다.
    3.	취소 : 작업중인 내용을 취소하고 팝업을 종료합니다.
    4.	확인 : 작업한 내용을 작성하기 화면에 반영하고 팝업을 종료합니다.


#### 미리보기

1.  미리보기 버튼을 클릭합니다.
    ![][campaign_campaign12]

3.  작성중인 캠페인을 확인할 수 있습니다.
    ![][campaign_campaign13]






### 자동메일발송 관리

>   Admin Service Portal - 캠페인 - *자동메일발송관리*

1.  메일 발송시 첨부되는 로고 및 회사명을 지정할 수 있습니다.
    ![][campaign_campaign14]

    저장 : 작업내용을 저장 합니다.

3.  파일 다이얼로그를 통해 이미지 파일을 첨부합니다.
    ![][campaign_campaign15]

    첨부파일 : 이미지 파일을 첨부합니다.

    -   첨부파일은 이미지 파일 ( jpg, gif, bmp, png) 만 첨부 가능합니다
    -   첨부파일의 용량은 5MB 이하로만 등록 가능합니다.





<!-- 이미지 모음 -->
[customer_customer01]: ./resource/customer_customer01.jpg
[customer_customer_summary]: ./resource/customer_customer_summary.jpg
[customer_customer_list]: ./resource/customer_customer_list.jpg
[customer_company01]: ./resource/customer_company01.jpg
[customer_company02]: ./resource/customer_company02.jpg
[customer_company03]: ./resource/customer_company03.jpg
[customer_company04]: ./resource/customer_company04.jpg
[customer_service02]: ./resource/customer_service02.jpg
[customer_cloud01]: ./resource/customer_cloud01.jpg
[customer_cloud02]: ./resource/customer_cloud02.jpg
[customer_cloud03]: ./resource/customer_cloud03.jpg
[customer_cloud04]: ./resource/customer_cloud04.jpg
[customer_cloud05]: ./resource/customer_cloud05.jpg
[customer_billinginfo01]: ./resource/customer_billinginfo01.jpg
[customer_billinginfo02]: ./resource/customer_billinginfo02.jpg
[customer_billinginfo03]: ./resource/customer_billinginfo03.jpg
[customer_billinginfo04]: ./resource/customer_billinginfo04.jpg
[customer_user01]: ./resource/customer_user01.jpg
[customer_user02]: ./resource/customer_user02.jpg
[customer_user03]: ./resource/customer_user03.jpg
[customer_user04]: ./resource/customer_user04.jpg
[customer_user05]: ./resource/customer_user05.jpg
[customer_statistics01]: ./resource/customer_statistics01.jpg
[customer_companygroup01]: ./resource/customer_companygroup01.jpg
[customer_companygroup02]: ./resource/customer_companygroup02.jpg
[customer_companygroup03]: ./resource/customer_companygroup03.jpg
[customer_companygroup04]: ./resource/customer_companygroup04.jpg
[customer_companygroup05]: ./resource/customer_companygroup05.jpg
[customer_partner01]: ./resource/customer_partner01.jpg
[customer_partner02]: ./resource/customer_partner02.jpg
[customer_partner03]: ./resource/customer_partner03.jpg
[customer_register01]: ./resource/customer_register01.jpg


[msp_summary01]: ./resource/msp_summary01.jpg
[msp_list01]: ./resource/msp_list01.jpg
[msp_defaultinfo02]: ./resource/msp_defaultinfo02.jpg
[msp_defaultinfo03]: ./resource/msp_defaultinfo03.jpg
[msp_defaultinfo04]: ./resource/msp_defaultinfo04.jpg
[msp_defaultinfo05]: ./resource/msp_defaultinfo05.jpg
[msp_defaultinfo06]: ./resource/msp_defaultinfo06.jpg
[msp_defaultinfo07]: ./resource/msp_defaultinfo07.jpg
[msp_defaultinfo08]: ./resource/msp_defaultinfo08.jpg
[msp_defaultinfo09]: ./resource/msp_defaultinfo09.jpg
[msp_defaultinfo10]: ./resource/msp_defaultinfo10.jpg
[msp_defaultinfo11]: ./resource/msp_defaultinfo11.jpg
[msp_company01]: ./resource/msp_company01.jpg
[msp_company03]: ./resource/msp_company03.jpg
[msp_company04]: ./resource/msp_company04.jpg
[msp_service01]: ./resource/msp_service01.jpg
[msp_service02]: ./resource/msp_service02.jpg
[msp_cloud01]: ./resource/msp_cloud01.jpg
[msp_mspusage01]: ./resource/msp_mspusage01.jpg
[msp_billinginfo03]: ./resource/msp_billinginfo03.jpg
[msp_billinginfo04]: ./resource/msp_billinginfo04.jpg
[msp_permission01]: ./resource/msp_permission01.jpg
[msp_sitemngt02]: ./resource/msp_sitemngt02.jpg
[msp_sitemngt03]: ./resource/msp_sitemngt03.jpg
[msp_sitemngt04]: ./resource/msp_sitemngt04.jpg
[msp_sitemngt05]: ./resource/msp_sitemngt05.jpg
[msp_sitemngt06]: ./resource/msp_sitemngt06.jpg
[msp_sitemngt07]: ./resource/msp_sitemngt07.jpg

[operator_summary]: ./resource/operator_summary.jpg
[operator_list]: ./resource/operator_list.jpg
[operator_status01]: ./resource/operator_status01.jpg
[operator_status02]: ./resource/operator_status02.jpg
[operator_holding01]: ./resource/operator_holding01.jpg
[operator_status03]: ./resource/operator_status03.jpg
[operator_joininfo01]: ./resource/operator_joininfo01.jpg

[sales_summary]: ./resource/sales_summary.jpg
[sales_list]: ./resource/sales_list.jpg
[sales_status01]: ./resource/sales_status01.jpg
[sales_status02]: ./resource/sales_status02.jpg
[sales_holding01]: ./resource/sales_holding01.jpg
[sales_status03]: ./resource/sales_status03.jpg
[sales_joininfo01]: ./resource/sales_joininfo01.jpg

[company_summary01]: ./resource/company_summary01.jpg
[company_basicinfo02]: ./resource/company_basicinfo02.jpg
[company_basicinfo03]: ./resource/company_basicinfo03.jpg
[company_basicinfo04]: ./resource/company_basicinfo04.jpg
[company_basicinfo05]: ./resource/company_basicinfo05.jpg
[company_basicinfo06]: ./resource/company_basicinfo06.jpg
[company_basicinfo07]: ./resource/company_basicinfo07.jpg
[company_basicinfo08]: ./resource/company_basicinfo08.jpg
[company_basicinfo09]: ./resource/company_basicinfo09.jpg
[company_basicinfo10]: ./resource/company_basicinfo10.jpg
[company_basicinfo11]: ./resource/company_basicinfo11.jpg
[company_company01]: ./resource/company_company01.jpg
[company_service01]: ./resource/company_service01.jpg
[company_cloud01]: ./resource/company_cloud01.jpg
[company_billinginfo01]: ./resource/company_billinginfo01.jpg
[company_billinginfo02]: ./resource/company_billinginfo02.jpg
[company_sitemngt02]: ./resource/company_sitemngt02.jpg
[company_sitemngt03]: ./resource/company_sitemngt03.jpg
[company_sitemngt04]: ./resource/company_sitemngt04.jpg
[company_sitemngt05]: ./resource/company_sitemngt05.jpg
[company_sitemngt06]: ./resource/company_sitemngt06.jpg
[company_sitemngt07]: ./resource/company_sitemngt07.jpg

[adminuser_usergroup02]: ./resource/adminuser_usergroup02.jpg
[adminuser_userlist03]: ./resource/adminuser_userlist03.jpg
[adminuser_userlist04]: ./resource/adminuser_userlist04.jpg
[adminuser_userlist05]: ./resource/adminuser_userlist05.jpg
[adminuser_usergroup02]: ./resource/adminuser_usergroup02.jpg
[adminuser_userlist03]: ./resource/adminuser_userlist03.jpg
[adminuser_userlist04]: ./resource/adminuser_userlist04.jpg
[adminuser_usergroup03]: ./resource/adminuser_usergroup03.jpg
[adminuser_usergroup04]: ./resource/adminuser_usergroup04.jpg
[adminuser_usergroup05]: ./resource/adminuser_usergroup05.jpg
[adminuser_usergroup06]: ./resource/adminuser_usergroup06.jpg
[adminuser_userlist05]: ./resource/adminuser_userlist05.jpg

[support_support01]: ./resource/support_support01.jpg
[support_support02]: ./resource/support_support02.jpg
[support_support03]: ./resource/support_support03.jpg

[campaign_campaign01]: ./resource/campaign_campaign01.jpg
[campaign_campaign02]: ./resource/campaign_campaign02.jpg
[campaign_campaign03]: ./resource/campaign_campaign03.jpg
[campaign_campaign04]: ./resource/campaign_campaign04.jpg
[campaign_campaign05]: ./resource/campaign_campaign05.jpg
[campaign_campaign06]: ./resource/campaign_campaign06.jpg
[campaign_campaign07]: ./resource/campaign_campaign07.jpg
[campaign_campaign08]: ./resource/campaign_campaign08.jpg
[campaign_campaign09]: ./resource/campaign_campaign09.jpg
[campaign_campaign10]: ./resource/campaign_campaign10.jpg
[campaign_campaign11]: ./resource/campaign_campaign11.jpg
[campaign_campaign12]: ./resource/campaign_campaign12.jpg
[campaign_campaign13]: ./resource/campaign_campaign13.jpg
[campaign_campaign14]: ./resource/campaign_campaign14.jpg
[campaign_campaign15]: ./resource/campaign_campaign15.jpg

