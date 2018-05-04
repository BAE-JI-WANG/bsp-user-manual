---
service : metering 
title   : Metering 
en : true
multiLang: 
    - ko : true 
    - en : false 
    - zh : true 
...
<!-- 이 윗줄은 문서 파싱에 꼭 필요하므로 삭제하지 말아주세요! -->

<!-- TOC -->





# Metering

You can check cost incurred in operating Multi Cloud Service.The Metering service provides 7 menus.


--------------------------------------------------------------------------------


## Dashbaord

You can check status of cost currently incurred and monthly/daily cost per Cloud Service in a single pane.

>	Metering > *Dashboard*

![][metering_dashboard_en_1]




### Cloud Vendor

Cloud Vendors currently in use and account information of each Vendor is shown.
As you select a Cloud Vendor and account, cost of selected Vendor and account is shown on the Dashboard.

![][metering_dashboard_en_1_1]


### Monthly Summary

You can check summary of cost for this month.

![][metering_dashboard_en_1_2]


1.  Hot bill: Shows cost which has been incurred in less than 24 hours so has not yet been fully settled.
2.  Complete Settlement: Shows total cost which has been fully settled for the period, from the first day of this month to now.
3.  Estimated cost: Shows estimated cost for this month by analyzing usage pattern.



### Comparison of Accumulated Expenditure per Month

By setting search period, you can compare and analyze cost incurred for 12 months at a maximum.
You can select one of 2/4/6/12 months for search period, or you can directly enter a date for it.

![][metering_dashboard_en_1_3]

Following are indicators of the graph.

1.  Blue: Indicates cost for the respective month, whose unit period is from the first day to the current date.
2.  Yellow: Indicates Hot bill (cost which has been incurred in less than 24 hours so has not yet been fully settled).
3.  Grey: Indicates total cost for the last month.
4.  Dash-line: Indicates estimated cost for this month.



### Customized Cost

You can check cost for the item, by selecting the item you want to check immediately.
If you click the [Cost Standard] button, available items are shown in the menu.

![][metering_dashboard_en_1_4_1] ![][metering_dashboard_en_1_4_2]

You can select items of categories listed below to check cost in detail.

1.  Account
2.  Product
3.  Region
4.  Data Transfer
5.  Service Group




### Daily Cost Trend

Daily Cost Trend provides you the trend chart of daily cost for the selected period, as well as its detailed data.With this, you can check daily usage pattern and the time when unexpected cost has been incurred.

![][metering_dashboard_en_1_5]


### Cost per Item

You can check cost per Account, Product, Region and Service Group. Also, you can check their daily trend chart.

![][metering_dashboard_en_1_6]




### Monthly Cost Trend

You can check trend of monthly cost for 3 years at a maximum.You can also check trend of monthly cost from macro perspective.  

![][metering_dashboard_en_1_7]



--------------------------------------------------------------------------------




## Billing Analytics

Billing Analytics provides Intelligent Search feature, through which you can find cost more easily and quickly by setting the resource actually being used as a search condition.

>	Metering > *Billing Analytics*

![][metering_billing_analytics_en_1] 
![][metering_billing_analytics_en_2]



### Cost Search

By selecting a search condition, you can check cost incurred only on the selected item. 

1.  Select a Vendor and set a period you want to search.
    As you select a Vendor and search period, Account, Product, Region and Service Group used in the period will be shown as search conditions.
    ![][metering_billing_analytics_en_1_1]

2.  Select a search condition.
    As you select a condition, only the items related to the condition are indicated as selectable.
    ![][metering_billing_analytics_en_1_2]

3.  Click the [Apply] button.
    ![][metering_billing_analytics_en_1_3]

4.  You can see the search result.
    ![][metering_billing_analytics_en_1_4]





### View Search Result

You can go to the Service Group Management pane in which you can create or edit a Service Group.
For more information, please refer to the user guide for Service Group.

#### Cost per Item

You can check total cost which has been incurred for a period and condition you selected.
Also, you can check cost per Account/Product/Region/Service Group respectively. You can also check daily details and the trend chart for each item.
As you select one of the Total/Account/Product/Region/Service Group tabs, you can check cost of each item.
![][metering_billing_analytics_en_2_1]


