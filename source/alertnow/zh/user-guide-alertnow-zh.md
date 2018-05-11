---
title   : AlertNow
service : alertnow
zh : true
...



#	AlertNow 

可检查每个服务状态，并管理服务中发生的告警的故障状态及历史记录。


--------------------------------------------------------------------------------


## AlertNow 介绍 

###	什么是AlertNow?

AlertNow是基于SaaS的服务事件周期管理平台，检查各服务的状态，并管理服务中发生告警的故障现状及历史记录。
主要功能见如下。

![][alertnow_summary_image]



1. 统一事件管理
    -	接收来自第三方监控工具服务的各种警报信息。
    -	按规则删除重复的条目，并创建需要的事件。
2.  有效的团队沟通
    -	在正确的时间，将警报信息作为事件发送给适当的负责人。
    -	可通过用户指定的频道（SMS，电话，Slack等）快速转达信息。
3.  为处理故障的升级
    -	可将负责人，任务及时间设置为规则，当事件发生时可逐步处理
    -	当事件未被确认或关闭时，自动升级到下一个负责人，以缩短初始故障响应时间（MTTD）及故障恢复时间（MTTR）




### AlertNow 流程
![][alertnow_flow]

### AlertNow 关键术语(A-Z)
1.  个人设置：提供个人信息及事件通知规则的个性化功能。
2.  警报: 这是原始数据，用户不能随意更改或删除数据。
3.  服务: 管理集成中发生的事件单位，可以是实际的用户管理的服务或应用程序，除此也可以按用户的方便而自由使用。
4.  升级：通过设置事件发生时逐步处理的负责人及要处理的任务和时间（timeout）来管理。
5.  扩展：把AlertNow中创建的特定数据传输到外部工具或服务的功能。
6.  事件：收集警报时，管理按事件策略创建的故障但的状态。
7.  集成：将在第三方监控工具(外部)中发生的通知连接到AlertNow的终端。





--------------------------------------------------------------------------------



## AlertNow 快速入门指南

### 开始

提供有关用户首次使用AlertNow时必须要设置的简要说明。

#### 创建集成

