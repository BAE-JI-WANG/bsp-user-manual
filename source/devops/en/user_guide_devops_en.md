---
service : devops 
title   : DevOps
en : true
...


<!-- TOC -->





#	DevOps
You can manage development and release plan, Build & Deploy configuration, and End To End process. 


**Managing Development and Release Issue**
Following is how to manage the release process for each service with DevOps service.


--------------------------------------------------------------------------------

##	Presetting

1. Set the main project and person in charge for process & release for the service.
    1.  The service group registered in Portal Service will be shown.
        ![][devops_001]
    2.  You can link the project that manages the service group and set the workflow.<br />
        The workflow can be composed in three steps for each development phase (development, verification, operation): Approval, Deploy, and Report.
        1.  Project mapping
            Source Repository will be automatically created with a service group code when mapping.
        2.  Workflow setting
            -   Approval: Link Approval Service to link the approval process before deploy.
            -   Deploy: Composed Build & Deploy procedures can be included.
            -   Report: Deploy report can be simply recorded
                ![][devops_002]
    3.  You can set the role of DevOps as a member of the previously linked project.
        1.  Role
            -   Leader: Has all rights to Build & Deploy procedures 
            -   Member: Has limited rights in regards to configuration menu usage and deploy that requires approval.
        2.  Once a role is granted, the permissions to Read/Write Repository & CI services are granted to the relevant ID, and an initial password is sent via e-mail.
            ![][devops_003]
2.  Add Build configuration.
    Add a new build configuration with “Create New".
    ![][devops_004]

    1.  Set Service name / Phase / Project name / Repository Path(SVN) / Build Command(SVN) / Script(Shell) / Target Server / etc.
    2.  Routung Check Settings
        In case servers are diversified and support routing, this setting secures service continuity when deploying.
        1.  Health Check Path
            Before build and deploy, you can change the file in the server’s Health Check Path, block routing by Load Balancer, and proceed with deploy.
        2.  Logic Check URL
            After the deploy, you can check the server connection with the entered URL address, restore the files from Health Check Path, and normalize Routing.
            ![][devops_005]
        3.  Search and link the target server list manually entered via SR transfer.
            ![][devops_006]
3.  Check the build configuration.
    ![][devops_007]


--------------------------------------------------------------------------------

##	Development Planning 

1.  Go to the Dev Planning pane by clicking the “Create New” button.
    ![][devops_008]
2.  Fill out the form for Dev Planning.
    1.  Select the target service of Dev planning.
    2.  Enter the release Target Version.
    3.  Enter the development period, title, description, and watcher.
        ![][devops_009]

3.  Link the development issues synced and managed with the project service.
    1.  When committing to Source Repository, enter the issue key number of the project service on the first line on Commit Comment and its description after the second line. Then its content will be automatically registered as a comment to Issue, and you can trace the relevant content conversely.
    2.  Register issues with Commit Log as issues related to Dev planning to check the changed source list on the bottom of the release planning.
        ![][devops_010]


--------------------------------------------------------------------------------


##	Release planning 

For established and verified development plans, you can write release planning with “Transfer to Release” button.
![][devops_011]



1.  Write release planning
    2.  Enter the release planning title, release period, and watcher.
    3.  For release description, please follow the job description form of the company.
        ![][devops_012]
2.  Check the release list.
    ![][devops_013]

--------------------------------------------------------------------------------

##  Processing Release

1.  Check the details of release.
    Here, the list of related issues linked to Dev planning is shown. You can check the changed source list according to the commit log registered on the relevant issue.

2.  Proceed with the process for each development phase, according to the workflow preset on Configuration.
    ![][devops_014]

3.  Click “Approval” to sync with Approval service and go to Approval pane.
    Please refer to User Guide of Approval services for how to write approval.
    ![][devops_015]

4.  Once approved, the status will change to “Approved”. Click the button to go to the approval details pane.
    ![][devops_015]

5.  Deploy button is activated; click it to go to deploy execution pane.
    ![][devops_016]


--------------------------------------------------------------------------------



##	Executing Build & Deploy

1.  Select build configuration and Deploy Type, and proceed with deploy.
    Click “Create New” to create Branch at Source Repository and deploy the relevant Branch.
    ![][devops_017]

2.  You can check the build log in Execute Result.
    ![][devops_018]

