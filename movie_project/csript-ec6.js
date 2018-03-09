class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    getData(title, length, genre) {
        return `${this.title.charAt(0).toUpperCase() + this.title.slice(1)}, ${this.length}min, ${genreCode(this.genre)}`;
    }
}

function addMovie(title, length, genre) {
    return new Movie(title, length, genre);
}
const pushMovieOnList = document.querySelector("#push-movie-on-list");
const divProgramList = document.querySelector(".program-list");
const lastDiv = document.querySelector("#last-div");
const emptyArray = [];
const movieList = [];
let sumOfMinutes = 0;
const emptyMovieArray = [];

const btn = document.querySelector('.btn');
const createProgramBtn = document.querySelector('#createProgramBtn');
const addMovieToProgramBtn = document.querySelector('#addMovieToProgramBtn');
const titleMovie = document.querySelector('#title');
const lengthMovie = document.querySelector('#length');
const genreMovie = document.querySelector('#genre');
btn.addEventListener('click', () => {

    const title = titleMovie.value;
    const length = lengthMovie.value;
    const genre = genreMovie.value;
    const p = document.querySelector('.par');
    const div = document.querySelector(".movie-list");
    const moviesLength = document.querySelector("#movies-length");
    let isValid = false;

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
        const movie = addMovie(title, length, genre);
        movieList.push(movie);
        moviesLength.innerHTML = sumOfTime(length);

        div.innerHTML += `<p class='movie-item'>${movie.getData(title, length, genre).toString()}</p>`;

        pushMovieOnList.innerHTML += `<option>${div.lastElementChild.textContent}</option>`;
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

const programList = [];
const dateInput = document.querySelector('#date');
const errorDate = document.querySelector('#errorDate');

createProgramBtn.addEventListener('click', () => {
    const div = document.querySelector(".program-list");
    const program = addProgram(dateInput.value);
    const pushProgramOnList = document.querySelector("#pushProgramOnList");
    if (dateInput.value == "") {
        errorDate.innerHTML = "Enter date!!!"
    } else {
        programList.push(program);
        div.innerHTML += `<p class='program-item'>${getData(dateInput.value).toString()}</p>`;
        errorDate.innerHTML = "";
        pushProgramOnList.innerHTML += `<option>${divProgramList.lastElementChild.textContent}</option>`;
    }
})

addMovieToProgramBtn.addEventListener("click", function () {
    let selectedIndexOfMovie = pushMovieOnList.selectedIndex;
    let selectedIndexOfProgram = pushProgramOnList.selectedIndex;
    programList[selectedIndexOfProgram - 1].addMovie(movieList[selectedIndexOfMovie - 1]);
    if (emptyArray.indexOf(programList[selectedIndexOfProgram]) == "-1") {
        emptyArray.push(programList[selectedIndexOfProgram]);
        lastDiv.innerHTML += `<p>${programList[selectedIndexOfProgram-1].date}<br/>${programList[selectedIndexOfProgram-1].listOfMovies[selectedIndexOfMovie-1].getData(this.title, this.length, this.genre)}</p>`
    } else {
        lastDiv.innerHTML += `<p>${programList[selectedIndexOfProgram-1].listOfMovies[selectedIndexOfMovie-1].getData(this.title, this.length, this.genre)}</p>`;
    }

})