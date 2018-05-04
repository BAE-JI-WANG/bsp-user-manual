---
service : metering 
title   : Metering 
zh : true
...

<!-- TOC -->


# Metering

提供本月费用，及过去的费用，费用超过预算告警及成本优化 

--------------------------------------------------------------------------------



## Dashbaord

提供本月费用、最新生成的Report / RI信息、当月/当日的信息

>	Metering > *Dashboard*

![][metering_dashboard_zh_1_1]
![][metering_dashboard_zh_1_2]



## 费用分析

根据搜索条件，分析筛选出想要查看的具体使用费用。起止时间，云账号，产品，区域等条件分析。先选择起止时间，选择完成后先点击“应用”。

>	Metering > *费用分析*


![][metering_billing_analytics_zh_1]

然后再选择其他条件，最后点击“应用”，就形成费用分析，以及详细的费用信息，详细的费用信息支持数据导出。

![][metering_billing_analytics_zh_2] 
![][metering_billing_analytics_zh_3_1] 
![][metering_billing_analytics_zh_3_2]




## 账单

账单界面，直接能查看整体的云费用情况，和上个月对比是这个费用是上升还是下降。
如果够买了Bespin MSP服务还会显示相应的支持服务费。

>	Metering > *账单*


![][metering_billing_1_1]

支持详细的费用导出，查看多个维度：按账户、按产品、按区域、按服务组。

![][metering_billing_1_2]


## CDN 计量 

查看Amazon CloudFront费用，数据传输，和申请次数。
本月和上月对比

>	Metering > *CDN 计量*


### Amazon CloudFront summary

查看和对比本月及上月费用、数据传输量、申请次数。

![][metering_cdn_zh_1_1]



1.  费用：对比本月和上月实时账单、费用合计、预估费用。
	-	实时账单：24小时内发生的未清算费用，
	-	清算费用：本月1日到今日已经完成清算的费用总和
	-	估算费用：通过分析使用模式估算本月预估费用.
2.  数据传输量：对比本月和上月的实时费用、总计，预估数据传输量
	-	实时账单：24小时内发生的未清算的数据传输量，
	-	合计：本月1日到今日已清算的数据传输量
	-	预估费用：通过分析使用模式估算本月预估传输量.
3.  申请：对比本月和上月的实时费用、费用总和以及预估申请次数
	-	实时账单：24小时内发生的未清算的申请次数。
	-	合计：本月1日到今日已清算的申请次数
	-	预估费用：通过分析使用模式析估算本月预估申请次数.
	-	K: 1,000 , M: 1,000,000 , B: 1,000,000,000


### 2. Amazon CloudFront Usage

查看各账户地区和网络分配的费用、数据传输量、申请次数。 

![][metering_cdn_zh_1_2]

1.  COST: 查看和对比各账户、地区、网络分布选中月份的计费。
2.  DATA TRANSFER: 查看和对比各账户、地区、网络分布选中月份的数据传输量。
3.  REQUESTS:  查看和对比各账户、地区、网络分布选中月份的申请次数。



### 3. Amazon CloudFront Usage Trend

查看单日、单位小时、单周费用，数据传输量和请求次数。 

![][metering_cdn_zh_1_3]

1.  COST: 使用选中方式查看结算趋势。
	-	单日：查看本月和上月单日费用。
	-	单位小时：最多可查看选中日期8天内的单位小时费用
2.  DATA TRANSFER: 根据选中方法查看数据传输量趋势.
	-	单日：查看本月和上月单日数据传输量详情
	-	单位小时：最多可查看选中日期8天内的单位小时数据传输量详情
3.  REQUESTS: 根据选中方法查看请求数趋势。
	-	单日：查看本月和上月单日申请数
	-	单位小时：查看选中日期8天内的请求数
4.  更改显示方式: 您可以按照选定的条件（每天/每小时）检查图表中显示的数据。
    单日: `帐户`, `地区`, `网络分布`, `时间间距`
    每小时: `帐户`, `地区`, `网络分布`, `选择日期`



--------------------------------------------------------------------------------



## 预算

查看每个月的预算和实际花费情况，配置每个月的预算费用,超过阀值和预算后，会产生告警，提示费用超出。

>	Metering > *预算*



### 预算概览

>	Metering > 预算 > *Budget Overview*

在概述中能看到每个月的实际费用和预算的柱状图的对比，以及不同的云厂商的费用比对。

![][metering_budgeting_zh_1]






### 预算设置

>	Metering > 预算 > *Budget Setting*

点击“BUDGETING”，在二级的菜单中点击“Budget Setting”，进入预算设置界面，
进入预算设置界面，双击对应的云产品，就可以修改设置这个月的预算，修改完成后，点击保存即可。

