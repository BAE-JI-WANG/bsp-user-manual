---
service : meteringadmin 
title   : Metering Admin
ko : true
multiLang: 
    - ko : false 
    - en : true 
    - zh : true 
...




# Metering Admin

현재 운영 중인 Multi Cloud Service 에서 발생한 비용을 확인하고 관리할 수 있습니다.


--------------------------------------------------------------------------------




## Payer Bill 

>   Metering Admin > *Payer Bill*  

###  Payer Bill

>   Metering Admin > *Payer Bill*

해당 월의 Payer Account 리스트와 총 사용 금액, 요금 확정 여부를 확인할 수 있습니다.

![][mtAdmin_payerBill_1]




### 상세보기

Row 클릭 시 해당 Payer Account의 요금 상세 정보를 확인 할 수 있습니다.
![][mtAdmin_payerBill_1_1]



### 엑셀 다운로드
해당 월의 Payer Account 리스트와 총 사용금액, 요금 확정 여부 등의 정보를 엑셀 다운로드 할 수 있습니다.
![][mtAdmin_payerBill_1_3]





### 요금확정 여부

1. 확정 : Payer Account의 요금이 확정된 경우  
2. 미확정 : Payer Account의 요금이 미확정인 경우  
3. 확정진행중 : Payer Account의 요금이 확정 진행중인 경우  
4. 취소진행중 : Payer Account의 요금이 취소 진행중인 경우

![][mtAdmin_payerBill_1_2]






### Payer BIll 상세 화면

>   Metering Admin > Payer Bill > *Payer Bill 상세 화면*

선택한 payer Account의 해당 월의 요금 확정이나 요금 확정 취소를 수동으로 진행하거나 요금 상세 정보를 확인 할 수 있습니다.

![][mtAdmin_payerBill_detail_1]





### 수동 요금 확정 / 요금 확정 취소

수동으로 요금 확정을 진행하거나 요금확정취소를 진행할 수 있습니다. 요금 확정(취소)진행중일 때는 해당 요청을 취소 할 수 없습니다.

![][mtAdmin_payerBill_detail_2_1]





### 최근 3개월 사용 내역 보기

해당 월부터 최근 3개월간 Payer Account의 총 납부 금액 정보를 확인할 수 있습니다.
![][mtAdmin_payerBill_detail_2_2]





### 요금 상세 정보 확인

1.  Invoic.별 과금 정보  
    Payer Account의 Invoice별로 청구 비용을 확인 할 수 있습니다.
    ![][mtAdmin_payerBill_detail_2_3]

    - Estimated : 아직 발행되지 않은 Invoice의 Id를 나타냅니다.  
    - 적용 환율 : Invoice 발행일 기준으로 가장 가까운 날짜의 최초 고시 환율을 기본적으로 적용 합니다.  
    - 환율 확정 : 요금이 확정 된 후 환율 재설정 버튼을 통하여 환율을 재설정하여 적용할 수 있습니다.

2.  요금 사용 요약 정보  
    Payer Account의 AWS 서비스 요금의 사용 요약 정보를 확인할 수 있습니다.
    ![][mtAdmin_payerBill_detail_2_4]

    - MarketplaceLineItem : AWS 서비스 요금 : 본 청구서 기간의 사용 요금  
    - UsedLineItem : AWS 서비스 요금 : 본 청구서 기간의 사용 요금  
    - SaleLineItem : AWS 서비스 요금 : 구독 요금  
    - RefundsLineItem : AWS 서비스 요금 : 환급금  
    - PayLineItem : AWS 서비스 구독 요금 : 인보이스에 대해 받은 지급금

3.  요금 사용 상세 정보  
    Payer Account의 AWS 서비스 별 요금 사용 상세 정보를 확인할 수 있습니다.
    ![][mtAdmin_payerBill_detail_2_5]


--------------------------------------------------------------------------------




## Customer Bill

>   Metering Admin > *Customer Bill*  




### Customer Bill

>   Metering Admin > *Customer Bill*

해당 월의 Customer 리스트와 Customer의 Payer Account, 사용금액, Discount, Support Fee, Credit, 청구금액, 부가서비스, 환산 청구 금액을 확인 할 수 있습니다.
![][mtAdmin_customerbill_1]





### 청구서 확정

