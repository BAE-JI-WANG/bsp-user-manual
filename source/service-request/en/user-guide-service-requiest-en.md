---
service : sr
title   : Service Request
en : true
multiLang:
    - ko : false
    - en : true
    - zh : false
...



<!-- TOC -->


# Service Request

You can quickly respond to any service request in accordance with relevant procedure after it is recorded.
Following is how to manage service requests with Service Request Service.


--------------------------------------------------------------------------------



## Managing Service Requests

>   Service Request - Configuration - *Request Type*

You can in advance designate the Assignee and write description of an issue which may be requested.

1.  Click the \[Create Type\] button. Or, click the \[Modify Type\] button to edit pre-existed service requests.
    ![][bnr_guide_service_request_1_1]

2.  On the “Create Request Type” pane, enter the information about a service request you want to newly add to.
    ![][bnr_guide_service_request_1_2]

    +--------------+----------+-------------------------------------------------------------------------------------+
    | Name         | Required | Description
    +==============+==========+=====================================================================================+
    | Request Type | Required | Enter the name of a service request you want to newly create. 
    +--------------+----------+-------------------------------------------------------------------------------------+
    | Assignee     | Required | You can designate the primary Assignee of a service request.
    |              |          | Multiple Assignees may be designated.
    |              |          | The person on the top of Assignee list is to be designated as the primary Assignee. 
    +--------------+----------+-------------------------------------------------------------------------------------+
    | Description  | .        | Write description about a service request.
    +--------------+----------+-------------------------------------------------------------------------------------+


3.  Click the \[Submit\] button to save entries. Then the Request Type list shows that a new service request has been added.
    ![][bnr_guide_service_request_1_3]







--------------------------------------------------------------------------------








## Requesting Service

>   Service Request - *All Request, My Requests*

You can make a new service request to the other member.

1.  On the “All Request” pane, click the \[Create New\] button.
    ![][bnr_guide_service_request_1_4]

2.  On the “New Service Request” pane, enter details of a service which is to be requested.
    ![][bnr_guide_service_request_1_5]

    +--------------+----------+-------------------------------------------------------------------------------------------------+
    | Name         | Required | Description
    +==============+==========+=================================================================================================+
    | Request Type | Required | Select the type of a service you want to request.
    |              |          | If you click the [Search] button, the list of issues available to be requested will be shown.
    |              |          | Then select one you want to request. 
    +--------------+----------+-------------------------------------------------------------------------------------------------+
    | Assignee     | Required | Select the Assignee you want to request service.
    |              |          | Its default value is the person designated on Request Type.
    |              |          | You can click the [Search] button to change the Assignee. 
    +--------------+----------+-------------------------------------------------------------------------------------------------+
    | Title        | Required | Enter the title of a service you want to request.
    +--------------+----------+-------------------------------------------------------------------------------------------------+
    | Watcher      | .        | Designate a Watcher of a service which is to be requested.
    |              |          | By clicking the [Search] button, you can designate multiple Watchers.
    |              |          | Watchers receive a notification via e-mail if the service request has been changed. 
    +--------------+----------+-------------------------------------------------------------------------------------------------+
    | Description  | .        | Write description about a service request.
    +--------------+----------+-------------------------------------------------------------------------------------------------+
    | Attachment   | .        | You can upload a file related to a service request.
    |              |          | Multiple files may be uploaded. 
    +--------------+----------+-------------------------------------------------------------------------------------------------+

3.  Click the \[Submit\] button to submit the service request. On the “My Requests” pane, you can see the list of services you have requested. Also, the Assignee of a new service request will receive a notification for the submission via e-mail.
    ![][bnr_guide_service_request_1_6]





--------------------------------------------------------------------------------



##  Service Requests to Me


### Service Request Assigned to You

>   Service Request - *Assign to me*

You can check the list of services which others have requested to you and can process them.

1.  On the “Assign to Me” pane, check the list of service requests which have been submitted to you. You can click a requested service to check its details.
    ![][bnr_guide_service_request_1_7]

2.  Check details of a requested service and process the service request.
    ![][bnr_guide_service_request_1_8]


### Service Request for which You Are to Be Notified

>   Service Request - *Watching Only*

You can check content of a service request for which you are designated as a Watcher.

1.  On the “Watching Only” pane, you can check a service request for which you are designated as a Watcher. Click it to check its details.
    ![][bnr_guide_service_request_1_13]

