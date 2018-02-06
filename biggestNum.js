var a = 15;
var b = 17;
var c = 11;
var max;
if (a > b) {
    max=a;
    if ( c > a) {
        max = c;
    }
} else {
    max=b;
    if (b<c){
        max = c;
    }
} 
console.log(max);