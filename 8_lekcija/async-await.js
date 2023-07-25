// async function getProduct() {}
// const getProduct = async () => {};

const getProduct = async () => {
  const response = await fetch("https://dummyjson.com/products/1");
  const data = await response.json();

  const divElement = document.querySelector("div");

  divElement.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    <img src="${data.thumbnail}" />
    `;

  return data;
};

getProduct();
