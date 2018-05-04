---
service : asset 
title   : Asset Management
en : true
...

<!-- TOC -->




# Asset Management

You can check resource status and its history of operating Multi Cloud and Hybrid Infrastructure.


--------------------------------------------------------------------------------



## Dashboard

You can access summary about usage and performance of operating resources.

>	Asset Management > *Dashboard*

![][asset_dashboard_1]


### Cloud Vendor

Shows the Cloud Vendors currently in use and Account information of each Vendor.
If you select Cloud Vendor and Account, Dashboard shows you resource status of the selected Vendor and Account.


### Total Summary

Shows Server and DB quantity of the selected Vendor and Account.
You can check the item 'On-demand' and value of Auto Scalling Instance separately. It also provides volume of each status.

### Resources

Shows the list of all products in use by the selected Cloud Vendor. You can check usage of each product.

### Server
With the trend chart, you can check usage and performance of Servers in use.

1.  Server/Usage - Total Instance : Provides the trend chart of usage of Server for the last 7 days and last week.
2.  Server/Performance - Total CPU avg. utiliz : Provides the trend chart of average usage of CPU for the last 7 days and last week.
3.  Server/Performance - CPU Utilization with Threshold : By setting Threshold, you can check any instance whose CPU usage is above/below than the Threshold for the last 7 days and last week.
4.  Server/Performance - Memory Utilization with Threshold : By setting Threshold, you can check any instance whose Memory usage is above/below than the Threshold for the last 7 days and last week.
5.  Server/Performance - Disk Utilization with Threshold : By setting Threshold, you can check any instance whose Disk usage is above/below than the Threshold for the last 7 days and last week.


### Database & Storage

With the trend chart, you can check usage and performance of Database & Storage in use. 

Database/Usage - Total Instance : Provides trend chart of usage of DB for the last 7 days and last week.

1.  Storage(S3)/Usage - Total Instance : Provides trend chart of usage of S3 for the last 7 days and last week.
2.  Disk/Usage - Total Instance : Provides trend chart of usage of Disk for the last 7 days and last week.
3.  Database/Performance - CPU Utilization with Threshold : By setting Threshold, you can check any instance whose CPU usage is above/below than the Threshold for the last 7 days and last week.
4.  Database/Performance - Read iops / Write iops Average Threshold : By setting Threshold, you can check any instance whose Read/Write iops is above/below than the Threshold for the last 7 days and last week.

### Network

With the trend chart, you can check usage of Network resources in use.

1.  Private Network/Usage : Provides trend chart of usage of Private Network resources for the last 7 days and last week. The bottom of the trend chart has the list and volumes of particular resources. By selecting each resource, you can check its own trend chart.
2.  Network/Usage : Provides trend chart of usage of Network resources for the last 7 days and last week. The bottom of the trend chart has the list and volumes of particular resources. By selecting each resource, you can check its own trend chart.


--------------------------------------------------------------------------------



## Service Group

Provides the 'Service Group' feature which you can group all resources of Multi Cloud and Hybrid environment with operating service standard. 
By re-grouping resources with the Service Group feature, you can check resource usage, cost and status of operating services.

>	Asset Management > *Service Group*

![][asset_service_group_1]


### Cloud Vendor

Shows the Cloud Vendors currently in use and Account information of each Vendor.
If you select Cloud Vendor and Account, Dashboard shows you resource status of the selected Vendor and Account.



### Managing Service Group

You can go to the Service Group Management pane on which you can create and edit Service Group.
For more information, please refer to the 'Managing Service Group' documentation.


### Service Group Card

You can check volumes, types and costs of resources being used by Service Group.

1.  Service Group Name : The name of Service Group is shown.
2.  Product : Total amount of Products in Service Group and the amount per Vendor are shown.
3.  Monthly Aggregate : Total cost of resource usage in Service Group is shown.
4.  Product Card : The name of resource included in Service Group and cost incurred by using the resource are shown.




--------------------------------------------------------------------------------




## Usage

You can check the current status and history of resource usage per Vendor.

>	Asset Management > *Usage*


