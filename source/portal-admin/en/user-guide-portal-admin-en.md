
---
service : admin
title   : Admin Service Portal
en : true
multiLang:
    - ko : true
    - en : false
    - zh : true
...

<!-- TOC -->




# Admin Service Portal

You can check the information about companies using the service platform.


--------------------------------------------------------------------------------


## CUSTOMER

Admin Service Portal - *CUSTOMER*

You can check the summary and client list information of all clients.

![][customer_customer01]

>   Admin Service Portal - CUSTOMER - *Summary*

Provides information on total number of Activated clients, number of Deactivated clients, number of Activated user, number of Deactivated user ,number of Instances (EC2, VM, IDC-Server), and total number of users.

![][customer_customer_summary]

1. Activated customer : Number of activated customers by time of view
2. Deactivated customer : Number of deactivated customers by time of view
3. Actiavted User : Number of activated user by time of view
4. Deactivated User : Number of deactivated user by time of view
5. Number of Entire Customer Instance and Managed Account : Number of AWS-EC2, AZURE-VM, and IDC-SERVER resources and number of accounts by time of view
6. Total Number Of Users : Total number of customers' users

>   Admin Service Portal - CUSTOMER - *Customer List*

Provides Client name, Number of users, Activated status, Paid/Free, Account and Resource information, and Service usage status.
In addition, you can view clients of the desired conditions with Filter and Search features.

![][customer_customer_list]

You can go to the detailed page by clicking the company name in the list.




### COMPANY INFO

Admin Service Portal - CUSTOMER - Detail - *COMPANY INFO*

#### Company Info

1.  You can view and modify the company's basic information.
    ![][customer_company01]

    - Service Status: Refers to the service usage status. There are Paid, Free, None, and Trial status. (If it is Trial, it shows remaining date and duration of Trial use.)
    - Cancel: All modifications on the COMPANY tab will be canceled.


#### Customer Manager

Register the users of the MSP to manage the client.

![][customer_company02]

1.  Click \[Add User\] button.
    ![][customer_company03]

2.  Select the user you want and save.
    ![][customer_company04]

    Sales Manager and System Engineer Manager can be registered in duplicate.






### SERVICE USAGE INFO

>   Admin Service Portal - CUSTOMER - Detail - *SERVICE USAGE INFO*

You can set the client's usage of each service. For a specific service, you can register the payment method by selecting the number of users and the period.
![][customer_service02]






### CLOUD ACCOUNT

>   Admin Service Portal - CUSTOMER - Detail - *CLOUD ACCOUNT*

You can register your client's cloud account instead.
With account sync of Cloud Service, you can check status and cost of resource being used in Cloud service.
On the “CLOUD ACCOUNT” menu, you can register account of Cloud service in use.
To use Asset Management and Metering service, registration of Cloud Account is required.
Regarding required input items for each service, please refer to ‘Input Items per Vendor’.

**After adding a new account, it could take some time to load data. Meanwhile, data might not be loaded from Asset Management / Metering**.

#### Required Input Items per Vendor for Service Usage

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
            <td colspan="2">Required; select either Linked Account or Non-linked Account</td>
        </tr>
        <tr>
            <th>S3 Bucket Name</th>
            <td colspan="2">Required for Non-linked Account</td>
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






##### Microsofr Azure

<table>
    <tbody>
        <tr>
            <th colspan="2"></th>
            <th>Asset Management</th>
            <th>Metering</th>
        </tr>
        <tr>
            <td colspan="2"><b>Account Name</b></td>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <td colspan="2"><b>ID</b></td>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <td colspan="2"><b>Password</b></td>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <td colspan="2"><b>Region</b></td>
            <td colspan="2">Region is autocomplete when you click [Get Subscriptions] button</td>
        </tr>
        <tr>
            <td colspan="2"><b>Status</b></td>
            <td colspan="2">Account's status of data collecting.</td>
        </tr>
        <tr>
            <td colspan="2"><b>EA Account Linkage</b></td>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <td rowspan="5"><b>Subscription</b></td>
            <td><b>Subscription ID</b></td>
            <td colspan="2">Select Subscription </td>
        </tr>
        <tr>
            <td><b>State</b></td>
            <td colspan="2">-</td>
        </tr>
        <tr>
            <td><b>Name</b></td>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <td><b>Offer ID</b></td>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <td><b>Billing day</b></td>
            <td>Required</td>
            <td>Required</td>
        </tr>
        <tr>
            <td colspan="2"><b>Enrollment</b></td>
            <td colspan="2">Required for EA Account only</td>
        </tr>
        <tr>
            <td colspan="2"><b>Token</b></td>
            <td colspan="2">Required for EA Account only</td>
        </tr>
    </tbody>
