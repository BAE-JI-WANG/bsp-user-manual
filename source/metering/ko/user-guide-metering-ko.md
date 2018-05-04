---
service : metering 
title   : Metering 
ko : true
...

<!-- TOC -->





# Metering

현재 운영 중인 Multi Cloud Service 에서 발생한 비용을 확인할 수 있습니다. Metering 서비스는 7개의 메뉴를 제공합니다.



--------------------------------------------------------------------------------




## Dashbaord

Cloud Service 별로 현재 발생 비용과 월별/일별 비용 발생 현황을 한눈에 확인할 수 있습니다.

> Metering > *Dashboard*

![][metering_dashboard_1]



### Cloud Vendor

현재 사용 중인 Cloud Vendor들과 각 Vendor의 Account 정보가 표시됩니다.  Cloud Vendor와 Account 를 선택 시, Dashboard에 해당 Vendor, Account 의 사용 비용이 표시됩니다.

![][metering_dashboard_1_1]




### 이번달 요약

이번달에 발생한 비용에 대한 요약 정보를 확인할 수 있습니다.

![][metering_dashboard_1_2]

1.  Hot bill: 당일 발생하여 아직 집계가 완료되지 않은 비용을 표시합니다.
2.  집계 완료: 1일부터 현재까지 집계가 완료된 전체 비용을 표시합니다.
3.  예상 비용: 사용 패턴 분석을 통해 이번달에 발생할 예상 비용을 표시합니다.





### 월별 누적 사용 금액 비교

조회 기간 설정에 따라 최대 12개월 까지의 발생 비용을 비교, 분석 할 수 있습니다. 비교할 기간을 2달/4달/6달/12개월 중 선택할 수 있으며, 비교할 기간을 직접 입력할 수도 있습니다.

![][metering_dashboard_1_3]

그래프는 아래와 같이 구성되어 있습니다.

1.  Blue: 각 월 1일부터 현재일까지의 발생 비용을 표시합니다.
2.  Yellow: Hot bill 금액(당일 발생하여, 아직 집계가 완료되지 않은 비용)을 표시합니다.
3.  Grey: 이전월에 발생한 전체 비용을 표시합니다.
4.  Dash-line: 이번달 예상 비용을 표시합니다.





### 사용자 설정 비용

빠르게 확인하고자 하는 항목을 선택해, 해당 항목에서 발생한 비용을 확인할 수 있습니다. [비용기준 선택] 버튼을 클릭하면 설정 가능한 항목들이 메뉴로 표시됩니다.

![][metering_dashboard_1_4_1] ![][metering_dashboard_1_4_2]


아래 카테고리들에 대해 세부 항목을 선택해 발생 비용을 확인할 수 있습니다.

1.  Account
2.  Product
3.  Region
4.  Data Transfer
5.  Service Group



### 일별 비용 트렌드

월빌 비용 트렌드에서 선택한 기간의 일별 비용 트렌드 차트와 상세 데이터를 제공합니다. 이를 통해 일별 사용 패턴을 확인할 수 있으며, 언제 이상 비용이 발생했는지를 확인할 수 있습니다.

![][metering_dashboard_1_5]



### 항목별 비용

Account/Product/Region/Service Group 별로 발생 비용을 확인할 수 있으며 이에 대한 일별 트렌드 차트를 확인할 수 있습니다.

![][metering_dashboard_1_6]


### 월별 비용 트렌드

최대 3년간의 월별 비용 발생 트렌드를 확인할 수 있습니다. 월별 비용 트렌드를 거시적으로 확인할 수 있습니다.

![][metering_dashboard_1_7]





--------------------------------------------------------------------------------




## Billing Analytics

Billing Analytics는 실제 사용하고 있는 Resource을 검색 조건으로 좀 더 쉽고 빠르게 발생 비용을 검색할 수 있는 Intelligent Search 기능을 제공합니다.

>   Metering > *Billing Analytics*


![][metering_billing_analytics_1] 

![][metering_billing_analytics_2]



### 비용 검색

검색 조건을 선택해 선택한 항목에서 발생한 비용만을 확인할 수 있습니다.

1.  검색할 벤더와 기간을 선택합니다.
    검색할 벤더와 기간을 선택하면 해당 기간내 사용한 Account/Product/Region/Service Group 등이 검색 조건으로 표시됩니다.
    ![][metering_billing_analytics_1_1]
2.  검색 조건을 선택합니다.
    조건을 선택하면, 선택한 조건과 관계있는 항목만이 선택 가능한 상태로 표시됩니다.
    ![][metering_billing_analytics_1_2]
3.  [Apply] 버튼을 클릭합니다.
    ![][metering_billing_analytics_1_3]
4.  검색 결과를 확인할 수 있습니다.
    ![][metering_billing_analytics_1_4]



### 검색 결과 보기

서비스 그룹을 생성하고 편집할 수 있는 서비스 그룹 관리 화면으로 이동할 수 있습니다.  서비스 그룹의 관리는 서비스 그룹 관리 문서를 참고해 주세요.

#### 항목별 비용

선택한 기간, 조건으로 발생한 전체 비용을 확인할 수 있습니다.
또한 이 비용을 Account/Product/Region/Service Group별로 구분해 확인할 수 있으며, 구분 별로 일별 상세 발생 비용과 트렌드 차트를 확인할 수 있습니다.
Total/Account/Product/Region/Service Group 탭 클릭 시, 각 항목 별로 구분된 비용을 확인할 수 있습니다.