#### Detailed Data

You can check details for all types of cost in accordance with the period and condition you selected.
![][metering_billing_analytics_en_2_2]



--------------------------------------------------------------------------------





## Billing

You can check monthly bill per Vendor for this month.
Also, you can check and compare monthly bills.

>	Metering > *Billing*

![][metering_billing_en_1]


### Bill

You can check a bill per Vendor/month, and you can compare it to the bill for the last month.

![][metering_billing_en_1_1]


1.  Select Vendor: You can select a Vendor you want to check a bill for. As you select a Vendor, a bill from the selected Vendor appears.
2.  Select Month: You can select the month you want to check a bill for. As you select month, a bill for the selected month appears.
3.  Monthly Summary: You can access briefing of requisition for the selected month.
4.  Last Month Summary: You can access briefing of requisition for the previous month of the selected one.

By clicking the \[->\] button, you can check the trend chart with which you can compare varied monthly cost for this year.

![][metering_billing_en_1_2]

1.  Monthly Trend Chart: You can check monthly cost with the trend chart.
2.  Monthly Data: You can check monthly cost with the grid.


### Cost per Cloud Account

You can check cost per registered account.
You can check the cost for every registered account or aggregate cost with its details.

![][metering_billing_en_2_1]


1.  Select Account: You can select an account you want to check a cost for. Summary/details of the selected account are shown.
2.  Summary: Summary of cost is shown, including total amount; supplementary services; and discount.
3.  Details: You can check details of the incurred cost.
4.  Change Display Mode: You can check details shown by aligning them according to conditions per Vendor as below.
    AWS: `Invoice`, `Account`, `Service Group`, `Region`, `Tag`
    Azure: `Subscription`, `Service Group`, `Region`, `Meta Category`



### Total Cost

You can check cost per Account/Invoice. You can also check history of its supplementary service.

![][metering_billing_en_2_2]

1.  Cost per Account: You can check cost per registered Account.  
2.  Cost per Invoice: You can check cost per Invoice.
3.  History of Supplementary Service: You can check history of and cost incurred by supplementary service.




--------------------------------------------------------------------------------



## CDN Metering

Amazon CloudFront's Cost, Data Transfer, and Requests summary can be found.
You can compare this month with the previous month.

>	Metering > *CDN Metering*



### Amazon CloudFront Summary

You can check fees / data transferred amount / request number and compare them with the previous month.

![][metering_cdn_en_1_1]

1.  COST: Compares hot bill, total, and estimated cost for this month and previous month's cost with the previous month.
	-	Hot bill: Shows cost which has been incurred in less than 24 hours so has not yet been fully settled.
	-	Complete Settlement: Shows total cost which has been fully settled for the period, from the first day of this month to now.  
	-	Estimated cost: Shows estimated cost for this month by analyzing usage pattern.

2.  DATA TRANSFER: Compares hot bill, total and estimated data transferred amount for this month and previous month's data transferred amount with the previous month.
	-	Hot bill: Shows data transferred amount which has been incurred in less than 24 hours so has not yet been fully settled.
	-	Complete Settlement: Shows total data transferred amount which has been fully settled for the period, from the first day of this month to now.
	-	Estimated cost: Shows estimated data transferred amount for this month by analyzing usage pattern.

3.  REQUESTS: Compares hot bill, total and estimated number of requests for this month and previous month's request number with the previous month.
	-	Hot bill: Shows request number which has been incurred in less than 24 hours so has not yet been fully settled.
	-	Complete Settlement: Shows total request number which has been fully settled for the period, from the first day of this month to now.
	-	Estimated cost: Shows estimated request number for this month by analyzing usage pattern.
	-	K: 1,000 , M: 1,000,000 , B: 1,000,000,000





### Amazon CloudFront Usage

You can check costs, data transferred amount and request number for each account, region and web distribution. 

![][metering_cdn_en_1_2]

1.  COST:You can check and compare the costs for each account, region and web distribution of the selected month.
2.  DATA TRANSFER:  You can check and compare the data transferred amount for each account, region and web distribution of the selected month.
3.  REQUESTS:  You can check and compare the request number for each account, region and web distribution of the selected month.





