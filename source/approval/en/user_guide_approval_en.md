---
title   : Approval
service : approval
en : true
...

<!-- TOC -->


#	Approval

Provides features to deal with approvals required in various issues.
You can not only make a draft of a document but also make report to and conduct approval process.
Also, you can check approval history and make an announcement related to an approval in the past.
Following is how to manage approval and approval history with Approval Service.

--------------------------------------------------------------------------------




##	Writing General Document

>	Approval - *Report List*

Following is how to write a new document, such as memorandum for expense account or request for day-off, on any issue which requires an approval.

1.  Click the \[Create Approval\]  button to write a new document for an approval.
    ![][approval_1_1]
2.  On the drop-down menu for 'Type', select ‘General’. (General is the default value).
    ![][approval_1_2]

     Type     Description                                     
     -------  ----------------------------------------------- 
     General  Means an approval document for a general issue. 
     Work     Means an acknowledgement for Release plan.      

3.  Enter the details required for an approval.
    ![][approval_1_3]

     Name                 Required  Description                                                  
     -------------------  --------  ------------------------------------------------------------ 
     Type                 Required  Select the type of a document.You can select either General or Work. 
     Title                Required  Enter the title of a document.                               
     Approver             Required  You can set the Approver Group.                              
     Description          .         You can write the text of an document required for an approval. 
     Attaching File       .         You can select attachments.If you click the \[Attaching File\]  button, the file explorer is shown as the pop-up. Then you can select a file to be attached. 
     Submission Schedule  .         You can set a deadline of document submission.Click the \[Configuration\]  checkbox to set a deadline in year/month/day/hour/minute. 

4.  Click the \[Submit\]  button to submit a document. As the document has been submitted, members of the Approver Group are to receive a notification for a new approval document via e-mail.
    ![][approval_1_8]




--------------------------------------------------------------------------------



##  Setting Approver Group

You can set the Approver Group by designating the Approver, Consenter, Post-Approver and person to be notified.

1.  Click the \[Search\]  button of ‘Approver’.
    ![][approval_1_4]
2.  On ‘Member’ of the “Search Approver” pop-up, select a member who is to be included in the Approver Group and click the \[Selected Add\]  button. The ‘Selected Member List’ shows who are added to the Approver Group.
    ![][approval_1_5]
3.  Click the \[Save\]  button.
    ![][approval_1_6]

4.  Assign a role for each member added to the group. After selecting the member, select one of the following to assign a role: Approval, Consent, Post-Approval or Notification.
    ![][approval_1_7]

     Role           Description                                                  
     -------------  ------------------------------------------------------------ 
     Approval       Means the Approver of an approval document.The next approval may not proceed without an approval of the Approver. 
     Consent        Means the Consenter of an approval document.The next approval may not proceed without an approval of the Consenter. 
     Post-Approval  Means the Post-Approver of an approval document.The next approval may proceed without an approval of the Post-Approver.The Post-Approver can approve the document, but cannot reject it. 
     Notification   Means the person to be notified of an approval document.The person has no right to approve or reject a document, but just may refer to it. 

5.  Among members added to the list, set an order in which approvals are to be made. Click the \[Up\]  and \[Down\]  button to change the order.
    ![][approval_1_9]



--------------------------------------------------------------------------------


##	Approval Process

Following is how to check the submitted approval documents and how to approve/reject them.


###	My Document

>	Approval - *Report List*

1.  Click the “Report List” menu to check the submitted documents. The Report List menu shows documents which you have written and whose approval process is in progress..
    ![][approval_1_15]
2.  Click the document on the Report List menu to check its details. Also, you can check its approval status.
    ![][approval_1_14_170522]


###	Document whose Approver or Consenter Is You

>	Approval - *Pending List*

1.  Click the “Pending List” menu to check the submitted documents. The Pending List menu shows documents you are bound to approve or reject.
    ![][approval_1_10]
2.  Click the document to check its details.
    ![][approval_1_11_170522]
3.  Click the \[Reject\]  or \[Approval\]  button to reject or approve the document.
    ![][approval_1_12_170522]
4.  As you click the \[Reject\]  or \[Approval\]  button, the “Approval” or “Reject” pop-up appears respectively. You can write the reason for your approval/rejection. After writing the reason, click the \[OK\]  button to complete it.
    ![][approval_1_13]
5.  A document whose Approver Group has finished the process for either approval or rejection is shown on the “Approved List’. Click a document on the Approved List to check its approval history.
    ![][approval_1_14_170522]




###	Document for which You Are to Be Notified

>	Approval - *Notified List*

If you are the person to be notified of a document, the document is to be indicated on the “Notified List” as it is fully approved.Click the “Notified List” to check the approved document for which you are one of persons to be notified.







--------------------------------------------------------------------------------



##	Searching Approval History

>	*Approval*

You can search documents on each menu in accordance with their approval status.

-   Report List: These are documents you have written.
-   Postponed List: These are documents you are currently writing.
-   Pending List: These are documents for which you are the Approver or Consenter. Their approval process is in progress.
-   Notified List: These are documents for which you are the person to be notified. Their approval process is completed.
-   Approved List: These are documents you have approved or consented to.

How to search documents is identical on all menus.

1.  Select “Type” of the document you want to search for.
    ![][approval_1_17]
2.  Enter a keyword for search.
    ![][approval_1_18]
3.  Documents which are identical to the selected Type and keyword will be shown on the list. Texts identical to the keyword will be highlighted.
    ![][approval_1_18]





<!-- 이미지 모음 -->
[approval_1_1]:             ./resource/bnr_guide_approval_1_1.png
[approval_1_2]:             ./resource/bnr_guide_approval_1_2.png
[approval_1_3]:             ./resource/bnr_guide_approval_1_3.png
[approval_1_8]:             ./resource/bnr_guide_approval_1_8.png
[approval_1_4]:             ./resource/bnr_guide_approval_1_4.png
[approval_1_5]:             ./resource/bnr_guide_approval_1_5.png
[approval_1_6]:             ./resource/bnr_guide_approval_1_6.png
[approval_1_7]:             ./resource/bnr_guide_approval_1_7.png
[approval_1_9]:             ./resource/bnr_guide_approval_1_9.png
[approval_1_15]:            ./resource/bnr_guide_approval_1_15.png
[approval_1_14_170522]:     ./resource/bnr_guide_approval_1_14_170522.png
[approval_1_10]:            ./resource/bnr_guide_approval_1_10.png
[approval_1_11_170522]:     ./resource/bnr_guide_approval_1_11_170522.png
[approval_1_12_170522]:     ./resource/bnr_guide_approval_1_12_170522.png
[approval_1_13]:            ./resource/bnr_guide_approval_1_13.png
[approval_1_14_170522]:     ./resource/bnr_guide_approval_1_14_170522.png
[approval_1_17]:            ./resource/bnr_guide_approval_1_17.png
[approval_1_18]:            ./resource/bnr_guide_approval_1_18.png
[approval_1_18]:            ./resource/bnr_guide_approval_1_18.png

