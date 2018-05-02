---
service : admin
title   : Admin Service Portal
zh : true
multiLang:
    - ko : true
    - en : true
    - zh : false
...
<!-- TOC -->







# Admin Service Portal

查看正在使用服务平台的公司信息。


--------------------------------------------------------------------------------



## 客户管理

>   Admin Service Portal - *客户管理*

查看全部客户汇总信息和客户列表。
![][customer_customer01]

>   Admin Service Portal - 客户管理 - *摘要信息*
提供已激活客户总数、已禁用客户数量、实例数（EC2，VM，IDC-Server）和总用户数的信息。

![][customer_customer_summary]

1. 已激活的公司 : 当前激活的客户数量
2. 未激活的公司 : 当前禁用的客户数量
3. 全公司的实例和账户数 : 当前AWS-EC2，AZURE虚机和IDC服务器资源数量和账户数量
4. 用户总数 : 客户用户总数

>   Admin Service Portal - 客户管理 - *客户列表*

提供客户名称、用户数量、激活状态、付费或免费、帐户和资源信息以及服务使用状态。
![][customer_customer_list]

您可以点击列表中的公司名称进入详细页面。





### 公司信息

>   Admin Service Portal - 客户管理 - 细节屏幕 - *公司信息*

#### 公司信息

您可以查看和修改公司的基本信息。
![][customer_company01]

-   服务状况：指服务使用状态。分为付费、免费、无、和试用状态。如果是试用版，则显示试用日期和持续时间。
-   取消：公司选项卡上的所有修改将被取消。




#### 客户经理

注册MSP用户以管理客户。

![][customer_company02]





### 服务使用信息

>   Admin Service Portal - 客户管理 - 细节屏幕 - *服务使用信息*

您可以设置客户每项服务的使用情况。对于特定的服务，您可以通过选择用户数量和期限来注册付款方式。
![][customer_service02]





### 云账号

>   Admin Service Portal - 客户管理 - 细节屏幕 - *云账号*

请参阅服务门户中的“云账号指南”。







### 支付信息

>   Admin Service Portal - 客户管理 - 细节屏幕 - *支付信息*


#### 计费信息

1.  您将在每个月的20日，25日或最后一天按照您输入的付款信息被收取费用。
    ![][customer_billinginfo01]

2.  付款方式包括信用卡支付，非银行存款和银行转账。选择付款方式后，输入并保存每个项目的信息。
    ![][customer_billinginfo02]


#### 计费负责人&公司信息

![][customer_billinginfo03]

1.  您可以安排费用负责人联系相关费用和发放税务发票的信息。
2.  输入并保存费用负责人信息和税务发票信息






### 用户

>   Admin Service Portal - 客户管理 - 细节屏幕 - *用户*



#### 管理用户

1.  您可以查看相关客户处于邀请、激活和禁用状态的用户列表。
    ![][customer_user01]

2.  以下是用户状态

    +--------+------------+------------------------------------------------+
    |        | 用户状态   | 备注
    +========+============+================================================+
    | 已激活 | 激活       |
    +--------+------------+------------------------------------------------+
    | 未激活 | 停用       |
    +--------+------------+------------------------------------------------+
    | 邀请   | 邀请       | 您可以从用户管理弹出窗口再次发送注册邀请邮件 
    +--------+------------+------------------------------------------------+
    | 灭活   | 等待验证   | 您可以从用户管理弹出窗口再次发送验证邮件
    +--------+------------+------------------------------------------------+
    | 锁定   | 锁定       | 需要重置您的服务平台密码
    +--------+------------+------------------------------------------------+


3.  您可以查看和修改用户的详细信息。 
    ![][customer_user02]


#### 邀请用户

1.  点击 \[邀请用户\]。 
    ![][customer_user03]

2.  输入用户邮箱并在完成订阅后选择用户所属的用户组。订阅邮件将被发送给被邀请的用户。 
    ![][customer_user04]

    您不能邀请属于其他公司或已经被其他公司邀请的用户。

3.  您可以取消邀请或重新邀请。 
    ![][customer_user05]






### 用户组名称

>   Admin Service Portal - 客户管理 - *用户组名称*

请参阅服务门户中的“用户组指南”。




### 权限

>   Admin Service Portal - 客户管理 - *权限*

请参阅服务门户中的“用户组指南”。




### 客户统计

>   Admin Service Portal - 客户管理 - *客户统计*

1.  您可以按加入日期查看加入服务的客户统计数据。
2.  您可以在设置期间后单击 \[查看\] 按钮进行查看。
    ![][customer_statistics01]






### 组管理

>   Admin Service Portal - 客户管理 - *组管理*

1.  您可以分组相关客户。
2.  从左侧的列表中选择您想要的公司。
    ![][customer_companygroup01]

3.  点击\[修改公司\]或\[添加公司\]按钮。
    ![][customer_companygroup02]

