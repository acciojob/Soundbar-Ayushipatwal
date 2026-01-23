//your JS code here. If required.
let currentAudio = null;


document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const soundName = button.getAttribute("data-sound");

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});


document.querySelector(".stop").addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