![][metering_billing_analytics_2_1]


#### 상세 데이터

선택한 기간, 조건으로 발생한 모든 비용의 상세 내역을 확인할 수 있습니다.
![][metering_billing_analytics_2_2]



--------------------------------------------------------------------------------




## Billing

당월 벤더 별 청구 금액을 확인할 수 있습니다. 그리고 월별 청구 금액을 비교해서 확인할 수 있는 기능을 제공합니다.

>   Metering > *Billing*

![][metering_billing_1]







### 빌링 청구서

벤더/월 별 청구서를 확인할 수 있으며, 지난달 청구서와 비교할 수 있는 기능을 제공합니다.
![][metering_billing_1_1]

1.  벤더 선택 : 청구서를 확인할 벤더를 선택할 수 있습니다. 벤더를 선택하면 해당 벤더의 청구서가 표시됩니다.
2.  월 선택 :  청구서를 확인할 월을 선택할 수 있습니다. 월을 선택하면 해당 월의 청구서가 표시됩니다.
3.  이번달 요약 :  선택한 월의 청구 내역을 요약해 표시합니다.
4.  지난달 요약:  선택한 전월의 청구 내역을 요약해 표시합니다.

\[오른쪽 화살표\] 버튼을 클릭해 올해 월별 발생 비용을 비교해 볼 수 있는 트렌드 차트를 확인할 수 있습니다.

![][metering_billing_1_2]

1.  월별 트렌드 차트 : 월별 발생 비용을 트렌드 차트로 확인할 수 있습니다.
2.  월별 데이터 :  월별 발생 비용을 그리드로 확인할 수 있습니다.



### 클라우드 어카운트 별 요금 정보

등록된 Account 별 요금 정보를 확인할 수 있습니다. 등록된 모든 계정에 대해 각 계정 별, 혹은 통합 요금과 내역을 확인할 수 있습니다.


![][metering_billing_2_1]

1.  계정 선택 : 비용을 확인할 계정을 선택할 수 있습니다. 선택한 계정의 요약/상세 정보가 표시됩니다.
2.  요약 정보 :  발생 요금 및 부가 서비스, 할인 요금 등 요금 발생 내역의 요약 정보가 표시됩니다.
3.  상세 정보 :  발생한 요금에 대한 상세 내역을 확인할 수 있습니다.
4.  표시 방식 변경 :  상세 정보에 표시되는 요금 상세 내역을 벤더 별 아래 조건으로 정렬해 확인할 수 있습니다.
    AWS : `Invoice1`, `Account1`, `Service Group1`, `Region1`, `Tag1`
    Azure : `Subscription1`, `Service Group1`, `Region1`, `Meta Category1`




### 전체 요금 정보

Account/Invoice 별 요금 정보를 확인할 수 있으며 부가서비스 내역을 확인할 수 있습니다.  

![][metering_billing_2_2]

1.  어카운트 별 요금 정보 : 등록된 Account 별 비용을 확인할 수 있습니다.
2.  인보이스 별 요금 정보 :  인보이스 별 요금 정보를 확인할 수 있습니다.
3.  부가서비스 내역 :  부가서비스 내역과 부가서비스로 인해 발생한 비용을 확인할 수 있습니다.



--------------------------------------------------------------------------------




## CDN Metering

Amazon CloudFront의 요금, 데이터, 요청 횟수의 요약 정보를 확인 할 수 있습니다.
이번달 지난달을 비교 할 수 있습니다.

>   Metering > *CDN Metering*



### Amazon CloudFront 요약 정보

요금 / 데이터용량 / 요청횟수를 확인할 수 있으며, 지난달과 비교할 수 있는 기능을 제공합니다.

![][metering_cdn_1_1]

1.  COST : 이번달 / 지난달 비용을 Hot bill, 합계, 예상비용등을 지난달과 비교하여 보여주고 있습니다.
    -   Hot bill : 당일 발생하여 아직 집계가 완료되지 않은 비용을 표시합니다.
    -   집계 완료 : 이번달 1일부터 데이터가 최종 수집된 일자까지의 정산 비용 + Hot bill을 표시합니다.
    -   예상 비용 : 사용 패턴 분석을 통해 이번달에 발생할 예상 비용을 표시합니다.

2.  DATA TRANSFER : 이번달 / 지난달 데이터용량을 Hot bill, 합계, 예상데이터용량등을 지난달과 비교하여 보여주고 있습니다.
    -   Hot bill : 당일 발생하여 아직 집계가 완료되지 않은 데이터용량을 표시합니다.
    -   집계 완료 : 이번달 1일부터 데이터가 최종 수집된 일자까지의 데이터 전송량 + 수집중인 당일 데이터 전송량을 표시합니다 .
    -   예상 비용 : 사용 패턴 분석을 통해 이번달에 발생할 예상 데이터용량을 표시합니다.

