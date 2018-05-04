---
service : portal
title   : Service Portal
zh : true
...

<!-- TOC -->





# 服务门户

--------------------------------------------------------------------------------


## 登录 OpsNow 平台

OpsNow 是一款 SaaS 模式的云管理平台。使用账户和密码登录OpsNow平台，对云环境进行管理监控。
登录地址：https://service.opsnow.cn
![][guide_service_portal_1]

点击登录，输入账户和密码登录OpsNow管理界面。
![][guide_service_portal_2]

登录完成后就进入OpsNow管理界面，在门户首页就可以看到目前环境的基本情况和费用使用情况。
![][guide_service_portal_3]


--------------------------------------------------------------------------------




## 配置添加云账户、用户组、用户、权限和业务组

为了更好的管理和运维云资源，首先需要添加云账户至OpsNow，配置权限，添加账户至用户组，最后添加业务组对云资源进行划分。



### Azure云账户添加

添加 Azure 云账户到 OpsNow 平台的步骤如下




#### 登录 OpsNow 平台，选择 Service Portal > Cloud Account；

![][guide_service_portal_4]





#### 选择 Azure，点击 Add Account 按钮

![][guide_service_portal_5] 
![][guide_service_portal_6]





#### 填写 Azure 云账户的相关信息，所需填写的信息如下表

![][guide_service_portal_7]

+---------------------------------+------------------------------------------------------+
| **Account Name**                | 在 OpsNow 平台上显示的云账户名称，由客户填写所需字符 
+---------------------------------+------------------------------------------------------+
| **User ID**                     | 客户的Azure只读账户 ID
+---------------------------------+------------------------------------------------------+
| **Password**                    | 客户的Azure只读账户密码
+---------------------------------+------------------------------------------------------+
| **Region**                      | 点击“获取订阅"按钮时地域自动选定。
+---------------------------------+------------------------------------------------------+
| **Status**                      | 账户数据收集状态。
+---------------------------------+------------------------------------------------------+
| **Enrollment (for EA account)** | 客户的 Azure Enrollment ID
+---------------------------------+------------------------------------------------------+
| **Token (for EA account)**      | 客户的 Access Key
+---------------------------------+------------------------------------------------------+


![][guide_service_portal_8] 
![][guide_service_portal_9]




#### 信息填写完成后，点击 Get Subscription 按钮，获取当前 Azure 账户下的订阅信息

![][guide_service_portal_10]




#### 获取订阅信息之后，填写 Subscription Name（客户填写所需字符） 、Offer ID（在 Azure 管理界面中的“订阅”界面可查询，如下图）、以及 Billing Day（在 Azure 管理界面中的“订阅”界面可查询，如下图）

![][guide_service_portal_11]
![][guide_service_portal_12]





#### 信息填写完成后，点击 Get Subscription 按钮，获取当前 Azure 账户下的订阅信息






### AWS云账户添加

添加 AWS 云账户到 OpsNow 平台的步骤如下：




#### 登录 OpsNow 平台，选择 Service Portal > Cloud Account；

![][guide_service_portal_13]




#### 选择 AWS，点击 Add Account 按钮

![][guide_service_portal_14] 
![][guide_service_portal_15]


#### 填写 AWS 云账户的相关信息，所需填写的信息如下表

![][guide_service_portal_16]

+--------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| **Account Name**   | 在 OpsNow 平台上显示的云账户名称，由客户填写所需字符
+====================+=====================================================================================================================================================+
| **Account ID**     | 客户的AWS账户 ID
+--------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| **Access Key**     | 客户 AWS 只读账户的 Access Key
+--------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| **Secret Key**     | 客户 AWS 只读账户的 Secret Key
+--------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| **Linked**         | 如果使用 Bespin 的 AWS 账户作为 Pay Account，则勾选此项；如果使用客户自己的 AWS 账户做 Pay Account，则不需勾选 
+--------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| **S3 Bucket Name** | 如果使用Bespin 的 AWS 作为 Pay Account， 则不用填写；如果客户自己的 AWS 账户做 Pay Account，
|                    | 则填写存放账单的 S3 Bucket 名称（需要在 AWS 管理控制台中，“我的账户” > “首选项”中，配置接收账单报告的 S3 Bucket 并验证通过） 
+--------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| **Region**         | 输入访问密钥和密钥后区域会自动选定。如您不输入访问密钥和密钥，则必须手动选择区域(如您已有注册账户则只能和该账户的区域保持一致，不能选择其他区域。) 
+--------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| **Status**         | 账户数据收集状态。(仅输入账户ID时不显示。)
+--------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+

