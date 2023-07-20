const inputEl = document.getElementsByTagName("input")[0];
const p = document.getElementsByTagName("p")[0];

inputEl.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  p.textContent = inputValue;
});