### Amazon CloudFront Usage Trend

You can check the daily, hourly or weekly costs, data transferred amount and request number. 

![][metering_cdn_en_1_3]

1.  COST: You can check the billing trend according to the selected method.
	-	Daily: You can check the daily fees of this month and previous month.
	-	Hourly: You can check the hourly fees of up to 8 days from the selected date.
2.  DATA TRANSFER: You can check the trend of data transferred amount according to the selected method.
	-	Daily: You can check the daily data transferred amount of this month and previous month in detail.
	-	Hourly: You can check the hourly data transferred amount of up to 8 days from the selected date in detail.
3.  REQUESTS: You can check the trend of request number according to the selected method.
	-	Daily: You can check the daily request number of this month and previous month.
	-	Hourly: You can check the hourly request number of up to 8 days from the selected date.

4.  Change Display Method: You can check the data shown in chart with the selected condition (daily/hourly).
    Daily: `Account`, `Region`, `Web distribution`, `Time gap`
    Hourly: `Account`, `Region`, `Web distribution`, `Select date`



--------------------------------------------------------------------------------





## Budgeting
You can enter a monthly budget per Vendor and check actual cost in comparison with your budget.
By setting the alarm, you can receive a notification via SMS or e-mail when cost exceeds a certain ratio or amount within the budget you set in advance.

>	Metering > *Budgeting*

![][metering_budgeting_en_1] 
![][metering_budgeting_en_3]


### Budget Overview

>	Metering > Budgeting > *Budget Overview*

You can check actual cost in your monthly budget with the graph.

![][metering_budgeting_en_1]

1.  Select Year: Shows status of budget expenditure for the selected year.
2.  Total Budget: You can compare total budget per Vendor and actual cost of all Vendors with the graph.
3.  Categorize Cloud Vendor: You can compare a budget and actual cost of each Vendor with the graph.You can select a Vendor you want to check for status for expenditure.


### Budget Setting

>	Metering > Budgeting > *Budget Setting*

You can enter a monthly budget of the respective Vendor.

![][metering_budgeting_en_2]

1.  Select Year: You can select the year you want to set a budget.You can set a budget for 3 years at a maximum.
2.  Budget Table: You can enter a monthly budget of each Vendor.As you double-click a cell, it becomes editable. You can enter the budget there.When you finish making a budget, click the [Save] button on the top to save changes.



### Alarm List

>	Metering > Budgeting > *Alarm List*

Regarding budget expenditure, you can set an alarm.

![][metering_budgeting_en_3]


1.  Add New Alarm: You can set a new budget alarm.By clicking the button, you can enter details for a new alarm.
2.  Alarm Name: Indicates the name of a new alarm.
3.  Warning: Indicates whether an alarm is On/Off.
4.  Alarm Mode: You can select how you receive an alarm.
5.  [Delete] button: By clicking the button, you can delete an alarm.
6.  [Edit] button: You can edit an alarm.





### Alarm Receiver

>	Metering > Budgeting > *Alarm Receiver*

You can set a receiver of alarms.

![][metering_budgeting_en_4]


1.  [Add New Receiver] button: You can add a new alarm receiver.By clicking the button, you can enter details of a new receiver.
2.  Receiver Name: Shows the name of an alarm receiver.
3.  Email: Shows the e-mail address of an alarm receiver.
4.  Cellphone: Shows cellphone number of an alarm receiver.
5.  Alarm Name: You can select which alarm is to be sent to a receiver.The Alarm List has a list of created alarms. From the list, you can select which alarm is to be sent to a receiver.



--------------------------------------------------------------------------------





## Cost Optimization

Based on Usage, Performance and Cost analysis, the Cost Optimization recommends you instances which require RI purchase or Right Sizing.
With the Intelligent Search, you can check which one of the searched instances requires RI purchase and which one requires Right Sizing.
Also, you can access data to analyze usage status of the purchased AWS RI.

>	Metering > *Cost Optimization*


### Right-sizing

>	Metering > Cost Optimization > *Right-sizing*

