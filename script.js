const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
];

let currentIndex = 0;
const currentImage = document.getElementById("currentImage");

currentImage.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  currentImage.src = images[currentIndex];
});
