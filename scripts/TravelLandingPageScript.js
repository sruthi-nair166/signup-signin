const menuBtn = document.getElementById("menu-btn");
const menuTray = document.getElementById("menu-tray");
const closeBtn = document.getElementById("close-btn");
const menuLinks = document.querySelectorAll("#menu-tray a");

console.log(menuLinks);

menuBtn.addEventListener("click", () => {
  menuTray.classList.remove("hidden");
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  menuTray.classList.add("hidden");
  document.body.classList.remove("no-scroll");
});

menuLinks.forEach((link) => {
  console.log(link);
  link.addEventListener("click", () => {
    menuTray.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  });
});
