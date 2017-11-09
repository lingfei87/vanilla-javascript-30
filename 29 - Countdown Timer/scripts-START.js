const endTime  = document.querySelector(".display__end-time");
const leftTime = document.querySelector(".display__time-left");
const buttons = document.querySelectorAll("button");
const date = new Date();
var left = 0;
var end = 0;
var timer;

leftTime.innerHTML = left;
const arr = Array.from(buttons);

//为button绑定点击事件
arr.map(function(item){
    item.addEventListener('click',clickAction);
});

//定义点击后的回调
function clickAction(e){
	let deltaTime = this.dataset.time;
        left = left + parseInt(deltaTime,0);
        end = date.getTime() + left*1000;
        leftTime.innerHTML = left;
        endTime.innerHTML =new Date(end).toLocaleTimeString();
        //点击后更新计时器
        updateTimer();
}

//每秒刷新时间
function updateTimer(){
	//清除以前的timer
	if(timer){
		clearInterval(timer);
	}

    // 设置新的Timer
    timer = setInterval(function(){
	if(left == 0){
		endTime.innerHTML = 'End';
        clearInterval(timer);
	}else{
		left -= 1;
		leftTime.innerHTML = left;
	}
},1000);
}