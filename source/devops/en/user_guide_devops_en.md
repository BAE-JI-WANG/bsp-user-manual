<!-- TOC -->





#	DevOps
You can manage development and release plan, Build & Deploy configuration, and End To End process. 


**Managing Development and Release Issue**
Following is how to manage the release process for each service with DevOps service.


--------------------------------------------------------------------------------

##	Presetting

1. Set the main project and person in charge for process & release for the service.
    1.  The service group registered in Portal Service will be shown.
        <img src="./image/bnr_guide_devops_001.png" />
    2.  You can link the project that manages the service group and set the workflow.<br />
        The workflow can be composed in three steps for each development phase (development, verification, operation): Approval, Deploy, and Report.
        1.  Project mapping
            Source Repository will be automatically created with a service group code when mapping.
        2.  Workflow setting
            -   Approval: Link Approval Service to link the approval process before deploy.
            -   Deploy: Composed Build & Deploy procedures can be included.
            -   Report: Deploy report can be simply recorded
                <img src="./image/bnr_guide_devops_002.png" />
    3.  You can set the role of DevOps as a member of the previously linked project.
        1.  Role
            -   Leader: Has all rights to Build & Deploy procedures 
            -   Member: Has limited rights in regards to configuration menu usage and deploy that requires approval.
        2.  Once a role is granted, the permissions to Read/Write Repository & CI services are granted to the relevant ID, and an initial password is sent via e-mail.
            <img src="./image/bnr_guide_devops_003.png" />
2.  Add Build configuration.
    Add a new build configuration with “Create New".
    <img src="./image/bnr_guide_devops_004.png" />

<ol class="list-description">
<li>Set Service name / Phase / Project name / Repository Path(SVN) / Build Command(SVN) / Script(Shell) / Target Server / etc.
<li>Routung Check Settings
<p>In case servers are diversified and support routing, this setting secures service continuity when deploying.
<ol>
<li>Health Check Path
<ol>
<li>Before build and deploy, you can change the file in the server’s Health Check Path, block routing by Load Balancer, and proceed with deploy.


<li>Logic Check URL
<ol>
<li>After the deploy, you can check the server connection with the entered URL address, restore the files from Health Check Path, and normalize Routing.

<img src="./image/bnr_guide_devops_005.png" />







<li>Search and link the target server list manually entered via SR transfer.

<img src="./image/bnr_guide_devops_006.png" />







####	3. Check the build configuration.

<img src="./image/bnr_guide_devops_007.png" />






###	Development Planning 

####	1. Go to the Dev Planning pane by clicking the “Create New” button.

<img src="./image/bnr_guide_devops_008.png" />




####	2. Fill out the form for Dev Planning.
<ol class="list-description">
<li>Select the target service of Dev planning.
<li>Enter the release Target Version.
<li>Enter the development period, title, description, and watcher.

<img src="./image/bnr_guide_devops_009.png" />






####	3. Link the development issues synced and managed with the project service.
<ol class="list-description">
<li>When committing to Source Repository, enter the issue key number of the project service on the first line on Commit Comment and its description after the second line. Then its content will be automatically registered as a comment to Issue, and you can trace the relevant content conversely.
<li>Register issues with Commit Log as issues related to Dev planning to check the changed source list on the bottom of the release planning.

<img src="./image/bnr_guide_devops_010.png" />








###	Release planning 
For established and verified development plans, you can write release planning with “Transfer to Release” button.

<img src="./image/bnr_guide_devops_011.png" />



####	1. Write release planning
<ol class="list-description">
<li>Enter the release planning title, release period, and watcher.
<li>ii.    For release description, please follow the job description form of the company.

<img src="./image/bnr_guide_devops_012.png" />






####	2. Check the release list.

<img src="./image/bnr_guide_devops_013.png" />





###	4.    Processing Release


####	1. Check the details of release.
i.    Here, the list of related issues linked to Dev planning is shown. You can check the changed source list according to the commit log registered on the relevant issue.



