---
service : meteringadmin 
title   : Metering Admin
en : true
...



# Metering Admin

You can check and manage cost incurred in operating Multi Cloud Service.

--------------------------------------------------------------------------------



## Payer Bill

>   Metering Admin > *Payer Bill*  





### Payer Bill

>   Metering Admin > *Payer Bill*

You can see payer account list, total used amount, and fee confirmation status of the relevant month.
![][mtAdmin_payerBill_1_en]




#### View Details

Click the row to see the fee details of the payer account you want to check.  
![][mtAdmin_payerBill_1_1_en]




#### Download in Excel

You can download the information such as payer account list, total used amount, and fee confirmation status of the relevant month in Excel.
![][mtAdmin_payerBill_1_3_en]




#### Fee Confirmation Status

1. Confirmed : Payer account fee is confirmed  
2. Not Confirmed : Payer account fee is not yet confirmed  
3. Confirmation in Process : Payer account fee in process of confirmation  
4. Cancellation in Process : Payer account fee in process of cancellation

![][mtAdmin_payerBill_1_2_en]





### Detailed Page of Payer Bill

>   Metering Admin > Payer Bill > *Detailed Page of Payer Bill*

You can manually confirm or cancel the fee of the payer account you selected for a specific month, or see the fee details

![][mtAdmin_payerBill_detail_1_en]




#### Manual Fee Confirmation / Cancellation of Fee Confirmation

You can manually confirm fee or cancel fee confirmation. If the state is in the process of fee confirmation (or cancellation), you cannot cancel the request at that moment.

![][mtAdmin_payerBill_detail_2_1_en]




#### View History for the Last 3 Months

You can see the payer account’s total amounts paid for the last 3 months from the month you chose.

![][mtAdmin_payerBill_detail_2_2_en]




#### Check Fee Details

1.  Charges per Invoice  
    You can check charges for each payer account invoice.
    ![][mtAdmin_payerBill_detail_2_3_en]

    - Estimated : Refers to an invoice ID which has not been issued.  
    - Applied Exchange Rate : First notified exchange rate on the closest date will be applied as of the invoice issuance date.  
    - Fixed Exchange Rate : If you want to reset exchange rate after the fee has been confirmed, click the Reset button.

2.  Payment Summary  
    You can see the payment summary of payer account’s AWS service fee.
    ![][mtAdmin_payerBill_detail_2_4_en]

    - MarketplaceLineItem : AWS service fee: Amount paid during the period of the current invoice  
    - UsedLineItem : AWS service fee: Amount paid during the period of the current invoice  
    - SaleLineItem : AWS service fee: Subscription fee  
    - RefundsLineItem : AWS service fee: Refund amount  
    - PayLineItem : AWS service fee: Amount paid for invoice

3.  Payment Details  
    You can check the payment details per payer account’s AWS service.
    ![][mtAdmin_payerBill_detail_2_5_en]






--------------------------------------------------------------------------------


## Customer Bill

>   Metering Admin > *Customer Bill*  




### Customer Bill

>   Metering Admin > *Customer Bill*

You can see customer list, customer’s payer account, used amount, discount, support fee, credit, charges, additional service, and conversed charges of the relevant month.
![][mtAdmin_customerbill_1_en]




#### Confirm Invoice

This is to stop further changes in a customer’s adjusted cost for which the fee is already confirmed.  
This function will be applied only to customers whose fee is confirmed.  
To confirm an invoice, select All Customers, tick off the box that you want, and then click Confirm Invoice.

![][mtAdmin_customerbill_2_1_en]






#### Application Status to Invoices

This column shows whether the items are applied to invoices or not, and it is divided into three: Applied, Not Applied and Not Applied.
![][mtAdmin_customerbill_2_3_en]

1. Applied : Both fee and invoice are confirmed  
2. Not Applied : Fee is confirmed but invoice is not yet confirmed (Invoice confirmation available.)  
3. Not Applied : Neither fee nor invoice is confirmed (Invoice confirmation not available.)  





#### Customer Accordion Menu

You can see a customer’s accordion menu by clicking the button on the right of the table. From the accordion menu at the bottom, check a specific company’s linked account, used amount per linked account, discount, support fee, credit, charges, additional service, and conversed charges.

![][mtAdmin_customerbill_2_4_en]





#### Download in Excel

From Customer Bill, you can download two versions of data in Excel.
![][mtAdmin_customerbill_2_5_en]

1. Download the usage details per linked account of the relevant month in Excel.  
2. Download the usage details per linked account of a specific company for the relevant month in Excel.





#### Adjusted Cost Breakdown

