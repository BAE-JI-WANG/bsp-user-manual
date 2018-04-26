---
service : asset 
title   : Asset 
ko : true
multiLang: 
    - ko : false 
    - en : true 
    - zh : true 
...

<!-- TOC -->




# Asset Management
현재 운영 중인 Multi Cloud, Hybrid Infra 환경에 대한 자원 현황과 이력을 확인할 수 있습니다. Asset Management 서비스는 5개의 메뉴를 제공합니다.

--------------------------------------------------------------------------------



## Dashboard

현재 운영 중인 자원들의 Usage 와 Performance의 요약 정보를 확인할 수 있습니다.

>	Asset Management > *Dashboard*

![][asset_dashboard_1]


### Cloud Vendor

현재 사용 중인 Cloud Vendor들과 각 Vendor의 Account 정보가 표시됩니다. 
Cloud Vendor와 Account 를 선택 시, Dashboard에 해당 Vendor, Account 의 자원 현황이 표시됩니다.

### Total Summary

선택한 Vendor, Account 의 Server,DB 수량을 표시합니다.
On-demand 항목과 Auto Scalling Instance의 숫자를 구분해 확인할 수 있으며, 상태별 수량도 확인할 수 있습니다.



### Resources

선택한 Cloud Vendor에서 사용 중인 모든 Product 들을 목록으로 표시하고, 각 Product 들의 사용 수량을 확인할 수 있습니다.


### Server

사용 중인 Server 들의 Usage, Performance 정보를 트렌드 차트로 확인할 수 있습니다.

1.  Server/Usage - Total Instance : 최근 7일간의 Server 사용 수량과 이전 주의 Server 사용 수량을 트렌드 차트로 제공합니다.
2.  Server/Performance - Total CPU avg. utiliz : 최근 7일간의 평균 CPU 사용률과 이전 주의 평균 CPU 사용률을 트렌드 챠트로 제공합니다.
3.  Server/Performance - CPU Utilization with Threshold : Threshold를 설정해 최근 7일간, 이전 주의 설정한 Threshold에 초과/미달하는 CPU 사용률을 보이는 Instance들을 확인할 수 있습니다.
4.  Server/Performance - Memory Utilization with Threshold : Threshold를 설정해 최근 7일간, 이전 주의 설정한 Threshold에 초과/미달하는 Memory 사용률을 보이는 Instance들을 확인할 수 있습니다.
5.  Server/Performance - Disk Utilization with Threshold : Threshold를 설정해 최근 7일간, 이전 주의 설정한 Threshold에 초과/미달하는 Disk 사용률을 보이는 Instance들을 확인할 수 있습니다.


### Database & Storage

사용 중인 Database & Storage 들의 Usage, Performance 정보를 트렌드 차트로 확인할 수 있습니다.

1.  Database/Usage - Total Instance : 최근 7일간의 DB 사용 수량과 이전 주의 DB 사용 수량을 트렌드 차트로 제공합니다.
2.  Storage(S3)/Usage - Total Instance : 최근 7일간의 S3 사용 수량과 이전 주의 S3 사용 수량을 트렌드 차트로 제공합니다.
3.  Disk/Usage - Total Instance : 최근 7일간의 Disk 사용 수량과 이전 주의 Disk 사용 수량을 트렌드 차트로 제공합니다.
4.  Database/Performance - CPU Utilization with Threshold : Threshold를 설정해 최근 7일간, 이전 주의 설정한 Threshold에 초과/미달하는 CPU 사용률을 보이는 Instance들을 확인할 수 있습니다.
5.  Database/Performance - Read iops / Write iops Average Threshold : Threshold를 설정해 최근 7일간, 이전 주의 설정한 Threshold에 초과/미달하는 Read/Write iops를 보이는 Instance들을 확인할 수 있습니다.



### Network

사용 중인 Network 자원들의 Usage 정보를 트렌드 차트로 확인할 수 있습니다.

