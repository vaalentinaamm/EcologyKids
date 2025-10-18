const characterImage = document.getElementById('characterImage');
const select = document.getElementById('characterSelect');
const messageBox = document.getElementById('messageBox');
const actionButton = document.getElementById('actionButton');

select.addEventListener('change', () => {
  const personaje = select.value;

  if (personaje === 'Steve') {
    characterImage.src = 'imgSteve.png';
    characterImage.className = 'character-image steve';
    messageBox.innerHTML = '¡Hola! Soy Steve. En Minecraft y en el mundo real, ¡reciclar es muy importante! 💚';
    actionButton.textContent = 'Haz clic para hablar con Steve 👉';
  } else {
    characterImage.src = 'imgAlex.png';
    characterImage.className = 'character-image alex';
    messageBox.innerHTML = '¡Hola! Soy Alex. Reciclar ayuda a cuidar el planeta y mantenerlo limpio 🌍✨';
    actionButton.textContent = 'Haz clic para hablar con Alex 👉';
  }
});

// 🎮 Mini juego de reciclaje
let puntaje = 0;
const objetos = document.querySelectorAll(".objeto");
const basureros = document.querySelectorAll(".basurero");
const mensaje = document.getElementById("mensajeJuego");
const puntajeTexto = document.querySelector("#puntaje span");

objetos.forEach(objeto => {
  objeto.addEventListener("dragstart", e => {
    e.dataTransfer.setData("tipo", objeto.dataset.tipo);
    e.target.classList.add("arrastrando");
  });

  objeto.addEventListener("dragend", e => {
    e.target.classList.remove("arrastrando");
  });
});

basureros.forEach(basurero => {
  basurero.addEventListener("dragover", e => e.preventDefault());

  basurero.addEventListener("drop", e => {
    const tipoObjeto = e.dataTransfer.getData("tipo");
    const tipoBasurero = basurero.dataset.tipo;

    if (tipoObjeto === tipoBasurero) {
      puntaje += 10;
      mensaje.textContent = "✅ ¡Bien hecho!";
      mensaje.style.color = "#00ff99";
      puntajeTexto.textContent = puntaje;

      // 🔹 En lugar de quitarlo del DOM, lo hacemos invisible pero mantiene su espacio
      const objetoCorrecto = document.querySelector(`.objeto[data-tipo="${tipoObjeto}"]`);
      objetoCorrecto.classList.add("oculto");

    } else {
      mensaje.textContent = "❌ ¡Ups! Ese no es el contenedor correcto.";
      mensaje.style.color = "#ff5555";
    }

    if (puntaje === 30) {
      mensaje.textContent = "🎉 ¡Excelente! Clasificaste toda la basura correctamente.";
      mensaje.style.color = "#ffd700";
    }
  });
});
