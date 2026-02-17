const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showSlide(newIndex) {
  if (newIndex < 0) newIndex = slides.length - 1;
  if (newIndex >= slides.length) newIndex = 0;

  slides[currentIndex].classList.remove("active");

  // Reset animations
  slides[newIndex].classList.remove("active");
  void slides[newIndex].offsetWidth;
  slides[newIndex].classList.add("active");

  currentIndex = newIndex;
}

nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") showSlide(currentIndex + 1);
  if (e.key === "ArrowLeft") showSlide(currentIndex - 1);
});

/* -----------------------
   MOBILE SWIPE SUPPORT
------------------------ */

let startX = 0;
let endX = 0;

const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].screenX;
});

slider.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].screenX;

  const diff = endX - startX;

  // Swipe threshold (bigger = less sensitive)
  if (Math.abs(diff) > 60) {
    if (diff < 0) {
      showSlide(currentIndex + 1); // swipe left = next
    } else {
      showSlide(currentIndex - 1); // swipe right = prev
    }
  }
});
