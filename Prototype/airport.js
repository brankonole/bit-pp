'use strict';

(function () {

        function Person(name, surname) {
            this.name = name;
            this.surname = surname;

        }

        function Seat(seatNumber, category) {
            this.number = seatNumber || Math.floor((Math.random() * 90) + 10);
            this.category = category || "e";
            this.getData = function () {
                return (this.number + ' , ' + this.category).toString();
            }
        }

        function Passenger(person, seat) {
            this.person = person;
            this.seat = seat;
            this.getData = function () {
                return this.seat.getData().toUpperCase() + " , " + this.person.getData();
            }
        }

        function Flight(relation, date) {
            this.relation = relation;
            this.listOfPassengers = [];
            this.date = date;
            this.getData = function () {
                var flightInfo = (this.date + " " + this.relation).toString() + "\n";
                for (var i = 0; i < this.listOfPassengers.length; i++) {
                    flightInfo += "\t\t\t\t" + this.listOfPassengers[i].getData().toString()  + "\n"
                   }
                   return flightInfo;
                }
            this.addPassenger = function (passenger) {
                this.listOfPassengers.push(passenger);
            }
        }
        

        function Airport() {
            this.name = "Nikola Tesla";
            this.listOfFlights = [];
            this.addFlight = function (flight) {
                this.listOfFlights.push(flight);
            }
        }

        function createFlight (relation, date) {
            return new Flight(relation,date);
        }
        function createPassanger (name, surname,seatNumber,category) {
            var newPerson =  new Person(name, surname);
            var newSeat = new Seat ( seatNumber, category);
            return new Passenger (newPerson, newSeat);
        }

        Person.prototype = function() {
            ge
        }

        var suncica = new Person ("Suncica", "Tomic");
        var seat1 = new Seat ();
        var suncicaPassenger = new Passenger(suncica, seat1);
        var flight1 = new Flight("Belgrade - Paris", "23 August 2018");
        var flight2 = new Flight("Belgrade - London", "3 August 2018");
        var airport = new Airport();
        var flight3 = createFlight ("Belgrade - Tokyo","5 8 2018");
        flight1.addPassenger(passenger1);
        airport.addFlight(flight1);
        airport.addFlight(flight2);
        var bikiPassanger = createPassanger ("Milos", "Birovljevic");
        var boriPassanger = createPassanger("Bori", "Sos");
        var brankoPassanger = createPassanger ("Branko", "Novakovic", 45);


        console.log(bikiPassanger.seat);
        
        
        
        


    })();
