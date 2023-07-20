window.addEventListener("load", () => {
  const h1Elements = document.getElementsByTagName("h1");

  const h1Element = h1Elements[0];

  console.log(`element found by tag => `, h1Element);

  const h1ElementByClassName = document.getElementsByClassName("title-element");

  console.log(`element found by class => `, h1ElementByClassName[0]);

  const h1ElementById = document.getElementById("title");

  console.log(`element found by id => `, h1ElementById);

  const h1ElementByQuerySelector = document.querySelector("h1.title-element");

  console.log(`element found by querySelector => `, h1ElementByQuerySelector);

  const h1ElementsByQuerySelectorAll = document.querySelectorAll("h1");

  console.log(
    `elements found by querySelectorAll => `,
    h1ElementsByQuerySelectorAll
  );
});
