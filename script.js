const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showSlide(newIndex) {
  // wrap around
  if (newIndex < 0) newIndex = slides.length - 1;
  if (newIndex >= slides.length) newIndex = 0;

  // remove active from current
  slides[currentIndex].classList.remove("active");

  // force animation reset by removing + re-adding active
  // (this makes your keyframes replay every time)
  slides[newIndex].classList.remove("active");
  void slides[newIndex].offsetWidth; // reflow trick
  slides[newIndex].classList.add("active");

  currentIndex = newIndex;
}

nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

// Optional: keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") showSlide(currentIndex + 1);
  if (e.key === "ArrowLeft") showSlide(currentIndex - 1);
});