let i = 0;
let n = 10;
let div = [];
const home = document.querySelector("#home");
let height = home.clientHeight;
let width = home.clientWidth;

let box = Math.min(height, width);
box /= 30;
height -= box + 50;
width -= box + 50;

window.addEventListener("resize", () => {
  console.log("Hello");
  height = home.clientHeight;
  width = home.clientWidth;
  box = Math.min(height, width);
  box /= 30;
  height -= box + 50;
  width -= box + 50;
});

let iter = 0;

setInterval(function () {
  for (i = 0; i < 1; i++) {
    if(iter < 6){
      let x = 0;
      div[i] = document.createElement("div");
      iter++;
      console.log(iter);
      let y = Math.random();
      div[i].setAttribute(
        "style",
        "width: " +
          (y * box + box) +
          "px; height: " +
          (y * box + box) +
          "px; top:  " +
          Math.random() * height +
          "px; left: " +
          Math.random() * width +
          "px;"
      );
  
      div[i].setAttribute("class", "box");
      home.appendChild(div[i]);
      setTimeout(
        function (div) {
          div.remove();
          iter--;
        },
        3000,
        div[i]
      );
    }
  }
}, 250);