3.  REQUESTS : 이번달 / 지난달 요청횟수를 Hot bill, 합계, 예상요청횟수등을 지난달과 비교하여  보여주고 있습니다.
    -   Hot bill : 당일 발생하여 아직 집계가 완료되지 않은 요청횟수을 표시합니다.
    -   집계 완료 : 이번달 1일부터 데이터가 최종 수집된 일자까지의 데이터 요청 횟수 + 수집중인 당일 데이터 요청 횟수를 표시합니다.
    -   예상 비용 : 사용 패턴 분석을 통해 이번달에 발생할 예상 요청횟수을 표시합니다.
    -   K : 1,000 , M : 1,000,000 , B : 1,000,000,000





### Amazon CloudFront 사용 현황

계정별, 리전별, 웹분포(Distribution)별 비용, 데이터용량 및 요청횟수 등을 확인할 수 있습니다. 


![][metering_cdn_1_2]

1.  COST: 선택한 월의  계정별, 리전별, 웹분포(Distribution)별 비용을 비교 확인할 수 있습니다.
2.  DATA TRANSFER:  선택한 월의  계정별, 리전별, 웹분포(Distribution)별 데이터용량을 비교 확인할 수 있습니다.
3.  REQUESTS:  선택한 월의  계정별, 리전별, 웹분포(Distribution)별 요청횟수를 비교 확인할 수 있습니다.






### Amazon CloudFront 사용 트렌드

일별 / 시간별 및 주간별 비용, 데이터용량 및 요청횟수를 확인할 수 있습니다. 

![][metering_cdn_1_3]

1.  COST : 선택한 방식에 따른 비용의 트렌드를 확인할 수 있습니다.
    -   일별 : 이번달 / 지난달의 일별 요금 정보를 확인할 수 있습니다.
    -   시간별 : 지정일로부터 최근 8일까지의 시간별 요금 정보를 확인할 수 있습니다.

2.  DATA TRANSFER :  선택한 방식에 따른 데이터용량의 트렌드를 확인할 수 있습니다.
    -   일별 : 이번달 / 지난달의 일별 데이터용량을 상세하게 확인할 수 있습니다.
    -   시간별 : 지정일로부터 최근 8일까지의 시간별 데이터용량을 상세하게 확인할 수 있습니다.

3.  REQUESTS : 선택한 방식에 따른  요청횟수의 트렌드를 확인할 수 있습니다.
    -   일별 : 이번달 / 지난달의 일별 요청횟수를  확인할 수 있습니다.
    -   시간별 : 지정일로부터 최근 8일까지의 시간별 요청횟수 정보를 확인할 수 있습니다.

4.  표시 방식 변경 :  차트에 표기되는 정보는 일별, 시간별 아래 조건을 선택한 정보로 확인할 수 있습니다.
    일별 : `계정1`, `리전1`, `웹분포1`, `시간간격1`
    시간별 : `계정1`, `리전1`, `웹분포1`, `일자선택1`



--------------------------------------------------------------------------------




## Budgeting

벤더 별로 월별 예산을 입력하고 예산 대비 실제 사용 비용을 확인할 수 있습니다. 알림 설정을 통해 설정한 예산 대비 비율 혹은 기준 금액 초과시에 SMS, E-mail로 알람을 받을 수 있습니다.

>   Metering > *Budgeting*

![][metering_budgeting_1]
![][metering_budgeting_3]


### Budget Overview

>   Metering > Budgeting > *Budget Overview*

월별 예산 대비 실제 발생 비용을 그래프로 확인할 수 있습니다.

![][metering_budgeting_1]

1.  연도 선택 : 선택한 연도의 예산 사용 현황을 표시합니다.
2.  Total Budget : 벤더 별 예산의 총 합과 모든 벤더에서의 실제 발생 비용을 그래프로 비교할 수 있습니다.
3.  Cloud 벤더 구분 : 벤더 별 예산과 실제 발생 비용을 그래프로 비교할 수 있습니다.예산 사용 현황을 확인할 벤더를 선택할 수 있습니다.




### Budget Setting

>   Metering > Budgeting > *Budget Setting*

벤더 별 월별 예산을 입력할 수 있습니다.

![][metering_budgeting_2]

1.  연도 선택 : 예산을 설정할 연도를 선택할 수 있습니다.최대 3년간의 예산을 설정할 수 있습니다.
2.  예산 Table : 각 벤더 별로 월 예산을 입력할 수 있습니다.Cell을 더블클릭하면 입력 가능한 상태로 변경되며, 여기에 예산을 입력할 수 있습니다.예산 입력 후 상단의 [저장] 버튼을 클릭해 변경 내용을 저장할 수 있습니다.





### Alarm List

>   Metering > Budgeting > *Alarm List*

예산 사용에 대한 알람을 설정할 수 있습니다.

![][metering_budgeting_3]

1.  신규 알람 추가 : 새로운 예산 알람을 설정할 수 있습니다. 버튼을 클릭해 새로운 알람의 정보를 입력할 수 있습니다.
2.  알람 이름 : 설정한 알람 이름을 표시합니다.
3.  경고 : 알람 On/Off 상태를 표시합니다.
4.  알람 수신 방법 : 알람을 받을 방법을 선택할 수 있습니다.
5.  \[삭제\] 버튼 : 버튼을 클릭해 설정된 알람을 삭제할 수 있습니다.
6.  \[편집\] 버튼 : 기존에 설정된 알람을 편집할 수 있습니다.





### Alarm Receiver

>   Metering > Budgeting > *Alarm Receiver*

알람을 받을 수신인을 설정할 수 있습니다.

![][metering_budgeting_4]

