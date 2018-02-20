//exercise number 8
var d = new Date(),
    newDay = new Date(2018, 7, 23),
    until = newDay - d;

// console.log(Math.ceil(until/1000/60/60/24));

//exercise number 9

function timeTripTakes(departure, arrival) {
    var d = new Date();
    var departureDate = new Date();
    var arrivalDate = new Date();
    var x = departure.split(':');
    var y = arrival.split(":");

    departureDate.setHours(x[0]);
    departureDate.setMinutes(x[1]);
    departureDate.setSeconds(x[2]);
    arrivalDate.setHours(y[0]);
    arrivalDate.setMinutes(y[1]);
    arrivalDate.setSeconds(y[2]);

    var a = Math.round((arrivalDate - departureDate)/1000/60/60);
    var b = Math.round(((arrivalDate - departureDate)/1000/60)-a*60);
    var c = Math.round(((arrivalDate - departureDate)/1000)-a*60*60-b*60);
    
    return ''+ a + ':' + b + ':' + c + '';
}

var departure = "8:22:13";
var arrival = "11:43:22";

console.log(timeTripTakes(departure, arrival))