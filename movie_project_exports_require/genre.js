function Genre(genreName) {
    this.name = genreName;
}


Genre.prototype.getData = function () {
    var name = this.name;
    var firstIndex = 0;
    var lastIndex = name.length - 1
    var output = name.charAt(firstIndex) + name.charAt(lastIndex);

    return output.toUpperCase();
};

module.exports.Genre = Genre;