You can check which one of the searched instances requires RI purchase and which one requires Right-sizing, by using Frequency and Utilization filters respectively.

![][metering_cost_en_2]


1.  frequency: Through the Frequency, you can check instances which are consistently being used.
    The conditions can be changed, and you can go to the pane for RI simulation if you click the number.
2.  Utilization: Through the Utilization, you can check instances whose usage ratio is above/below a certain percentage for a certain period of time.
    The conditions can be changed, and you can go to the pane for Right Sizing if you click the number.
3.  All Instances/Filtered Instances of Search Result: Through Intelligent Search, you can check Frequency/Utilization of the searched instances.
    If you click the Search Result with Filtering tab, you can check only instances which correspond to Frequency and Utilization conditions you set.



#### RI Simulation

![][metering_cost_en_3]

Shows a list of instances filtered by Frequency you set, and you can carry out RI purchase simulation for the selected instance (instance with identical Type, Region and OS).

1.  Instance List : Shows a list of instances which correspond to Frequency condition you set.As you click the [RI Simulation] button, you can execute RI purchase simulation for instances of the selected Type, Region and OS.
2.  RI Simulation: You can compare current cost to the trend for estimated cost of RI purchase by selecting conditions for RI purchase.



#### Right Sizing

![][metering_cost_en_4]

Shows a list of instances filtered by Frequency you set, and you can carry out RI purchase simulation for the selected instance (instance with identical Type, Region and OS).

1.  Instance List: Shows a list of instances which correspond to Utilization filter you set.
    As you select an instance on the list, you can check usage ratio and information about usage time/cost of the selected instance.
2.  Resource Usage Ratio: Regarding the selected instance, you can check usage ratio of CPU, Memory and Disk for each period.
    With this, you can check when the selected instance has been used considerably and whether it has proper Type and Size.
3.  Time/Cost: You can check average daily usage time and average cost of the selected instance.
    With this, you can check daily usage pattern of the selected instance.





### AWS RI Analysis

>	Metering > Cost Optimization > *AWS Ri Analysis*

You can check usage history of the purchased RIs.

![][metering_cost_en_5]

1.  RI List: Shows a list of the purchased RIs.
    By selecting an RI, you can check usage status of the selected RI.
2.  RI Usage Status: Provides the graph with which you can compare the number of instance which actually has identical Type, Region and OS to the number of the selected RI.
    With this graph, you can check whether the purchased RI is being used efficiently.




--------------------------------------------------------------------------------




## Payment &amp; Discount

Provides Report Templates, and you can download the report you make.

>	Metering > *Payment &amp; Discount*


### Payment &amp; History
>	Metering > Payment &amp; Discount > *Payment &amp; Discount*

You can check history of claimed charge and its payment. 

![][metering_Payment_en_1]


### Discount History
>	Metering > Payment &amp; Discount > *Discount History*

You can check history of discounts you have had.

![][metering_Payment_en_2]


### Credit Information
>	Metering > Payment &amp; Discount > *Credit Information*

You can check issue status and usage status of credit.

![][metering_Payment_en_3]



--------------------------------------------------------------------------------




## Report

Provides Report Templates, and you can download a report you make.

>	Metering > *Report*

![][metering_report_subscribe_en_0_1]

Provides six types of Report Templates as below.

`Used Costs by Product/Region1`, `Used Costs by Product 1`, `Used Costs by Service 1`, `Used Costs by Name Tag1`, `Used Costs by Product/Region in Azure1`, `Used Costs by Product  in Azure1`

On the `My Report` menu, you can check a list of the created Reports and re-download them.
If you click each Report Template, the menu shown below appears on the right side.

1. Report Info: If you select the period and file format of a Report, you can download the Report accordingly.
    You can download it in .xls format.  
2. Log: Shows download history of Reports created with the selected Report Template.
    You can re-download the created Report.  
