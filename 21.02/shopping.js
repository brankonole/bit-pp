"use strict";

(function() {
    console.log('Hi! We can do it!');

    function Product(name, price, expirationDate) {

        this.id = (function() {
            var productId;
            // magic
            productId = 13521;
            return productId;
        })();
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.getInfo = function() {
            var a = this.name;
            var code =  a[0] + a[a.length-1];
            var codeUpperCasse = code.toUpperCase();

            return codeUpperCasse + this.id + ', ' + this.name + ', ' + this.price;
        }
    }

    function ShoppingBag() {

        this.list = [];

        
        this.addProduct = function (p){
            this.list.push(p);
        }

        this.getAverage = function() {
            var p = 0;
            var x;
            for (var i = 0; i < this.list.length; i++) {
                p += this.list[i].price;
            }
            x = p / this.list.length;

            return x.toFixed(3);
        }

        this.getMostExpensive = function() {
            var max = this.list[0].price;
            for (var i = 1; i < this.list.length; i++) {
                var product =  this.list[i] 
                if (max < product.price) {
                    max =product.price;
                }
            } 
            return max;
        }
        this.calculateTotalPrice = function() {
            var p = 0;
            for (var i = 0; i < this.list.length; i++) {
                p += this.list[i].price;
            }
            return p;
        }
    }

    function PaymentCard(accountBalance, status, expirationDate) {
        this.accountBalance = accountBalance;
        this.status = status;
        this.expirationDate = new Date(expirationDate);
    }

    function checkoutAndBuy(foo, boo) {
        if (foo.calculateTotalPrice() <= boo.accountBalance) {
            return 'Successful';
        } else {
            return 'Not enough money';
        }
    }



    var coffeeExpirationDate = new Date(2018, 7, 23);
    var coffee = new Product('Grand kafa', 102.45, coffeeExpirationDate);
    var milk = new Product('Moja kravica', 89.99, new Date(2018, 3, 21));
    var iceCream = new Product('Frikom', 250,44,new Date(2018, 4, 18));
    var y = new ShoppingBag();
    var l = new PaymentCard(480, true, '10.10.2020.');
    y.addProduct(coffee);
    y.addProduct(iceCream);

    console.log(checkoutAndBuy(y, l));

//     console.log(coffee.getInfo());
//     console.log(milk.getInfo());
//     console.log(iceCream.getInfo());
//     console.log(y.getAverage());
// 
})();