---
title   : AlertNow
service : alertnow
en : true
...

<!-- TOC -->




# AlertNow {#alertnow}

You can check the service status, and manage the problem status and history of the alarm occurred in the service.

--------------------------------------------------------------------------------


##	AlertNow Introduction {#alertnow-introduce}

###	What is AlertNow? {#whats-alertnow}

AlertNow is SaaS-based service incident lifecycle management platform. You can check each service status and manage the problem status and history of the alarm occurred in the service.

The key features of AlertNow are as follows.

![][alertnow_summary_image]

1.  Unified Incident Management
    -	Receives various alert information occurring in 3rd party monitoring tools.
    -	Removes unnecessary duplicates according to customized rules and creates necessary incidents.
2.  Effective Team Communication
    -	Sends the alert information as incidents to the most right person at the right time.
    -	Quickly spreads information via channels designated by user (SMS, phone, Slack etc).
3.  Resolution Focused Escalation
    -	Sets action and timeout as a rule and assigns a manager to handle the incidents step-by-step.
    -	When an incident is not acknowledged or closed, it automatically escalates to the manager of the next step, which reduces MTTD (Mean-Time-To-Detect) and MTTR (Mean-Time-To-Restore).



### AlertNow - Flow
![][incident_flow]

###	 AlertNow Key Terms (A-Z)

1.  Alert: It is a raw data and the user cannot change or delete the data.
2.  Escalation: Manages incidents by setting managers to handle step-by-step and action and timeout to be handled.
3.  Extension: It is a feature to export specific data created in AlertNow via external tools or services.
4.  Incident: When collecting alerts, it manages the status of the ticket created by incident policy.
5.  Integration: It is an endpoint that connects notifications occurred in 3rd party monitoring tools to AlertNow.
6.  Personal Setting: Provides personalized features about personal information and notification rules.
7.  Service: It is a unit to manage incidents occurring in integration. It can be actual services or applications, and can be used freely for user’s convenience.



--------------------------------------------------------------------------------



##	AlertNow Quick Start Guide {#alertnow-quick-starter-guide}

###	Getting Started {#start}

Provides the brief information about mandatory steps when you first use AlertNow  service.

#### Creating an integration {#create-incident}

