document.getElementById("hr_three").onclick = function (e) {
    alert("我是最里面的元素");
    <!--1.event.stopPropagation();阻止事件冒泡-->
    <!--兼容写法-->
    e = event || window.event;
    // if (e && e.stopPropagation) {
        //非IE
        // 1.e只要不是undefined或者null或者0，他就可以当true来处理
        // 2.e.stopPropagation是判断e是否有stopPropagation这个属性，原理同上
        // 结合起来就是：
        // 如果e有值，并且e有stopPropagation这个属性，则调用e.stopPropagation()
        // 否则执行window.event.cancelBubble=true
    //     e.stopPropagation();
    // }
    // else {
    //     // IE
    //     window.event.cancelBubble = true;
    // }
    // 简便写法
    // event.stopPropagation?event.stopPropagation():(event.returnValue = false);


    // 阻止默认事件兼容写法


    // if (e.preventDefault) {  // W3C variant
    //     e.preventDefault();
    // } else { // IE<9 variant:
    //     e.returnValue = false;
    // }

    // 简便写法
    // event.preventDefault?event.preventDefault():(event.returnValue = false);


    // return false;
};


// jquery 方法
$("#hr_three").click(function(){
    alert("我是最里面的元素");
   return false;
});
