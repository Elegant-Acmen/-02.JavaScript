/*
//indexOf()检索字符串
var msg = "@zhangying@163@sohu.com";
document.write(msg.indexOf('i') + "<hr/>");
document.write(msg.indexOf('@',15) + "<hr/>");
document.write(msg.indexOf('i') + "<hr/>");
document.write(msg.indexOf('miaomaio') + "<hr/>");
document.write(msg.lastIndexOf('@') + "<hr/>");

//slice(),substring()截取子字符串
var msg1 = "abcdefg1234567";
document.write(msg1 .slice(3,7) + "<hr/>");
document.write(msg1 .slice(3) + "<hr/>");
document.write(msg1 .slice(-7,-3) + "<hr/>");
document.write(msg1 .substring(3,7) + "<hr/>");

//split()分割字符串
var msg2 = " How are you doing ";
var aa = msg2.split(" ");
for (var i = 0; i < aa.length;i++) {
    document.write(i + "=" + aa[i] + "<br>");
}
document.write(msg2[1]);
document.write(msg2[3]);
document.write(aa);
document.write(aa[0]);
document.write(typeof(aa[1]));

//concat()连接字符串
var s1 = 'AA';
var s2 = 'yingming';
var s3 = 'shenwu';
var s4 = s1.concat(s2,s3,'臭不要脸');
document.write(s1 + s2 + s3 + '<br>');
document.write(s4);

//replace()替换子字符串
var data = "刘英明四级就是没过，不过她挺不在乎的";
document.write( data + '<br>');
document.write( data.replace('刘英明','张英')+ '<br>');
document.write( data.replace(/刘英明/,'周苗苗')+ '<br>');

//match()匹配
var data2 = "刘英明四级刘英明就是没过，不过周苗苗她挺不在乎的";
document.write( data2 + '<br>');
document.write( data2.match('刘英明')+ '<br>');
document.write( data2.match(/周苗苗/)+ '<br>');
document.write( data2.match(/张英/)+ '<br>');

//search()查找
var data2 = "刘英明四级刘英明就是没过，不过周苗苗她挺不在乎的";
document.write( data2 + '<br>');
document.write( data2.search('刘英明')+ '<br>');
document.write( data2.search(/周苗苗/)+ '<br>');
document.write( data2.search(/张英/)+ '<br>');

//正则表达式手机号
var re = /^1[3-9]\d{9}$/;
var input = prompt("请输入您的电话号码");
//三元判断
re.test(input)?alert('您的号码是合法的'):alert('您的号码是不合法的');
//if语句判断
if(re.test(input) == true) {
    alert('您的号码是合法的');
}else{
    alert('您的号码是不合法的');
    }
//switch判断
switch(true) {
    case re.test(input):
    alert('您的号码是合法的');
    break;
    default:
    alert('您的号码是不合法的');
}
*/
/*var card = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2]\d)|(3[0-1]))\d{3}$/;
//|^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))(0[1-9])|([1-2]\d)|(3[0-1])\d{3}[\d,\dxX]$/;
var input = prompt("请输入您的身份证号码");
document.write(input.length);
card.test(input)?alert('您的号码是合法的'):alert('您的号码是不合法的');*/

