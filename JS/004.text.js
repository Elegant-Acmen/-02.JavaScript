/*function num1 (){
    alert("饶世弟");
}
function num2 (){
    alert("张英");
}
function num3 (){
    alert("周苗苗");
}
function num4 (){
    alert("陈淼芳");
}
function num5 (){
    alert("刘英明");
}
num1();
function num() {
    num1();
    num2();
    num3();
    num4();
    num5();
}
num();*/
/*function log1(x,y) {
    if(x>y) {
        alert(x);
    }else{
        alert(y);
    }
}
function log2(a,b) {
    if(a>b) {
        alert(a);
    }else{
        alert(b);
    }
}
log1(5,3);
log2(8,12);
function log(){
    log1(30,50);
    log2(60,40);
}
log();*/
/*var washer="洗衣机";
function fun() {
	var yg = "衣柜";
	alert(yg);
	alert(washer);
}
fun();
alert(yg);
alert(washer);*/

/*var a=3;
var b=4;
var c=5;
function getMax(a,b,c) {
var maxd = a>b?a:(b>c?b:c);
return maxd;
}
alert(getMax(a,b,c));*/
/*var x = 5;
var y = 10;
function sum(x,y) {
    alert(x+y);
}
sum (x,y);
function log(num) {
    if (num > 0){
        alert(num);
        log(--num);
    }
}
log(5);*/
var uri = "http:www.baidu.com/j/我就是我";
var encoded = encodeURI(uri);
var decoded = decodeURI(encoded);
alert (encoded);
alert (decoded);
var input = prompt('请输入一段合法的JS语句：');

alert(typeof input);                                              //string
eval(input);
