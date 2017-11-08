//符合json格式的值
var jArr = ["one", "two", "three"];

var jObj = { "one": 1, "two": 2, "three": 3 };

var jObj = {"names": ["张三", "李四"] };

var jArr = [ { "name": "张三"}, {"name": "李四"} ];

var jNum = 4;

var jStr = "abc";

//不符合json格式的值
var obj = { name: "张三", 'age': 32 };  // 属性名必须使用双引号

var arr = [32, 64, 128, 0xFFF]; // 不能使用十六进制值

var obj = { "name": "张三", "age": undefined };// 不能使用undefined

var obj = { "name": "张三",
  "birthday": new Date('Fri, 26 Aug 2011 07:13:10 GMT'),
  "getName": function() {
      return this.name;
  }
};// 不能使用函数和日期对象
