const navIcon = document.querySelector(".nav-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const dialog = document.querySelector("dialog");

const mobileNav = (function () {
  let dialogOpen = false;
  return { dialogOpen };
})();

// let dialogOpen = false;
navIcon.addEventListener("click", () => {
  if (mobileNav.dialogOpen === true) {
    dialog.close();
    mobileNav.dialogOpen = false;
  } else {
    dialog.show();
    mobileNav.dialogOpen = true;
  }
});
