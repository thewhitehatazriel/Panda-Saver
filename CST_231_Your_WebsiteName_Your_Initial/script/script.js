document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".flex_left");
  elements.forEach((element) => {
    element.style.animationDelay = "0.5s"; // Delay for each animated element
  });
  const elements1 = document.querySelectorAll(".flex_right");
  elements1.forEach((element) => {
    element.style.animationDelay = "0.5s"; // Delay for each animated element
  });
});
