class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    printPersonData() {
        return `${this.name} ${this.surname}`;  
    }
}

class Programmer extends Person {
    constructor(name, surname, ...languages) {
        super(name, surname);
        this.languages = languages;
    }
    
    printProgramerData() {
        console.log(`Programmer: ${super.printPersonData()} ${this.languages}`);            
    }
    learnedNewLanguage(lang) {
        return this.languages.push(lang);
    }
}

// let person = new Person('Tamara', 'Mardjetko');
let programmer = new Programmer ('Tamara', 'Mardjetko', 'JS');

programmer.printProgramerData();
programmer.learnedNewLanguage('C');
programmer.printProgramerData();