3. Subscription:You can subscribe via a registered email for the selected Report Template.
    You can choose between daily, weekly, or monthly subscriptions for each report, and you can specify a time.
    The report subscription list has a subscription that you set up yourself and a subscription that others have designated you as a subscriber to with the [Subscribe Setting] menu permission You can create, delete, and modify subscription lists that you have set up yourself, but you can only view the subscriptions that you are designated as a subscriber to subscriptions created by others from the [Report Subscription Menu]
    ![][metering_report_subscribe_en_1_1]

    1.  Create New Subscription
        You can create a new subscription by entering/selecting [Subscription name], [File format], [Language], [Standard time], [Subscription cycle], and [Time]. The default Subscription name, which consists of the report name, cycle, and language settings, is shown when you create it. You cannot set the same cycle for the same Report Template.
        ![][metering_report_subscribe_en_1_2]

    2.  Edit Subscription
        You can edit [Subscription name], [File format], [Language], [Standard time], [Subscription cycle], and [Time]. You cannot set the same cycle for the same Report Template.
        ![][metering_report_subscribe_en_1_3]

On the `My Report` menu, you can check a list of the created Reports and re-download them.




--------------------------------------------------------------------------------


## Report Subscription

We provide a report automatic mailing feature to all customers who use Metering services and who have the permission to edit the Report subscription menu.
Report subscriptions allow you to create a Report Subscription or manage it through edit or delete, view the history of each subscription, and download files that have been sent.
In addition, it provides a feature to manage recipient by creating or deleting external email or desired email.
Recipient can be specified when creating/editing subscription.
The History Tab allows you to view past send history including the send history of deleted subscriptions.

>	Metering > *Report Subscription*


### Subscription

>	Metering > Report Subscription > *Subscription*

Subscriptions are managed by report type and are created by specifying options such as send cycle (daily, weekly, monthly), language, and time.
In the subscription list, you can view subscription name, cycle, recipient information, and recent send date information, and you can also create a new subscription or manage the subscription through edit or delete.

`Used Costs by Product/Region1`, `Used Costs by Product1`, `Used Costs by Service1`, `Used Costs by Infra based Name Tag1`, `Used Costs by Product/Region in Azure1`, `Used Costs by Product in Azure1`

![][metering_subscribe_en_1_1]

1. Create Subscription 
    You can create a subscription through a four-step guide pop-up. In Step 1, Step 2, and Step 3, you can specify the required information and recipient for the subscription. In Step 4, you can confirm the information that you specified and change the subscription name.
    1.  Create New Subscription Step 1 
        -	Depending on the selected report type, you can check the subscription name and cycle of the subscription currently created. 
        -	Metering Report is provided in Excel format only, but exported Billing Report from Billing menu is provided in Excel and PDF Format and you can select the desired file format. 
        -	You can specify the language of the Email Template to be sent by selecting the language. Chinese, Korean, and English are provided. 
        -	Up to five subscriptions can be created depending on the report type. 
            ![][metering_subscribe_en_1_2]

    2.  Create New Subscription Step 2
        -	Select the subscription cycle and send time.
        -	The report send cycle can be selected among daily, weekly, or monthly.
        -	The Cost calculated by can be selected between Last month or This month
        -	If you want to receive daily subscription reports, select the time on the Daily tab.
        -	If you want to receive weekly reports, select the hour and day on the Weekly tab.
        -	If you want to receive monthly reports, select the date and time on the Monthly tab.
            ![][metering_subscribe_en_1_3]

    3.  Create New Subscription Step 3
    -   In step 3, you can specify a recipient. There are two types of Recipient list.
        It is divided into the list of users belonging to the company that have permission to access Service Portal and the “Registered Recipient” user list registered manually.
    -   You can set up to 10 recipients.
        ![][metering_subscribe_en_1_4]

    4.  Create New Subscription Step 4
        -	In the final step, the default Subscription name is created and you can edit it.
        -	Check the configured information and if there is information to edit, use the previous button to edit it.
            ![][metering_subscribe_en_1_5]


2. Edit Subscription
    If you need to edit the created subscription, click Edit button(![][metering_subscribe_edit]) in the image below from Subscription list to use the Edit popup.
    The Edit popup shows the information for the currently selected subscription. You can select the desired subscription information and click Edit button to complete or cancel the edit to undo the changes.
    ![][metering_subscribe_en_1_6]
    ![][metering_subscribe_en_1_7]

