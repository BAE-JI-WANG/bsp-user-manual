
---
service : portal 
title   : Service Portal
en : true
...

<!-- TOC -->



# Service Portal

You can manage the summary of services in use; permission of members; Cloud Account; and Service Group.


--------------------------------------------------------------------------------



## Dashboard

>   Service Portal - *Dashboard*

Dashboard provides cards that include the summary of services currently in use. It also provides you shortcuts through which you can immediately go to each service.
In addition, it provides you details about services currently not in use and you can immediately subscribe to the service with it.

![][dashboard_1_1]

### Asset Management

You can access summary of Usage and Performance of Infrastructure resources currently in use.
![][dashboard_2_1]

1.  Shortcut to Asset Management
    It provides a link to the Asset Management service. Click the name to go to the Dashboard of Asset Management service.
2.  Total
    You can check volume distribution in accordance with performance and usage of DB, Hybrid server and all Multi Clouds being operated.
3.  Information per Vendor
    You can check volume distribution in accordance with performance and usage of DB and server for each Vendor.
    If you unfold the card, you can check volume distribution in accordance with performance and usage of DB and server for the Vendor.

### Metering

You can check costs incurred by resource usage.

![][dashboard_2_2]

1.  Shortcut to Metering
    It provides a link to the Metering service. Click the name to go to the Dashboard of Metering.
2.  Total
    It shows cost incurred by all operating Multi Clouds.
    Cost incurred and estimated total cost for this month will be shown. Also, you can check these in the bar graph.
    Based on the current date, it shows cost incurred during the same period for the last month and total cost for the last month. Also, you can check these in the bar graph.
3.  Information for each Vendor
    You can check cost incurred for each Vendor.
    If you unfold the card, you can check the following costs for the each Vendor: total cost; current and estimated cost for this month; and last month total and cost for same period in last month.

### Monitoring Dahsboard

You can check status of operating servers and the number of alarms.

![][dashboard_2_3]

1.  Shortcut to Monitoring Dashboard
    It provides a link to the Monitoring Dashboard service. Click the name to go to the Dashboard of Monitoring.
2.  Total
    It shows volumes of all operating resources according to each status.
    You can check the number of occurred alarms.

3.  Information for each Vendor
    It shows volume of resources according to each status and the number of alarms for each Vendor.
    If you unfold the card, you can check volume of resources in use according to each status and the number of alarms for each Vendor.

### Introduction and Subscription for Services

It provides introduction and shortcuts of other available services for subscription.
You can check the content of the service and immediately subscribe to it.

![][dashboard_2_4]

1.  LEARN MORE
    This is the shortcut to service details page.
2.  Service Subscription
    This is the shortcut to service subscription page.


--------------------------------------------------------------------------------




## User Group

>   Service Portal - *User Group*

You can manage permission of a user through a User Group.
You can manage and edit permission of all users at the same time, by linking a Company Group to a User Group.
Multiple Company Groups can be linked to a User Group and users in a User Group have permission for the respective service/menu and Cloud Accounts of companies included in a Company Group.

Such groups are interlinked in the structure as below.

![][permission_structure]

### Creating New User Group

You can create a new User Group and set permission of its users by linking a Company Group to it.

#### Creating User Group

1.  Click the \[Add Group\] button.
    ![][user_group_1_1_1]

2.  The "Create a New User Group" pop-up appears.
    Enter the name of a new User Group and click the \[OK\] button.
    ![][user_group_1_1_2]

3.  The User Group list shows that a new User Group has been added.


### Adding User

1.  On the User Group list, click the \[Edit\] button of a new User Group.
    ![][user_group_1_2_1]

2.  Click the \[{+}\] button of the User list.
    ![][user_group_1_2_2]

3.  The "Edit a User of a User Group" pop-up appears.
    In the pop-up, the left list indicates users added to the current User Group and the right one indicates all users registered on the current company. In the right list, select a user you want to add to a new User Group, and click the !!!!!! 여기는 추가버튼 들어가야됨. button.
    ![][user_group_1_2_3]

4.  After adding a user, click the \[Apply\] button.
    ![][user_group_1_2_4]

5.  The User list shows that the selected user has been added to a User Group.
    ![][user_group_1_2_5]


#### Setting Permission

1.  Select a Company Group you want to link to a User Group.
    In the Company Group list, select a checkbox of a Company Group you want to link.
    You can select multiple Company Groups.
    You can configure settings for a Company Group on the Permission menu.
    ![][user_group_1_3_1]

2.  Unfold the linked Company Group to check the list of its companies.
    As you select a company, the "Service Permission Group" list and "Cloud Group" list which are linked to the selected company will be shown.
    Select a Service Permission Group and Cloud Group you want to assign to the selected User Group for each company.
    ![][user_group_1_3_2]

3.  Click the \[Save\] button.
    ![][user_group_1_3_3]

4.  The User Group list shows that your new setting for permission has been applied.  
    ![][user_group_1_3_4]


### Editing User Group

You can edit members of or modify permission of a current User Group.

#### Adding/Removing User

1.  On the User Group list, click the \[Edit\] button of a User Group whose member is to be added/removed.
    ![][user_group_1_2_1]

