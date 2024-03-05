const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".btn-next");
const previousBtn = document.querySelector(".btn-previous");

let index = 0;

display(index);
function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  applyAnimation("animate__fadeIn");
}

function previousSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  applyAnimation("animate__fadeIn");
}

function applyAnimation(animationClass) {
  slides[index].classList.add(animationClass);
  slides[index].addEventListener("animationed", () => {
    slides[index].classList.remove(animationClass);
  });
  display(index);
}

nextBtn.addEventListener("click", nextSlide);
previousBtn.addEventListener("click", previousSlide);
