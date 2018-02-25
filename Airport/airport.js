'use strict';

(function () {

    // console.log("Hi! We can do it! :)");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + ' ' + this.surname;
        }
    }

    function Seat(number, category) {
        this.number = number || Math.floor(Math.random() * 10 + 90);
        this.category = category || 'e';
        this.getData = function () {
            return this.number + ', ' + this.category.toUpperCase();
        }
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ', ' + this.person.getData();
        }
    }

    function Flight(relation, date, listOfPassengers) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = listOfPassengers || [];
        this.addPassenger = function (inputPassenger) {
            this.listOfPassengers.push(inputPassenger);
        }
        this.getData = function () {
            var ourPassengerList = '';
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                ourPassengerList += '\n \t \t \t' + this.listOfPassengers[i].getData();
            }
            return this.date + ', ' + this.relation + ourPassengerList;
        }
    }

    function Airport(name, listOfFlights) {
        this.name = 'Nikola Tesla';
        this.listOfFlights = listOfFlights || [];
        this.addFlight = function (inputFlight) {
            this.listOfFlights.push(inputFlight);
        }
        this.getData = function() {
            var totalPassengers = 0;
            var fligthsInformation = '';

            for (var i = 0; i < this.listOfFlights.length; i++) {
                totalPassengers += parseInt(this.listOfFlights[i].listOfPassengers.length);
                
                fligthsInformation += '\n \t' + this.listOfFlights[i].getData();
            }
            
            return 'Airport: ' + this.name + ', total passengers:' + totalPassengers + fligthsInformation;
        }
    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }
    
    function createPassenger(firstName, lastName, seatNumber, category) {
        var person = new Person(firstName, lastName),
            seat = new Seat(seatNumber, category),
            passenger = new Passenger(person, seat);

        return passenger;
    }

    var person1 = new Person('John', 'Snow'),
        person2 = new Person('Cersei', 'Lannister'),
        seat1 = new Seat(12, 'b'),
        seat2 = new Seat(13, 'e'),
        passenger1 = new Passenger(person1, seat1),
        passenger2 = new Passenger(person2, seat2),
        passenger3 = createPassenger('Tyrion', 'Lannister', 1, 'e'),
        passenger4 = createPassenger('Daenerys', 'Targaryen', 155, 'e'),
        passenger5 = createPassenger('Jaime', 'Lannister', 12),
        passenger6 = createPassenger('Sansa', 'Stark'),
        flight1 = new Flight('Belgrade - Tokyo', '10.10.2018', [passenger1, passenger2]),
        flight2 = createFlight('Belgrade - Amsterdam', '10.10.2018'),
        flight3 = createFlight('Havana - Belgrade', '11.1.2018'),
        airport = new Airport('Belgrade airport', [flight1]);

    flight2.addPassenger(passenger1);
    flight2.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight3.addPassenger(passenger4);
    flight3.addPassenger(passenger5);
    flight3.addPassenger(passenger6);
    airport.addFlight(flight2);
    airport.addFlight(flight3);

    console.log(airport.getData());
})();