2.  Click the \[+\] button of the User list.
    ![][user_group_1_2_2]

3.  The “Edit a Group User” pop-up appears.
    You can add a user to a User Group by selecting a user in the list of all users on the right and clicking the !!!! \[<-\] button (Add), or you can remove a user from a User Group by selecting a user in the list of users added to User Group on the left and clicking the !!!!\[->\] button (Remove).
    ![][user_group_1_2_3]

4.  After editing a user, click the \[Apply\] button.
    ![][user_group_1_2_4]

5.  The User list shows that a user has been edited.  
    ![][user_group_1_2_5]


#### Modifying Permission

1.  On the User Group list, click the \[Edit\] button of a User Group whose permission is to be modified.
2.  By changing “Company Group”, you can change a Company Group you want to link.  
    ![][user_group_2_2_1]

3.  You can select a “Service Permission Group” and “Cloud Group” for each company by selecting a company in the selected “Company Group”, in order to modify permission.  
    ![][user_group_1_3_2]

4.  Click the \[Save\] button to save changes.



### Deleting User Group

You can delete a User Group.
If you delete a User Group, users included in the User Group will be moved to a Default Group.

1.  Select a User Group you want to delete and click the \[X\] button.

    ![][user_group_3_1]

2.  The “Confirm to Delete a Group” pop-up appears.
    When you click the \[OK\] button, a User Group will be deleted and its users will be moved to a Default Group.

    ![][user_group_3_2]


### Inviting New User

You can invite a new user to a company so that the user becomes a member of the company.

1.  Click the \[Inviting New User\] button.

    ![][user_group_4_1]

2.  The "Inviting New User” pop-up appears.
    In the pop-up, select the e-mail address of a user you want to invite. Then select a User Group to which the user will belong and click the \[Send\] button.

    ![][user_group_4_2]

3.  An invitation letter is sent to the user via e-mail.
    As a new account is created via this e-mail, inviting a new user is completed.







--------------------------------------------------------------------------------






## Permission

>   Service Portal - *Permission*

You can make a group for each: accounts of companies, services and Cloud services you access.
You can control permission of users in User Group by linking it with Account groups of created companies, services and Clouds.
On the Permission menu, you can create groups for Accounts of companies, services and Clouds. Also, you can edit or delete such groups.

-   *Company Group* : You can manage multiple companies by binding them as a group.
-   *Service Permission Group* : You can manage service and each menu as well as permission of menus by binding them as a group.
-   *Cloud Group* : You can manage Cloud Vendors and Accounts (Subscriptions) of each Vendor by binding them as a group.


Such groups are interlinked in the structure as below.  
![][permission_structure]

### Company Group

>   Service Portal - Permission - *Company Group*

Individual companies may be bound in a Company Group.
You can manage companies who have joined as departments respectively, by binding them as a Company Group regarded as one company. Otherwise, companies may join as affiliates respectively and you can bind them as a group and manage them as a Group Company.

#### View Company Group Information

You can check information about a Company Group already added.

1.  On the Company Group list, click a Company Group you want to check information for.
    ![][company_group_1_1]

2.  On the Company Group Details pane, a list of companies included in the selected Company Group is shown.
3.  On the Company list, click \[+\] button to check service information in use by the selected company.
    ![][company_group_1_2]


#### Creating a Company Group

You can create a new Company Group and add a company to the Company Group.

1.  Click the \[Add Company Group\] button.
    ![][company_group_2_1]

2.  The “Create a New Company Group” pop-up appears.
    ![][company_group_2_2]

3.  In the “Create a New Company Group” pop-up, enter the name of a new Company Group and click the \[OK\] button.
    ![][company_group_2_3]

4.  The Company Group lists shows that a new Company Group has been added.
    ![][company_group_2_4]

5.  On the Company Group Details pane, a list of companies available for a Company Group is shown.
    Select a company you want to add by selecting its checkbox.
    ![][company_group_2_5]

6.  Click the \[Save Changes\] button.
    ![][company_group_2_6]

7.  Creating a new Company Group is completed.


#### Editing a Company Group

You can change the name of a Company Group already added. Also, you can add a new company or remove an added company.

#### Renaming a Company Group

1.  On the Company Group list, select a Company Group you want to change the name of.
2.  On the Company Group Details pane, information about the selected Company Group is shown.
3.  Click the \[Edit\] button next to the name of a Company Group.
    ![][company_group_3_1_1]

4.  The name of a Company Group becomes editable.
    Change the name of a Company Group.
    ![][company_group_3_1_2]

5.  After changing the name, click the \[{Check}\] button.
    ![][company_group_3_1_3]

6.  Changing the name of a Company Group is completed.





#### Adding / Removing a Company in Company Group

1.  On the Company Group list, select a Company Group you want to add / remove.
2.  On the Company Group Details pane, a list of companies which are either already added or available to be added is shown.
3.  Deselect a checkbox of already added company (Remove) or select a checkbox of a company you want to add (Add).
    ![][company_group_3_2_1]

4.  Click the \[Save Changes\] button.
    ![][company_group_3_2_2]

5.  Adding / Removing a company in Company Group is completed.

#### Deleting a Company Group

You can delete added Company Group.

