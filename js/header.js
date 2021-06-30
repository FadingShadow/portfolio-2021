const header = document.querySelector("#header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.style.background = "rgb(13, 3, 23)";
  } else {
    header.style.background = "transparent";
  }
});

if (window.scrollY >= 50) {
  header.style.background = "rgb(13, 3, 23)";
} else {
  header.style.background = "transparent";
}
