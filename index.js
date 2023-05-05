const animationName = document.querySelector(".anim-name");
const brushAnim1 = document.querySelector(".brush-anim-1");
const brushAnim2 = document.querySelector(".brush-anim-2");
const header = document.querySelector("header");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const links = document.querySelectorAll("li");
const body = document.querySelector("body");

console.log(header);

window.addEventListener("load", () => {
  setTimeout(() => {
    animationName.style.height = "183px";
  }, 300);

  setTimeout(() => {
    brushAnim1.style.width = "168px";
  }, 900);

  setTimeout(() => {
    brushAnim2.style.width = "130px";
  }, 1020);
});

openModal.addEventListener("click", () => {
  header.style.visibility = "visible";
  body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
  header.style.removeProperty("visibility");
  body.style.overflow = "auto";
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    header.style.visibility = "hidden";
    body.style.overflow = "auto";
    header.style.removeProperty("visibility");
    body.style.overflow = "auto";
  });
});
