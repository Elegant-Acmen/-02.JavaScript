/*//var temp;
temp = 20; //temp为整型
alert(temp + temp);
temp = 20.2; //temp为浮点型
alert(temp + temp);
temp = "20"; //temp为字符串
alert(temp + temp);
temp = 20; //temp为整型
alert(temp * temp);
temp = [1, 2, 3, 4, 5, 6]; //temp为数组
alert(temp[5]);
temp = null; //temp为null
alert(temp);
var i1 = 10; //通过赋值null的方式清清除变量
i1 = null;
alert(i1);

//if...else分支语句
var a = "今天是个好日子！！！";
alert(a != "我爱你！"); //做出判断，a不等于我爱你！！！
var temp = "hello";
alert(temp.replace("l", "张英")); //替换，将其中默认字符替换成指定字符，默认只替换第一个

var temp = "hello";
if (temp == "hell") {
    alert("欢迎光临！！");
} else {
    alert("不好意思，下班了！！！");
}

//for循环语句
var a = "hello";
for (x = 0; x < 10; x++) {
    a += x;
}
alert("" + a + "");

//打印乘法口诀表*/
document.write("<table border='1'>");
for (var x = 1; x <= 9; x++) {
    document.write("<tr>");
    for (var y = 1; y <= x; y++) {
        document.write("<td>" +
            y + " * " + x + " = " + (x * y) +
            "</td>");
    }
    document.write("</tr>");
}
document.write("<h1>九九乘法表</h1>");
document.write("</table>");