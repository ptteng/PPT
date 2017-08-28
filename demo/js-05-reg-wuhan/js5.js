/**
 * Created by Administrator on 2017/4/13 0013.
 */
//匹配字母，数字，长度为6-16
var regUsername = /^\d{n,}$/;
//匹配字母，数字，非空格的所有字符，长度为6-16
var regPassword = /^([A-Za-z0-9\S]){6,16}$/;


$('#username').blur(function () {
    var userName = $('#username').val();
    console.log(userName,'username值');
    console.log(regUsername.test(userName),'验证用户名');

    if (regUsername.test(userName) == false ){
        $('.remind').eq(0).css('visibility','visible');
    }
});
$('#password').blur(function () {
    var passWord = $("#password").val();
    console.log(passWord,'password的值');
    console.log(regPassword.test(passWord),'验证密码');

   if (regPassword.test(passWord) == false){
       $('.remind').eq(1).css('visibility','visible');
   }
});

// 只能输入数字："^[0-9]*$"。
// 只能输入n位的数字："^\d{n}$"。
// 只能输入至少n位的数字："^\d{n,}$"。
// 只能输入m~n位的数字：。"^\d{m,n}$"
// 只能输入零和非零开头的数字："^(0|[1-9][0-9]*)$"。
// 只能输入有两位小数的正实数："^[0-9]+(.[0-9]{2})?$"。
// 只能输入有1~3位小数的正实数："^[0-9]+(.[0-9]{1,3})?$"。
// 只能输入非零的正整数："^\+?[1-9][0-9]*$"。
// 只能输入非零的负整数："^\-[1-9][]0-9"*$。
// 只能输入长度为3的字符："^.{3}$"。
// 只能输入由26个英文字母组成的字符串："^[A-Za-z]+$"。
// 只能输入由26个大写英文字母组成的字符串："^[A-Z]+$"。
// 只能输入由26个小写英文字母组成的字符串："^[a-z]+$"。
// 只能输入由数字和26个英文字母组成的字符串："^[A-Za-z0-9]+$"。
// 只能输入由数字、26个英文字母或者下划线组成的字符串："^\w+$"。
// 验证用户密码："^[a-zA-Z]\w{5,17}$"正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线
