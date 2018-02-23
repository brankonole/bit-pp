'use strict';

(function () {

    console.log("Hi! We can do it! :)");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return name + " " + surname;
        }
    }

    function Seat(number, category) {
        this.number = number || Math.floor(Math.random() * 10 + 90);
        this.category = category || "E";
        this.getData = function () {
            return "" + number + ", " + category.toUpperCase();
        }
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return seat.getData() + ", " + person.getData(); //da li treba sa this ili ne
        }
    }

    function Flight(relation, date, listOfPassengers) {
        this.relation = relation;
        this.date = new Date();
        this.listOfPassengers = [];
        this.getData = function () {
            // return 
        }
        this.addPassenger = function (inputPassenger) {
            this.listOfPassengers.push(inputPassenger);
        }
        this.getData = function () {
            var ourPassengerList = "";
            for (var i = 0; i < listOfPassengers.length; i++) {
                ourPassengerList += "\n \t" + listOfPassengers[i].getData();
            }
            return "" + date + ", " + relation + ourPassengerList; //Passenger.getData()
        }
    }

    function Airport(name, listOfFlights) {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (inputFlight) {
            this.listOfFlights.push(inputFlight);
        }
    }

    var person1 = new Person("John", "Snow");
    var seat1 = new Seat(12, "b");
    var passenger1 = new Passenger(person1, seat1);
    var flight1 = new Flight('Belgrade-Tokyo', '10.10.2020.', [passenger1]);

    console.log(person1.getData());
    console.log(seat1.getData());
    console.log(passenger1.getData());
    console.log(flight1.getData());



})();