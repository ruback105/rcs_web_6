const fruits = ["banana", "apple", "lime"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);

console.log(fruits[fruits.length - 1]);

const lastElement = fruits.pop();

fruits.push("orange");
fruits.push("abc");

console.log(fruits);

fruits.shift();

console.log(fruits);

fruits.unshift("abc");

console.log(fruits);

fruits[0] = "banana";
fruits[1] = "banana";
fruits[2] = "banana";
fruits[3] = "banana";

console.log(fruits);
