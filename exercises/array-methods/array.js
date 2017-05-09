var fruit = ["banana", "apple", "orange", "watermelon"];

var vegetable = ["carrot", "tomato", "peper", "letuce"];

console.log(fruit);

console.log(vegetable);

var veggiePop = vegetable.pop();

console.log(vegetable);

fruit.shift();

console.log(fruit);

fruit.indexOf("orange");

vegetable.push("2");

console.log(fruit, vegetable);

var veggieLength = vegetable.length;

console.log(veggieLength);
vegetable.push("4");
console.log(fruit, vegetable);
var food = fruit.concat(vegetable);
console.log(food);
food.splice(4, 2);
console.log(food);
console.log(food.reverse());
console.log(food);
console.log(food.toString());
