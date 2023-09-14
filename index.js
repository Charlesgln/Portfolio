const animationName = document.querySelector(".anim-name");
const navbar = document.querySelector("nav");
const brushAnim1 = document.getElementById("anim-1");
const brushAnim3 = document.getElementById("anim-3");
const brushAnim4 = document.getElementById("anim-4");
const brushAnim5 = document.getElementById("anim-5");
const brushAnim6 = document.getElementById("anim-6");
const header = document.querySelector("header");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const links = document.querySelectorAll("li");
const body = document.querySelector("body");
const socialCards = document.querySelector(".social-cards");
const icon = document.querySelectorAll(".icon");
const iconTerminal = document.getElementById("icon-terminal");
const iconObject = document.getElementById("icon-object");
const iconBracket = document.getElementById("icon-bracket");
const iconFolder = document.getElementById("icon-folder");
const iconSocial = document.getElementById("icon-social");
const iconCamera = document.getElementById("icon-camera");
const aboutText = document.querySelector(".about-text");
const skillsWebDev = document.querySelector(".skills-web-dev");
const skillsGrowth = document.querySelector(".skills-growth");
const skillsEditing = document.querySelector(".skills-editing");
const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const project3 = document.querySelector(".project-3");
const project4 = document.querySelector(".project-4");
const project5 = document.querySelector(".project-5");
const contactP = document.getElementById("contact-p");
const emailRedirect = document.querySelector(".email");
const footer = document.getElementById("footer");
const modal = document.querySelector(".modal-hide");
const nav = document.querySelector(".nav-animation");

// ---------------- ANIMATION ON LOAD ---------------

window.addEventListener("load", () => {
  if (document.documentElement.clientWidth > 750) {
    setTimeout(() => {
      iconTerminal.style.transform = "translate(-200px, -60px)";
      iconCamera.style.transform = "translate(200px, -60px)";
      icon.forEach((icon) => {
        icon.style.opacity = "0.3";
      });
    }, 400);

    setTimeout(() => {
      navbar.style.opacity = "1";
    }, 600);

    setTimeout(() => {
      iconFolder.style.transform = "translate(160px, -160px)";
      iconBracket.style.transform = "translate(-120px, -160px)";
    }, 710);

    setTimeout(() => {
      iconObject.style.transform = "translate(-170px, -100px)";
      iconSocial.style.transform = "translate(220px, -120px)";
    }, 720);

    setTimeout(() => {
      animationName.style.height = "183px";
    }, 500);
    setTimeout(() => {
      brushAnim1.style.width = "134px";
    }, 400);
  } else {
    setTimeout(() => {
      animationName.style.height = "81px";
    }, 100);
    setTimeout(() => {
      brushAnim1.style.width = "70px";
    }, 800);

    setTimeout(() => {
      iconTerminal.style.transform = "translate(-95px, -20px)";
      iconCamera.style.transform = "translate(35px, -35px)";
      icon.forEach((icon) => {
        icon.style.opacity = "0.3";
      });
    }, 500);

    setTimeout(() => {
      iconFolder.style.transform = "translate(60px, -200px)";
      iconBracket.style.transform = "translate(-100px, -220px)";
    }, 510);

    setTimeout(() => {
      iconObject.style.transform = "translate(-118px, -38px)";
      iconSocial.style.transform = "translate(116px, -85px)";
    }, 520);
  }
});

// -------------------ANIMATION ON SCROLL ------------------

