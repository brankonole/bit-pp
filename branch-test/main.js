function colorReader(a) {
    var firstTwo = [a[1] + a[2]],
        secondTwo = [a[3] + a[4]],
        thirdTwo = [a[5] + a[6]];
    firstNum = parseInt(firstTwo ,16);
    secondNum = parseInt(secondTwo ,16);
    thirdNum = parseInt(thirdTwo ,16);
    // console.log(t);
    finalColor = 'rgb('+ firstNum +', '+ secondNum +', '+ thirdNum +')';
   
    return finalColor;
}

console.log(colorReader("#F3A811"));

