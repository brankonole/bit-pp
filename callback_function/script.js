// // var a = [1, 5, 3, 15];

// // function square(num)  {
// //     return num * num;
// // }

// // function sum (n) {
// //     return n + n;
// // }

// // // ------

// // function squareArray(a, callback) {
// //     var b = [];

// //     for (var i = 0; i < a.length; i++) {
// //         b[i] = callback(a[i])
// //     }

// //     return b;
// // }

// // console.log(squareArray(a, sum));

// // // -----

// function small () {
//     console.log("small");
// }

// function large () {
//     console.log("large");
// }
// function huge () {
//     console.log("huge");
    
// }


// function GenerateNumber(f) {
// if (i < 8) {
//  return 
// }
// else if (i >59) {
// }
// else  if (i >234567) {

// }

// console.log();

// }

var a = [2, 444, 16678],
    b = [12, 1235, 999];

function sum (a,b) {
    return a + b;
}

function sumArrays(a, b, f) {
    var c = [];

    for (var i = 0; i < a.length; i++) {
        c[i] = sum(a[i], b[i]);
    }

    return c;
}

// console.log(sumArrays(a, b, sum));

function f(name, surname) {
    return function () {
        console.log('' + name + '.' + surname + '@gmail.com'); 
    }
}

// f('mika', 'mikic')();


var result = (function f(a) {
    var counter = 0;
    var b = "";
    var star = '*';

    for (var i = 0; i <a.length; i++) {
        if (a[i] == 'a') {
            b +=  star;
            counter++;
        } else {
            b += a[i];
        }
    }
    console.log(counter);
    return b;
})('javascript');

console.log(result);