1.  On the Company Group list, click a Company Group you want to delete.
2.  Click the \[X\] button.
    ![][company_group_4_1]

3.  A pop-up to confirm deletion of the group appears.
    Click the \[OK\] button of the pop-up.
    ![][company_group_4_2]

4.  Deleting a Company Group is completed.




### Service Permission Group

>   Service Portal - Permission - *Service*

You can group services and permission of editing menus in services.
You can link a Service Permission Group to a User Group so that you can easily set menus which users in User Group can see, and permission of editing each menu.




#### View Service Permission Group Information

You can check information about Service Permission Group already added.

1.  On the Service Permission Group list, click a Company Group you want to check information for.
    ![][bsp_group_1_1]

2.  On the Service Permission Group Details pane, services included in the selected Service Permission Group is shown.
    ![][bsp_group_1_2]

3.  Click the \[+\] button of each service to check available menus and permission of each menu.
    ![][bsp_group_1_3]


#### Creating a Service Permission Group

You can create a new Service Permission Group and set permission of each service / menu.

1.  Click the \[Add New Service Permission Group\] button.
    ![][bsp_group_2_1]

2.  The “Create a New Service Permission Group” pop-up appears.  
    ![][bsp_group_2_2]

3.  On the “Create a New Service Permission Group” pop-up, enter the name of new Service Permission Group and click the \[OK\] button.  
    ![][bsp_group_2_3]

4.  The Service Permission Group list shows that a new Service Permission Group has been added.  
    ![][bsp_group_2_4]

5.  On the Service Permission Group Details pane, a list of available services is shown.
    The list shows services you have subscribed to.
    By clicking the \[+\] button next to the service name, you can set detailed permission of each menu in the service.
    Select a checkbox to set permission of each menu.  
    ![][bsp_group_2_5]

6.  Click the \[Save Changes\] button 
    ![][bsp_group_2_6]

7.  Adding a new Service Permission Group is completed.




#### Editing a Service Permission Group

You can change the name of a Service Permission Group already added and modify permission of each service.




#### Renaming a Service Permission Group

1.  On the Service Permission Group list, select a Service Permission Group you want to change the name of.
2.  On the Service Permission Group Details pane, information about the selected Service Permission Group is shown.
3.  Click the \[{Pencil}\] button next to the name of a Service Permission Group.  
    ![][bsp_group_3_1_1]

4.  The name of a Service Permission Group becomes editable.
    Change the name of a Service Permission Group.  
    ![][bsp_group_3_1_2]

5.  After changing the name, click the \[OK\] button.  
    ![][bsp_group_3_1_3]

6.  Changing the name of a Service Permission Group is completed.





#### Modifying Permission of a Service Permission Group

1.  On the Service Permission Group list, select a Service Permission Group you want to modify permission.
2.  On the Service Permission Group Details pane, you can see a list of available services and permission of menus in the service.
3.  You can deselect a checkbox of the menu in service (Remove Permission) or modify the permission of each menu (Modify Permission).  
    ![][bsp_group_3_2_1]

4.  Click the \[Save Changes\] button.  
    ![][bsp_group_3_2_2]

5.  Modifying permission of a Service Permission Group is completed.




#### Deleting a Service Group

You can delete added Service Permission Group.

1.  On the Service Permission Group list, select a Service Permission Group you want to delete.
2.  Click the \[X\] button.  
    ![][bsp_group_4_1]

3.  A pop-up to confirm deletion of the group appears.
    Click the \[OK\] button of the pop-up.  
    ![][bsp_group_4_2]

4.  Deleting a Service Permission Group is completed.





### Cloud Group

Service Portal - Permission - *Cloud*

You can make a group for permission to edit Accounts (Subscriptions) of Public Cloud Service and Cloud Services in use.
You can link a Cloud Group to a User Group so that you can set Public Cloud Service which users in User Group can see, and access permission of Accounts (Subscriptions).

#### View Cloud Group Information

You can check information about Cloud Group already added.

1.  On the Cloud Group list, click a Cloud Group you want to check information for.
    ![][cloud_group_1_1]

2.  On the Cloud Group Details pane, Public Cloud Services which belong to the selected Cloud Group is shown.  
    ![][cloud_group_1_2]

3.  Click the \[+\] button of each Public Cloud Service, and Accounts (Subscriptions) which can be checked in a Cloud Group is shown.  
    ![][cloud_group_1_3]

#### Creating a Cloud Group

You can create a Cloud Group and set available Public Cloud Service and Account (Subscription) which is usable in a Cloud Group.

1.  Click the \[Add Cloud Group\] button.  
    ![][cloud_group_2_1]

2.  The “Create a New Cloud Group” pop-up appears.  
    ![][cloud_group_2_2]

3.  On the “Create a New Cloud Group” pop-up, enter the name of a new Cloud Group and click the \[OK\] button.  
    ![][cloud_group_2_3]

4.  The Cloud Group list shows that a new Cloud Group has been added.  
    ![][cloud_group_2_4]

5.  On the Cloud Group Details pane, a list of available Public Cloud Services and Accounts (Subscriptions) is shown.
    Account information registered on the Service Portal > Cloud Account menu is shown.
    By selecting a checkbox of Public Cloud Service, you can select which service is available to be used and which is not.
    Also by selecting a checkbox of Account (Subscription) in the service, you can select which account is available and which is not.  
    ![][cloud_group_2_5]