청구서 확정이란 요금이 확정된 Customer의 조정 비용을 더 이상 변경하지 않게 하기 위한 기능입니다.  
청구서 확정 기능은 요금이 확정된 Customer에 한해서 적용을 할 수 있습니다.  
전체 고객사 선택, 청구서 확정 버튼이나 표의 체크박스로 원하는 회사를 체크하여 청구서 확정을 처리 할 수 있습니다.

![][mtAdmin_customerbill_2_1]




### 청구서 반영

청구서 반영 여부를 나타내는 칼럼입니다. 반영, 미반영, 미반영 3가지로 구분 할 수 있습니다.

![][mtAdmin_customerbill_2_3]

1. 반영 : 요금이 확정되고 청구서 확정을 한 경우.  
2. 미반영 : 요금이 확정되었지만 청구서 확정을 하지 않은 경우. (청구서 확정 가능)  
3. 미반영 : 요금이 확정되지 않았고, 청구서 확정도 하지 않은 경우. (청구서 확정 불가능)  




### Customer 아코디언 메뉴

표의 우측 버튼을 클릭하여 Customer의 아코디언 메뉴를 볼 수 있습니다. 하단 아코디언 메뉴에서는 해당 회사의 Linked Account, Linked Account 별 사용금액, Discount, Support Fee, Credit, 청구 금액, 부가서비스, 환산 청구 금액을 확인 할 수 있습니다.
![][mtAdmin_customerbill_2_4]




### 액셀 다운로드

Customer Bill에서는 두 종류의 데이터를 엑셀로 다운로드 할 수 있습니다.
![][mtAdmin_customerbill_2_5]

1. 해당 월의 전체 Linked Account 계정 별 사용 정보 엑셀 다운로드  
2. 해당 월의 해당 Company의 Linked Account 별 사용 정보 엑셀 다운로드





### 조정비용 내역

아코디언 메뉴 오른쪽 조정비용 내역 버튼 클릭 시 요금이 확정되고 청구서를 확정하지 않은 Customer에 한해서 해당 월, Linked Account에 대한 Discount, Support Fee, Credit, 인프라 요금제 서비스 , 인프라 요금 조정, 서비스플랫폼 부가서비스 비용을 수정 할 수 있습니다.
![][mtAdmin_customerbill_2_6]

1.  Discount : 해당 월의 해당 Linked Account에 대한 Discount 요금을 조회, 수정할 수 있습니다.
2.  Support Fee : 해당 월의 해당 Linked Account에 대한 Support Fee 요금을 조회, 수정할 수 있습니다.
3.  Credit : 해당 월의 해당 Linked Account에 대한 Credit 사용 금액을 조회, 수정할 수 있습니다.
4.  인프라 요금제서비스 : 해당 월의 해당 Linked Account에 대한 AWS 기준 일회성 금액을 직접 입력할 수 있습니다.
5.  인프라요금 조정 : 해당 월의 해당 Linked Account에 대한 AWS 실 사용 금액을 설정하여 보정 할 수 있습니다. (반올림 차이로 인한 비용 등)
6.  서비스플랫폼 부가서비스 : 해당 월의 해당 Linked Account에 대한 부가서비스 사용 금액을 조회, 수정 할 수 있습니다.




### Customer Bill 상세 화면

>   Metering Admin > Customer Bill > *Customer Bill 상세 화면*

해당 월의 선택한 Customer의 Account 별 Invoice 정보, Account 별 상세 정보를 확인할 수 있고, 청구서 확정 및 청구서 확정 취소를 할 수 있습니다.
![][mtAdmin_customerbill_detail_1]

### 정보 요약

해당 월의 해당 Linked Account에 대한 총 납부 금액, 요금 확정 여부, 사용금액, 청구금액, 환산 청구 금액, Discount, Support Fee, Credit, Additional Service 정보를 확인할 수 있습니다.

![][mtAdmin_customerbill_detail_2_1] 
![][mtAdmin_customerbill_detail_2_2]





### 청구서 확정

요금이 확정 된 고객의 경우 청구서 반영 버튼을 통해서 청구서 확정 및 청구서 확정 취소를 할 수 있습니다.
![][mtAdmin_customerbill_detail_2_3]




### 2.3 요금 재확정

요금 확정 후 조정 비용 등의 추가 비용이 발생하였다면 요금 재확정 버튼을 이용하여 해당 고객의 요금 확정을 다시 진행할 수 있다.
![][mtAdmin_customerbill_detail_2_7]




### Account별 Invoice 정보

Account 별 Invoice 정보를 확인할 수 있습니다.
![][mtAdmin_customerbill_detail_2_5]