1.  Private Network/Usage : 최근 7일간의 Private Network 자원들의 사용 수량과 이전 주의 Private Network 자원들의 사용 수량을 트렌드 차트로 제공합니다. 트렌드 차트 하단에 세부 자원들의 목록과 수량이 표시되며, 각 자원을 선택해 트렌드 차트를 확인할 수 있습니다.
2.  Network/Usage : 최근 7일간의 Network 자원들의 사용 수량과 이전 주의 Network 자원들의 사용 수량을 트렌드 차트로 제공합니다. 트렌드 차트 하단에 세부 자원들의 목록과 수량이 표시되며, 각 자원을 선택해 트렌드 차트를 확인할 수 있습니다.



--------------------------------------------------------------------------------



## Service Group

Multi Cloud, Hybrid 환경의 모든 자원들을 실제 운영하고 있는 서비스 기준으로 그룹핑할 수 있는 서비스 그룹 기능을 제공하고 있습니다. 
서비스 그룹 기능을 통해 자원들을 재 그룹핑함으로써 운영하고 있는 서비스들의 자원 사용량, 발생 비용, 상태를 확인할 수 있습니다. 

>	Asset Management > *Service Group*

![][asset_service_group_1]

### Cloud Vendor

현재 사용 중인 Cloud Vendor들과 각 Vendor의 Account 정보가 표시됩니다. 
Cloud Vendor와 Account 를 선택 시, 서비스 그룹에 선택한 Vendor, Account 에 해당하는 자원들만이 표시됩니다.

### 서비스 그룹 관리

서비스 그룹을 생성하고 편집할 수 있는 서비스 그룹 관리 화면으로 이동할 수 있습니다. 
서비스 그룹의 관리는 서비스 그룹 관리 문서를 참고해 주세요.

### 서비스 그룹 카드

서비스 그룹에서 사용하고 있는 자원들의 수량과 종류, 발생 비용을 확인할 수 있습니다.

1.  서비스 그룹 이름 : 설정한 서비스 그룹의 이름이 표시됩니다.
2.  Product : 서비스 그룹 내 Product들의 전체 수량과 Vendor 별 수량이 표시됩니다.
3.  당월 합계 : 서비스 그룹 내 자원 사용 비용의 합계를 표시합니다.
4.  Product 카드 : 서비스 그룹 내 포함된 자원의 이름과 해당 자원의 사용으로 발생한 비용을 표시합니다.


--------------------------------------------------------------------------------


## Usage

Vendor 별 자원 사용 현황과 사용 이력을 확인할 수 있습니다.

>	Asset Management > *Usage*


### 현재 보기 

>	Asset Management > Usage > *현재 보기*

Vendor 별 자원 사용 현황을 확인할 수 있습니다.
![][asset_usage_current]

아래 자원들의 Status 별, Region 별, Type 별 수량에 대한 파이 차트를 제공합니다.
그리고 사용 중인 자원들을 목록으로 확인할 수 있으며, 목록에서 자원들의 상세 정보를 확인할 수 있습니다.

#### Amazon Web Service

AWS의 아래 자원들에 대한 자원 사용 현황을 확인할 수 있습니다.

`AMIs`, `Auto Scailing Groups`, `Auto Scailing Instances`, `EBS`, `EC2`, `EIP`, `Internet Gateways`, `Lamda`, `Launch Configurations`, `Load Balancer`, `Network ACLs`, `Network Interface`, `RDS`, `Route Tables`, `S3`, `Security Groups`, `Snapshot`, `Subnets`, `VPC`




#### Microsoft Azure
Azure의 아래 자원들에 대한 자원 사용 현황을 확인할 수 있습니다.
`CDN`, `Cloud Service`, `Database`, `Virtual Network Gateway`, `Network Security Group`, `Storage`, `Virtual Network Subnet`, `Traffic Manager`, `Virtual Network`, `Virtual Machine`




### 이력보기 

>	Asset Management > Usage > *이력 보기*

Vendor 별 자원 사용 이력을 확인할 수 있습니다.

![][asset_usage_history] 

아래 자원들의 시간/일/월별 자원 사용 이력을 트렌드 차트로 제공하며, 목록으로 상세 내역을 제공합니다.


#### Amazon Web Service
AWS의 아래 자원들에 대한 자원 사용 이력을 확인할 수 있습니다.

`EC2`, `EBS`, `RDS`




#### Microsoft Azure
Azure의 아래 자원들에 대한 자원 사용 이력을 확인할 수 있습니다.

`Database`, `Storage`, `Virtual Machine`