4.  从左侧的列表中选择您想要管理的公司，然后移到右侧并保存。
    ![][customer_companygroup03]

5.  你可以看到客户被分组在公司下。 
    ![][customer_companygroup04]

6.  您可以通过单击管理用户权限链接来管理分组客户的公司组权限。 
    ![][customer_companygroup05]

7.  该示例表明公司MASTER(GUIDE)可以在公司集团权限内管理 MASTER(GUIDE)，MANAGED01(GUIDE)，MANAGED02(GUIDE)，MANAGED03(GUIDE)公司。





### 合作公司群组管理

>   Admin Service Portal - 客户管理- *合作公司群组管理*

1.  点击\[+\] 按钮创建新的合作伙伴组
    ![][customer_partner01]

2.  点击\[添加公司\]或\[修改公司\]按钮，从合作伙伴组添加/删除公司。 
    ![][customer_partner02]

3.  您可以在“计量管理”>“Azure”中检查创建的合作伙伴公司 
    ![][customer_partner03]








### 注册新客户

>   Admin Service Portal - 客户管理- *注册新客户*

您可以创建客户账户

1.  您可以输入客户信息
2.  使用管理员邮箱地址创建账户
    ![][customer_register01]

















--------------------------------------------------------------------------------



## MSP管理

>   Admin Service Portal - *MSP管理*

提供MSP总数，已激活客户数量，已停用客户数量，实例数量（EC2，虚机，IDC服务器）和MSP用户总数的信息。
![][msp_summary01]

提供MSP管理列表信息，MSP名称，MSP拥有的客户数量，用户总数，激活状态，帐户和资源信息以及服务使用状态。
此外，还提供“筛选和搜索”功能，以按照您想要的状态分别显示MSP公司。


### 基本信息

>   Admin Service Portal - MSP管理 - 细节屏幕 - *基本信息*

输入MSP服务的基本信息。您可以查看证书信息和服务域名。




#### 证书管理

1.  输入证书的密码，路径，注册日期和到期日期。
    ![][msp_defaultinfo02]

2.  输入过程中如果您想取消更改，请单击\[取消\]按钮返回上次保存的状态。
    ![][msp_defaultinfo03]

3.  点击\[保存\]按钮。保存的内容可以修改。 
    ![][msp_defaultinfo04]

4.  点击\[确认注册证书\]按钮。 
    ![][msp_defaultinfo05]

5.  证书注册完成后无法修改，请重新确认后再次注册。 
    ![][msp_defaultinfo06]



#### 域管理

管理MSP服务的域名。订阅MSP时输入的域名和别名将被使用。

1.  各项服务的域名示例根据订阅时注册的域名来显示。输入用于每项服务的域名和Cname。
    ![][msp_defaultinfo07]

2.  单击\[复制CNAME\]按钮将输入的Cname字段内容保存到剪贴板。
    ![][msp_defaultinfo08]

3.  输入过程中如果您想取消更改，请单击\[取消\]按钮返回上次保存的状态。
    ![][msp_defaultinfo09]

4.  点击\[保存\]按钮。可以保存修改的内容。
    ![][msp_defaultinfo10]

5.  点击\[确认注册域名\]按钮。域名注册后无法修改请再次检查后注册。
    ![][msp_defaultinfo11]






### 公司信息

>   Admin Service Portal - MSP管理 - *公司信息*


#### 公司信息

1.  您可以查看和修改公司的基本信息。
    ![][msp_company01]

    - 合同日期：指MSP服务合同日期。
    - 取消：公司选项卡上的所有修改将被取消。


#### MSP经理

登记MSP相关销售负责人。

1.  点击\[添加用户\]按钮。
    ![][msp_company03]

2.  选择并保存你想要的用户。
    ![][msp_company04]


### 服务使用信息

>   Admin Service Portal - MSP管理 - *服务使用信息*

1.  点击\[开始服务\]按钮启动MSP服务。
    ![][msp_service01]

2.  您可以查看相关MSP提供给客户的服务状态。您还可以查看每个服务的开始和结束日期。
    ![][msp_service02]


### 云

>   Admin Service Portal - MSP管理 - *云*

1.  您可以查看相关MSP提供给客户的云供应商的状态。您还可以查看每个云供应商的开始和结束日期。
    ![][msp_cloud01]

    取消：CLOUD选项卡上的所有修改都将被取消。

2.  当您激活“Azure CSP”时，服务平台提供Azure CSP账户注册功能
3.  当您激活“Azure CSP 订阅服务”时，服务平台提供Azure CSP注册功能




### MSP 状态

>   Admin Service Portal - MSP管理 - *MSP 状态*

1.  提供属于MSP的客户的资源信息和用户信息。
2.  您可以看到属于MSP的客户列表。您可以查看用户数量，云供应商和客户的资源信息，同时提供搜索功能。

    ![][msp_mspusage01]





