---
service : project 
title   : Project
en : true
...

<!-- TOC -->



# Project

You can register an issue for each project or team, and manage history of registered issues.
Following is how to manage issues of each project or team with Project Service.

--------------------------------------------------------------------------------

## Creating Project/Team

Create a project or team and add members.

### Creating Project/Team

>   Project - Configuration - *Project Managmenet*

Create a new project or team.

1.  Click the [Create Project] button.
    ![][project_1_1]

2.  On the “Create Project” pane, enter details of the project or team.  
    ![][project_1_2]

     Name            Required  Description  
     --------------  --------  ------------------------------------------------------------ 
     Project Name    Required  Enter the name of a new project or team you want to create.  
     Project key     Required  Enter an identification code for a project or team.Alphabets, numbers, `.`, `-`, and `_` only are allowed, up to 20 characters. 
     Project Leader  Required  You can designate the leader of a project or team.Click the [Search] button and the “Search Leader” pop-up is shown. You can select the leader of a project or team you want to add.You cannot designate multiple leaders. 
     Issue Type      .         You can select the type of issues performed by a project or team.Click the [Search] button and the “Issue Type” pop-up is shown. From the list, you can select an issue to perform. 
     Start Date      Required  You can set a start date of a project.Its default value is the current date. Click the [Calendar] button to change the date on the calendar. 
     Release Date    .         You can set a release date of a project.Its default value is the current date. Click the [Calendar] button to change the date on the calendar. 
     URL             .         You can enter URL through which a project is being served.  
     Description     .         Enter the details relevant to a project or team you want to create.You can type freely with the text editor. 

3.  Click the [Save] button.
    ![][project_1_3]

4.  Go to the project list by clicking the “My Project” menu. The project list shows that a newly created project has been added.  
    ![][project_1_4]
  



### Editing Members

> Project - Configuration - *Project Managmenet*

Add a member to do relevant issues to a newly created project or team.  
Also, change members of an already added project or team.

1.  From the project list, click the [Edit Member] button of the project you want to add/edit members.
    ![][project_1_5]

2.  A list on the left has all members, and that on the right has members who have been added to the current project or team. Select the member for the project or team from the left and add it to the right.
    ![][project_1_6]

3.  Set permission of a member who has been added to the right list.
    ![][project_1_7]

4.  Click the [OK] button to save changes. The project list shows a new member has been added to a project.
    ![][project_1_8]


### Setting Issue Type

> Project - Configuration - *Issue Type*

By setting ‘Issue Type’, you can classify issues according to their types.

1.  You can check the current list of Issue Type on the “Issue Type” menu.
    ![][project_1_9]

2.  On the “Issue Type” pane, click the [Create Issue Type] button.
    ![][project_1_10]

3.  The “Create Issue Type” pop-up will be shown and you can enter the information of a new Issue Type.
    ![][project_1_11]

     Status       Description  
     -----------  ------------------------------------------------------------ 
     Open         Means that a new issue has been registered, but it has not been initiated yet. 
     In-progress  Means that the Assignee is dealing with the issue.  
     Resolve      Means that the Assignee has completed the issue, but it still requires the final review or test. 
     Close        Means that the issue has been fully completed.  
     Re-Open      Means that the issue has already been completed, but it is required to be handled again; additional process is necessary or a problem has been found out. 


4.  If you click the [OK] button, the pop-up will be closed. The Issue Type list shows a new Issue Type has been added.
    ![][project_1_12]


### Setting Issue Priority

> Project - Configuration - *Issue Priority*

Shows priority of an issue. You can set Issue Priority which can appoint process deadline.

1.  Click the “Issue Priority” menu to check the current Issue Priority list.
    ![][project_1_14]

2.  On the “Issue Priority” pane, click the [Create New Priority] button.
    ![][project_1_15]

3.  On the “Create Issue Priority” pane, enter the information of Issue Priority you want to add.
    ![][project_1_16]

     Name                 Required  Description  
     -------------------  --------  ------------------------------------------------------------ 
     Issue Priority Code  Required  Enter an identification code for a new Issue Priority.  
     Issue Priority Name  Required  Enter the name of Issue Priority.Texts which have been entered here will be the name of Issue Priority. 
     Order                Required  You can set the order in which the Issue Priority list will be shown.Only numbers are allowed. 
     Term (Unit:day)      Required  You can enter the deadline date for Issue Priority.Only numbers are allowed.When you select Issue Priority after you create an issue, the value entered here will be automatically calculated from the start date and will be shown as due date. 
     Description          .         You can enter details of Issue Priority.  