window.addEventListener("scroll", function () {
  if (window.scrollY >= 306) {
    brushAnim3.style.width = "108px";
  }

  if (window.scrollY >= 386) {
    aboutText.style.opacity = "1";
  }

  if (window.scrollY >= 1016) {
    socialCards.style.opacity = "1";
  }

  if (window.scrollY >= 1632) {
    brushAnim4.style.width = "90px";
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
  if (window.scrollY >= 2552) {
    project5.style.transform = "translateX(0px)";
    project5.style.opacity = "1";
  }

  if (window.scrollY >= 3200) {
    project4.style.transform = "translateX(0px)";
    project4.style.opacity = "1";
  }

  if (window.scrollY >= 3670) {
    project3.style.transform = "translateX(0px)";
    project3.style.opacity = "1";
  }

  if (window.scrollY >= 4133) {
    project2.style.transform = "translateX(0px)";
    project2.style.opacity = "1";
  }

  if (window.scrollY >= 4644) {
    project1.style.transform = "translateX(0px)";
    project1.style.opacity = "1";
  }

  if (window.scrollY >= 5100) {
    brushAnim6.style.width = "140px";
  }

  if (window.scrollY >= 5604) {
    contactP.style.opacity = "1";
  }

  if (window.scrollY >= 6108) {
    emailRedirect.style.opacity = "1";
  }

  if (window.scrollY >= 5608) {
    footer.style.opacity = "1";
  }
});

const handleMove = (event) => {
  let mouseX, mouseY;

  if (event.type === "mousemove") {
    mouseX = event.clientX;
    mouseY = event.clientY;
  } else if (event.type === "touchmove") {
    event.preventDefault();
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
  }

  let scaleFactor;
  if (window.innerWidth <= 768) {
    scaleFactor = 0.5;
  } else {
    scaleFactor = 0.5;
  }

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
  if (event.type === "touchmove") {
    iconFolder.style.transform = `translate(${
      140 * mouseXmultiplicatorR * scaleFactor
    }px, ${-400 * -mouseYmultiplicatorR * scaleFactor}px)`;
    iconSocial.style.transform = `translate(${
      220 * mouseXmultiplicatorR * scaleFactor
    }px, ${-200 * -mouseYmultiplicatorR * scaleFactor}px)`;
    iconCamera.style.transform = `translate(${
      80 * mouseXmultiplicatorR * scaleFactor
    }px, ${-100 * -mouseYmultiplicatorR * scaleFactor}px)`;

    // -----------LEFT-ICON -----------------

    iconBracket.style.transform = `translate(${
      -180 * -mouseXmultiplicatorL * scaleFactor
    }px, ${-400 * -mouseYmultiplicatorL * scaleFactor}px)`;
    iconObject.style.transform = `translate(${
      -230 * -mouseXmultiplicatorL * scaleFactor
    }px, ${-120 * -mouseYmultiplicatorL * scaleFactor}px)`;
    iconTerminal.style.transform = `translate(${
      -180 * -mouseXmultiplicatorL * scaleFactor
    }px, ${-60 * -mouseYmultiplicatorL * scaleFactor}px)`;
  } else {
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

    iconBracket.style.transform = `translate(${
      -120 * -mouseXmultiplicatorL
    }px, ${-160 * -mouseYmultiplicatorL}px)`;
    iconObject.style.transform = `translate(${
      -170 * -mouseXmultiplicatorL
    }px, ${-100 * -mouseYmultiplicatorL}px)`;
    iconTerminal.style.transform = `translate(${
      -200 * -mouseXmultiplicatorL
    }px, ${-60 * -mouseYmultiplicatorL}px)`;
  }
};
if (document.documentElement.clientWidth > 750) {
  document.addEventListener("mousemove", handleMove);
} else {
  document.addEventListener("touchmove", handleMove);
}

function toggleHamburger() {
  var menu = document.querySelector(".hamburger-menu");
  menu.classList.toggle("cross");
  if (modal.classList.contains("modal-hide")) {
    modal.classList.remove("modal-hide");
    nav.classList.remove("fadeOut");
    modal.classList.add("modal-open");
    nav.classList.add("fadeIn");
    document.body.style.overflow = "hidden";
  } else {
    modal.classList.remove("modal-open");
    nav.classList.remove("fadeIn");
    modal.classList.add("modal-hide");
    nav.classList.add("fadeOut");
    document.body.style.overflow = "auto";
  }
}