### 支付信息

>   Admin Service Portal - MSP管理 - *支付信息*

![][msp_billinginfo03]

1.  您可以安排费用负责人联系相关费用和发放税务发票的信息。
2.  输入并保存费用负责人信息和税务发票信息。





### 权限

>   Admin Service Portal - MSP管理 - *权限*

您可以设置菜单权限来访问每个MSP公司。

![][msp_permission01]




### 管理员用户

>   Admin Service Portal - MSP管理 - *管理员用户*

请参阅管理服务门户中的“管理员用户指南”。





### 管理员用户组

>   Admin Service Portal - MSP管理 - *管理员用户组*

请参阅管理服务门户中的“管理员用户指南”。




### 站点管理

>   Admin Service Portal - MSP管理 - *站点管理*




#### 首页

>   Admin Service Portal - MSP管理 - 站点管理 - *首页*

1.  您可以注册和修改网站相关设置。您可以设置logo作为图像或文字显示在网站上，并设置偏好图标。 

    ![][msp_sitemngt02]
    使用IMAGE管理商标

    ![][msp_sitemngt03]
    使用TEXT管理商标

2.  设置网站页脚信息。您可以为每个网站注册代表，地址，电话号码等。
    ![][msp_sitemngt04]

3.  输入网站页脚的技术支持信息。
    ![][msp_sitemngt05]


#### 条款

>   Admin Service Portal - MSP管理 - 站点管理 - *条款*

您可以注册隐私政策和使用条款。您可以更新条款和版本并将条款应用到网站。适用条款在注册服务时显示。
![][msp_sitemngt06]




#### 白皮书

>   Admin Service Portal - MSP管理 - 站点管理 - *白皮书*

1.  您可以保存包含服务描述的白皮书图像。
2.  您可以为每项服务注册图像。 提供基本的图像。
    ![][msp_sitemngt07]











--------------------------------------------------------------------------------















## CSP Operator

>   Admin Service Portal - *CSP Operator*

CSP运营商可在此菜单中确认申请CSP的客户。 当申请处于待定状态或已确认状态时，将发送邮件给所有收件人。
建议您在“管理员用户管理菜单”中为CSP运营商创建单独的管理员用户组后，管理用户。

您可以查看CSP运营商需要确认的申请CSP的公司列表。

>   Admin Service Portal - CSP Operator - *摘要信息*

![][operator_summary]

1. 提交申请 : 客户已完成CSP申请
2. 保留审批 : 等待CSP运营商批准（缺少信息或存在错误）
3. 公司信息确认完毕 : CSP运营商已确认申请信息

>   Admin Service Portal - CSP Operator - *客户列表*

您可以使用“筛选”和“搜索”功能查看所需条件的客户

![][operator_list]

您可点击列表中的公司名称进入详细页面





### CSP申请状态

>   Admin Service Portal - CSP Operator - 细节屏幕 - *CSP申请状态*

您可以更改客户的CSP申请状态。
确认公司信息后，将自动在微软合作伙伴中心注册CSP帐户。

**申请状态发生变更时，邮件将被发送到每个状态的邮件收件人。**

<table>
    <tbody>
        <tr>
            <th>状态</th>
            <th>收件人</th>
            <th>内容</th>
        </tr>
        <tr>
            <td><b>保留审批</b></td>
            <td>申请人</td>
            <td>等待原因</td>
        </tr>
        <tr>
            <td rowspan="2"><b>公司信息确认完毕</b></td>
            <td>CSP Operator</td>
            <td>CSP申请信息</td>
        </tr>
        <tr>
            <td>CSP销售负责人</td>
            <td>CSP申请信息</td>
        </tr>
    </tbody>
</table>





#### 提交申请

1.  以下是在服务门户中完成申请的公司状态
    根据公司信息的确认状态，您可以将状态更改为\[待定\]或\[已确认公司信息\]。
    ![][operator_status01]


#### 保留审批

1.  如果在确认公司信息时出现问题，请点击\[待定\]按钮来否决申请。
    ![][operator_status02]

2.  您必须输入否决申请的原因
    申请否决原因会以邮件形式通知到申请人，您可以告知他们需要补充添加的信息。
    ![][operator_holding01]

3.  确认编辑完成客户的公司信息后，点击\[确认\]按钮完成公司信息确认。
    ![][operator_status03]


#### 公司信息确认完毕

1.  确认公司信息后，将自动在微软合作伙伴中心注册CSP账户，注册的CSP账户信息将发送给客户。
2.  邮件通知客户注册的销售负责人：公司信息已经确认。











### CSP申请信息

>   Admin Service Portal - CSP Operator - 细节屏幕 - *CSP申请信息*

您可以更改CSP申请信息。
![][operator_joininfo01]

您必须登记“Azure CSP订阅用户”公司的管理员帐户，“Azure CSP新申请人”公司则不需要管理员帐户。