2.  You can check details of a service request for which you are designated as a Watcher.
    ![][bnr_guide_service_request_1_14]


### Recording Process Status of Service

You can record process status of a service. When process status is changed, a notification will be sent to the Assignee and Watcher via e-mail.

1.  Click the \[Action\] button to change process status of a requested service.
    ![][bnr_guide_service_request_1_9]

    +-------------+------------------------------------------------------------------------------------------------------+
    | Status      | Description                                                  
    +=============+======================================================================================================+
    | Open        | Means that a service request has been submitted, but its issue does not begin to be undertaken yet. 
    +-------------+------------------------------------------------------------------------------------------------------+
    | In-progress | Means that the Assignee is dealing with a requested service. 
    +-------------+------------------------------------------------------------------------------------------------------+
    | Resolve     | Means that the Assignee has fulfilled the process for a requested service. 
    +-------------+------------------------------------------------------------------------------------------------------+
    | Reject      | Means that the Assignee has rejected the process for a requested service. 
    +-------------+------------------------------------------------------------------------------------------------------+

2.  On the “Status” item, you can check that status of the service has been changed.
    ![][bnr_guide_service_request_1_10]


### ecording Requested Service as Issue History

You can copy a requested service into Project Service in order to keep it as Issue History of the Project/Team.

1.  Click the \[Copy to Issue\] button.
    ![][bnr_guide_service_request_1_11]

2.  Content of a requested service is copied to the “Create Issue” pane of Project Service. When you register this issue, you can select the project/team on which this issue is to be registered.
    ![][bnr_guide_service_request_1_12]



--------------------------------------------------------------------------------






## Searching Service Request History

You can search the Service Request and its details you want to check by setting conditions and entering keywords.

### Searching by Conditions

>   *Service Request*

1.  Select a condition you want to search. Click the \[Status\] button, then a drop-down menu appears to show available conditions for search.

    ![Select 'Status'][bnr_guide_service_request_1_15]

2.  Click the \[OK\] button of the drop-down menu.
    ![][bnr_guide_service_request_1_16]

3.  You can check the search result with the selected condition on the Service Request list.
    ![][bnr_guide_service_request_1_17]


### Searching by Keywords

>   *Service Request*

1.  Enter a keyword you want to search on the search box and click \[Search\] button or press \[Enter\].
    ![][bnr_guide_service_request_1_18]

2.  The results which title is identical to the keyword will be shown on the list. Texts identical to the keyword will be highlighted.
    ![][bnr_guide_service_request_1_19]











<!-- 이미지 모음 -->
[bnr_guide_service_request_1_1]: ./resource/bnr_guide_service_request_1_1.png
[bnr_guide_service_request_1_2]: ./resource/bnr_guide_service_request_1_2.png
[bnr_guide_service_request_1_3]: ./resource/bnr_guide_service_request_1_3.png
[bnr_guide_service_request_1_4]: ./resource/bnr_guide_service_request_1_4.png
[bnr_guide_service_request_1_5]: ./resource/bnr_guide_service_request_1_5.png
[bnr_guide_service_request_1_6]: ./resource/bnr_guide_service_request_1_6.png
[bnr_guide_service_request_1_7]: ./resource/bnr_guide_service_request_1_7.png
[bnr_guide_service_request_1_8]: ./resource/bnr_guide_service_request_1_8.png
[bnr_guide_service_request_1_13]: ./resource/bnr_guide_service_request_1_13.png
[bnr_guide_service_request_1_14]: ./resource/bnr_guide_service_request_1_14.png
[bnr_guide_service_request_1_9]: ./resource/bnr_guide_service_request_1_9.png
[bnr_guide_service_request_1_10]: ./resource/bnr_guide_service_request_1_10.png
[bnr_guide_service_request_1_11]: ./resource/bnr_guide_service_request_1_11.png
[bnr_guide_service_request_1_12]: ./resource/bnr_guide_service_request_1_12.png
[bnr_guide_service_request_1_15]: ./resource/bnr_guide_service_request_1_15.png
[bnr_guide_service_request_1_16]: ./resource/bnr_guide_service_request_1_16.png
[bnr_guide_service_request_1_17]: ./resource/bnr_guide_service_request_1_17.png
[bnr_guide_service_request_1_18]: ./resource/bnr_guide_service_request_1_18.png
[bnr_guide_service_request_1_19]: ./resource/bnr_guide_service_request_1_19.png
