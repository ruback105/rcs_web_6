const arrayOfMarks = [6, 10, 2, 4, 7, 9, 1, 3, 5, 8, 9];

const arrayLength = arrayOfMarks.length; // 11

let sum = 0;

for (let i = 0; i < arrayLength; i++) {
  console.log(`${i} => ${arrayOfMarks[i]}`);
  sum = sum + arrayOfMarks[i];
}

console.log(sum);

const averageMark = Math.round(sum / arrayLength);

console.log(averageMark);

console.log("-------------------------------");

const arrayOfThings = ["apple", 123, "banana", null, undefined, -10, "orange"]; // start
const endArray = ["apple", "banana", "orange"]; // end

const emptyArray = [];

for (let i = 0; i < arrayOfThings.length; i++) {
  const element = arrayOfThings[i];

  if (typeof element === "string") {
    console.log(element);
    emptyArray.push(element);
  }
}

console.log(emptyArray);
