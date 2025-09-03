let frutas = []
let verduras = []
let lacteos = []
let congelados = []

alert("Bienvenido a la tienda");

let alimento = prompt("Ingrese un alimento que necesita comprar:").toLowerCase();
let categoria = prompt("Ingrese la categoria del alimento (frutas, verduras, lacteos, congelados):").toLowerCase();
if (categoria !== "frutas" && categoria !== "verduras" && categoria !== "lacteos" && categoria !== "congelados") {
    categoria = prompt("Por favor ingrese una categoria valida").toLowerCase();
}

if (categoria === "frutas") {
    frutas.push(alimento);
}   else if (categoria === "verduras") {
    verduras.push(alimento);
} else if (categoria === "lacteos") {
    lacteos.push(alimento);
}   else if (categoria === "congelados") {
    congelados.push(alimento);
}

let otraCompra = prompt("¿Desea agregar otro alimento? (si/no):").toLowerCase();
if (otraCompra !== "no" && otraCompra !== "si") {
        prompt("Por favor ingrese si o no");
} while (otraCompra == "si") {
    alimento = prompt("Ingrese un alimento que necesita comprar:");
    categoria = prompt("Ingrese la categoria del alimento (frutas, verduras, lacteos, congelados):");
    if (categoria !== "frutas" && categoria !== "verduras" && categoria !== "lacteos" && categoria !== "congelados") {
    categoria = prompt("Por favor ingrese una categoria valida");
    } if (categoria === "frutas") {
        frutas.push(alimento);
    } else if (categoria === "verduras") {
        verduras.push(alimento);
    } else if (categoria === "lacteos") {
        lacteos.push(alimento);
    } else if (categoria === "congelados") {
        congelados.push(alimento);
    }otraCompra = prompt("¿Desea agregar otro alimento? (si/no):").toLowerCase();
}if (otraCompra === "no"){
    alert("Gracias por su compra");
    alert("Lista de compras:\n\nFrutas: " + frutas.join(", ") + "\nVerduras: " + verduras.join(", ") + "\nLacteos: " + lacteos.join(", ") + "\nCongelados: " + congelados.join(", "));
    }