### Current

>	Asset Management > Usage > *Current*

You can check resource usage status per Vendor.

![][asset_usage_current]

Provides the pie chart of Status, Region and Type respectively for the resources listed below.
In addition, you can check the list of resources in use and also details about each resource on the list.

#### Amazon Web Service

You can check usage status of AWS resources listed below.
`AMIs`, `Auto Scailing Groups`, `Auto Scailing Instances`, `EBS`, `EC2`, `EIP`, `Internet Gateways`, `Lamda`, `Launch Configurations`, `Load Balancer`, `Network ACLs`, `Network Interface`, `RDS`, `Route Tables`, `S3`, `Security Groups`, `Snapshot`, `Subnets`, `VPC`




#### Microsoft Azure

You can check usage status of Azure resources listed below.
`CDN`, `Cloud Service`, `Database`, `Virtual Network Gateway`, `Network Security Group`, `Storage`, `Virtual Network Subnet`, `Traffic Manager`, `Virtual Network`, `Virtual Machine`




### History

>	Asset Management > Usage > *History*

You can check history of resource usage per Vendor. 

![][asset_usage_history]

Provides trend chart of usage history of the resources listed below on an hourly/daily/monthly basis. Also provides details about each resource on the list.

#### Amazon Web Service

You can check usage history of AWS resources listed below.
`EC2`, `EBS`, `RDS`



#### Microsoft Azure

You can check usage history of Azure resources listed below.
`Database`, `Storage`, `Virtual Machine`



--------------------------------------------------------------------------------




## Performance

You can check current status and history for Performance of resources in use.

>	Asset Management > *Performance*

### Current
>	Asset Management > Performance > *Current*

You can check Performance status of resources in use.

![][asset_performance_current]



#### Amazon Web Service

You can check Performance status of AWS resources listed below.

<table>
    <tbody>
        <tr>
            <th>Resources</th>
            <th>Items</th>
            <th>Remarks</th>
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






#### Microsoft Azure

You can check Performance status of Azure resources listed below.