6.  Click the \[Save Changes\] button.  
    ![][cloud_group_2_6]

7.  Adding a new Cloud Group is completed.




#### Editing a Cloud Group

####  Renaming a Cloud Group

1.  On the Cloud Group list, select a Cloud Group you want to change the name of.
2.  On the Cloud Group Details pane, information about the selected Cloud Group is shown.
3.  Click the \[Edit\] button next to the name of a Cloud Group.
    ![][cloud_group_3_1_1]

4.  The name of a Cloud Group becomes editable.
    Change the name of a Cloud Group.
    ![][cloud_group_3_1_2]

5.  After changing the name, click the \[OK\] button.
    ![][cloud_group_3_1_3]

6.  Changing the name of a Cloud Group is completed.




#### Modifying Permission of a Cloud Group

1.  On the Cloud Group list, select a Cloud Group you want to modify permission.
2.  On the Cloud Group Details pane, a list of Public Cloud Services available for the selected Cloud Group and Account (Subscription) information which can be checked are shown.
3.  You can deselect Public Cloud Service and Account (Subscription) checkbox (Remove Permission) or select Public Cloud Service and Account (Subscription) checkbox (Modify Permission).  
    ![][bsp_group_3_2_1]

4.  Click the \[Save Changes\] button.  
    ![][bsp_group_3_2_2]

5.  Modifying permission of a Service Permission Group is completed.






#### Deleting a Cloud Group

You can delete added Cloud Group.

1.  On the Cloud Group list, select a Cloud Group you want to delete.
2.  Click the \[X\] button.  
    ![][cloud_group_4_1]

3.  A pop-up to confirm deletion of the group appears.
    Click the \[OK\] button of the pop-up.  
    ![][cloud_group_4_2]

4.  Deleting a Cloud Group is completed.




--------------------------------------------------------------------------------





## Cloud Account

>   Service Portal - *Cloud Account*

With account sync of Cloud Service, you can check status and cost of resource being used in Cloud service.
On the “Cloud Account Management” menu, you can register account of Cloud service in use.
To use Asset Management and Metering service, registration of Cloud Account is required.
Regarding required input items for each service, please refer to ‘Input Items per Vendor’.

**After adding a new account, it could take some time to load data. Meanwhile, data might not be loaded from Asset Management / Metering.**

### Required Input Items per Vendor for Service Usage

#### Amazon Web Service

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
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <th>Access Key</th>
            <td>Required</td>
            <td>-</td>
        </tr>
        <tr>
            <th>Secret Key</th>
            <td>Required</td>
            <td>-</td>
        </tr>
        <tr>
            <th>Linked Account or Non-linked Account</th>
            <td colspan="2">Required; select either Linked Account or Non-linked Account </td>
        </tr>
        <tr>
            <th>S3 Bucket Name</th>
            <td colspan="2">Required for Non-linked Account </td>
        </tr>
        <tr>
            <th>Region</th>
            <td colspan="2">Region is autocomplete when you enter Access key and Secret key<br>If you do not input Access key and Secret key, you must select Region manually.<br>(You cannot select Region if you have registered account. Only you can registered same Region account.)</td>
        </tr>
        <tr>
            <th>Status</th>
            <td colspan="2">Account's status of data collecting.(Not displayed when you input Account ID only.)</td>
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
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <th colspan="2">ID</th>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <th colspan="2">Password</th>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <th colspan="2">Region</th>
            <td colspan="2">Region is autocomplete when you click [Get Subscriptions] button</td>
        </tr>
        <tr>
            <th colspan="2">Status</th>
            <td colspan="2">Account's status of data collecting.</td>
        </tr>
        <tr>
            <th colspan="2">EA Account Linkage</th>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <th rowspan="5">Subscription</th>
            <td>Subscription ID</td>
            <td colspan="2">Select Subscription </td>
        </tr>
        <tr>
            <th>State</th>
            <td colspan="2">-</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <th>Offer ID</th>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <th>Billing day</th>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <th colspan="2">Enrollment</th>
            <td colspan="2">Required for EA Account only</td>
        </tr>
        <tr>
            <th colspan="2">Token</th>
            <td colspan="2">Required for EA Account only</td>
        </tr>
    </tbody>
</table>







### AWS Account Registration

>   Service Portal - Cloud Account - *AWS*

AIn order to check status and cost of resource being used in Amazon Web Service, register an AWS account.

1.  Select AWS from the Vendor list on the left.
    The list shows registered AWS accounts.
    ![][cloud_account_aws_1_1]

2.  Click the \[Add Account\] button.
    ![][cloud_account_aws_1_2]

3.  A new line appears for an account which is subject to be added.
    Enter information of an account to be added in the line.
    ![][cloud_account_aws_1_3]

4.  Click the \[OK\] button to save entries.
    ![][cloud_account_aws_1_4]

5.  You can check that a new account has been added in the Account list.
    ![][cloud_account_aws_1_5]




--------------------------------------------------------------------------------




## Service Group

>   Service Portal - *Service Group*