</table>






#### AWS Account Registration

In order to check status and cost of resource being used in Amazon Web Service, register an AWS account.

1.  Select AWS from the Vendor list on the left.
    The list shows registered AWS accounts.
    ![][customer_cloud01]

2.  Click the \[Add Account\] button.
    ![][customer_cloud02]

3.  A new line appears for an account which is subject to be added.
    Enter information of an account to be added in the line.
    ![][customer_cloud03]

4.  Click the \[SAVE\] button to save entries.
    ![][customer_cloud04]

5.  You can check that a new account has been added in the Account list.
    ![][customer_cloud05]







### PAYMENT INFO

>   Admin Service Portal - CUSTOMER - Detail - *PAYMENT INFO*

#### Billing Info

1.  You will be charged on the 20th, 25th, or the last day of each month with the payment information you entered.
    ![][customer_billinginfo01]

2.  Payment methods include credit card payment, non-bankbook deposit, and bank transfer. After selecting the payment method, enter information for each item and save.
    ![][customer_billinginfo02]


#### Billing Department and Business Information

1.  You can manage the person in charge of fees to contact in relation to the fees and the information used to issue the tax invoice.
    ![][customer_billinginfo03]

2.  Enter the information of the person in charge of fees and the tax invoice information and save.
    ![][customer_billinginfo04]









### USER

>   Admin Service Portal - CUSTOMER - Detail - *USER*

#### Managing User

1.  You can view the list of users in the Invited, Activated, and Deactivated status that belong to the relevant client.
    ![][customer_user01]

2.  Below are the User Status.
    +-----------------+-----------------+---------------------------------------------------------------------+
    |                 | User Status     | Note
    +=================+=================+=====================================================================+
    | **Activated**   | Activate        |
    +-----------------+-----------------+---------------------------------------------------------------------+
    | **Deactivated** | Deactivate      |
    +-----------------+-----------------+---------------------------------------------------------------------+
    | **Invited**     | Invite          | You can resend invite email from User Management Popup.
    +-----------------+-----------------+---------------------------------------------------------------------+
    | **Inactivated** | Inactivate      | You can resend activation email from User Management Popup.
    +-----------------+-----------------+---------------------------------------------------------------------+
    | **Locked**      | Lock            | Need to reset your password from Service Platform.
    +-----------------+-----------------+---------------------------------------------------------------------+

3.  You can view and modify USER details.
    ![][customer_user02]


#### Inviting User

1.  Click \[INVITE USER\].
    ![][customer_user03]

2.  Enter the user's EMAIL and select the USER GROUP to which the user will belong after completing the subscription. A subscription mail will be sent to the invited user.
    ![][customer_user04]

    You cannot invite users belonging to or invited to other companies.

3.  You can cancel the invitation or re-invite.
    ![][customer_user05]







### USER GROUP

>   Admin Service Portal - CUSTOMER - *USER GROUP*

Please refer to the 'User Group Guide' in Service Portal.




### PERMISSION

>   Admin Service Portal - CUSTOMER - *PERMISSION*

Please refer to the 'Permission Guide' in Service Portal.




### Customer Statistics

>   Admin Service Portal - CUSTOMER - *Customer Statistics*

1.  You can check statistical data of clients who joined the service by period.
2.  You can view by clicking Apply button after setting the period.
    ![][customer_statistics01]





### Customer Group

Admin Service Portal - CUSTOMER - *Customer Group*

1.  You can group related clients.

2.  Select the company you want from the list on the left.
    ![][customer_companygroup01]

3.  Click \[Modify Company\] or \[Add Company\] button.
    ![][customer_companygroup02]

4.  Select the company you want to manage from the list on the left, then move to the right and save.
    ![][customer_companygroup03]

5.  You can see the clients are grouped in the company.
    ![][customer_companygroup04]

6.  You can manage company group permission of the grouped clients by clicking Manage User Permission link.
    ![][customer_companygroup05]

