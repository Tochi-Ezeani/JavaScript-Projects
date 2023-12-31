(function () {
  "use strict";
  let currentImage = 0;
  const myphotos = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  const container = document.querySelector("#content");
  const nextBtn = document.querySelector("#next");
  const prevBtn = document.querySelector("#previous");

  nextBtn.addEventListener("click", function (event) {
    event.preventDefault();

    currentImage++;
    if (currentImage > myphotos.length - 1) {
      currentImage = 0;
    }

    let newSlide = document.createElement("img");
    newSlide.className = "fadeinimg";
    newSlide.src = `slides/${myphotos[currentImage]}`;
    container.appendChild(newSlide);

    if (container.children.length > 2) {
      container.removeChild(container.children[0]);
    }
  });

  prevBtn.addEventListener("click", function (event) {
    event.preventDefault();

    currentImage--;
    if (currentImage < 0) {
      currentImage = myphotos.length - 1;
    }

    let newSlide = document.createElement("img");
    newSlide.className = "fadeinimg";
    newSlide.src = `slides/${myphotos[currentImage]}`;
    container.appendChild(newSlide);

    if (container.children.length > 2) {
      container.removeChild(container.children[0]);
    }
  });
})();
