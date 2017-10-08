/**
 * Created by xiaoyudesu on 2017/9/19
 */
'use strict';

require.config({
    paths: {
        "jquery": "node_modules/jquery/dist/jquery.min",
        // "math": "math",
        // "math2": "math2",
    }
})


require(['jquery','math','math2'], function ($,math,math2) {
    $(".a").html("这是被改变的requirejs");
    alert(math.add(1,1));
    alert(math2.add(2,2));
})