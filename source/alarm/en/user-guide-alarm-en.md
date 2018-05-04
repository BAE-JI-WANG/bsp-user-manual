---
title   : Alarm
service : alarm
en : true
...

<!-- TOC -->





# Alarm

You can monitor status of each operating service, as well as manage the status quo of alarms against service failures and their history.
Following is how to deal with a failure, which occurs during service operation, through Alarm App.

--------------------------------------------------------------------------------







## Designating the Assignee for each Service

Designate a member who receives an alarm (Receiver) when a failure occurs in a registered service group, and a person in charge (Assignee).

>   Alarm - Configuration - *Members*

1.  After selecting a service group in which a member is to be edited, click the \[Edit Member\] button.
    ![][bnr_guide_alarm_1_1]

2.  A list on the left shows all members, and that on the right shows a member who receives an alarm of the current service group.
    From the left, select a member who will receive an alarm of the applicable service group and add it to the right.
    ![][bnr_guide_alarm_1_3]

3.  Set permission of the member added on the right list.
    ![][bnr_guide_alarm_1_4]

    Either status only is allowed to be given to a member. Such permission may be set differently for each service group.

    - Receiver: The person may only receive a notification for occurrence or modification of an alarm via e-mail.
    - Assignee: The person may not only receive a notification for occurrence or modification of an alarm via e-mail, but also record how the failure notified by an alarm is handled.

4.  Press the \[OK\] button to save the changes. Check the member list for each service group to assure that a member who will receive an alarm has rightly been added.

    ![][bnr_guide_alarm_1_5]

    Designating Receivers and Assignees in the selected service group is completed.
    Through the same procedure, Receivers and Assignees may be designated in other service groups.






--------------------------------------------------------------------------------



## Checking on Details of an Alarm

The Receiver or Assignee who has received an alarm may check on its details.

>   *Alarm*

1.  From the alarm list, select an alarm whose details are subject to be checked.
    ![][bnr_guide_alarm_1_5]

    On the alarm list, you can check summary about alarms which have occurred.

2.  Checks on details of an alarm.

    ![][bnr_guide_alarm_1_6]

    1.  Details: You can check detailed information about an alarm which has occurred.
    2.  Related Issue: Shows information related to the issue which has occurred.
    3.  Comments: You can write a comment or check comments of other members.
    4.  History: Shows history of alarms which have occurred.

3.  Press the \[Show Chart\] button to check on Metric information of the time when an alarm has occurred.
    ![][bnr_guide_alarm_1_7]

4.  Metric information of the time is then indicated in a new window.
    ![][bnr_guide_alarm_1_5]



--------------------------------------------------------------------------------



## Processing Alarm

>   *Alarm*

When the Assignee who has noticed an alarm initiates to process alarm, it marks the Assignee who is in charge and also indicates that the alarm is being processed.


### Searching by Conditions

1.  Select a condition to search. Click the \[Status\] button, then a drop-down menu appears to show available conditions for search.  
    ![][bnr_guide_alarm_1_9]

2.  Click the \[Action\] button and a drop-down list comes out. Then, click the \[Start\] button from the list.  
    ![][bnr_guide_alarm_1_10]

3.  Click the \[Action\] button and a drop-down list comes out. Then, click the \[Start\] button from the list.  
    ![][bnr_guide_alarm_1_11]

4.  ‘Status’ of the alarm will be changed to ‘In-progress’, and 'name' of the person in charge is shown at the ‘Assignee’.
    ![][bnr_guide_alarm_1_12]

5.  Performs the process to resolve an alarm. Register issues required for processing alarm in Project App. Regarding how to register issues related to alarm, please refer to 4. Managing Alarm History and Related Issues below.





### Changing Level of Alarm

>   *Alarm*

If situation of an alarm is severe, you can upgrade a level of alarm. On the contrary, you can downgrade the alarm.

1.  Move to alarm details pane by clicking the alarm you want to check in the alarm list.
    ![][bnr_guide_alarm_1_9]

2.  Change 'Level' and write the reason for change on 'Description'. Then click the \[Escalation\] button.
    ![][bnr_guide_alarm_1_13]

    If the current 'Level' is 'Minor', it will be automatically changed to 'Major' upon clicking the \[Escalation\] button.



### Completing Alarm Process

>   *Alarm*

After completing the process of occurred alarm, shows that the alarm has been resolved.

1.  On the alarm page, click the \[Action\] button. After a drop-down list comes out, click the \[Close\] button.
    ![][bnr_guide_alarm_1_14]

2.  The “Close” pop-up will be shown. Write a comment in accordance with the process completion and click the \[OK\] button.
    ![][bnr_guide_alarm_1_15]

3.  ‘Status' of the Alarm will be changed to ‘Closed’ and 'End Time' will be shown. Also on the 'Solution', the comments written during the process completion and the time of completion will be shown.
    ![][bnr_guide_alarm_1_16]

4.  You can check that the alarm has been processed in the alarm list.
    ![][bnr_guide_alarm_1_17]




--------------------------------------------------------------------------------




## Managing History of Alarm Process and Related Issues

You can check the entire process of an alarm, from the beginning to the end. Also, you can register the related issues which have occurred during the process.

### View Process History of Alarm

>   *Alarm*

1.  On the alarm details pane, go to the “Active History” at its very bottom.

    ![][bnr_guide_alarm_1_18]

2.  In the “Active History”, everything recorded during the process is listed on chronological basis, including initiation of an alarm; written comments; edited details; and completion of the process. Under initial configuration, the latest history is shown at the top.

    ![][bnr_guide_alarm_1_19]

