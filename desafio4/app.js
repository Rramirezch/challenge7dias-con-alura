
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



  