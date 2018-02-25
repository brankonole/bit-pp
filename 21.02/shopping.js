"use strict";

(function() {
    function Product(name, price, expirationDate) {

        this.id = (function() {
            var productId = Math.floor(Math.random()*90000) + 10000;
            return productId;
        })();
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.getInfo = function() {
            var nameOfProduct = this.name;
            var code =  nameOfProduct[0] + nameOfProduct[nameOfProduct.length-1];
            var codeUpperCasseLetters = code.toUpperCase();

            return codeUpperCasseLetters + this.id + ', ' + this.name + ', ' + this.price;
        }
    }

    function ShoppingBag() {

        this.list = [];
        
        this.addProduct = function (product){
            var currentDate = new Date();
            var expirationDate = new Date(2018, 9, 10);

            if (expirationDate - currentDate >= 0) {
                this.list.push(product);
            }
        }

        this.getAverage = function() {
            var sum = 0;
            var mean;
            // for (var i = 0; i < this.list.length; i++) {
            //     sum += this.list[i].price;
            // }
            this.list.forEach(function(product) {
                sum += product.price;
            })
        
            mean = sum / this.list.length;

            return mean.toFixed(3);
        }

        this.getMostExpensive = function() {
            var max = this.list[0].price;
            for (var i = 1; i < this.list.length; i++) {
                var product =  this.list[i];

                if (max < product.price) {
                    max =product.price;
                }
            } 
            return max;
        }
        this.calculateTotalPrice = function() {
            var sum = 0;

            // for (var i = 0; i < this.list.length; i++) {
            //     sum += this.list[i].price;
            // }
            this.list.forEach(function(product) {
                sum += product.price;
            });
            return sum;
        }
    }

    function PaymentCard(accountBalance, status, expirationDate) {
        this.accountBalance = accountBalance;
        this.status = status;
        this.expirationDate = new Date(expirationDate);
    }

    function checkoutAndBuy(allItemsPrices, statusOnCard) {
        if (allItemsPrices.calculateTotalPrice() <= statusOnCard.accountBalance) {
            return 'Successful';
        } else {
            return 'Not enough money';
        }
    }

    var coffeeExpirationDate = new Date(2018, 7, 23);
    var coffee = new Product('Grand kafa', 102.45, coffeeExpirationDate);
    var milk = new Product('Moja kravica', 89.99, new Date(2018, 3, 21));
    var iceCream = new Product('Frikom', 250,44,new Date(2018, 4, 18));
    var totalProducts = new ShoppingBag();
    var creditCard = new PaymentCard(480, true, '10.10.2020.');
    totalProducts.addProduct(coffee);
    totalProducts.addProduct(iceCream);

    console.log(checkoutAndBuy(totalProducts, creditCard));

//     console.log(coffee.getInfo());
//     console.log(milk.getInfo());
//     console.log(iceCream.getInfo());
//     console.log(y.getAverage());
})();