1.  \[신규 수신인 추가\] 버튼 : 새로운 알람 수신인을 추가할 수 있습니다. 버튼을 클릭해 새로운 수신인의 정보를 입력할 수 있습니다.
2.  수신자 이름 : 알람 수신인의 이름을 표시합니다.
3.  Email : 알람 수신인의 Email 주소를 표시합니다.
4.  휴대전화 : 알람 수신인의 휴대전화 번호를 표시합니다.
5.  알람명 : 수신자가 수신할 알람을 선택할 수 있습니다.  Alarm List 에서 생성한 알람들의 목록이 표시되며, 여기에서 수신할 알람을 선택할 수 있습니다.






--------------------------------------------------------------------------------





## Cost Optimization
Usage, Performace, Cost 분석을 통해 RI 구매, 혹은 Right Sizing 이 필요한 Instance 들을 추천하는 기능을 제공합니다. Intelligent Search 기능을 통해 검색한 인스턴스들 중, RI 구매가 필요한 항목과 Right Sizing이 필요한 항목을 구분해 확인할 수 있습니다. 그리고 구매한 AWS RI의 사용 현황을 분석할 수 있는 자료를 제공합니다.


### Right-sizing

>   Metering > Cost Optimization > *Right-sizing*

검색 조건의 인스턴스들 중 RI 구매가 필요한 항목과 Right-sizing 이 필요한 항목을 각각 Frequency와 Utilization 필터를 통해 확인할 수 있습니다.

![][metering_cost_2]

1.  Frequency : Frequency 조건을 통해 지속적으로 사용되는 인스턴스들을 확인할 수 있습니다.조건은 변경할 수 있으며, 숫자를 클릭하면 RI 시뮬레이션 화면으로 이동합니다.
2.  Utilization : Utilization 조건을 통해 특정 시간대에 특정 사용율 이상/이하의 인스턴스들을 확인할 수 있습니다.조건은 변경할 수 있으며, 숫자를 클릭하면 Right Sizing 화면으로 이동합니다.
3.  전체 검색 항목 보기/조건 항목만 보기 : Intelligent Search를 통해 검색한 인스턴스들의 Frequency/Utilization을 확인할 수 있습니다.  조건 항목만 보기 탭을 클릭하면 설정한 Frequency, Utilization 조건에 해당하는 인스턴스들만을 확인할 수 있습니다.



#### RI 시뮬레이션

![][metering_cost_3]

Frequency 조건에 부합하는 인스턴스들을 목록으로 표시하고, 해당 인스턴스(동일 Type, Region, OS를 가진 인스턴스)에 대한 RI 구매 시뮬레이션을 진행할 수 있습니다. 

1.  인스턴스 목록 : Frequency 조건에 부합하는 인스턴스들을 목록으로 표시합니다. [RI Simulation] 버튼을 클릭해 해당 Type, Region, OS를 가진 인스턴스에 대한 RI 구매 시뮬레이션을 실시할 수 있습니다.
2.  RI 시뮬레이션 : RI 구매 조건을 선택해 현재 발생 비용 대비 RI 구매 시 예상 비용 트렌드를 비교해 볼 수 있는 기능을 제공합니다.




#### Right Sizing

![][metering_cost_4]

Frequency 조건에 부합하는 인스턴스들을 목록으로 표시하고, 해당 인스턴스(동일 Type, Region, OS를 가진 인스턴스)에 대한 RI 구매 시뮬레이션을 진행할 수 있습니다. 

1.  인스턴스 목록 : Utilization 조건에 부합하는 인스턴스들을 목록으로 표시합니다. 목록에서 인스턴스를 선택하면 해당 인스턴스의 자원 이용률과 사용 시간/발생 비용 정보를 확인할 수 있습니다.
2.  자원 이용률 : 선택한 인스턴스의 CPU, Memory, Disk 의 시간대 별 사용률을 확인할 수 있습니다.이를 통해 해당 인스턴스가 언제 많이 사용되었는지, 적절한 Type과 Size로 구성되었는지를 확인할 수 있습니다.
3.  시간/비용 : 선택한 인스턴스의 일별 평균 사용 시간과 평균 발생 비용을 확인할 수 있습니다.이를 통해 해당 인스턴스의 일별 사용 패턴을 확인할 수 있습니다.







### AWS RI Status

>   Metering > Cost Optimization > *AWS Ri Status*

구매한 RI의 구매내역/RI Utilization을 확인할 수 있습니다.

![][metering_ri_status]

1.  구매 내역 : 구매한 RI들의 을 목록으로 표시합니다.정규화/만료일자 현황을 확인할 수 있습니다.
2.  정규화 요약 : RI 유연성을 적용한 Type, Region, OS 별 정규화한 현황을 제공합니다.목록 클릭 시 해당 타입의 정규화 현황 및 Utilization/Chart 상세 정보 확인 할 수 있습니다.



#### AWS RI 유연성의 정의

| Instance Size | Normalization Factor |
| ------------- | -------------------- |
| nano          | 0.25                 |
| micro         | 0.5                  |
| small         | 1                    |
| medium        | 2                    |
| large         | 4                    |
| xlarge        | 8                    |
| 2xlarge       | 16                   |
| 4xlarge       | 32                   |
| 8xlarge       | 64                   |
| 10xlarge      | 80                   |
| 32xlarge      | 256                  |