![][guide_service_portal_17]




#### 信息填写完成后，点击 \[√\] 按钮，完成账户添加。

![][guide_service_portal_18]




### 添加配置云权限组管理

#### 在SERVICE PORTAL中，先点击权限, 再点击云，然后在云中创建云权限组并分配云权限

![][guide_service_portal_19]

#### 点击添加后，输入云权限组名称，然后点击完成；

![][guide_service_portal_20]

#### 完成后，点击云厂商云账户，针对云厂商的各云账户分配权限，完成后点击保存修改内容；云权限组指定了关联这个权限组的用户组可以访问哪些云厂商的哪些云账户的数据。

![][guide_service_portal_21]




###  添加配置OpsNow服务权限组管理

#### 在SERVICEPORTAL点击权限，再点击OpsNow服务，最后点击添加；

![][guide_service_portal_22]

#### 输入OpsNow服务组的名称，输入完成后，点击“完成”；

![][guide_service_portal_23]

#### 完成后，在OpsNow权限组管理中，设置OpsNow每个模块的权限，设置完成后点击保存；OpsNow 服务组指定了关联这个权限组的用户组可以访问OpsNow平台的哪些功能模块，针对这些功能模块的具体权限是读写（edit）、只读（view）还是无权限（none）。

![][guide_service_portal_24]




### 添加配置公司组权限组管理

#### 在SERVICEPORTAL点击权限，再点击公司组，最后点击添加，创建一个公司组；

![][guide_service_portal_25]

#### 输入公司组名称，完成公司组添加

![][guide_service_portal_26]

#### 点击刚创建的公司组，分配公司权限，完成后点击保存。公司组指定了关联这个权限组的用户组可以访问哪些公司的OpsNow账户。

![][guide_service_portal_27]

### 添加配置管理用户组

#### 在SERVICEPORTAL点击用户组，最后点击添加组，创建一个用户组；

![][guide_service_portal_28]

#### 输入创建的用户组名称，点击确认，完成添加；

![][guide_service_portal_29]

#### 找到刚创建的用户组，再点击修改

![][guide_service_portal_30]

#### 关联原先创建的公司组、OpsNow服务组和云，关联完成后点击保存。用户组与公司组、OpsNow服务组和云权限组的关联，指定了该用户组可以访问哪些公司组绑定到OpsNow中的哪些云厂商的云账户，以及可以使用OpsNow中的哪些功能模块。

![][guide_service_portal_31]

### 为该用户组添加成员

#### 如果该用户未在OpsNow中创建，就需要邀请，加入到OpsNow中；

1.  在SERVICEPORTAL点击用户组，最后点击邀请； 
    ![][guide_service_portal_32]

2.  输入邀请人邮箱，和选择需要加入的用户组，最后点击发送 
    ![][guide_service_portal_33] 
    ![][guide_service_portal_34]

3.  前往邮件，查看邀请邮件 
    ![][guide_service_portal_35]

4.  在邮件中点击“SIGN IN”，进行注册，在弹出得出浏览器界面中，勾选同意此协议，再点击注册 
    ![][guide_service_portal_36]

5.  输入密码、姓名、手机号地区、手机号码，点击发送认证码，收到短信后输入认证码，点击输入认证进行验证，验证通过后点击完成，完成认证。完成后收到确认邮件就可以在OpsNow平台中登录了。 
    ![][guide_service_portal_37]


#### 如果该用户已在OpsNow中，只需要添加到用户组中即可

1.  在SERVICEPORTAL点击用户组,找到要添加的用户组，点击修改 
    ![][guide_service_portal_38]

2.  在该组中添加用户，添加用户后，点击完成
    ![][guide_service_portal_39]

3.  最后点击保存
    ![][guide_service_portal_40]



--------------------------------------------------------------------------------




## 服务组

>   服务门户 \- *服务组*

服务组功能可根据您实际运行的服务分组所有多云和混合云环境资源。
通过服务组功能再分组资源，您可以确认: 资源使用量、计费、和服务运行状态。

### 关于服务组

