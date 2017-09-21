/*var a = 500;
if (a > 400){
    alert("该值超出了我的运算范围");
}
alert ("还好，我知道你是谁");
var b = 50;
if (b > 400){
    alert("该值超出了我的运算范围");
}else{
    alert ("还好，我知道你是谁");
}
var quantity = 12;//数量
var UnitPrice = 50;//单价
var TotalPrice = quantity * UnitPrice;//总价
var Paid = 430;//实收金额
function computations() {
    if (TotalPrice >= 500){
        var Discount = TotalPrice * 0.8;//折后
        var Change = Paid - Discount;//找零
        alert("应收金额："+Discount);
        if(Change < 0){
            alert("不好意思，您的余额不足");
        }else{
            alert("找零：" + Change);
        }
    }else{
        var Change = Paid - TotalPrice;
        alert("应收金额：" + TotalPrice);
        alert("找零：" + Change);
    }
}
computations();*/
/*if语句的成绩判断
 function submitForm() {
    if (validate()) {
      document.getElementById("one").submit();
    }
   }
function validate() {
    if (confirm("您要查询自己分数的评价吗?")) {
        var sum = document.getElementById("input").value;
             if(sum >= 90){
                 alert("你好厉害呀，考了这么高分");
             }else if(sum >= 80){
                 alert("你也不错呦，再接再励");
            }else if(sum >= 60){
                alert("不要灰心，下次考个更高分");
            }else{
                alert("一次失败，不代表永远的失败");
    }
      return true;
    } else {
        alert("谢谢配合！");
      return false;
    }
   }*/
   /*var fruit = prompt("请输入您喜欢吃的水果");
   switch(fruit){
       case "苹果":
       alert("您喜欢吃的是苹果");
       break;
       case "香蕉":
       alert("您喜欢吃的是香蕉");
       break;
       case "芒果":
       alert("您喜欢吃的是芒果");
       break;
       case "葡萄":
       alert("您喜欢吃的是葡萄");
       break;
       default:
       alert("您的口味真重");
       break;
   }
var hobby = prompt("请输入您的爱好");
   switch(hobby){
       case "足球":
       case "篮球":
       case "棒球":
       case "乒乓球":
       alert("原来您喜欢的是球类运动啊");
       break;
       case "读书":
       case "看电影":
       case "听歌":
       case "养花":
       alert("原来您是一个文艺青年啊");
       break;
       case "游泳":
       case "跑步":
       case "健身":
       case "散步":
       alert("原来您喜欢有氧运动啊");
       break;
       default:
       alert("您的口味真重");
       break;

       var b = prompt("请输入您的成绩");
   switch(true){
       case b>=90:
       alert("你真棒");
       break;
       case b>=80:
       alert("你也不错");
       break;
       case 60:
       alert("你挺厉害的，加油");
       break;
       case "50":
       alert("你得努力啊");
       break;
       default:
       alert("革命尚未成功");
       break;
   }

   var x = 0;
   while(x <= 10){
      x= x++;
   }
   alert(x);

    var b = 1;
   b = b++;
   alert(b);

    var i = 15;
   while(i<1){
       i += 15;
       alert(i);
   }

   var c = 0;
   do{
       c += 15;
   }while(c<1);
alert(c);
   }
   
   var i = 0;
   while(i<10){
       alert(i);
       i++;
   }
  var i = 0;
  do{
      alert(i);
      i++;
  }while(i<10);
  var i = 100;
  while(i<10){
      alert(i);
      i++;
  }
  var i = 100;
  do{
      alert(i);
      i++;
  }while(i<10);

//输出结果是香蕉餐
var day = 7;
var week = 2;
   switch(day){
       case 1:
       alert("法国大餐");
       break;
       case 2:
       case 4:
       alert("满汉全席");
       break;
       case 7:
       if(week == 1){
           alert("苹果餐");
       }else{
           alert("香蕉餐");
       }
       break;
   }

   //undefined 我是饶世弟
   var str = "我是谁";
   function test(){
       alert(str);
       var str = "我是饶世弟";
       alert(str);
   }
   test();

   //匿名函数报错 阻塞输出
   (function(){
       var user = author = "我们是谁";
   })();
   alert(user);
   alert(author);

   //不知道 我们从哪来
    var user = "我们从哪来";
   changeUser();
   function changeUser(){
       var user = "不知道";
       alert(user);
   } 
   alert(user);

   //undefined 我们要到哪去
   var user = "我们要到哪去";
  changeUser ();
  function changeUser (){
      alert(user);
      var user = "你猜我们要去哪";
  } 
  alert(user);

  //报错
    (function(){
      alert(user);
      user = "作用域";
      alert(user);
  }());

  //Web前端
  var user = "Web前端";
function first() {
    alert(user);
};
function second() {
    var user = "JavaScript";
    first();
}
second();

//前端课程
var user = "前端课程";
function changeUser() {
    user = "HTML5";
    return;
    function user() {
        alert("函数运算符");
    }
}
changeUser();
alert(user);

//false
var n = (true + false) > 2 + true;
alert(n);

//function a(x) {
      return x * 2;
  }
function a(x) {
      return x * 2;
  }
  var a;
  alert(a);
   */
  
  
   