const button = document.querySelector("button[type='submit']");

const counterElement = document.querySelector(".counter");

let counter = 15;

counterElement.textContent = counter;

button.addEventListener("click", () => {
  counter += 1;
  console.log(`click counter: ${counter}`);
  counterElement.textContent = counter;
});
