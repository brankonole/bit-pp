// function merge(a, b) {
//     var c = a;
//     var j = c.length;
//     for (var i=0; i<b.length; i++ ) {
//         c[j] = b[i];
//         j ++;
//     }
//     return c;

// }
// var arr1 = [3, 4, -2];
// var arr2 = [8,7];
// console.log(merge(arr1, arr2));


function arr(a, b) {
   var i;
   var j;
   var k;
   var c = [];
   var cLength = a.length + b.length;

for (i = 0, j=0, k=0 ; k < cLength ; k++) {
  if (k % 2 == 0) {
      c[k] = a[i]; 
      i++;
  } else {
      c[k] = b[j];
      j++;
  }

    }
    return c;
}
var a = [2,5,8]; 
var b = [1,9,3];
console.log(arr(a,b));