We are offering a Service Group feature that you can use to group all resources of Multi Cloud and Hybrid environments based on the services you are actually running.
By regrouping the resources with the Service Group feature, you can check: resource usage amount, cost, and status of the services you are running.

### About Service Group

The Service Group feature grants you the ability to classify resources according to the required criteria. You can classify resources more easily and with more detail with the enhanced Service Group feature. Manage resources efficiently with the new Service Group feature.

### Getting Started

#### Automatically Creating New View & Service Group

![][service_group_2_1_1]

-	Automatically create/manage Views created in the View list by using the Account and Tag key rule conditions
-	Automatic layout status can be managed by the user selecting on/off.
-	On initial entry: If you have an account, an account View will be provided as default.
    (View with automatically created Service Group per user’s account)

1.  Creating New View & Service Group based on Tags
    Select Create Auto View
    ![][service_group_2_1_1_1]

    Select Create by Tag key
    ![][service_group_2_1_1_2]

    Select your Tag key
    ![][service_group_2_1_1_3]

    Service Group is automatically created for each Tag value belonging to Tag key.
    ![][service_group_2_1_1_4]

    After it is created, you can check the information of View in the left menu. If you select View, you can check the Service Group list based on the automatically created Tag on the right side and the rule conditions in which the Service Group was created.

    ![][service_group_2_1_1_5]
    To edit the created Service Group, an icon appears when you hover over it with the mouse.
    You can edit name, add resource, edit rule or delete with this button
    (refer to pages 3 and 4 for details).

    ![][service_group_2_1_1_6]

2.  Creating New View & Service Group based on Account

    Select Create Auto View 
    ![][service_group_2_1_2_1]

    Select Create by Account 
    ![][service_group_2_1_2_2]

    Service Group is automatically created for each account.  
    ![][service_group_2_1_2_3]

    After it is created, you can check the information of View in the left menu. If you select View, you can check the Service Group list based on the automatically created account on the right side and the rule conditions in which the Service Group was created.  
    ![][service_group_2_1_2_4]

    To edit the created Service Group, an icon appears when you hover over it with the mouse.
    You can edit name, add resource, edit rule or delete with this button
    (refer to pages 3 and 4 for details) 
    ![][service_group_2_1_2_5]




#### Manually Creating a New View & Service Group

1.  Manually Creating a New View & Service Group

    Select Create Custom View.
    ![][service_group_2_2_1]

    You can specify a Custom View name.
    The name can be up to 48 characters. Only English, numbers, and hyphens (-) are allowed
    ![][service_group_2_2_2]

    If you select Next, a message or View created with the specified name will be shown
    Select Create to create with the specified settings, or select Previous to specify a different name.
    ![][service_group_2_2_3]

    You can check the created View on the left menu. As the View is created manually, it is created without the initially registered Service Group and can be registered via the Create Service Group button.
    ![][service_group_2_2_4]

    If you select Create Service Group, a page appears in which you can specify the Service Group name.
    You can create a Service Group by specifying the desired name and description.
    ![][service_group_2_2_5]

    Once a Service Group is created, you can check it on the page as shown below.
    You can manage it by mapping resources automatically or manually to the corresponding Service Group.
    (Refer to Manual 3)
    ![][service_group_2_2_6]


#### Creating a Category to Classify Service Groups

You can use the Category feature if you wish to manage the created Service Groups by grouping them again.

1.  Create Category

    To assign a Category, you can create one by selecting the button that is created when you hover the mouse over the View on the left.
    ![][service_group_2_3_1]

    When creating a Category, the Category icon is created on the View List on the left and Category is created on the Service Group List page on the right.
    ![][service_group_2_3_2]

2.  Change Category

    To rename or delete the Category, you can change it by clicking the icon on the right.
    ![][service_group_2_3_3]

3.  Register Service Group

    To register a Service Group in Category, you can do so by using the button that appears when you drag & drop or hover the mouse over the left menu.
    ![][service_group_2_3_4]

    If you click the button, a popup is shown where you can select from the available categories. After selecting the Category to move to, press OK to move to the desired category.
    ![][service_group_2_3_5]

    The Service Group that has been moved is shown as below:
    ![][service_group_2_3_6]


### Adding Resources

Users with multiple accounts or who are already classifying resources through the Tag feature of Console/Portal do not have to make an extra effort to create a Service Group. With just a few clicks, you can easily classify your resources.




#### Automatically adding resources by setting conditions

It provides the feature to set rules on adding resources per Service Group. Just preset the conditions and the resource will be automatically classified even if a new resource is added.
Setting the rules is simple. If you only select Tag, Account, Region, and Product of the resources to be included in the Service Group, the resources under that condition are automatically added to the selected Service Group.

1.  Set automatic addition conditions for resources of Service Group created by Tag

    Click the Edit button that appears when you hover over it with the mouse to switch to edit mode.
    ![][service_group_3_1_1_1]

    Enter Rule Edit Mode in Detailed Page of View
    ![][service_group_3_1_1_2]

    Enter Rule Edit Mode in Detailed Page of Service Group

    Set conditions for each item. In this case, Tag value condition must be selected.
    ![][service_group_3_1_1_3]
    ![][service_group_3_1_1_4]
    Rule Setting Based on Tag


    Selecting the \[Add New Rule\] button will expand the list and show the setting options. If there is a predefined condition, it is shown together. If a Tag value condition is not selected or a duplicate condition is set in another Service Group, a warning message is shown and it will not be saved.
    ![][service_group_3_1_1_5]

    Rule Setting Complete Based on Tag

