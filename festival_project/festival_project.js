'use strict';

(function () {

        function Genre(name) {
            this.name = name;
        }

        Genre.prototype.getData = function () {
            var formattedString;
            formattedString = this.name[0] + this.name[this.name.length - 1];
            return formattedString.toUpperCase();
        }

        function Movie(nameOfMovie, genre, length) {
            this.title = nameOfMovie;
            this.genre = genre;
            this.length = length;
        }

        Movie.prototype.getData = function () {
            return this.title + ', ' + this.length + ', ' + this.genre.getData();
        }

        function Program(date, movies, totalNumOfMovies) {
            this.date = new Date(date);
            this.movies = movies || [];
            this.totalNumOfMovies = totalNumOfMovies || 0;
        }

    Program.prototype.addMovie = function (titleOfTheMovie) {
        this.movies.push(titleOfTheMovie);
        this.totalNumOfMovies = this.movies.length;
    }

    Program.prototype.getData = function () {
        var moviesLength = 0,
            moviesList = '';

        for (var i = 0; i < this.movies.length; i++) {
            moviesLength += parseInt(this.movies[i].length);
            moviesList += this.movies[i].getData() + '\n';
        }

        return this.date + ', ' + moviesLength + '\n' + moviesList;
    }

    function Festival(name, programs, numOfAllMovies) {
        this.name = name;
        this.listOfPrograms = programs || [];
        this.numOfAllMovies = numOfAllMovies || 0;
    }

    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
        this.numOfAllMovies = 0;
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            this.numOfAllMovies += this.listOfPrograms[i].totalNumOfMovies;
        }
    }
    Festival.prototype.getData = function () {
        var programsList = '';

        for (var i = 0; i < this.listOfPrograms.length; i++) {
            programsList += this.listOfPrograms[i].getData() + '\n';
        }

        return this.name + ', ' + this.numOfAllMovies + '\n' + programsList;
    }

    function createMovie(title, length, genre) {
        return new Movie(title, genre, length);
    }

    function createProgram(date) {
        return new Program(date);
    }

    var drama = new Genre('Drama'),
        action = new Genre('Action'),
        mystery = new Genre('Mystery'),
        thriller = new Genre('Thriller'),
        movie1 = new Movie('12 Years a Slave', drama, '120'),
        movie2 = new Movie('Mission impossible', action, '99'),
        movie3 = new Movie('Se7en', mystery, '106'),
        movie4 = new Movie('The Usual Suspects', mystery, '92'),
        movie5 = new Movie('No Country for Old Men', thriller, '115'),
        movie6 = new Movie('The Prestige', mystery, '132'),
        movie7 = createMovie('Black swan', '100', thriller),
        movie8 = createMovie('The Green Mile', '94', drama),
        movie9 = createMovie('Million Dollar Baby', '132', drama),
        movie10 = createMovie('Forrest Gump', '142', drama),
        program1 = new Program('10.10.2020.', [movie1, movie2], 2),
        program2 = new Program('10.10.2020.', [movie3, movie4, movie5, movie6], 4),
        program3 = createProgram('12.12.2019.'),
        program4 = createProgram('02.02.2019.'),
        fest = new Festival('FEST', [program1, program2]);

    program3.addMovie(movie7);
    program3.addMovie(movie8);
    program4.addMovie(movie9);
    program4.addMovie(movie10);
    fest.addProgram(program3);
    fest.addProgram(program4);

    console.log(fest.getData());
})();