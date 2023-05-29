const animationName = document.querySelector(".anim-name");
const navbar = document.querySelector("nav");
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
  setTimeout(() => {
    iconTerminal.style.transform = "translate(-200px, -60px)";
    iconCamera.style.transform = "translate(200px, -60px)";
    icon.forEach((icon) => {
      icon.style.opacity = "1";
    });
  }, 400);

  setTimeout(() => {
    navbar.style.opacity = "1";
  }, 600);

  setTimeout(() => {
    iconFolder.style.transform = "translate(160px, -160px)";
    iconBracket.style.transform = "translate(-120px, -160px)";
  }, 410);

  setTimeout(() => {
    iconObject.style.transform = "translate(-170px, -100px)";
    iconSocial.style.transform = "translate(220px, -120px)";
  }, 420);

  setTimeout(() => {
    animationName.style.height = "183px";
  }, 500);
  setTimeout(() => {
    brushAnim1.style.width = "168px";
  }, 400);

  setTimeout(() => {
    brushAnim2.style.width = "130px";
  }, 900);
});

// -------------------ANIMATION ON SCROLL ------------------

if (document.documentElement.clientWidth > 750) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 306) {
      brushAnim3.style.width = "108px";
    }

    if (window.scrollY >= 386) {
      aboutText.style.opacity = "1";
    }

    if (window.scrollY >= 1016) {
      routesImg.style.opacity = "1";
    }

    if (window.scrollY >= 1632) {
      brushAnim4.style.width = "108px";
    }

    if (window.scrollY >= 1734) {
      skillsWebDev.style.opacity = "1";
    }

    if (window.scrollY >= 1938) {
      skillsGrowth.style.opacity = "1";
    }

    if (window.scrollY >= 2142) {
      skillsEditing.style.opacity = "1";
    }

    if (window.scrollY >= 2552) {
      brushAnim5.style.width = "109px";
    }

    if (window.scrollY >= 2856) {
      project4.style.transform = "translateX(0px)";
      project4.style.opacity = "1";
    }

    if (window.scrollY >= 3370) {
      project3.style.transform = "translateX(0px)";
      project3.style.opacity = "1";
    }

    if (window.scrollY >= 3833) {
      project2.style.transform = "translateX(0px)";
      project2.style.opacity = "1";
    }

    if (window.scrollY >= 4344) {
      project1.style.transform = "translateX(0px)";
      project1.style.opacity = "1";
    }

    if (window.scrollY >= 4800) {
      brushAnim6.style.width = "197px";
    }

    if (window.scrollY >= 5004) {
      contactP.style.opacity = "1";
    }

    if (window.scrollY >= 5208) {
      contactForm.style.opacity = "1";
    }

    if (window.scrollY >= 5508) {
      footer.style.opacity = "1";
    }
  });
} else {
  brushAnim3.style.width = "108px";

  aboutText.style.opacity = "1";

  routesImg.style.opacity = "1";

  brushAnim4.style.width = "108px";

  skillsWebDev.style.opacity = "1";

  skillsGrowth.style.opacity = "1";

  skillsEditing.style.opacity = "1";

  brushAnim5.style.width = "109px";

  project4.style.transform = "translateX(0px)";
  project4.style.opacity = "1";

  project3.style.transform = "translateX(0px)";
  project3.style.opacity = "1";

  project2.style.transform = "translateX(0px)";
  project2.style.opacity = "1";

  project1.style.transform = "translateX(0px)";
  project1.style.opacity = "1";

  brushAnim6.style.width = "197px";

  contactP.style.opacity = "1";

  contactForm.style.opacity = "1";

  footer.style.opacity = "1";
}
document.addEventListener("mousemove", function (event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  let zoneWidth = document.documentElement.clientWidth;
  let zoneHeight = document.documentElement.clientHeight;

  let mouseXPercent = Math.floor((mouseX / zoneWidth) * 90);
  let mouseYPercent = Math.floor((mouseY / zoneHeight) * 90);

  let mouseXmultiplicatorR;
  let mouseYmultiplicatorR;
  let mouseXmultiplicatorL;
  let mouseYmultiplicatorL;

  if (
    !(
      mouseXPercent >= 40 &&
      mouseXPercent <= 60 &&
      mouseYPercent >= 40 &&
      mouseYPercent <= 60
    )
  ) {
    mouseXmultiplicatorR = (mouseXPercent - 50) / 100 + 1;
    mouseYmultiplicatorR = (mouseYPercent - 50) / 100 - 1;
    mouseXmultiplicatorL = (mouseXPercent - 50) / 100 - 1;
    mouseYmultiplicatorL = (mouseYPercent - 50) / 100 - 1;
  } else {
    mouseXmultiplicatorR = (mouseXPercent - 50) / 100 + 1;
    mouseYmultiplicatorR = (mouseYPercent - 50) / 100 - 1;
    mouseXmultiplicatorL = (mouseXPercent - 50) / 100 - 1;
    mouseYmultiplicatorL = (mouseYPercent - 50) / 100 - 1;
  }

  // -------- RIGHT-ICON ------------

  iconFolder.style.transform = `translate(${160 * mouseXmultiplicatorR}px, ${
    -160 * -mouseYmultiplicatorR
  }px)`;
  iconSocial.style.transform = `translate(${220 * mouseXmultiplicatorR}px, ${
    -120 * -mouseYmultiplicatorR
  }px)`;
  iconCamera.style.transform = `translate(${200 * mouseXmultiplicatorR}px, ${
    -60 * -mouseYmultiplicatorR
  }px)`;

  // -----------LEFT-ICON -----------------

  iconBracket.style.transform = `translate(${-120 * -mouseXmultiplicatorL}px, ${
    -160 * -mouseYmultiplicatorL
  }px)`;
  iconObject.style.transform = `translate(${-170 * -mouseXmultiplicatorL}px, ${
    -100 * -mouseYmultiplicatorL
  }px)`;
  iconTerminal.style.transform = `translate(${
    -200 * -mouseXmultiplicatorL
  }px, ${-60 * -mouseYmultiplicatorL}px)`;
});
