(function () {
  "use strict";
  const divElement = document.querySelector("div");
  const buttonElement = document.querySelector("button");

  buttonElement.addEventListener("click", function () {
    const newPElement = document.createElement("p");
    newPElement.innerHTML = "A new paragraph";
    divElement.appendChild(newPElement);
  });
})();