--------------------------------------------------------------------------------





## Performance

사용 중인 자원들의 Performance 현황과 이력을 확인할 수 있습니다.

>	Asset Management > *Performance*



### 1. Current
>	Asset Management > Performance > *현재 보기*

사용 중인 자원들의 Performance 현황을 확인할 수 있습니다.

![][asset_performance_current]




#### Amazon Web Service

AWS의 아래 자원들에 대한 Performance 현황을 확인할 수 있습니다.

> 셀 병합이 되지 않아 raw html table을 그대로 사용한다.



#### Microsoft Azure
Azure의 아래 자원들에 대한 Performance 현황을 확인할 수 있습니다.

<table>
    <tbody>
        <tr>
            <th>자원</th>
            <th>표시 항목</th>
            <th>비고</th>
        </tr>
        <tr>
            <td rowspan="4">EC2</td>
            <td>Resource Info</td>
            <td></td>
        </tr>
        <tr>
            <td>CPU Utilization (%)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Memory Utilization (%)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Disk Space Utilization (%)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td rowspan="5">EBS</td>
            <td>Resource Info</td>
            <td></td>
        </tr>
        <tr>
            <td>VolumeQueue Length (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>VolumeRead IOPS (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>VolumeWrite Bytes (MB)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>VolumeWrite IOPS (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td rowspan="6">RDS</td>
            <td>Resource Info</td>
            <td></td>
        </tr>
        <tr>
            <td>CPU Utilization (%)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Freeable Memory (MB)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Free Storage Space (MB)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Read IOPS (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Write IOPS (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td rowspan="3">S3</td>
            <td>Resource Info</td>
            <td></td>
        </tr>
        <tr>
            <td>BucketSizeBytes</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>NumberOfObjects</td>
            <td>Min, Max, Avg</td>
        </tr>
    </tbody>
</table>






### History

>	Asset Management > Performance > *이력 보기*

선택한 기간의 자원 Performance 이력을 확인할 수 있습니다.

![][asset_performance_history]




#### Amazon Web Service

AWS의 아래 자원들에 대한 Performance 이력을 확인할 수 있습니다.






#### Microsoft Azure

Azure의 아래 자원들에 대한 Performance 이력을 확인할 수 있습니다.



## Intelligent Search

사용하고 있는 자원들의 관계에 기반한 Intelligent Search 기능을 제공합니다. 
선택한 기간 내 사용한 모든 자원들을 목록으로 표시하고, 이를 검색 조건으로 활용할 수 있습니다.
Intelligent Search 기능은 Usage 메뉴와 Performance 메뉴에서 사용할 수 있습니다. 
>	Asset Management > Usage > *Intelligent Search*
>	Asset Management > Performance > *Intelligent Search*


![][asset_intelligent_1]


1.  Duration : 자원 사용 이력을 확인할 기간을 선택할 수 있습니다.선택한 기간에 따라 선택 가능한 검색 조건이 변경될 수 있습니다.선택한 기간 내 사용된 자원들이 자동으로 검색 조건에 포함되어 표시됩니다.
2.  검색 조건 : Vendor, Account, Product, Service Group, Tag들이 검색 조건으로 표시됩니다. 검색 조건은 선택한 기간에 따라 동적으로 변경됩니다.검색 조건 선택 시, 해당 조건과 관계가 있는 검색 조건들만 선택 가능한 상태로 표시됩니다.

Duration과 검색 조건을 선택 후 [Apply] 버튼을 클릭하면 선택한 기간, 조건의 검색 결과가 표시됩니다.



--------------------------------------------------------------------------------




## Report

Report Template을 제공하며, 사용자가 만든 Report를 다운로드 받을 수 있는 기능을 제공합니다.

>	Asset Management > *Report*

![][asset_report]




### Report Template

아래의 3가지 Report Template을 제공합니다.

`Summary`, `Usage`, `Performance`

각각의 보고서 템플릿을 클릭하면 우측에서 아래의 메뉴가 표시됩니다.

#### Report Info

Report로 생성할 기간과 파일 형식을 선택해 Report를 다운로드 받을 수 있습니다. xls, pdf 로 다운로드 받을 수 있습니다.

#### Log

선택한 Report Template으로 생성한 Report를 다운로드 받은 이력을 표시합니다.생성한 리포트를 다시 다운로드 받을 수 있습니다.



#### Subscribe

각 User는 필요한 리포트를 등록된 이메일로 구독 할 수 있습니다. 리포트는 Summary, Usage, Performance 세 가지 유형이며 각 리포트에
대한 구독은 일간, 주간, 월간 중 선택할 수 있으며 시간을 지정 할 수 있습니다. 리포트 구독 리스트는 내가 직접 설정한 구독과 [구독 설정] 메뉴 권한이 있는 타인이 나를 구독자로 지정한 구독이 존재합니다. 내가 직접 설정한 구독리스트는 생성, 삭제, 수정은 가능하지만 [구독 설정] 메뉴에서 타인이 생성한 구독에 내가 구독자로 지정된 경우에만 조회만 가능합니다.

1.  새로운 구독 생성
    ![][asset_report_subscribe_tab_create]

    [구독명], [파일형식], [언어], [기준시간], [구독주기], [시간]을 입력/선택하여 신규 구독을 생성할 수 있습니다. 생성 시 리포트명, 주기, 언어 설정 등으로 구성된 기본 구독명이 표시됩니다.
    동일한 Report Template의 경우 동일한 주기 설정은 불가합니다.

2.  구독 수정
    ![][asset_report_subscribe_tab_edit]
    [구독명], [파일형식], [언어], [기준시간], [구독주기], [시간]을 수정할 수 있습니다. 동일한 Report Template의 경우 동일한 주기 설정은 불가합니다.




--------------------------------------------------------------------------------




## Report Subscription

Asset 및 Metering 서비스를 사용하며 Report subscription 메뉴에 대한 수정 권한이 있는 모든 고객을 대상으로 리포트 자동메일발송 기능을 제공하고 있습니다.
Report subscription에서는 리포트 구독을 생성하거나 수정 또는 삭제를 통해 관리하고 각 구독의 발송 이력 조회 및 발송되었던 파일을 다운로드 할 수 있습니다. 또한 외부 이메일 또는 원하는 이메일을 생성, 삭제하여 수신인을 관리하는 기능이 제공되는데 구독을 생성/수정 할 때 수신인을 지정 할 수 있습니다. 구독 내역에서는 과거 발송 이력을 조회 할 수 있으며 삭제한 구독의 발송 이력도 포함 됩니다. 

>	Asset Management > *Report Subscription*

### 구독리스트

>	Asset Management > *Report Subscription > <em>구독리스트*

구독은 리포트 유형별(Summary, Usage, Performance)로 관리되고 발송 주기(일간, 주간, 월간), 언어, 시간 등의 옵션을 지정하여 생성합니다.
구독리스트에서는 구독명, 주기, 수신인 정보, 최근 발송일 정보를 조회하고 ‘새로운 구독 생성’을 생성하거나 삭제, 수정을 통해 구독을 관리 할 수 있습니다.

![][asset_subscribe_subscriptionlist_list]



### 구독 생성

구독 생성은 4단계의 가이드 팝업을 통해 진행하며 1단계, 2단계, 3단계에서는 각각 구독의 필수 정보 및 수신인을 지정하고 4단계에서는 지정한 정보를 확인하고 구독명을 변경 할 수 있습니다.

1.  새로운 구독 생성 1단계
    -	선택된 리포트 유형( Summary, Usage, Performance )에 따라 현재 생성되어 있는 구독의 구독명과 주기를 확인 할 수 있습니다. 
    -	Asset Report는 Excel, PDF형태로 제공하며 원하는 파일 형식을 선택합니다. 
    -	언어 선택 시 발송되는 이메일 Template의 언어를 지정하며, 중국어와 한국어 그리고 영어를 제공합니다. 
    -	구독은 리포트 유형에 따라서 최대 5개를 생성 할 수 있습니다. 
        ![][asset_subscribe_subscriptionlist_list_create_step1]

2.  새로운 구독 생성 2단계
    -	구독 주기와 발송 시간을 선택합니다. 
    -	리포트 발송 주기는 일간, 주간, 월간 중에 선택합니다. 
    -	매일 구독 리포트를 받기를 원하는 경우 일간 탭에서 시간을 선택합니다. 
    -	매주 리포트를 받기를 원하는 경우 주간 탭에서 시간과 요일을 선택합니다. 
    -	매월 리포트를 받기를 원하는 경우 월간 탭에서 일자와 시간을 선택합니다. 
    -	31일을 지정한 경우 해당하는 달이 31일이 없는 경우 달의 마지막 일자에 구독이 발송됩니다. 
        ![][asset_subscribe_subscriptionlist_list_create_step2]
3.  새로운 구독 생성 3단계
    -	3단계에서는 수신인을 지정 할 수 있습니다. 수신인 리스트는 두가지가 존재하는데 Service Portal에 권한이 있는 회사에 소속된 유저 목록과 수동으로 등록한 ‘등록된 수신인’  유저 목록으로 나뉘어 있습니다. 
    -	수신인은 최대 10명까지 지정됩니다. 
        ![][asset_subscribe_subscriptionlist_list_create_step3]

4.  새로운 구독 생성 4단계
    -	마지막 단계에서는 기본 구독명이 생성되며 구독명을 수정 할 수 있습니다. 
    -	설정한 정보를 확인하고 수정하고자 하는 정보가 있는 경우 이전 버튼을 이용하여 수정합니다. 
        ![][asset_subscribe_subscriptionlist_list_create_step4]



#### 구독 수정

생성된 구독을 수정이 필요 한 경우 구독리스트에서 아래 그림의 수정 버튼을 클릭하면 수정 팝업을 이용합니다.
수정 팝업에서는 현재 선택된 구독의 정보를 표시하며 원하는 구독 정보를 선택한 뒤 수정 버튼을 통해 수정을 완료하거나 취소하여 수정 사항을 되돌릴 수 있습니다.

![][asset_subscribe_subscriptionlist_list_edit] 
![][asset_subscribe_subscriptionlist_list_edit_popup]


#### 구독 삭제

-	더 이상 구독을 원하지 않는 경우 아래의 그림의 ‘X’버튼을 클릭하여 구독 삭제를 진행합니다.
-	구독 삭제 전에 한번더 삭제 여부를 확인하며 ‘삭제’ 버튼을 클릭하면 삭제가 완료됩니다.
-	삭제 된 구독의 발송 이력은 발송 된 건이 존재하면 구독 내역에서 확인 할 수 있습니다.

![][asset_subscribe_subscriptionlist_list_delete] 
![][asset_subscribe_subscriptionlist_list_delete_popup]




### 구독내역

>	Asset Management > *Report Subscription > <em>구독내역*

구독 설정 후 발송한 내역에 대해서 확인하고, 최근 발송(1개월 이내) 내역에 대해 발송되었던 파일을 다운로드 받을 수 있습니다.
리포트 종류, 보낸 날짜, 구독명 필터 적용이 가능합니다.

#### 구독내역

-	리포트명 : 구독 설정 시 선택한 리포트의 이름이 표시됩니다. 
-	구독명 : 구독명 설정은 기본으로 정의된 형식을 따라가되, 별도 설정된 이름이 있을 경우 해당 이름이 표시됩니다.
-	발송 날짜 : 발송한 날짜와 시간이 YYYY-MM-DD HH:mm 형식으로 표시됩니다.
-	다운로드 : 최근 한 달 간의 파일은 화면에서 다운로드 아이콘을 통해 다운로드 받을 수 있습니다.
 	발송이 실패했거나 한 달 이전의 파일은 다운로드 버튼이 회색으로 표시되어 다운로드 불가한 상태로 표시됩니다.
-	발송 상태 : 메일 발송 상태에 따라 대기/발송완료/발송실패로 나뉘어 표시됩니다.
-	수신자 : 해당 구독 메일 발송 시 수신자로 지정된 수신자의 수가 나타납니다. 클릭 시 수신자 목록 팝업을 확인할 수 있습니다.
    ![][asset_subscribe_history_list]


### 등록된 수신인

>	Asset Management > *Report Subscription > <em>등록된 수신인*

직접 이메일을 등록하여 구독 수신인으로 지정할 수 있는 사용자를 관리할 수 있습니다. 등록 시 [이메일], [이름], [설명] 항목을 입력할 수 있습니다.

#### 수신인 목록

-	이름 : 등록된 수신인의 이름이 표시됩니다. 
-	이메일 : 등록된 수신인의 이메일 주소가 표시됩니다. 
-	구독리스트 : 등록된 수신인이 수신자로 지정된 구독의 개수가 표시됩니다. 클릭 시 해당 등록인이 수신자로 지정된 구독 목록 팝업을 확인할 수 있습니다.
    팝업에는 구독명과 주기, 파일 다운로드 버튼이 조회됩니다.
-	설명 : 등록된 수신인에 대한 설명이 표시됩니다.
-	수정/삭제 버튼 : 클릭 시 팝업에서 해당 수신인의 이름, 설명 정보를 수정하거나 수신인의 정보를 삭제할 수 있습니다.
    수신인 삭제 시 해당 수신인이 수신하고 있던 구독 정보도 함께 삭제되어 더 이상 메일이 발송되지 않습니다.
    ![][asset_subscribe_recipient_list]



#### 수신인 추가

[이메일], [이름], [설명] 정보를 입력하여 외부 이메일 주소를 등록된 수신인으로 등록할 수 있습니다. 여러 명의 수신인을 등록할 경우, 정보 입력 후
[저장 후 수신인 계속 등록] 버튼을 클릭하면 수신인 등록 후 팝업이 닫히지 않아 계속 수신인 등록이 가능합니다.

![][asset_subscribe_recipient_list_add_popup]


#### 수신인 편집

리스트에서 편집 아이콘을 클릭하면 수신인의 정보를 편집할 수 있습니다. [이름], [설명] 항목에 대한 수정이 가능하며 [이메일] 항목은 수정할 수 없습니다.
[이메일] 수정이 필요한 경우에는 삭제 버튼을 통해 수신인 정보를 삭제한 후 새로 등록해야 합니다.

![][asset_subscribe_recipient_list_edit_popup] 






<!-- 이미지 모음 -->
[asset_dashboard_1]: ./resource/asset_dashboard_1.png
[asset_service_group_1]: ./resource/asset_service_group_1.png
[asset_usage_current]: ./resource/asset_usage_current.png
[asset_usage_history]: ./resource/asset_usage_history.png 
[asset_performance_current]: ./resource/asset_performance_current.png
[asset_performance_history]: ./resource/asset_performance_history.png
[asset_intelligent_1]: ./resource/asset_intelligent_1.png
[asset_report]: ./resource/asset_report.png
[asset_report_subscribe_tab_create]: ./resource/asset_report_subscribe_tab_create.png
[asset_report_subscribe_tab_edit]: ./resource/asset_report_subscribe_tab_edit.png
[asset_subscribe_subscriptionlist_list]: ./resource/asset_subscribe_subscriptionlist_list.png
[asset_subscribe_subscriptionlist_list_create_step1]: ./resource/asset_subscribe_subscriptionlist_list_create_step1.png
[asset_subscribe_subscriptionlist_list_create_step2]: ./resource/asset_subscribe_subscriptionlist_list_create_step2.png
[asset_subscribe_subscriptionlist_list_create_step3]: ./resource/asset_subscribe_subscriptionlist_list_create_step3.png
[asset_subscribe_subscriptionlist_list_create_step4]: ./resource/asset_subscribe_subscriptionlist_list_create_step4.png
[asset_subscribe_subscriptionlist_list_edit]: ./resource/asset_subscribe_subscriptionlist_list_edit.png 
[asset_subscribe_subscriptionlist_list_edit_popup]: ./resource/asset_subscribe_subscriptionlist_list_edit_popup.png
[asset_subscribe_subscriptionlist_list_delete]: ./resource/asset_subscribe_subscriptionlist_list_delete.png 
[asset_subscribe_subscriptionlist_list_delete_popup]: ./resource/asset_subscribe_subscriptionlist_list_delete_popup.png
[asset_subscribe_history_list]: ./resource/asset_subscribe_history_list.png
[asset_subscribe_recipient_list]: ./resource/asset_subscribe_recipient_list.png
[asset_subscribe_recipient_list_add_popup]: ./resource/asset_subscribe_recipient_list_add_popup.png
[asset_subscribe_recipient_list_edit_popup]: ./resource/asset_subscribe_recipient_list_edit_popup.png 
