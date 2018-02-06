// // // // var message = "Good morning"
// // // // var i;
// // // // for (i=-5; i < -1;) {
// // // //     console.log(message);
// // // // }
// // // // console.log("Done.");

// // // // for (var x = 0; x <= 10; x++) {
// // // //     console.log(x * x);

// // // // }

// // // var i;

// // // for (i = 0; i <= 15; i++) {
// // //    if  ( i % 2 == 0) {
// // //        console.log(i + " je paran broj");
// // //    } else {
// // //        console.log(i + " je neparan broj");      
// // //    } 
// // // }

// // var i;
// // var sum = 0;

// // for (i = 0; i < 1000; i++) {
// //     if (i % 3 == 0 && i % 5 == 0) {
// //         sum += i;
// //     }
// // }
// // console.log(sum);

// var i;
// var j;
// var a = [1, 4, 7, 3];
// var n = a.length;
// var sum = 0;
// var pro = 1;

// for (i = 0; i < n; i++) {
//     sum += a[i];
// }
// console.log(sum);

// for (j = 0; j < n; j++) {
//     pro *= a[j];
// }
// console.log(pro);

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var sum = '';
// var n = x.length;

// for (i = 0; i < n; i++) {
//     sum += x[i];
// }
// console.log(sum);

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var sum = '';
// var n = x.length;

// for (i = 0; i < n; i++) {
//     sum += x[i];
// }
// console.log( "'"+ sum + "'" );

// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
// ];

// for (i = 0; i < a.length; i++) {
//     for (j = 0; j < a[i].length; j++) {
//         // console.log(a[i][j]);
//     }
// }

// console.log(a[0]);

// var a = [6, 5, 7, 15, 11, 5, 5];
// var i;
// var min = a[0];
// var max = a[0];
// var positionMin = 0;
// var positionMax = 0;

// for (i = 1; i < a.length; i++) {
//     if (a[i] <= min) {
//         min = a[i];
//         positionMin = i;
//     }
// }
// for (i = 1; i < a.length; i++) {
//     if (a[i] >= max) {
//         max = a[i];
//         positionMax = i;
//     }
// }
// console.log("Minimalan broj je " + min + " i nalazi se na poziciji " + positionMin + "!");
// console.log("Maksimalan broj je " + max + " i nalazi se na poziciji " + positionMax + "!");

var n = 4;
var s = "*";

for (var r = 0; r <= n-1; r++) {
    if (r === 0 || r === n-1) {
        var line = "";
        for (var i = 0; i < n; i++) {
            line += s;
        }
        // line += "\n";
        console.log(line); 
    } else {
        var line ="";
        line = line + s;
        for (var i = 0; i < n - 2; i++) {
            line = line + " ";
        }
        line = line + s;
        console.log(line);        
    }
}





