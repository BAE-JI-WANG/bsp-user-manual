---
service : asset 
title   : Asset Management
zh : true
...

<!-- TOC -->

# 资产管理

资产管理可以看到目前环境的规模，在云上使用了那些产品，业务组的使用情况及费用， 使用情况，性能，并可以导出相应的报告


--------------------------------------------------------------------------------



## 仪表盘

在仪表界面，可以看到的情况，使用了多少的主机和数据库，以及在云使用了那些产品的  整体的情况，包括使用量，在仪表盘界面就可以一目了然。 

![][asset_dashboard_1] 
![][asset_dashboard_2]
![][asset_dashboard_3]
![][asset_dashboard_4]

在云服务商，可以选择想要查看的云服务商和账户的使用情况，方便统计各个云厂商的使用情况。
![][asset_dashboard_5]


--------------------------------------------------------------------------------



## 业务组

业务组根据原先划分的业务组，可以看到各个业务组整体的资源情况及费用，同时可以根据云服务商进行筛选，
查看不同服务商使用的情况及费用。如果需要添加和调整业务组点击“管理服务组”，就会跳转到业务组修改配置界面进行修改。

![][asset_service_group_1]


--------------------------------------------------------------------------------


## 使用量

使用量，可以查看云环境具体的状态，地区，类型规格等详细的信息，并且能导出EXCEL和PDF格式的报表，保证了整个云环境的一致性。

![][asset_usage_current]

智能搜索根据常用的关键字，提供快速智能的搜索，搜索出想要获得的数据，点击“隐藏”按钮查看搜索结果。

![][asset_usage_intelligent]


--------------------------------------------------------------------------------

## 性能
性能根据云服务商提供的API，调用API获的性能方面的数据CPU、内存、磁盘数据，在我们的性能界面就直接可以看到性能，
可以根据分类查看不同类型的性能，同时也能智能搜索和支持报表导出。

![][asset_performance_current]

--------------------------------------------------------------------------------


## 报告

为您提供报告模板，您可以下载已创建的报告。

>	资产管理 > *报告*

![][asset_report]

### 报告模板

提供如下列表中的三种类型的报告模板
`摘要`, `用途`, `性能`

单击报告模板，右侧将会出现菜单列表.

#### 报告信息
设定报告时间段并选择报告文件格式后，您可以xls或pdf格式的文件。

#### Log
显示所选报告模板的报告下载历史记录。您可以再次下载已创建的报告。

#### 订阅

用户可以通过注册邮件订阅所需的报告。报告类型有三种：摘要，
用途和性能。您可以指定您想要的订阅类型（每日，每周，每月）和您希望收到订阅的时间。
报告订阅列表中包含您自己创建的订阅，以及其他人使用[订阅设置菜单]权限将您指定为订阅者的订阅。
您可以创建，删除和修改自己创建的订阅列表，但您仅能查看其他人使用[订阅设置菜单]将您指定为订阅者的订阅。

1.  创建新的订阅
    ![][asset_report_subscribe_tab_create]

    您可以通过输入或选择[订阅名称], [文件格式], [语言], [标准时间], [订阅周期],和[时间]来创建一个
    新的订阅。创建订阅时显示的默认订阅名称由报告名称，周期和语言设置组成。相同的报告模板不能设置相同的
    周期。

2.  编辑订阅
    ![][asset_report_subscribe_tab_edit]

    您可以编辑[订阅名称], [文件格式], [语言], [标准时间], [订阅周期],和[时间]。
    相同的报告模板不能设置相同的周期。



--------------------------------------------------------------------------------


## 报告订阅

我们为所有使用资产和计量服务以及有报告订阅菜单编辑权限的客户提供报告自
动发送功能。报告订阅功能允许您创建报告订阅或通过编辑和删除进行管理，和查看每个订阅的历史记录以及下载
已发送的文件。另外，它还提供创建或删除外部电子邮件和所需电子邮件的收件人管理功能。在创建/编辑订阅时可
以指定收件人。 “历史记录”选项卡允许您查看过去的发送历史记录，包括已删除订阅的发送历史。

>	资产管理 > *订阅设置*


### 订阅