If you click the button “Adjusted Cost Breakdown” on the right of the accordion menu, the fee is confirmed. For customers who have not confirmed invoices yet, you can edit items like discount, support fee, credit, infra supplementary service, modify infracosts, and service platform additional service cost for the linked account of the relevant month.

![][mtAdmin_customerbill_2_6_en]

1.  Discount: You can search or edit discount prices for a specific linked account of the relevant month.
2.  Support Fee: You can search or edit support fees for a specific linked account of the relevant month.
3.  Credit: You can search or edit the used credit amount for a specific linked account of the relevant month.
4.  Infra Supplementary Service: You can directly enter AWS-based one-time amount for a specific linked account of the relevant month.
5.  Modify Infracosts: You can set and adjust the actual AWS charges for a specific linked account of the relevant month (i.e. Cost triggered by rounding off to the nearest integer).
6.  Service Platform Additional Service: You can search or edit the amount used for additional service for a specific linked account of the relevant month.





### Detailed Page of Customer Bill

>   Metering Admin > Customer Bill > *Detailed Page of Customer Bill*

You can check invoice information and details per account of a customer that you have selected for the relevant month. Also, you can confirm invoices or cancel the invoice confirmation.

![][mtAdmin_customerbill_detail_1_en]





#### Summary of Information

You can see: total payment amount, fee confirmation status, used amount, charges, conversed charges, discount, support fee, credit, and additional service information of a specific linked amount on the relevant month.

![][mtAdmin_customerbill_detail_2_1_en] 
![][mtAdmin_customerbill_detail_2_2_en]




#### Confirm Invoice

Customers whose fee is confirmed can confirm invoices or cancel the invoice confirmation by clicking “Apply to Invoices” or “Cancel Invoice”.

![][mtAdmin_customerbill_detail_2_3_en]




#### Fee Reconfirmation

In case of additional cost (such as adjusted cost) incurred after fee confirmation, use the Fee Reconfirmation button to confirm the customer's fee again.

![][mtAdmin_customerbill_detail_2_7_en]





#### Invoice Information per Account

You can see information on invoices per account.  
![][mtAdmin_customerbill_detail_2_5_en]

1.  Accordion Menu  
    By clicking the extension button on the right, you can check: used amount per account invoice, discount, support fee, credit, additional service, standard trade rate, charges, and conversed charges from the accordion menu at the bottom.  
  
2.  Invoice Id  
    The invoice ID of additional service is ADD, and you will see from the page that the other invoice IDs representing all fees except additional service are issued from AWS.




#### Details per Account

You can search usage amount and fees based on AWS service name.

![][mtAdmin_customerbill_detail_2_6_en]



--------------------------------------------------------------------------------



## Exchange Rate

You can check or modify information on exchange rate. The standard exchange rate is the first notified standard trade rate made by KEB Hana Bank.

>   Metering > *Exchange Rate*  

![][mtAdmin_exchangeRate_1_en]


### Add an Exchange Rate

By clicking Add an Exchange Rate after selecting a date, you can add one. The maximum number of exchange rates you can add is three per date.

![][mtAdmin_exchangeRate_2_1_en]
![][mtAdmin_exchangeRate_2_2_en]




### Modify an Exchange Rate

You can change an exchange rate only if it is once-modified and not the first-notified.
![][mtAdmin_exchangeRate_2_3_en]




### Delete an Exchange Rate

You can delete an exchange rate only if it is once-modified and not the first-notified.

![][mtAdmin_exchangeRate_2_4_en]
![][mtAdmin_exchangeRate_2_5_en]






--------------------------------------------------------------------------------





## Customer Information

>   Metering Admin > *Customer Information*  



### Customer Information

>   Metering Admin > *Cusomer Information*

You can see the information of all customers. You can also register all adjusted costs based on each customer, or search or register a separate adjusted cost based on each customer company’s linked account.

![][mtAdmin_customerInfo_1_en]




#### Download in Excel

You can search in Excel for discount, support fee, credit, service platform additional information, and customer information which are applied based on the linked accounts.

![][mtAdmin_customerInfo_2_1_en]




#### Accordion Menu

Click on the extension button on the right to check customers’ linked accounts as well as discount, support fee, credit, and service platform additional service information which are applied at the moment based on the linked accounts.

![][mtAdmin_customerInfo_2_2_en]





#### Adjusted Cost Breakdown

On the popup window which appears by clicking Adjusted Cost Breakdown on the right of the accordion menu, you can search or set discount, support fee, credit, and additional service cost per period for linked accounts.

![][mtAdmin_customerInfo_2_3_en]

1.  Discount: You can set discount for linked accounts (apply by ratio / apply by fixed amount).
2.  Support Fee: You can set support fee for linked accounts (apply by ratio / apply by fixed amount).
3.  Credit: You can set credit for linked accounts (split application / maximum application / apply by fixed amount).
4.  Additional Service: You can set additional service cost for linked accounts (apply by ratio / apply by fixed amount).