Table: AWS에서 제공한 Instance Size 별 정규화 수치

-   AWS RI 유연성이란: 인스턴스 크기에 따른 유연성을 부여하고, 인스턴스 크기에 기초한 정규화된 수치에 맞추어, 동일한 인스턴스 유형 내의 다른 인스턴스 크기로 변경 가능한 기능입니다.
-   AWS에서 인스턴스 크기에 따라 다르게 제공하는 정규화 수치는 다음과 같습니다.



##### 인스턴스 크기 수정 기능의 활용법

-   같은 타입의 인스턴스에 다른 크기의 인스턴스가 있을 경우, (ex&gt; c4.8xlarge, c4.large 등) 
-   다음 4가지 경우는 모두 같은 사용 방법임을 보여줍니다.
    -    1개의 c4.8xlarge 인스턴스
    -    2개의 c4.4xlarge 인스턴스
    -    4개의 c4.2xlarge 인스턴스
    -    16개의 c4.large 인스턴스


| Instance Type | NF   | Num  | Price | vCPU | 메모리(GiB) | Compare |
| ------------- | ---- | ---- | ----- | ---- | ----------- | ------- |
| c4.large      | 4    | 16   | 0.07  | 2    | 3.75        | 1.12    |
| c4.xlarge     | 8    | 8    | 0.142 | 4    | 7.5         | 1.136   |
| c4.2xlarge    | 16   | 4    | 0.283 | 8    | 15          | 1.132   |
| c4.4xlarge    | 32   | 2    | 0.565 | 16   | 30          | 1.13    |
| c4.8xlarge    | 64   | 1    | 1.13  | 36   | 60          | 1.13    |

Tables: 예시


##### 요금제 적용 사항


-   실행 중인 인스턴스보다 작은 예약 인스턴스를 소유하고 있는 경우: 
    -   초과 분에 대해 비례해서 On demand 가격이 부과됩니다.
    -   c4.4xlarge에 대한 예약 인스턴스를 구입해서 사용하지만, c4.8xlarge로 인스턴스로 확장, 또는 작은 인스턴스로 축소가 가능하며 예약하고, 사용하지 않은 부분은 누적되지 않습니다.

-   변경된 예약이 적용되는 경우:
    -   변경 요청 시점을 기준으로 새 인스턴스에 요금 혜택이 적용됩니다.
    -   예를 들어, 예약 변경이 성공적으로 완료된 시간이 오후 9시 15분이라면, 요금 혜택은 오후 9시부터 새 인스턴스에 적용됩니다.
    -   하나의 c4.4xlarge 인스턴스와 8개의 c4.large 인스턴스 같은 조합도 가능합니다.실행 중인 인스턴스보다 작은 RI를 소유하고 있는 경우, 초과 분에 대해 비례해서 On demand 가격이 부과 가능, 즉, 여러분은 c4.4xlarge에 대한 RI를 구입해서 사용하지만, c4.8xlarge 인스턴스로 확장 가능합니다.  더 큰 인스턴스 크기의 시간당 가격인 On demand 비용의 절반만 지불하고 사용할 수 있습니다. AWS의 목표는 가장 낮은 비용으로 컴퓨팅 자원을 제공하는 것으로, 큰 인스턴스 크기의 RI를 소유하고, 작은 인스턴스를 실행하는 경우 RI 가격이 작은 인스턴스에 적용됩니다. 그러나, 예약하고 사용하지 않은 부분은 누적되지 않습니다.





##### RI 구매 시 유연성 적용 현황

RI를 구매할 경우, 자동으로 유연성 기능이 적용되어 구매한 인스턴스 외에도 패밀리 내의 동일한 유연성에 한하여 RI 구매와 동일한 효력을 발효됩니다.

-	실행 중인 인스턴스보다 큰 RI를 소유하고 있는 경우, 작은 인스턴스에 RI 가격이 적용. t2.medium(on demand 0.064 / RI 0.024)에 대한 RI를 구입해서 사용, t2.small(on demand 0.032)에 대해 적용을 받는 경우, 다음 표와 같이 원래는 t2.small 두개의 가격이 on demand로는 0.064이므로 $15.552 이나 t2.medium의 RI 가격을 적용 받아 $9.722 정도의 절감효과가 나타납니다.
-	반대로 실행 중인 인스턴스보다 작은 RI를 소유하고 있는 경우, 큰 인스턴스에는 초과 분에 대해 비례해서 on demand 가격이 부과. T2.medium RI를 하나 구입해서 사용하고 있는데, t2.large(on demand 0.128)에 대해 적용을 받는 경우, t2.medium 크기에 해당되는 절반은 RI값인 시간당 $0.024로 적용이 되며, 나머지 절반은 시간당 $0.064로 적용됩니다.










--------------------------------------------------------------------------------






## Payment &amp; Discount

납부 이력 및 할인, Credit 정보를 확인할 수 있습니다.





### Payment &amp; History

>   Metering > Payment & Discount > *Payment &amp; Discount*

청구받은 요금들의 내역과 요금의 납부 이력을 확인할 수 있습니다.

![][metering_Payment_1]



### Discount History

>   Metering > Payment & Discount > *Discount History*

할인받은 이력을 확인할 수 있습니다.

![][metering_Payment_2]




### Credit Information

>   Metering > Payment * Discount > *Credit Information*

