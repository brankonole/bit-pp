var counterModule = (function() {
    var counter = 0;

    function incrementCounter() {
        counter++;
    }

    function printCounter() {
        console.log(counter);
    }
    return {
        incrementCounter : incrementCounter,
        printCounter : printCounter
    }

})();

counterModule.printCounter();
counterModule.incrementCounter();
counterModule.incrementCounter();
counterModule.printCounter();