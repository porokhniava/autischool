const images = [
  "./image1.jpg",
  "./image2.jpg",
  "./image3.jpg",
  "./image4.jpg",
  "./image5.jpg",
  "./image6.jpg",
];

let currentIndex = 0;
const currentImage = document.getElementById("currentImage");

currentImage.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  currentImage.src = images[currentIndex];
});