集成列表中选择使用中的工具或服务后设置集成来交付和管理通知。在此仅提供创建集成的步骤，有关创建的详细内容，请参阅[集成其他外部监控服务时：添加集成](#与其他第三方监控服务同步时添加集成)。

1.  点击[集成]菜单 
    ![][service_case2_01]

2.  点击 <span class="demo black button">创建事件</span> 按钮

3.  点击[添加新集成]按钮创建集成。
    ![][escalation_case3_03]
 
4.  创建集成的界面如下图所示。输入所需的信息并点击【保存】按钮，则将创建集成。
    ![][create_integration]

#### 在AWS Cloudwatch中连接集成

要在AWS Cloudwatch中连接创建的集成，需先在AWS Console中创建主题及订阅。

AWS Simple Notification Service 参考链接: <https://docs.aws.amazon.com/zh_cn/sns/latest/dg/welcome.html>


##### SNS 控制面板

1.  登录AWS，您将看到以下界面。在界面中找到并点击移动服务中“SNS”，将会转到SNS控制面板。
    ![][aws_dashboard]

2.  在SNS控制面板中选择创建主题
    ![][aws_make_topic]

3.  输入主题名称及显示名称后点击“创建主题”按钮，将会创建主题。
    ![][aws_create_topic]
 
    主题输入项目

    +----------+--------------------------------------------------------------------------+-------+
    | 项目     | 说明                                                                     | 备注 
    +==========+==========================================================================+=======+
    | 主题名称 | 发送消息和订阅通知的通信通道。 用于为主题创建Amazon资源名称（ARN）。     | 必选
    |          |  - 主题名称ARN例子                                                       |
    |          |    `arn:aws:sns:us-west-2:111122223333:MyTopic`                          | 
    +----------+--------------------------------------------------------------------------+-------+
    | 显示名称 | SMS订阅主题的显示名称。                                                  | 可选
    +----------+--------------------------------------------------------------------------+-------+

4.  在SNS控制面板中选择“创建订阅”。
    ![][aws_new_subscribe]

5.  输入主题ARN，协议，终端节点后点击“创建订阅”，将会创建订阅。
    ![][aws_make_subscribe]

    创建订阅输入项目

    +----------+------------------------------+-----------------------------------------+
    | 项目     | 说明                         | 备注
    +==========+==============================+=========================================+
    | 主题 ARN | 创建的主题名称自动反映出来。 | 可修改
    +----------+------------------------------+-----------------------------------------+
    | 协议     | 选择HTTPS                    | 可选项目  
    |          |                              | HTTP / HTTPS / Email / Email-JSON / 
    |          |                              | Amazon  SQS / Application / AWS Lambda 
    +----------+------------------------------+-----------------------------------------+
    | 终端节点 | 粘贴在AlertNow中保存的网址。 | 输入项
    +----------+------------------------------+-----------------------------------------+

6.  点击主题详细信息界面上的刷新图标，将会批准订阅ID。
    ![][aws_subscribe_confirm_before]
    ![][aws_subscribe_confirm_after]




##### EC2 Console

1.  在AWS界面中找到并选择计算服务中的“EC2”后转到EC2 Console。
    ![][aws_select_ec2_service]

2.  点击界面左侧的“实例”，转到实例列表。
    ![][aws_instance_list]

3.  在下面界面中选择一个实例后按鼠标右键，选择CloudWatch监控>添加/编辑警报。
    ![][aws_select_instance]

4.  点击[创建警报]按钮。
    ![][aws_make_alert_click]

5.  在创建警报界面中，输入结果值并点击[创建警报]按钮。
    ![][aws_alert_make_screen]
 
    +------------+----------------+----------+
    | 项目       | 说明           | 备注 
    +============+================+==========+
    | 发送通知到 | 选择创建的主题 | 可选     
    +------------+----------------+----------+
    | 每当       | 设置阈值       | 需要输入 
    +------------+----------------+----------+




#### 检查创建的事件

如果将创建的集成与AWS Cloudwatch连接起来，那么在AlertNow中自动创建警报和事件。

![警报界面][alertnow_alert_screen]

![事件界面][alertnow_incident_screen]

※	为了检查警报是否正确创建，需修改阈值。




--------------------------------------------------------------------------------

##  AlertNow 用户设置指南：通过案例

通过案例提供AlertNow设置指南。

### 设置事件通知的响应者时：发送通知

1.  点击[升级]菜单。
    ![][escalation_case1_01]

2.  点击[创建升级]按钮 
    ![][escalation_case1_02]


#### 设置负责人循环

如果想在团队成员之间发送通知，则可以指定每个团队成员作为响应者，以逐步接收通知。
![][escalation_screen]

3.  输入升级策略名称及该升级的说明。

4.  设置终止升级的事件状态。(确认，终止钟选择)
    ![][escalation_set_policy]

5.  选择执行升级的次数。 (最多可选9次)
    ![][escalation_repeat_times]
6.  在响应者输入字段里输入要指定的升级响应者。响应者可选多名。
    ![][escalation_responder]
             

#### 包含所有前阶段的响应者

此功能用于在发送通知时将响应者扩展到高级管理员。每次收到时，将包含初始响应者及前阶段的响应者。


7.  点击‘+添加升级阶段’ 添加规则后启用“包含所有前阶段的响应者”的复选框。
    升级阶段最多可以添加到20个。
    ![][escalation_set_previous_responder]

8.  如果响应者对通知不做确认时，在”间隔“中设置到下一阶段响应者的升级间隔。（以分为单位设置） 






#### 设置最终提醒

如果所有通知阶段结束还未有人确认时将最终发送通知再次提醒响应者。
               
![][escalation_set_final_notice]

9.  选择”启用”单选按钮，可以设置最终通知的重复间隔及次数。
10. 点击[确定]按钮，创建升级策略后发送通知。






### 以各种方式接收通知时：设置联系方式

#### 注册联系方式

可通过电子邮件，电话，Slack等接收通知。

##### 设置联系方式
1.  点击\[个人设置\]菜单。
2.  基本信息中可设置简介及联系方式。
    ![][personal_setting_screen]
3.  简介包含以下信息。

    +----------+------------------------------------------+---------+
    | 项目     | 说明                                     | 备注
    +==========+==========================================+=========+
    | 姓名     | 用户姓名                                 | 
    +----------+------------------------------------------+---------+
    | 登录邮箱 | 登录邮箱信息                             |
    +----------+------------------------------------------+---------+
    | 时区     | 设置为初始访问时使用的浏览器时间，可变更 | 可配置
    +----------+------------------------------------------+---------+
    | 升级     | 用户所属或用户创建的升级                 |
    +----------+------------------------------------------+---------+

4.  用户可自己设置时区。点击![][btn_edit] 图标。
    ![][personal_setting_edit_timezone]

5.  时区设置弹出如下所示。 如果选择“自定义设置”单选按钮，则可以更改标准时区。
    ![][personal_setting_select_timezone]

6.  点击[确定]按钮完成时区设置。

7.  点击 <span class="demo black button">+ 添加联系人</span> 按钮注册联系方式。最多可注册5个电子邮件，电话和Slack。超过5个时会弹出如下信息。 
    ![][personal_setting_max_contact]

8.	点击\[确定\]按钮完成注册。

※ 设置移动电话时有些运营商根据运营商政策，可能会把提醒信息视为垃圾短信。





### 减少管理费用时：设置事件创建规则

当出现故障时，可以通过限制不必要的警报并根据事件紧急情况对事件进行分类，从而有效地管理事件。

#### 设置事件限制规则

直到故障恢复，警报将持续发生。此时用户对初始发生的警报创建事件，则此后发生警报时不会创建相同的警报的事件。

1.  点击[服务]菜单。
    ![][escalation_case2_01]

2.  点击其中一个已创建的服务后点击“事件创建规则”标签。
    ![][service_rule_make]

3.  点击事件创建限制规则的[编辑]按钮,然后点击左侧的复选框。
    ![][service_incident_publish_rule]

4.  选择条件及期间后点击[确定]创建规则。（期间，可设置为秒/分/小时/日）
    ![][service_incident_publish_rule_make]

5.  一次只能创建一个规则，关闭复选框后点击[确定]按钮并选择[确定]，规则将不会继续进行。




#### 设置事件的紧急程度

设置警报的紧急程度，按事件紧急程度对创建的事件进行分类并检查。

1.  点击\[服务\]菜单。
    ![][escalation_case2_01]

2.  点击其中一个创建的服务，点击“事件创建规则”标签。
    ![][service_incident_tab_click]

3.  点击事件紧急程度规则的[编辑]按钮，然后点击左侧的复选框。
    ![][service_urgency]

4.  选择事件紧急程度的默认规则。（最高/高/中/低/最低）
5.  点击添加自定义条件复选框，则自定义规则将优先适用。
    ![][service_user_condifion_add]

    +--------------------------------------+-----------------------------------------------------------------------------------+
    | 项目                                 | 说明
    +======================================+===================================================================================+
    | Alert Summary (警报简要)             | 指事件列表中的“标题”
    +--------------------------------------+-----------------------------------------------------------------------------------+
    | Alert Metric Name (警报度量标准名称) | 在警报详细界面中，点击[查看]按钮，详细确认警报时显示项目。（也将显示在警报摘要中）  
    |                                      | ![][metric_json]
    +--------------------------------------+-----------------------------------------------------------------------------------+

6.  选择条件，输入比较值，设置紧急程度并点击[确定]按钮，则会添加紧急程度规则。

7.  可添加规则，关闭复选框后，点击[确定]按钮并选择[确定]，规则将不会继续进行。














### 注册要通知的服务时：添加服务

服务是管理集成中发生的事件的单位，按照集成中设置的路由规则进行管理。

#### 服务界面配置
![][service_screen_info]


#### 在服务菜单中创建

##### 输入服务名称

1.  点击[服务]菜单。
    ![][escalation_case2_01]

2.  点击 <span class="demo black button">创建服务</span> 按钮。
3.  在服务创建界面中输入服务名称。

##### 设置升级规则

根据升级规则，对事件进行分类并接收通知。
![][service_create_screen]

4.  在服务创建界面中，设置升级规则。

5.  在升级默认规则中，可选择在升级菜单中创建的升级。

6.  如果点击添加自定义条件复选框，自定义规则将优选适用于默认规则。

7.  选择条件，输入比较值，并选择升级规则。

8.  设置事件创建规则（事件创建限制规则，事件紧急程度规则）。(方法是与[减少管理费用时：设置事件创建规则](#减少管理费用时设置事件创建规则)一致。)
    ![][service_incident_rule_make_list]

9.  点击\[确定\]按钮，创建服务。

10. 创建的服务将显示见如。
    ![][service_screen_under_tab]

    +------------------+------------------------------------+--------+
    | 项目             | 说明                               | 备注
    +==================+====================================+========+
    | 事件             | 可按期间及搜索条件，检查事件状态。 | 
    +------------------+------------------------------------+--------+
    | 集成             | 可检查该服务的集成信息。           |
    +------------------+------------------------------------+--------+
    | 使用中的升级规则 | 可检查该服务的升级信息。           | 可修改 
    +------------------+------------------------------------+--------+
    | 事件创建规则     | 可检查该服务的事件创建规则信息。   | 可修改 
    +------------------+------------------------------------+--------+


### 与其他第三方监控服务同步时：添加集成

提供了有关创建开始部分的集成的详细信息。





#### 创建集成

1.  点击\[集成\]菜单。
    ![][service_case2_01]

2.  点击 <span class="black demo button">创建集成</span> 按钮。
3.  点击\[添加新集成\]按钮，创建集成。 (目前仅支持AWS Cloudwatch，后续将支持更多集成)
    ![][escalation_case3_03]
 
4.  创建集成的界面，如下图所示。
    ![][integration_make]

    集成输入项目

    +----------+--------------------------------------------------------------+------+
    | 项目     | 说明                                                         | 备注
    +==========+==============================================================+======+
    | 集成名称 | 用户设置集成名称                                             | 必选
    +----------+--------------------------------------------------------------+------+
    | 集成类型 | 显示所选目标的标志。                                         | 必选
    |          | ![][service_case2_04_AWS]                     
    +----------+--------------------------------------------------------------+------+




##### 创建新服务时

创建集成时，同时也创建服务。

5.  可在创建新服务界面中创建集成。设置方法是与[注册要通知的服务时：添加服务](#注册要通知的服务时添加服务)中创建服务的方法一致。




##### 选择服务时

创建集成时，现有服务将被映射。
![][integration_make_select_service]

6.  选择默认服务规则。
7.  点击添加自定义条件复选框并设置条件项目(Alert Summary, Alert Metric Name)。自定义规则将优先适用。.
8.  输入名称，创建或选择服务后点击[确定]按钮，如下所示。
    ![][integration_make_done]

9.  URL：请复制SNS Webhook URL，用于连接SNS (Simple Notification Service)和AlertNow。









###	按任务分类响应者时：设置升级路由

创建服务时设置条件来对响应者进行分类。

1.  点击[服务]菜单进入服务页面.
    ![][service_screen]

2.  点击创建的服务进入相应的服务。

3.  在服务页面中，点击使用中的升级标签。
    ![][service_tab_created_escalation]

4.  点击[编辑]按钮，设置升级规则。




#### 按地区设置响应者

5.  点击添加自定义条件复选框，选择Alert Summary, Contains后，并在比较值字段中输入区域名称，如下所示。选择升级时，需先创建与设置所匹配的升级后选择。
    创建升级的详细内容是参考帮助的[Use Case 1: 在升级菜单中创建。](../en/user-guide-alertnow-en.html#escalation-use-case-1)
    ![][escalation_rule_setted_local]



#### 按度量标准设置响应者

6.  点击自定义条件复选框，选择Alert Metric Name, Contains后，在比较值字段中输入度量标准名称(例: CPUUtilization)，如下所示。同样的，需先创建与设置所匹配的升级后选择。
    ![][escalation_rule_setted]


#### 按服务器角色（WEB，DB，Network）设置响应者

7.  点击添加自定义条件复选框，选择Alert Summary, Contains后，在比较值字段中输入服务器角色，如下所示。同样的，需先创建与设置所匹配的升级后选择。
    ![][escalation_rule_setted_metric] 

8.  完成升级规则设置后，点击\[确定\]按钮。




--------------------------------------------------------------------------------


<!--
##	AlertNow 帮助
여기는 도움말 섹션
-->


## AlertNow 用户

### AlertNow 角色

为了AlertNow服务的有效用户管理及服务使用，角色定义为4种。

#### 管理员

管理整个AlertNow服务。管理员拥有每个类别的所有权限（创建，删除，查询）。另外，是唯一可以创建集成并设置服务路由的用户。
![][diagram_service_admin]

-   管理员，进行步骤为创建集成→ 创建服务→ 创建升级策略→ 设置扩展 (可选项)。
-   完成设置后，通过连接在集成的信息，创建警报和事件，可接收创建事件及状态变更的通知，并可修改事件。




#### 服务负责人

拥有服务的责任权限，可以指定故障处理及处理负责人（响应者）。拥有除集成外的所有类别的权限（创建，删除，查询）。（集成是仅能查看）
![][diagram_service_manager]

-   服务负责人，进行步骤为创建服务→ 创建升级策略→ 设置扩展(可选项) 。
-   完成设置后，通过连接在集成的信息，创建警报和事件，可接收创建事件及状态变更的通知，并可修改事件。




#### 响应者

作为主要接收事件通知的负责人，故障处理的实际负责人。拥有创建，删除，查询事件和警报的权限，可进行服务查询，升级查询，设置接收人。（没有访问集成权限）。
![][diagram_service_responder]

-	响应者，虽然不能创建升级策略，但可被设置为升级响应者。
-	完成设置后，通过连接在集成的信息，创建警报和事件，可接收创建事件及状态变更的通知，并可修改事件。


#### 抄送人员

即使没有直接关联，按需要确认故障处理状态的用户。没有访问集成的权限，除集成外所有类别都仅有查询权限。
![][diagram_service_reference]

-   无法收到创建事件和状态变更的通知。


###	各角色的权限

#### 权限 – 示意图
![][permission_gram]
                  
#### 权限 – 表视图













<table>
    <thead>
        <tr class="header">
            <th>规则</th>
            <th class="center">功能</th>
            <th class="center">集成</th>
            <th class="center">服务</th>
            <th class="center">事件</th>
            <th class="center">扩展</th>
            <th class="center">升级</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <td rowspan="3" style="text-align: left;">管理员</td>
            <td class="center">创建</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="even">
            <td class="center">删除</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="odd">
            <td class="center">查询</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="even">
            <td rowspan="3" style="text-align: left;">服务负责人</td>
            <td class="center">创建</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="odd">
            <td class="center">删除</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="even">
            <td class="center">查询</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="odd">
            <td rowspan="3" style="text-align: left;">响应者</td>
            <td class="center">创建</td>
            <td rowspan="3"  style="background-color:#f8a7a8; text-align: center; vertical-align:middle;">无权限 </td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
        </tr>
        <tr class="even">
            <td class="center">删除</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
        </tr>
        <tr class="odd">
            <td class="center">查询</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr class="even">
            <td rowspan="3" style="text-align: left;">抄送人员</td>
            <td class="center">创建</td>
            <td rowspan="3"  style="background-color:#f8a7a8; text-align: center; vertical-align:middle;">无权限</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
        </tr>
        <tr class="odd">
            <td class="center">删除</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
        </tr>
        <tr class="even">
            <td class="center">查询</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
    </tbody>
</table>



--------------------------------------------------------------------------------


## Alertnow 帮助
추후 중국어 도움말 제공 예정입니다. 
불편하시겠지만 [영문 도움말][redirect]을 참고하십시오. 










<!-- 링크 모음-->
[redirect]: ../en/user-guide-alertnow-en.html

<!-- 이미지 모음 -->
[btn_edit]:                           ./resource/btn_edit@2x.png
[metric_json]:                        ./resource/metric_json.png

[alertnow_summary_image]:             ./resource/alertnow_summary_image_en@2x.png
[alertnow_flow]:                      ./resource/bnr_map_alert_en@2x.png
[service_case2_01]:                   ./resource/service_case2_01.png

[escalation_case3_03]:                ./resource/escalation_case3_03.png

[create_integration]:                 ./resource/create_integration.png

[aws_dashboard]:                      ./resource/aws_dashboard.png
[aws_make_topic]:                     ./resource/aws_make_topic.png
[aws_create_topic]:                   ./resource/aws_create_topic.png
[aws_new_subscribe]:                  ./resource/aws_new_subscribe.png
[aws_make_subscribe]:                 ./resource/aws_make_subscribe.png
[aws_subscribe_confirm_before]:       ./resource/aws_subscribe_confirm_before.png
[aws_subscribe_confirm_after]:        ./resource/aws_subscribe_confirm_after.png
[aws_select_ec2_service]:             ./resource/aws_select_ec2_service.png
[aws_instance_list]:                  ./resource/aws_instance_list.png
[aws_select_instance]:                ./resource/aws_select_instance.png
[aws_make_alert_click]:               ./resource/aws_make_alert_click.png
[aws_alert_make_screen]:              ./resource/aws_alert_make_screen.png

[alertnow_alert_screen]:              ./resource/alertnow_alert_screen.png
[alertnow_incident_screen]:           ./resource/alertnow_incident_screen.png

[escalation_case1_01]:                ./resource/escalation_case1_01.png
[escalation_case1_02]:                ./resource/escalation_case1_02.png
[escalation_screen]:                  ./resource/escalation_screen.png
[escalation_set_policy]:              ./resource/escalation_set_policy.png
[escalation_repeat_times]:            ./resource/escalation_repeat_times.png
[escalation_responder]:               ./resource/escalation_responder.png
[escalation_set_previous_responder]:  ./resource/escalation_set_previous_responder.png
[escalation_set_final_notice]:        ./resource/escalation_set_final_notice.png

[personal_setting_screen]:            ./resource/personal_setting_screen.png
[personal_setting_edit_timezone]:     ./resource/personal_setting_edit_timezone.png
[personal_setting_select_timezone]:   ./resource/personal_setting_select_timezone.png
[personal_setting_max_contact]:       ./resource/personal_setting_max_contact.png

[escalation_case2_01]:                ./resource/escalation_case2_01.png
[service_rule_make]:                  ./resource/service_rule_make.png
[service_incident_publish_rule]:      ./resource/service_incident_publish_rule.png
[service_incident_publish_rule_make]: ./resource/service_incident_publish_rule_make.png

[service_incident_tab_click]:         ./resource/service_incident_tab_click.png
[service_urgency]:                    ./resource/service_urgency.png
[service_user_condifion_add]:         ./resource/service_user_condifion_add.png

[service_screen]:                     ./resource/service_screen.png
[service_screen_info]:                ./resource/service_screen_info.png

[service_create_screen]:              ./resource/service_create_screen.png
[service_incident_rule_make_list]:    ./resource/service_incident_rule_make_list.png
[service_screen_under_tab]:           ./resource/service_screen_under_tab.png

[integration_make]:                   ./resource/integration_make.png
[service_case2_04_AWS]:               ./resource/bnr_service_case2_aws_demo_en@2x.png

[integration_make_select_service]:    ./resource/integration_make_select_service.png
[integration_make_done]:              ./resource/integration_make_done.png

[service_screen_normal]:              ./resource/service_screen_normal.png
[service_tab_created_escalation]:     ./resource/service_tab_created_escalation.png

[escalation_rule_setted_local]:       ./resource/escalation_rule_setted_local.png
[escalation_rule_setted]:             ./resource/escalation_rule_setted.png
[escalation_rule_setted_metric]:      ./resource/escalation_rule_setted_metric.png

[diagram_service_admin]:              ./resource/diagram_service_admin.png
[diagram_service_manager]:            ./resource/diagram_service_manager.png
[diagram_service_responder]:          ./resource/diagram_service_responder.png
[diagram_service_reference]:          ./resource/diagram_service_reference.png

[permission_gram]:                    ./resource/permission_gram.png