7.  This example shows that the company MASTER(GUIDE) can manage MASTER(GUIDE),MANAGED01(GUIDE),MANAGED02(GUIDE),MANAGED03(GUIDE) companies in the Company Group Permission.





### Partner Group

>   Admin Service Portal - CUSTOMER - *Partner Group*

1.  Click \[+\] button to create new Partner Group.
    ![][customer_partner01]

2.  Click \[Add Company\] or \[Modify Company\] button to add/delete company from the Partner group.
    ![][customer_partner02]

3.  You can check the created Partner company in the Metering Admin > Azure
    ![][customer_partner03]







### Register Customer

>   Admin Service Portal - CUSTOMER - *Register Customer*

You can create customer account.

1.  You can enter customer Information.
2.  Customer Account is created by entered admin email address.
    ![][customer_register01]









--------------------------------------------------------------------------------








## MSP

>   Admin Service Portal - *MSP*

Provides information on total number of MSP, number of Activated clients, number of Deactivated clients, number of Instances (EC2, VM, IDC-Server) and total number of MSP users.
![][msp_summary01]

Provides MSP management list information, MSP name, number of clients owned by MSP, total number of users, Activated status, Account and resource information, and service usage status.
In addition, Filter and Search features are provided to display MSP companies in the status you want separately.
![][msp_list01]





### BASIC INFO

>   Admin Service Portal - MSP - Detail - *BASIC INFO*

Enter the basic information for the MSP service. You can view the certificate information and the service domain.





#### Certificate Management

1.  Enter the password, path, registration date, and expiration date of the certificate.
    ![][msp_defaultinfo02]

2.  If you want to cancel the changes during input, click \[Cancel\] button to return to the last saved status.
    ![][msp_defaultinfo03]

3.  Click \[Save\] button. Saved content can be modified.
    ![][msp_defaultinfo04]

4.  Click \[Confirm Certificate Registration\] button.
    ![][msp_defaultinfo05]

5.  Please register after checking again since you cannot modify it after confirming certificate registration.
    ![][msp_defaultinfo06]


#### Domain Management

Manages the domain for the MSP service. The domain and alias entered when subscribing to MSP will be used.

1.  A domain example of each service is shown according to the domain registered at the time of subscription. Enter the domain and Cname to use for each service.
    ![][msp_defaultinfo07]

2.  Click \[Copy CNAME\] button to save the contents of the CName input field to the clipboard.
    ![][msp_defaultinfo08]

3.  If you want to cancel the changes during input, click \[Cancel\] button to return to the last saved status.
    ![][msp_defaultinfo09]

4.  Click \[Save\] button. Saved content can be modified.
    ![][msp_defaultinfo10]

5.  Click \[Confirm Domain Registration\] button. Please register after checking again since you cannot modify it after confirming domain registration.
    ![][msp_defaultinfo11]






### COMPANY INFO

>   Admin Service Portal - MSP - *COMPANY INFO*


#### COMPANY INFO

1.  You can view and modify the company's basic information.
    ![][msp_company01]

    - Contract Status : Refers to the MSP service contract date.
    - Cancel: All modifications on the COMPANY tab will be canceled.






#### MSP Manager

Register the Person in Charge of Sales for the relevant MSP.

1.  Click \[Add User\] button.
    ![][msp_company03]

2.  Select the user you want and save.
    ![][msp_company04]





### SERVICE USAGE INFO

>   Admin Service Portal - MSP - *SERVICE USAGE INFO*

1.  Click \[Start Service\] button to start the MSP service.
    ![][msp_service01]


2.  You can view the status of the service provided to the client by the relevant MSP. You can also view the start and end dates for each service.
    ![][msp_service02]





### CLOUD

>   Admin Service Portal - MSP - BASIC INFO - *CLOUD*

1.  You can view the status of the Cloud Vendor provided to the client by the relevant MSP. You can also view start and end dates for each Cloud Vendor.
    ![][msp_cloud01]

    Cancel: All modifications on the CLOUD tab will be canceled.

2.  Providing add Azure CSP account feature from the Service Platform when you activate "Azure CSP".
3.  Providing Azure CSP registration feature from the Service Platform when you activate "Azure CSP Subscription Service".






### MSP STATUS

>   Admin Service Portal - MSP - *MSP STATUS*

