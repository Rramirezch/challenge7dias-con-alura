

let nombeUsuario = prompt("Ingrese su nombre");
console.log(nombeUsuario);   

let edadUsuario =prompt("Ingrese su edad");
console.log(edadUsuario);
  

let lenguajeProgramacion = prompt("Que lenguaje de programacion esta aprendiendo");
console.log(lenguajeProgramacion);


alert("Hola " + nombeUsuario + " tienes " + edadUsuario + " años y estas aprendiendo " + lenguajeProgramacion);
console.log("Hola " + nombeUsuario + " tienes " + edadUsuario + " años y estas aprendiendo " + lenguajeProgramacion);

let respuesta = prompt("Te gusta estudiar " + lenguajeProgramacion + "?, responde con el numero 1para SI o 2 para NO");

if (respuesta == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}
    else if (respuesta == 2) {
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
    }
    else {
        alert("Por favor responde con 1 o 2");
    }