Credit 발급 현황과 사용 현황을 확인할 수 있습니다.

![][metering_Payment_3]




--------------------------------------------------------------------------------





## Report
Report Template을 제공하며, 사용자가 만든 Report를 다운로드 받을 수 있는 기능을 제공합니다.

>   Metering > *Report*


![][metering_report_subscribe_ko_0_1]


아래의 6가지 Report Template을 제공합니다.

1.  Product/Region 별 사용 비용 현황
2.  Product 별 사용량 &amp; 사용 비용 현황
3.  Service별 사용비용 현황
4.  Name Tag별 인프라 현황
5.  Product/Region 별 사용 비용 현황 in Azure
6.  Product 별 사용량 &amp; 사용 비용 현황 in Azure

`My Report`메뉴를 통해 생성한 Report들의 목록을 확인할 수 있고, 다시 다운로드 받을 수 있습니다.
각각의 보고서 템플릿을 클릭하면 우측에서 아래의 메뉴가 표시됩니다.

1.  Report Info : Report로 생성할 기간과 파일 형식을 선택해 Report를 다운로드 받을 수 있습니다. 
    excel로 다운로드 받을 수 있습니다.

2.  Log : 선택한 Report Template으로 생성한 Report를 다운로드 받은 이력을 표시합니다.생성한 리포트를 다시 다운로드 받을 수 있습니다.

3.  Subscription : 선택한 Report Template에 대해 등록된 이메일로 구독할 수 있습니다.
    각 리포트에 대한 구독은 일간, 주간, 월간 중 선택할 수 있으며 시간을 지정할 수 있습니다. 리포트 구독 리스트는 내가 직접 설정한 구독과 [구독 설정] 메뉴 권한이 있는 타인이 나를 구독자로 지정한 구독이 존재합니다. 내가 직접 설정한 구독 리스트는 생성, 삭제, 수정은 가능하지만 [구독설정] 메뉴에서 타인이 생성한 구독에 내가 구독자로 지정된 경우에는 조회만 가능합니다

    ![][metering_report_subscribe_ko_1_1]


1.  새로운 구독 생성
    [구독명], [파일형식], [언어], [기준시간], [구독주기], [시간]을 입력/선택하여 신규 구독을 생성할 수 있습니다. 생성 시 리포트명, 주기, 언어 설정 등으로 구성된 기본 구독명이 표시됩니다. 동일한 Report Template의 경우 동일한 주기 설정은 불가합니다.

    ![][metering_report_subscribe_en_1_2]

2.  구독 수정
    [구독명], [파일형식], [언어], [기준시간], [구독주기], [시간]을 수정할 수 있습니다. 동일한 Report Template의 경우 동일한 주기 설정은 불가합니다.

    ![][metering_report_subscribe_en_1_3]

    `My Report` 메뉴를 통해 생성한 Report들의 목록을 확인할 수 있고, 다시 다운로드 받을 수 있습니다.





--------------------------------------------------------------------------------





## Report Subscription
Metering 서비스를 사용하며 Report subscription 메뉴에 대한 수정 권한이 있는 모든 고객을 대상으로 리포트 자동메일발송 기능을 제공하고 있습니다. Report subscription에서는 리포트 구독을 생성하거나 수정 또는 삭제를 통해 관리하고 각 구독의 발송 이력 조회 및 발송되었던 파일을 다운로드 할 수 있습니다. 또한 외부 이메일 또는 원하는 이메일을 생성, 삭제하여 수신인을 관리하는 기능이 제공되는데 구독을 생성/수정 할 때 수신인을 지정 할 수 있습니다. 구독 내역에서는 과거 발송 이력을 조회 할 수 있으며 삭제한 구독의 발송 이력도 포함 됩니다.

>   Metering > *Report Subscription*


### 구독리스트

>   Metering > Report Subscription > *구독리스트*

구독은 리포트 유형별로 관리되고 발송 주기(일간, 주간, 월간), 언어, 시간 등의 옵션을 지정하여 생성합니다. 구독리스트에서는 구독명, 주기, 수신인 정보, 최근 발송일 정보를 조회하고 ‘새로운 구독 생성’을 생성하거나 삭제, 수정을 통해 구독을 관리 할 수 있습니다.  

`Product/Region 별 사용 비용 현황1`, `Product 별 사용량 & 사용 비용 현황1`, `Service별 사용비용 현황1`, `Name Tag별 인프라 현황1`, `Product/Region 별 사용 비용 현황 in Azure1`, `Product 별 사용량 & 사용 비용 현황 in Azure1`

![][metering_subscribe_ko_1_1]