服务组可以按照您所需的标准进行资源分类。升级后的服务组功能帮助您更加轻松详细地分类资源，并实现更加有效的资源管理功能。

### 开始使用

#### 自动创建新视图和新服务组

![][service_group_2_1_1]

-	使用账户、标签、关键规则条件自动创建和管理视图列表中创建的视图。
-	自动布局状态由用户选择开启或关闭。
-	初次输入: 如果您已有一个账户，则默认提供一个账户视图。
    (各个用户账户服务组自动创建的视图)

1.  基于标签创建新视图和新服务组
    选择自动创建视图选项
    ![][service_group_2_1_1_1]

    选择基于标签键创建 
    ![][service_group_2_1_1_2]

    选择标签键 
    ![][service_group_2_1_1_3]

    根据各标签键的标签值自动创建服务组 
    ![][service_group_2_1_1_4]

    创建完成后可以在左侧菜单中查看视图信息。选中视图后可以根据右侧自动创建的标签和创建服务组的规则条件检查服务组列表。 
    ![][service_group_2_1_1_5]

    移动鼠标将出现编辑创建服务组图标。点击图标您可以编辑名称,添加资源，编辑或删除规则。
    (详情请参阅第3页和第4页).  
    ![][service_group_2_1_1_6]

2.  基于账户创建新的视图和服务组
    选择创建自动视图 
    ![][service_group_2_1_2_1]

    选择基于账户创建 
    ![][service_group_2_1_2_2]

    为每个账户自动创建服务组。 
    ![][service_group_2_1_2_3]

    创建完成后，可以在左侧菜单中查看视图信息。选中视图后可以根据右侧自动创建的帐户和创建服务组的条件来检查服务组列表。 
    ![][service_group_2_1_2_4]

    移动鼠标将出现编辑创建的服务组图标.
    点击按钮您可以编辑名称，添加资源，编辑或删除规则。
    (详情参考第3页和第4页)。 
    ![][service_group_2_1_2_5]


#### 手动创建一个新的视图和服务组

1.  手动创建一个新的视图和服务组
    选择创建自定义服务组视图。 
    ![][service_group_2_2_1]

    您可以自定义服务组名称。
    名称最多48个字符，仅支持英文、数字、字符串(-) 。 
    ![][service_group_2_2_2]

    点击创建按照您输入的名称创建一个新的服务组，或选择上一步重新输入一个新的名称。 
    ![][service_group_2_2_3]

    您可以在左侧菜单查看已创建的视图，视图是手动创建，在没有初始注册服务组的情况下创建的，并且可以通过创建服务组按钮进行注册。 
    ![][service_group_2_2_4]

    选中已创建的服务组，将出现一个页面可以指定服务组名称。
    您可以命名服务组名称并输入描述。 
    ![][service_group_2_2_5]

    创建服务组后，您可以在如下所示页面查看创建的服务组。
    您可以通过自动或手动将资源映射到相应的服务组来进行管理。
    (参考手册3) 
    ![][service_group_2_2_6]


#### 创建类别分类服务组

您可以使用分类功能再次分组管理已创建的服务组

1.  创建类别
    您可以将鼠标移动到左侧视图来创建一个类别。 
    ![][service_group_2_3_1]

    创建类别时，在左侧的视图列表上创建类别图标，并在右侧的服务组列表页面创建类别。 
    ![][service_group_2_3_2]

2.  变更分类
    点击右侧图标，您可以重命名或删除类别。 
    ![][service_group_2_3_3]

3.  注册服务组
    点击将鼠标拖放或悬停在左侧菜单时出现的按钮，您可以在类别中注册一个服务组。 
    ![][service_group_2_3_4]

    单击该按钮，将会出现一个弹出窗口显示您可以选择的类别。选择要移至的目标类别后，按OK键移至所需类别。 
    ![][service_group_2_3_5]

    如下所示是已移动到的目标服务组: 
    ![][service_group_2_3_6]


### 添加资源

具有多个帐户或已通过控制台/门户的标签功能对资源进行分类的用户不必额外创建服务组。 只需点击几下，您就可以轻松分类您的资源。

#### 通过设定条件自动添加资源

提供为每个服务组添加资源设置规则的功能，只需预设条件，添加新资源后便可自动分类。
设定规则很简单。 如果您只选择要包含在服务组中的资源的标签，帐户，区域和产品，则该条件下的资源将自动添加到所选服务组中。