1.  Provides resource information and user information of clients belonging to MSP.
2.  You can see a list of clients belonging to MSP. You can check the number of users, Cloud Vendor and resource information of client and search feature is provided.
    ![][msp_mspusage01]


### PAYMENT INFO

>   Admin Service Portal - MSP - *PAYMENT INFO*

1.  You can manage the person in charge of fees to contact in relation to the fees and the information used to issue the tax invoice.
    ![][msp_billinginfo03]

2.  Save after entering the information of the person in charge of fees and the tax invoice information.
    ![][msp_billinginfo04]


### PERMISSION

>   Admin Service Portal - MSP - *PERMISSION*

You can set the menu permissions to access each MSP company.
![][msp_permission01]





### ADMIN USER

>   Admin Service Portal - MSP - *ADMIN USER*

Please refer to the 'Admin User Guide' in Admin Service Portal.





### ADMIN USER GROUP

>   Admin Service Portal - MSP - *ADMIN USER GROUP*

Please refer to the 'Admin User Guide' in Admin Service Portal.






### SITE MANAGEMENT

>   Admin Service Portal - MSP - *SITE MANAGEMENT*





#### HOMEPAGE

>   Admin Service Portal - MSP - SITE MANAGEMENT - *HOMEPAGE*

1.  You can register and modify the settings related to the website. You can set the logo to be displayed on the website as image or text and set Favicon.
    ![][msp_sitemngt02]

    Manage logo with image
    ![][msp_sitemngt03]

    Manage logo with text

2.  Set the information for the website footer. You can register a representative, address, phone number, etc. for each site.
    ![][msp_sitemngt04]

3.  Enter the technical support information for the website footer.
    ![][msp_sitemngt05]






#### TERMS

>   Admin Service Portal - MSP - SITE MANAGEMENT - *TERMS*

You can register privacy policy and terms of use. You may renew the terms and update the version and apply the terms to the site.
The applicable terms are displayed at the time of signing up for the service.
![][msp_sitemngt06]







#### WHITEPAPER

>   Admin Service Portal - MSP - SITE MANAGEMENT - *WHITEPAPER*

1.  You can save the image of the whitepaper containing the service description.
2.  You can register images for each service. Basic images are provided.
    ![][msp_sitemngt07]










--------------------------------------------------------------------------------







## CSP Operator

>   Admin Service Portal - *CSP Operator*

In this menu, the CSP Operator can go through a confirmation process on clients applying for CSP. When the application is on pending or has been confirmed, a mail will be sent to each recipient.
We recommend that you manage users after creating a separate Admin User Group for CSP Operator in 'ADMIN USER Menu'.

You can view the list of companies applying for CSP that the CSP Operator needs to confirm.

>   Admin Service Portal - CSP Operator - *Summary*

![][operator_summary]

1. Submission: Client has completed the CSP application
2. Pending Approval : Pending approval by CSP Operator (in case of lack of information or existence of error)
3. Complete Company Information Confirmation : CSP Operator has confirmed the application information

>   Admin Service Portal - CSP Operator - *List*

You can view clients of the desired conditions with Filter and Search features.
![][operator_list]

You can go to the detailed page by clicking the company name in the list.





### CSP Subscription Status

>   Admin Service Portal - CSP Operator - Detail - *CSP Subscription Status*

You can change the client's CSP Subscription status.
Upon confirming the company information, the CSP account will automatically be registered in Microsoft Partner Center.

**When you change the status of the application, a mail will be sent to the mail recipient of each status**.

+-----------------------------------------------+-----------------------+-------------------------+
| CSP Status                                    | Recipients            | Contents
+===============================================+=======================+=========================+
| **Pending Approval**                          | applicant             | reason for pending
+-----------------------------------------------+-----------------------+-------------------------+
| **Complete Company Information Confirmation** | CSP Operator          | CSP Subscription Info
+-----------------------------------------------+-----------------------+-------------------------+
| CSP Sales Manager                             | CSP Subscription Info |
+-----------------------------------------------+-----------------------+-------------------------+




#### Submission

This is the status for the companies that completed their application in Service Portal.
Depending on the confirmation status of the company information, you can change the status to \[Pending Approval\] or \[Complete Confrimation\].
![][operator_status01]



#### Pending Approval

