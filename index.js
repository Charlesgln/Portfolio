const animationName = document.querySelector(".anim-name");
const brushAnim1 = document.querySelector(".brush-anim-1");
const brushAnim2 = document.querySelector(".brush-anim-2");
const mobileBrushAnim1 = document.getElementById("mobile-brush-anim-1");
const mobileBrushAnim2 = document.getElementById("mobile-brush-anim-2");
window.addEventListener("load", () => {
  setTimeout(() => {
    animationName.style.height = "183px";
  }, 300);

  setTimeout(() => {
    brushAnim1.style.width = "168px";
    mobileBrushAnim1.style.width = "90px";
  }, 900);

  setTimeout(() => {
    // brushAnim2.style.width = "129px";
  }, 1020);
});
