'use strict';

(function(){
    
    function Genre (name) {
        this.name = name;
        this.getData = function() {
            var formattedString;
            formattedString = this.name[0] + this.name[this.name.length - 1]; 
            
            return formattedString.toUpperCase();
        }
    } 

    function Movie (nameOfMovie, genre, length) {
        this.title = nameOfMovie;
        this.genre = genre;
        this.length = length;
        this.getData = function() {
            return '' + nameOfMovie + ', ' + length + ', ' + genre.getData() + '';
        }
    }

    function Program (date, movies, totalNumOfMovies) {
        this.date = new Date(date);
        this.list = movies;
        this.totalNumOfMovies = 0; 
        this.addMovie = function (titleOfTheMovie) {
            this.list.push(titleOfTheMovie);
        }
        this.getData = function() {
            var moviesLength = 0,
                moviesList = '';
            
            for (var i in movies) {
                moviesLength += movies[i].length;
                moviesList += movies[i].getData() + ', \n';
            }

            return this.date + ', ' + moviesLength + ', \n' + moviesList;
        }
    }

    function Festival (name,programs,numOfAllMovies) {
        this.name = name;
        this.listOfPrograms = programs;
        this.numOfAllMovies = numOfAllMovies;
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }
        this.getData = function () {
            
        }
    }

    var drama = new Genre('Drama');
    var action = new Genre('Action');
    var movieOne = new Movie('12 Years a Slave', drama, '120');
    var movieTwo = new Movie('Mission impossible', action, '99');
    var program = new Program('10.10.2020.', [movieOne], 1);
    var p = new Program('10.10.2020.', [movieOne, movieTwo], );

    console.log(p.getData());
})();