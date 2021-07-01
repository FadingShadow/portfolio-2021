const header = document.querySelector("#header");
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");

hamburger.addEventListener('click',() => {
  hamburger.classList.toggle("close");
  nav.classList.toggle("open-navbar");
});

nav.addEventListener("click", (e) =>{
  if( nav.classList.contains("open-navbar") && e.target.classList.contains("nav-link")){
    hamburger.classList.toggle("close");
    nav.classList.toggle("open-navbar");
  }
})

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
