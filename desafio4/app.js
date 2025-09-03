
let adivinar = 5
let contador = 0

let numero1 = prompt("Adivina el nro del 1 al 10");

while (numero1 != adivinar || contador < 3) {
    contador =contador + 1;
    if (contador == 3 || numero1 == adivinar) {
        break;
    }
    numero1 = prompt("Intenta de nuevo, te quedan " + (3 - contador) + " intentos");
}if (numero1 == adivinar) {
    alert("Felicidades, adivinaste el nro");
} else {
    alert("Lo siento, no adivinaste el nro");
}

//ahora generando el numero a adivinar de forma aleatoria
let numeroAdivinar = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
let maxIntentos = 3;
let numeroUsuario = prompt("Adivina el número del 1 al 10");

while (numeroUsuario != numeroAdivinar && intentos < maxIntentos) {
    intentos++;
    if (intentos == maxIntentos || numeroUsuario == numeroAdivinar) {
        break;
    }
    numeroUsuario = prompt("Intenta de nuevo, te quedan " + (maxIntentos - intentos) + " intentos");
}if (numeroUsuario == numeroAdivinar) {
    alert("Felicidades, adivinaste el número:", numeroAdivinar);
} else {
    alert("Lo siento, no adivinaste el número. El número era " + numeroAdivinar);
}   SVGAnimatedLengthLis        



  