### CSP销售负责人

>   Admin Service Portal - CSP Operator - 细节屏幕 - *CSP销售负责人*

您可以指定客户的CSP销售负责人。

**只有获得CSP销售负责人许可的用户才能被任命为CSP销售负责人。 在任命前，请检查用户是否有在“管理员用户管理菜单”中选择CSP销售负责人菜单的权限。**

![][operator_manager01]


















--------------------------------------------------------------------------------









## CSP销售负责人

>   Admin Service Portal - *CSP销售负责人*

CSP运营商可在此菜单中查看请客户CSP申请状态，当申请是待定或已确认状态时发送邮件给所有收件人。
建议您在“管理员用户管理菜单”中为CSP销售负责人创建单独的管理员用户组之后管理用户。

您可以查看CSP销售负责人需要确认的申请CSP的公司名单。

>   Admin Service Portal - CSP销售负责人 - *摘要信息*

![][sales_summary]

1. 条款信息输入中 : CSP运营商已确认申请信息
2. 保留审批 : 等待CSP销售负责人批准
3. 完成注册 : 已完成客户的CSP申请注册

>   Admin Service Portal - CSP销售负责人 - *客户列表*

您可以使用“筛选”和“搜索”功能查看所需条件的客户
![][sales_list]

您可点击列表中的公司名称进入详细页面





### CSP申请状态

>   Admin Service Portal - CSP销售负责人 - 细节屏幕 - *CSP申请状态*

您可以更改客户的CSP申请状态。
旦您完成注册，您将有权限免费使用计量服务。

<table>
    <tbody>
        <tr>
            <th>状态</th>
            <th>收件人</th>
            <th>内容</th>
        </tr>
        <tr>
            <td><b>保留审批</b></td>
            <td>申请人</td>
            <td>等待原因</td>
        </tr>
        <tr>
            <td rowspan="3"><b>完成注册</b></td>
            <td>CSP Operator</td>
            <td>CSP申请信息</td>
        </tr>
        <tr>
            <td>CSP销售负责人</td>
            <td>CSP申请信息</td>
        </tr>
        <tr>
            <td>申请人</td>
            <td>Azure CSP Account Info</td>
        </tr>
    </tbody>
</table>





#### 条款信息输入中

CSP运营商已经确认了申请信息。
根据合同信息输入状态，可以将状态更改为\[待定\]或\[完成注册\]。
![][sales_status01]


#### 保留审批

1.  如果在输入合同信息时出现问题，请单击\[待定\]按钮来否决申请。
    ![][sales_status02]

2.  您必须输入否决申请的原因
    申请否决原因会以邮件形式通知到申请人，您可以告知他们需要补充添加的信息。
    ![][sales_holding01]

3.  输入合同信息后，点击\[完成注册\]按钮完成客户的CSP注册。
    ![][sales_status03]


#### 完成注册

1.  一旦您完成注册，您将有权限免费使用计量服务。

    <table>
        <tbody>
            <tr>
                <th></th>
                <th>메뉴</th>
                <th>可用性</th>
            </tr>
            <tr>
                <td rowspan="5"><b>METERING</b></td>
                <td>仪表盘</td>
                <td>可用的</td>
            </tr>
            <tr>
                <td>账单</td>
                <td>可用的</td>
            </tr>
            <tr>
                <td>预算</td>
                <td>可用的</td>
            </tr>
            <tr>
                <td>支付与折扣</td>
                <td>可用的</td>
            </tr>
            <tr>
                <td>报告</td>
                <td>可用的</td>
            </tr>
        </tbody>
    </table>





2.  通过邮件通知CSP运营商已经完成客户销售负责人登记和申请人注册。





### CSP申请信息

>   Admin Service Portal - CSP销售负责人 - 细节屏幕 - *CSP申请信息*

您可以更改CSP申请信息。
![][sales_joininfo01]

您必须登记“Azure CSP订阅用户”公司的管理员帐户，“Azure CSP新申请人”公司则不需要管理员帐户。





### CSP销售负责人

>   Admin Service Portal - CSP销售负责人 - 细节屏幕 - *CSP销售负责人*

您可以指定客户CSP销售负责人。
**只有获得CSP销售负责人许可的用户才能被任命为CSP销售负责人。在任命前，请检查用户是否有在“管理员用户管理菜单”中选择CSP销售负责人菜单的权限。**

![][sales_manager01]












--------------------------------------------------------------------------------








## 公司信息管理

>   Admin Service Portal - *公司信息管理*

提供公司的客户数量，客户用户数量，资源信息（EC2，VM，IDC-Server）和账户信息，并提供当前使用的服务卡类型列表。
![][company_summary01]




### 公司资料 / 基本信息

>   Admin Service Portal - 公司信息管理 - 公司资料 - *基本信息*

#### 证书管理

