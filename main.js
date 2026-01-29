let auto = false;
let timer;

document.body.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    makeFlower(e.clientX, e.clientY);
    document.getElementById("bgm").play();
  }
});

document.getElementById("clearBtn").onclick = () => {
  document.querySelectorAll(".flower").forEach(f => f.remove());
};

document.getElementById("autoBtn").onclick = () => {
  auto = !auto;
  if (auto) {
    timer = setInterval(() => {
      makeFlower(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      );
    }, 300);
  } else {
    clearInterval(timer);
  }
};

function makeFlower(x, y) {
  const f = document.createElement("div");
  f.className = "flower";
  f.innerText = "🌸";
  f.style.left = x + "px";
  f.style.top = y + "px";
  document.body.appendChild(f);
}