3. Delete Subscription
    -	If you no longer want to subscribe, click the “X” button(![][metering_subscribe_delete]) in the image below to proceed with the subscription deletion.
    -	Before you delete a subscription, check whether you want to delete it again. Click "Delete" button to complete the deletion.
    -	You can check the send history of deleted subscriptions from the History Tab if they have been sent.
        ![][metering_subscribe_en_1_8]






### History

>	Metering > Report Subscription > *History*

You can check the send history after setting the subscription, and download the file that was sent for the recent send (within 1 month) history. You can apply the report type, send date, and subscription name filter.

![][metering_subscribe_en_2_1]

1.	Report Name: The report name selected when setting the subscription is shown
2.	Subscription Name: The subscription name setting follows the format defined by default, but if there is a name that is designated separately, the designated name is shown. 
3.	Send Date: The sent date and time are shown in YYYY-MM-DD HH:mm format.
4.	Download: Files from the last 1 month can be downloaded through the download icon on the screen.
    If the delivery failed or the file is older than one month, the download button will be grayed out and will be shown as ‘cannot be downloaded’.
5.	Send Status: It is divided into Standby/Sent/Send failed according to the mail sending status.
6.	Recipients: The number of recipients specified as recipients when sending the subscription mail appears. You can check the Recipients Popup by clicking it.
    ![][metering_subscribe_en_2_2]






### Registered Recipient

>	Metering > Report Subscription > *Registered Recipient*

You can manage the users who can be designated as a subscription recipient by registering an email directly. When registering, you can enter [Email], [Name], and [Description] items.

![][metering_subscribe_en_3_1]

-	Name: The registered recipient’s name is shown. 
-	Email: The registered recipient’s email address is shown.
-	Subscription List: The number of subscriptions that registered recipient is specified as the recipient is shown.
    You can check the subscription list popup where the registered recipient is specified as the recipient by clicking it.
    The popup shows the subscription name, cycle, and file download button.
-	Description: The description of the registered recipient is shown.
-	Edit/Delete Button: You can edit the name, description information of the recipient, or delete the recipient’s information from the popup by clicking it. When recipient is deleted, the subscription information that the recipient was receiving is also deleted and the mail will no longer be sent.

1.  Add Recipient 
    You can register the external email address as a registered recipient by entering [Email], [Name], and [Description] information.
    To register more than one recipient, if you click [Save and continue to register recipient] button after entering the information, the popup will not be closed after registering recipients and you can continue to register recipients
    ![][metering_subscribe_en_3_2]

2.  Edit Recipient 
    Click ![][metering_subscribe_edit] icon in the list to edit the recipient information.
    You can edit [Name] and [Description], but [Email] cannot be modified.
    If you need to edit [Email], delete the recipient information using ![][metering_subscribe_delete_black]button and register a new one.
    ![][metering_subscribe_en_3_3] 