1.  아코디언 메뉴  
    오른쪽 확장 버튼 클릭 시 하단 아코디언 메뉴에서 계정 인보이스 별 사용 금액, Discount, Support Fee, Credit, 부가서비스, 매매기준율, 청구 금액, 환산 청구 금액 정보를 확인 할 수 있습니다.  
  
2.  Invoice Id  
    부가서비스의 Invoice Id는 ADD이고, 부가서비스를 제외한 나머지 요금을 나타내는 Invoice Id는 AWS에서 발행된 ID가 부여 되어있는 것을 확인 할 수 있습니다.




### Account별 Invoice 상세 정보

AWS 서비스 명 기준으로 사용량, 사용 요금 정보를 확인할 수 있습니다.
![][mtAdmin_customerbill_detail_2_6]


--------------------------------------------------------------------------------




## Exchange Rate

환율 정보를 확인, 수정 할 수 있습니다. 환율 기준은 외환은행 최초 고시 매매 기준율입니다.

>   Metering > *Exchange Rate*  

![][mtAdmin_exchangeRate_1]





### 환율 추가

날짜 선택 후 환율 추가 버튼을 클릭하여 환율을 추가 할 수 있습니다. 환율은 날짜 별 3개까지 추가를 할 수 있습니다.

![][mtAdmin_exchangeRate_2_1] 
![][mtAdmin_exchangeRate_2_2]




### 환율 수정

최초 고시가 아닌 수정 환율에 한하여 환율 정보를 수정할 수 있습니다.
![][mtAdmin_exchangeRate_2_3]





### 환율 삭제

최초 고시가 아닌 수정 환율에 한하여 환율 정보를 삭제할 수 있습니다.  

![][mtAdmin_exchangeRate_2_4] 
![][mtAdmin_exchangeRate_2_5]


--------------------------------------------------------------------------------




## Customer Information

>   Metering Admin > *Customer Information*  





### Customer Information

>   Metering Admin > *Cusomer Information*

전체 고객사 정보를 확인 할 수 있습니다. 고객사 기준으로 조정 비용을 일괄 등록하거나 고객사의 Linked Account 기준으로 별도로 조정 비용을 조회하거나 등록할 수 있습니다.
![][mtAdmin_customerInfo_1]





### 엑셀 다운로드

Linked account 기준으로 적용 되고 있는 Discount, Support Fee, Credit, 서비스 플랫폼 부가서비스 정보, 고객 정보 등을 엑셀로 조회할 수 있습니다.
![][mtAdmin_customerInfo_2_1]





### 아코디언 메뉴

오른쪽 확장 버튼을 클릭하여 고객사의 Linked Account 리스트 및 Linked Account 기준으로 현재 적용 중인 Discount, Support Fee, Credit, 서비스플랫폼 부가서비스 정보를 확인 할 수 있습니다.
![][mtAdmin_customerInfo_2_2]




### 조정 비용 내역

아코디언 메뉴 오른쪽 조정 비용 내역 버튼을 클릭하여 조정 비용 내역 팝업을 통해 Linked Account에 대해서 기간별 Discount, Support Fee, Credit, 부가서비스 금액을 조회 하거나 설정 할 수 있습니다.

![][mtAdmin_customerInfo_2_3]

1.  Discount : Linked Account에 대하여 Discount를 설정할 수 있습니다.(비율적용, 고정금액 적용)
2.  Support Fee : Linked Account에 대하여 Support Fee를 설정할 수 있습니다.(비율적용, 고정금액 적용)
3.  Credit : Linked Account에 대하여 Credit을 설정할 수 있습니다.(분할 적용, 최대한 적용, 고정 금액 적용)
4.  부가서비스 : Linked Account에 대하여 부가서비스 비용을 설정할 수 있습니다. (비율적용, 고정금액 적용)





### 조정비용 일괄등록

표의 오른쪽 조정 비용 일괄 등록 버튼을 클릭하여 조정 비용을 일괄로 등록할 수 있는 Customer Information 상세 메뉴로 이동할 수 있습니다.
![][mtAdmin_customerInfo_2_4]





### Customer Information 상세 화면  (조정 비용 일괄 등록)

>   Metering Admin > Customer Information > *Customer Information 상세화면*

Customer Information의 4번 항목의 조정 비용 일괄 등록 버튼을 클릭하여 조정 비용 일괄 등록 메뉴에서 고객사 Linked Account들에 대하여 동일한 조정 비용을 일괄 혹은 부분적으로 등록할 수 있습니다.