![][metering_budgeting_zh_2]




### 告警管理-预算告警
>	Metering > 预算 > *告警管理-预算告警*

告警管理，可以添加或修改告警，第一使用BSP是需要先增加告警，添加“添加新警报”，新增一条告警，输入告警名称，
选择告警的阶段和告警的标准是按百分比还是数字来进行告警，根据不同云厂商输入告警的阀值，并选择是否启用改告警，最后选择告警方式，设置完成后点击保存。

![][metering_budgeting_zh_3]


### 告警管理-预算告警接收人

>	Metering > 预算 > *Alarm Receiver*

超过预算后，需要将预算告警发送给相应的管理人员，就先需要添加告警接收人。在告警管理界面，先点击“预算告警接收人”，
再点击添加收件人，输入邮箱和手机号，选择手机地址，和语言，最后选择和哪个告警进行关联，完成后点击保存。

![][metering_budgeting_zh_4]



--------------------------------------------------------------------------------



## 成本优化

用于判断虚拟机是否需要购买RI服务以及虚拟机是否需要扩容和降低配置，来减少费用。目前仅支持AWS，后续还会增加Azure的成本优化。

>	Metering > *成本优化*




### 使用频度分析

>   Metering > 成本优化 > *使用频度分析*


**使用频度分析**

提供多种搜索条件，智能资源信息自动搜索，资源 CPU/内存/磁盘 利用率分析，资源利用频度分析，
找出使用率高或低的资源：可升级或降低配置，找出使用频度高的资源：可转为 RI。
先选择智能搜索的对象

![][metering_cost_zh_1] 
![][metering_cost_zh_2_1] 


### 资源配置优化-高频度使用资源分析 

![][metering_cost_zh_3_1]
![][metering_cost_zh_3_2]
![][metering_cost_zh_3_3] 

查询高频度使用资源，可转换为 RI 节约成本，保持现状、全部采用按需实例、全部采用 RI 实例、部分采用 RI 实例（以及不同的付费方式与年限情况下）成本对比，采用 RI 时， 分摊到每月的成本何时开始低于按需实例，采用 RI 时，不同情况下可节约的成本。

### 资源配置优化-低利用率资源分析

![][metering_cost_zh_2_2]
![][metering_cost_zh_2_3]

查询低利用率资源，可降低配置以节约成本，低利用率的资源的详细利用率信息，低利用率的资源每月每天的详细费用信息。





### 预留实例分析

>	Metering > 成本优化 > *预留实例分析*

查询已购预留实例信息，展现当前查询条件下高频度使用的实例信息，可转为 RI 降低成本

![][metering_cost_zh_4_1]
![][metering_cost_zh_4_2]



--------------------------------------------------------------------------------


## 费用报表

提供基础报表模板，按产品/区域展示费用报表信息，BSP 账单查询和分析界面可发送报表模板，提升客户便利性，可定制的费用报表。

>	Metering > *Report*

![][metering_report_subscribe_zh_0_1]

提供如下列表中的六种类型的报告模板。

`各产品、地区费用`, `各产品用量、费用`, `各服务费用`, `基于基础设施的名称标签的分组费用`, `各产品、地区费用 in Azure`, `各产品用量、费用 in Azure`


单击报告模板，右侧将会出现菜单列表.

1. Report Info: 设定报告时间段并选择报告文件格式后，您可以xls或pdf格式的文件。
2. Log: 显示所选报告模板的报告下载历史记录。您可以再次下载已创建的报告。
3. Subscription: 선用户可以通过注册邮件订阅所需的报告。 您可以指定您想要的订阅类型（每日，每周，每月）和您希望收到订阅的时间。 报告订阅列表中包含您自己创建的订阅，以及其他人使用[订阅设置菜单]权限将您指定为订阅者的订阅。 您可以创建，删除和修改自己创建的订阅列表，但您仅能查看其他人使用[订阅设置菜单]将您指定为订阅者的订阅。

![][metering_report_subscribe_zh_1_1]


1.  创建新的订阅
    您可以通过输入或选择[订阅名称], [文件格式], [语言], [标准时间], [订阅周期],和[时间]来创建一个新的订阅。创建订阅时显示的默认订阅名称由报告名称，周期和语言设置组成。相同的报告模板不能设置相同的周期。
    ![][metering_report_subscribe_zh_1_2]
2.  编辑订阅
    您可以编辑[订阅名称], [文件格式], [语言], [标准时间], [订阅周期],和[时间]。相同的报告模板不能设置相同的周期。
    ![][metering_report_subscribe_zh_1_3]







