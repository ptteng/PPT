function alertTest()
{
    // alert("请输入您的名字");

    // bootbox.alert({
    //     message: "This is an alert with an additional class!",
    //     className: 'bb-alternate-modal'
    // });

    // bootbox.alert({
    //     message: "This alert can be dismissed by clicking on the background!",
    //     backdrop: true
    // });
    bootbox.alert({
        buttons: {
            ok: {
                label: '我是ok按钮',
                className: 'btn-myStyle'
            }
        },
        message: '提示信息',
        size:'large',
        callback: function() {
            alert('关闭了alert');
        },
        title: "bootbox alert也可以添加标题哦"
    });


}

function confirmTest()
{
    // var name=confirm("请输入您的名字","Bill Gates");
    // if (name)
    // {
    //     alert('您刚刚点击了确定');
    // }else {
    //     alert('您刚刚点击了取消');
    // }

    // bootbox.confirm("Hello world!", function (result) {
    //     if(result) {
    //         alert('点击了确认按钮');
    //     } else {
    //         alert('点击了取消按钮');
    //     }
    // });

    bootbox.confirm({
        buttons: {
            confirm: {
                label: '我是确认按钮',
                className: 'btn-myStyle'
            },
            cancel: {
                label: '我是取消按钮',
                className: 'btn-default'
            }
        },
        message: '提示信息',
        callback: function(result) {
            if(result) {
                alert('点击确认按钮了');
            } else {
                alert('点击取消按钮了');
            }
        },
        title: "bootbox confirm也可以添加标题哦"
    });


}




function promptTest()
{
    // var name=prompt("请输入您的名字","Bill Gates");
    // if (name!=null && name!="")
    // {
    //     alert("你好，" + name + "！今天过得好吗？")
    // }else {
    //     alert("你好，" + name + "！今天过得好吗？")
    // }
    // bootbox.prompt("This is the default prompt!",
    //     function(result){
    //         if (result!=null && result!="")
    //         {
    //             alert("你好，" +result + "！今天过得好吗？")
    //         }else {
    //             alert("你好，" + result + "！今天过得好吗？")
    //         }
    //     }
    // );

    bootbox.prompt({
        title: "This is a prompt with a set of checkbox inputs!",
        inputType: 'checkbox',
        inputOptions: [
            {
                text: 'Choice One',
                value: '1',
            },
            {
                text: 'Choice Two',
                value: '2',
            },
            {
                text: 'Choice Three',
                value: '3',
            }
        ],
        callback: function (result) {
           alert('you choose'+ result);
        }
    });
}

function dialogTest() {

    // var dialog = bootbox.dialog({
    //     title: 'A custom dialog with init',
    //     message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
    // });
    // dialog.init(function(){
    //     setTimeout(function(){
    //         dialog.find('.bootbox-body').html('I was loaded after the dialog was shown!');
    //     }, 3000);
    // });

//     var dialog = bootbox.dialog({
//         message: '<p class="text-center">Please wait while we do something...</p>',
//         closeButton: false
//     });
// // do something in the background
//     dialog.modal('hide');

    bootbox.dialog({
        message: "I am a custom confirm",
        title: "Confirm title",
        buttons: {
            Cancel: {
                label: "Cancel",
                className: "btn-default",
                callback: function () {
                    alert("Cancel");
                }
            }
            , OK: {
                label: "OK",
                className: "btn-primary",
                callback: function () {
                    alert("OK");
                }
            }
        }
    });
}


