//1. zadatak
function capitalLetter(a) {
    var b = [];

    a.forEach(function (item) {
        item = item.charAt(0).toUpperCase() + item.slice(1);
        b.push(item);
    });
    return b;
}

// console.log(capitalLetter(['hello!', 'world']));

//2. zadatak
function taxSale(n) {
    const tax = 20;
    let result = n / 100 * tax;
    return result;
}

// console.log(taxSale(10));

//3. zadatak
function increaseEachElement(a, b = 1) {
    var c = a.map(x => x + b)

    return c;
}
// console.log(increaseEachElement([4, 9, 15, 7, 3, -8], 3));

//4.zadatak

function evenElems(arr) {
    let newArr = arr.filter(num => num % 2 == 0)

    return newArr;
}

console.log(evenElems([6,11,9,0,3]));

//5.zadatak

function containingJs(arr) {
    let c = arr.filter(function(e) {
        return e.toLowerCase().includes('js');
    })

    return c;
}

console.log(containingJs(['jscompiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));

//6. zadatak 

function intELem(arr){
    let a = arr.filter(function(e){
        return Number.isInteger(e)
    })
    return a;
}

// console.log(intELem([1.6, 11.34, 9.23, 7, 3.11, 8]));

//7. zadatak
function containingFive(arr){
    let a = arr.filter(function(e){
        return Number.isInteger(e) && e.toString().includes('5');
    })
    return a;
}

console.log(containingFive([23, 11.5, 9, 'abc', 45, 28, 553]));