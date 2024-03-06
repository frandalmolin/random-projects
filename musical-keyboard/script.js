const screen = document.querySelector(".screen");

window.addEventListener("keydown", (e) => {
  const key = document.getElementById(e.key);

  if (e.key === " ") {
    screen.textContent = screen.textContent + e.key;
  }

  if (!key) {
    return;
  }

//   key.children[0].play();
  screen.textContent = screen.textContent + e.key;

  const audioElement = document.querySelector('#' + e.key.toLowerCase() + ' audio');
    if (audioElement) {
        // Se existir um elemento de áudio correspondente, reproduza o áudio
        audioElement.play();
    }

});