输入MSP服务的基本信息。您可以查看证书信息和服务域名。

1.  输入证书的密码，路径，注册日期和到期日期。
    ![][company_basicinfo02]

2.  点击\[保存\]按钮。保存的内容可以修改。
    ![][company_basicinfo04]

3.  点击\[确认注册证书\]按钮。
    ![][company_basicinfo05]

4.  证书注册完成后无法修改，请重新确认后再次注册。
    ![][company_basicinfo06]





#### 域管理

管理MSP服务的域名。订阅MSP时输入的域名和别名将被使用。

1.  各项服务的域名示例根据订阅时注册的域名来显示。输入用于每项服务的域名和Cname。
    ![][company_basicinfo07]

2.  单击\[复制CNAME\]按钮将输入的Cname字段内容保存到剪贴板。 
    ![][company_basicinfo08]

3.  输入过程中如果您想取消更改，请单击\[取消\]按钮返回上次保存的状态。 
    ![][company_basicinfo09]

4.  点击\[保存\]按钮。可以保存修改的内容。 
    ![][company_basicinfo10]

5.  点击\[确认注册域名\]按钮。域名注册后无法修改请再次检查后注册。 
    ![][company_basicinfo11]





### 公司资料 / 公司信息

>   Admin Service Portal - 公司信息管理 - 公司资料 - *公司信息*

#### 公司信息

1.  您可以查看和修改公司的基本信息。

    ![][company_company01]

    \- 合同状态：指MSP服务合同日期。 - 取消：公司选项卡上的所有修改将被取消。


### 服务使用信息

>   Admin Service Portal - 公司信息管理 - 公司资料 - *服务使用信息*

登记MSP相关销售负责人。
![][company_service01]






### 云

>   Admin Service Portal - 公司信息管理 - 公司资料 - *云*

您可以查看已登录MSP用户提供给客户的云供应商的状态。您还可以查看每个云供应商的开始和结束日期。
![][company_cloud01]






### 支付信息

>   Admin Service Portal - 公司信息管理 - 公司资料 - *支付信息*

![][company_billinginfo01]

1.  您可以安排费用负责人联系相关费用和发放税务发票的信息。
2.  输入并保存费用负责人信息和税务发票信息。





### 首页

>   Admin Service Portal - 公司信息管理 - 站点管理 - *首页*

1.  您可以注册和修改网站相关设置。您可以设置logo作为图像或文字显示在网站上，并设置偏好图标。
    ![][company_sitemngt02]

    使用IMAGE管理商标
    ![][company_sitemngt03]

    使用TEXT管理商标

2.  设置网站页脚信息。您可以为每个网站注册代表，地址，电话号码等。
    ![][company_sitemngt04]

3.  输入网站页脚的技术支持信息。
    ![][company_sitemngt05]





### 条款

>   Admin Service Portal - 公司信息管理 - 站点管理 - *条款*

1.  您可以注册隐私政策和使用条款。您可以更新条款和版本并将条款应用到网站。适用条款在注册服务时显示。

    ![][company_sitemngt06]






### 白皮书

Admin Service Portal - 公司信息管理 - 站点管理 - *白皮书*

1.  您可以保存包含服务描述的白皮书图像。
2.  您可以为每项服务注册图像。 提供基本的图像。
    ![][company_sitemngt07]













--------------------------------------------------------------------------------












## 管理员用户

>   Admin Service Portal - *管理员用户*

您可以编辑注册的管理员用户并管理他们的权限。





### 注册管理员权限

>   Admin Service Portal - 管理员用户 - *管理员用户列表*

#### 注册管理员权限

1.  点击管理员用户列表中的\[注册管理员权限\]。
    ![][adminuser_usergroup01]

2.  将出现\[注册管理权限\]弹出窗口。
    ![][adminuser_userlist03]

    您将在左侧的“所有用户”下看到在MSP下没有管理权限的激活用户;管理员用户有访问管理网站的权利。

3.  在左侧的“所有用户”中选择您想要注册为管理员的用户。
4.  在右上角的管理员用户组列表中，选择所选用户所属的管理员组，然后单击“添加”按钮。
    ![][adminuser_userlist04]





#### 编辑用户详情

1.  您可以查看和编辑用户的基本信息。
2.  您可以删除用户的管理员权限。
    ![][adminuser_userlist05]





### 注册管理员权限

>   Admin Service Portal - 管理员用户 - *编辑管理员用户*

#### 注册管理员权限

1.  点击管理员用户列表中的\[注册管理员权限\]。
    ![][adminuser_usergroup02]

2.  将出现\[注册管理权限\]弹出窗口。 
    ![][adminuser_userlist03]

    您将在左侧的“所有用户”下看到在MSP下没有管理权限的激活用户;管理员用户有访问管理网站的权利。

3.  在左侧的“所有用户”中选择您想要注册为管理员的用户。 
    ![][adminuser_userlist04]

