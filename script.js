const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slider = document.querySelector(".slider");

let currentIndex = 0;

function showSlide(newIndex) {
  // Wrap around
  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }

  if (newIndex >= slides.length) {
    newIndex = 0;
  }

  // Remove current active
  slides[currentIndex].classList.remove("active");

  // Restart animations
  slides[newIndex].classList.remove("active");

  // Force reflow
  void slides[newIndex].offsetWidth;

  // Add active
  slides[newIndex].classList.add("active");

  currentIndex = newIndex;
}

/* -----------------------
   BUTTONS
------------------------ */

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });
}

/* -----------------------
   KEYBOARD
------------------------ */

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    showSlide(currentIndex + 1);
  }

  if (e.key === "ArrowLeft") {
    showSlide(currentIndex - 1);
  }
});

/* -----------------------
   MOBILE SWIPE
------------------------ */

let startX = 0;
let endX = 0;

if (slider) {

  slider.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
  });

  slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].screenX;

    const diff = endX - startX;

    // Swipe threshold
    if (Math.abs(diff) > 60) {

      // Swipe left
      if (diff < 0) {
        showSlide(currentIndex + 1);
      }

      // Swipe right
      else {
        showSlide(currentIndex - 1);
      }
    }
  });

}
