const arrayOfThings = ["apple", 123, "banana", null, undefined, -10, "orange"]; // start

const emptyArray = [];

arrayOfThings.forEach((element) => {
  if (typeof element === "string") {
    console.log(element);
    emptyArray.push(element);
  }
});

console.log(emptyArray);

console.log("-------------------------------");

const arrayOfMarks = [6, 10, 2, 4, 7, 9, 1, 3, 5, 8, 9];

const arrayLength = arrayOfMarks.length;

let sum = 0;

arrayOfMarks.forEach((mark, i) => {
  console.log(`${i} => ${mark}`);
  sum = sum + mark;
});

const averageMark = Math.round(sum / arrayLength);

console.log(averageMark);

console.log("-----------------------");

const dollarArray = ["100$", "200$", "300$"];
let euroArray = [];

const eurToUsdRatio = 1.12;

for (let i = 0; i < dollarArray.length; i++) {
  const price = dollarArray[i];

  const priceWithoutDollar = price.replace("$", "");

  const euroPriceWithoutSign = Math.round(
    eurToUsdRatio * Number(priceWithoutDollar)
  );

  const euroPrice = `${euroPriceWithoutSign}€`;

  euroArray.push(euroPrice);
}

console.log(dollarArray);
console.log(euroArray);

euroArray = [];

dollarArray.forEach((price) => {
  const priceWithoutDollar = price.replace("$", "");

  const euroPriceWithoutSign = Math.round(
    eurToUsdRatio * Number(priceWithoutDollar)
  );

  const euroPrice = `${euroPriceWithoutSign}€`;

  euroArray.push(euroPrice);
});

console.log(dollarArray);
console.log(euroArray);
