// var students=[];//3月份总表
var dayStudent=[];//每日各职业表
var sepNew=function (i) {
    var rand=function() {
            return Math.floor(10*Math.random());
        };
    var o={
        day:i,
        CSS:120+rand()+i,
        JS:50+rand()+i,
        IOS:80+rand()+i,
        ANDROID:100+rand()+i,
        JAVA:160+rand()+i,
        UI:70+rand()+i,
        QA:60+rand()+i,
        PM:40+rand()+i,
        OP:30+rand()+i
    };
    return o;
};
for(i=1;i<=31;i++){
    dayStudent[i-1]=new sepNew(i);
}
console.log("dayStudent[]");
console.table(dayStudent);//生成数据
var data_student={
    CSS:dayStudent.map(function (self) {return [self.day,self.CSS]}),
    JS:dayStudent.map(function (self) {return [self.day,self.JS]}),
    IOS:dayStudent.map(function (self) {return [self.day,self.IOS]}),
    ANDROID:dayStudent.map(function (self) {return [self.day,self.ANDROID]}),
    JAVA:dayStudent.map(function (self) {return [self.day,self.JAVA]}),
    UI:dayStudent.map(function (self) {return [self.day,self.UI]}),
    QA:dayStudent.map(function (self) {return [self.day,self.QA]}),
    PM:dayStudent.map(function (self) {return [self.day,self.PM]}),
    OP:dayStudent.map(function (self) {return [self.day,self.OP]}),
};
///////////////////////////////////////////
var studentChart=echarts.init(document.getElementById("chart1"));
var studentOption={
    name:{
        text:"新学员职业",
        subtext:"假数据"
    },
    tooltip:{},
    legend:{
        data:[]
    },
    xAxis:{
        name:"职业",
        type:"value"
        // max:"31"
    },
    yAxis:{
        name:"人数",
        type:"value"
    },
    series:[
        {name:"CSS",
            type:"line",
            data:data_student.CSS
        }
    ]
};
studentChart.setOption(studentOption);















//////////////////////////////////////////
/*console.time("idid");
var sepChart=echarts.init(document.getElementById("chart1"));

var sepChartOption= {
    title: {text: "3月份修真院每日注册人数", subtext: "练习"},
    tooltip: {trigger: 'axis'},
    legend: {
        // orient:"vertical",
        top: "36px",
        data: ["CSS", "JS", "IOS", "ANDROID", "JAVA", "UI", "QA", "PM", "OP"]
    },
    xAxis: {
        type: "value",
        name: "日期"
        // max:"31"
    },
    yAxis: {
        type: "value",
        name: "人数"

    },
    series: [
        {name:"CSS",
            type:"line",
            // areaStyle:{normal:{}},
            // stack:"student",
            data: data_student.CSS
        },
        {name:"JS",
            type:"line",
            data:data_student.JS
        },
        {name:"IOS",
            type:"line",
            data:data_student.IOS
        },
        {name:"ANDROID",
            type:"line",
            data:data_student.ANDROID
        },
        {name:"JAVA",
            type:"line",
            data:data_student.JAVA
        },
        {name:"UI",
            type:"line",
            data:data_student.UI
        },
        {name:"QA",
            type:"line",
            data:data_student.QA
        },
        {name:"PM",
            type:"line",
            data:data_student.PM
        },
        {name:"OP",
            type:"line",
            data:data_student.OP
        }
    ]



};

sepChart.setOption(sepChartOption);
console.timeEnd("idid");*/



