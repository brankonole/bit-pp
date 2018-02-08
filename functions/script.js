// function addition (a, b) {
//     var sum;

//     sum = a+b;
    
//     return sum;
// }

// var s = addition(2, 3);

// console.log(s);

function jadranskaLesnica (a) {
    if ( typeof a == 'string') {
        return true;
    } else {
        return false;
    }
}

// var s = jadranskaLesnica('abc');
// console.log(s);

// function umcari(a) {
//     if ( a === ' ') {
//         return true;
//     } else {
//         return false;
//     }
// }

// // console.log(umcari());

// function toba (a) {
//    var i = 0;
//    var s = 'Ha';
//    var line = "";
//     while (i < a) {
        
//         i++;
//         line = line + s;
         
//     }return line
// }

// console.log(toba(333)  )

function zarkovo (a, b) {
    var counter = 0;

    for (var i = 0; i < b.length; i++) {
        if (b[i] === a) {
            counter++;
        }
    }
    return counter;
}

console.log(zarkovo('a', 'ana brnabic'));

function beleVode (a, b) {
    var i = 0;
    while (i < b.length) {
        if ( a === b[i]) {
            break;
        }
        i++;
    } return i;
}

// console.log(beleVode("b", "ana brnabic"));

function beleVode (a, b) {
    var i = b.length - 1;
    while (i >= 0) {
        if ( a === b[i]) {

            return i;

        } 
        i--;    
    }

    return -1;
}

// console.log(beleVode("z", "ana brnabic"));

function stingToArray(a) {
    var b = [];

    if (typeof a == "string") {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === ' ') {
                b[i] = null;
            } else {
                b[i] = a[i];
            }            
        }
    }
    return b;
}

// console.log(stingToArray("My random"));