2.  Set automatic addition conditions for resources of Service Group created by account

    Click the Edit button that appears when you hover over it with the mouse to switch to edit mode.
    ![][service_group_3_1_2_1]

    Enter Rule Edit Mode in Detailed Page of View
    ![][service_group_3_1_2_2]

    Enter Rule Edit Mode in Detailed Page of Service Group

    Set conditions for each item. In this case, Account value condition must be selected.
    ![][service_group_3_1_2_3]
    ![][service_group_3_1_2_4]

    Rule Setting Based on Account


    Selecting the \[Add New Rule\] button will expand the list and show the setting options. If there is a predefined condition, it is shown together. If an Account condition is not selected or a duplicate condition is set in another Service Group, a warning message is shown and it will not be saved.
    ![][service_group_3_1_2_5]

    Rule Setting Complete Based on Account

3.  Set automatic addition conditions for resources of Service Group created manually by the user

    Click the Edit button that appears when you hover the mouse over it to switch to edit mode.
    ![][service_group_3_1_3_1]

    Enter Rule Edit Mode in Detailed Page of View
    ![][service_group_3_1_3_2]

    Enter Rule Edit Mode in Detailed Page of Service Group
    Set conditions for each item.
    ![][service_group_3_1_3_3]

    Manually Created Service Group Rule Setting Page

    Selecting the \[Add New Rule\] button will expand the list and show the setting options. If there is a predefined condition, it is shown together. If a duplicate condition is set in another Service Group, a warning message is shown and it will not be saved.
    ![][service_group_3_1_3_4]

    Manually Created Service Group Rule Setting Complete

Rules can be added and changed freely at any time, and can also be turned on or off. You can also use the Pin feature to prevent specific resources from being affected by the rule.

#### Manually Adding Resources

1.  Click the ADD RESOURCE button on the detailed page of Service Group to go to the Add resource/Intelligent search page.
    ![][service_group_3_2_1]

2.  Set conditions using the Intelligent Search, select a resource from the search results, and click the \[Add Selected Resource\] button.
    ![][service_group_3_2_2]

3.  You will be redirected to the detailed page of Service Group and a \[popup confirming the resource added\] will be displayed, indicating that N resources have been added.
    ![][service_group_3_2_3]


### Managing Service Group

#### Setting Default View

You can set the Default View which is the standard among multiple Views. In Asset and Metering services, information is shown based on the Default View.

1.  You can select the Default View by clicking the default view icon in the left menu or by clicking the Default View setting menu on the detailed page of View.
    ![][service_group_4_1_1]

    If you click, a confirmation popup will appear. Clicking OK button will change the selected View to Default View.
    ![][service_group_4_1_2]


#### Auto update ON/OFF

Even if you do not delete the Rule, you can turn the auto update feature ON/OFF to set whether to let the Service Group be affected by the rule condition or not.

1.  Uncheck auto update field in Rule edit mode.
    ![][service_group_4_2_1]

    When unchecked, the auto update status is switched to OFF.
    ![][service_group_4_2_2]

    When the auto update is turned OFF, the resource is no longer classified according to the rule conditions. If you check the auto update again to turn it ON, it is classified automatically according to the rule conditions.

#### Resource PIN

You can also use the PIN feature to prevent specific resources from being affected by the rule.

1.  PIN processing can be done all at once by checking the resources to be processed, or the PIN can be processed individually in the Status field.
    ![][service_group_4_3_1]

2.  If processing PIN for multiple resources, a warning popup will appear, and once you click OK, the selected resources will be PIN-processed and changed to a resource that is no longer affected by rule.
    ![][service_group_4_3_2]


#### Removing View, Category, Service Group

1.  Remove View

    Click Delete View menu using the top right menu on the Detailed Page of View (Default View cannot be deleted).

    ![][service_group_4_4_1_1]

    If you click the Delete View menu, a delete confirmation popup will appear. Click the Delete button to delete the selected View.
    ![][service_group_4_4_1_2]

2.  Remove Category

    Click the Trash button that appears when you hover the mouse over the created Category name.
    ![][service_group_4_4_2_1]

    If you click the Trash button, a category deletion confirmation popup will appear. If you click the Delete button, the selected category will be deleted, and Service Group included in the category will be changed to a Service Group not included in the category.

    ![][service_group_4_4_2_2]

3.  Remove Service Group

    Click the Delete Service Group button on the detailed page of Service Group.
    ![][service_group_4_4_3_1]

    Alternatively, you can delete multiple Service Groups at once by hovering the mouse over the Service Group to be deleted on the detailed page of View and clicking the Trash button, or by checking the Service Groups to be deleted and clicking the Delete Service Group button.
    ![][service_group_4_4_3_2]

    If you click the Delete button, a confirmation popup will appear. Select Delete to delete the Service Group.
    ![][service_group_4_4_3_3]




