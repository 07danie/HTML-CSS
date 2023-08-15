let spinnerWrapper = document.querySelector(".spinner-wrapper");

window.addEventListener("load", function () {
  spinnerWrapper.style.display = "none";
});

const sideNavOpen = document.querySelector(".hamburger");
const sideNavContent = document.querySelector(".sidebar-left");
const sideNavClose = document.querySelector(".sidebar-close");
const overlayEl = document.querySelector(".overlay-left");

function openNav() {
  sideNavContent.style.width = "350px";
  overlayEl.classList.add("overlay-left");
  sideNavClose.style.display = "block";
}
openNav();

function closeNav() {
  sideNavContent.style.width = "0";
  overlayEl.classList.remove("overlay-left");
  sideNavClose.style.display = "none";
}
closeNav();

const hamburgerEl = document.querySelector(".hamburger-menu-button");
const hamburgerSpanEl = document.querySelector(".hamburger-menu-button-open");

hamburgerEl.onclick = function () {
  hamburgerSpanEl.classList.toggle("hamburger-menu-button-close");
};

$(document).ready(function () {
  $(".popup-youtube").magnificPopup({
    type: "iframe",
  });
});