You can deliver and manage notifications by selecting tools or services in an integration list that are in use and setting an integration. This Start Guide only provides steps for creating an integration. For detailed information, please refer to [When syncing with other 3rd party monitoring services: Adding an integration](#add-integration-for-third-party-link).

1.  Click \[Integrations\] menu. 
    ![][service_case2_01]

2.  Click  <span class="demo black button">Create integration</span> button.

3.  Click \[Add a New Integration\] button to create an integration.
    ![][escalation_case3_03]

4.  Create integration screen will be displayed as below. If you enter the required information and press the [Save] button, integration will be created.
    ![][create_integration]

#### Connecting Integration in AWS Cloudwatch {#aws-alertnow-connect}

To connect created integration in AWS Cloudwatch, you must first go to AWS  Console and create topic and subscription.

AWS Simple Notification Service Reference link: <https://docs.aws.amazon.com/ko_kr/sns/latest/dg/welcome.html>


##### SNS Dashboard {#sns-dashboard}

1.  When logging into AWS, you will see the following screen. Enter ‘SNS’ in the search field to go to SNS Dashboard.
    ![][aws_dashboard]

2.  In SNS Dashboard, click *Create topic*.
    ![][aws_make_topic]

3.  Enter the topic and display names and click [Create topic] button to create new topic.
    ![][aws_create_topic]
 
    Topic input items
 
    +--------------+------------------------------------------------------------------------------------------+----------+
    | Item         | Description                                                                              | Remark
    +==============+==========================================================================================+==========+
    | Topic name   | It is a communication channel for sending  messages and subscribing notifications.       | Required
    |              | It is used to create an Amazon  Resource Name (ARN) for a topic.                         |
    |              |                                                                                          | 
    |              | - Topic name ARN example  **arn:aws:sns:us-west-2:111122223333:MyTopic**                 | 
    +--------------+------------------------------------------------------------------------------------------+----------+
    | Display name | It is a display name for topics with SMS  subscriptions.                                 | Optional
    +--------------+------------------------------------------------------------------------------------------+----------+

4.  Click *Create subscription* in SNS Dashboard.
    ![][aws_new_subscribe]

5.  Enter the Topic ARN, Protocol, and Endpoint and click [Create subscription] button to create a subscription.
    ![][aws_make_subscribe]

    Create subscription input item

    +-----------+-----------------------------------------------------------+----------------------------------------------------------------------------+
    | Item      | Description                                               | Remark
    +===========+===========================================================+============================================================================+
    | Topic ARN | Automatically reflected based on the topic  name created. | Editable
    +-----------+-----------------------------------------------------------+----------------------------------------------------------------------------+
    | Protocol  | Select “HTTPS”.                                           | Optional  
    |           |                                                           | HTTP / HTTPS / Email / Email-JSON / Amazon  SQS / Application / AWS Lambda 
    +-----------+-----------------------------------------------------------+----------------------------------------------------------------------------+
    | Endpoint  | Paste the URL saved in AlertNow.                          | Input required
    +-----------+-----------------------------------------------------------+----------------------------------------------------------------------------+

6.  Click *Refresh* icon on the topic details screen and approvals for Subscription ID will be made.
    ![새로고침 클릭][aws_subscribe_confirm_before]
    ![구독자 번호 생성][aws_subscribe_confirm_after]


##### EC2 Console {#ec2-console}

1.  In AWS screen, enter ‘EC2’ in the search field to go to EC2 Console.
    ![][aws_select_ec2_service]

2.  Click ‘Instances’ at the left of the screen to go to a list of instances.
    ![][aws_instance_list]

3.  In Instances screen, select an instance, right-click the instance and select Actions > CloudWatch Monitoring > Add/Edit Alarms.
    ![][aws_select_instance]

4.  Click [Create Alarm] button.
    ![][aws_make_alert_click]

5.  In Create Alarm screen, enter the result value and click [Create Alarm] button.
    ![][aws_alert_make_screen]

    +-------------------------+---------------------------+-----------------+
    | Item                    | Description               | Remark
    +=========================+===========================+=================+
    | Send  a notification to | Select the created topic. | Optional
    +-------------------------+---------------------------+-----------------+
    | Whenever                | Set the threshold value.  | Input required 
    +-------------------------+---------------------------+-----------------+

#### Checking created incidents {#check-created-incident}
 
If you connect a created integration with AWS Cloudwatch, alert and incident are  created in AlertNow.

![Alerts screen][alertnow_alert_screen]

![Incidents screen][alertnow_incident_screen]

※	In order to check whether the alert is created properly, you must edit the threshold value.




--------------------------------------------------------------------------------



##	AlertNow User Setting Guide: by cases {#alertnow-situaltial-setting-guide}

Provides AlertNow setting guides by cases.

### When setting responders for incident notifications: Sending notifications

1.  Click [Escalation] menu.
    ![][escalation_case1_01]

2. 	Click [Create escalation] button. 
    ![][escalation_case1_02]


#### Setting rotations {#set-rotation}

If you want to send notifications between your team members, you can specify  each team member as a responder to receive notifications step-by-step.
![][escalation_screen]

3.  Enter escalation policy name and the description.

4.  Set the incident status to close escalations. (Acknowledge, Close)
    ![][escalation_set_policy]

5.  Select the escalation execution times. (You can select up to 9 times)
    ![][escalation_repeat_times]

6.  In a responder input field, enter the escalation responder name. You can select multiple responders.
    ![][escalation_responder]


  
#### Including responders of all the previous stages {#set-incide-previous-responder}
 
It is used to extend the responders to previous stages when sending  notifications. The initial responder and all the responders of previous stages will all receive the notifications.

7.  Press ‘+ Add an escalation stage’ to add the escalation step and click *Include responders of all the previous stages* checkbox. You can create up to 20 escalation stages.
    ![][escalation_set_previous_responder]

8.  If the responder does not acknowledge the notification, you can set the time period for escalating to the next step in *Interval* field. (in minutes)




#### Setting a reminder {#set-final-notice}

If no one recognizes the notifications even when the notification step is finished, it sends the final reminder to remind the responders once again.
![][escalation_set_final_notice]

9.  If you select ‘Use’ radio button, you can set the period and count of reminder repetition.

10. Click \[OK\] button to create an escalation policy and send notifications.







###	To receive notifications in various ways: Setting Contacts {#set-contact-for-notice}
 
#### Registering Contacts   {#registration-contact}

You can receive notifications via Email, Phone, Slack etc.

##### Contacts Setting

1.  Click \[Personal Settings\] menu.
2.  In Basic Information, you can set the profile and contacts information.
    ![][personal_setting_screen]
3.  The Profile consists of the following information.

    +-------------+--------------------------------------------------------------+-----------+
    | Item        | Description                                                  | Remark 
    +=============+==============================================================+===========+
    | Name        | User name                                                    |
    +-------------+--------------------------------------------------------------+-----------+
    | Login email | Login email information                                      |
    +-------------+--------------------------------------------------------------+-----------+
    | Time zones  | Set as the initial browser time. Editable                    | Can set
    +-------------+--------------------------------------------------------------+-----------+
    | Escalations | Escalation that the user belongs to or the  user has created |
    +-------------+--------------------------------------------------------------+-----------+

4.  The user can manually set the time zones.
    ![][btn_edit] Click  icon.
    ![][personal_setting_edit_timezone]
5. Time zone setting pop-up will be displayed as below. If you select ‘Custom settings’ radio button, you can change the standard time zone.
    ![][personal_setting_select_timezone]
6.  Click \[OK\] button to finish the time zone setting.

7.  Click <span class="demo black button">Add contact</span> button to register contacts. You can register email, mobile, and Slack up to 5. If you try to register more than 5, you will see the below pop-up message.
    ![][personal_setting_max_contact]

8.  Click \[OK\] button to complete the registration.

※ For specific mobile provider, the alert message can be regarded as spam according to the provider policy when entering an alert name.







### To minimize management overheads: Setting Incident creation rules  {#make-rule-incident-for-minimize-administrative-overhead}

When a problem occurs, you can manage incidents efficiently by limiting unnecessary alerts and classifying by incident urgency.


#### Setting Suppression rules {#make-incident-limit-rule}

The alerts will continue to occur until the problem is recovered. If the user creates an incident for an initial alert, the incidents for the following alerts that are the same type will not be created.

1.  Click [Services] menu.
    ![][escalation_case2_01]
2.  Click one of the created services and click ‘Incident creation rules’ tab.
    ![][service_rule_make]
3.  Click [Edit] button of the suppression rules and click the checkbox at the left.
    ![][service_incident_publish_rule]
4.  After selecting the condition and duration, click [OK] button to create a rule. (You can set the duration in seconds/minutes/hours/days.)
    ![][service_incident_publish_rule_make]
5.  You can create only one rule at a time. After deactivating the checkbox, clicking [OK] button and select [OK], the rule will not be proceeded.




#### Setting Incident Urgency {#set-rule-incident-urgency}

You can set the urgency for an alert, and check it by classifying created incidents by incident urgency.

1.  Click \[Services\] menu.
    ![][escalation_case2_01]
2.  Click one of the created services and click ‘Incident creation rules’ tab.
    ![][service_incident_tab_click]
3.  Click \[Edit\] button of the urgency rules and click the checkbox at the left.
    ![][service_urgency]

4.  Select the default rule of incident urgency. (Highest/High/Medium/Low/Lowest)
5.  If you click *Add custom criteria checkbox*, custom rule will be applied over the default rule.
    ![][service_user_condifion_add]

    +-------------------+---------------------------------------------------------------------------------------+
    | Item              | Description
    +===================+=======================================================================================+
    | Alert Summary     | Refers to ‘Title’ in an incident list.
    +-------------------+---------------------------------------------------------------------------------------+
    | Alert Metric Name | In an alert detail screen, you will see the following when clicking \[View\] button.
    |                   | (It will also be displayed on alert  summary) 
    |                   | ![][metric_json]
    +-------------------+---------------------------------------------------------------------------------------+

6.  Select the condition, enter the comparison value, set the urgency and click [OK].
    Then, the urgency rule will be added accordingly.

7.  You can add a rule. After deactivating the checkbox, clicking [OK] button and select [OK], the rule will not be proceeded.









### When registering a service to be notified: Adding a service  {#add-service-for-notice}

Service is a unit to manage incidents occurred in integration and can be managed by routing rules set in an integration.

#### Screen configuration: Service {#composit-service-screen}
![][service_screen]


#### Creating in Service menu {#create-service-menu}

##### Enter a service name {#enter-service-menu}

1.  Click \[Services\] menu.
    ![][escalation_case2_01]

2.  Click <span class="demo black button">Create Service</span> button.

3.  In a Create service screen, enter a service name.


##### Setting escalation rules {#set-escalation-rule}

You can receive notifications by classifying incident according to escalation rules.
![][service_create_screen]

4.  In Create service screen, set the escalation rule.

5.  In *Default escalation rule*, you can select the created escalation in Escalations menu.

6.  If you click *Add custom criteria* checkbox, custom rule will be applied over the default rule.

7.	Select the condition, enter the comparison value, and select the escalation rule.

8.  Set the incident creation rules (Suppression rule, Urgency rule). (It is same as To [minimize management overheads: Setting Incident creation rules](#make-rule-incident-for-minimize-administrative-overhead).)
    ![][service_incident_rule_make_list]

9.  Click \[OK\] button to create a service.

10. The created service will be displayed as below.
    ![][service_screen_under_tab]

    +-------------------------+-----------------------------------------------------------------------+------------+
    | Item                    | Description                                                           | Remark 
    +=========================+=======================================================================+============+
    | Incident                | You  can check the Incident status by period and search condition.    |
    +-------------------------+-----------------------------------------------------------------------+------------+
    | Integration             | You  can check the integration information of the service.            |
    +-------------------------+-----------------------------------------------------------------------+------------+
    | Escalation rules in use | You  can check the escalation information of the service.             | Editable 
    +-------------------------+-----------------------------------------------------------------------+------------+
    | Incident creation rules | You  can check the incident creation rule of the service.             | Editable
    +-------------------------+-----------------------------------------------------------------------+------------+




### When syncing with other 3rd party monitoring services: Adding an integration {#add-integration-for-third-party-link}

It provides the detailed information about creating an integration of Getting Started section. 

#### Creating an integration  {#create-integration-for-link}

1.  Click \[Integrations\] menu.
    ![][integration_01]

2.  Click <span class="demo black button">Create integration</span> button.

3.  Click \[Add a new integration\] button to create an integration. (Currently, it only supports AWS Cloudwatch and more integrations will be supported in the near future.)
    ![][escalation_case3_03]

4.  Create integration screen will be displayed as below.
    ![][integration_make]

    +-------------------+--------------------------------------------------------------+-------------+
    | Item              | Description                                                  | Remark 
    +===================+==============================================================+=============+
    | Integration  Name | Customer  can set Integration Name.                          | Required
    +-------------------+--------------------------------------------------------------+-------------+
    | Integration Type  | The  logo of the selected target is shown.                   | Required
    |                   | ![][service_case2_04_AWS]                                    |
    +-------------------+--------------------------------------------------------------+-------------+


#### For creating a new service {#case-create-integration}

When creating an integration, the service will also be created.

5.  You can create an integration in Create a new service screen. It is same as [When registering a service to be notified: Adding a service](#add-service-for-notice).


#### For selecting a service {#case-create-integration-for-select}

When creating an integration, existing service will be mapped.
![][integration_make_select_service]

6.  Select the default service rule.
7.  If you click *Add custom criteria* checkbox and set the conditions (Alert Summary, Alert Metric Name), custom rule will be applied over the default rule.
8.  Enter the name, create or select a service and click [OK] button. Then, an integration will be created as below.
    ![][integration_make_done]
9.  For URL, please copy SNS Webhook URL information for connecting SNS (Simple Notification Service) and AlertNow.










###  To classify responders by tasks: Setting escalation routing {#set-responder-by-rule}

You can classify responders by setting conditions in creating a service.

1.  Click \[Services\] menu to go to Services screen.
    ![][service_screen_normal]

2.  Click the created service to go to the corresponding service.

3.  In a service screen, click Escalation rules in use tab.
    ![][service_tab_created_escalation]

4.  Click \[Edit\] button to set the escalation rules.





#### Setting responders by region {#set-responder-by-location}

5.  Click Add custom criteria checkbox, select `Alert Summary`, `Contains` and enter the region names in comparison value field as below.
    When selecting an escalation, you have to create the right escalation first.
    For detailed information about creating an escalation, please refer to [Use Case 1: Create from Escalations menu](#escalation-use-case-1) in AlertNow Help.
    ![][escalation_rule_setted_local]


#### Setting responders by metric {#set-responder-by-metric}

6.  Click *Add custom criteria* checkbox, select “Alert Metric Name, Contains” and enter the metric names (ex: CPUUtilization) in comparison value field as below. When selecting an escalation, you have to create the right escalation first.
    ![][escalation_rule_setted]


#### Setting responders by server roles (CPU, DB, Network)
7.  Click *Add custom criteria checkbox*, select “Alert Summary, Contains” and enter the server roles in comparison value field as below. When selecting an escalation, you have to create the right escalation first.
    ![][escalation_rule_setted_metric] 

8.  After completing the escalation rule setting, click \[OK\] button.





--------------------------------------------------------------------------------


## AlertNow Help

### What is AlertNow?

AlertNow is Korea’s first SaaS-based service incident lifecycle management platform. 
You can solve incidents quickly by checking the service status and managing the problem status and history of the alarm occurred in the service.

#### Connect to AlertNow service

If you request for AlertNow service after signing in OpsNow, a list of OpsNow services is displayed at the top of the screen.
Among those services, select “AlertNow” to connect to the service.

![][summary_1] 

#### Menu Configuration

The menu configuration of each AlertNow service is shown below.

+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Item              | Description
+===================+==============================================================================================================================================================+
| Incident          | When collecting alerts, you can manage the status of the tickets created by incident policy.
+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Service           | Service is a unit for managing incidents that occur in Integration. 
|                   | It can be a service or application that is actually managed by the user. 
|                   | In addition, it can be used freely at the user's convenience.
+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Escalation        | When incident occurs, you can manage as a rule by appointing manager to handle it step by step and setting the action and time (timeout) to be processed.
+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Integration       | It is an endpoint that connects notifications occurred in 3rd-party monitoring tools to AlertNow.
+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Extension         | Extension is a feature that allows incident creation push created in AlertNow to export to external tools or services.
+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Personal Setting  | It provides personalized features about personal information and notification rules of incidents.
+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+






### Incidents {#incident}

#### Overview {#summary}

The Incidents menu provides a list of alerts and incidents that occurred in each service. Using the Incidents menu, the user can identify problems that need to be handled and record the processing status of each issue.

![Figure 1. Flow chart of Alerts and Incidents][incident_flow]

##### Alert {#summary-incident-alert}

If you receive a notification event occurred from monitoring tools or other services such as CloudWatch, Azure, or UIM through the Integration setting, it is created as an Alert.

-	Alert is raw data and the user cannot change the data or delete the created alert.
-	Incident is created based on alert. However, not all alerts are created as incidents, but only the ones that match the Incident creation rule is created as incidents.
-	The alert is not delivered to the user. Incident must be created through that alert in order to send notifications to the user.




##### Incident {#summary-incident-incident}


When alerts are collected, an incident is created through preset Incident Creation Rule. After the incident is created, the user can record the processing status of the incident or receive notifications through Escalation. 

If necessary, the user can set the maintenance schedule per service.


-	Stable Alert Receive
    ![][incident_1]
	Incident is generated according to the threshold setting, and if the instance status gets back to normal, it automatically closes the existing incidents.
-	Limit unclosed incident creation
    If there are unclosed incidents with the same Cloudwatch alert name and dimension information, incident creation is limited.
    ![][incident_2]

    ※ Note: Dimension information provided by Cloudwatch

    `InstanceId`, `ApiName`, `Fleet`, `ServiceName`, `DistributionId`, `ClientId`, `RuleName`, `LogGroupName`, `ConnectionId`, `DBInstanceIdentifier`, `VolumeId`, `FileSystemId`, `LoadBalancerName`, `AutoScalingGroupName`, `ActionType`, `ClientId`, `PipelineId`, `JobId`, `Flow`, `StreamName`, `KeyId`, `FunctionName`, `BotName`, `MLModelId`, `Broker`, `HealthCheckId`, `Host`, `TopicName`, `QueueName`, `BucketName`, `AttackVector`, `LambdaFunctionArn`, `Domain`, `GatewayId`, `ServiceName`, `NatGatewayId`,
`VpnId`, `Rule`, `WorkspaceId`


-   Supression rules
    For alerts that are not filtered from “Unclosed incident creation limit”, incident creation is limited by applying the rules set from the service.
    However, there must be unclosed incidents.

    Also, the user can handle the problems according to the user’s judgment by creating the incidents manually even if the alerts have not been created. (To be scheduled)

    -	The user can create as incidents by selecting alerts that are not created because of the alert rules. (To be scheduled)
    -	The user can manually create incidents even if no alerts have been created. (To be scheduled)
    -	The user can connect to other incidents by selecting alerts that incident have already been created. (To be scheduled)
  






#####    Alert and Incident relation    {#alert-incident-relationship}

From what’s above, Alert and Incident can have the following relationships:

1.	Based on Alert

    +---------------------+---------------------------+-----------------------------+
    | Incident creation   | Alert : Created Incident  |	[ 1 : 1 ]
    +---------------------+---------------------------+-----------------------------+
    | Reference Alert     | Alert : Referred Alert 	  |	[ 1 : N ] (To be scheduled)
    +---------------------+---------------------------+-----------------------------+
    | Reference Incident  |	Alert : Referred Incident |	[ 1 : N ] (To be scheduled)
    +---------------------+---------------------------+-----------------------------+

2.	Based on Incident

    +---------------------------+-----------------------------------+--------------------------------+
    | Alert based on creation   |   Incident : Alert 		        |   [ 1 : 1 ]
    +---------------------------+-----------------------------------+--------------------------------+
    | Merge Incident            |   Incident : Merged Incident   	|	[ 1 : N ] (To be scheduled)
    +---------------------------+-----------------------------------+--------------------------------+
    | Reference Incident        |   Incident : Referred Incident	|	[ 1 : N ] (To be scheduled)
    +---------------------------+-----------------------------------+--------------------------------+
    | Reference Alert           |   Incident : Referred Alert	    |	[ 1 : N ] (To be scheduled)
    +---------------------------+-----------------------------------+--------------------------------+

Alerts can have the following Incident creation results:

1.	Incident created
2.	Suppressed (by suppression rule)
3.	Suppressed (by maintenance)
4.	Suppressed (not closed)












#### Incident {#incident-incident}

>   Connection path: Incidents > *Incidents*

The Incidents menu provides a list of created incidents, so you can check the details per incident and record the processing status.
You can also search for specific incidents by setting the period and keywords.


##### Screen Layout {#incident-user-layout}

The Incident menu is divided into two areas as the below image.
![Incident Menu Configuration][incident_3]

1.	Incident List
    You can check and search the list of incidents that have already occurred. If you select the incident in the incident list, the information of selected incident is displayed in the Details area. In the List screen, you can check the following information.

    +-----------------+-----------------------------------------------------------------------------+
    | Item            | Description
    +=================+=============================================================================+
    | Number          |  Displays the Identification Number of the incident.
    +-----------------+-----------------------------------------------------------------------------+
    | Title           |  Displays the title of the incident.
    +-----------------+-----------------------------------------------------------------------------+
    | Status          |  Displays the status of the incident.
    |                 |  Incident has the following status values.
    |                 |  -	Open
    |                 |  -	Acknowledge
    |                 |  -	Close
    +-----------------+-----------------------------------------------------------------------------+
    | Created         |  Displays the created date and time of the incident.
    +-----------------+-----------------------------------------------------------------------------+
    | Changed         |  Displays the last updated date and time of the incident.
    +-----------------+-----------------------------------------------------------------------------+
    | Urgency         |  Displays the urgency of the incident.
    +-----------------+-----------------------------------------------------------------------------+
    | Service         |  Displays the name of the service where incident occurred.
    +-----------------+-----------------------------------------------------------------------------+
    | Assignee        |  Displays the name of the user designated as the manager of the incident.
    +-----------------+-----------------------------------------------------------------------------+




2.	Incident Detail
    You can check the details of incident selected in Incident List. 
    The user can also view on the bigger screen by enlarging it upon the user’s needs. In the Incident Detail screen, you can check the following information.

    -   Summary

        +----------------+----------------------------------------------------------------+
        | Item           | Description
        +================+================================================================+
        | Service        | Displays the name of the service where incident occurred.
        +----------------+----------------------------------------------------------------+
        | Created        | Displays the created date and time of the incident.
        +----------------+----------------------------------------------------------------+
        | Urgency        | Displays the urgency of the incident.
        +----------------+----------------------------------------------------------------+
        | Assignee       | Displays the manager of the incident.
        +----------------+----------------------------------------------------------------+

    -   Detail

        +--------------------+---------------------------------------------------------------------------------------+
        | Item               | Description
        +====================+=======================================================================================+
        | Status             | Displays the status of the incident.
        |                    | Incident has the following status values.
        |                    | -	Open
        |                    | -	Acknowledge
        |                    | -	Close
        +--------------------+---------------------------------------------------------------------------------------+
        | Escalation         | Displays the Escalation Rule set in the incident.
        +--------------------+---------------------------------------------------------------------------------------+
        | Integration        | Displays the name of the Integration that caused the incident.
        +--------------------+---------------------------------------------------------------------------------------+
        | Integration Type   | Displays the Integration Type that caused the incident.
        +--------------------+---------------------------------------------------------------------------------------+
        | Reference alert    | Displays the alert that caused the incident.
        +--------------------+---------------------------------------------------------------------------------------+
        | Message            | Displays an attached message when an alert occurs.
        +--------------------+---------------------------------------------------------------------------------------+
        | Description        | Displays the description of the incident. You can enter the description manually.
        +--------------------+---------------------------------------------------------------------------------------+





#####    Incident Status     {#incident-status}

Incident has three types of status values and depending on the status, the title area is displayed with different colors.

1.	Open
    The incident is newly created and has not yet been processed.

    ![Incident opened status][incident_status_01]


2.	Acknowledge
    The manager recognizes the problem and handles it.

    ![Incident acknowledged status][incident_status_02]

3.	Close
    The problem has been solved and closed.

    ![Incident closed status][incident_status_03]




##### Incident Search {#incident_search}

The user can search incidents by setting period/keyword conditions in the Incident List. The search results are displayed immediately in the Incident List.

1.	Period Search
    ![Search Condition][incident_search_01]

    a.	Preset period selection
        The user can search incidents by setting the period/keyword conditions in the Incident List. The search results are displayed immediately in the Incident List.

        +------------+--------------------------------------------------------------+
        | Preset     | Period
        +============+==============================================================+
        | All        | Search the entire period when incident occurred
        +------------+--------------------------------------------------------------+
        | Today      | Select the current date
        +------------+--------------------------------------------------------------+
        | Yesterday  | Select the yesterday's date
        +------------+--------------------------------------------------------------+
        | This Week  | Select the corresponding week based on the current time
        +------------+--------------------------------------------------------------+
        | This Month | Select the corresponding month based on the current time
        +------------+--------------------------------------------------------------+
        | Last Week  | Select the previous week based on the current time
        +------------+--------------------------------------------------------------+
        | Last Month | Select the previous month based on the current time
        +------------+--------------------------------------------------------------+

    b.	Select Period
        The user can select the search start/end date and time. 
        When selecting the period, incidents within the selected period are displayed in the Incident List.
        In addition, the user can select the left/right arrow to set the previous/next cycle based on the currently set date.


2.	Keyword Search
    The user can enter keywords to search for incidents that match the entered keywords.
    Among the incidents of selected period, the ones that match the entered keywords are displayed as search results.


3.  Status filter

    ![Status filter (Upper right)][incident_search_02]

    Among the incidents in the list, the manager can filter and check only the incident that the user has currently logged in.

    a.	Assign to me
        In the Incident List, displays only the incident that the user has currently logged in.
    b.	All
        Displays all incidents
  

##### Incident Manipulation {#incident-handling}
You can perform the following tasks on Incidents in the list.

1.  Change status
    You can change the incident status. You can change the status of individual incident, and you can select multiple incidents to change all status

    a.	Change Incident Status
        In the Incident Detail screen, you can press the button at the bottom of the name to change the status.
        ![][incident_handling_01]
        -	Incident in Open status can be changed to Acknowledge or Close status.
        -	Incident in Acknowledge status can be changed to Close status.
        -	Incident in Close status cannot be changed.

    b.	Change All Status of Multiple Incidents
        You can change all status of incidents at once by selecting incidents to be changed from the Incident List.
        ![][incident_handling_02]
        After selecting multiple incidents, you can change the status by clicking the [Acknowledge] [Close] button on the upper left of the Incident List

2.	Assign and Change Assignee
    You can assign or change managers per incident. If you click the \[Assign manager\] button on the Incident Detail page, a popup that allows you to assign the manager will be displayed.
    a.	Select Incident to assign manager
        The Manager field displays the name of the currently assigned manager. If you click the [Manager] button, a popup that allows you to change the manager will be displayed.
        ![][incident_handling_03]
    b.	Select Manager
        You can assign the manager by searching in Assign Manager popup.
        ![][incident_handling_04]
    	You cannot assign multiple managers for single incident.
    c.	Create comment
        You can create comment on Incidents

        1.  Go to “Full screen” of the Incident Details screen
            ![][incident_handling_05]
            In the Incident Detail screen, enter either in the “All” or “Comment” at the Active History tab.
        2.  After entering comment, click [Write] button
            ![][incident_handling_05_01]
        3.  Check the entered comment
            ![][incident_handling_06]
        4.  Change title
            The title of each incident can be changed according to the user's needs.
            a.  Click \[Modify\] button in the Title area of the full screen
                ![][incident_handling_07]
            b.  After editing Title, click \[OK\] button
                ![][incident_handling_08]
            c.  Check the changed title
                ![][incident_handling_09]

3.	Check Reference Alert
    You can check the reference alert for each incident, and go to the Details screen of each alert.
    a.	Check incident reference alert
        ![][incident_handling_10]
    b.	Click the reference alert to view alert details
        ![][incident_handling_11]



##### Create an incident manually

You can create an incident manually as below.

1.  In Incident screen, click the [Create incident] button.
2.  After clicking the button, incident creation popup will be shown as below.
    ![][incident_manual_popup]

    The input items for creating an incident are as below.
        

    +-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    | Item        | Description                                              
    +=============+======================================================================================================================================================================+
    | Service     | Select a service created in the Service screen.              
    +-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    | Title       | Enter the incident title.                                    
    +-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    | Assignee    | If you point the mouse over the input field, a list  of assignees will be shown as a dropdown.
    |             | You can select the assignee from  that list.  
    |             | ※ If you designate yourself for an assignee  
    |             |
    |             | -   After creation, the incident status is  automatically set as “Acknowledge”, so escalation may not be made. 
    |             |     (When  setting an escalation rule, if the incident status to close escalation in  Close condition is “Acknowledge”, escalation will not be made,  but if the  status is “Close”, escalation will be continued.)  
    |             | -   In Personal Setting > Notification rules, the  notification will still not be sent even if the notification in **When an incident is assigned to me** is  set. 
    +-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    | Escalation  | **Default  escalation rule** 
    |             |  When selecting, the default escalation rules set in  the service will be applied.  
    |             |
    |             |  **Select an  escalation rule** 
    |             |  The user can select an escalation rule that has been  manually created. 
    +-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    | Urgency     | **Default  urgency rule** 
    |             |  When selecting, the default urgency rule set in the  service will be applied.
    |             |
    |             |  **Select an  urgency** 
    |             |  The user can manually select the urgency. (None/Highest/High/Medium/Low/Lowest) 
    +-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    | Description | Enter the description about an incident to be  created.      
    +-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+

3.  If you click [OK] button, incident will be created.
4.  The created incident will be shown as below.
    ![][incident_manual_screen]


※ You cannot create an incident when there is no created service. You must create a service first in order to create an incident.
![][incident_manual_alert]



#### Alert {#incident-alert}

> Connection path: Incidents > *Alerts*

The Alerts menu provides a list of alerts, so you can check the details. 
You can also search for specific alerts by setting the period and keywords.  

#####  Screen Layout         {#alert-user-interface}

The Alert menu is divided into two areas as the below image.

![Alert Configration][alert_01]


1.  Alert List
    You can check and search the list of alerts that have already occurred. 
    If you select the alert in the alert list, the information of selected alert is displayed in the Details area.

    In the List screen, you can check the following information.

    +----------------------------+------------------------------------------------------------------------------------+
    | Item                       | Description
    +============================+====================================================================================+
    | Number                     | Displays the Identification Number of the alert.
    +----------------------------+------------------------------------------------------------------------------------+
    | Title                      | Displays the title of the alert.
    +----------------------------+------------------------------------------------------------------------------------+
    | Incident Creation          | Displays whether the incident for corresponding alert has been created.
    +----------------------------+------------------------------------------------------------------------------------+
    | Created                    | Displays the created date and time of the alert.
    +----------------------------+------------------------------------------------------------------------------------+
    | Service                    | Displays the name of the service where the alert occurred.
    +----------------------------+------------------------------------------------------------------------------------+
    | Integration Type           | Displays the integration type of the service where the alert occurred.
    +----------------------------+------------------------------------------------------------------------------------+


2.	Alert Detail
    You can check the details of alert selected in Alert List. The user can also view on the bigger screen by enlarging it upon the user’s needs. In the Alert Detail screen, you can check the following information.

    +--------------------------------+-----------------------------------------------------------------------------+
    | Item                           | Description
    +================================+=============================================================================+
    | Incident Creation status       | Displays Incident creation results according to Incident creation rule.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Created                        | Displays the created date and time of the alert.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Occurred                       | Displays the occurred date and time of the alert.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Service                        | Displays the name of the service where alert occurred.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Integration                    | Displays the integration of the alert.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Integration Type               | Displays the Integration Type of the service that caused the alert.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Region                         | Displays the region where the alert occurred.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Statistic Type                 | Displays the aggregation type of the alert.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Statistic                      | Displays statistics set value of the alert.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Comparison operator            | Displays the threshold setting comparison operator of the alert.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Period                         | Displays the metric information measurement period. 
    +--------------------------------+-----------------------------------------------------------------------------+
    | Datapoint                      | Displays the metric information measurement count. 
    +--------------------------------+-----------------------------------------------------------------------------+
    | Message                        | You can check the alert details as a message.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Reference                      | Displays the incident connected to the alert.
    +--------------------------------+-----------------------------------------------------------------------------+
    | Description                    | Displays the description of the alert.
    +--------------------------------+-----------------------------------------------------------------------------+






#####  Alert Search {#alert-search}

The user can search alerts by setting period/keyword conditions in the Alert List.
The search results are displayed immediately in the Alert List.

1.	Period Search

    ![Search conditions][alert_search_01]

    a.	Preset period selection
        It provides the period that the user can select in Preset format.
        The user can select the preset for the below period, and the selected period is displayed in the period selection area when selected.

        +------------+--------------------------------------------------------------+
        | Preset     | Period
        +============+==============================================================+
        | All        | Search the entire period when incident occurred
        +------------+--------------------------------------------------------------+
        | Today      | Select the current date
        +------------+--------------------------------------------------------------+
        | Yesterday  | Select the yesterday's date
        +------------+--------------------------------------------------------------+
        | This Week  | Select the corresponding week based on the current time
        +------------+--------------------------------------------------------------+
        | This Month | Select the corresponding month based on the current time
        +------------+--------------------------------------------------------------+
        | Last Week  | Select the previous week based on the current time
        +------------+--------------------------------------------------------------+
        | Last Month | Select the previous month based on the current time
        +------------+--------------------------------------------------------------+

    b.	Select Period
        The user can select the search start/end date and time.
        When selecting the period, alerts within the selected period are displayed in the Alert List.
        In addition, the user can select the left/right arrow to set the previous/next cycle based on the currently set date.

2.	Keyword Search
    The user can enter keywords to search for alerts that match the entered keywords.
    Among the alerts of selected period, the ones that match the entered keywords are displayed as search results.






##### Alert Manipulation      {#alert-handling}

You can perform the following tasks on Alert in the list.

1.	Check Message
    You can check the detailed message about the alert that occurred.
    a.	Click \[Message\] > \[View\] button on the Alert Detail screen.
        ![][alert_search_02]
    b.	Detailed message is displayed in the new tab.
        ![][alert_search_03]

2.	Enter Description
    You can enter a detailed description about the alert that occurred.
    a.	Click \[Modify\] button icon on the Alert Detail screen
        ![][alert_search_04]
    b.	Enter the description and click \[save\] button 
        ![][alert_search_05]
    c.	Check the entered description
        ![][alert_search_06]

3.	View Reference Incident
    You can check the incident created by selected alert, and go to the Details screen of each incident.
    a.	Check Reference incident
        ![][alert_search_07]
    b.	Click reference incident to view Incident details
        ![][alert_search_08]






### Services {#service}

You can manage incidents and status by service.

Service is a unit for managing incidents that occur in Integration. It can be a service or application that is actually managed by the user. In addition, it can be used freely at the user's convenience.
You can manage incidents by branching to service according to the routing rule set in integration.

Use Case for Service creation is shown below.

+---------------------------------+------------------------------------------------------------------------------------------------+
| Case                            |  Description
+=================================+================================================================================================+
| Use Case 1)                     |  Click [Create Service] button at the top right of the Service menu.
| Create from “Service” menu      |  <span class="demo black button">Create service</span>
|                                 |  Create the service.
|                                 |  In this case, you can create it with the Service Name and Escalation rules settings
+---------------------------------+------------------------------------------------------------------------------------------------+
| Use Case 2)                     | Click [Create Integration] button at the top right of the Integration menu
| Create at Integration Creation  | <span class="demo black button">Create integration</span>
| on "Integration" menu           |
|                                 | Select the service. 
|                                 | 
|                                 | -	Integration name
|                                 | -	Integration type
|                                 | -   Service > Create new service
+---------------------------------+------------------------------------------------------------------------------------------------+





#### Use Case 1. Create from Service menu   {#service-use-case-1}

1.  Step 1: Select Services Menu
    Click Services menu.
    ![][service_case1_01]

2.  Step 2: Create New Service
    Click [Create Service] button.
    ![][service_case1_02]

3.  Step 3: Create Service
    The input items for service creation are shown below.

    +------------------------------------+------------------------------------------------------------------------------------------------------------------------+--------------+
    | Item                               | Description                                                                                                            | Remark
    +====================================+========================================================================================================================+==============+
    | Service name                       | Randomly enter a service name that the customer wants to create.                                                       | Required
    +------------------------------------+------------------------------------------------------------------------------------------------------------------------+--------------+
    | Escalation rules                   | Escalation basic rules: If there are no created escalation rules, “Default escalation rule” is created.                | Required
    |                                    | -	Add custom criteria: The user can determine the priority and select Escalation according to the conditions.       |
    |                                    | -	(If selected, the rule of the condition set by the user takes precedence over the default rule.)                  |
    |                                    |                                                                                                                        |
    +------------------------------------+------------------------------------------------------------------------------------------------------------------------+--------------+
    | Incident creation rules            | -    Suppression rule                                                                                                  | Optional
    |                                    |      If the condition items (Alert Summary, Alert Metric Name) occur consecutively,                                    |
    |                                    |      you can set the period (seconds, minutes, hours, days) to prevent the occurrence of duplicate incidents.          |
    |                                    | -	Urgency rule                                                                                                      |
    |                                    |      You can set the urgency of incident.                                                                              |
    +------------------------------------+------------------------------------------------------------------------------------------------------------------------+--------------+

    If there are no escalation rules, a Default Escalation Rule is automatically created.
    (The Service creator is set as the default recipient.)

    If there are escalations, click \[Save\] button.
    ![][service_case1_03]

4.  Step 4: Select Created Service
    Click the created service to go to the following screen.
    ![][service_case1_05]

    The contents of each tap are shown below.

    +--------------------------------+-----------------------------------------------------------------------+-------------------+
    | Item                           | Description                                                           | Remark
    +================================+=======================================================================+===================+
    | Incident                       | You can check the Incident status by period and search condition.     |
    +--------------------------------+-----------------------------------------------------------------------+-------------------+
    | Integration                    | You can check the integration information of the service.             |
    +--------------------------------+-----------------------------------------------------------------------+-------------------+
    | Escalation rules in use        | You can check the escalation information of the service.              | Editable
    +--------------------------------+-----------------------------------------------------------------------+-------------------+
    | Incident creation rules        | You can check the incident creation rule of the service.              | Editable
    +--------------------------------+-----------------------------------------------------------------------+-------------------+



5.  Step 5: Set Integration to the Created Service
    Please refer to the Use Case 2) below




#### Use Case 2. Create at Integration Creation {#service-use-case-2}

1.  Step 1: Select Integration Menu
    Click Integration menu.
    ![][service_case2_01]

2.  Step 2: Create New Integration
    Click [Create Integration] button.
    ![][service_case2_02]

3.  Step 3: Select AWS Cloud Watch
    Click \[Add a New Integration\] button.
    ![][service_case2_03]

4.  Step 4: Set Integration
    ![][service_case2_04]

    The input items for the Integration settings are shown below.

    You can manage incidents by grouping multiple integrations and specifying as a customer-oriented service for customers to manage.

    +-------------------------+-------------------------------------------------------------------------------+-----------------------------+
    | Item                    | Description                                                                   | Remark
    +=========================+===============================================================================+=============================+
    | Integration Name        | Customer can set Integration Name.                                            | Required
    +-------------------------+-------------------------------------------------------------------------------+-----------------------------+
    | Integration Type        | The logo of the selected target is shown.                                     | Cannot enter or edit
    |                         | ![][integration_04_AWS]                                                       |
    +-------------------------+-------------------------------------------------------------------------------+-----------------------------+
    | Service                 | -	Create New Service                                                        | Selection required.
    |                         |     When creating Integration, Service is also created at the same time.      | No duplicate selection.
    |                         | -	Select Service                                                            | 
    |                         |     When creating Integration, the existing Service is mapped.                | 
    +-------------------------+-------------------------------------------------------------------------------+-----------------------------+

    The Creation Service screen is shown below.
    ![][service_case2_05]

    +--------------------------------+-------------------------------------------------------------------------------------------------------------------------+------------------+
    | Item                           | Description                                                                                                             | Remark
    +================================+=========================================================================================================================+==================+
    | Service name                   | Randomly enter a service name that the customer wants to create.                                                        | Required
    +--------------------------------+-------------------------------------------------------------------------------------------------------------------------+------------------+
    | Escalation rules               | -   Escalation basic rules: If there are no created escalation rules, “Default escalation rule” is created.             | Required
    |                                | -   Add custom criteria: The user can determine the priority and select Escalation according to the conditions.         |
    |                                |     (If selected, the rule of the condition set by the user takes precedence over the default rule.)                    |
    +--------------------------------+-------------------------------------------------------------------------------------------------------------------------+------------------+
    | Incident creation rules        | -   Suppression rule                                                                                                    | Optional
    |                                |     If the condition items (Alert Summary, Alert Metric Name) occur consecutively,                                      |
    |                                |     you can set the period (seconds, minutes, hours, days) to prevent the occurrence of duplicate incidents.            |
    |                                | -   Urgency rule                                                                                                        |
    |                                |     You can set the urgency of Incident.                                                                                |
    +--------------------------------+-------------------------------------------------------------------------------------------------------------------------+------------------+

5.  Step 5: Save Created Integration and Service
    Click [Save] button at the bottom right after entering "Integration Name" and creating or selecting Service about custom setting.
  















### Escalations {#escalations}


When incident occurs, you can manage as a rule by appointing manager to handle it step by step and setting the action and time (timeout) to be processed.

Use Case for Escalation Policy creation is shown below.

+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
| Case                                       | Description
+============================================+==================================================================================================================+
| Use Case 1)                                | Click “Create New Escalations” button at the top right of the Escalations menu.
| Create from “Escalations” menu             | Create the Escalation Policy.
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
| Use Case 2)                                | For creating “Service”, "Default Escalation Rule" is created if there are no existing escalation rules.
| Generate Default Escalation Rule           | <span class="demo black button">Create Escalation</span>
| at “Service” creation                      |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
| Use Case 3)                                | When creating “Service” and “Integration” simultaneously,
| In case of creating                        | “Integration” and “Default Escalation Rule” is created if there are no existing escalation rules.
| “Service” at the same time,                |
| and if there are no existing               |
| escalation rules created                   |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+