>	资产管理 > 报告订阅 > *订阅*

可通过报告类型(概要, 用途，性能)管理订阅，在创建订阅时可以指定发送周期
（每日，每周，每月）语言和时间等选项。您可以在订阅列表中查看订阅名称、周期、收件人信息和最近发送日期等信息。
同时您还可以新建订阅或编辑和删除订阅。

![][asset_subscribe_subscriptionlist_list]



#### 创建订阅 
您可以参考四步指南弹窗指导新建订阅。在步骤1、2、3中，您可以指定订阅
信息和收件人。在步骤4中，您可以确认您指定的信息并更改订阅名称。


1.  新建订阅步骤1
    -	根据选定的报告类型(概要, 用途， 性能), 您可以查看当前创建的订阅名称和订阅周期。
    -	A资产报告文件提供PDF和Excel两种格式，您可以选择您所需的文件格式。
    -	您可以通过语言选择功能指定要发送的邮件模板的语言。支持中文、韩文、英文三种语言。
    -	根据报告类型最多可以创建5个订阅。
        ![][asset_subscribe_subscriptionlist_list_create_step1]

2.  新建订阅步骤2
    -	选择订阅周期和发送时间。
    -	报告发送周期可设置为每日、每周或每月。
    -	如果您想每日收到订阅报告，请在每日选项上选择时间。.
    -	如果您想每周收到订阅报告，请在每周选项上选择日期和时间。
    -	如果您想每月收到订阅报告，请在每月选项上选择日期和时间。
    -	如果您指定报告发送日期为每月的31号，则没有31号的月份将在该月的最后一天发送。
        ![][asset_subscribe_subscriptionlist_list_create_step2]

3.  新建订阅步骤3
    -	在步骤3中，您可以指定收件人。共有两种类型的收件人列表，分为拥有服务门户访问权限的企业用户列表，和手动注册的“注册收件人”用户列表。
    -	您最多可以设置10个收件人。
        ![][asset_subscribe_subscriptionlist_list_create_step3]

4.  新建订阅步骤4
    -	在最后一步中，您可以编辑已创建的默认订阅名称。
    -	检查信息设置，如果您需要重新编辑信息，点击上一步按钮进行编辑。
        ![][asset_subscribe_subscriptionlist_list_create_step4]


#### 编辑订阅

如果您需要编辑已创建的订阅，点击订阅列表图标下方的编辑按钮使用编辑
弹窗进行编辑。编辑弹窗显示当前选中的订阅信息。您可以选择需要的订阅信息并点击编辑按钮完成编辑，或取消
编辑撤回修改。

![][asset_subscribe_subscriptionlist_list_edit]
![][asset_subscribe_subscriptionlist_list_edit_popup]

#### 删除订阅

-	如果您不再需要订阅，请点击下图中的“X”按钮删除订阅。
-	在删除订阅之前，请检查您是否要再次删除它。 点击“删除”按钮完成删除。
-	如果已经发送，您可以从历史记录选项卡中检查已删除订阅的发送历史记录 

![][asset_subscribe_subscriptionlist_list_delete] 
![][asset_subscribe_subscriptionlist_list_delete_popup]



### 订阅历史

>	资产管理 > 报告订阅* > *订阅历史*

设置订阅后您可以查看发送历史，并下载最近（1个月内）发送的历史文件。
您可以使用报告类型，发送日期和订阅名称过滤。



#### 订阅历史

-	报告名称 : 显示设置订阅时选中的报告名称。 
-	订阅名称 : 订阅名称设置遵循默认定义的格式，如果有单独指定的名称则会显示单独指定的名称。
-	发送日期 : 发送的日期和时间以YYYY-MM-DD HH:mm 格式显示。
-	下载 : 可以通过屏幕上的下载图标下载最近1个月的文件。 如果发送失败或文件超过一个月，则下载按钮将变成灰色，并显示为“无法下载”。
-	发送状态 : 邮件发送状态分为待发送/已发送/发送失败。
-	收件人 : 显示指定为订阅邮件收件人的收件人数量。您可以点击确认收件人弹出窗口。
    ![][asset_subscribe_history_list]



### 注册收件人

