const animationName = document.querySelector(".anim-name");
const brushAnim1 = document.getElementById("anim-1");
const brushAnim2 = document.getElementById("anim-2");
const brushAnim3 = document.getElementById("anim-3");
const brushAnim4 = document.getElementById("anim-4");
const brushAnim5 = document.getElementById("anim-5");
const brushAnim6 = document.getElementById("anim-6");
const header = document.querySelector("header");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const links = document.querySelectorAll("li");
const body = document.querySelector("body");
const icon = document.querySelectorAll(".icon");
const iconTerminal = document.getElementById("icon-terminal");
const iconObject = document.getElementById("icon-object");
const iconBracket = document.getElementById("icon-bracket");
const iconFolder = document.getElementById("icon-folder");
const iconSocial = document.getElementById("icon-social");
const iconCamera = document.getElementById("icon-camera");
const aboutText = document.querySelector(".about-text");
const routesImg = document.querySelector(".routes");
const skillsWebDev = document.querySelector(".skills-web-dev");
const skillsGrowth = document.querySelector(".skills-growth");
const skillsEditing = document.querySelector(".skills-editing");
const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const project3 = document.querySelector(".project-3");
const project4 = document.querySelector(".project-4");
const contactP = document.getElementById("contact-p");
const contactForm = document.getElementById("contact-form");
const footer = document.getElementById("footer");

// ---------------- ANIMATION ON LOAD ---------------

window.addEventListener("load", () => {
  iconTerminal.style.transform = "translate(-200px, -60px)";
  iconCamera.style.transform = "translate(200px, -60px)";
  icon.forEach((icon) => {
    icon.style.opacity = "1";
  });

  setTimeout(() => {
    iconFolder.style.transform = "translate(160px, -160px)";
    iconBracket.style.transform = "translate(-120px, -160px)";
  }, 10);

  setTimeout(() => {
    iconObject.style.transform = "translate(-170px, -100px)";
    iconSocial.style.transform = "translate(220px, -120px)";
  }, 20);
  setTimeout(() => {
    animationName.style.height = "183px";
  }, 200);
  setTimeout(() => {
    brushAnim1.style.width = "168px";
  }, 500);

  setTimeout(() => {
    brushAnim2.style.width = "130px";
  }, 700);
});

// ------------------- MODAL ON MOBILE -------------------

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

// -------------------ANIMATION ON SCROLL ------------------

window.addEventListener("scroll", function () {
  if (window.scrollY >= 306) {
    brushAnim3.style.width = "108px";
  } else {
    brushAnim3.style.width = "0px";
  }

  if (window.scrollY >= 386) {
    aboutText.style.opacity = "1";
  } else {
    aboutText.style.opacity = "0";
  }

  if (window.scrollY >= 1016) {
    routesImg.style.opacity = "1";
  } else {
    routesImg.style.opacity = "0";
  }

  if (window.scrollY >= 1632) {
    brushAnim4.style.width = "108px";
  } else {
    brushAnim4.style.width = "0px";
  }

  if (window.scrollY >= 1734) {
    skillsWebDev.style.opacity = "1";
  } else {
    skillsWebDev.style.opacity = "0";
  }

  if (window.scrollY >= 1938) {
    skillsGrowth.style.opacity = "1";
  } else {
    skillsGrowth.style.opacity = "0";
  }

  if (window.scrollY >= 2142) {
    skillsEditing.style.opacity = "1";
  } else {
    skillsEditing.style.opacity = "0";
  }

  if (window.scrollY >= 2552) {
    brushAnim5.style.width = "109px";
  } else {
    brushAnim5.style.width = "0px";
  }

  if (window.scrollY >= 2856) {
    project4.style.transform = "translateX(0px)";
    project4.style.opacity = "1";
  } else {
    project4.style.transform = "translateX(-100px)";
    project4.style.opacity = "0";
  }

  if (window.scrollY >= 3370) {
    project3.style.transform = "translateX(0px)";
    project3.style.opacity = "1";
  } else {
    project3.style.transform = "translateX(100px)";
    project3.style.opacity = "0";
  }

  if (window.scrollY >= 3833) {
    project2.style.transform = "translateX(0px)";
    project2.style.opacity = "1";
  } else {
    project2.style.transform = "translateX(-100px)";
    project2.style.opacity = "0";
  }

  if (window.scrollY >= 4344) {
    project1.style.transform = "translateX(0px)";
    project1.style.opacity = "1";
  } else {
    project1.style.transform = "translateX(100px)";
    project1.style.opacity = "0";
  }

  if (window.scrollY >= 4800) {
    brushAnim6.style.width = "197px";
  } else {
    brushAnim6.style.width = "0px";
  }

  if (window.scrollY >= 5004) {
    contactP.style.opacity = "1";
  } else {
    contactP.style.opacity = "0";
  }

  if (window.scrollY >= 5208) {
    contactForm.style.opacity = "1";
  } else {
    contactForm.style.opacity = "0";
  }

  if (window.scrollY >= 5508) {
    footer.style.opacity = "1";
  } else {
    footer.style.opacity = "0";
  }
});

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});
