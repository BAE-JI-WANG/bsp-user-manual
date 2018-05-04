---
service : meteringadmin 
title   : Metering Admin
zh : true
...

<!-- TOC -->




# 计量管理

您可以检查和管理运行中的云服务发生的费用。


--------------------------------------------------------------------------------



## 付款人帐单

>   计量管理 \> *付款人帐单*  




### 付款人帐单

>   计量管理 \> *付款人帐单*

您可以看到相关月份的付款人账户列表，使用总金额和费用确认状态。
![][mtAdmin_payerBill_1_zh]





### 查看详细信息

点击该行查看您想要查看的付款人账户的费用详情。
![][mtAdmin_payerBill_1_1_zh]




### 在Excel中下载

您可以在Excel中下载相关月份的付款人账户列表，使用总金额和费用确认状态等信息。 
![][mtAdmin_payerBill_1_3_zh]




### 费用确认状态

1. 确认 : 确认付款人账户费用  
2. 未确认 : 付款人账户费用尚未确认  
3. 确认过程 : 在确认过程中的付款人帐户费用  
4. 取消处理 : 在取消过程中的付款人帐户费用

![][mtAdmin_payerBill_1_2_zh]





### 付款人账单详细页面

>   计费管理 > 付款人账单 \> *付款人账单详细页面*

您可以手动确认或取消您为特定月份选择的付款人帐户的费用，或查看费用详情。

![][mtAdmin_payerBill_detail_1_zh]




### 手动确认/确认取消手续费

您可以手动确认费用或确认取消费用。如果状态是正在收费确认（或取消）过程中，则此时不能取消请求。
![][mtAdmin_payerBill_detail_2_1_zh]




### 查看最近3个月的历史记录

您可以看到付款人帐户在您选择的月份之后的最近3个月内支付的总金额。
![][mtAdmin_payerBill_detail_2_2_zh]




### 检查费用详情

1.  按发票收费  
    您可以对每个付款人帐户发票的费用进行检查。
    ![][mtAdmin_payerBill_detail_2_3_zh]

    - 预计：指尚未发出的发票编号。  
    - 应用汇率：在发票发行日期将使用最新的汇率。  
    - 固定汇率：如果您想在确认费用后重置汇率，请点击重置按钮。

2.  付款摘要  
    您可以看到付款人帐户AWS服务费用的付款摘要。
    ![][mtAdmin_payerBill_detail_2_4_zh]

    - MarketplaceLineItem：AWS服务费用：当前发票期间支付的金额  
    - UsedLineItem : AWS服务费用：当前发票期间支付的金额  
    - SaleLineItem : AWS服务费用：订阅费  
    - RefundsLineItem : AWS服务费用：退款金额  
    - PayLineItem : AWS服务费用：发票支付金额

3.  付款详情  
    您可以检查每个付款人账户的AWS服务的付款详情
    ![][mtAdmin_payerBill_detail_2_5_zh]





--------------------------------------------------------------------------------







## 客户账单

>   计费管理 \> *客户账单*  




### 客户账单

>   计费管理 \> *客户账单*

您可以查看相关月份的客户名单，客户的付款人账户，使用金额，折扣，支持费用，信用额度，收费，额外服务和转换费用。

![][mtAdmin_customerbill_1_zh]






### 发票确认

这是为了禁止已经确认成本的客户而调整成本所做的改变，  
此功能仅适用于确认费用的客户。  
要确认发票，请选择所有客户，勾选所需的框，然后单击确认发票。
![][mtAdmin_customerbill_2_1_zh]





### 发票申请状态

此栏显示这些项目发票申请状态，分为三个状态：已应用，未应用和未应用。 已申请, 未申请 and 未申请.
![][mtAdmin_customerbill_2_3_zh]

1. 已申请 : 费用和发票都被确认  
2. 未申请 : 费用已确认，但发票尚未确认（可提供发票确认。）  
3. 未申请 : 费用和发票都未确认（发票确认无效）  




### 客户关联菜单

您可以通过单击表格右侧的按钮来查看客户的关联菜单。 从底部的关联菜单中，查看特定公司的关联帐户，每个关联帐户的已用金额，折扣，支持费用，信用额度，收费，附加服务和转换费用。
![][mtAdmin_customerbill_2_4_zh]




### 用Excle下载

在客户账单里，你可以用excle下载两种版本的数据。
![][mtAdmin_customerbill_2_5_zh]

1. 在Excel中下载每个关联账户相关月份的使用情况详细信息。  
2. 在Excel中下载特定公司每个关联账户相关月份的使用情况详情。





### 调整后的成本明细

如果您点击关联菜单右侧的“调整成本细目”按钮，费用已被确认。 对于尚未确认发票的客户，您可以编辑相关月份关联账户的折扣，支持费用，信用额度，补充服务费用，修改价格，服务平台额外服务费用等项目。

