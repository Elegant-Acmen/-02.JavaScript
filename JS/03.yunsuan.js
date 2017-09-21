function mySum1() {
    var i = 10;
    var j = 10;
    var m = i + j;
    document.getElementById("sumid1").innerHTML = m;
}

function mySum2() {
    var i = 10;
    var j = 10;
    var m = i - j;
    document.getElementById("sumid2").innerHTML = m;
}

function mySum3() {
    var i = 10;
    var j = 10;
    var m = i * j;
    document.getElementById("sumid3").innerHTML = m;
}

function mySum4() {
    var i = 10;
    var j = 10;
    var m = i / j;
    document.getElementById("sumid4").innerHTML = m;
}

function mySum5() {
    var i = 10;
    var j = 9;
    var m = i % j;
    document.getElementById("sumid5").innerHTML = m;
}

function mySum6() {
    var i = 10;
    var j = ++i; //++在前先加再运算，++在后先运算再加
    document.getElementById("sumid6").innerHTML = j;
}

function mySum7() {
    var i = 10;
    var j = 10; //
    document.getElementById("sumid7").innerHTML = i += j; //i=i+j
}

function mySum8() {
    var i = "10";
    var j = 10;
    var m = i + j;
    document.getElementById("sumid8").innerHTML = m;
}

function mySum9() {
    var i = 10;
    var j = 10;
    document.getElementById("sumid9").innerHTML = i == j;
}

function mySum10() {
    var i = 101;
    var j = 10;
    document.getElementById("sumid10").innerHTML = i > 100 && j < 100;
}

function mySum11() {
    var i = 11;
    document.getElementById("sumid11").innerHTML = i > 10 ? "i大于10" : "i小于10";
}