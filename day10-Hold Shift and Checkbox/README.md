# Day-10 Hold Shift and Check
---
### 编程挑战
实现Checkbox中按住Shift实现多选功能

###Tips
代码中提供ES6和非ES6两种不同写法，仅供参考

### 基本思路
1.自己编写`checkbox`标签;
2.1监听checked变化，为选中的选项增添/移除新的样式
2.2也可采用input:checked + span 的组合CSS选择器添加样式
3.为checkbox绑定点击事件及处理函数，判断是否同时按下了`shift`键，如果按下则进入步骤4
4.对比上一次点击和本次点击的checkbox选中状态差异，分别进行处理
