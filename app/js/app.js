const shareButton = document.querySelector(".article__social-share");
const iconsContainer = document.querySelector(".social-icons");

shareButton.addEventListener("click", function () {
  this.classList.toggle("active");
  iconsContainer.classList.toggle("active");
});
