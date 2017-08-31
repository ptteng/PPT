
// 获取节点；
var ul = document.getElementById('ulbox');
var li = document.getElementsByClassName('libox');
// 0-8随机取三个
function threeNumber() {
    var a = [];
    for (var i=0; i<=8; i++){
        a.push(i);
    }
    a.sort(
        function () {
            return 0.5-Math.random();
        }
    );
    a.length=3;
    return a;
}

// 重置li节点的颜色
function resetColor() {
    for (var m = 0; m <= 8; m++) {
        li[m].style.backgroundColor = "#e78326";
    }
}





// //随机取一种颜色,取值不存在问题。
// function rdColor(){
//     var r=Math.floor(Math.random()*256);
//     var g=Math.floor(Math.random()*256);
//     var b=Math.floor(Math.random()*256);
//     return "rgb("+r+','+g+','+b+")";
// }


// //取值有问题，存在length<6的情况，无法获取颜色。
// function rdColor(){
//     return '#'+(Math.random()*0xffffff<<0).toString(16);
// }


// //取值有问题，存在length<6的情况，无法获取颜色。
// function rdColor(){
//     return '#'+Math.floor(Math.random()*16777215).toString(16);
// }


//取值不存在问题,表现良好
function rdColor(){
    return  '#' +
        (function(color){
            return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
            && (color.length == 6) ?  color : arguments.callee(color);
        })('');
}







// 改变颜色
function changecolor() {
    //重置颜色
    resetColor();
    //取三次颜色
    var colorName = [];
    for(var n =  0 ;n < 3; n++){
        colorName[n]= rdColor();
    }
    console.log(colorName[0]);
    console.log(colorName[1]);
    console.log(colorName[2]);
    var p = threeNumber(); //必须有这一步，直接引入会把前面的循环也进行执行。
    // 匹配颜色
    li[p[0]].style.backgroundColor = colorName[0];
    li[p[1]].style.backgroundColor = colorName[1];
    li[p[2]].style.backgroundColor = colorName[2];

}
//button变色
var btnColor = ["#e78326", "#fff"]
var colorTag = 1;
function btn1Color() {
    var btn1Change;
    colorTag = 1 - colorTag;
    btn1Change = btnColor[colorTag];
    return btn1Change;
}
function btn2Color() {
    colorTag = 1 - colorTag;
    btn2Change = btnColor[colorTag];
    return btn2Change;
// 点击按钮运行
}
var a;
    function run() {
        clearInterval(a);   //防止点击按钮颜色变换速度越来越快
        a = setInterval("changecolor()", 1000);

        button1.style.backgroundColor = btn1Color();
        button1.style.color = btn1Color();
    }

    function stop() {
        clearInterval(a);
        resetColor();
        button2.style.backgroundColor = btn2Color();
        button2.style.color = btn2Color();
    }







