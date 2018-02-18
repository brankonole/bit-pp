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

// function convert (input, radix, newRadix) {    
//     var output = parseInt(input, radix);   
//     return output.toString(newRadix);
// }

// var input = "021";
// var old = 8;
// var newR = 2;

// // console.log(convert(input, old, newR));

// //second task


function reverse(n) {
    var str = n + "";
    var arr = str.split("");
    var reversedArr = arr.reverse();
    var reversedStr = reversedArr.join("");
    var reversedNum = parseInt(reversedStr, 10);

    return reversedNum;
}

// console.log(reverse(46));

function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

// console.log(alphabeticalOrder('branko novakovic'));

// Sortiranje bez upotrebe sort()
// function a(str) {
//     let doSort = true,
//         strArr = str.split('');

//     while (doSort) {
//         let isSorted = true;

//         for (let i = 0; i < strArr.length - 1; i++) {
//             if (strArr[i] > strArr[i + 1]) {
//                 let first = strArr[i],
//                     second = strArr[i + 1];

//                 strArr[i] = second;
//                 strArr[i + 1] = first;

//                 isSorted = false;
//             }
//         }

//         doSort = !isSorted;
//     }

//     return strArr.join('');
// }

// console.log(a('mare care'));

// 4. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

function alphabetizeWords(str) {
    var arr = str.split(' ').sort().join(' ');

    return arr;
}

// console.log(alphabetizeWords('Everything you can imagine is real'));


// 6. Write a function to convert a string to its abbreviated form.

function abbrevName(str) {
    var point = '.',
        arr = str.split(' ');

    arr[1] = arr[1].slice(0, 1) + point;

    return arr.join(' ');
}

// console.log(abbrevName('Branko Nole Novakovic'));

// 9. Write a function to hide email addresses to protect them from unauthorized users.

var a = "I am Branko and my email is brankon89@gmail.com please hide it";

function hideEmail(str) {
    var arr = str.split(' ');

    for (let i in arr) {
        if (isEmail(arr[i])) {
            let stars = '';

            for (let j = 0; j < arr[i].length; j++) {
                stars += '*';
            }

            arr[i] = stars;
        }
    }

    return arr.join(' ');
}

function isEmail(str) {
    var email = false;

    if (str.length >= 6 && str.indexOf('@') !== -1 &&  str.indexOf('@') !== 0) {
        var afterAt = str.split('@')[1];

        if (afterAt.indexOf('.') !== -1 && afterAt.indexOf('.') !== 0 && afterAt.indexOf('.') !== afterAt.length - 1 && afterAt.indexOf('.') !== afterAt.length - 2) {
            email = true;
        }
    }

    return email;
}

console.log(hideEmail(a));