<!-- 이미지 모음 -->
[dashboard_1_1]:                      ./resource/dashboard_1_1.png
[dashboard_2_1]:                      ./resource/dashboard_2_1.png
[dashboard_2_2]:                      ./resource/dashboard_2_2.png
[dashboard_2_3]:                      ./resource/dashboard_2_3.png
[dashboard_2_4]:                      ./resource/dashboard_2_4.png

[user_group_1_1_1]:                   ./resource/user_group_1_1_1.png
[user_group_1_1_2]:                   ./resource/user_group_1_1_2.png
[user_group_1_2_1]:                   ./resource/user_group_1_2_1.png
[user_group_1_2_2]:                   ./resource/user_group_1_2_2.png
[user_group_1_2_3]:                   ./resource/user_group_1_2_3.png
[user_group_1_2_4]:                   ./resource/user_group_1_2_4.png
[user_group_1_2_5]:                   ./resource/user_group_1_2_5.png
[user_group_1_3_1]:                   ./resource/user_group_1_3_1.png
[user_group_1_3_2]:                   ./resource/user_group_1_3_2.png
[user_group_1_3_3]:                   ./resource/user_group_1_3_3.png
[user_group_1_3_4]:                   ./resource/user_group_1_3_4.png
[user_group_1_2_1]:                   ./resource/user_group_1_2_1.png
[user_group_1_2_2]:                   ./resource/user_group_1_2_2.png
[user_group_1_2_3]:                   ./resource/user_group_1_2_3.png
[user_group_1_2_4]:                   ./resource/user_group_1_2_4.png
[user_group_1_2_5]:                   ./resource/user_group_1_2_5.png
[user_group_2_2_1]:                   ./resource/user_group_2_2_1.png
[user_group_1_3_2]:                   ./resource/user_group_1_3_2.png
[user_group_3_1]:                     ./resource/user_group_3_1.png
[user_group_3_2]:                     ./resource/user_group_3_2.png
[user_group_4_1]:                     ./resource/user_group_4_1.png
[user_group_4_2]:                     ./resource/user_group_4_2.png

[permission_structure]:               ./resource/permission_structure.png

[company_group_1_1]:                  ./resource/company_group_1_1.png
[company_group_1_2]:                  ./resource/company_group_1_2.png
[company_group_2_1]:                  ./resource/company_group_2_1.png
[company_group_2_2]:                  ./resource/company_group_2_2.png
[company_group_2_3]:                  ./resource/company_group_2_3.png
[company_group_2_4]:                  ./resource/company_group_2_4.png
[company_group_2_5]:                  ./resource/company_group_2_5.png
[company_group_2_6]:                  ./resource/company_group_2_6.png
[company_group_3_1_1]:                ./resource/company_group_3_1_1.png
[company_group_3_1_2]:                ./resource/company_group_3_1_2.png
[company_group_3_1_3]:                ./resource/company_group_3_1_3.png
[company_group_3_2_1]:                ./resource/company_group_3_2_1.png
[company_group_3_2_2]:                ./resource/company_group_3_2_2.png
[company_group_4_1]:                  ./resource/company_group_4_1.png
[company_group_4_2]:                  ./resource/company_group_4_2.png

[bsp_group_1_1]:                      ./resource/bsp_group_1_1.png
[bsp_group_1_2]:                      ./resource/bsp_group_1_2.png
[bsp_group_1_3]:                      ./resource/bsp_group_1_3.png
[bsp_group_2_1]:                      ./resource/bsp_group_2_1.png
[bsp_group_2_2]:                      ./resource/bsp_group_2_2.png
[bsp_group_2_3]:                      ./resource/bsp_group_2_3.png
[bsp_group_2_4]:                      ./resource/bsp_group_2_4.png
[bsp_group_2_5]:                      ./resource/bsp_group_2_5.png
[bsp_group_2_6]:                      ./resource/bsp_group_2_6.png
[bsp_group_3_1_1]:                    ./resource/bsp_group_3_1_1.png
[bsp_group_3_1_2]:                    ./resource/bsp_group_3_1_2.png
[bsp_group_3_1_3]:                    ./resource/bsp_group_3_1_3.png
[bsp_group_3_2_1]:                    ./resource/bsp_group_3_2_1.png
[bsp_group_3_2_2]:                    ./resource/bsp_group_3_2_2.png
[bsp_group_4_1]:                      ./resource/bsp_group_4_1.png
[bsp_group_4_2]:                      ./resource/bsp_group_4_2.png

[cloud_group_1_1]:                    ./resource/cloud_group_1_1.png
[cloud_group_1_2]:                    ./resource/cloud_group_1_2.png
[cloud_group_1_3]:                    ./resource/cloud_group_1_3.png
[cloud_group_2_1]:                    ./resource/cloud_group_2_1.png
[cloud_group_2_2]:                    ./resource/cloud_group_2_2.png
[cloud_group_2_3]:                    ./resource/cloud_group_2_3.png
[cloud_group_2_4]:                    ./resource/cloud_group_2_4.png
[cloud_group_2_5]:                    ./resource/cloud_group_2_5.png
[cloud_group_2_6]:                    ./resource/cloud_group_2_6.png
[cloud_group_3_1_1]:                  ./resource/cloud_group_3_1_1.png
[cloud_group_3_1_2]:                  ./resource/cloud_group_3_1_2.png
[cloud_group_3_1_3]:                  ./resource/cloud_group_3_1_3.png