1.  구독 생성 
    구독 생성은 4단계의 가이드 팝업을 통해 진행하며 1단계, 2단계, 3단계에서는 각각 구독의 필수 정보 및 수신인을 지정하고 4단계에서는 지정한 정보를 확인하고 구독명을 변경 할 수 있습니다.

    1.  새로운 구독 생성 1단계 
        -	선택된 리포트 유형에 따라 현재 생성되어 있는 구독의 구독명과 주기를 확인 할 수 있습니다.
        -	Metering Report는 Excel 형태의 리포트를 제공하며, Billing 메뉴에서 내보내기 한 청구서 리포트의 경우에는 Excel, PDF 형식을 지원합니다.
        -	언어 선택 시 발송되는 이메일 Template의 언어를 지정하며, 중국어와 한국어 그리고 영어를 제공합니다.
        -	구독은 리포트 유형에 따라서 최대 5개를 생성 할 수 있습니다.

    2.  새로운 구독 생성 2단계
        -	구독 주기와 발송 시간을 선택합니다.
        -	리포트 발송 주기는 일간, 주간, 월간 중에 선택합니다.
        -	리포트의 비용 산정 기준은 지난달/현재달 중 선택할 수 있으며
        -	매일 구독 리포트를 받기를 원하는 경우 일간 탭에서 시간을 선택합니다.
        -	매주 리포트를 받기를 원하는 경우 주간 탭에서 시간과 요일을 선택합니다.
        -	매월 리포트를 받기를 원하는 경우 월간 탭에서 일자와 시간을 선택합니다.


    3.  새로운 구독 생성3단계
        -   3단계에서는 수신인을 지정 할 수 있습니다.
            수신인 리스트는 두가지가 존재하는데 Service Portal에 권한이 있는 회사에 소속된 유저 목록과 수동으로 등록한 ‘등록된 수신인’  유저 목록으로 나뉘어 있습니다.
        -   수신인은 최대 10명까지 지정됩니다.

    4.  새로운 구독 생성 4단계
        -	마지막 단계에서는 기본 구독명이 생성되며 구독명을 수정 할 수 있습니다.
        -	설정한 정보를 확인하고 수정하고자 하는 정보가 있는 경우 이전 버튼을 이용하여 수정합니다.

2.  구독 수정
    생성된 구독을 수정이 필요 한 경우 구독리스트에서 아래 그림의 수정 버튼을 클릭하면 수정 팝업을 이용합니다.
    수정 팝업에서는 현재 선택된 구독의 정보를 표시하며 원하는 구독 정보를 선택한 뒤 수정 버튼을 통해 수정을 완료하거나 취소하여 수정 사항을 되돌릴 수 있습니다.



3.  구독 삭제
    더 이상 구독을 원하지 않는 경우 \[X\] 버튼을 클릭하여 구독 삭제를 진행합니다.
    -	구독 삭제 전에 한번더 삭제 여부를 확인하며 ‘삭제’ 버튼을 클릭하면 삭제가 완료됩니다.
    -	삭제 된 구독의 발송 이력은 발송 된 건이 존재하면 구독 내역에서 확인 할 수 있습니다.



### 구독내역

>   Metering > Report Subscription > *구독내역*

구독 설정 후 발송한 내역에 대해서 확인하고, 최근 발송(1개월 이내) 내역에 대해 발송되었던 파일을 다운로드 받을 수 있습니다. 리포트 종류, 보낸 날짜, 구독명 필터 적용이 가능합니다.

![][metering_subscribe_ko_2_1]


1.	리포트명 : 구독 설정 시 선택한 리포트의 이름이 표시됩니다. 
2.	구독명 : 구독명 설정은 기본으로 정의된 형식을 따라가되, 별도 설정된 이름이 있을 경우 해당 이름이 표시됩니다.
3.	발송 날짜 : 발송한 날짜와 시간이 YYYY-MM-DD HH:mm 형식으로 표시됩니다.
4.	다운로드 : 최근 한 달 간의 파일은 화면에서 다운로드 아이콘을 통해 다운로드 받을 수 있습니다. 발송이 실패했거나 한 달 이전의 파일은 다운로드 버튼이 회색으로 표시되어 다운로드 불가한 상태로 표시됩니다.
5.	발송 상태 : 메일 발송 상태에 따라 대기/발송완료/발송실패로 나뉘어 표시됩니다.
6.	수신자 : 해당 구독 메일 발송 시 수신자로 지정된 수신자의 수가 나타납니다. 클릭 시 수신자 목록 팝업을 확인할 수 있습니다.

![][metering_subscribe_ko_2_2]




### 등록된 수신인

>   Metering > Report Subscription > *등록된 수신인*

직접 이메일을 등록하여 구독 수신인으로 지정할 수 있는 사용자를 관리할 수 있습니다. 등록 시 [이메일], [이름], [설명] 항목을 입력할 수 있습니다.

![][metering_subscribe_ko_3_1]

-   이름 : 등록된 수신인의 이름이 표시됩니다. 
-	이메일 : 등록된 수신인의 이메일 주소가 표시됩니다. 
-	구독리스트 : 등록된 수신인이 수신자로 지정된 구독의 개수가 표시됩니다. 클릭 시 해당 등록인이 수신자로 지정된 구독 목록 팝업을 확인할 수 있습니다. 팝업에는 구독명과 주기, 파일 다운로드 버튼이 조회됩니다. 
-	설명 : 등록된 수신인에 대한 설명이 표시됩니다. 
-	수정/삭제 버튼 : 클릭 시 팝업에서 해당 수신인의 이름, 설명 정보를 수정하거나 수신인의 정보를 삭제할 수 있습니다. 수신인 삭제 시 해당 수신인이 수신하고 있던 구독 정보도 함께 삭제되어 더 이상 메일이 발송되지 않습니다. 

