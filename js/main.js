const child = document.getElementsByClassName("child")[0];
const grandchild = document.getElementsByClassName("grandchild");

for (let i = 0; i < 200; i++) {
  child.innerHTML += `<div class="grandchild"></div>`;
  let duration = Math.random() * 5;
  grandchild[i].style.animationDuration = `${2 + duration}s`;
  grandchild[i].style.animationDelay = `${duration}s`;
}
