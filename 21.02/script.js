function a(arr) {
    var b = [];
    var c = [];
    var i = 0;
    var j = 0;
    var k = 0;

    while (j < arr.length) {
        b[j] = arr[Math.floor(Math.random()*arr.length)];
        c[k] = arr;
        if (b[j] !== arr[i]) {
            j++;
        }
    }

    return b;
}

console.log(a([2,5,7,99,1,3,4,9]));