1.  수신인 추가 
    [이메일], [이름], [설명] 정보를 입력하여 외부 이메일 주소를 등록된 수신인으로 등록할 수 있습니다. 여러 명의 수신인을 등록할 경우, 정보 입력 후 [저장 후 수신인 계속 등록] 버튼을 클릭하면 수신인 등록 후 팝업이 닫히지 않아 계속 수신인 등록이 가능합니다.
    ![][metering_subscribe_ko_3_2]

2.  수신인 편집 
    리스트에서 \[수신인 등록\] 아이콘을 클릭하면 수신인의 정보를 편집할 수 있습니다. \[이름\], \[설명\] 항목에 대한 수정이 가능하며 \[이메일\] 항목은 수정할 수 없습니다. 
    \[이메일\] 수정이 필요한 경우에는 \[수신인 편집\] 버튼을 통해 수신인 정보를 삭제한 후 새로 등록해야 합니다.
    ![][metering_subscribe_ko_3_3]



<!-- 이미지 모음 -->
[metering_dashboard_1]: ./resource/metering_dashboard_1.png
[metering_dashboard_1_1]: ./resource/metering_dashboard_1_1.png
[metering_dashboard_1_2]: ./resource/metering_dashboard_1_2.png
[metering_dashboard_1_3]: ./resource/metering_dashboard_1_3.png
[metering_dashboard_1_4_1]: ./resource/metering_dashboard_1_4_1.png
[metering_dashboard_1_4_2]: ./resource/metering_dashboard_1_4_2.png
[metering_dashboard_1_5]: ./resource/metering_dashboard_1_5.png
[metering_dashboard_1_6]: ./resource/metering_dashboard_1_6.png
[metering_dashboard_1_7]: ./resource/metering_dashboard_1_7.png
[metering_billing_analytics_1]: ./resource/metering_billing_analytics_1.png 
[metering_billing_analytics_2]: ./resource/metering_billing_analytics_2.png
[metering_billing_analytics_1_1]: ./resource/metering_billing_analytics_1_1.png
[metering_billing_analytics_1_2]: ./resource/metering_billing_analytics_1_2.png
[metering_billing_analytics_1_3]: ./resource/metering_billing_analytics_1_3.png
[metering_billing_analytics_1_4]: ./resource/metering_billing_analytics_1_4.png
[metering_billing_analytics_2_1]: ./resource/metering_billing_analytics_2_1.png
[metering_billing_analytics_2_2]: ./resource/metering_billing_analytics_2_2.png
[metering_billing_1]: ./resource/metering_billing_1.png
[metering_billing_1_1]: ./resource/metering_billing_1_1.png
[metering_billing_1_2]: ./resource/metering_billing_1_2.png
[metering_billing_2_1]: ./resource/metering_billing_2_1.png
[metering_billing_2_2]: ./resource/metering_billing_2_2.png
[metering_cdn_1_1]: ./resource/metering_cdn_1_1.png
[metering_cdn_1_2]: ./resource/metering_cdn_1_2.png
[metering_cdn_1_3]: ./resource/metering_cdn_1_3.png
[metering_budgeting_1]: ./resource/metering_budgeting_1.png
[metering_budgeting_3]: ./resource/metering_budgeting_3.png
[metering_budgeting_1]: ./resource/metering_budgeting_1.png
[metering_budgeting_2]: ./resource/metering_budgeting_2.png
[metering_budgeting_3]: ./resource/metering_budgeting_3.png
[metering_budgeting_4]: ./resource/metering_budgeting_4.png
[metering_cost_2]: ./resource/metering_cost_2.png
[metering_cost_3]: ./resource/metering_cost_3.png
[metering_cost_4]: ./resource/metering_cost_4.png
[metering_ri_status]: ./resource/metering_ri_status.png
[metering_Payment_1]: ./resource/metering_Payment_1.png
[metering_Payment_2]: ./resource/metering_Payment_2.png
[metering_Payment_3]: ./resource/metering_Payment_3.png
[metering_report_subscribe_ko_0_1]: ./resource/metering_report_subscribe_ko_0_1.png
[metering_report_subscribe_ko_1_1]: ./resource/metering_report_subscribe_ko_1_1.png
[metering_report_subscribe_en_1_2]: ./resource/metering_report_subscribe_en_1_2.png
[metering_report_subscribe_en_1_3]: ./resource/metering_report_subscribe_en_1_3.png
[metering_subscribe_ko_1_1]: ./resource/metering_subscribe_ko_1_1.png
[metering_subscribe_ko_1_2]: ./resource/metering_subscribe_ko_1_2.png
[metering_subscribe_ko_1_3]: ./resource/metering_subscribe_ko_1_3.png
[metering_subscribe_ko_1_4]: ./resource/metering_subscribe_ko_1_4.png
[metering_subscribe_ko_1_5]: ./resource/metering_subscribe_ko_1_5.png
[metering_subscribe_delete]: ./resource/metering_subscribe_delete.png
[metering_subscribe_ko_2_1]: ./resource/metering_subscribe_ko_2_1.png
[metering_subscribe_ko_2_2]: ./resource/metering_subscribe_ko_2_2.png
[metering_subscribe_ko_3_1]: ./resource/metering_subscribe_ko_3_1.png
[metering_subscribe_ko_3_2]: ./resource/metering_subscribe_ko_3_2.png
[metering_subscribe_delete_black]: ./resource/metering_subscribe_delete_black.png
[metering_subscribe_ko_3_3]: ./resource/metering_subscribe_ko_3_3.png
