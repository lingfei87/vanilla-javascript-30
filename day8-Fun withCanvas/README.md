# Day-8 Fun With Canvas
---
### 重点
学习canvas的使用

### 实现效果
在HTML中实现笔触大小渐变及色彩渐变的画笔效果

### 基本思路
1.生成canvas元素，并获取2d绘图上下文；
2.设定状态记录函数;
3.设定鼠标事件监听onmousedown时可绘画，onmouseup终止绘画，onmousemove时若可绘图则调用绘图函数；
4.设置绘图函数drawLine();（阶段可测）
5.添加点大小渐变sizechange；（阶段可测）
6.设置带颜色渐变的色彩变化句柄colorChange，并添加至绘图函数；（完成）


### 阅读推荐
1.建议阅读MDN的[canvas教程](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)系统学习canvas的使用后再进行本章练习。
2.感兴趣的开发者还可以在这个30天javascript编程练习之后继续[31天学习canvas教程](http://creativejs.com/2011/08/31-days-of-canvas-tutorials/)来加强自己的canvas实用知识。