3.  You can adjust Alignment of History by clicking table headers.

    ![][bnr_guide_alarm_1_20]


### Registering Related Issue

>   *Alarm*

You can register issues required to resolve alarm on Project App, and link them to alarm details.
With this, you can immediately check what process is ongoing for alarm resolution. On the other hand, you can also check what alarm does this issue is resolving.

1.  On the alarm details pane, click the \[Modify\] button.
    ![][bnr_guide_alarm_1_21]

2.  On the “Modify Alarm” pane, click the \[Add\] button of the ‘Relates by issue’ item.
    ![][bnr_guide_alarm_1_22]

3.  A “Search for Issues” pop-up is shown. This pop-up has the list of issues registered on Project App. Linked issues may be searched with the title of project, status, or name. From the list, select a issue you want to link and then click the \[OK\] button.
    ![][bnr_guide_alarm_1_23]


--------------------------------------------------------------------------------



## Searching Alarm History

You can search the History and its details you want to check by setting conditions and entering keywords.

### View Alarm History per Service Group

>   *Alarm*

1.  Select a service group you want to check an alarm.
    ![][bnr_guide_alarm_1_24]

2.  Alarm history in the selected service group is shown on the alarm list.
    ![][bnr_guide_alarm_1_25]

    You can check Service Group which alarm has currently occurred in Service Group list.
    For the Service Group which alarm has occurred, the number of occurred alarm will be shown next to the Service Group name.






### Searching by Conditions

>   *Alarm*

1.  Select a condition you want to search. Click the \[Level\], \[Category\] or \[Status\] button, then a drop-down menu appears to show available conditions for search.

    -   Select 'Level'
        ![][bnr_guide_alarm_1_26]

    -   Select 'Category'
        ![][bnr_guide_alarm_1_27]

    -   Select 'Status'
        ![][bnr_guide_alarm_1_28]


2.  Click the \[OK\] button of the drop-down menu.
    ![][bnr_guide_alarm_1_29]


3.  You can check the search result with the selected condition on the alarm list.
    ![][bnr_guide_alarm_1_30]


### Searching by Keywords

>   *Alarm*

1.  Enter a keyword you want to search on the search box and click \[Search\] button or press \[Enter\].
    ![][bnr_guide_alarm_1_31]

2.  The results which title is identical to the keyword will be shown on the list. Texts identical to the keyword will be highlighted.
    ![][bnr_guide_alarm_1_32]







<!-- 이미지 모음 -->
[bnr_guide_alarm_1_1]: ./resource/bnr_guide_alarm_1_1.png
[bnr_guide_alarm_1_3]: ./resource/bnr_guide_alarm_1_3.png
[bnr_guide_alarm_1_4]: ./resource/bnr_guide_alarm_1_4.png
[bnr_guide_alarm_1_5]: ./resource/bnr_guide_alarm_1_5.png
[bnr_guide_alarm_1_5]: ./resource/bnr_guide_alarm_1_5.png
[bnr_guide_alarm_1_6]: ./resource/bnr_guide_alarm_1_6.png
[bnr_guide_alarm_1_7]: ./resource/bnr_guide_alarm_1_7.png
[bnr_guide_alarm_1_5]: ./resource/bnr_guide_alarm_1_5.png
[bnr_guide_alarm_1_9]: ./resource/bnr_guide_alarm_1_9.png
[bnr_guide_alarm_1_10]: ./resource/bnr_guide_alarm_1_10.png
[bnr_guide_alarm_1_11]: ./resource/bnr_guide_alarm_1_11.png
[bnr_guide_alarm_1_12]: ./resource/bnr_guide_alarm_1_12.png
[bnr_guide_alarm_1_9]: ./resource/bnr_guide_alarm_1_9.png
[bnr_guide_alarm_1_13]: ./resource/bnr_guide_alarm_1_13.png
[bnr_guide_alarm_1_14]: ./resource/bnr_guide_alarm_1_14.png
[bnr_guide_alarm_1_15]: ./resource/bnr_guide_alarm_1_15.png
[bnr_guide_alarm_1_16]: ./resource/bnr_guide_alarm_1_16.png
[bnr_guide_alarm_1_17]: ./resource/bnr_guide_alarm_1_17.png
[bnr_guide_alarm_1_18]: ./resource/bnr_guide_alarm_1_18.png
[bnr_guide_alarm_1_19]: ./resource/bnr_guide_alarm_1_19.png
[bnr_guide_alarm_1_20]: ./resource/bnr_guide_alarm_1_20.png
[bnr_guide_alarm_1_21]: ./resource/bnr_guide_alarm_1_21.png
[bnr_guide_alarm_1_22]: ./resource/bnr_guide_alarm_1_22.png
[bnr_guide_alarm_1_23]: ./resource/bnr_guide_alarm_1_23.png
[bnr_guide_alarm_1_24]: ./resource/bnr_guide_alarm_1_24.png
[bnr_guide_alarm_1_25]: ./resource/bnr_guide_alarm_1_25.png
[bnr_guide_alarm_1_26]: ./resource/bnr_guide_alarm_1_26.png
[bnr_guide_alarm_1_27]: ./resource/bnr_guide_alarm_1_27.png
[bnr_guide_alarm_1_28]: ./resource/bnr_guide_alarm_1_28.png
[bnr_guide_alarm_1_29]: ./resource/bnr_guide_alarm_1_29.png
[bnr_guide_alarm_1_30]: ./resource/bnr_guide_alarm_1_30.png
[bnr_guide_alarm_1_31]: ./resource/bnr_guide_alarm_1_31.png
[bnr_guide_alarm_1_32]: ./resource/bnr_guide_alarm_1_32.png
