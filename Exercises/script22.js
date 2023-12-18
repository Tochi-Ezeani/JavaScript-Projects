(function () {
  "use strict";
  const pElement = document.querySelector("p");
  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    pElement.style.color = "green";
  });
})();
