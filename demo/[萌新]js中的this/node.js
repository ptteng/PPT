//全局中的this,默认是一个空对象,
console.log(this);//{} 默认空对象
this.a = 1;

this.aa = function () {

}
//全局中使用this设置属性,,并没有直接挂在global对象上,可以在 global.process.mainModule 中通过 exports 属性获取,
console.log(this);
console.log(global.process.mainModule.exports);
console.log(global.process.mainModule.exports === this);//true
//module属性
console.log(module);
console.log(global.process.mainModule === module);//true
//一般直接使用module访问....
console.log(global.process.mainModule.exports === module.exports);//true
console.log(module.exports === this);//true

//函数中使用this
~function () {
    this.a = 111111;
}();
var obj = {
    autoRun: function () {
        this.b = 111111;
    }()
}
console.log(global.a);
console.log(global.b);
console.log(global);
