const dollarArray = ["100$", "200$", "300$"];
const eurToUsdRatio = 1.12;

const euroArray = dollarArray.map((price) => {
  const priceWithoutDollar = price.replace("$", "");

  const euroPriceWithoutSign = Math.round(
    eurToUsdRatio * Number(priceWithoutDollar)
  );

  const euroPrice = `${euroPriceWithoutSign}€`;

  return euroPrice;
});

console.log(euroArray);

const test = [1, 2, 3].map((number) => {
  console.log(number);

  return number * number;
});

console.log(test);