1.  为标签创建的服务组的资源设置自动添加条件
    点击悬停鼠标时出现的编辑按钮切换到编辑模式。 
    ![][service_group_3_1_1_1]

    在详细页面视图中输入规则编辑模式 
    ![][service_group_3_1_1_2]

    在服务组详细页面输入规则编辑模式


    为每个项目设置条件。这种情况下必须选择标签值条件。 
    ![][service_group_3_1_1_3] 
    ![][service_group_3_1_1_4]

    基于标签的规则设置

    选择\[添加新规则\]按钮将会展开列表并显示设置选项. 如果有预定义的条件，它会一起显示。 如果没有选择标签值条件或在另一个服务组中设置了重复条件，则会显示一条警告消息并且规则不会保存。 
    ![][service_group_3_1_1_5]

    完成基于标签的规则设置

2.  为账户创建的服务组资源设置自动添加条件
    点击悬停鼠标出现的编辑按钮切换到编辑模式。

    ![][service_group_3_1_2_1] 
    在详细页面中输入规则编辑模式

    ![][service_group_3_1_2_2] 
    在服务组详细页面输入规则编辑模式


    为每个项目设置条件，在这种情况下，必须选择账户值条件。 
    ![][service_group_3_1_2_3] 
    ![][service_group_3_1_2_4]

    基于账户的规则设置


    选择\[添加新规则\]按钮展开列表并显示设置选项。如果有预定义的条件会一起显示。如果没有选择账户或在另一个服务组中设置了重复条件，则会显示一条警告消息并且规则不会被保存。 
    ![][service_group_3_1_2_5]

    完成基于账户的规则设置

3.  为用户手动创建的服务组资源设置自动添加条件。
    单击悬停鼠标时出现的编辑按钮切换到编辑模式。 
    ![][service_group_3_1_3_1]

    在详细页面视图输入规则编辑模式 
    ![][service_group_3_1_3_2]

    在服务组详细页面输入规则编辑模式


    为各个项目设置条件。 
    ![][service_group_3_1_3_3]

    手动创建的服务组规则设置页面


    选择\[添加新规则\]按钮将展开列表并显示设置选项。 如果有预定义的条件，将会一起显示。如果在另一个服务组中设置了重复条件，则会显示一条警告消息并且规则不会被保存。 
    ![][service_group_3_1_3_4]

    完成手动创建服务组的规则设置



您可以在任意时间自由添加和变更规则，并且可以开启和关闭规则。您也可以使用固定功能固定特定资源使其不受规则影响。

#### 手动添加资源

1.  点击服务组详细页面上的添加资源按钮，进入添加资源、智能搜索页面。 
    ![][service_group_3_2_1]

2.  使用智能搜索设置条件，从搜索结果中选择一个资源，然后单击“添加所选资源”按钮。 
    ![][service_group_3_2_2]

3.  您将被重定向到服务组的详细页面，并出现确认添加资源的弹出窗口，表示已经添加N个资源。 
    ![][service_group_3_2_3]


### 管理服务组

#### 设置默认视图

您可以在多个视图中设置一个标准默认视图。在资产和计量服务中，基于默认视图显示信息。

1.  您可以单击左侧菜单中的默认视图图标或单击视图详细页面的默认视图设置菜单选择默认视图。 
    ![][service_group_4_1_1]

    点击后将出现一个确认弹出窗口。点击确定按钮将选中的视图更改为默认视图。 
    ![][service_group_4_1_2]


#### 自动更新、开启、关闭

即使不删除规则，您也可以通过开启或关闭自动更新功能，设置是否让服务组受到规则条件的影响。

1.  在规则编辑模式下取消选中自动更新字段。 
    ![][service_group_4_2_1] 
    ![][service_group_4_2_2] 
    当自动更新关闭时，资源将不再按照规则条件进行分类。 如果您重新开启自动更新，则会根据规则条件自动分类。

#### 资源固定

您可以使用固定功能设置特定资源不受规则影响。

1.  固定流程可以通过检查要处理的资源一次完成，或者可以在状态字段中单独处理。 
    ![][service_group_4_3_1]

2.  如果您要固定多个资源，将出现一个通知弹出窗口，您单击确定，所选资源将进行固定处理并不再受规则影响。 
    ![][service_group_4_3_2]