![][mtAdmin_customerInfo_detail_1]





### Account 정보

선택한 고객사의 Linked Account 리스트 및 조정 비용 적용 여부를 확인 할 수 있습니다.
![][mtAdmin_customerInfo_detail_2_1]




### 서비스 비용 등록

일괄로 등록할 조정 비용을 각 탭의 Add 버튼을 클릭하여 추가할 수 있습니다.
![][mtAdmin_customerInfo_detail_2_2]

1.  Discount : 기간별 동일한 Discount 비용을 해당 고객사의 여러 Linked account에 동시에 적용할 수 있습니다.  
    (비율적용, 고정금액 적용)
2.  Support Fee : 기간별 동일한 Support Fee 비용을 해당 고객사의 여러 Linked Account에 동시에 적용할 수 있습니다.  
    (비율적용, 고정금액 적용)
3.  부가서비스 : 기간별 동일한 부가서비스 비용을 해당 고객사의 여러 Linked Account에 동시에 적용할 수 있습니다.  
    (비율적용, 고정금액 적용)




### 비용 적용

서비스 비용 입력 후 Account 정보의 체크박스로 Account를 선택하거나 전체 Account 선택을 클릭 후 혜택 일괄 적용 버튼 클릭으로 혜택을 일괄적으로 적용할 수 있습니다.

![][mtAdmin_customerInfo_detail_2_3]
![][mtAdmin_customerInfo_detail_2_4]





--------------------------------------------------------------------------------







## Settings

Payer Account 정보와 부가서비스 코드를 관리합니다.

>   Metering Admin > *Settings*




### Payer Account

>   Metering Admin > Settings > *Payer Account*

Payer Account 정보를 관리합니다.
![][mtAdmin_settings_1]




### Payer Account 등록

표의 하단의 Add를 클릭하여 Payer Account를 추가할 수 있습니다.

![][mtAdmin_settings_payerAccount_1] 
![][mtAdmin_settings_payerAccount_1_2]






### Payer Account 수정

오른쪽 수정 버튼을 클릭하여 등록된 Payer Account의 Alias와 S3bucket 정보를 수정할 수 있습니다.

![][mtAdmin_settings_payerAccount_1_3]
![][mtAdmin_settings_payerAccount_1_4]





### Supplementary Service Management

>   Metering Admin > Settings > *Supplementary Service Management*

부가서비스 코드를 관리합니다.

![][mtAdmin_settings_addSvc_2]




### Supplementary Service Management 등록

표의 하단의 Add를 클릭하여 부가서비스 코드를 추가할 수 있습니다.

![][mtAdmin_settings_addSvc_2_1] 
![][mtAdmin_settings_payerAccount_1_2]




### Supplementary Service Management 수정

표의 오른쪽 수정 버튼을 클릭하여 등록한 부가서비스를 수정할 수 있습니다.

![][mtAdmin_settings_addSvc_2_2]




### Supplementary Service Management 삭제

표의 오른쪽 삭제 버튼을 클릭하여 등록한 부가서비스를 삭제할 수 있습니다.

![][mtAdmin_settings_addSvc_2_3]
![][mtAdmin_settings_addSvc_2_4]


<!-- 이미지 모음-->
[mtAdmin_payerBill_1]: ./resource/mtAdmin_payerBill_1.png
[mtAdmin_payerBill_1_1]: ./resource/mtAdmin_payerBill_1_1.png
[mtAdmin_payerBill_1_3]: ./resource/mtAdmin_payerBill_1_3.png
[mtAdmin_payerBill_1_2]: ./resource/mtAdmin_payerBill_1_2.png

[mtAdmin_payerBill_detail_1]: ./resource/mtAdmin_payerBill_detail_1.png
[mtAdmin_payerBill_detail_2_1]: ./resource/mtAdmin_payerBill_detail_2_1.png
[mtAdmin_payerBill_detail_2_2]: ./resource/mtAdmin_payerBill_detail_2_2.png
[mtAdmin_payerBill_detail_2_3]: ./resource/mtAdmin_payerBill_detail_2_3.png
[mtAdmin_payerBill_detail_2_4]: ./resource/mtAdmin_payerBill_detail_2_4.png
[mtAdmin_payerBill_detail_2_5]: ./resource/mtAdmin_payerBill_detail_2_5.png