4.  在右上角的管理员用户组列表中，选择所选用户所属的管理员组，然后单击“添加”按钮。




#### 编辑管理员用户

1.  点击\[编辑管理员用户组\]按钮。 
    ![][adminuser_usergroup03]

2.  编辑管理员用户组的弹出窗口会出现。 
    ![][adminuser_usergroup04]

    您将在左侧的“所有用户”下看到在MSP下没有管理权限的激活用户;而管理员用户有访问管理网站的权利。

3.  请在左侧的“所有用户”中选择要注册为管理员的用户，然后单击“添加”按钮注册管理员用户。




#### 移动管理员用户组

1.  点击\[移动组\]按钮。
    ![][adminuser_usergroup05]

2.  选择您想要的管理员组并申请。 
    ![][adminuser_usergroup06]


#### 编辑用户详情

1.  您可以查看和编辑用户的基本信息。
2.  您可以删除用户的管理员权限。 
    ![][adminuser_userlist05]



















--------------------------------------------------------------------------------




















## 客户支持

>   Admin Service Portal - *客户支持*





### 通知管理

![][support_support01]

>   Admin Service Portal - 客户支持 - *通知管理*





#### 查看列表

1.  注册通知
    您可以点击左上角的卡袋来添加新的通知。

2.  查看更多通知
    您可以点击显示的通知查看详细信息。




#### 查看更多内容

此窗格用于查看从列表中选择的通知的详细信息。 它支持标题，注册日期，浏览次数，详情查看和附件下载功能。
![][support_support02]

1.  删除通知
    删除查询到的通知。

2.  修改通知
    转到窗格以修改查询到的通知。

3.  查看列表
    转到列表视图窗格。





#### 注册/修改

注册新通知，或修改已注册通知。

![][support_support03]

1.  附加文件
    添加附件到通知。只能添加限定文件名文件，如文档和图片文件。

2.  预览
    您可以通过预览窗格预览注册后帖子的形式。

3.  取消注册
    取消通知注册/修改并转到“查看列表”窗格。

4.  注册/修改
    完成通知注册/修改，并转到查看已注册/修改帖子详细信息窗格。



















--------------------------------------------------------------------------------












## 活动

>   Admin Service Portal - 活动 - *活动管理*

您可以查看已注册的活动列表信息。
![][campaign_campaign01]

提供活动名称、标题、发送时间、状态、发件人、创建者以及收件人数量。

-   状态：显示发送成功、预约发送、保存草稿、取消发送和发送失败的状态。
-   创建：您可以转到创建活动页面。
-   您可以单击列表中的“查看详细信息”按钮来激活查看详细信息弹出窗口。




### 活动管理

#### 查看详情

您可以查询、修改、删除该活动的详细内容

1.  点击查看详情按钮。
    ![][campaign_campaign02]

2.  您可以查看、修改和删除相关活动详细信息。
    ![][campaign_campaign03]

    1. 删除：删除已注册的活动。
    2. 修改：转到可以编辑已注册的活动窗格。
    3. 确认：您可以关闭查看详细信息弹出窗口。


#### 创建

您可以确认已注册活动列表信息

1.  点击创建活动邮件按钮。
    ![][campaign_campaign04]


3.  您可以创建活动邮件。
    ![][campaign_campaign05]

    1. 发件人列表：允许您搜索和选择发件人的弹出窗口被激活。
    2. 搜索收件人：允许您搜索和选择收件人的弹出窗口被激活。
    3. 设置计划交付：一个允许您选择发送日期和时间的弹出窗口被激活。
    4. 加载模板：加载保存的模板并将其显示在编辑器中。
    5. 保存草稿：将您创建的活动保存为草稿。
    6. 预览：您可以通过弹出窗口预览创建的活动。
    7. 取消：取消您正在创建的活动并返回到活动列表页面。
    8. 发送：发送您创建的活动。


#### 发件人列表

您可以检查注册的发件人

1.  点击 \[发件人列表\] 按钮。
    ![][campaign_campaign06]


2.  您可以添加并选择发件人。
    ![][campaign_campaign07]

    1. 添加发件人：登记您输入的发件人。
    2. 取消：取消操作并关闭弹出窗口。
    3. 确认：在“创建”窗格中反映选定的发件人并关闭弹出窗口。


####  搜索收件人

1.  点击 \[搜索收件人\] 按钮。
    ![][campaign_campaign08]


3.  您可以查询客户列表并查看所选客户的用户列表。
    ![][campaign_campaign09]

    1.  客户列表
        1. 您可以在单个窗格中看到所选客户数和总客户数。
        2. 查看条件：活动状态、服务状态和加入日期
        3. 请求：搜索与查看相应条件的客户。
        4. 全选：您可以全选所有查询到的客户。

    2.  客户用户列表
        1. 查看属于所选客户的用户。
        2. 查看条件：公司、用户组
        3. 请求：按查询条件搜索用户
        4. 输入搜索词：在查询到的用户列表中再次搜索输入的搜索词
        5. 取消：取消操作并关闭弹出窗口。
        6. 确认：在创建窗格上反映选定的客户用户，并关闭弹出窗口。



