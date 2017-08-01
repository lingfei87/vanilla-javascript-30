# Day-3 CSS Variables
---
### 重点
学习CSS变量的使用方法

### Tips
这已经是第三天编写程序了，为了使代码编写更具有结构化，每次只专注于**结构**，**表现**，**行为**中的一个要素，建议先完成整个HTML部分的编写，再来是CSS部分，最后是js部分。相对于原本每当在HTML中完成一个或一部分新元素就会针对其编写CSS样式以及js部分，现在的方法会让你感到思路更清晰。

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