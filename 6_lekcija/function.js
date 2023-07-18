function multiple(param1, param2) {
  const result = param1 * param2;

  return result;
}

const result = multiple(1, 5);
const result2 = multiple(11, 12);

console.log(result);
console.log(result2);

console.log("---------------------------------");

const eurToUsdRatio = 1.12;

function applyRatio(originalPrice, ratio) {
  if (typeof originalPrice !== "number") {
    throw new Error("originalPrice is not a number");
  }

  const newPrice = originalPrice * ratio;

  return newPrice.toFixed(2);
}

function convertPrice(price, from, to, ratio) {
  const originalPrice = price.replace(from, ""); // 100
  const newPrice = applyRatio(Number(originalPrice), ratio);
  return `${newPrice}${to}`;
}

console.log(convertPrice("1000$", "$", "€", eurToUsdRatio));
console.log(convertPrice("114200$", "$", "€", eurToUsdRatio));

console.log(convertPrice("1000€", "€", "£", 0.86));

console.log("--------------------------------");

const dollarArray = ["100.70$", "1000.14$", "1500.20$"];

const eurArray = dollarArray.map((price) => {
  return convertPrice(price, "$", "€", eurToUsdRatio);
});

console.log(eurArray);