4.  If you click the [OK] button, the pop-up will be closed. The Issue Priority list shows a new Issue Priority has been added.
    ![][project_1_17]

5.  When a new issue is registered or pre-existed issues are edited, You can use the added Issue Priority. For more information about registering and editing issues, please refer to ‘Registering New Issue’.

    ![][project_1_18]



## Registering Issue and Managing Progress
You can register a new issue and manage progress of registered issues. With this, you can monitor progress status of issues for a project/team.

### Registering New Issue

>   *Project*

Register a new issue.

1.  On the project/team list, click a project/team you want to register.
    ![][project_1_19]

2.  Click the “Issues” menu on the left and go to the Issue list.
    ![][project_1_20]

3.  On the “Issues” pane, click the [Create Issue] button.
    ![][project_1_21]

4.  On the “Create Issues” pane, enter informations of an Issue you want to create.
    ![][project_1_22]

     Name                     Required  Description  
     -----------------------  --------  ------------------------------------------------------------ 
     Project                  Required  You can select a project/team you want to register an issue to.The selected project will be set as the default value. If you click the drop-down menu, created projects/teams will be shown on the drop-down list. 
     Issue Title              Required  Enter the title of an issue you want to register.  
     Issue Type               Required  You can select a type of issue. If you click the drop-down menu, Issue Types which have already been registered will be shown on the drop-down list. 
     Assignee                 Required  You can select a Assignee of issue.By clicking the [Search] button, you can designate the Assignee. One issue may not have more than one Assignee. 
     Priority                 Required  You can set a priority of issue.If you click the drop-down menu, Issue Priorities which have already been registered will be shown on the drop-down list. 
     Start Date               Required  You can set a start date – day/hour/minute – of an issue.Its default value is the current time. 
     Due Date                 Required  You can set s due date of an issue.As the default value, the date added the period set on the selected Issue Priority to the start date will be shown. 
     Estimate Time            .         Shows time period which has been consumed for an issue.Shows period – week/day/hour – from start date to due date. 
     Watcher                  .         You can select a Watcher of issue.When registered issue status is changed, a Watcher of the issue may receive a notification for how it has been changed via e-mail.By clicking the [Search] button, you can designate a Watcher. Multiple members may be registered as Watchers. 
     Related Issue            .         You can set an issue related to the registered issue.  
     Related Service Request  .         You can set a service request related to the registered issue. 
     Description              .         You can enter details of an issue.  
     Attachment               .         You can upload files related to an issue.Multiple files may be uploaded. 

5.  Click the [Save] button to save entries. You can check that a new issue has been rightly added on the “Issues” pane.
    ![][project_1_23]



### Registering New Meeting Minutes

>   *Project*

Create new meeting minutes.

1.  On the project/team list, click a project/team you want to register a meeting minutes to.
    ![][project_1_19]

2.  On the left menu, click the “Meeting Minutes” menu and go to the meeting minutes list.
    ![][project_1_24]

3.  On the “Meeting Minutes” pane, click the [Create Meeting Minutes] button.
    ![][project_1_25]

4.  On the “Create Meeting Minutes” pane, write meeting minutes.
    ![][project_1_26]

     Name         Required  Description  
     -----------  --------  ------------------------------------------------------------ 
     Subject      Required  You can enter the title of meeting minutes.  
     Description  Required  You can enter the content of the meeting.Available formats for meeting minutes will be shown.You can select the format from the list. 
     Template     .         The selected format of meeting minutes will be shown.  
     Attachment   .         You can register attachments.Multiple files may be uploaded. 
     Action Item  .         You can set issues which are related to the registered meeting minutes. 

5.  If you click the [Save] button, the “Confirm” pop-up appears. If you select ‘Send E-mail Notification’ on this pop-up, a notification for new meeting minutes will be sent to members of the project/team via e-mail.
    ![][project_1_27]

6.  On the “Meeting Minutes” pane, check that the new meeting minutes has been rightly added.
    ![][project_1_28]