#### 设定发送预约

1.  点击“设定发送预约”按钮。
    ![][campaign_campaign10]


3.  您可以设定预约发送的时间。
    ![][campaign_campaign11]

    1. 基准时间：选择基准时间。
    2. 预约时间：选定日期、小时和分钟。
    3. 取消：取消操作并关闭弹出窗口。
    4. 确认：在创建窗格上反映操作内容并关闭弹出窗口。





#### 预览

1.  点击 \[预览\] 按钮。
    ![][campaign_campaign12]

2.  管理邮件自动发送
    ![][campaign_campaign13]








### 管理邮件自动发送

>   Admin Service Portal - 活动 - *管理邮件自动发送*

1.  发送邮件时，您可以选择要附加的logo和公司名称。
    ![][campaign_campaign14]

    保存：保存内容。


2.  通过文件对话框附加图像文件。
    ![][campaign_campaign15]

    附件：上传小于等于5MB的图像文件（jpg，gif，bmp，png）。

















<!-- 이미지 모음 -->
[customer_customer01]:       ./resource/customer_customer01.jpg
[customer_customer_summary]: ./resource/customer_customer_summary.jpg
[customer_customer_list]:    ./resource/customer_customer_list.jpg
[customer_company01]:        ./resource/customer_company01.jpg
[customer_company02]:        ./resource/customer_company02.jpg
[customer_service02]:        ./resource/customer_service02.jpg
[customer_billinginfo01]:    ./resource/customer_billinginfo01.jpg
[customer_billinginfo02]:    ./resource/customer_billinginfo02.jpg
[customer_billinginfo03]:    ./resource/customer_billinginfo03.jpg
[customer_user01]:           ./resource/customer_user01.jpg
[customer_user02]:           ./resource/customer_user02.jpg
[customer_user03]:           ./resource/customer_user03.jpg
[customer_user04]:           ./resource/customer_user04.jpg
[customer_user05]:           ./resource/customer_user05.jpg
[customer_statistics01]:     ./resource/customer_statistics01.jpg
[customer_companygroup01]:   ./resource/customer_companygroup01.jpg
[customer_companygroup02]:   ./resource/customer_companygroup02.jpg
[customer_companygroup03]:   ./resource/customer_companygroup03.jpg
[customer_companygroup04]:   ./resource/customer_companygroup04.jpg
[customer_companygroup05]:   ./resource/customer_companygroup05.jpg
[customer_partner01]:        ./resource/customer_partner01.jpg
[customer_partner02]:        ./resource/customer_partner02.jpg
[customer_partner03]:        ./resource/customer_partner03.jpg
[customer_register01]:       ./resource/customer_register01.jpg

[msp_summary01]:             ./resource/msp_summary01.jpg
[msp_defaultinfo02]:         ./resource/msp_defaultinfo02.jpg
[msp_defaultinfo03]:         ./resource/msp_defaultinfo03.jpg
[msp_defaultinfo04]:         ./resource/msp_defaultinfo04.jpg
[msp_defaultinfo05]:         ./resource/msp_defaultinfo05.jpg
[msp_defaultinfo06]:         ./resource/msp_defaultinfo06.jpg
[msp_defaultinfo07]:         ./resource/msp_defaultinfo07.jpg
[msp_defaultinfo08]:         ./resource/msp_defaultinfo08.jpg
[msp_defaultinfo09]:         ./resource/msp_defaultinfo09.jpg
[msp_defaultinfo10]:         ./resource/msp_defaultinfo10.jpg
[msp_defaultinfo11]:         ./resource/msp_defaultinfo11.jpg

[msp_company01]:             ./resource/msp_company01.jpg
[msp_company03]:             ./resource/msp_company03.jpg
[msp_company04]:             ./resource/msp_company04.jpg
[msp_service01]:             ./resource/msp_service01.jpg
[msp_service02]:             ./resource/msp_service02.jpg
[msp_cloud01]:               ./resource/msp_cloud01.jpg
[msp_mspusage01]:            ./resource/msp_mspusage01.jpg
[msp_billinginfo03]:         ./resource/msp_billinginfo03.jpg
[msp_permission01]:          ./resource/msp_permission01.jpg
[msp_sitemngt02]:            ./resource/msp_sitemngt02.jpg
[msp_sitemngt03]:            ./resource/msp_sitemngt03.jpg
[msp_sitemngt04]:            ./resource/msp_sitemngt04.jpg
[msp_sitemngt05]:            ./resource/msp_sitemngt05.jpg
[msp_sitemngt06]:            ./resource/msp_sitemngt06.jpg
[msp_sitemngt07]:            ./resource/msp_sitemngt07.jpg

