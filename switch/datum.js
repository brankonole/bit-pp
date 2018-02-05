var day = 29;
var month = 1;
var year = 2103;
var vrstaMeseca;
var prestupna;
var d;
var m;
var x;

if (year % 400 == 0) {
    prestupna = 1
} else if (year % 4 == 0 || year % 100 !== 0) {
    prestupna = 0
} 


switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        vrstaMeseca = 1
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        vrstaMeseca = 0
        break;
}

if (vrstaMeseca == 1) {
    if (day > 0 && day < 32) {
        d = 1
    } else {
        d = 0
    }
}
else if (vrstaMeseca == 0) {
    if (day > 0 && day < 31) {
        d = 1
    } else {
        d = 0
    }
}

if (month == 2) {
    if (prestupna == 0) {
        if (day > 0 && day < 29) {
            d = 1
            } else {
                d = 0
            }
        } else if (prestupna == 1) {
            if (day > 0 && day < 30) {
                d = 1
                } else {
                    d = 0;
                }
            }
        }
        
    
if (month > 0 && month < 13) {
    m = 1
    } else {
     m = 0
    }


if (d == 1 && m == 1) {
    console.log("Datum je u redu")
} else {
    console.log("Datum nije u redu")
}
console.log(d,m)
