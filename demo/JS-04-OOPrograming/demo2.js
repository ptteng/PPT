/**
 * Created by xutong on 2017/4/21.
 */
function Cat(){
    Cat.prototype.name = '阿黄';
    Cat.prototype.color = '黄色';
    Cat.prototype.type = "猫科动物";
    Cat.prototype.sayName = function(){alert(this.name)};
}
var cat1=new Cat();
var cat2=new Cat();



