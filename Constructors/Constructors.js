//first exercise
// function convert () {

// function toRadix(N,radix) {
//     var HexN="", Q=Math.floor(Math.abs(N)), R;
//     while (true) {
//      R=Q%radix;
//      HexN = "0123456789abcdef".charAt(R)
//           + HexN;
//      Q=(Q-R)/radix; 
//      if (Q==0) break;
//     }
//     return ((N<0) ? "-"+HexN : HexN);
//    }
//    console.log(toRadix(12,HexN));

// 'use strict'

function convert (input, radix, newRadix) {    
    var output = parseInt(input, radix);   
    return output.toString(newRadix);
}

var input = "021";
var old = 8;
var newR = 2;

// console.log(convert(input, old, newR));

//second task

function reverse (n) {
    var str = n + "";
    var arr = str.split("");
    var reversedArr = arr.reverse();
    var reversedStr = reversedArr.join("");
    var reversedNum = parseInt(reversedStr, 10);

    return reversedNum;
}

console.log(reverse(46));
