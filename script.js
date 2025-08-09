const navIcon = document.querySelector(".nav-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const dialog = document.querySelector("dialog");

let dialogOpen = false;
navIcon.addEventListener("click", () => {
  if (dialogOpen === true) {
    dialog.close();
    dialogOpen = false;
  } else {
    dialog.show();
    dialogOpen = true;
  }
});
