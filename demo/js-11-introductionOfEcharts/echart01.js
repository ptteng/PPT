/**
 * Created by 1 on 2017/4/7.
 */
    // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart1'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        name:"类型",
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [
        {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }

    ]
};

//使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


// var a=10;
// var option={
//     title:{
//         text:"饼图",
//         subtext:"不区分大小"
//     },
//     tooltip:{},
//     legend:{data:["数量"]},
//     series:[{
//         name:'数量',
//         type:"pie",
//         data:[
//             {name:"css",value:a},
//             {name:"js",value:20},
//             {name:"java",value:15},
//             {name:"运维",value:4}
//         ]
//     }]
// };
// myChart.setOption(option);