#### Use Case 1. Create from Escalations menu {#escalation-use-case-1}

1.  Step 1: Select Escalation menu
    Click Escalation menu. 
    ![][escalation_case1_01]

2.  Step 2: Create New Escalation
    Click [Create New Escalation] button.
    ![][escalation_case1_02]

3.  Step 3: Establish Escalation Policy
    ![][escalation_case1_03]

    The input items for the Escalation settings are shown below.

+------------------------+-----------------------------------------------------------------------------------------------------+-------------------------------+
|Item	                 | Description	                                                                                       |Remark
+========================+=====================================================================================================+===============================+
|Name	                 | Customer can set Escalation Policy Name.	                                                           |Required
+------------------------+-----------------------------------------------------------------------------------------------------+-------------------------------+
|Description             | Adds a description for the escalation.            	                                               |Optional
+------------------------+-----------------------------------------------------------------------------------------------------+-------------------------------+
|Rule Settings           | If the Incident is not “acknowledged / closed” It will escalate to next step.                       |
|                        |                                                                                                     |
|                        | -	If not in the “Acknowledged” status,                                                           |
|                        | -	If not in the “Closed” status,                                                                 |
|                        |                                                                                                     |
|                        | Sets the Escalation Policy to be applied.	                                                       |
+------------------------+-----------------------------------------------------------------------------------------------------+-------------------------------+
|Recipient Settings 	 | You can choose among your colleagues and select multiple recipients.	                               |Required when selecting policy
+------------------------+-----------------------------------------------------------------------------------------------------+-------------------------------+
|Time (Minutes)	         | For sending notifications, you can set the time period in minutes.                  	               |Required when selecting policy
+------------------------+-----------------------------------------------------------------------------------------------------+-------------------------------+
|Action	                 | After receiving notifications from recipients by setting the time period (in minutes),              |Required when selecting policy
|                        | you can select either “Escalation to the next step” or “repeat this step”.                          |
|                        | -	Escalation to the next step: Performs the next escalation steps.                               |
|                        | -	Repeat this step: Repeats the current step. Repeat cycle can be set in hours.                  |
+------------------------+-----------------------------------------------------------------------------------------------------+-------------------------------+
|Additional item settings| If no action is taken even when Escalation is escalated to action and additional escalation,        | Option setting item
|                        | you can set the following options.                                                                  |
|                        |                                                                                                     |
|                        | -    If no one is acknowledged, repeat this policy (n) times.                                       |
|                        | \>    From step 1 to the last step, it is restarted (n) times.                                      |
|                        | \>    The maximum number of (n) attempts is 9.                                                      |
|                        |                                                                                                     |
|                        | -	If no one is acknowledged, there will be (n) notifications every (n) minutes for all responders|
|                        | \>    The maximum number of (n) attempts is 9.                                                      |
|                        | \>    You can set the time interval of (n) minutes.	                                               |
+------------------------+-----------------------------------------------------------------------------------------------------+-------------------------------+

    
    
    
4.  Step 4: Save created escalation
    Save the Escalation setting as follows:
    ![][escalation_case1_04]




