const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const move = (direction) => {
  const currentSlide = track.querySelector(".current-slide");
  const currentIndex = slides.findIndex((slide) => slide === currentSlide);
  let targetIndex;

  if (direction === "next") {
    targetIndex = (currentIndex + 1) % slides.length;
  } else {
    targetIndex = (currentIndex - 1 + slides.length) % slides.length;
  }

  const targetSlide = slides[targetIndex];
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetDot = dots[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
};


nextButton.addEventListener("click", () => move("next"));
prevButton.addEventListener("click", () => move("prev"));


dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
