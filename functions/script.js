"use strict";

function addition(a, b) {
    var sum;

    sum = a + b;

    return sum;
}

var s = addition(2, 3);
// console.log(s);

function jadranskaLesnica(a) {
    if (typeof a == 'string') {
        return true;
    } else {
        return false;
    }
}

var s = jadranskaLesnica('abc');
// console.log(s);

function umcari(a) {
    if (a === ' ') {
        return true;
    } else {
        return false;
    }
}

// console.log(umcari(' '));

function toba(a, b) {
    var i = 0;
    var line = "";
    while (i < a) {
        i++;
        line = line + b;

    }

    return line;
}

// console.log(toba(10, "Ha"));

function zarkovo(a, b) {
    var counter = 0;

    for (var i = 0; i < b.length; i++) {
        if (b[i] === a) {
            counter++;
        }
    }

    return counter;
}

// console.log(zarkovo('a', 'ana brnabic'));

function beleVode(a, b) {
    var i = 0;

    while (i < b.length) {
        if (a === b[i]) {
            break;
        }
        i++;
    }

    return i + 1;
}

// console.log(beleVode("a", "ana brnabic"));

function beleVode(a, b) {
    var i = b.length - 1;
    while (i >= 0) {
        if (a === b[i]) {
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

// console.log(stingToArray("My random text"));

function firstPostition(str, n) {
    if (str.indexOf(n) !== -1) {
        return str.indexOf(n)+1;
    }
    
    return -1;
}

console.log(firstPostition('aijjtnrgnr dssb asfiuabf', 'j'));



