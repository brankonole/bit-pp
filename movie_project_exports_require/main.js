'use strict';

const {Program} = require('./program');
const {Festival} = require('./festival');
const {Movie} = require('./movie');
const {Genre} = require('./genre');

(function () {

    function createMovie(mTitle, mLength, genreName) {
        var genreObj = new Genre(genreName);
        var movie = new Movie(mTitle, genreObj, mLength);

        return movie;
    }

    function createProgram(dateStr) {
        var date = new Date(dateStr);
        var program = new Program(date)
        return program;
    }

    var spiderman = createMovie("Spider-Man: Homecoming", 133, "Action");
    var planetApes = createMovie("War for the Planet of the Apes", 140, "Drama");
    var darkTower = createMovie("The Dark Tower", 95, "Western");
    var deadpool = createMovie("Deadpool", 108, "Comedy");

  
    var actionProgram = createProgram("Oct 28 2017");
    var comedyProgram = createProgram("Oct 29 2017");


    actionProgram.addMovie(spiderman);
    actionProgram.addMovie(planetApes);
    actionProgram.addMovie(darkTower);


    comedyProgram.addMovie(deadpool);


    var weekendFestival = new Festival("Weekend festival");


    weekendFestival.addProgram(actionProgram);
    weekendFestival.addProgram(comedyProgram);


    console.log(weekendFestival.getData());

})();