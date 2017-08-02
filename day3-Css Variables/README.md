# Day-3 CSS Variables
---
### 重点
学习CSS变量的使用方法

### Tips
这已经是第三天编写程序了，为了使代码编写更具有结构化，每次只专注于**结构**，**表现**，**行为**中的一个要素，建议先完成整个HTML部分的编写，再来是CSS部分，最后是js部分，这样更符合程序设计中`自顶向下`的原则。
同样一段内容，当你专注于html的部分时可能会是如下的样子：
```
        <div>
            <nav></nav>
            <header></header>
            <article></article>
            <aside></aside>
            <footer></footer>
        </div>
```
而当你一边写html一边写css时，很可能你的代码会是如下的样子：
```
      <div>
            <div class="navi"></div>
            <div class="header"></div>
            <div class="main-content"></div>
            <div class="sub-content"></div>
            <div class="add-info"></div>
        </div>
```
视觉上来说两者完全可以达到一样的效果，但相对于原本每当在HTML中完成一个或一部分新元素就会针对其编写CSS样式以及js部分，前一种方法会让你感到思路和条理更清晰。

>这是你吃饭的家伙，无所谓的态度只会让你吃别人剩下的甚至有一天丢了饭碗。


### 难点
1、设置CSS变量
```
:root {
 --varPadding:10px;
}

img {
 padding: var(--varPadding);
}
```
2.在js中读取中定义的根元素`:root`中定义的CSS变量
```
document.documentElement.style
```