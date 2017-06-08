/**
 * Created by xiaoyudesu on 6/8/2017.
 */
//注入ui.router模块

mainApp = angular.module('mainApp', ['ui.router'])

    .config(function ($urlRouterProvider, $stateProvider) {

        //默认视图是main.html
        $urlRouterProvider.otherwise('/');

        // $urlRouterProvider.when('','/');

        $stateProvider
        //通过.连接符配置状态
        //tem1是状态名，对应ui-sref的值

            .state('tem1', {
                //url值标记地址栏中的后缀，使用户知道现在在什么状态，可以省略不写。
                url: '/a',

//若父模板中有多个ui-view视图，可进一步使用views对象来配置。
                views: {
                    //''之间的值表示对应ui-view的名称，若未命名，则如此设置为空。
                    '': {

                        //此模板会被加载到父模板中。
                        //因为父模板只有一个视图，所以此模板会被加载如这个未命名的视图中。
                        templateUrl: 'tem/tem1.html',
                    }
                }
            })
            //这是状态2
            //用.链接符表明了状态间的父子关系，tem2使tem1的子状态。
            .state('tem1.tem2', {
                //在url地址栏中将显示为 / a / b
                url: '/b',
                views: {

                    //viewname@statename

                    //用@符号表示绝对命名
                    //表示为将此模板加载到tem1的未命名ui-view中。

                    '@tem1': {
                        templateUrl: 'tem/tem2.html',
                    }

                    // 对应 index.html 中 <div ui-view/>
                    // "@" : { }
                }
            });
    });