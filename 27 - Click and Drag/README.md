# 27 Click And Drag 中文指南

> 本篇作者：©[大史快跑Dashrun](https://github.com/dashrun)——Chinasoft Frontend Developer

> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 27 篇。完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)，喜欢请 Star 哦♪(^∇^*)

> 创建时间：2017-10-24   
最后更新：2017-10-25

## 挑战任务
初始文档`index-start.html`中提供了一组条幅，本次的编程任务需要实现的效果是当鼠标拖动画面移动时，条幅同步向水平方向移动。

## 实现效果
![结果展示](https://github.com/dashrun/vanilla-javascript-30/blob/master/26%20-%20Strip%20Follow%20Along%20Nav/effect.png)

## 编程思路  
在最外层的items元素上监听鼠标的按下，移动，弹起事件并编写相应的回调函数即可，在对应的回调函数中改变scrollLeft的值即可调整元素在水平方向上滚动的位置。

## 过程指南   

  
## 延伸思考  
本例中的js部分并不复杂，令人感兴趣的是`style.css`样式部分使用了较多CSS3高级用法，使得元素在滚动过程中呈现出透视效果，笔者在此对CSS的实现方法作以简单说明，感兴趣的小伙伴可以自行查找资料深入学习。   