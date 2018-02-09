function merge(a, b) {
    var i;
    /* index of the element in the array a */
    var j;
    /* index of the element in the array b */
    var k;
    /* index of the element in the array c */
    var c = [];
    for (i = 0, j = 0; i < a.length && j < b.length; k++) {
        /*  a[], b[] */
        if (a[i] < b[j]) {
            c[k] = a [i];
            i++;
        }
        else {
            c[k] = b[j];
            j++;
        }
    }
    if (i == a.length ) {
        for ( ; j<b.length; j++) {
            c[k] = a[i];
            k++;
        }
    } else {
        c[k] = b[j];
        k++;
        b++;
    }

    return c;
}

var firstArray = [4, 6, 11, 18, 32];
var secondArray = [-1, 7, 13, 15];

var finalArray = merge (firstArray, secondArray);
console.log(finalArray);
