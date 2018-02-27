var obj = new Object();
obj.x = 12;
obj.y = 13;

var newObj = Object.create(obj);

console.log(newObj.x)

var newObj2 = Object.create(newObj);

console.log(newObj2.x);