![][mtAdmin_customerbill_2_6_zh]

1.  折扣: 您可以搜索或编辑相关月份的特定关联账户的折扣价格。
2.  支持费用: 您可以搜索或编辑相关月份的特定关联账户的支持费用。
3.  信用: 您可以搜索或编辑相关月份的特定关联账户的使用信用额度。
4.  基础设施补充服务: 您可以直接为相关月份的特定关联账户充值基于AWS的一次性费用。
5.  修改信息内容: 您可以设置和调整相关月份的特定关联账户的实际AWS收费（即通过四舍五入的算法而得出的整数）。
6.  服务平台附加服务: 您可以搜索或编辑用于相关月份的特定关联账户的额外服务的金额。





### 客户账单详细页面

>   计费管理 > 客户账单 \> *客户账单详细页面*

您可以检查您选择的相关月份的一客户下的每个帐户的发票信息和详细信息。 此外，您可以确认发票或取消确认
![][mtAdmin_customerbill_detail_1_zh]






### 信息摘要

您可以看到：相关月份的特定关联金额的总付款金额，手续费确认状态，使用金额，费用，转换费用，折扣，支持费用，信用额度以及附加服务信息。

![][mtAdmin_customerbill_detail_2_1_zh]
![][mtAdmin_customerbill_detail_2_2_zh]





### 发票确认

确认费用的客户可以通过点击“发票应用”或“取消发票”来确认发票或取消确认发票。 

![][mtAdmin_customerbill_detail_2_3_zh]




### 重新确认费用

如果确认费用后发生额外费用（例如调整成本），请再次使用费用确认按钮重新确认客户费用。
![][mtAdmin_customerbill_detail_2_7_zh]





### 每个帐户的发票信息

您可以查看每个帐户的发票信息。
![][mtAdmin_customerbill_detail_2_5_zh]


1.  附加菜单  
    通过点击右侧的延伸按钮，您可以查看底部附加菜单上的每个帐户发票的使用金额，折扣，支持费用，信用额外服务，标准交易费率，收费和转化费用。  
  
2.  发票ID  
    附加服务的发票编号为ADD，您将从该页面看到，代表除了附加服务之外的所有费用的其他发票ID都是从AWS发出的。




### 每个帐户的详情

您可以根据AWS服务名称搜索使用量和费用。
![][mtAdmin_customerbill_detail_2_6_zh]



--------------------------------------------------------------------------------



## 汇率

您可以检查或修改汇率信息。 标准汇率是KEB Hana银行首次通知的标准交易汇率。

>   计费管理 \> *汇率*  

![][mtAdmin_exchangeRate_1_zh]




### 添加汇率

在选择日期后点击添加汇率，您可以添加一个。 您最多每个日期添加三个。

![][mtAdmin_exchangeRate_2_1_zh]
![][mtAdmin_exchangeRate_2_2_zh]




### 修改汇率

您只有在修改一次后而不是首次通知的情况下才能更改汇率。
![][mtAdmin_exchangeRate_2_3_zh]




### 删除汇率

您只有在修改一次后而不是首次通知的情况下才能删除汇率。

![][mtAdmin_exchangeRate_2_4_zh]
![][mtAdmin_exchangeRate_2_5_zh]


--------------------------------------------------------------------------------



## 客户信息

>   计费管理 \> *客户信息*  

### 客户信息

>   计费管理 \> *客户信息*

你可以看到所有客户的信息。 您还可以根据每个客户调整后的成本进行，或通过搜索或注册每个客户公司的关联账户来调整成本。
![][mtAdmin_customerInfo_1_zh]



###  在Excel中下载

您可以在Excel中搜索折扣，支持费用，信用额度，服务平台额外信息以及基于关联账户应用的客户信息。
![][mtAdmin_customerInfo_2_1_zh]




### 附加菜单


点击右侧的附加按钮，根据关联账户查询客户的关联账户以及当前应用的折扣，支持费，信用和服务平台附加服务信息。
![][mtAdmin_customerInfo_2_2_zh]




### 调整后的成本明细

在弹出式窗口中，通过点击附加菜单右侧的“调整成本明细表”，您可以搜索或设置关联账户的每期期间的折扣，支持费用，信用额度和附加服务费用。
![][mtAdmin_customerInfo_2_3_zh]

1.  折扣: 您可以为关联账户设置折扣（按比例应用/按固定金额应用）。
2.  支持费用: 您可以设置关联账户的支持费用（按比例申请，按固定金额申请）。
3.  信用: 您可以为关联账户设置信用（分期申请/最高申请/按固定金额申请）。
4.  附加服务: 您可以设置关联账户的附加服务费用（按比例申请，按固定金额申请）。




