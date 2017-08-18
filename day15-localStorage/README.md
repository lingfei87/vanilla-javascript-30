# 15 LocalStorage

> 作者：©[大史快跑Dashrun](https://github.com/soyaine)  
> 简介：[JavaScript30](https://javascript30.com) 是 [Wes Bos](https://github.com/wesbos) 推出的一个 30 天挑战。项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是帮助人们用纯 JavaScript 来写东西，不借助框架和库，也不使用编译器和引用。现在你看到的是这系列指南的第 15 篇。完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)，喜欢请 Star 哦♪(^∇^*)

> 创建时间：2017-07-24    
最后更新：2017-08-17

## 挑战任务
   初始文件`index-start.html`中模拟了一个简易点餐系统。用户需要向菜单中自己添加想要的菜式，要求使用form表单完成且页面无刷新显示，当用户点击完**添加**按钮后，使用localStorage保存下单信息，网页刷新后要求已点菜式依然可见。

## 实现效果

## 知识点

## 编程思路
1.监听form表单的`submit`事件，阻止提交信息的默认行为，改为本地存储操作;
2.编写函数handleStore()完成本地数据库的存取;
3.编写函数updateView()完成视图更新;
4.监听form表单的`reset`事件，触发时清空输入框及已下单菜单;
5.编写函数clearStore()完成各项清空任务。

## 过程指南

默认情况下，在表单空间拥有焦点时按下 Enter 键或者点击提交按钮，会提交表单，提交时浏览器会在将请求发送给服务器之前触发 submit 事件，可以先添加事件监听后看看效果：
```js
function addItem(e) {
  console.log('hello');
}

addItems.addEventListener('submit', addItem);
```
结果就是 Console 中闪现 hello 后刷新整个页面，这是 submit 的默认行为，在当前的场景中不适用，先去除。
```js
function addItem(e) {
  e.preventDefault();
}
```


this 获取当前 form，是从 submit 事件获取到的。

this.querySelector('[name=item]'); 获取其中的输入框

this.reset(); 
以清空 input 中正在输入的值

使用 localStorage 的时候，直接传入 items 得到的是 [object Object]，所以需要在把数据传进去之前就把内容转换成 String 类型的数据。