1.  If there is a problem while confirming the company information, click \[Pending Approval\] button to withhold the approval.
    ![][operator_status02]

2.  When pending approval, you must enter the reason for pending.
    A mail will be sent to the applicants informing them of the reason for pending and you can also notify them to add any insufficient information.
    ![][operator_holding01]

3.  After checking that the client's company information has been edited, click \[Complete Confirmation\] button to complete the confirmation on the company information.
    ![][operator_status03]





#### Complete Company Information Confirmation

1.  Upon confirming the company information, the CSP account will automatically be registered in Microsoft Partner Center and the information of the registered CSP account will be sent to the clients.

2.  Notify via mail the person in charge of sales registered to the client that the company information has been confirmed.




### CSP Subscription Info

>   Admin Service Portal - CSP Operator - Detail - *CSP Subscription Info*

You can change the client's CSP application information.

![][operator_joininfo01]

You must enter an admin account for companies under 'Have Azure CSP Subscription' type, while no admin account is needed for companies under 'New Azure CSP Subscription' type.






### CSP Sales Manager

>   Admin Service Portal - CSP Operator - Detail - *CSP Sales Manager*

You can appoint the person in charge of CSP sales of the client.

**Only users with permission as person in charge of CSP sales can be appointed as the person in charge of CSP sales.Please check if the user has the permission to the menu of person in charge of CSP sales in 'ADMIN USER Menu' before appointing**.










--------------------------------------------------------------------------------











## CSP Sales Manager

>   Admin Service Portal - *CSP Sales Manager*

In this menu, the CSP Operator can go through a confirmation process on clients applying for CSP who have been confirmed. When the application is on pending or has been confirmed, a mail will be sent to each recipient.
We recommend that you manage users after creating a separate Admin User Group for the person in charge of CSP sales in 'Admin User Management Menu'.

You can view the list of companies applying for CSP that the person in charge of CSP sales needs to confirm.

>   Admin Service Portal - CSP Sales Manager - *Summary*

![][sales_summary]

1. Entering contract information : CSP Operator has confirmed the application information
2. Pending Approval : Pending approval by person in charge of CSP sales
3. Completed Registration : The client's CSP application has been registered as a final

>   Admin Service Portal - CSP Sales Manager - *List*

You can view clients of the desired conditions with Filter and Search features.

![][sales_list]

You can go to the detailed page by clicking the company name in the list.










### CSP Subscription Status

>   Admin Service Portal - CSP Sales Manager - Detail - *CSP Subscription Status*

You can change the client's CSP application status.
Once your registration is complete, you will have permission to use the Metering service for free.


<table>
    <tbody>
        <tr>
            <th>CSP Status</th>
            <th>Recipients</th>
            <th>	Contents</th>
        </tr>
        <tr>
            <td><b>Pending Approval</b></td>
            <td>applicant</td>
            <td>reason for pending</td>
        </tr>
        <tr>
            <td rowspan="3"><b>Completed Registration</b></td>
            <td>CSP Operator</td>
            <td>CSP Subscription Info</td>
        </tr>
        <tr>
            <td>CSP Sales Manager</td>
            <td>CSP Subscription Info</td>
        </tr>
        <tr>
            <td>applicant</td>
            <td>Azure CSP Account Info</td>
        </tr>
    </tbody>
</table>



#### Entering contract information

The CSP Operator has confirmed the application information.
Depending on the contract information input status, you can change the status to \[Pending\] or \[Registration Complete\].
![][sales_status01]




#### Pending Approval

1.  If there is a problem while entering the contract information, click \[Pending Approval\] button to withhold the approval.
    ![][sales_status02]

2.  When pending approval, you must enter the reason for pending.
    A mail will be sent to the applicants informing them of the reason for pending and you can also notify them to add any insufficient information.
    ![][sales_holding01]

3.  After entering the contract information, click \[Registration Complete\] button to complete the client's CSP registration.
    ![][sales_status03]





#### Completed Registration

1.  Once your registration is complete, you will have permission to use the Metering service for free.

