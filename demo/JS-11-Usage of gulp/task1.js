/**
 * Created by msi on 2017/4/15.
 */

var str=document.getElementsByClassName("room");
var aBtn1=document.getElementsByClassName('start')[0];
var aBtn2=document.getElementsByClassName('end')[0];
var a,s1,s2,s3;
function selectFrom(lowerValue,upperValue){
    var choices=upperValue-lowerValue+1;
    return Math.floor(Math.random()*choices + lowerValue);
}
function randomSelect() {
    var t1,t2,t3,t4,t5,t6;
    t1=selectFrom(0,8);
    t2=selectFrom(0,8);
    t3=selectFrom(0,8);
    while(t1==t2||t1==t3||t2==t3){
        t2=selectFrom(0,8);
        t3=selectFrom(0,8);
    }
    t4="rgb("+selectFrom(0,255).toString()+","+selectFrom(0,255).toString()+","+selectFrom(0,255).toString()+")";
    t5="rgb("+selectFrom(0,255).toString()+","+selectFrom(0,255).toString()+","+selectFrom(0,255).toString()+")";
    t6="rgb("+selectFrom(0,255).toString()+","+selectFrom(0,255).toString()+","+selectFrom(0,255).toString()+")";
    while(t4==t5||t4==t6||t5==t6){
        t5="rgb("+selectFrom(0,255).toString()+","+selectFrom(0,255).toString()+","+selectFrom(0,255).toString()+")";
        t6="rgb("+selectFrom(0,255).toString()+","+selectFrom(0,255).toString()+","+selectFrom(0,255).toString()+")";
    }
    str[t1].style.backgroundColor=t4;
    str[t2].style.backgroundColor=t5;
    str[t3].style.backgroundColor=t6;
    s1=t1;
    s2=t2;
    s3=t3;
    /*console.log(t1);
    console.log(t2);
    console.log(t3);

    console.log(t4);
    console.log(t5);
    console.log(t6);*/
}
function setColor() {
    for(var i=0;i<str.length;i++){
        str[i].style.backgroundColor="orange";
    }
    randomSelect();
}
aBtn1.onclick=function(){
    a=setInterval(setColor,1000);
    aBtn1.style.backgroundColor="orange";
    aBtn1.style.color="white";
    aBtn2.style.backgroundColor="white";
    aBtn2.style.color="orange";
    aBtn1.disabled=true;
};
aBtn2.onclick=function () {
    clearInterval(a);
    aBtn2.style.backgroundColor="orange";
    aBtn2.style.color="white";
    aBtn1.style.backgroundColor="white";
    aBtn1.style.color="orange";
    str[s1].style.backgroundColor="orange";
    str[s2].style.backgroundColor="orange";
    str[s3].style.backgroundColor="orange";
    aBtn1.disabled=false;
};