#### Use Case 2. Generate Default Escalation Rule at “Service” creation {#escalation-use-case-2}

1.	Step 1: Select Services menu
    Click Services menu.
    ![][escalation_case2_01] 
2.	Step 2: Create New service
    Click [Create service] button.
    ![][escalation_case2_02] 
3.	Step 3: Create Default Escalation Rule
    ![][escalation_case2_03]
    If there is no escalation rule, “Default Escalation Rule” is automatically created.
    (The service provider is set as the default recipient.)

※ For more information about service creation, please refer to the Service Guide.


#### Use Case 3. In case of creating “Integration” and “Service” at the same time  {#escalation-use-case-3}

1.	Step 1: Select Integration menu
    Click Integrations menu.
    ![][escalation_case3_01]
2.	Step 2: Create New integration
    Click [Create Integration] button.
    ![][escalation_case3_02]
3.	Step 3: Select AWS Cloud Watch
    ![][escalation_case3_03]
    Click \[Add a new Integration\] button.
4.	Step 4: Set Integration
    ![][escalation_case3_04]

    When creating “Service” and “Integration” simultaneously, “Default Escalation Rule” is created if there are no existing escalation rules. (The Service provider is set as the default recipient.)

※ For more information about integration creation, please refer to the Integration Guide.






###  Integrations {#integration}

