const inputs = document.querySelectorAll(".input");

const addFocusClass = function () {
  const parent = this.parentNode.parentNode;
  parent.classList.add("focus");
};

const removeFocusClass = function () {
  const parent = this.parentNode.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
};

inputs.forEach((input) => {
  input.addEventListener("focus", addFocusClass);

  input.addEventListener("blur", removeFocusClass);
});
