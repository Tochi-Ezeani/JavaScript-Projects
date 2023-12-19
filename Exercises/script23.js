(function () {
  "use strict";
  const pElements = document.querySelectorAll("p");
  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    for (let i = 0; i < pElements.length; i++) {
      pElements[i].style.color = "green";
    }
  });
})();