### Recording Issue Progress

>   *Project*

Records a progress of an issue. Members of the project/team can check on its progress.

1.  On the project/team list, click the project/team you want to register a meeting minutes to.
    ![][project_1_19]

2.  On the issue list, click the issue you want to record progress of.
    ![][project_1_29]

3.  On the issue details, click the [Action] button. A drop-down menu on which the current status of the issue may be selected will be shown. Select status on the drop-down menu.
    ![][project_1_30]

     Status       Description  
     -----------  ------------------------------------------------------------ 
     Open         Means that a new issue has been registered, but it has not been initiated yet. 
     In-progress  Means that the Assignee is dealing with the issue.  
     Resolve      Means that the Assignee has completed the issue, but it still requires the final review or test. 
     Close        Means that the issue has been fully completed.  
     Re-Open      Means that the issue has already been completed, but it is required to be handled again; additional process is necessary or a problem has been found out. 

4.  If you click a status of an issue on the drop-down menu, a pop-up on which a comment may be entered appears. Enter a comment about process status of the issue and click the [OK] button.
    ![][project_1_31]

5.  On the issue details, check that status of the issue has been rightly changed. When status of an issue is changed, members designated as the Assignee or Watcher will receive a notification for the change via e-mail.
    ![][project_1_32]


## Managing Issue History and Related Issue

### Writing Comment

>   *Project*

Write a comment about any matter which has occurred during the issue process.

1.  On the project/team list, click a project/team on which an issue has been registered.
    ![][project_1_19]

2.  On the issue list, click an issue you want to write a comment to.
    ![][project_1_29]

3.  On the issue details, write a comment in the Comment box and click the [Save] button.
    ![][project_1_33]

4.  On the issue details, you can check the comment which has been written on the ‘Activity History’.
    ![][project_1_34]

5.  Perform a task required to resolve an alarm. Register an issue required to resolve the alarm on Project App. For more information about how to register issues related to alarm resolution, please refer to '4\. Managing Alarm History and Related Issue' below.





### Registering Related Issue

>   *Project*

You can register an issue related to the registered issue/service request. With this, you can check linkage/interrelation between issues.

1.  On the project/team list, click a project/team on which an issue has been registered.
    ![][project_1_19]

2.  On the issue list, click an issue to which the issue will be related/subordinate/service-requested.
    ![][project_1_29]

3.  On the Issue Links list, click the tab appropriate for type of the issue you want to link.
    ![][project_1_35]

     Type            Description  
     --------------  ------------------------------------------------------------ 
     Releated Issue  Means that the issue is related to the selected issue.  
     Sub-Issue       This issue is subordinate to the selected issue.You can register the issue after dividing it into subunit. 
     Related SR      Means the service request of the requested issue.You can link service request which is registered on Service Request. 
  

4.  Click the [Create] button to register a new related/subordinate issue, or click the [Add] button to register a pre-existed issue as related/subordinate/service request.

5.  If you click the [Add] button, the “Search for Issue/SR” pop-up appears. All issues/service requests of one’s own project/team are shown on the pop-up. On the pop-up, you can select an issue/service request you want to link.
    ![][project_1_36]

6.  After selecting an issue/service request you want to link, click the [OK] button. The “Issue Links” will show that the issue/service request has been linked.
    ![][project_1_37]



### View Issue History

>   *Project*

You can check progress history of issue.

1.  On the project/team list, click a project/team on which an issue has been registered.
    ![][project_1_19]

2.  Click the issue you want to check the progress of.
    ![][project_1_29]

3.  From the Activity History on the issue details pane, you can check issue history including how status, the Assignee and comments have changed or updated.
    ![][project_1_38]







## Searching Issue History

You can search the Issue and its details you want to check by setting conditions and entering keywords.

### Searching by Conditions

> *Project*

1.  Select a condition you want to search. Click the [Priority], [Type], [Status], [Assignee] button, then a drop-down menu appears to show available conditions for search.
    1.  Select ‘Priority’ 
        ![][project_1_39]

    2.  Select 'Type'
        ![][project_1_40]

    3.  Select 'Status'
        ![][project_1_41]

    4.  Select 'Assignee'
        ![][project_1_42]