<table>
    <tbody>
        <tr>
            <th></th>
            <th>Menu</th>
            <th>Availability</th>
        </tr>
        <tr>
            <td rowspan="5"><b>METERING</b></td>
            <td>DASHBOARD</td>
            <td>available</td>
        </tr>
        <tr>
            <td>BILLING</td>
            <td>available</td>
        </tr>
        <tr>
            <td>BUDGETING</td>
            <td>available</td>
        </tr>
        <tr>
            <td>PAYMENT &amp; DISCOUNT</td>
            <td>available</td>
        </tr>
        <tr>
            <td>REPORT</td>
            <td>available</td>
        </tr>
    </tbody>
</table>


2.  Notify via mail the CSP Operator, the person in charge of sales registered to the client and the applicant that the registration has been completed.








### CSP Subscription Info

>   Admin Service Portal - CSP Sales Manager - Detail - *CSP Subscription Info*

You can change the client's CSP application information.  
![][sales_joininfo01]

You must enter an admin account for companies under 'Have Azure CSP Subscription' type, while no admin account is needed for companies under 'New Azure CSP Subscription' type.







### CSP Sales Manager

>   Admin Service Portal - CSP Sales Manager - Detail - *CSP Sales Manager*

You can appoint the person in charge of CSP sales of the client.

**Only users with permission as person in charge of CSP sales can be appointed as the person in charge of CSP sales. Please check if the user has the permission to the menu of person in charge of CSP sales in 'Admin User Management Menu' before appointing.**









--------------------------------------------------------------------------------










## COMPANY

>   Admin Service Portal - *COMPANY*

Provides the number of clients, number of clients' users, resource information (EC2, VM, IDC-Server) and account information of the company, and provides a card type list of services currently used.

![][company_summary01]






### Company Info / BASIC INFO

>   Admin Service Portal - COMPANY - Company Info - *BASIC INFO*




#### Certificate Management

Enter the basic information for the MSP service. You can view the certificate information and the service domain.

1.  Enter the password, path, registration date, and expiration date of the certificate.
    ![][company_basicinfo02]

2.  If you want to cancel the changes during input, click \[Cancel\] button to return to the last saved status.
    ![][company_basicinfo03]

3.  Click \[Save\] button. Saved content can be modified.
    ![][company_basicinfo04]

4.  Click \[Confirm Certificate Registration\] button.
    ![][company_basicinfo05]

5.  Please register after checking again since you cannot modify it after confirming certificate registration.
    ![][company_basicinfo06]




#### Domain Management

Manages the domain for the MSP service. The domain and alias entered when subscribing to MSP will be used.

1.  A domain example of each service is shown according to the domain registered at the time of subscription. Enter the domain and Cname to use for each service.
    ![][company_basicinfo07]

2.  Click \[Copy CNAME\] button to save the contents of the CName input field to the clipboard.
    ![][company_basicinfo08]

3.  If you want to cancel the changes during input, click \[Cancel\] button to return to the last saved status.
    ![][company_basicinfo09]

4.  Click \[Save\] button. Saved content can be modified.
    ![][company_basicinfo10]

5.  Click \[Confirm Domain Registration\] button. Please register after checking again since you cannot modify it after confirming domain registration.
    ![][company_basicinfo11]






### COMPANY INFO

>   Admin Service Portal - COMPANY - Company Info - *COMPANY INFO*

You can view and modify the company's basic information.
![][company_company01]

Contract Status : Refers to the MSP service contract date. - Cancel: All modifications on the COMPANY tab will be canceled.


###  SERVICE USAGE INFO

>   Admin Service Portal - COMPANY - Company Info - *SERVICE USAGE INFO*

You can view the status of the Service provided to the client by the MSP of the logged-in user. You can also view the start and end dates for each service.
![][company_service01]






### CLOUD

>   Admin Service Portal - COMPANY - Company Info - *CLOUD*

You can view the status of the Cloud Vendor provided to the client by the MSP of the logged-in user. You can also view start and end dates for each Cloud Vendor.
![][company_cloud01]






### PAYMENT INFO

>   Admin Service Portal - COMPANY - Company Info - *PAYMENT INFO*

1.  You can manage the person in charge of fees to contact in relation to the fees and the information used to issue the tax invoice.
    ![][company_billinginfo01]

2.  Save after entering the information of the person in charge of fees and the tax invoice information.
    ![][company_billinginfo02]








### HOMEPAGE

>   Admin Service Portal - COMPANY - Site Management - *HOMEPAGE*

