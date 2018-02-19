// //exercise 1
// function duplicates (a) {
//     var b = [];
//     var j = 0;
//     var i = 0
//     for (i = 0, j = 0; i < a.length; i++, j+=2) {
//         b[j] = a[i];
//         b[j+1] = a[i];
//     }
//     return b;
// }
// console.log(duplicates([2, 4, 7, 11, -2, 1]));


//exercise 2
function removing(a) {
    var b = [];
    var i = 0;
    var j = 0;

    var arr = a.sort(function (a, b) {
        if (a < b) {
            return -1;
        }

        if (a > b) {
            return 1;
        }

        return 0;
    });

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            b[j] = arr[i];
            j++;
        } 
    }

    return b;
}
// console.log(removing([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

//exercise 3 a;
// function oddNumber (a) {
//     var i = 0;
//     var result;

//     for (i = 0; i < a.length; i++) {
//         if (a[i] % 2 == 1) {
//             result = true;
//         } else {
//             result = false;
//         }
//     }
//     return result;
// }
// console.log(oddNumber([2, 2, 2, 2, 2]));

// exercise 3 b;
function countsNum (a) {
    var i = 0;
    var counter = 0;
    var mid = a[(a.length - 1) / 2];    

    if (a.length % 2 == 1) {
      for (i = 0; i < a.length; i++) {
        if (a[i] < mid) {
            counter++;
        }
      } return counter;
    } else {
        return 'Error';
    }
    
}

console.log(countsNum([78, 8.1, 98, -1000000, 686, 44, 99.11]));