2.  Click the [OK] button of the drop-down menu.
    ![][project_1_43]

3.  You can check the search result with the selected condition on the Issue list.
    ![][project_1_44]



### Searching by Keywords

>   *Alarm*

1.  Enter a keyword you want to search on the search box and click [Search] button or press [Enter].
    ![][project_1_45]

2.  The results which title is identical to the keyword will be shown on the list. Texts identical to the keyword will be highlighted.
    ![][project_1_46]




<!-- 이미지 링크 모음 -->

[project_1_1]: ./resource/bnr_guide_project_1_1.png
[project_1_2]: ./resource/bnr_guide_project_1_2.png
[project_1_3]: ./resource/bnr_guide_project_1_3.png
[project_1_4]: ./resource/bnr_guide_project_1_4.png
[project_1_5]: ./resource/bnr_guide_project_1_5.png
[project_1_6]: ./resource/bnr_guide_project_1_6.png
[project_1_7]: ./resource/bnr_guide_project_1_7.png
[project_1_8]: ./resource/bnr_guide_project_1_8.png
[project_1_9]: ./resource/bnr_guide_project_1_9.png
[project_1_10]: ./resource/bnr_guide_project_1_10.png
[project_1_11]: ./resource/bnr_guide_project_1_11.png
[project_1_12]: ./resource/bnr_guide_project_1_12.png
[project_1_14]: ./resource/bnr_guide_project_1_14.png
[project_1_15]: ./resource/bnr_guide_project_1_15.png
[project_1_16]: ./resource/bnr_guide_project_1_16.png
[project_1_17]: ./resource/bnr_guide_project_1_17.png
[project_1_18]: ./resource/bnr_guide_project_1_18.png
[project_1_19]: ./resource/bnr_guide_project_1_19.png
[project_1_20]: ./resource/bnr_guide_project_1_20.png
[project_1_21]: ./resource/bnr_guide_project_1_21.png
[project_1_22]: ./resource/bnr_guide_project_1_22.png
[project_1_23]: ./resource/bnr_guide_project_1_23.png
[project_1_19]: ./resource/bnr_guide_project_1_19.png
[project_1_24]: ./resource/bnr_guide_project_1_24.png
[project_1_25]: ./resource/bnr_guide_project_1_25.png
[project_1_26]: ./resource/bnr_guide_project_1_26.png
[project_1_27]: ./resource/bnr_guide_project_1_27.png
[project_1_28]: ./resource/bnr_guide_project_1_28.png
[project_1_19]: ./resource/bnr_guide_project_1_19.png
[project_1_29]: ./resource/bnr_guide_project_1_29.png
[project_1_30]: ./resource/bnr_guide_project_1_30.png
[project_1_31]: ./resource/bnr_guide_project_1_31.png
[project_1_32]: ./resource/bnr_guide_project_1_32.png
[project_1_19]: ./resource/bnr_guide_project_1_19.png
[project_1_29]: ./resource/bnr_guide_project_1_29.png
[project_1_33]: ./resource/bnr_guide_project_1_33.png
[project_1_34]: ./resource/bnr_guide_project_1_34.png
[project_1_19]: ./resource/bnr_guide_project_1_19.png
[project_1_29]: ./resource/bnr_guide_project_1_29.png
[project_1_35]: ./resource/bnr_guide_project_1_35.png
[project_1_36]: ./resource/bnr_guide_project_1_36.png
[project_1_37]: ./resource/bnr_guide_project_1_37.png
[project_1_19]: ./resource/bnr_guide_project_1_19.png
[project_1_29]: ./resource/bnr_guide_project_1_29.png
[project_1_38]: ./resource/bnr_guide_project_1_38.png
[project_1_39]: ./resource/bnr_guide_project_1_39.png
[project_1_40]: ./resource/bnr_guide_project_1_40.png
[project_1_41]: ./resource/bnr_guide_project_1_41.png
[project_1_42]: ./resource/bnr_guide_project_1_42.png
[project_1_43]: ./resource/bnr_guide_project_1_43.png
[project_1_44]: ./resource/bnr_guide_project_1_44.png
[project_1_45]: ./resource/bnr_guide_project_1_45.png
[project_1_46]: ./resource/bnr_guide_project_1_46.png

