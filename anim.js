// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I, I just woke up from a dream", time: 7 },
  { text: "Where you and I had to say goodbye", time: 13 },
  { text: "And I don't know what it all means", time: 17 },
  { text: "But since I survived, I realized", time: 21 },
  { text: "Wherever you go, that's where I'll follow", time: 27 },
  { text: "Nobody's promised tomorrow", time: 32 },
  { text: "So I'ma love you every night like it's the last night", time: 36 },
  { text: "Like it's the last night", time: 39 },

  { text: "If the world was ending", time: 40 },
  { text: "I'd wanna be next to you", time: 45 },
  { text: "If the party was over", time: 40 },
  { text: "And our time on Earth was through", time: 51 },
  { text: "I'd wanna hold you just for a while", time: 60 },
  { text: "And die with a smile", time: 66 },
  { text: "If the world was ending ", time: 69 },
  { text: "I'd wanna be next to you", time: 72 },

  { text: "TE AMO NENII❤️🥰", time: 75 },

];

// Animar las letras
function updateLyrics() {
  lyrics.style.position = "absolute";
  lyrics.style.top = "10px"; // Ajusta la distancia desde la parte superior
  lyrics.style.left = "50%";
  lyrics.style.transform = "translateX(-50%)";
  lyrics.style.width = "100%";
  lyrics.style.textAlign = "center";
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);