#### Register All Adjusted Costs

You can go to the detailed menu of Customer Information where all the adjusted costs can be registered by clicking Register All Adjusted Costs on the right.  
![][mtAdmin_customerInfo_2_4_en]







### Detailed Page 

Detailed Page of Customer Information  (Register All Adjusted Costs)

>   Metering Admin > Customer Information > *Detailed Page of Customer Information*

In Register All Adjusted Costs, the 4th item in Customer Information, you can register all or part of the same adjusted costs for customers’ linked accounts.
![][mtAdmin_customerInfo_detail_1_en]




#### Account Information

You can check the linked account list and application status of adjusted cost of the selected customer.
![][mtAdmin_customerInfo_detail_2_1_en]




#### Register Service Cost

You can add adjusted costs to be registered in bulk by clicking Add from each tab.  
![][mtAdmin_customerInfo_detail_2_2_en]

1.  Discount: The same discount cost can be applied to multiple linked accounts of the relevant customers at the same time by period  
    (apply by ratio / apply by fixed amount).
2.  Support Fee: The same support fee can be applied to multiple linked accounts of the relevant customers at the same time by period  
    (apply by ratio / apply by fixed amount).
3.  Additional Service: The same additional service cost can be applied to multiple linked accounts of the relevant customers at the same time by period  
    (apply by ratio / apply by fixed amount).





#### Apply Costs

After entering service cost, select an account by ticking off the box in account information, or click Apply All Benefits after selecting all accounts.

![][mtAdmin_customerInfo_detail_2_3_en] 
![][mtAdmin_customerInfo_detail_2_4_en]



--------------------------------------------------------------------------------



## Settings

Here you can manage payer account information and additional service codes.  

>   Metering Admin > *Settings*




### Payer Account

>   Metering Admin > Settings > *Payer Account*

You can manage payer account information.

![][mtAdmin_settings_1_en]





####  Register Payer Account

You can add a payer account by clicking Add at the bottom of the table.

![][mtAdmin_settings_payerAccount_1_en] 
![][mtAdmin_settings_payerAccount_1_2_en]




#### Modify Payer Account

You can modify the alias and S3bucket information of registered payer accounts by clicking Modify on the right.

![][mtAdmin_settings_payerAccount_1_3_en]
![][mtAdmin_settings_payerAccount_1_4_en]




### Supplementary Service Management

>   Metering Admin > Settings > *Supplementary Service Management*

You can manage supplementary service codes.
![][mtAdmin_settings_addSvc_2_en]





#### Register Supplementary Service Management

You can add supplementary service codes by clicking Add at the bottom of the table.

![][mtAdmin_settings_addSvc_2_1_en] 
![][mtAdmin_settings_payerAccount_1_2_en]




#### Modify Supplementary Service Management

You can modify a registered supplementary service by clicking Modify on the right of the table.
![][mtAdmin_settings_addSvc_2_2_en]




#### Delete Supplementary Service Management

You can delete a registered supplementary service by clicking Delete on the right of the table.

![][mtAdmin_settings_addSvc_2_3_en]
![][mtAdmin_settings_addSvc_2_4_en]













<!-- 이미지 모음 -->
[mtAdmin_payerBill_1_en]: ./resource/mtAdmin_payerBill_1_en.png
[mtAdmin_payerBill_1_1_en]: ./resource/mtAdmin_payerBill_1_1_en.png
[mtAdmin_payerBill_1_3_en]: ./resource/mtAdmin_payerBill_1_3_en.png
[mtAdmin_payerBill_1_2_en]: ./resource/mtAdmin_payerBill_1_2_en.png

[mtAdmin_payerBill_detail_1_en]: ./resource/mtAdmin_payerBill_detail_1_en.png
[mtAdmin_payerBill_detail_2_1_en]: ./resource/mtAdmin_payerBill_detail_2_1_en.png
[mtAdmin_payerBill_detail_2_2_en]: ./resource/mtAdmin_payerBill_detail_2_2_en.png
[mtAdmin_payerBill_detail_2_3_en]: ./resource/mtAdmin_payerBill_detail_2_3_en.png
[mtAdmin_payerBill_detail_2_4_en]: ./resource/mtAdmin_payerBill_detail_2_4_en.png
[mtAdmin_payerBill_detail_2_5_en]: ./resource/mtAdmin_payerBill_detail_2_5_en.png