--------------------------------------------------------------------------------







## 订阅设置

我们为所有使用资产和计量服务以及有报告订阅菜单编辑权限的客户提供报告自动发送功能。报告订阅功能允许您创建报告订阅或通过编辑和删除进行管理，和查看每个订阅的历史记录以及下载已发送的文件。另外，它还提供创建或删除外部电子邮件和所需电子邮件的收件人管理功能。在创建/编辑订阅时可以指定收件人。 “历史记录”选项卡允许您查看过去的发送历史记录，包括已删除订阅的发送历史。

>	Metering > *订阅设置*


### 订阅

>	Metering > 订阅设置 > *订阅*

可通过报告类型管理订阅，在创建订阅时可以指定发送周期（每日，每周，每月）语言和时间等选项。您可以在订阅列表中查看订阅名称、周期、收件人信息和最近发送日期等信息。同时您还可以新建订阅或编辑和删除订阅。

`各产品、地区费用`, `各产品用量、费用`, `各服务费用`, `基于基础设施的名称标签的分组费用`, `各产品、地区费用 in Azure`, `各产品用量、费用 in Azure`

![][metering_subscribe_zh_1_1]


1.  创建订阅 
    您可以参考四步指南弹窗指导新建订阅。在步骤1、2、3中，您可以指定订阅信息和收件人。在步骤4中，您可以确认您指定的信息并更改订阅名称。
    1.  新建订阅步骤1 
        -	根据选定的报告类型, 您可以查看当前创建的订阅名称和订阅周期。
        -	计量报告文件仅提供Excel 格式，结算菜单中导出的结算报告文件提供PDF和Excel两种格式，您可以选择您所需的文件格式。
        -	您可以通过语言选择功能指定要发送的邮件模板的语言。支持中文、韩文、英文三种语言。
        -	根据报告类型最多可以创建5个订阅。
            ![][metering_subscribe_zh_1_2]

    2.  新建订阅步骤2
        -	选择订阅周期和发送时间。
        -	报告发送周期可设置为每日、每周或每月。
        -	费用计算基准可以设置为上个月或当月。
        -	如果您想每日收到订阅报告，请在每日选项上选择时间。
        -	如果您想每周收到订阅报告，请在每周选项上选择日期和时间。
        -	如果您想每月收到订阅报告，请在每月选项上选择日期和时间。

    3.  新建订阅步骤3
        -	在步骤3中，您可以指定收件人。共有两种类型的收件人列表，分为拥有服务门户访问权限的企业用户列表，和手动注册的“注册收件人”用户列表。
        -	您最多可以设置10个收件人。

    4.  新建订阅步骤4
        -	在最后一步中，您可以编辑已创建的默认订阅名称。
        -	检查信息设置，如果您需要重新编辑信息，点击上一步按钮进行编辑。

2.  编辑订阅
    如果您需要编辑已创建的订阅，点击订阅列表图标下方的编辑按钮使用编辑弹窗进行编辑。
    编辑弹窗显示当前选中的订阅信息。您可以选择需要的订阅信息并点击编辑按钮完成编辑，或取消编辑撤回修改。


3. 删除订阅
    -	如果您不再需要订阅，请点击下图中的“X”按钮删除订阅。
    -	在删除订阅之前，请检查您是否要再次删除它。 点击“删除”按钮完成删除。
    -	如果已经发送，您可以从历史记录选项卡中检查已删除订阅的发送历史记录
    -	在您删除订阅之前，再次确认是否删除订阅。点击“删除”按钮完成删除。
    -	您可以在历史选项中查看已删除的订阅发送记录。





### 订阅历史

>	计费管理 > 报告订阅 > *订阅历史*

设置订阅后您可以查看发送历史，并下载最近（1个月内）发送的历史文件。您可以使用报告类型，发送日期和订阅名称过滤。

![][metering_subscribe_zh_2_1]

1.	报告名称: 显示设置订阅时选中的报告名称。 
2.	订阅名称: 订阅名称设置遵循默认定义的格式，如果有单独指定的名称则会显示单独指定的名称。 
3.	发送日期: 发送的日期和时间以YYYY-MM-DD HH:mm 格式显示。
4.	下载: 可以通过屏幕上的下载图标下载最近1个月的文件。 如果发送失败或文件超过一个月，则下载按钮将变成灰色，并显示为“无法下载”。
5.	发送状态:邮件发送状态分为待发送/已发送/发送失败。
6.	收件人: 显示指定为订阅邮件收件人的收件人数量。您可以点击确认收件人弹出窗口。

![][metering_subscribe_zh_2_2]





### 注册收件人

