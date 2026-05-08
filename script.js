const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");

let audio = document.createElement("audio");
document.body.appendChild(audio);

function stopSongs() {
    audio.pause();
    audio.currentTime = 0;
}

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.innerText = sound;
    btn.classList.add("btn");

    btn.addEventListener("click", () => {
        stopSongs();
        audio.src = `sounds/${sound}.mp3`;
        audio.play();
    });

    buttons.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.innerText = "stop";
stopBtn.classList.add("stop");

stopBtn.addEventListener("click", stopSongs);

buttons.appendChild(stopBtn);