#### 移除视图，类别，服务组

1.  移除视图
    单击查看详细页面上右上方菜单中的删除视图菜单（默认视图不能删除）。 
    ![][service_group_4_4_1_1]

    单击删除视图菜单，将出现删除确认弹出窗口。点击删除按钮删除选定的视图。 
    ![][service_group_4_4_1_2]

2.  移除类别
    单击将鼠标悬停在创建的类别名称上时出现的垃圾箱按钮。 
    ![][service_group_4_4_2_1]

    点击垃圾箱按钮，则会出现类别删除确认弹出窗口。 如果您单击删除按钮，所选类别将被删除，该类别中包含的服务组将被更改为未包含在该类别的服务组。 
    ![][service_group_4_4_2_2]

3.  移除服务组
    点击服务组详细页面上的删除服务组按钮。 
    ![][service_group_4_4_3_1]

    您也可以将鼠标移动到视图详细页面要删除的服务组上，然后单击“垃圾箱”按钮，或者选中要删除的服务组，然后单击“删除服务组”按钮来删除多个服务组。 
    ![][service_group_4_4_3_2]

    点击删除按钮，将出现一个确认弹出窗口。点击删除键删除服务组。 
    ![][service_group_4_4_3_3]





<!-- 이미지 모음 -->
[guide_service_portal_1]:  ./resource/guide_service_portal_1.png
[guide_service_portal_10]: ./resource/guide_service_portal_10.png
[guide_service_portal_11]: ./resource/guide_service_portal_11.png
[guide_service_portal_12]: ./resource/guide_service_portal_12.png
[guide_service_portal_13]: ./resource/guide_service_portal_13.png
[guide_service_portal_14]: ./resource/guide_service_portal_14.png
[guide_service_portal_15]: ./resource/guide_service_portal_15.png
[guide_service_portal_16]: ./resource/guide_service_portal_16.png
[guide_service_portal_17]: ./resource/guide_service_portal_17.png
[guide_service_portal_18]: ./resource/guide_service_portal_18.png
[guide_service_portal_19]: ./resource/guide_service_portal_19.png
[guide_service_portal_2]:  ./resource/guide_service_portal_2.png
[guide_service_portal_20]: ./resource/guide_service_portal_20.png
[guide_service_portal_21]: ./resource/guide_service_portal_21.png
[guide_service_portal_22]: ./resource/guide_service_portal_22.png
[guide_service_portal_23]: ./resource/guide_service_portal_23.png
[guide_service_portal_24]: ./resource/guide_service_portal_24.png
[guide_service_portal_25]: ./resource/guide_service_portal_25.png
[guide_service_portal_26]: ./resource/guide_service_portal_26.png
[guide_service_portal_27]: ./resource/guide_service_portal_27.png
[guide_service_portal_28]: ./resource/guide_service_portal_28.png
[guide_service_portal_29]: ./resource/guide_service_portal_29.png
[guide_service_portal_3]:  ./resource/guide_service_portal_3.png
[guide_service_portal_30]: ./resource/guide_service_portal_30.png
[guide_service_portal_31]: ./resource/guide_service_portal_31.png
[guide_service_portal_32]: ./resource/guide_service_portal_32.png
[guide_service_portal_33]: ./resource/guide_service_portal_33.png
[guide_service_portal_34]: ./resource/guide_service_portal_34.png
[guide_service_portal_35]: ./resource/guide_service_portal_35.png
[guide_service_portal_36]: ./resource/guide_service_portal_36.png
[guide_service_portal_37]: ./resource/guide_service_portal_37.png
[guide_service_portal_38]: ./resource/guide_service_portal_38.png
[guide_service_portal_39]: ./resource/guide_service_portal_39.png
[guide_service_portal_4]:  ./resource/guide_service_portal_4.png
[guide_service_portal_40]: ./resource/guide_service_portal_40.png
[guide_service_portal_5]:  ./resource/guide_service_portal_5.png
[guide_service_portal_6]:  ./resource/guide_service_portal_6.png
[guide_service_portal_7]:  ./resource/guide_service_portal_7.png
[guide_service_portal_8]:  ./resource/guide_service_portal_8.png
[guide_service_portal_9]:  ./resource/guide_service_portal_9.png

