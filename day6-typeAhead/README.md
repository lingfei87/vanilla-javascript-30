# Day-6 Array typeAhead
---
### 编程任务
模拟输入框的联想功能

### 编程思路
1.利用ajax将远程数据获取至本地；
2.利用MVC的思想将获取到的数据转化为JSON格式后存储于dataOrigin中，将要显示的数据存储于dataShow中；
3.利用input.value作为筛选条件，在value变化时触发keyup事件，过滤数据源数组dataOrigin；
4.将过滤后的数组存放至dataShow数组中，并实时显示。

