const modelos = [
  "modelos/botella.glb",
  "modelos/estante.glb",
  "modelos/renita.glb"
];

let indiceActual = 0;

function cambiarModelo() {
  const visor = document.getElementById("visor");

  indiceActual++;

  if (indiceActual >= modelos.length) {
    indiceActual = 0;
  }

  visor.src = modelos[indiceActual];
}