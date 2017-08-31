/**
 * Created by xutong on 2017/4/21.
 */
function Cat(name,color){
    this.name = name;
    this.color = color;
    this.type = "猫科动物";
    this.eat = function(){alert(name+"吃老鼠");};
}

var cat1= new Cat("大毛","黄色");

