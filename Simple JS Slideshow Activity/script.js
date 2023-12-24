(function () {
  "use strict";
  const myimages = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];

  let currentImage = 0;

  function nextPhoto() {
    currentImage++;
    if (currentImage > myimages.length - 1) {
      currentImage = 0;
    }
    document.querySelector("#myimage").src = myimages[currentImage];
  }

  function previousPhoto() {
    if (currentImage === 0) {
      currentImage = myimages.length - 1;
    } else {
      currentImage--;
    }

    document.querySelector("#myimage").src = myimages[currentImage];
  }

  document.querySelector("#next").addEventListener("click", nextPhoto);
  document.querySelector("#previous").addEventListener("click", previousPhoto);
})();