3.  Executing Deploy.
    1.  Enter the service & development phase, build configuration, deploy source, sonar analysis, etc.
    2.  You can analyze Sonarqube source with Run Sonar. Extra time to analyze and to execute may be required according to the Source amount.
    3.  You can deploy concurrently or sequentially to the target server by setting the deploy type.
        ![][devops_019]


--------------------------------------------------------------------------------


##  Check the Deploy history

You can check the Deploy history
![][devops_021]


--------------------------------------------------------------------------------

##	Reporting after deploy

1.  Writing Report 
    1.  Once the deploy is complete, click “Report” button on the Release Plan Details to record the results.
    2.  Record the success or failure of release / Rollback / discontinue service / duration of discontinued service / verification statement/ Rollback statement/ etc.
        ![][devops_022]
2.  Closing release planning
    Once the report is complete, complete the release by clicking “Close” button and go to Dev planning.
    ![][devops_023]
3.  Closing Dev planning 
    1.  Check if all the related issues are reflected and handled properly, and close the Dev planning with the “Close” button in Dev planning pane.
    2.  Closing the Dev planning will change the status of all the related issues that are linked as “Closed”.
        ![][devops_024]



--------------------------------------------------------------------------------


##	Operation scenario of integration of other services 

If you link the services below, you can work more organically and efficiently in all the procedures from request gathering, development and testing, and to service release via DevOps.

-   SR / Project: Request gathering
-   Monitoring / Alarm: Monitoring of system performance
-   DBQCS: Database quality management
-   Approval: Approval process for each development phase



--------------------------------------------------------------------------------


##	DevOps Constraints

1.  OS has been completely verified only in Ubuntu (Recommend Version 12/14)
2.  Only available in the service environments below
    1.  Java(Recommend Version 1.7/1.8)
    2.  Apache Tomcat (Recommend Version 7, 8) composition
    3.  SSH access account must be created to deploy in ITS 
3.  By executing deploy server initializing script, the server can be automatically composed in the following order:
    1.  JDK installation : Java Application(Recommend Version 1.8)
    2.  SSH access account configuration 
    3.  Apache Tomcat installation (Recommend Version 8)

4.  Other constraints
    1.  Build Tool only supports Maven, and can be used after setting the Build Command
    2.  SCM only supports : SVN, GIT, Bitbucket composition (refer to the details below)
        1.  Repository establishment, role management, build, sonar analysis, and deploy can only be synced with SVN
        2.  When Project Mapping to a service, Repository automatically is composed with a service code (SVN Only)
        3.  When using GIT / Bitbucket, only the current Commit Log and Project Issue can be synced. It operates after setting DevOps API on the relevant server
    3.  CI and QA constituents
        1.  CI : Jenkins
        2.  QA : SonarQube 



<!-- 이미지 모음 -->
[devops_001]: ./resource/bnr_guide_devops_001.png
[devops_002]: ./resource/bnr_guide_devops_002.png
[devops_003]: ./resource/bnr_guide_devops_003.png
[devops_004]: ./resource/bnr_guide_devops_004.png
[devops_005]: ./resource/bnr_guide_devops_005.png
[devops_006]: ./resource/bnr_guide_devops_006.png
[devops_007]: ./resource/bnr_guide_devops_007.png
[devops_008]: ./resource/bnr_guide_devops_008.png
[devops_009]: ./resource/bnr_guide_devops_009.png
[devops_010]: ./resource/bnr_guide_devops_010.png
[devops_011]: ./resource/bnr_guide_devops_011.png
[devops_012]: ./resource/bnr_guide_devops_012.png
[devops_013]: ./resource/bnr_guide_devops_013.png
[devops_014]: ./resource/bnr_guide_devops_014.png
[devops_015]: ./resource/bnr_guide_devops_015.png
[devops_015]: ./resource/bnr_guide_devops_015.png
[devops_016]: ./resource/bnr_guide_devops_016.png
[devops_017]: ./resource/bnr_guide_devops_017.png
[devops_018]: ./resource/bnr_guide_devops_018.png
[devops_019]: ./resource/bnr_guide_devops_019.png
[devops_021]: ./resource/bnr_guide_devops_021.png
[devops_022]: ./resource/bnr_guide_devops_022.png
[devops_023]: ./resource/bnr_guide_devops_023.png
[devops_024]: ./resource/bnr_guide_devops_024.png