/*var input = prompt("请输入您的身份证号码");
var card = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2]\d)|(3[0-1]))\d{3}$/;
card.test(input)?alert('您的号码是合法的'):alert('您的号码是不合法的');
switch(input.length) {
    case 15:
    alert("您的身份证经检测共15位");
    if(card.test(input) = ture) {
        alert('您的号码是合法的');
    }else {
        alert('您的号码是不合法的');
    }
    break;
}

//正则表达式，身份证号码检测，判断位数以及是否合法
function myFunction() {
    var input = prompt("请输入您的身份证号码");
    var num = input.length;
    if(num == 15) {
        alert("经检测您的号码共15位");
        var card = /^[1-9]\d{7oirtpyor5 ]tyiprt;klh'tioyp56[oy4 6-]50yo5\-9mg}((0[1-9])|(1[0-2]))((0[1-9])|([1-2]\d)|(3[0-1]))\d{3}$/;
        card.test(input)?alert('您的号码是合法的'):alert('您的号码是不合法的');
    }else if (num == 18){
        alert("经检测您的号码共18位");
        var card = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))(0[1-9])|([1-2]\d)|(3[0-1])\d{3}[\d,\dxX]$/;
        card.test(input)?alert('您的号码是合法的'):alert('您的号码是不合法的');
    }else{
        alert("您输入的号码有误，请查询后再输！！！");
    }
}
myFunction();

//replace()方法替换并修改颜色
var re = /(red|blue|green|yellow)/g;
var data = 'Flower are red,blue,yellow,or green';
var result = data.replace(re,'<h1 style="color:$1;">miaomiao</h1>');
document.write(result);

//用正则表达式去替换手机号中的某些位
var phone = prompt("请输入您的手机号");
var aa = phone;
var re = /^([1-9]\d{2})\d{4}(\d{4})$/;
var result = aa.replace(re,'<h1>$1****$2</h1>');
document.write(result);

//search()返回第一次出现匹配正则表达式子串的下标
var re = /<h1>Tob<\/h1>/ig;
var data = '<h1>Tom</h1>Danny<h1>Tob</h1>Bob';
document.write(data.search(re));

//split()使用一个指定的字符串或正则表达式，对原字符进行拆分
var re = /\s+/;
var data = '<h1>How are you</h1>';
var arr = data.split(re);
document.write(arr);

//Math()对象及其用法
var max = Math.max(3,6,9,59146,1589,656,78,65,1589);
alert(max);
var min = Math.min(3,6,9,59146,1589,656,78,65,1589);
alert(min);
var m1 = Math.PI;
document.write(m1 + "<hr>");
document.write("我是向上舍入："+Math.ceil(5.0000000000001) + "<hr>");
document.write("我是向下舍入："+Math.floor(5.999999999999) + "<hr>");
document.write("我是正常的四舍五入："+Math.round(5.49) + "<hr>");
document.write("我是2的3次方："+Math.pow(2,3) + "<hr>");
document.write("我是exp："+Math.exp(3) + "<hr>");

//输出0-100之间随机数
document.write(Math.floor(Math.random() * 100));

//Date()
alert(new Date());
alert(new Date().getDay());

var re = null,
i;
for (i=0;i < 3;i++) {
    re = /cat/g;
    re.test("catastrophe");
}
for (i=0;i < 10;i++) {
    re = new RegExp ("cat","g");
    re.test("catastrophe");
}

//Function()对象
function add() {

}
alert(typeof(add));
var bb = new Function();
alert(typeof(bb));

//this关键字
window.color="red";
var a = {color:"black"}
var o = {color:"bule  yellow"};
function obj(){
    alert(this.color);
}
obj();
o.a123 = obj;
o.a123();
a.obj = obj;
a.obj();

//使用function直接命名函数
function a(num1,num2) {
    var sum = num1+num2;
    alert(sum);
}
a(5,6);
//使用直接量方式声明命名函数
var b = function(num1,num2) {
    alert(num1+num2);
}
b(3,7);
//使用Function对象构造方法创建函数
var c = new Function("num1","num2","alert(num1+num2);");
c(7,8);

//闭包
var n;
function fn() {
    var b = "b";
    n = function() {
        return b;
    }
    alert(n());   
}
fn();
var a;
function abb() {
    var num1 = 3;
    a = function() {
        return num1;
    }
    
    alert(a());
}
abb();

//闭包，回收机制测试
var b = 100;
function c() {
    var b = 200;
    function y() {
        return b;
    }
    return y();
}
alert(c());

//闭包应用
var foo = (
    function() {
        var secret = "张英不听话";
        return {
            //通过get_secret接口去访问函数
            get_secret:function() {
                return secret;
            },
            //通过new_secret接口去进行修改
            new_secret:function(new_secret) {
                secret = new_secret;
            }
        };
    }()
);
alert(foo.get_secret());//张英不听话
foo.new_secret('周苗苗更不听话');
alert(foo.get_secret());//修改后的结果，周苗苗更不听话

//new关键字创建对象
var obj1 = new Object();
obj1.name = "刘英明";
obj1.age = 22;
alert(obj1.name);
//对象直接量
var obj2 = {name:'张英',age:21};
alert(obj2.name);
//通过Object对象直接命名
function obj3() {
    name='饶世弟';
    age=21;
};
alert(name);

//遍历（枚举）
var obj4 = {
    "book name": "ava高级编程",
    "sub-title": "深入掌握java",
    "for":"有一定编程基础的人员",
    author: {
        firstname : "大卫",
        lastname :"波菲尔",
    }
}
for(var i in obj4) {
    document.write(i + ":" + obj4[i] + "<br>");
}
*/
/*var obj5 = Object({name:'饶世弟',age:'21'});
alert(obj5.name);

//定义新的Object
function obj3() {
    this.name='饶世弟';
    this.age=21;
};
alert(name);


//定义方法，计算圆形的面积和周长 方法一
var rect1 = {
    width:20,
    height:10,
    getSize:function() {
        return this.width * this.height;
    },
    getPeriment:perimeter
};
function perimeter() {
    return 2*(this.width + this.height);
}
alert("该四边形的面积等于：" + rect1.getSize());
alert("该四边形的周长等于：" + rect1.getPeriment());
//方法二
var rect1 = {
    width:20,
    height:10,
    getSize:function() {
        return this.width * this.height;
    },
    getPeriment:function() {
        return 2*(this.width + this.height);
    }
};
alert("该四边形的面积等于：" + rect1.getSize());
alert("该四边形的周长等于：" + rect1.getPeriment());

var rect1 = {
    width:20,
    height:10,
    getSize:size,
    getPeriment:periment,
};
function size() {
    return this.width * this.height;
}
function periment() {
    return 2*(this.width + this.height);
}
alert("该四边形的面积等于：" + rect1.getSize());
alert("该四边形的周长等于：" + rect1.getPeriment());

//输出圆的面积及周长
var circle1 = {
    radius:undefined,
    setRadius:function(radius) {
        this.radius = radius;
    },
    getSize:function() {
        return Math.PI*radius*radius;
    }
};
circle1.setRadius(radius='10');
alert(circle1.getSize());*/


window.onload = function() {
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        console.log(e);
        var emailobj = document.getElementById("email");
        if (emailobj.value == "") {
            alert("您输入为空！！！");
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            return false;
        } else {
            if (/^\w+@\w+\.\w+$/.test(emailobj.value)) {
                this.submit();
            }else{
                alert("请查询格式后，再输入");
                if(e && e.preventDefault) {
                    e.preventDefault();
                }
            }
        }
    },false);
}
