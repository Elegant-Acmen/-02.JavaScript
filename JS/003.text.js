/*var n1 = '1';
var m1 = '2';
alert (n1<m1);
var n2 = 3;
var m2 = '10';
alert (n2>m2);
var n3 = '3a';
var m3 = 10;
alert (n3>m3);
var n1 = 3;
var m1 = 10;
alert (n1>m1);
*/
/*alert(1<3);
alert("1"<"3");
var m = '143';
var n = '133';
alert(m<n);
var i = 10;
var j = 10;
var k = i-- < 0 && j++  > 0;
alert(i);
alert(j);
alert(k);
var a = 10;
var b = a++;
var c = ++a;
alert(b);
alert(c);*/
/*位运算 */
/*var leftMove = 4 << 1;
var rightMove = 12 >> 2;
alert(leftMove);
alert(rightMove);
/*赋值 */
/*var score = 90;
var isFullMarks = score == 100;//先判断score是否等于100，将判断值赋给isFullMarks
alert (score);
alert(isFullMarks);
var x = y = z = 10;
alert(y);
/*三目条件运算符 */
/*var name = "饶世弟";
var frist = name == "张英"?"这是饶世弟":"这不是饶世弟";
alert(frist);
/*三目条件运算符的嵌套 */
/*var name = "白骨精";
var frist = name == "小翠"?"师傅，这确实是个闺女":(
    name == "老太"?"师傅，你看老人家多不容易":(
        name == "白骨精"?"妖精，受死":"施主，留步"
    )
);
alert(frist);
/* 判断一个数的奇偶性*/
/*function double(x) {
    if(x%2==0) {
        alert("这是一个偶数");
    }else{
        alert("这是一个奇数");
    }
}
double(10);
double(15);
double(111);
double(222);
/* 输出最大值*/
//var x = 10 ,y = 100;{
/*function Math(x,y) {
    if(x>y) {
        alert(x);
    }else{
        alert(y);
    }
}
Math(10,100);
Math(15,10);
Math(111,100);
Math(222,223);
/*判断数据类型 */
/*var n1= 10;
var n2="10";
var n3=n1+n2;
alert(typeof(n1));
alert(typeof(n2));
alert(typeof(n3));
/*数据类型的体验 */
/*var a= 10,b="5";
alert(typeof(a/b));
var c= 10,d="a";
alert(a/d);//NaN
alert(typeof(a/b));
var e= 10,f=0;
alert(e/f);//无限大
alert(typeof(e/f));
Math(222,223);*/
function printHello () {
    alert("饶世弟");
    alert("他怎么了"); 
    alert("他特别恶心，远离！！！");
}
printHello();
function add(num1,num2,num3) {
    var num = num1 + num2 + num3;
    return num;
}
alert(add(5,10,3));
var math = add(1,2,3);
alert(math);
var math = add(6,10,8);
alert(math);