<!-- 이미지 모음 -->
[metering_dashboard_en_1]:           ./resource/metering_dashboard_en_1.png
[metering_dashboard_en_1_1]:         ./resource/metering_dashboard_en_1_1.png
[metering_dashboard_en_1_2]:         ./resource/metering_dashboard_en_1_2.png
[metering_dashboard_en_1_3]:         ./resource/metering_dashboard_en_1_3.png
[metering_dashboard_en_1_4_1]:       ./resource/metering_dashboard_en_1_4_1.png
[metering_dashboard_en_1_4_2]:       ./resource/metering_dashboard_en_1_4_2.png
[metering_dashboard_en_1_5]:         ./resource/metering_dashboard_en_1_5.png
[metering_dashboard_en_1_6]:         ./resource/metering_dashboard_en_1_6.png
[metering_dashboard_en_1_7]:         ./resource/metering_dashboard_en_1_7.png
[metering_billing_analytics_en_1]:   ./resource/metering_billing_analytics_en_1.png
[metering_billing_analytics_en_2]:   ./resource/metering_billing_analytics_en_2.png
[metering_billing_analytics_en_1_1]: ./resource/metering_billing_analytics_en_1_1.png
[metering_billing_analytics_en_1_2]: ./resource/metering_billing_analytics_en_1_2.png
[metering_billing_analytics_en_1_3]: ./resource/metering_billing_analytics_en_1_3.png
[metering_billing_analytics_en_1_4]: ./resource/metering_billing_analytics_en_1_4.png
[metering_billing_analytics_en_2_1]: ./resource/metering_billing_analytics_en_2_1.png
[metering_billing_analytics_en_2_2]: ./resource/metering_billing_analytics_en_2_2.png
[metering_billing_en_1]:             ./resource/metering_billing_en_1.png
[metering_billing_en_1_1]:           ./resource/metering_billing_en_1_1.png
[metering_billing_en_1_2]:           ./resource/metering_billing_en_1_2.png
[metering_billing_en_2_1]:           ./resource/metering_billing_en_2_1.png
[metering_billing_en_2_2]:           ./resource/metering_billing_en_2_2.png
[metering_cdn_en_1_1]:               ./resource/metering_cdn_en_1_1.png
[metering_cdn_en_1_2]:               ./resource/metering_cdn_en_1_2.png
[metering_cdn_en_1_3]:               ./resource/metering_cdn_en_1_3.png
[metering_budgeting_en_1]:           ./resource/metering_budgeting_en_1.png
[metering_budgeting_en_3]:           ./resource/metering_budgeting_en_3.png
[metering_budgeting_en_1]:           ./resource/metering_budgeting_en_1.png
[metering_budgeting_en_2]:           ./resource/metering_budgeting_en_2.png
[metering_budgeting_en_3]:           ./resource/metering_budgeting_en_3.png
[metering_budgeting_en_4]:           ./resource/metering_budgeting_en_4.png
[metering_cost_en_2]:                ./resource/metering_cost_en_2.png
[metering_cost_en_3]:                ./resource/metering_cost_en_3.png
[metering_cost_en_4]:                ./resource/metering_cost_en_4.png
[metering_cost_en_5]:                ./resource/metering_cost_en_5.png
[metering_Payment_en_1]:             ./resource/metering_Payment_en_1.png
[metering_Payment_en_2]:             ./resource/metering_Payment_en_2.png
[metering_Payment_en_3]:             ./resource/metering_Payment_en_3.png
[metering_report_subscribe_en_0_1]:  ./resource/metering_report_subscribe_en_0_1.png
[metering_report_subscribe_en_1_1]:  ./resource/metering_report_subscribe_en_1_1.png
[metering_report_subscribe_en_1_2]:  ./resource/metering_report_subscribe_en_1_2.png
[metering_report_subscribe_en_1_3]:  ./resource/metering_report_subscribe_en_1_3.png
[metering_subscribe_en_1_1]:         ./resource/metering_subscribe_en_1_1.png
[metering_subscribe_en_1_2]:         ./resource/metering_subscribe_en_1_2.png
[metering_subscribe_en_1_3]:         ./resource/metering_subscribe_en_1_3.png
[metering_subscribe_en_1_4]:         ./resource/metering_subscribe_en_1_4.png
[metering_subscribe_en_1_5]:         ./resource/metering_subscribe_en_1_5.png
[metering_subscribe_edit]:           ./resource/metering_subscribe_edit.png
[metering_subscribe_en_1_6]:         ./resource/metering_subscribe_en_1_6.png
[metering_subscribe_en_1_7]:         ./resource/metering_subscribe_en_1_7.png
[metering_subscribe_delete]:         ./resource/metering_subscribe_delete.png
[metering_subscribe_en_1_8]:         ./resource/metering_subscribe_en_1_8.png
[metering_subscribe_en_2_1]:         ./resource/metering_subscribe_en_2_1.png
[metering_subscribe_en_2_2]:         ./resource/metering_subscribe_en_2_2.png
[metering_subscribe_en_3_1]:         ./resource/metering_subscribe_en_3_1.png
[metering_subscribe_en_3_2]:         ./resource/metering_subscribe_en_3_2.png
[metering_subscribe_edit]:           ./resource/metering_subscribe_edit.png
[metering_subscribe_delete_black]:   ./resource/metering_subscribe_delete_black.png
[metering_subscribe_en_3_3]:         ./resource/metering_subscribe_en_3_3.png 
