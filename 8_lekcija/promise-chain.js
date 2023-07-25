fetch("https://dummyjson.com/products/1").then((response) => {
  response.json().then((data) => {
    const divElement = document.querySelector("div");

    console.log(data);

    divElement.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    <img src="${data.thumbnail}" />
    `;
  });
});
