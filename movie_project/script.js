function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

function addMovie(title, length, genre) {
    return new Movie(title, length, genre);
}



var movieList = [];
var sumOfMinutes = 0;

btn.addEventListener('click', function () {
    var btn = document.querySelector('.btn');
    var createProgramBtn = document.querySelector('#createProgramBtn');
    var addMovieToProgramBtn = document.querySelector('#ddMovieToProgramBtn');
    var titleMovie = document.querySelector('#title');
    var lengthMovie = document.querySelector('#length');
    var genreMovie = document.querySelector('#genre');
    
    var title = titleMovie.value;
    var length = lengthMovie.value;
    var genre = genreMovie.value;
    var p = document.querySelector('.par');
    var div = document.querySelector(".movie-list");
    var moviesLength = document.querySelector("#movies-length");
    var isValid = false;


    if (title == "") {
        p.innerHTML = "Enter title!!!";
    } else if (length == "") {
        p.innerHTML = "Enter length!!!";
    } else if (typeof parseInt(length) !== "number" || isNaN(parseInt(length))) {
        p.innerHTML = "Enter valid length!!!";
    } else if (genre == "") {
        p.innerHTML = "Enter genre!!!";
    } else {
        p.innerHTML = "";
        isValid = true;
    }

    if (isValid == true) {
        var movie = addMovie(title, length, genre);
        movieList.push(movie);
        moviesLength.innerHTML = sumOfTime(length);

        div.innerHTML += "<p class='movie-item'>" + getData(title, length, genre).toString() + "</p>";
    }

    function getData(title, length, genre) {
        return title.charAt(0).toUpperCase() + title.slice(1) + ", " + length + "min, " + genreCode(genre);
    }
});

function genreCode(genre) {
    return (genre.slice(0, 1) + genre.slice(-1)).toUpperCase();
}


function sumOfTime(length) {
    return sumOfMinutes += parseInt(length);
}

function Program(date) {
    this.date = date;
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
    if (dateInput.value == "") {
        errorDate.innerHTML = "Enter date!!!"
    } else {
        programList.push(program);
        div.innerHTML += "<p class='program-item'>" + getData(dateInput.value).toString() + "</p>";
        errorDate.innerHTML = "";
    }
})