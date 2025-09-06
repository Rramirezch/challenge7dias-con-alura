
let numero1 = Number(prompt("escriba un numero"));
let numero2 = Number(prompt("escriba otro numero"));

let operando = prompt("escriba la operacion que desea realizar: sumar, restar, multiplicar, dividir");
while (operando != "sumar" && operando != "restar" && operando != "multiplicar" && operando != "dividir" ) {
    operando = prompt("operacion no valida, escriba sumar, restar, multiplicar o dividir");
}

function operacion() {
    if (operando === "sumar") {
        sumar(numero1, numero2);
    } else if (operando === "restar") {
        restar(numero1, numero2);
    } else if (operando === "multiplicar") {
        multiplicar(numero1, numero2);
    } else if (operando === "dividir") {
        dividir(numero1, numero2);
    }
}

function sumar(a, b) {
    return resultado = a + b;
}
function restar(a, b) {
    return resultado = a - b;
}
function multiplicar(a, b) {
    return resultado = a * b;
}
function dividir(a, b) {
    return resultado = a / b;
}
operacion();
console.log(resultado);
alert( resultado);