var t  = [{x:5, y:7}, {x:2, y:5}, {x:23,y:-7}, {x:11,y:9}];

// console.log(t);

for (var i = 0; i < t.length; i++) {
    console.log(t[i].x, t[i].y);
    if (t[i].z != undefined) {
        console.log(t[i].x, t[i].y, t[i]z);
        
    } else {
        console.log(t[i].x, t[i].y);
        
    }
}

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
    
}

var o = {x:2, y:5, z:3} ;
for (property in o) {
    console.log(property + ":" + o[property]);
    
} 


//more practising at the class
'use strict'
var o = new Object ();

Object.defineProperty(o, "x" {
    value: 5,
    writable: true,
    enumerable: true
});

Object.defineProperty (o, "y" {
    value: 15,
    writable: true,
    enumerable: false
});

//console.log (o);
for (p in o) {
    console.log(p + ":" + o[p]);
}

console.log(o.y);
o.y = 20;
console.log(o.y);