[mtAdmin_customerbill_1_en]: ./resource/mtAdmin_customerbill_1_en.png
[mtAdmin_customerbill_2_1_en]: ./resource/mtAdmin_customerbill_2_1_en.png
[mtAdmin_customerbill_2_3_en]: ./resource/mtAdmin_customerbill_2_3_en.png
[mtAdmin_customerbill_2_4_en]: ./resource/mtAdmin_customerbill_2_4_en.png
[mtAdmin_customerbill_2_5_en]: ./resource/mtAdmin_customerbill_2_5_en.png
[mtAdmin_customerbill_2_6_en]: ./resource/mtAdmin_customerbill_2_6_en.png

[mtAdmin_customerbill_detail_1_en]: ./resource/mtAdmin_customerbill_detail_1_en.png
[mtAdmin_customerbill_detail_2_1_en]: ./resource/mtAdmin_customerbill_detail_2_1_en.png
[mtAdmin_customerbill_detail_2_2_en]: ./resource/mtAdmin_customerbill_detail_2_2_en.png
[mtAdmin_customerbill_detail_2_3_en]: ./resource/mtAdmin_customerbill_detail_2_3_en.png
[mtAdmin_customerbill_detail_2_7_en]: ./resource/mtAdmin_customerbill_detail_2_7_en.png
[mtAdmin_customerbill_detail_2_5_en]: ./resource/mtAdmin_customerbill_detail_2_5_en.png
[mtAdmin_customerbill_detail_2_6_en]: ./resource/mtAdmin_customerbill_detail_2_6_en.png

[mtAdmin_exchangeRate_1_en]: ./resource/mtAdmin_exchangeRate_1_en.png
[mtAdmin_exchangeRate_2_1_en]: ./resource/mtAdmin_exchangeRate_2_1_en.png
[mtAdmin_exchangeRate_2_2_en]: ./resource/mtAdmin_exchangeRate_2_2_en.png
[mtAdmin_exchangeRate_2_3_en]: ./resource/mtAdmin_exchangeRate_2_3_en.png
[mtAdmin_exchangeRate_2_4_en]: ./resource/mtAdmin_exchangeRate_2_4_en.png
[mtAdmin_exchangeRate_2_5_en]: ./resource/mtAdmin_exchangeRate_2_5_en.png
[mtAdmin_customerInfo_1_en]: ./resource/mtAdmin_customerInfo_1_en.png
[mtAdmin_customerInfo_2_1_en]: ./resource/mtAdmin_customerInfo_2_1_en.png
[mtAdmin_customerInfo_2_2_en]: ./resource/mtAdmin_customerInfo_2_2_en.png
[mtAdmin_customerInfo_2_3_en]: ./resource/mtAdmin_customerInfo_2_3_en.png
[mtAdmin_customerInfo_2_4_en]: ./resource/mtAdmin_customerInfo_2_4_en.png

[mtAdmin_customerInfo_detail_1_en]: ./resource/mtAdmin_customerInfo_detail_1_en.png
[mtAdmin_customerInfo_detail_2_1_en]: ./resource/mtAdmin_customerInfo_detail_2_1_en.png
[mtAdmin_customerInfo_detail_2_2_en]: ./resource/mtAdmin_customerInfo_detail_2_2_en.png
[mtAdmin_customerInfo_detail_2_3_en]: ./resource/mtAdmin_customerInfo_detail_2_3_en.png
[mtAdmin_customerInfo_detail_2_4_en]: ./resource/mtAdmin_customerInfo_detail_2_4_en@2x.png

[mtAdmin_settings_1_en]: ./resource/mtAdmin_settings_1_en.png
[mtAdmin_settings_payerAccount_1_en]: ./resource/mtAdmin_settings_payerAccount_1_en.png
[mtAdmin_settings_payerAccount_1_2_en]: ./resource/mtAdmin_settings_payerAccount_1_2_en.png
[mtAdmin_settings_payerAccount_1_3_en]: ./resource/mtAdmin_settings_payerAccount_1_3_en.png
[mtAdmin_settings_payerAccount_1_4_en]: ./resource/mtAdmin_settings_payerAccount_1_4_en.png

[mtAdmin_settings_addSvc_2_en]: ./resource/mtAdmin_settings_addSvc_2_en.png
[mtAdmin_settings_addSvc_2_1_en]: ./resource/mtAdmin_settings_addSvc_2_1_en.png

[mtAdmin_settings_payerAccount_1_2_en]: ./resource/mtAdmin_settings_payerAccount_1_2_en.png

[mtAdmin_settings_addSvc_2_2_en]: ./resource/mtAdmin_settings_addSvc_2_2_en.png
[mtAdmin_settings_addSvc_2_3_en]: ./resource/mtAdmin_settings_addSvc_2_3_en.png
[mtAdmin_settings_addSvc_2_4_en]: ./resource/mtAdmin_settings_addSvc_2_4_en.png
