# Day-7 Array Cardio 2
---
### 重点
学习js数组的方法（2）

### 实现效果
今天的挑战是Day4的后续，继续使用Array的一些神奇的方法，包括`some()`,`every()`,`find()`,`splice()`,`slice()`.相对于上一篇，今天的函数相对简单。
文件中提供**people**和**comments**两个数组用于操作练习。


### 代码任务
针对people数组：
	1.是否有人超过19岁？
	2.是否所有人都是成年人？
针对comments数组：
	1.找到id号为823423的评论
	2.删除id号为823423的评论

### 知识点梳理
slice(start, end)不修改原数组，返回截取的子串；
splice(start, amount)直接修改原数组，返回截取的子串；
尚未完善