[operator_summary]:          ./resource/operator_summary.jpg
[operator_list]:             ./resource/operator_list.jpg
[operator_status01]:         ./resource/operator_status01.jpg
[operator_status02]:         ./resource/operator_status02.jpg
[operator_holding01]:        ./resource/operator_holding01.jpg
[operator_status03]:         ./resource/operator_status03.jpg
[operator_joininfo01]:       ./resource/operator_joininfo01.jpg
[operator_manager01]:        ./resource/operator_manager01.jpg

[sales_summary]:             ./resource/sales_summary.jpg
[sales_list]:                ./resource/sales_list.jpg
[sales_status01]:            ./resource/sales_status01.jpg
[sales_status02]:            ./resource/sales_status02.jpg
[sales_holding01]:           ./resource/sales_holding01.jpg
[sales_status03]:            ./resource/sales_status03.jpg
[sales_joininfo01]:          ./resource/sales_joininfo01.jpg
[sales_manager01]:           ./resource/sales_manager01.jpg

[company_summary01]:         ./resource/company_summary01.jpg
[company_basicinfo02]:       ./resource/company_basicinfo02.jpg
[company_basicinfo04]:       ./resource/company_basicinfo04.jpg
[company_basicinfo05]:       ./resource/company_basicinfo05.jpg
[company_basicinfo06]:       ./resource/company_basicinfo06.jpg
[company_basicinfo07]:       ./resource/company_basicinfo07.jpg
[company_basicinfo08]:       ./resource/company_basicinfo08.jpg
[company_basicinfo09]:       ./resource/company_basicinfo09.jpg
[company_basicinfo10]:       ./resource/company_basicinfo10.jpg
[company_basicinfo11]:       ./resource/company_basicinfo11.jpg
[company_company01]:         ./resource/company_company01.jpg
[company_service01]:         ./resource/company_service01.jpg
[company_cloud01]:           ./resource/company_cloud01.jpg
[company_billinginfo01]:     ./resource/company_billinginfo01.jpg
[company_sitemngt02]:        ./resource/company_sitemngt02.jpg
[company_sitemngt03]:        ./resource/company_sitemngt03.jpg
[company_sitemngt04]:        ./resource/company_sitemngt04.jpg
[company_sitemngt05]:        ./resource/company_sitemngt05.jpg
[company_sitemngt06]:        ./resource/company_sitemngt06.jpg
[company_sitemngt07]:        ./resource/company_sitemngt07.jpg

[adminuser_usergroup01]:     ./resource/adminuser_usergroup01.jpg
[adminuser_userlist03]:      ./resource/adminuser_userlist03.jpg
[adminuser_userlist04]:      ./resource/adminuser_userlist04.jpg
[adminuser_userlist05]:      ./resource/adminuser_userlist05.jpg
[adminuser_usergroup02]:     ./resource/adminuser_usergroup02.jpg
[adminuser_userlist03]:      ./resource/adminuser_userlist03.jpg
[adminuser_userlist04]:      ./resource/adminuser_userlist04.jpg
[adminuser_usergroup03]:     ./resource/adminuser_usergroup03.jpg
[adminuser_usergroup04]:     ./resource/adminuser_usergroup04.jpg
[adminuser_usergroup05]:     ./resource/adminuser_usergroup05.jpg
[adminuser_usergroup06]:     ./resource/adminuser_usergroup06.jpg
[adminuser_userlist05]:      ./resource/adminuser_userlist05.jpg

[support_support01]:         ./resource/support_support01.jpg
[support_support02]:         ./resource/support_support02.jpg
[support_support03]:         ./resource/support_support03.jpg

[campaign_campaign01]:       ./resource/campaign_campaign01.jpg
[campaign_campaign02]:       ./resource/campaign_campaign02.jpg
[campaign_campaign03]:       ./resource/campaign_campaign03.jpg
[campaign_campaign04]:       ./resource/campaign_campaign04.jpg
[campaign_campaign05]:       ./resource/campaign_campaign05.jpg
[campaign_campaign06]:       ./resource/campaign_campaign06.jpg
[campaign_campaign07]:       ./resource/campaign_campaign07.jpg
[campaign_campaign08]:       ./resource/campaign_campaign08.jpg
[campaign_campaign09]:       ./resource/campaign_campaign09.jpg
[campaign_campaign10]:       ./resource/campaign_campaign10.jpg
[campaign_campaign11]:       ./resource/campaign_campaign11.jpg
[campaign_campaign12]:       ./resource/campaign_campaign12.jpg
[campaign_campaign13]:       ./resource/campaign_campaign13.jpg
[campaign_campaign14]:       ./resource/campaign_campaign14.jpg
[campaign_campaign15]:       ./resource/campaign_campaign15.jpg

