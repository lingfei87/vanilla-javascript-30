# Day-5 Flex Gallery
---
### 重点
学习flex布局的基本用法,实现可伸缩图片墙

### 思路
5张图按比例平均分配宽度，在js中监听mouseenter事件进行相应的后续处理

### 坑
1.addEventListener监听鼠标滑过事件时为"mouseover",而不是"onmouseover".
2.queryselector获得的节点数组，遍历时使用foreach