You can forward and manage notifications occurring in the tool with AlertNow by selecting the tools or services you are using from the list of integrations provided by AlertNow.


> ***Note: The integration resources provided by AlertNow are as follows.
> AWS CLOUD WATCH: EC2, RDS, EBS, Redshift, ELB, S3 (To be updated when an item is added)***


####  Integration settings

Integration settings guide is as follows.

1.  Step 1: Select Integration Menu
    Click Integrations menu.
    ![][integration_01]
2.  Step 2: Create New Integration
    Click [Create Integration] button.
    ![][integration_02]
3.  Step 3: Select AWS Cloud Watch
    Click [Add a new integration] button.
    ![][integration_03]
4.  Step 4: Set Integration
    ![][integration_04]

    The input items for the Integration settings are shown below.

    You can manage incidents by grouping multiple integrations and specifying as a customer-oriented service for customers to manage.

    +------------------------+----------------------------------------------------------------------------+-------------------------+
    | Case                   | Description                                                                | Remark  
    +========================+============================================================================+=========================+
    | Integration Name       | Customer can set Integration Name.                                         | Required
    +------------------------+----------------------------------------------------------------------------+-------------------------+
    | Integration Type       | The logo of the selected target is shown.                                  | Cannot enter or edit
    |                        | ![][integration_04_AWS]                                                    | 
    +------------------------+----------------------------------------------------------------------------+-------------------------+
    | Service                | -   Create New Service                                                     | Selection required.
    |                        |     When creating integration, service is also created at the same time.   | No duplicate selection.
    |                        | -   Select Service                                                         |
    |                        |     When creating integration, the existing service is mapped.             |
    +------------------------+----------------------------------------------------------------------------+-------------------------+


    The Creation Service screen is shown below.
    ![][integration_05]

    +---------------------------------+---------------------------------------------------------------------------------------------------------------------+--------------+
    | Case                            | Description                                                                                                         | Remark  
    +=================================+=====================================================================================================================+==============+
    | Service name                    | Randomly enter a service name that the customer wants to create.                                                    | Required
    +---------------------------------+---------------------------------------------------------------------------------------------------------------------+--------------+
    | Escalation rules                | -	Default escalation rule: If there are no created escalation rules, “Escalation basic rule” is created.          | Required
    |                                 | -	Add custom criteria: The user can determine the priority and select escalation according to the conditions.     |
    |                                 |     (If selected, the rule of the condition set by the user takes precedence over the default rule.)                |
    +---------------------------------+---------------------------------------------------------------------------------------------------------------------+--------------+
    | Incident creation rules         | -	Suppression rule                                                                                                | Optional
    |                                 |     If the condition items (Alert Summary, Alert Metric Name) occur consecutively,                                  |
    |                                 |     you can set the period (seconds, minutes, hours, days) to prevent the creation of duplicate incidents.          |
    |                                 | -	Urgency rule                                                                                                    |
    |                                 |     You can set the urgency of Incident.                                                                            |
    +---------------------------------+---------------------------------------------------------------------------------------------------------------------+--------------+


    The Select Service screen is shown below.
    ![][integration_06]

    +-------------------------+--------------------------------------------------------------------------------+----------------+
    | Case                    | Description                                                                    | Remark  
    +=========================+================================================================================+================+
    |  Service routing rules  | - Select basic routing service.                                                | Selection required
    |                         | - You can set the service routing by setting the condition items               |
    |                         |   (Alert Summary, Alert Metric Name) of Add custom criteria.                   |
    +-------------------------+--------------------------------------------------------------------------------+----------------+


