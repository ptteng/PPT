/**
 * Created by 1 on 2017/3/31.
 */

//定义一个有限状态机
var switchstate = {
    state: "off",//当前状态，
    trans:function(){//状态和转变规则//包含了动作
        switch(this.state){
            case "off":
                this.state="on";
                $("#switchButton").css({"margin-left": "80px","background":"#080"});break;
            case "on":
                this.state="off";
                $("#switchButton").css({"margin-left": "0","background":"#aaa"});break;
            default:
                this.state="off";
                $("#switchButton").css({"margin-left": "0","background":"#aaa"});break;
        }
    },
    //事件,不同的事件可能对应不同的规则
    event:function(){this.trans();console.log(switchstate.state)}
};
$("#switchButton").on("click",function(){switchstate.event()});//给按钮添加点击事件，绑定状态机

//一个抽象的有限状态机
function switches(){
    var o={
        state: "off",//当前状态，
        trans:function(){//状态和转变规则
            switch(this.state){
                case "off":
                    this.state="on";break;
                case "on":
                    this.state="off";break;
                default:
                    this.state="off";break;
            }
        },
        //事件,不同的事件可能对应不同的规则
        event:function(){this.trans();console.log(this.state)},
    }
    return o;
};
var button2=new switches();console.log(button2);//开关2
var button3=new switches();console.log(button3);//开关3
$("#switchButton2").on("click",function () {//给按钮添加点击事件，绑定状态机
    button2.event();
    if(button2.state=="on"){$("#switchButton2").css({"margin-left": "80px","background":"#008"})}
    else {$("#switchButton2").css({"margin-left": "0","background":"#aaa"})}
});


$("#switchButton3").on("click",function () {
    button3.event();
    if(button3.state=="on"){$("#switchButton3").css({"margin-left": "80px","background":"#800"})}
    else {$("#switchButton3").css({"margin-left": "0","background":"#aaa"})}
});//给按钮添加点击事件，绑定状态机


//红绿灯--三个状态的状态机--通行--警告--停止

var trafficLight={//"red""green""yellow"























    state: "red",
    lastState:"yellow",
    trans:function(){
        switch(this.state){
            case "red":
                this.lastState=this.state;
                this.state="yellow";
                break;
            case "green":
                this.lastState=this.state;
                this.state="yellow";
                break;
            case "yellow":
                if(this.lastState=="red") {this.state="green"}
                else{this.state="red"}
                break;
            default:this.state="red";this.lastState="yellow";break;
        }
    },
    event:function () {this.trans()}
};

$("#light_wrapper").on("click",function(){
    trafficLight.event();
    switch (trafficLight.state){
        case "red":
            $("#light_red").css({"background":"red"});
            $("#light_yellow").css({"background":"#eee"});
            $("#light_green").css({"background":"#eee"});
            break;
        case "yellow":
            $("#light_red").css({"background":"#eee"});
            $("#light_yellow").css({"background":"yellow"});
            $("#light_green").css({"background":"#eee"});
            break;
        case "green":
            $("#light_red").css({"background":"#eee"});
            $("#light_yellow").css({"background":"#eee"});
            $("#light_green").css({"background":"green"});
            break;
        default: break;
    }
});




