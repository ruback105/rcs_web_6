// function applyRatio(originalPrice, ratio) {
//     if (typeof originalPrice !== "number") {
//       throw new Error("originalPrice is not a number");
//     }

//     const newPrice = originalPrice * ratio;

//     return newPrice.toFixed(2);
//   }

const applyRatio = (originalPrice, ratio) => {
  if (typeof originalPrice !== "number") {
    throw new Error("originalPrice is not a number");
  }

  const newPrice = originalPrice * ratio;

  return newPrice.toFixed(2);
};

const multiple = (param1, param2) => param1 * param2;

console.log(multiple(2, 10));
