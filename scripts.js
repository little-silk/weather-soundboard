const allAudios = document.querySelectorAll("audio");
function stopAllAudio() {
  allAudios.forEach(function (audio) {
    audio.pause();
  });
}
const playSound = (e) => {
  let keyCode;
  if (e.type === "keydown") {
    keyCode = e.keyCode;
  } else {
    keyCode =
      e.target.getAttribute("data-key") ||
      e.target.parentNode.getAttribute("data-key");
  }
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio) return;
  stopAllAudio();
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransitiow);
});

window.addEventListener("keydown", playSound);
window.addEventListener("touchstart", playSound);
window.addEventListener("click", playSound);
