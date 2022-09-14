//selectores variables globales
let palabras = ["LEON", "OSO", "PERRO", "GATO", "HIPOPOTAMO"];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";

//palabraSecreta

function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

//iniciar juego
function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
}