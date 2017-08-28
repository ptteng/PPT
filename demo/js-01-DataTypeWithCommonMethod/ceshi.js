/**
 * Created by 1 on 2017/2/18.
 */

var h1=document.getElementById("h1");
var h2=document.getElementById("h2");
var h3=document.getElementById("h3");




                           // 不同的用途和方法
// var a;
// 数字用于运算
//    a=Math.round(8*Math.random());
//字符串用于输出内容
//    a="       <div style='border: 3px solid #888;height:48px'>js文件的内容</div>          ";

//布尔用于判断
// a=3===1;
// a=3=="3";
// a=3==="3";
                            // 不同内存引用方式(百度百科
// a="(百度百科)数据类型的出现是为了把数据分成所需内存大小不同的数据，编程的时候需要用大数据的时候才需要申请大内存，就可以充分利用内存。 例如大胖子必须睡双人床，就给他双人床，瘦的人单人床就够了。";

                              // Javascript里的数据类型--动态

// var a="3";
// a="3";
// var b=4;
// a=b;

              // 字符串（string）：用“”引用，保存文本内容，可以是任意字符
// a="&gt;";
// a="こんばんは";
                 // 数值（number>:整数，浮点数，非数值
// a="tt";
// var b;
// b=3;
// a=Number(b);
// a=6/0;
                  // 布尔值（boolean）：ture/false
// a=1==="1";
              // 数组（array）：变量名+索引值，存储一组数据，可<b>混合</b>储存任何数据类型

// var a=new Array(6);
// a=[1,2,3,x,"sprite","&gt;"];
// var a=[];

                        //对象(object):属性的无序集合
// function me() {
//     b=new Array(5);
//     for(i=1;i<5;i++){b[i]=i;}
// }
// // a=me;
// a=me.name;
             //Null与Undefined:字面不同，布尔相等，Null--用于清空，Undefined--用于原始值
// a=null;
// a="null";
// a=undefined;

                             //数据类型判断
b=undefined;
a=b;
// function me() {};
// a=me;
                              // 用数据转换方法
// b="186.53A";
  // a=parseInt(b);
  // a=parseFloat(b);
  // a=b.toString();
  // a=Number(b);

// b="RF";               a=Boolean(b);
// function me() {};  a=String(me);






















h1.innerHTML=typeof a;
h2.innerText=a;
h3.innerHTML=a;

// h1.innerHTML=typeof b;
// h2.innerText=b;
// h3.innerHTML=b;