5.  Step 5: Save Created Integration
    Click [Save] button at the bottom right after entering "Integration Name" and creating or selecting Service about custom setting.

6.  Step 6: Check Created Integration Information
    After performing 5 steps above, you will be automatically moved to the page below.
    ![][Integration_07]
    For "URL" of above information, please copy the SNS Webhook URL information to connect with AlertNow in SNS (Simple Notification Service) on AWS Console.



#### AWS SNS Dashboard

To connect AWS Cloud Watch with the integration created in AlertNow, you need to create a topic by connecting to the AWS Console.

#####    AWS Console Connect  {#aws-connect}

Go to the SNS Dashboard
![][integration_aws_01]

##### Moving SNS Dashboard  {#move-to-sns}

Select Create topic on SNS Dashboard.

1.  Step 1: Create New Topic
    ![][integration_aws_02]

    The input items are shown below.

    +----------------+------------------------------------------------------------------------------------+------------------+
    | Case           | Description                                                                        | Remark  
    +================+====================================================================================+==================+
    | Topic Name     | It is a communication channel to send messages and subscribe notifications.        | Input required
    |                | It is used to create an ARN for later created Topics.                              |
    |                | -	Topic Name ARN Ex : `arn:aws:sns:us-west-2:111122223333:MyTopic`              |
    +----------------+------------------------------------------------------------------------------------+------------------+
    | Display Name   |     It is a display name for the topic represented when subscribing to SMS.        |  Input optional
    +----------------+------------------------------------------------------------------------------------+------------------+

    Click "Create topic".

2.  Step 2: Create Subscription

    Click "Create Subscription".
    ![][integration_aws_03]

    The following input window appears.
    ![][integration_aws_04]

    The input items are shown below.

    +--------------------+------------------------------------------------------------------------+-------------------------------------------+
    | Item               | Description                                                            | Remark
    +====================+========================================================================+===========================================+
    | Topic ARN          | It is automatically reflected based on the created Topic Name.         | Editable
    +--------------------+------------------------------------------------------------------------+-------------------------------------------+
    | Protocol           | Select HTTPS.                                                          | Selection field : 
    |                    |                                                                        | HTTP / HTTPS / Email / Email-JSON 
    |                    |                                                                        | / Amazon SQS / Application / AWS Lambda
    +--------------------+------------------------------------------------------------------------+-------------------------------------------+
    | Endpoint           | Paste the saved URL from the existing AlertNow.                        | Input field
    +--------------------+------------------------------------------------------------------------+-------------------------------------------+

    Click \[Create Subscription\] button.

3.  Step 3: Subscription

    The subscription will be created as below.
    ![][integration_aws_05]
    Click Refresh icon at the upper right. Approval confirmation is made for the Subscription ID.
    ![][integration_aws_06]




#####    Moving EC2 Console {#move-to-ec2}

Go to the EC2 Console to create an alert to connect to the AlertNow.

1.  Step 1: Select Add/Edit Alarm
    After selecting the corresponding EC2, select Action > CloudWatch Monitoring > Add/Edit Alarm as below.
    ![][integration_ec2_01]

2.  Step 2: Create Alarm
    ![][integration_ec2_02]
    Click \[Create Alarm\] button.

    The input items are shown below
    ![][integration_ec2_03]

    +----------------------------+-------------------------------------------+----------------------+
    | Item                       | Description                               | Remark
    +============================+===========================================+======================+
    | Send a notification to     | Find and select the created topic.        | Selection field
    +----------------------------+-------------------------------------------+----------------------+
    | Whenever                   | Set the threshold value.                  | Input field
    +----------------------------+-------------------------------------------+----------------------+

    If you press the [Save] button, the following message will be shown.
    ![][integration_ec2_04]



##### Adding Stable Alert Receive {#add-close-notice}

**What is “Stable Alert Receive”?**
If incidents are created based on the threshold settings and the instance status gets back to normal, you can automatically complete the existing incidents.
![][integration_autoclosing_01] 

1.  Step 1: Select Add/Edit Alarm
    After selecting the corresponding EC2, select Actions > Monitoring CloudWatch > Add/Edit Alert as below.
    ![][integration_autoclosing_02] 
2.  Step 2: Click “View” for alerts to set Stable Alert Receive
    ![][integration_autoclosing_03] 
3.  Step 3: Click “Actions > Edit”
    ![][integration_autoclosing_04] 
4.  Step 4: Click “Edit Alert > Actions below the alert definition > +Notifications
    ![][integration_autoclosing_05] 
5.  Step 5: After adding notifications, set the condition to “Normal” status and save changes
    ![][integration_autoclosing_06] 
6.  Step 6: Check setting changes
    ![][integration_autoclosing_07] 

 


#####    AlertNow > Incidents  {#set-aws-watch}

When you first connect to AlertNow, "Incidents" screen is displayed as default.

1.  Initial page of service connection
    For first-time customers, it is displayed as "No Incidents". A Wizard feature is scheduled to be provided to guide the customers to set the initial setting procedure manually in the future.
    ![][alertnow_default_1]

2.  Service Initial Page
    If you have completed creating integration for AWS Cloud Watch and setting alarms on the AWS Console according to the integration guide, you can check the incident upon connection.
    ![][alertnow_default_2]




















### Extensions {#extensions}

Extension is a feature that allows incident creation push created in AlertNow to export to external tools or services.

Currently, Slack is supported, and the extension settings for Slack are shown below.



####	AlertNow Extension Slack Settings {#set-slack}

1.  Step 1: Select Extensions Menu
    Click Extensions menu.
    ![][extension_slack_01]
2.  Step 2: Select Extension settings
    Click [Extension settings] button.
    ![][extension_slack_02]
3.  Step 3: Register New Contact
    Click [+Register Contact] button.
    ![][extension_slack_03]
