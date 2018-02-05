var a = 20,
    b = 12,
    c = 4;

if (a > b && b > c) {
   c = 1;
}
else if (b > c && c > a) {
    a = 1;
}
else {
   b = 1;
}
console.log(a + b + c);

    