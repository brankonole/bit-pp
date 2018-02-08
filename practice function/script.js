//test
// // // function sumOfFirstAndLastDigits (n) {
// // //     var sum;
// // //     var lastDigit;
// // //     var firstDigit;
// // //     var arrayOfNumbers = [];
// // //     var counter = 0;
    
// // //     if (typeof n !="number") {
// // //         return -1;
// // //     }
// // //     if (n < 0) {
// // //         n = -n;
// // //     }
// // //     while (n > 0) {
// // //         lastDigit = n % 10;
// // //         n = (n - lastDigit) / 10;

// // //         arrayOfNumbers[counter] = lastDigit;
// // //         counter++;
// // //     }
// // //     sum = arrayOfNumbers[0] + arrayOfNumbers[arrayOfNumbers.length - 1];

// // //     return sum;
// // // }

// // // console.log(sumOfFirstAndLastDigits(78799));
 

// Unfinished!
// // // function square(n) {
// // //     var i;
// // //     var star = "*";

// // //     for (i = 0; i < n; ) {

// // //     }
// // // }
// // // Unfinished
// // // console.log(square(5));
 
// // // 4. exercise
// // function arithmeticMean(a, b, c, d) {
// //     sum = a + b + c + d;
// //     mean = sum / 4;
// //     return mean;
// // }
// // console.log(arithmeticMean(4,5,6,7));

// //6. task
// function horizontalChart (x,y,z) {
//     var sum = '';
//     var sum2= '';
//     var sum3= '';
//     var globalSum = '';

//     for (var i = 0; i < x; i++) {
//         sum += '*';
//     }

//     for (var i = 0; i < y; i++) {
//         sum2 += '*';
//     }

//     for (var i = 0; i < z; i++) {
//         sum3 += '*';
//     }
//     return globalSum = sum  + '\n' + sum2 + '\n' + sum3;
// }
// console.log(horizontalChart(5,3,7));

// function sumOfOddElements (a) {
//     var sum = 0;

//9.TASK
//     for (var i = 0; i < a.length - 1; i++) {
//         if (typeof a[i] == "number") {
//             if (a[i] % 2 !== 0) {
//                 sum += a[i];
//             }
//         }
//     }
//     return sum;
// }

// var a = [1, 5,8, 'puuiuiup', 6, 8];
// console.log(sumOfOddElements(a));

//10. task
// function  numberOfAppearancesOfALetterA (x) {
//     var counter = 0;

//     if (typeof x == 'string') {
//         for (var i = 0; i < x.length; i++) {
//             if (x[i] == 'a' || x[i] === 'A') {
//                 counter++;
//             }
//         }
//     }
//     return counter;   
// }
// console.log(numberOfAppearancesOfALetterA('suncica'));