4.  Step 4: Set Slack
    Select “Slack”.
    ![][extension_slack_04]

    Click [Apply] button to create the Slack domain.




####  Slack Settings: Go to Slack page {#slack-move-to-slack-setting}

Sign in to Slack.
If you have not signed up for Slack, please sign up for Slack first.

![][extension_slack_05]

1.  Step 1: Approve Slack for AlertNow
    ![][extension_slack_06]
    ![][extension_slack_07]
    Review the information below and select [Authorize].
    When the above message appears, select [OK].
2.  Step 2: Check in AlertNow
    In the “Personal Settings” menu in AlertNow, please check if the Slack domain is created in Contacts.
    ![][extension_slack_08]






### Personal Setting   {#personal-settings}

This is a service that manages notification rules for receiving user’s basic information and notifications.

Click Personal Settings menu.
![][personal_setting_01]

The “Personal Settings” configuration is shown below.

+--------------------------------+------------------------------------------------------------+
| Service Tab Configuration      | Description  
+================================+============================================================+
| Basic Information              | It consists of personal information.
|                                |
|                                | -	Name
|                                | -	Login email
|                                | -	Time zone
|                                | -	Escalation
|                                |
|                                | Contacts
|                                | Register contacts to receive notifications.
+--------------------------------+------------------------------------------------------------+
| Notification rules             | The user can set notification methods by incident events.
+--------------------------------+------------------------------------------------------------+



#### Basic Information {#basic-infomation}

You can display and set personal profile and contact information.
![][personal_setting_02]
 
1.  Profile
    Profile configuration information is shown below.
 
    +----------------------------+--------------------------------------------------------------------+--------------+
    | Item                       | Description                                                        | Remark
    +============================+====================================================================+==============+
    | Name                       | User name                                                          |
    +----------------------------+--------------------------------------------------------------------+--------------+
    | Login email                | Login email information                                            |
    +----------------------------+--------------------------------------------------------------------+--------------+
    | Time zone                  | For individuals, set to Browser Time used at first connection      | Can be set
    |                            | -	Auto                                                          |
    |                            | -	Changeable                                                    |
    +----------------------------+--------------------------------------------------------------------+--------------+
    | Escalation                 | Escalation Display that an individual belongs to or created        |
    +----------------------------+--------------------------------------------------------------------+--------------+

    You can set the Time Zone.
    ![][personal_setting_03]

2.	Contacts

    The Contacts consists of the following.

    +----------------+---------------------------------------------------------------------------------------------+-------------+
    | Type           | Description                                                                                 | Remark
    +================+=============================================================================================+=============+
    | Email          | Email information to receive notifications                                                  | Changeable
    +----------------+---------------------------------------------------------------------------------------------+-------------+
    | Mobile         | Mobile information to receive notifications
    |                | ※ For specific mobile provider, the alert message can be regarded as spam according to 
    |                |  the provider policy when entering an alert name
    +----------------+---------------------------------------------------------------------------------------------+-------------+
    | Slack          | Slack information to receive notifications  
    +----------------+---------------------------------------------------------------------------------------------+-------------+




#### Notification Rule {#notification-rule}

You can set the notification rules or check the configured notification rules.
You can set whether to send notifications and delivery method by each user.

You can set whether to send notifications and delivery method by the following situations.

+---------------------------------------------+---------------------------------------------------------------------------------+------------+
| Type                                        | Description                                                                     | Remark
+=============================================+=================================================================================+============+
| When an incident is created                 | Set how to receive when incident is created.                                    | Changeable
+---------------------------------------------+---------------------------------------------------------------------------------+------------+
| When an incident is assigned to me          | Set how to receive when incident is assigned to you.                            | Changeable
+---------------------------------------------+---------------------------------------------------------------------------------+------------+
| When incident status is changed             | Set how to receive when incident status is changed (acknowledged, closed).      | Changeable
+---------------------------------------------+---------------------------------------------------------------------------------+------------+
| When an incident is escalated               | Set how to receive when incident is escalated.                                  | Changeable
+---------------------------------------------+---------------------------------------------------------------------------------+------------+

















--------------------------------------------------------------------------------




##	AlertNow User  {#alertnow-user}

###	AlertNow Role {#alertnow-user-role}
 
For effective user management and service usage, AlertNow users are defined in 4 types.

#### Admin {#user-administrator}

Manages overall AlertNow service. Admin has all the rights (create, delete, view) for every category. Also, admin is the only user who can create an integration and set service routing.
![][diagram_service_admin]

-   For Admin user, the setting steps are as follows: *Create Integration → Create Service → Create Escalation policy → Set Extension (Optional)*
-   After completing the setting, alerts and incidents will be created according to information connected to integration. You can receive notifications about creating incidents and changing status, and edit incidents accordingly.


#### Manager {#user-service-manager}

Manager has the responsibility for the service, and can set the responders for solving problems. Has all the rights (create/delete/view) for all except integrations. (Can only view integrations)
![][diagram_service_manager]

-   For Manager user, the setting steps are as follows: *Create Service → Create Escalation policy → Set Extension (Optional)*
-   After completing the setting, alerts and incidents will be created according to information connected to integration. You can receive notifications about creating incidents and changing status, and edit incidents accordingly.

#### Responder {#user-service-responder}

Responder is the main assignee who receives incident notifications and solving problems accordingly. Has create, delete, view rights for incident and alerts; and only view rights for service and escalations. Responder can also set recipients. (No permission for integrations)
![][diagram_service_responder]

-   For Responder user, *it is impossible to create escalation policy, but can be set as a responder for an escalation*.
-   After completing the setting, alerts and incidents will be created according to information connected to integration. You can receive notifications about creating incidents and changing status, and edit incidents accordingly.

#### Observer {#user-service-observer}

Observer can check the problem-solving status if necessary. Has no permission for integration, and only has view rights for all the other categories.
![][diagram_service_reference]

Observer cannot receive notifications for creating incidents and changing status.




### Rights for each role  {#permission-each-role}

#### Rights – Diagram {#permission-diagram}
![][permission_gram]

#### Rights – Table View  {#permission-matrix}

<table>
    <thead>
        <tr class="header">
            <th>Role</th>
            <th class="center">Feature</th>
            <th class="center">Integration</th>
            <th class="center">Service</th>
            <th class="center">Incident</th>
            <th class="center">Extension</th>
            <th class="center">Escalation</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <td rowspan="3" style="text-align: left;">Admin</td>
            <td class="center">Create</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="even">
            <td class="center">Delete</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="odd">
            <td class="center">view</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="even">
            <td rowspan="3" style="text-align: left;">Manager</td>
            <td class="center">Create</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="odd">
            <td class="center">Delete</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="even">
            <td class="center">view</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="odd">
            <td rowspan="3" style="text-align: left;">Responder</td>
            <td class="center">Create</td>
            <td rowspan="3"  style="background-color:#f8a7a8; text-align: center; vertical-align:middle;">No permission</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
        </tr>
        <tr class="even">
            <td class="center">Delete</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
        </tr>
        <tr class="odd">
            <td class="center">view</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="even">
            <td rowspan="3" style="text-align: left;">Observer</td>
            <td class="center">Create</td>
            <td rowspan="3"  style="background-color:#f8a7a8; text-align: center; vertical-align:middle;">No permission</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
        </tr>
        <tr class="odd">
            <td class="center">Delete</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
        </tr>
        <tr class="even">
            <td class="center">view</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
    </tbody>
</table>














<!-------------------------------------------------------------------------------->
<!-- 이미지 링크 모음 -->
<!-- 모든 스크린샷은 고밀도 디스플레이(@2x,144ppi)를 기준으로 합니다. 스크린 캡쳐할때 고밀도 디스플레이 모니터에서 진행해 주세요. -->
<!-- 만일 사정상 72ppi로 된 이미지를 첨부하실 경우에는 아래처럼 이미지의 별도의 표시가 없을 경우 트랜스파일 할때 이미지를 1/4크기로 width와 height를 줄여서 보여주게 html 문법이 자동 생성되어 출력됩니다. -->

[alertnow_default_1]: ./resource/bnr_integration_default_1_en@2x.png
[alertnow_default_2]: ./resource/bnr_integration_default_2_en@2x.png

<!-- summary -->
[summary_1]: ./resource/bnr_alertnow_summary_01_en@2x.png

<!-- incident -->
[incident_flow]: ./resource/bnr_map_alert_en@2x.png
[incident_1]:  ./resource/bnr_incident_01_en.png
[incident_2]:  ./resource/bnr_incident_02_en.png
[incident_3]:  ./resource/bnr_incident_03_en@2x.png

[incident_status_01]: ./resource/bnr_incident_status_01_en@2x.png
[incident_status_02]: ./resource/bnr_incident_status_02_en@2x.png  
[incident_status_03]: ./resource/bnr_incident_status_03_en@2x.png

[incident_search_01]: ./resource/bnr_incident_search_01_en@2x.png
[incident_search_02]: ./resource/bnr_incident_search_02_en@2x.png 

[incident_handling_01]:   ./resource/bnr_incident_handing_01_en@2x.png
[incident_handling_02]:   ./resource/bnr_incident_handing_02_en@2x.png
[incident_handling_03]:   ./resource/bnr_incident_handing_03_en@2x.png
[incident_handling_04]:   ./resource/bnr_incident_handing_04_en@2x.png
[incident_handling_05]:   ./resource/bnr_incident_handing_05_en@2x.png
[incident_handling_05_01]:./resource/bnr_incident_handing_05_01_en@2x.png
[incident_handling_06]:   ./resource/bnr_incident_handing_06_en@2x.png
[incident_handling_07]:   ./resource/bnr_incident_handing_07_en@2x.png
[incident_handling_08]:   ./resource/bnr_incident_handing_08_en@2x.png
[incident_handling_09]:   ./resource/bnr_incident_handing_09_en@2x.png
[incident_handling_10]:   ./resource/bnr_incident_handing_10_en@2x.png
[incident_handling_11]:   ./resource/bnr_incident_handing_11_en@2x.png