>	Metering > 报告订阅 > *注册收件人*

您可以直接注册电子邮件指定该用户为订阅收件人。注册时需要输入[电子邮箱]、 [名称]和[详细说明] 项目。



-	名称: 显示已注册的收件人名称。
-	电子邮件: 显示已注册的电子邮箱地址。
-	订阅列表: 显示已注册的收件人中被指定为收件人的订阅数量。
-   您可以点击查看注册的收件人被指定为收件人的订阅列表弹窗，弹窗显示订阅名称、周期和文件下载按钮。
-	描述: 显示注册的收件人详情
-	编辑/删除按钮:点击弹窗按钮，您可以编辑收件人姓名和详细信息、删除收件人信息。
    删除收件人后，收件人正在接收的订阅信息也会同时被删除，将不会接收到订阅邮件。

1.  添加收件人 
    您可以通过输入[邮箱地址]、[名称]、和[详细描述]信息注册外部邮箱地址为收件人。
    输入信息后点击 [保存并继续注册收件人]按钮完成收件人注册，同时弹出窗口将不会关闭，您可以继续注册收件人。
    ![][metering_subscribe_zh_3_2]

2.  编辑 
    点击列表中的编辑按钮编辑收件人信息。
    您可以编辑[姓名]和[详细描述],但是无法修改[邮箱地址]. 如果您需要编辑[邮箱地址],请使用删除按钮删除收件人信息后重新注册。
    ![][metering_subscribe_zh_3_3] 



<!-- 이미지 모음 -->
[metering_dashboard_zh_1_1]: ./resource/metering_dashboard_zh_1_1.png
[metering_dashboard_zh_1_2]: ./resource/metering_dashboard_zh_1_2.png
[metering_billing_analytics_zh_1]: ./resource/metering_billing_analytics_zh_1.png
[metering_billing_analytics_zh_2]: ./resource/metering_billing_analytics_zh_2.png 
[metering_billing_analytics_zh_3_1]: ./resource/metering_billing_analytics_zh_3_1.png 
[metering_billing_analytics_zh_3_2]: ./resource/metering_billing_analytics_zh_3_2.png
[metering_billing_1_1]: ./resource/metering_billing_1_1.png
[metering_billing_1_2]: ./resource/metering_billing_1_2.png
[metering_cdn_zh_1_1]: ./resource/metering_cdn_zh_1_1.PNG
[metering_cdn_zh_1_2]: ./resource/metering_cdn_zh_1_2.PNG
[metering_cdn_zh_1_3]: ./resource/metering_cdn_zh_1_3.PNG
[metering_budgeting_zh_1]: ./resource/metering_budgeting_zh_1.png
[metering_budgeting_zh_2]: ./resource/metering_budgeting_zh_2.png
[metering_budgeting_zh_3]: ./resource/metering_budgeting_zh_3.png
[metering_budgeting_zh_4]: ./resource/metering_budgeting_zh_4.png
[metering_cost_zh_1]: ./resource/metering_cost_zh_1.png 
[metering_cost_zh_2_1]: ./resource/metering_cost_zh_2_1.png 
[metering_cost_zh_3_1]: ./resource/metering_cost_zh_3_1.png
[metering_cost_zh_3_2]: ./resource/metering_cost_zh_3_2.png
[metering_cost_zh_3_3]: ./resource/metering_cost_zh_3_3.png 
[metering_cost_zh_2_2]: ./resource/metering_cost_zh_2_2.png
[metering_cost_zh_2_3]: ./resource/metering_cost_zh_2_3.png
[metering_cost_zh_4_1]: ./resource/metering_cost_zh_4_1.png
[metering_cost_zh_4_2]: ./resource/metering_cost_zh_4_2.png
[metering_report_subscribe_zh_0_1]: ./resource/metering_report_subscribe_zh_0_1.png
[metering_report_subscribe_zh_1_1]: ./resource/metering_report_subscribe_zh_1_1.png
[metering_report_subscribe_zh_1_2]: ./resource/metering_report_subscribe_zh_1_2.png
[metering_report_subscribe_zh_1_3]: ./resource/metering_report_subscribe_zh_1_3.png
[metering_subscribe_zh_1_1]: ./resource/metering_subscribe_zh_1_1.png
[metering_subscribe_zh_2_1]: ./resource/metering_subscribe_zh_2_1.png
[metering_subscribe_zh_2_2]: ./resource/metering_subscribe_zh_2_2.png
[metering_subscribe_zh_3_2]: ./resource/metering_subscribe_zh_3_2.png
[metering_subscribe_zh_3_3]: ./resource/metering_subscribe_zh_3_3.png 


