const divElement = document.querySelector("div");

// divElement.textContent = "<h1>Hey I am in div element</h1>";
divElement.innerHTML = "Hey I am in div element";

divElement.style.backgroundColor = "blue";
divElement.style.color = "red";

divElement.classList.add("menu-open");
divElement.classList.remove("menu-open");
divElement.classList.toggle("menu-open");

const pElement = document.createElement("p");
pElement.textContent = "I'm paragraph element";
pElement.classList.add("text");

divElement.prepend(pElement);

console.log(divElement.children);
