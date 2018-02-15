

// function cubeCalculation(a, calc) {
//     return calc(a);
//  }
 
//  var output = cubeCalculation(10, function (a) {
//     return 6 * a * a;
//  });
//  console.log(output);
// var age = 45;

// var user = {
//     name : "rex",
//     age : 34,
//     vip : function () {
//         var a;
//         if (user.age > 30) {
//             a = true;    
//         } else {
//             a = false;
//         } return a;
//     }
// }

// console.log(user.vip());

var breakfast = {
    name : 'sandwich',
    ingredients : ['bread', 'meat', 'mayo'],
    energy : 628,
    printInstructions : function () {
        var x;
        if (breakfast.energy > 600) {
           x = true;
        } else {
            x = false;
       } return x;
    },
   
    JSCompilant: function(){
        if(breakfast.printInstructions()){
            return breakfast.JSCompilant = true;
        }
        else{
           return  breakfast.JSCompilant = false;
        }
    }
 }


//  breakfast.JSCompilant();
console.log(breakfast.JSCompilant());

console.log(this);
