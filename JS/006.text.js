/*for (var i=0;i<10;i++){
      alert(i);
}

var sum = 0;
for (var a= 1;a<=100;a++) {
    sum += a;
}
document.write("<h1>大发慈悲地告诉你，1加到100的值是：</h1>"+ sum );

for (var b=1;b<=100;b++){
    if(b%10 == 3){
        continue;
    }
    document.write(b);
}

for(var i=0;i<=19;i++){     
    for(var j=0;j<=i;j++){      
        document.write("*");
        document.write(j);      
    }      
    document.write("</br>");        
} 

var n=100;
 for(n;n<1000;n++) {
    c=n%10;
    b=(n%100-c)/10;
    a=(n-n%100)/100;
    if(n==a*a*a+b*b*b+c*c*c){
        document.write(n+"<br>")};
    }  

    var arr1 = [];
arr1[0] = 5;
arr1[1] = 6;
arr1[2] = 7;
arr1[3] = 8;
arr1[4] = 9;
alert(arr1[3]);
alert(arr1.length);

var arr2 = [1,2,3,4,5];
alert(arr2[3]);
alert(arr2.length);

var arr3 = new Array();
arr3[0] = 5;
arr3[1] = 6;
arr3[2] = 7;
arr3[3] = 8;
arr3[4] = 9;
alert(arr3[3]);

var arr4 = new Array(1,2,3,4,5);
arr4[3] = 78;
alert(arr4[3]);
alert(arr4.length);

var arr5 = new Array(10);
arr5[3] = 78;
alert(arr5[8]);
alert(arr5.length);

var arr6 = new Array(10,20,30,40,50);
for(var i=0;i<arr6.length;i++){
    arr6[i] += 10;
}
alert(arr6);

var arr7 = new Array(10,20,30,40,50);
for(var i=arr7.length-1;i>=0;i--){
    arr7[i] += 10;
}
alert(arr7);

var arr8 = new Array(10,20,30,40,50,60,70,80);
for(var i=0;i<arr8.length;i++){
    if(i%2==0){
        arr8[i] += 10;
    }else{
        arr8[i] += 20;
    }
}
alert(arr8);

//缩容、扩容
var week = [];
week[0] = 'sun';
week[2] = 'the';
week.length = 2;
document.write(week);
document.write(week.length);
alert(week[2]);

var num = [10,20,30,40,50];
for(var i in num){
        document.write(i + "-" + num[i] + "<hr/>");
}

//数组转化方法
var sum = [1234,"饶世弟",true ,0,2,3,"5",new Date()];
document.write(sum);
document.write(typeof(sum[0]));
document.write(typeof(sum[1]));
document.write(typeof(sum[2]));
document.write(sum.valueOf() + "<hr/>" + typeof(sum[0]));
document.write(sum.toString() + "<hr/>" + typeof(sum[0]));
document.write(sum.toLocaleString() + "<hr/>");
document.write(sum.join("**") + "<hr/>");
document.write(typeof(sum[0]));
document.write(typeof(sum[0].toLocaleString()));
document.write(typeof(sum[2].valueOf()));

//链接数组+获取子数组
var arr1 = [90,98,97];
var arr2 = ["我是谁","不是饶世弟","也不是张英"];
var arr3 = [70,71,72,73];
var arr4 = arr1.concat(arr2,arr3,"师弟真的不是故意的",arr1);
document.write(arr4.join("--") + "<hr/>");
var arr5 = arr4.slice(3,7);
alert(arr5);

//获取子数组
var a = [1,2,3,4,5,6];
document.write(a);
var b = a.slice(-4);
alert(b);

//修改数组
var c = [1,2,3,4,5,6];
var d = c.splice(2,0,21,22,23);
alert(d);
document.write(c);

//倒转数组
var e = [1,2,3,4,5,6];
e.reverse();
document.write(e);
e.reverse();
document.write(e.reverse());

//数组排序
function bb (a,b) {
    return a-b;
}
var f = [10,30,20,5,40,60,52,70,90,80,6,7,2];
f.sort(bb);
document.write(f);
*/
