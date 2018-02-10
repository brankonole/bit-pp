// function multipliesEveryPositiveElement(x) {
//     var mult = 1;
//     var b = [];

//     for (var i = 0; i < x.length; i++) {
//         if (x[i] > 0) {
//             mult = x[i]*2;
//             b[i] =  mult;
//         } else {
//             b[i] = x[i];
//         }
//     }
//     return b;
// }

// var x = [-3, 11, 5, 3.4, -8];
// console.log(multipliesEveryPositiveElement(x));


function firstElementLargerThanMinimum(arr) {
    var a = arr[0],
        b = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a) {
            b = a;
            a = arr[i];
        } else if (arr[i] < b) {
            b = arr[i];
        }
    }
   
    return b;
}

var arr = [11, 7, 8, 2, 9];
console.log(firstElementLargerThanMinimum(arr));