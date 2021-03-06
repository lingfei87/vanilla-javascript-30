# Day-2 Js Clock
  难点1：三根指针会从初始位置瞬间闪动到当前时间。
  解决方案：先将钟表面元素的透明度opacity设置为0将其隐藏，使用setTimeout()函数延迟1秒，当时间更新函数开始工作后，再将表盘的opacity属性设置为1，就可以避开指针初始位置过度至首次获得当前时间所产生的跳动问题；

  难点2：秒针走过12点位置时由于旋转角度值从360deg直接变为0deg，由于过渡动画时间较短，会出现指针快速逆时针旋转360deg的现象。
  解决方案1：当秒针走至12点位置时，将指针的transition动画移除，当秒针走过12点位置后，再恢复transition动画。
  解决方案2：获取指针当前位置后，后续所有旋转角度直接累加不再清零，以0deg->360deg->720deg的计数方式增加。

#细节问题
  细节1：date对象返回的小时数为24小时制，计算时针角度时需要作出相应调整，24小时制在表盘上对应720deg，而不是360deg
  细节2：时针的转动角度计算时，需要将分针的影响换算累加
  细节3：练习CSS的使用方法试着将指针末端改为尖头

#其他建议
 在进行完Day8-Fun with canvas的练习和相关学习后，可使用canvas相关命令绘制更精美的时钟。