<table>
    <tbody>
        <tr>
            <th>Resources</th>
            <th>Items</th>
            <th>Remarks</th>
        </tr>
        <tr>
            <td rowspan="4">Virtual Machine</td>
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
            <td rowspan="7">SQL Database</td>
        <td>Resource Info</td>
        <td></td>
        </tr>
        <tr>
            <td>CPU Utilization (%)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Physical Data Read Percent (%)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Connection Success (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Connection Fail (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>DTU Consumption (%)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>DeadLock (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
    </tbody>
</table>






### History

>	Asset Management > Performance > *History*

You can check Performance history of resource for a certain period of time you set.

![][asset_performance_history]




#### Amazon Web Service
You can check Performance history of AWS resources listed below.

<table>
    <tbody>
        <tr>
            <th>Resources</th>
            <th>Items</th>
            <th>Remarks</th>
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








#### Microsoft Azure
You can check Performance history of Azure resources listed below.

<table>
    <tbody>
        <tr>
            <th>Resources</th>
            <th>Items</th>
            <th>Remarks</th>
        </tr>
        <tr>
            <td rowspan="4">Virtual Machine</td>
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
            <td rowspan="7">SQL Database</td>
            <td>Resource Info</td>
            <td></td>
        </tr>
        <tr>
            <td>CPU Utilization (%)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Physical Data Read Percent (%)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Connection Success (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>Connection Fail (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>DTU Consumption (%)</td>
            <td>Min, Max, Avg</td>
        </tr>
        <tr>
            <td>DeadLock (EA)</td>
            <td>Min, Max, Avg</td>
        </tr>
    </tbody>
</table>








## Intelligent Search

Provides 'Intelligent Search' feature based on interrelation between resources in use.
Shows a list of all resources used for a certain period of time you set. You can use them as search conditions.
You can use Intelligent Search feature in Usage menu and Performance menu.

>	Asset Management > Usage > *Intelligent Search*
>	Asset Management > Performance > *Intelligent Search*

![][asset_intelligent_1]


1.  Duration : You can set a period of time you want to check history for.In accordance with a period you set, available search conditions may change.Resources used for a period you set will be automatically included in search conditions.
2.  Search Conditions : Vendor, Account, Product, Service Group and Tag will be shown as search conditions.According to a period you set, available search conditions may change considerably.If you select search conditions, search conditions related to the selected condition only become available to be selected.

After selecting the duration and search conditions, click [Apply] button and search results of the duration and conditions you selected will be shown.




--------------------------------------------------------------------------------




## Report

Provides Report Templates. You can also download Reports which have made.

>	Asset Management > *Report*

![][asset_report]



### Report Template

Provides three types of Report Templates listed below.
`Summary`, `Usage`, `Performance`

If you click each Report Template, the menu listed below appears on the right side.

#### Report Info
As you set a period and select file format of a Report, you can download a Report accordingly .xls and .pdf formats are available for download.



#### Log
Shows download history of Reports created with the selected Report Template.You can download created Reports again.



#### Subscribe

Each user can subscribe to the required reports via the registered email. There are three types of reports: Summary, Usage, and Performance.
You can subscribe to each report by specifying the type of subscription you want (daily, weekly, monthly) and a time you want to receive a subscription.
The report subscription list has subscriptions that you set up yourself and subscriptions that others have designated you as a subscriber to with the [Subscribe Setting Menu] permission.
You can create, delete, and modify subscription lists that you have set up yourself, but you can only view the subscriptions that you are designated as a subscriber to subscriptions
created by others from the [Subscribe Setting Menu].

1.  Create New Subscription
    ![][asset_report_subscribe_tab_create]

    You can create a new subscription by entering/selecting [Subscription name], [File format], [Language], [Standard time], [Subscription cycle], and [Time].
    The default Subscription name, which consists of the report name, cycle, and language settings, is shown when you create it. You cannot set the same cycle for the same Report Template.

2.  Edit Subscription
    ![][asset_report_subscribe_tab_edit]

    You can edit [Subscription name], [File format], [Language], [Standard time], [Subscription cycle], and [Time]. You cannot set the same cycle for the same Report Template.






--------------------------------------------------------------------------------





## Report Subscription

We provide a report automatic mailing feature to all customers who use Asset and Metering services and who have the permission to edit the Report subscription menu.
Report subscriptions allow you to create a Report Subscription or manage it through edit or delete, view the history of each subscription, and download files that have been sent.
In addition, it provides a feature to manage recipient by creating or deleting external email or desired email. Recipient can be specified when creating/editing subscription.
The History Tab allows you to view past send history including the send history of deleted subscriptions. 

>	Asset Management > *Report Subscription*



### Subscription

>	Asset Management > *Report Subscription > *Subscription**

Subscriptions are managed by report type (Summary, Usage, Performance) and are created by specifying options such as send cycle (daily, weekly, monthly), language,
and time. In the subscription list, you can view subscription name, cycle, recipient information, and recent send date information, and you can also create a new subscription or manage the subscription
through edit or delete.

![][asset_subscribe_subscriptionlist_list]




### Create Subscription

You can create a subscription through a four-step guide pop-up. In Step 1, Step 2, and Step 3, you can specify the required information and recipient
for the subscription. In Step 4, you can confirm the information that you specified and change the subscription name.


1.  Create New Subscription Step 1
    -   Depending on the selected report type (Summary, Usage, Performance), you can check the subscription name and cycle of the subscription currently created.
    -   Asset Report is provided in Excel and PDF format and you can select the desired file format.
    -   You can specify the language of the Email Template to be sent by selecting the language. Chinese, Korean, and English are provided.
    -   Up to five subscriptions can be created depending on the report type.
    ![][asset_subscribe_subscriptionlist_list_create_step1]



2.  Create New Subscription Step 2
    -	Select the subscription cycle and send time.
    -	The report send cycle can be selected among daily, weekly, or monthly.
    -	If you want to receive daily subscription reports, select the time on the Daily tab.
    -	If you want to receive weekly reports, select the hour and day on the Weekly tab.
    -	If you want to receive monthly reports, select the date and time on the Monthly tab.
    -	If you specify the date as the 31st and the corresponding month does not have a 31st day, the report will be sent on the last day of the month.
        ![][asset_subscribe_subscriptionlist_list_create_step2] 


3.  Create New Subscription Step 3

    -   In step 3, you can specify a recipient. There are two types of Recipient list. It is divided into the list of users belonging to the company that have permission to access Service Portal
    and the “Registered Recipient” user list registered manually.
    -   You can set up to 10 recipients.
        ![][asset_subscribe_subscriptionlist_list_create_step3]

4.  Create New Subscription Step 4
    -   In the final step, the default Subscription name is created and you can edit it.
    -   Check the configured information and if there is information to edit, use the previous button to edit it.
        ![][asset_subscribe_subscriptionlist_list_create_step4]



#### Edit Subscription

If you need to edit the created subscription, click Edit button in the image below from Subscription list to use the Edit popup.
The Edit popup shows the information for the currently selected subscription. You can select the desired subscription information and click Edit button to complete or cancel the edit to undo the changes.

![][asset_subscribe_subscriptionlist_list_edit] 
![][asset_subscribe_subscriptionlist_list_edit_popup]


#### Delete Subscription

-	If you no longer want to subscribe, click the “X” button in the image below to proceed with the subscription deletion.
-	Before you delete a subscription, check whether you want to delete it again. Click "Delete" button to complete the deletion.
-	You can check the send history of deleted subscriptions from the History Tab if they have been sent.
    ![][asset_subscribe_subscriptionlist_list_delete]
    ![][asset_subscribe_subscriptionlist_list_delete_popup]




#### Subscription History

>	Asset Management > *Report Subscription* > *Subscription History*

You can check the send history after setting the subscription, and download the file that was sent for the recent send (within 1 month) history.
You can apply the report type, send date, and subscription name filter.


#### Subscription History
    -	Report Name : The report name selected when setting the subscription is shown.
    -	Subscription Name : The subscription name setting follows the format defined by default, but if there is a name that is designated separately, the designated name is shown.
    -	Send Date : The sent date and time are shown in YYYY-MM-DD HH:mm format.
    -	Download : Files from the last 1 month can be downloaded through the download icon on the screen. If the delivery failed or the file is older than one month, the download button will be grayed out and will be shown as ‘cannot be downloaded’.
    -	Send Status : It is divided into Standby/Sent/Send failed according to the mail sending status.
    -	Recipients : The number of recipients specified as recipients when sending the subscription mail appears. You can check the Recipients Popup by clicking it.
        ![][asset_subscribe_history_list]



#### Registered Recipient

>	Asset Management > *Report Subscription > *Registered Recipient**

You can manage the users who can be designated as a subscription recipient by registering an email directly.
When registering, you can enter [Email], [Name], and [Description] items.




### Registered Recipient
    -	Name : The registered recipient’s name is shown.
    -	Email : The registered recipient’s email address is shown.
    -	Subscription List : The number of subscriptions that registered recipient is specified as the recipient is shown. You can check the subscription list popup where the registered recipient is specified as the recipient by clicking it. The popup shows the subscription name, cycle, and file download button.
    -	Description : The description of the registered recipient is shown.
    -	Edit/Delete Button : You can edit the name, description information of the recipient, or delete the recipient’s information from the popup by clicking it. When recipient is deleted, the subscription information that the recipient was receiving is also deleted and the mail will no longer be sent.
        ![][asset_subscribe_recipient_list]


#### Add Recipient

You can register the external email address as a registered recipient by entering [Email], [Name], and [Description] information. To register more than one recipient,
if you click [Save and continue to register recipient] button after entering the information, the popup will not be closed after registering recipients and you can continue to register recipients.

![][asset_subscribe_recipient_list_add_popup]


#### Edit Recipient

Click edit button in the list to edit the recipient information. You can edit [Name] and [Description], but [Email] cannot be modified.
If you need to edit [Email], delete the recipient information using delete button and register a new one.

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

