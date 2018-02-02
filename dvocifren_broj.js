var a = 32,
    x = a % 10,
    y = (a - x) / 10,
    reverse_a = x*10 + y;

if (typeof a === "number") {
    if (a>9 && a<100) {
        console.log(reverse_a);
    }
    else if (a<-9 && a>-100) {
        console.log(reverse_a);
    } else {
        console.log('Greska!');
    }
} else {
    console.log('Greska!');
}