>	资产管理  > 报告订阅 > *注册收件人*

您可以直接注册电子邮件指定该用户为订阅收件人。注册时需要输入[电子邮箱]、
[名称]和[详细说明] 项目。


#### 注册收件人
    -	名称 : 显示已注册的收件人名称。
    -	电子邮件 : 显示已注册的电子邮箱地址。
    -	订阅列表 : 显示已注册的收件人中被指定为收件人的订阅数量。您可以点击查看注册的收件人被指定为收件人的订阅列表弹窗，弹窗显示订阅名称、周期和文件下载按钮。
    -	描述 : 显示注册的收件人详情 
    -	编辑/删除按钮 : 点击弹窗按钮，您可以编辑收件人姓名和详细信息、删除收件人信息。删除收件人后，收件人正
        在接收的订阅信息也会同时被删除，将不会接收到订阅邮件。
        ![][asset_subscribe_recipient_list]

####  添加收件人

您可以通过输入[邮箱地址]、[名称]、和[详细描述]信息注册外部邮箱地址为收件人。输入信息后点击 [保存并继续
注册收件人]按钮完成收件人注册，同时弹出窗口将不会关闭，您可以继续注册收件人。

![][asset_subscribe_recipient_list_add_popup]


#### 编辑

点击列表中的编辑按钮编辑收件人信息。您可以编辑[姓名]和[详细描述],但是无法修改[邮箱地址]. 如果您需要编
辑[邮箱地址],请使用删除按钮删除收件人信息后重新注册。

![][asset_subscribe_recipient_list_edit_popup]


<!-- 이미지 모음 -->
[asset_dashboard_1]: ./resource/asset_dashboard_1.png 
[asset_dashboard_2]: ./resource/asset_dashboard_2.png
[asset_dashboard_3]: ./resource/asset_dashboard_3.png
[asset_dashboard_4]: ./resource/asset_dashboard_4.png
[asset_dashboard_5]: ./resource/asset_dashboard_5.png
[asset_service_group_1]: ./resource/asset_service_group_1.png
[asset_usage_current]: ./resource/asset_usage_current.png
[asset_usage_intelligent]: ./resource/asset_usage_intelligent.png
[asset_performance_current]: ./resource/asset_performance_current.png
[asset_report]: ./resource/asset_report.png
[asset_report_subscribe_tab_create]: ./resource/asset_report_subscribe_tab_create@2x.png
[asset_report_subscribe_tab_edit]: ./resource/asset_report_subscribe_tab_edit@2x.png
[asset_subscribe_subscriptionlist_list]: ./resource/asset_subscribe_subscriptionlist_list.png
[asset_subscribe_subscriptionlist_list_create_step1]: ./resource/asset_subscribe_subscriptionlist_list_create_step1.png
[asset_subscribe_subscriptionlist_list_create_step2]: ./resource/asset_subscribe_subscriptionlist_list_create_step2@2x.png
[asset_subscribe_subscriptionlist_list_create_step3]: ./resource/asset_subscribe_subscriptionlist_list_create_step3.png
[asset_subscribe_subscriptionlist_list_create_step4]: ./resource/asset_subscribe_subscriptionlist_list_create_step4.png
[asset_subscribe_subscriptionlist_list_edit]: ./resource/asset_subscribe_subscriptionlist_list_edit.png
[asset_subscribe_subscriptionlist_list_edit_popup]: ./resource/asset_subscribe_subscriptionlist_list_edit_popup.png
[asset_subscribe_subscriptionlist_list_delete]: ./resource/asset_subscribe_subscriptionlist_list_delete.png 
[asset_subscribe_subscriptionlist_list_delete_popup]: ./resource/asset_subscribe_subscriptionlist_list_delete_popup.png
[asset_subscribe_history_list]: ./resource/asset_subscribe_history_list.png
[asset_subscribe_recipient_list]: ./resource/asset_subscribe_recipient_list.png
[asset_subscribe_recipient_list_add_popup]: ./resource/asset_subscribe_recipient_list_add_popup@2x.png
[asset_subscribe_recipient_list_edit_popup]: ./resource/asset_subscribe_recipient_list_edit_popup.png