[bsp_group_3_2_1]:                    ./resource/bsp_group_3_2_1.png
[bsp_group_3_2_2]:                    ./resource/bsp_group_3_2_2.png

[cloud_group_4_1]:                    ./resource/cloud_group_4_1.png
[cloud_group_4_2]:                    ./resource/cloud_group_4_2.png

[cloud_account_aws_1_1]:              ./resource/cloud_account_aws_1_1.png
[cloud_account_aws_1_2]:              ./resource/cloud_account_aws_1_2.png
[cloud_account_aws_1_3]:              ./resource/cloud_account_aws_1_3.png
[cloud_account_aws_1_4]:              ./resource/cloud_account_aws_1_4.png
[cloud_account_aws_1_5]:              ./resource/cloud_account_aws_1_5.png

[service_group_2_1_1]:   ./resource/service_group_2_1_1.png
[service_group_2_1_1_1]: ./resource/service_group_2_1_1_1.png
[service_group_2_1_1_2]: ./resource/service_group_2_1_1_2.png
[service_group_2_1_1_3]: ./resource/service_group_2_1_1_3.png
[service_group_2_1_1_4]: ./resource/service_group_2_1_1_4.png
[service_group_2_1_1_5]: ./resource/service_group_2_1_1_5.png
[service_group_2_1_1_6]: ./resource/service_group_2_1_1_6.png
[service_group_2_1_2_1]: ./resource/service_group_2_1_2_1.png
[service_group_2_1_2_2]: ./resource/service_group_2_1_2_2.png
[service_group_2_1_2_3]: ./resource/service_group_2_1_2_3.png
[service_group_2_1_2_4]: ./resource/service_group_2_1_2_4.png
[service_group_2_1_2_5]: ./resource/service_group_2_1_2_5.png
[service_group_2_2_1]:   ./resource/service_group_2_2_1.png
[service_group_2_2_2]:   ./resource/service_group_2_2_2.png
[service_group_2_2_3]:   ./resource/service_group_2_2_3.png
[service_group_2_2_4]:   ./resource/service_group_2_2_4.png
[service_group_2_2_5]:   ./resource/service_group_2_2_5.png
[service_group_2_2_6]:   ./resource/service_group_2_2_6.png
[service_group_2_3_1]:   ./resource/service_group_2_3_1.png
[service_group_2_3_2]:   ./resource/service_group_2_3_2.png
[service_group_2_3_3]:   ./resource/service_group_2_3_3.png
[service_group_2_3_4]:   ./resource/service_group_2_3_4.png
[service_group_2_3_5]:   ./resource/service_group_2_3_5.png
[service_group_2_3_6]:   ./resource/service_group_2_3_6.png
[service_group_3_1_1_1]: ./resource/service_group_3_1_1_1.png
[service_group_3_1_1_2]: ./resource/service_group_3_1_1_2.png
[service_group_3_1_1_3]: ./resource/service_group_3_1_1_3.png
[service_group_3_1_1_4]: ./resource/service_group_3_1_1_4.png
[service_group_3_1_1_5]: ./resource/service_group_3_1_1_5.png
[service_group_3_1_2_1]: ./resource/service_group_3_1_2_1.png
[service_group_3_1_2_2]: ./resource/service_group_3_1_2_2.png
[service_group_3_1_2_3]: ./resource/service_group_3_1_2_3.png
[service_group_3_1_2_4]: ./resource/service_group_3_1_2_4.png
[service_group_3_1_2_5]: ./resource/service_group_3_1_2_5.png
[service_group_3_1_3_1]: ./resource/service_group_3_1_3_1.png
[service_group_3_1_3_2]: ./resource/service_group_3_1_3_2.png
[service_group_3_1_3_3]: ./resource/service_group_3_1_3_3.png
[service_group_3_1_3_4]: ./resource/service_group_3_1_3_4.png
[service_group_3_2_1]:   ./resource/service_group_3_2_1.png
[service_group_3_2_2]:   ./resource/service_group_3_2_2.png
[service_group_3_2_3]:   ./resource/service_group_3_2_3.png
[service_group_4_1_1]:   ./resource/service_group_4_1_1.png
[service_group_4_1_2]:   ./resource/service_group_4_1_2.png
[service_group_4_2_1]:   ./resource/service_group_4_2_1.png
[service_group_4_2_2]:   ./resource/service_group_4_2_2.png
[service_group_4_3_1]:   ./resource/service_group_4_3_1.png
[service_group_4_3_2]:   ./resource/service_group_4_3_2.png
[service_group_4_4_1_1]: ./resource/service_group_4_4_1_1.png
[service_group_4_4_1_2]: ./resource/service_group_4_4_1_2.png
[service_group_4_4_2_1]: ./resource/service_group_4_4_2_1.png
[service_group_4_4_2_2]: ./resource/service_group_4_4_2_2.png
[service_group_4_4_3_1]: ./resource/service_group_4_4_3_1.png
[service_group_4_4_3_2]: ./resource/service_group_4_4_3_2.png
[service_group_4_4_3_3]: ./resource/service_group_4_4_3_3.png