[mtAdmin_customerbill_1]: ./resource/mtAdmin_customerbill_1.png
[mtAdmin_customerbill_2_1]: ./resource/mtAdmin_customerbill_2_1.png
[mtAdmin_customerbill_2_3]: ./resource/mtAdmin_customerbill_2_3.png
[mtAdmin_customerbill_2_4]: ./resource/mtAdmin_customerbill_2_4.png
[mtAdmin_customerbill_2_5]: ./resource/mtAdmin_customerbill_2_5.png
[mtAdmin_customerbill_2_6]: ./resource/mtAdmin_customerbill_2_6.png
[mtAdmin_customerbill_detail_1]: ./resource/mtAdmin_customerbill_detail_1.png
[mtAdmin_customerbill_detail_2_1]: ./resource/mtAdmin_customerbill_detail_2_1.png
[mtAdmin_customerbill_detail_2_2]: ./resource/mtAdmin_customerbill_detail_2_2.png
[mtAdmin_customerbill_detail_2_3]: ./resource/mtAdmin_customerbill_detail_2_3.png
[mtAdmin_customerbill_detail_2_7]: ./resource/mtAdmin_customerbill_detail_2_7.png
[mtAdmin_customerbill_detail_2_5]: ./resource/mtAdmin_customerbill_detail_2_5.png
[mtAdmin_customerbill_detail_2_6]: ./resource/mtAdmin_customerbill_detail_2_6.png

[mtAdmin_exchangeRate_1]: ./resource/mtAdmin_exchangeRate_1.png
[mtAdmin_exchangeRate_2_1]: ./resource/mtAdmin_exchangeRate_2_1] 
[mtAdmin_exchangeRate_2_2]: ./resource/mtAdmin_exchangeRate_2_2.png
[mtAdmin_exchangeRate_2_3]: ./resource/mtAdmin_exchangeRate_2_3.png
[mtAdmin_exchangeRate_2_4]: ./resource/mtAdmin_exchangeRate_2_4] 
[mtAdmin_exchangeRate_2_5]: ./resource/mtAdmin_exchangeRate_2_5.png

[mtAdmin_customerInfo_1]: ./resource/mtAdmin_customerInfo_1.png
[mtAdmin_customerInfo_2_1]: ./resource/mtAdmin_customerInfo_2_1.png
[mtAdmin_customerInfo_2_2]: ./resource/mtAdmin_customerInfo_2_2.png
[mtAdmin_customerInfo_2_3]: ./resource/mtAdmin_customerInfo_2_3.png
[mtAdmin_customerInfo_2_4]: ./resource/mtAdmin_customerInfo_2_4.png
[mtAdmin_customerInfo_detail_1]: ./resource/mtAdmin_customerInfo_detail_1.png
[mtAdmin_customerInfo_detail_2_1]: ./resource/mtAdmin_customerInfo_detail_2_1.png
[mtAdmin_customerInfo_detail_2_2]: ./resource/mtAdmin_customerInfo_detail_2_2.png
[mtAdmin_customerInfo_detail_2_3]: ./resource/mtAdmin_customerInfo_detail_2_3.png
[mtAdmin_customerInfo_detail_2_4]: ./resource/mtAdmin_customerInfo_detail_2_4.png
[mtAdmin_settings_1]: ./resource/mtAdmin_settings_1.png

[mtAdmin_settings_payerAccount_1]: ./resource/mtAdmin_settings_payerAccount_1.png
[mtAdmin_settings_payerAccount_1_2]: ./resource/mtAdmin_settings_payerAccount_1_2.png
[mtAdmin_settings_payerAccount_1_3]: ./resource/mtAdmin_settings_payerAccount_1_3.png
[mtAdmin_settings_payerAccount_1_4]: ./resource/mtAdmin_settings_payerAccount_1_4.png

[mtAdmin_settings_addSvc_2]: ./resource/mtAdmin_settings_addSvc_2.png
[mtAdmin_settings_addSvc_2_1]: ./resource/mtAdmin_settings_addSvc_2_1.png

[mtAdmin_settings_payerAccount_1_2]: ./resource/mtAdmin_settings_payerAccount_1_2.png
[mtAdmin_settings_addSvc_2_2]: ./resource/mtAdmin_settings_addSvc_2_2.png
[mtAdmin_settings_addSvc_2_3]: ./resource/mtAdmin_settings_addSvc_2_3.png
[mtAdmin_settings_addSvc_2_4]: ./resource/mtAdmin_settings_addSvc_2_4.png