1.  You can register and modify the settings related to the website. You can set the logo to be displayed on the website as image or text and set Favicon.
    ![][company_sitemngt02]
    Manage logo with image

    ![][company_sitemngt03]
    Manage logo with text

2.  Set the information for the website footer. You can register a representative, address, phone number, etc. for each site.
    ![][company_sitemngt04]

3.  Enter the technical support information for the website footer.
    ![][company_sitemngt05]





### TERMS

>   Admin Service Portal - COMPANY - Site Management - *TERMS*

You can register privacy policy and terms of use. You may renew the terms and update the version and apply the terms to the site.
The applicable terms are displayed at the time of signing up for the service.

![][company_sitemngt06]







### WHITEPAPER

Admin Service Portal - COMPANY - Site Management - *WHITEPAPER*

1.  You can save the image of the whitepaper containing the service description.
2.  You can register images for each service. Basic images are provided.
    ![][company_sitemngt07]










--------------------------------------------------------------------------------











## ADMIN USER

>   Admin Service Portal - *ADMIN USER*

You can edit registered admin users and manage their permissions.





### Register Admin Permission

>  Admin Service Portal - ADMIN USER - *Admin User List*





#### Register Admin Permission

1.  Click \[Register New Admin User\] in the Admin User list.
    ![][adminuser_usergroup02]

2.  A pop-up for \[REGISTER NEW ADMIN USER\] will appear.
    ![][adminuser_userlist03]

    You will see activated users under MSP with no admin permission at "All Users" on the left; while admin users with permission to access the admin site on the right.

3.  Select the user you wish to register as admin at "ALL USERS" on the left.
4.  In the admin user groups list on the top right corner, select the admin group where the user you selected will belong to and click \[Add\] button.
    ![][adminuser_userlist04]


#### Edit User Details

1.  You can view and edit basic information of the users.
2.  Register Admin Permission
    ![][adminuser_userlist05]










### Register Admin Permission

>   Admin Service Portal - ADMIN USER - *Edit Admin User Group*




#### Register Admin Permission

1.  Click \[Register New Admin User\] in the Admin User list.
    ![][adminuser_usergroup02]

2.  A pop-up for \[REGISTER NEW ADMIN USER\] will appear.
    ![][adminuser_userlist03]

    You will see activated users under MSP with no admin permission at "ALL USERS" on the left; while admin users with permission to access the admin site on the right.

3.  Select the user you wish to register as admin at "ALL USERS" on the left.
    ![][adminuser_userlist04]

4.  In the admin user groups list on the top right corner, select the admin group where the user you selected will belong to and click "Add" button.




#### Edit Admin User Group

1.  Click \[Modify Admin User Group\] button.
    ![][adminuser_usergroup03]

2.  A pop-up for \[MODIFY ADMIN USER GROUP\] will appear.
    ![][adminuser_usergroup04]

    You will see activated users under MSP with no admin permission at "ALL USERS" on the left; while admin users with permission to access the admin site on the right.

3.  In order to register admin users, select the user you wish to register as admin at "ALL USERS" on the left and click \[Add\] button.





#### Move Admin User Group

1.  Click \[Move Group\] button.
    ![][adminuser_usergroup05]

2.  Select the admin group you want and apply.
    ![][adminuser_usergroup06]





#### Edit User Details

1.  You can view and edit basic information of the users.
2.  You can remove admin permission of the users.
    ![][adminuser_userlist05]









--------------------------------------------------------------------------------






## CUSTOMER SUPPORT

>   Admin Service Portal - *CUSTOMER SUPPORT*





### Notice Management

![][support_support01]

>   Admin Service Portal - SUPPORT - *Notice Management*





#### View List

1.  Add New Posts
    You can click the card pocket in the top left corner to add a new notice.

2.  View More of Notice
    You can click the displayed notice to view the details.






#### View More

This pane is for viewing the details of the notice selected from the list. It supports title, date of registration, number of views, details view and attachment download features.

![][support_support02]

1.  Delete
    Deletes the queried notice.

2.  Modify
    Go to the pane to modify the queried notice.

3.  List
    Go to the list view pane.








#### Register/Modify

Registers new notices, or modifies registered notices.

![][support_support03]

1.  Attachments
    Adds an attachment to the notice to be posted. Only files with allowed extensions, such as documents and picture files, can be attached.

2.  PREVIEW
    You can check the form of the post after registration in advance through the preview pane.

