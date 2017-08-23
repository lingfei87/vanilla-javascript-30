# 17 文字阴影的鼠标随动效果

> 本篇作者：©[大史快跑Dashrun](https://github.com/soyaine)——Chinasoft Frontend Web Developer

> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 17 篇。完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)，喜欢请 Star 哦♪(^∇^*)

> 创建时间：2017-08-23    
最后更新：2017-08-24

## 挑战任务
   初始文件`index-start.html`中提供了一个无序列表元素，并在`script`标签中提供了一个字符串数组。请为这些字符串排序，要求去除字符串中的`The`，`A`以及`An`的前缀后再进行排序，并把排序后的结果作为列表项展示在无序列表中。

## 实现效果
![结果展示](https://github.com/dashrun/vanilla-javascript-30/blob/master/day16-mouseMoveShadow/effects.png)

## 基本思路
1.基本的编程任务有两个要点，即**排序**和**展示**;
2.排序部分最外层即为`Array.sort()`函数，内层实现具体排序规则;
3.展示部分即将排列好的新数组拼接成带有标签的HTML元素，然后一次性插入到列表中。


## 过程指南
