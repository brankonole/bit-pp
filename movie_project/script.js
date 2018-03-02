function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
   
}

Movie.prototype.getData = function (title, length, genre) {
    return this.title.charAt(0).toUpperCase() + this.title.slice(1) + ", " + this.length + "min, " + genreCode(this.genre);
}

function addMovie(title, length, genre) {
    return new Movie(title, length, genre);
}
var pushMovieOnList = document.querySelector("#push-movie-on-list");
var divProgramList = document.querySelector(".program-list")
var lastDiv = document.querySelector("#last-div")
var emptyArray = [];
var movieList = [];
var sumOfMinutes = 0;
var emptyMovieArray = [];

var btn = document.querySelector('.btn');
var createProgramBtn = document.querySelector('#createProgramBtn');
var addMovieToProgramBtn = document.querySelector('#addMovieToProgramBtn');
var titleMovie = document.querySelector('#title');
var lengthMovie = document.querySelector('#length');
var genreMovie = document.querySelector('#genre');
btn.addEventListener('click', function () {

    var title = titleMovie.value;
    var length = lengthMovie.value;
    var genre = genreMovie.value;
    var p = document.querySelector('.par');
    var div = document.querySelector(".movie-list");
    var moviesLength = document.querySelector("#movies-length");
    var isValid = false;
    // emptyMovieArray.push(movie.getData(title, length, genre).toString());

    if (title == "") {
        p.innerHTML = "Enter title!!!";
    } else if (length == "") {
        p.innerHTML = "Enter length!!!";
    } else if (typeof parseInt(length) !== "number" || isNaN(parseInt(length))) {
        p.innerHTML = "Enter valid length!!!";
    } else if (genre == "") {
        p.innerHTML = "Enter genre!!!";
    } 
    //DEBAGUJ OVO NOLE!!!
    // else if (emptyMovieArray.indexOf(movie.getData(title, length, genre).toString()) == "-1") {
    //     p.innerHTML = "Movie already exists!!!"
    
    // }
    
    else {
        p.innerHTML = "";
        isValid = true;
    }

    if (isValid == true) {
        var movie = addMovie(title, length, genre);
        movieList.push(movie);
        moviesLength.innerHTML = sumOfTime(length);

        div.innerHTML += "<p class='movie-item'>" + movie.getData(title, length, genre).toString() + "</p>";

        /////


        pushMovieOnList.innerHTML += "<option>" + div.lastElementChild.textContent + "</option>";
    }


});


///////////////////////////////////////



function genreCode(genre) {
    return (genre.slice(0, 1) + genre.slice(-1)).toUpperCase();
}

function sumOfTime(length) {
    return sumOfMinutes += parseInt(length);
}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }
}

function addProgram(date) {
    return new Program(date);
}

function getData(date) {
    return date
}

var programList = [];
var dateInput = document.querySelector('#date');
var errorDate = document.querySelector('#errorDate');

createProgramBtn.addEventListener('click', function () {
    var div = document.querySelector(".program-list");
    var program = addProgram(dateInput.value);
    var pushProgramOnList = document.querySelector("#pushProgramOnList")
    if (dateInput.value == "") {
        errorDate.innerHTML = "Enter date!!!"
    } else {
        programList.push(program);
        div.innerHTML += "<p class='program-item'>" + getData(dateInput.value).toString() + "</p>";
        errorDate.innerHTML = "";
        pushProgramOnList.innerHTML += "<option>" + divProgramList.lastElementChild.textContent + "</option>";

    }
})

////////////////////////////////////////

addMovieToProgramBtn.addEventListener("click", function () {
    var selectedIndexOfMovie = pushMovieOnList.selectedIndex;
    var selectedIndexOfProgram = pushProgramOnList.selectedIndex;
    programList[selectedIndexOfProgram - 1].addMovie(movieList[selectedIndexOfMovie - 1]);
    if (emptyArray.indexOf(programList[selectedIndexOfProgram]) == "-1") {
        emptyArray.push(programList[selectedIndexOfProgram]);
        lastDiv.innerHTML += "<p>" + programList[selectedIndexOfProgram-1].date + "<br/>" + programList[selectedIndexOfProgram-1].listOfMovies[selectedIndexOfMovie-1].getData(this.title, this.length, this.genre) + "</p>"
    } else {

        lastDiv.innerHTML += "<p>" + programList[selectedIndexOfProgram-1].listOfMovies[selectedIndexOfMovie-1].getData(this.title, this.length, this.genre) + "</p>";
    }

})