####	2. Proceed with the process for each development phase, according to the workflow preset on Configuration.

<img src="./image/bnr_guide_devops_014.png" />




####	3. Click “Approval” to sync with Approval service and go to Approval pane.
Please refer to User Guide of Approval services for how to write approval.

<img src="./image/bnr_guide_devops_015.png" />




####	4. Once approved, the status will change to “Approved”. Click the button to go to the approval details pane.

<img src="./image/bnr_guide_devops_015.png" />




####	5.    Deploy button is activated; click it to go to deploy execution pane.

<img src="./image/bnr_guide_devops_016.png" />






###	Executing Build & Deploy

####	1. Select build configuration and Deploy Type, and proceed with deploy.
Click “Create New” to create Branch at Source Repository and deploy the relevant Branch.


<img src="./image/bnr_guide_devops_017.png" />




####	2. You can check the build log in Execute Result.

<img src="./image/bnr_guide_devops_018.png" />





####	3. Executing Deploy.
<ol class="list-description">
<li>Enter the service & development phase, build configuration, deploy source, sonar analysis, etc.
<li>You can analyze Sonarqube source with Run Sonar. Extra time to analyze and to execute may be required according to the Source amount.
<li>You can deploy concurrently or sequentially to the target server by setting the deploy type.

<img src="./image/bnr_guide_devops_019.png" />









###	You can check the Deploy history

<img src="./image/bnr_guide_devops_021.png" />






###	Reporting after deploy

####	1. Writing Report 
<ol class="list-description">
<li>Once the deploy is complete, click “Report” button on the Release Plan Details to record the results.
<li>Record the success or failure of release / Rollback / discontinue service / duration of discontinued service / verification statement/ Rollback statement/ etc.

<img src="./image/bnr_guide_devops_022.png" />







####	2. Closing release planning
Once the report is complete, complete the release by clicking “Close” button and go to Dev planning.

<img src="./image/bnr_guide_devops_023.png" />





####	3. Closing Dev planning 
<ol class="list-description">
<li>Check if all the related issues are reflected and handled properly, and close the Dev planning with the “Close” button in Dev planning pane.
<li>ii.    Closing the Dev planning will change the status of all the related issues that are linked as “Closed”.

<img src="./image/bnr_guide_devops_024.png" />








###	Operation scenario of integration of other services 

If you link the services below, you can work more organically and efficiently in all the procedures from request gathering, development and testing, and to service release via DevOps.
<ol class="list-description">
<li>SR / Project: Request gathering
<li>Monitoring / Alarm: Monitoring of system performance
<li>DBQCS: Database quality management
<li>Approval: Approval process for each development phase





###	DevOps Constraints

<ol class="list-description">
<li>OS has been completely verified only in Ubuntu (Recommend Version 12/14)
<li>Only available in the service environments below
<ol>
<li>Java(Recommend Version 1.7/1.8)
<li>Apache Tomcat (Recommend Version 7, 8) composition
<li>SSH access account must be created to deploy in ITS 


<li>By executing deploy server initializing script, the server can be automatically composed in the following order:
<ol>
<li>JDK installation : Java Application(Recommend Version 1.8)
<li>SSH access account configuration 
<li>Apache Tomcat installation (Recommend Version 8)


<li>Other constraints
<ol>
<li>Build Tool only supports Maven, and can be used after setting the Build Command
<li>SCM only supports : SVN, GIT, Bitbucket composition (refer to the details below)
<ol>
<li>Repository establishment, role management, build, sonar analysis, and deploy can only be synced with SVN
<li>When Project Mapping to a service, Repository automatically is composed with a service code (SVN Only)
<li>When using GIT / Bitbucket, only the current Commit Log and Project Issue can be synced. It operates after setting DevOps API on the relevant server


<li>CI and QA constituents
<ol>
<li>CI : Jenkins
<li>QA : SonarQube












