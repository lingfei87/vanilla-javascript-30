# Day-11 Custom Video Player
---
### 编程挑战
·为`video`元素添加自定义样式的播放控制面板
    -可滑动调节音量，播放速度
    -可通过按钮快进，回退
    -可点击视频画面或按钮播放或暂停视频
    -可点击或拖动进度条选择播放进度
    
###效果展示
![结果展示](https://github.com/dashrun/vanilla-javascript-30/blob/working-branch-dash/day11-Custom%20Video%20Player/orgin.png)

### 额外挑战
美化`input[type=range]`的样式

### Tips
拖动进度条调整播放进度时，onclick事件和video元素的timeupdate事件会互相影响，需要做一个开关变量来控制。



