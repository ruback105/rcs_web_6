const text = "Some text";
const additionalText = "Some additional text";

console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.length);
console.log(text[0]);

console.log(text + " " + additionalText);
console.log(text.concat(" ", additionalText));
console.log(`${text} ${additionalText}`);

console.log(additionalText.trim());

const text2 = String(undefined);
console.log(typeof text2);
