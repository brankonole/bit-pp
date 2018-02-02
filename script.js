var a = 15;
var b = 5;
var c = 2;

if (a>b && a>c) {
    if (b>c) {
        console.log(c, b, a);
    }
    else {
        console.log(b, c, a);
    }
}
else if (b>a && b>c) {
    if (a>c) {
        console.log(c, a, b);            
    }
    else {
        console.log(c, a, b);        
    }
}
else if (a>b){
    console.log(b, a, c);
} else {
    console.log(a, b, c);
}

// if (a > b) {
//     if (a > c) {
//         if (b > c) {
//             console.log(c, b, a);
            
//         }
//     } else if () {

//     }
// }