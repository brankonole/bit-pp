function Subject(name) {
    this.name = name;
}

Subject.prototype.getSubjectName = function () {
    return this.name;
}

// var subject01 = new Subject('JavaScript');
// console.log(subject01);
