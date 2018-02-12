// prvi zadatak
// Write a function that calculates the maximum of two given numbers. 
// function max2 (a,b) {
//     var c;
//     if (a > b) {
//         c = a;
//     } else {
//         c = b;
//     } return c 
// }
// console.log(max2(-12,3))

// x funkcija

// function writeX (n) {
//     var i = 0;
//     var j = 0;
//     var c = ""
//     while (i < n) {
//         while (j < n) {
//             if (i == j) {
//                 c = c + "*";
               
//             } else {
//                 c = c + " ";
//             }  ++j;
//             // console.log(c);
            
//         } ++i;
//         c = c + "\n" ;
        
//     } return c 
// }

// console.log(writeX(5))


// function writeX (n) {
// var c = ""
// for (var i = 0; i < n; i++ ) {
//     for (var j = 0; j < n; j++) {
//     if (j == (n-i-1) || i == j ) {
//         c += "*";
//     } else {
//         c += " ";
//     } 
// } 
//  c += "\n"
// } return c
// }

// console.log(writeX(18));

// function arrayInput (array, input, position) {
//     var b = [];
//     b = array;
//     if (position > b.length) {
//         return "Eror"
//     } else {
//     var b = array;
//     b[position] = input;
// } return b 
// } 

// console.log(arrayInput([2, -2, 33, 12, 5, 8],78,3));



// function smile(faceSize, lineWidth) {
//     l = '';
//     n=faceSize; //faceSize and lineWidth are to long to manipulate with ease
//     sqc = n * n / 4;
//     fi = n + 1;
//     if (lineWidth) fi = lineWidth;
//     pnp = 0;
//     //if (n % 2) pnp = 1; // for two types of centering
//     for (i = 0; i <= n; i++) {
//         sqa = (parseInt(n / 2) - i + pnp) * (parseInt(n / 2) - i + pnp);
//         sqEyeI = (parseInt(n / 3) - i + pnp) * (parseInt(n / 3) - i + pnp);

//         for (j = 0; j <= n; j++) {
//             sqb = (parseInt(n / 2) - j + pnp) * (parseInt(n / 2) - j + pnp);
//             sqEyeJa = (parseInt(n / 3.5) - j + pnp) * (parseInt(n / 3.5) - j + pnp);
//             sqEyeJb = (parseInt(n / 1.4) - j + pnp) * (parseInt(n / 1.4) - j + pnp);
//             if ((sqa + sqb - fi < sqc && sqa + sqb + fi > sqc) || (sqa + sqb - fi < sqc / 2.5 && sqa + sqb + fi > sqc / 2.5 && i > n * 2 / 3) || (sqEyeI + sqEyeJb < fi / 1.7) || (sqEyeI + sqEyeJa < fi / 1.7 && sqEyeI + sqEyeJa > fi / 5 && i > n / 3)) l += '*  ';
//             else l += '   ';
//         }
//         l += '\n';

//     }
//     return (l);
// }
// console.log(smile(20,15));

// function IsThere(input, array) {
//     var i = 0;
//     while (i < array.length) {
//         if (input == array[i]) {
//             return "yes";
            
            
            
//         } i++;
//     } return "no"
// }

// console.log(IsThere(17, [5, -4.2, 17, 7]));

// function PosTimesTwo (array) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//             array[i] = 2*array[i];
//         } else {
//             array[i] = array[i];
//         }
//     } return array
// }

// console.log(PosTimesTwo([-3, 11, 5, 3.4, -8]));

// function min (array) {
//     var i = 0;
//     var min = array[0];
//     var min2 = array[0];
//     var position = 0;
//     var position2 = 0;
//     while (i < array.length) {
//         if (min > array[i]) {
//            min2 = min;
//            position2 = position;
//             min = array[i];
//             position = i;
            
//         } i++;
//     } return {min2, position2};
// }
// console.log(min([-4, 2, 2, -1, -6]))

// function SumOffPos (a) {
//     var i = 0;
//     var sum = 0;
//     while (i < a.length) {
//         if (a[i] > 0) {
//             sum += a[i];
//         } i++;
//     } return sum;
// }

// console.log(SumOffPos([3, 11, -5, -3, 2]));

// function SymetricArray (a) {
//     var i = 0;
//     while (i < a.length) {
//         if (a[i] !== a[a.length-i-1]) {
//             return "not symetric"
//         } i++;
//     } return "symetric"
// }

// console.log(SymetricArray([2, -4, -2, 6, -2, -4, 2]));

// function interArray (a,b) {
//     var l = a.length + b.length;
//     var c = [];
//     var j = 0;
//     var k = 0;
//     var i = 0;
//     while (i < l) {
//         if (i%2 == 0) {
//             c[i] = a[j];
//             j++
//         } else {
//             c[i] = b[k];
//             k++;
//         } i++;
//     } return c
// }

// console.log(interArray([4, 5, 6, 2], [3, 8, 11, 9]));


// function SumOffArrays (a,b) {
//     var c = a;
//     var i = a.length;
//     var t = a.length + b.length;
//     var k = 0;
    
    
//     while (i < t) {
//         c[i] = b[k]
//         i++;
//         k++;
        
        
//     } return c;
// }
// console.log(SumOffArrays([4, 5, 6, 2], [3, 8, 11, 9]));

// function delArray (array, element) {
//     var c = [];
//     var i = 0;
//     var j = 0;
//     while (i < array.length) {
//         if ( element !== array[i]) {
//             c[j] = array[i];
//             j++;
//         } i++;
//     } return c;
// }
// console.log(delArray([4, 6, 2, 8, 2, 2],2));

function InsertArray (e,p,a) {
    var c = a;
    var j = (p+1);
    
    
    c[p] = e;
    while (j < a.length) {
        c[j] = a[p];
        p++;
        j++;
        console.log(p);
        
 } return c;

}
console.log(InsertArray(78,3,[2, -2, 33, 12, 5, 8]));




    