### 注册所有调整成本

您可以进入客户信息的详细菜单，点击右侧的注册所有调整成本即可注册所有调整后的成本。
![][mtAdmin_customerInfo_2_4_zh]




### 客户信息详细页面  (注册所有调整成本)

>   计费管理 > 客户信息 \> *客户信息详细页面*

在注册所有调整成本中，客户信息中的第4项，您可以注册客户关联账户的全部或部分调整成本。

![][mtAdmin_customerInfo_detail_1_zh]





### 帐户信息

您可以查看所选客户调整成本的关联账户列表和应用状态。
![][mtAdmin_customerInfo_detail_2_1_zh]




### 注册服务成本

您可以通过单击每个选项卡上的添加来添加要批量注册的已调整成本。

![][mtAdmin_customerInfo_detail_2_2_zh]

1.  折扣: 同一折扣成本可按期间同时适用于相关客户的多个关联账户  
    （按比例计算）。
2.  支持费用：同一支持费用可以按照期限同时适用于相关客户的多个关联账户  
    （按比例/按固定金额申请）。
3.  附加服务：同一附加服务费用可以按照期限同时适用于相关客户的多个关联账户  
    （按比例/按固定金额适用）。




### 应用成本

输入服务费用后，通过勾选帐户信息框选择一个帐户，或选择所有帐户后单击应用所有权益。

![][mtAdmin_customerInfo_detail_2_3_zh] 
![][mtAdmin_customerInfo_detail_2_4_zh]








--------------------------------------------------------------------------------






## 设置

在这里，您可以管理付款人帐户信息和附加服务代码。

>   计费管理 \> *设置*



### 付款人帐户

>   计费管理 > 设置 \> *付款人帐户*

您可以管理付款人帐户信息。 

![][mtAdmin_settings_1_zh]




### 注册付款人帐户

您可以通过点击表格底部的添加来添加付款人帐户。

![][mtAdmin_settings_payerAccount_1_zh] 
![][mtAdmin_settings_payerAccount_1_2_zh]




### 修改付款人帐户

您可以通过单击右侧的修改来修改注册付款人账户的别名和S3bucket信息。

![][mtAdmin_settings_payerAccount_1_3_zh]
![][mtAdmin_settings_payerAccount_1_4_zh]




### 补充服务管理

>   计费管理 > 设置 \> *补充服务管理*

您可以管理补充服务代码。
![][mtAdmin_settings_addSvc_2_zh]




### 注册补充服务管理

您可以通过单击表格底部的添加来添加补充服务代码。

![][mtAdmin_settings_addSvc_2_1_zh]
![][mtAdmin_settings_payerAccount_1_2_zh]





### 修改补充服务管理

您可以通过单击表格右侧的修改来修改已注册的补充服务。
![][mtAdmin_settings_addSvc_2_2_zh]




### 删除补充服务管理

您可以通过单击表右侧的删除来删除已注册的补充服务。

![][mtAdmin_settings_addSvc_2_3_zh]
![][mtAdmin_settings_addSvc_2_4_zh]


<!-- 이미지 모음 -->
[mtAdmin_payerBill_1_zh]: ./resource/mtAdmin_payerBill_1_zh.png
[mtAdmin_payerBill_1_1_zh]: ./resource/mtAdmin_payerBill_1_1_zh.png
[mtAdmin_payerBill_1_3_zh]: ./resource/mtAdmin_payerBill_1_3_zh.png
[mtAdmin_payerBill_1_2_zh]: ./resource/mtAdmin_payerBill_1_2_zh.png

[mtAdmin_payerBill_detail_1_zh]: ./resource/mtAdmin_payerBill_detail_1_zh.png
[mtAdmin_payerBill_detail_2_1_zh]: ./resource/mtAdmin_payerBill_detail_2_1_zh.png
[mtAdmin_payerBill_detail_2_2_zh]: ./resource/mtAdmin_payerBill_detail_2_2_zh.png
[mtAdmin_payerBill_detail_2_3_zh]: ./resource/mtAdmin_payerBill_detail_2_3_zh.png
[mtAdmin_payerBill_detail_2_4_zh]: ./resource/mtAdmin_payerBill_detail_2_4_zh.png
[mtAdmin_payerBill_detail_2_5_zh]: ./resource/mtAdmin_payerBill_detail_2_5_zh.png

[mtAdmin_customerbill_1_zh]: ./resource/mtAdmin_customerbill_1_zh.png
[mtAdmin_customerbill_2_1_zh]: ./resource/mtAdmin_customerbill_2_1_zh.png
[mtAdmin_customerbill_2_3_zh]: ./resource/mtAdmin_customerbill_2_3_zh.png
[mtAdmin_customerbill_2_4_zh]: ./resource/mtAdmin_customerbill_2_4_zh.png
[mtAdmin_customerbill_2_5_zh]: ./resource/mtAdmin_customerbill_2_5_zh.png
[mtAdmin_customerbill_2_6_zh]: ./resource/mtAdmin_customerbill_2_6_zh.png

