
/*获取当前时间
var NewDate = Date ();
alert(NewDate);
alert(Date());
//Date()对象的其他精确输出
var a = new Date();
alert("今天是"+ a.getFullYear()+ "年" + (a.getMonth()+1) + "月" + a.getDate() + "号" + a.getHours);//返回今天是几月的多少号
if(a.getDay()==0){
    alert("今天是星期日");
}else{
alert("今天是星期"+a.getDay());
}
//返回当前星期几

//Math对象
var num1 = 1.23456789;
var num2 = 12.0345;
var num3 = 8.45
var num4 = 5;
var num5 = 2;
var num6 = Math.random();//返回0-9之间的整数
alert(Math.ceil(num1));//向上进
alert(Math.floor(num2));//向下舍
alert(Math.max(num1,num3,num2));//取最大值
alert(Math.pow(num4,num5));//返回n1的n2次方
alert(Math.floor(num6 * 10));

//小小算数案例
alert(Math.pow(((23+Math.pow(5,7))/45),2));//((23+5^7)/45)^2

//数据类型的转换
//数字转字符串
var n1 = 1;
var n2 = 23.45;
alert(String(n1));
var n5 = n2.toString();
alert(n5);//将数字转换为字符串

//字符串转数字
var a1 = "15.465789";
var a2 = "15abd14def";
var a3 = "mylove";
alert(Number(a1));
alert(Number(a2));
alert(Number(a3));//纯数字类型转换为依然是数字，含有其他非法字符的输出NaN
alert(parseInt(a1));
alert(parseInt(a2));//转换数字的整数部分。和非法字符的结合体，转换出字符前 的数字
alert(parseFloat(a1));
alert(parseFloat(a2));//和Nunber相除非法字符无法转换外，其他一样

//转布尔类型
var b1 = 123;
var b2 = "3456";
var b3 ;
var b4 = null;
var b5 = 0;
alert(Boolean(b1));//true
alert(Boolean(b2));//true
alert(Boolean(b3));//false
alert(Boolean(b4));//false
alert(Boolean(b5));//false

//隐式转换，在运算过程中，程序自动转换
var c1 = 12;
var c2 = "3";
var c3 = c1 * c2;
alert(c1 + c2);
alert(c3);

//小案例:输入一个三位数，分别输出每位的值，并计算和
var c4 = prompt("请输入一个三位数");
c4 = Number(c4);
var bai = parseInt(c4/100);
var shi = parseInt(c4%100/10);
var ge = parseInt(c4%10/1);
var c5 = bai + shi +ge;
alert("百位值为："+bai);
alert("十位值为："+shi);
alert("个位值为："+ge);
alert("三位的每个数相加："+ c5 );

//For循环，输出结果为：0，1，2，3，4，5，6，7，8，9
var count = 10;
for (var i = 0;i<count; i++){
    alert(i);//在内部输出时，会有内部的每次循环输出
}
alert(i);//在外部输出时，只有最终一个值，10

//输出1-100的和
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
alert("1到100的和为：" + sum);

//省略掉个位数为3的1-10之间的数
for(var i = 1; i<= 10; i++) {	
    if(i % 10 == 3) {
		continue;
	}
	alert(i);
}

//水仙花数
var n=100;
 for(n;n<1000;n++) {
    c=n%10;
    b=(n%100-c)/10;
    a=(n-n%100)/100;
    if(n==a*a*a+b*b*b+c*c*c){
        document.write(n+"<br>")};
    }  

    //直角三角形
    for(var i=1;i<=19;i++){     
    for(var j=1;j<=i;j++){      
        document.write("*");      
    }      
    document.write("</br>");        
} 
*/


for(var i=1;i<=9;i++) {
    for(var j=1;j<=i+8;j++){
        if(j<=9-i){
           document.write("&nbsp"); 
     }else{
        document.write(j);
        document.write("*"); 
     } 
   } 
    document.write(i);
    document.write("</br>"); 
}