[service_group_2_1_1]:     ./resource/service_group_2_1_1.png
[service_group_2_1_1_1]:   ./resource/service_group_2_1_1_1.png
[service_group_2_1_1_2]:   ./resource/service_group_2_1_1_2.png
[service_group_2_1_1_3]:   ./resource/service_group_2_1_1_3.png
[service_group_2_1_1_4]:   ./resource/service_group_2_1_1_4.png
[service_group_2_1_1_5]:   ./resource/service_group_2_1_1_5.png
[service_group_2_1_1_6]:   ./resource/service_group_2_1_1_6.png
[service_group_2_1_2_1]:   ./resource/service_group_2_1_2_1.png
[service_group_2_1_2_2]:   ./resource/service_group_2_1_2_2.png
[service_group_2_1_2_3]:   ./resource/service_group_2_1_2_3.png
[service_group_2_1_2_4]:   ./resource/service_group_2_1_2_4.png
[service_group_2_1_2_5]:   ./resource/service_group_2_1_2_5.png
[service_group_2_2_1]:     ./resource/service_group_2_2_1.png
[service_group_2_2_2]:     ./resource/service_group_2_2_2.png
[service_group_2_2_3]:     ./resource/service_group_2_2_3.png
[service_group_2_2_4]:     ./resource/service_group_2_2_4.png
[service_group_2_2_5]:     ./resource/service_group_2_2_5.png
[service_group_2_2_6]:     ./resource/service_group_2_2_6.png
[service_group_2_3_1]:     ./resource/service_group_2_3_1.png
[service_group_2_3_2]:     ./resource/service_group_2_3_2.png
[service_group_2_3_3]:     ./resource/service_group_2_3_3.png
[service_group_2_3_4]:     ./resource/service_group_2_3_4.png
[service_group_2_3_5]:     ./resource/service_group_2_3_5.png
[service_group_2_3_6]:     ./resource/service_group_2_3_6.png
[service_group_3_1_1_1]:   ./resource/service_group_3_1_1_1.png
[service_group_3_1_1_2]:   ./resource/service_group_3_1_1_2.png
[service_group_3_1_1_3]:   ./resource/service_group_3_1_1_3.png
[service_group_3_1_1_4]:   ./resource/service_group_3_1_1_4.png
[service_group_3_1_1_5]:   ./resource/service_group_3_1_1_5.png
[service_group_3_1_2_1]:   ./resource/service_group_3_1_2_1.png
[service_group_3_1_2_2]:   ./resource/service_group_3_1_2_2.png
[service_group_3_1_2_3]:   ./resource/service_group_3_1_2_3.png
[service_group_3_1_2_4]:   ./resource/service_group_3_1_2_4.png
[service_group_3_1_2_5]:   ./resource/service_group_3_1_2_5.png
[service_group_3_1_3_1]:   ./resource/service_group_3_1_3_1.png
[service_group_3_1_3_2]:   ./resource/service_group_3_1_3_2.png
[service_group_3_1_3_3]:   ./resource/service_group_3_1_3_3.png
[service_group_3_1_3_4]:   ./resource/service_group_3_1_3_4.png
[service_group_3_2_1]:     ./resource/service_group_3_2_1.png
[service_group_3_2_2]:     ./resource/service_group_3_2_2.png
[service_group_3_2_3]:     ./resource/service_group_3_2_3.png
[service_group_4_1_1]:     ./resource/service_group_4_1_1.png
[service_group_4_1_2]:     ./resource/service_group_4_1_2.png
[service_group_4_2_1]:     ./resource/service_group_4_2_1.png
[service_group_4_2_2]:     ./resource/service_group_4_2_2.png
[service_group_4_3_1]:     ./resource/service_group_4_3_1.png
[service_group_4_3_2]:     ./resource/service_group_4_3_2.png
[service_group_4_4_1_1]:   ./resource/service_group_4_4_1_1.png
[service_group_4_4_1_2]:   ./resource/service_group_4_4_1_2.png
[service_group_4_4_2_1]:   ./resource/service_group_4_4_2_1.png
[service_group_4_4_2_2]:   ./resource/service_group_4_4_2_2.png
[service_group_4_4_3_1]:   ./resource/service_group_4_4_3_1.png
[service_group_4_4_3_2]:   ./resource/service_group_4_4_3_2.png
[service_group_4_4_3_3]:   ./resource/service_group_4_4_3_3.png