<!-- alert -->
[alert_01]:  ./resource/bnr_alert_01_en@2x.png
[alert_search_01]: ./resource/bnr_incident_search_01_en@2x.png
[alert_search_02]: ./resource/bnr_alert_search_02_en@2x.png
[alert_search_03]: ./resource/bnr_alert_search_03_en@2x.png
[alert_search_04]: ./resource/bnr_alert_search_04_en@2x.png
[alert_search_05]: ./resource/bnr_alert_search_05_en@2x.png
[alert_search_06]: ./resource/bnr_alert_search_06_en@2x.png
[alert_search_07]: ./resource/bnr_alert_search_07_en@2x.png
[alert_search_08]: ./resource/bnr_alert_search_08_en@2x.png


<!-- service -->
[service_case1_01]: ./resource/bnr_service_case1_01_en@2x.png
[service_case1_02]: ./resource/bnr_service_case1_02_en@2x.png
[service_case1_03]: ./resource/bnr_service_case1_03_en@2x.png
[service_case1_05]: ./resource/bnr_service_case1_05_en@2x.png

[service_case2_01]: ./resource/bnr_service_case2_01_en@2x.png
[service_case2_02]: ./resource/bnr_service_case2_02_en@2x.png
[service_case2_03]: ./resource/bnr_service_case2_03_en.png
[service_case2_04]: ./resource/bnr_service_case2_04_en@2x.png
[service_case2_05]: ./resource/bnr_service_case2_05_en@2x.png
[service_case2_04_AWS]: ./resource/bnr_service_case2_aws_demo_en@2x.png



<!-- escalation -->
[escalation_case1_01]: ./resource/bnr_escalation_case1_01_en@2x.png
[escalation_case1_02]: ./resource/bnr_escalation_case1_02_en@2x.png
[escalation_case1_03]: ./resource/bnr_escalation_case1_03_en@2x.png
[escalation_case1_04]: ./resource/bnr_escalation_case1_04_en@2x.png

[escalation_case2_01]: ./resource/bnr_service_case1_01_en@2x.png
[escalation_case2_02]: ./resource/bnr_service_case1_02_en@2x.png
[escalation_case2_03]: ./resource/bnr_service_case1_03_en@2x.png

[escalation_case3_01]: ./resource/bnr_service_case2_01_en@2x.png
[escalation_case3_02]: ./resource/bnr_service_case2_02_en@2x.png
[escalation_case3_03]: ./resource/bnr_service_case2_03_en.png
[escalation_case3_04]: ./resource/bnr_escalation_case3_04_en@2x.png



<!-- integration -->
[integration_01]: ./resource/bnr_service_case2_01_en@2x.png
[integration_02]: ./resource/bnr_service_case2_02_en@2x.png
[integration_03]: ./resource/bnr_service_case2_03_en.png
[integration_04]: ./resource/bnr_service_case2_04_en@2x.png
[integration_04_AWS]: ./resource/bnr_service_case2_aws_demo_en@2x.png
[integration_05]: ./resource/bnr_service_case2_05_en@2x.png
[integration_06]: ./resource/bnr_integration_06_en@2x.png
[integration_07]: ./resource/bnr_integration_07_en@2x.png

[integration_aws_01]: ./resource/bnr_integration_aws_01@2x.jpg
[integration_aws_02]: ./resource/bnr_integration_aws_02@2x.jpg
[integration_aws_03]: ./resource/bnr_integration_aws_03.png
[integration_aws_04]: ./resource/bnr_integration_aws_04_en.png
[integration_aws_05]: ./resource/bnr_integration_aws_05@2x.png
[integration_aws_06]: ./resource/bnr_integration_aws_06@2x.png

[integration_ec2_01]: ./resource/bnr_integration_ec2_01@2x.jpg
[integration_ec2_02]: ./resource/bnr_integration_ec2_02@2x.jpg
[integration_ec2_03]: ./resource/bnr_integration_ec2_03@2x.jpg
[integration_ec2_04]: ./resource/bnr_integration_ec2_04@2x.jpg

[integration_autoclosing_01]: ./resource/bnr_incident_01_en.png
[integration_autoclosing_02]: ./resource/bnr_integration_autoclosing_02_en.png
[integration_autoclosing_03]: ./resource/bnr_integration_autoclosing_03_en.png
[integration_autoclosing_04]: ./resource/bnr_integration_autoclosing_04_en.png
[integration_autoclosing_05]: ./resource/bnr_integration_autoclosing_05_en.png
[integration_autoclosing_06]: ./resource/bnr_integration_autoclosing_06_en.png
[integration_autoclosing_07]: ./resource/bnr_integration_autoclosing_07_en.png




<!-- extension -->
[extension_slack_01]: ./resource/bnr_extension_01_en@2x.png
[extension_slack_02]: ./resource/bnr_extension_02_en@2x.png
[extension_slack_03]: ./resource/bnr_extension_03_en@2x.png
[extension_slack_04]: ./resource/bnr_extension_04_en@2x.png
[extension_slack_05]: ./resource/bnr_extension_05_en.png
[extension_slack_06]: ./resource/bnr_extension_06_en.png
[extension_slack_07]: ./resource/bnr_extension_07_en@2x.png 
[extension_slack_08]: ./resource/bnr_extension_08_en@2x.png


<!-- personal setting -->
[personal_setting_01]: ./resource/bnr_personal_setting_01_en@2x.png
[personal_setting_02]: ./resource/bnr_personal_setting_02_en@2x.png
[personal_setting_03]: ./resource/bnr_personal_setting_03_en@2x.png





[alertnow_summary_image]: ./resource/alertnow_summary_image_en@2x.png

[create_integration]: ./resource/create_integration_en.png
[aws_dashboard]: ./resource/aws_dashboard_en.png
[aws_make_topic]: ./resource/aws_make_topic_en.png
[aws_create_topic]: ./resource/aws_create_topic_en.png
[aws_new_subscribe]: ./resource/aws_new_subscribe_en.png
[aws_subscribe_confirm_before]: ./resource/aws_subscribe_confirm_before_en.png
[aws_subscribe_confirm_after]: ./resource/aws_subscribe_confirm_after_en.png
[aws_make_subscribe]: ./resource/aws_create_subscription_en.png


[aws_select_ec2_service]: ./resource/aws_select_ec2_service_en.png
[aws_instance_list]: ./resource/aws_instance_list_en@2x.png
[aws_select_instance]: ./resource/aws_select_instance_en.png
[aws_make_alert_click]: ./resource/aws_make_alert_click_en.png
[aws_alert_make_screen]: ./resource/aws_alert_make_screen_en.png

[alertnow_incident_screen]: ./resource/alertnow_incident_screen_en@2x.png
[alertnow_alert_screen]: ./resource/alertnow_alert_screen_en@2x.png

[service_rule_make]: ./resource/service_rule_make_en@2x.png
[service_incident_publish_rule]: ./resource/service_incident_publish_rule_en@2x.png
[service_incident_publish_rule_make]: ./resource/service_incident_publish_rule_make_en@2x.png
[service_incident_rule_make_list]: ./resource/service_incident_rule_make_list_en@2x.png

[service_incident_tab_click]: ./resource/service_rule_make_en@2x.png
[service_urgency]: ./resource/service_urgency_en@2x.png
[service_user_condifion_add]: ./resource/service_user_condition_add_en@2x.png

[service_screen]: ./resource/service_screen_en@2x.png
[service_screen_normal]: ./resource/service_screen_normal_en.png
[service_create_screen]: ./resource/service_create_screen_en@2x.png
[service_screen_under_tab]: ./resource/service_screen_under_tab_en@2x.png

[integration_make]: ./resource/integration_make_en.png
[integration_make_select_service]: ./resource/integration_make_select_service_en.png

[integration_make_done]: ./resource/integration_make_done_en.png
[service_tab_created_escalation]: ./resource/service_tab_created_escalation_en.png

[escalation_rule_setted_local]: ./resource/escalation_rule_setted_local_en.png
[escalation_rule_setted]: ./resource/escalation_rule_setted_en.png
[escalation_rule_setted_metric]: ./resource/escalation_rule_setted_metric_en.png

[diagram_service_admin]:     ./resource/diagram_service_admin_en@2x.png
[diagram_service_manager]:   ./resource/diagram_service_manager_en@2x.png
[diagram_service_responder]: ./resource/diagram_service_responder_en@2x.png
[diagram_service_reference]: ./resource/diagram_service_reference_en@2x.png

[permission_gram]: ./resource/permission_gram_en@2x.png

[btn_edit]: ./resource/btn_edit@2x.png

[escalation_responder]: ./resource/escalation_responder_en.png
[escalation_set_policy]: ./resource/escalation_set_policy_en@2x.png
[escalation_set_repeat]: ./resource/escalation_set_repeat_en@2x.png
[escalation_set_previous_responder]: ./resource/escalation_set_previous_responder_en.png
[escalation_set_final_notice]: ./resource/escalation_set_final_notice_en@2x.png
[escalation_screen]: ./resource/escalation_screen@2x.png
[escalation_repeat_times]: ./resource/escalation_repeat_times@2x.png

[personal_setting_screen]: ./resource/personal_setting_screen_en@2x.png
[personal_setting_edit_timezone]: ./resource/personal_setting_edit_timezone_en@2x.png
[personal_setting_select_timezone]: ./resource/personal_setting_select_timezone_en@2x.png
[personal_setting_max_contact]: ./resource/personal_setting_max_contact_en@2x.png

[metric_json]: ./resource/metric_json.png

[incident_manual]: ./resource/incident_manual_en.png
[incident_manual_screen]: ./resource/incident_manual_screen_en.png
[incident_manual_alert]: ./resource/incident_manual_alert_en.png

[incident_manual_popup]: ./resource/incident_manual_popup_en.png
