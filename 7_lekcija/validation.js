const form = document.querySelector("form");

const inputFields = document.getElementsByTagName("input");

const validation = {
  username: {
    required: true,
    minLength: 5,
    maxLength: 10,
  },
  email: {
    required: true,
    minLength: 5,
    maxLength: 10,
  },
  age: {
    required: true,
  },
  hobby: {
    required: true,
    minLength: 10,
  },
};

Array.from(inputFields).forEach((inputField) => {
  inputField.addEventListener("input", () => {
    inputField.classList.remove("error");

    const parentNode = inputField.parentNode;

    const errorParagraphs = parentNode.querySelectorAll("p.error");

    errorParagraphs.forEach((paragraph) => {
      paragraph.remove();
    });
  });
});

const showError = (inputField, errorMsg) => {
  inputField.classList.add("error");
  const errorMessage = errorMsg;
  const p = document.createElement("p");
  p.textContent = errorMessage;
  p.classList.add("error");

  inputField.parentNode.appendChild(p);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  Array.from(inputFields).forEach((inputField) => {
    const fieldName = inputField.name;
    const fieldValue = inputField.value;

    const fieldValidation = validation[fieldName];

    if (fieldValidation) {
      if (fieldValidation.required) {
        if (!fieldValue) {
          showError(inputField, "Field is required");
          return;
        }
      }
      if (fieldValidation.minLength) {
        if (fieldValue.length < fieldValidation.minLength) {
          showError(
            inputField,
            `Field should be at least ${fieldValidation.minLength} char long`
          );

          return;
        }
      }
      if (fieldValidation.maxLength) {
        if (fieldValue.length > fieldValidation.maxLength) {
          showError(
            inputField,
            `Field should be less than ${fieldValidation.maxLength} char long`
          );

          return;
        }
      }
    }

    // functionality to send data to back
  });
});