[mtAdmin_customerbill_detail_1_zh]: ./resource/mtAdmin_customerbill_detail_1_zh.png
[mtAdmin_customerbill_detail_2_1_zh]: ./resource/mtAdmin_customerbill_detail_2_1_zh.png
[mtAdmin_customerbill_detail_2_2_zh]: ./resource/mtAdmin_customerbill_detail_2_2_zh.png
[mtAdmin_customerbill_detail_2_3_zh]: ./resource/mtAdmin_customerbill_detail_2_3_zh.png
[mtAdmin_customerbill_detail_2_7_zh]: ./resource/mtAdmin_customerbill_detail_2_7_zh.png
[mtAdmin_customerbill_detail_2_5_zh]: ./resource/mtAdmin_customerbill_detail_2_5_zh.png
[mtAdmin_customerbill_detail_2_6_zh]: ./resource/mtAdmin_customerbill_detail_2_6_zh.png

[mtAdmin_exchangeRate_1_zh]: ./resource/mtAdmin_exchangeRate_1_zh.png
[mtAdmin_exchangeRate_2_1_zh]: ./resource/mtAdmin_exchangeRate_2_1_zh.png
[mtAdmin_exchangeRate_2_2_zh]: ./resource/mtAdmin_exchangeRate_2_2_zh.png
[mtAdmin_exchangeRate_2_3_zh]: ./resource/mtAdmin_exchangeRate_2_3_zh.png
[mtAdmin_exchangeRate_2_4_zh]: ./resource/mtAdmin_exchangeRate_2_4_zh.png
[mtAdmin_exchangeRate_2_5_zh]: ./resource/mtAdmin_exchangeRate_2_5_zh.png

[mtAdmin_customerInfo_1_zh]: ./resource/mtAdmin_customerInfo_1_zh.png
[mtAdmin_customerInfo_2_1_zh]: ./resource/mtAdmin_customerInfo_2_1_zh.png
[mtAdmin_customerInfo_2_2_zh]: ./resource/mtAdmin_customerInfo_2_2_zh.png
[mtAdmin_customerInfo_2_3_zh]: ./resource/mtAdmin_customerInfo_2_3_zh.png
[mtAdmin_customerInfo_2_4_zh]: ./resource/mtAdmin_customerInfo_2_4_zh.png

[mtAdmin_customerInfo_detail_1_zh]: ./resource/mtAdmin_customerInfo_detail_1_zh.png
[mtAdmin_customerInfo_detail_2_1_zh]: ./resource/mtAdmin_customerInfo_detail_2_1_zh.png
[mtAdmin_customerInfo_detail_2_2_zh]: ./resource/mtAdmin_customerInfo_detail_2_2_zh.png
[mtAdmin_customerInfo_detail_2_3_zh]: ./resource/mtAdmin_customerInfo_detail_2_3_zh.png
[mtAdmin_customerInfo_detail_2_4_zh]: ./resource/mtAdmin_customerInfo_detail_2_4_zh.png

[mtAdmin_settings_1_zh]: ./resource/mtAdmin_settings_1_zh.png

[mtAdmin_settings_payerAccount_1_zh]: ./resource/mtAdmin_settings_payerAccount_1_zh.png 
[mtAdmin_settings_payerAccount_1_2_zh]: ./resource/mtAdmin_settings_payerAccount_1_2_zh.png
[mtAdmin_settings_payerAccount_1_3_zh]: ./resource/mtAdmin_settings_payerAccount_1_3_zh.png
[mtAdmin_settings_payerAccount_1_4_zh]: ./resource/mtAdmin_settings_payerAccount_1_4_zh.png

[mtAdmin_settings_addSvc_2_zh]: ./resource/mtAdmin_settings_addSvc_2_zh.png
[mtAdmin_settings_addSvc_2_1_zh]: ./resource/mtAdmin_settings_addSvc_2_1_zh.png

[mtAdmin_settings_payerAccount_1_2_zh]: ./resource/mtAdmin_settings_payerAccount_1_2_zh.png

[mtAdmin_settings_addSvc_2_2_zh]: ./resource/mtAdmin_settings_addSvc_2_2_zh.png
[mtAdmin_settings_addSvc_2_3_zh]: ./resource/mtAdmin_settings_addSvc_2_3_zh.png
[mtAdmin_settings_addSvc_2_4_zh]: ./resource/mtAdmin_settings_addSvc_2_4_zh.png