3.  CANCEL
    Cancels the notice registration / modification and go to the View List pane.

4.  Register/Modify
    Completes the notice registration/modification and go to the View Details pane of the registered/modified post.











--------------------------------------------------------------------------------

















## CAMPAIGN

>   Admin Service Portal - CAMPAIGN - *Campaign Management*

You can check the registered campaign list information.

![][campaign_campaign01]

Provides campaign name, title, send time, status, sender, creator, and the number of recipients.

-   Status: Shows the status of the Delivery success, Scheduled Delivery, Save draft, Cancel delivery, and Delivery failure.
-   Write Mail : You can go to the Create Campaign page.
-   You can activate the View Details popup by clicking the \[View\] button in the list.





### Campaign Management



#### View Details

You can view, modify, and delete details of the relevant campaign.

1.  Click View Details button.
    ![][campaign_campaign02]

2.  You can view, modify, and delete details of the relevant campaign.
    ![][campaign_campaign03]

    1.	DELETE : Deletes the registered campaigns.
    2.	MODIFICATION : Go to the pane where you can edit the registered campaigns.
    3.	CONFIRM : You can close the View Details popup.


#### Create

You can check the registered campaign list information.

1.  Click Create Campaign Mail button.
    ![][campaign_campaign04]

2.  You can create campaign mail.
    ![][campaign_campaign05]

    1.	Sender List : A popup that allows you to search for and select senders is activated.
    2.	Search recipients : A popup that allows you to search for and select recipients is activated.
    3.	Set Scheduled Delivery: A popup that allows you to select the date and time of your scheduled delivery is activated.
    4.	Load Template: Loads the saved template and displays it in the editor.
    5.	SAVE DRAFT: Saves the campaign you created as a draft.
    6.	PREVIEW: You can see the created campaign as a preview popup.
    7.	CANCEL: Cancels the campaign you are creating and returns to the Campaign List screen.
    8.	SEND: Sends the campaign you created.


#### Sender List

You can check the registered senders.

1.  Click Sender List button.
    ![][campaign_campaign06]

2.  You can add and select the sender.
    ![][campaign_campaign07]

      1) Add A Sender: Registers the sender you entered.
      2) CANCEL: Cancels the work and closes the popup.
      3) CONFIRM: Reflects the selected sender on the Create pane and closes the popup.


#### Searching recipients

1.  Click Search Recipients button.
    ![][campaign_campaign08]


2.  You can search the list of clients and view the list of users of the selected client.
    ![][campaign_campaign09]

    1.  Customer List
        1. You can see the number of selected client and total client in a single pane.
        2. View condition: Activity Status, Service Status, and Join date
        3. APPLY: Searches for clients corresponding to the view condition.
        4. Select All : You can select all of the queried clients.

    2.  Customer User List
        1. View users who belong to the selected client.
        2. View condition: Company, User group
        3. APPLY : Searches for users by view condition
        4. Enter Search term: Searches again for the entered search term from the list of queried users.
        5. CANCEL: Cancels the work and closes the popup.
        6. CONFIRM: Reflects the selected client user on the Create pane and closes the popup.


#### Setting scheduled delivery

1.  Click 'Set Scheduled Delivery' button.
    ![][campaign_campaign10]

2.  You can set the time for Scheduled Delivery.
    ![][campaign_campaign11]
    1. Base Time: Select the base time.
    2. Reservation time: Select the date, time, and minute.
    3. CANCEL: Cancels the work and closes the popup.
    4. CONFIRM: Reflects the contents on the create pane and closes the popup.


#### Preview

1.  Click Preview button.
    ![][campaign_campaign12]


2.  You can check the campaigns you are creating.
    ![][campaign_campaign13]




### Automatically-triggered Email Management

Admin Service Portal - CAMPAIGN - *Automatically-triggered Email Management*

1.  You can choose the logo and company name to be attached when sending mail.
    ![][campaign_campaign14]

    SAVE: Saves the contents.


3.  Attach image file via file dialog.
    ![][campaign_campaign15]

    Attachments: Upload image files (jpg, gif, bmp, png) of 5MB or less.

    - Attachments can be available with image files only(jpg, gif, bmp, png).
    - Attachments under 5MB can only be registered.


































<!-- 이미지 모음 -->
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
