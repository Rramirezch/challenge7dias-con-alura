let tecnologiaFrontEnd= [];
let tecnologiaBackEnd = [];
let especializacion = " ";

let pregunta = prompt("Que area quieres estudiar? frontend o backend?").toLowerCase();
console.log(pregunta);

if (pregunta != "backend" && pregunta != "frontend") {
    alert("Debes escribir backend o frontend")
    pregunta = prompt("Que area quieres estudiar? frontend o backend?").toLowerCase();
    console.log(pregunta);
 }
 if (pregunta == "frontend") {
    let tecnologia = prompt("Que tecnologia queres estudiar? React o Vue?").toLowerCase();
     if (tecnologia != "react" && tecnologia != "vue");{
        alert( "Debes escribir React o Vue");
        tecnologia = prompt("Que tecnologia queres estudiar? React o Vue?").toLowerCase();
     } if (tecnologia == "react" || tecnologia == "vue");{           
        tecnologiaFrontEnd.push(tecnologia);
        console.log(tecnologia);
        especializacion = prompt("Queres especializarte en Front-End o queres estudiar Fullstack?").toLowerCase();
        console.log(especializacion);
        }
 }else 
    if (pregunta == "backend") {
        let tecnologia = prompt("Que tecnologia queres estudiar? C# o Java?").toLowerCase();
        if (tecnologia != "c#" && tecnologia != "java");{
        alert("Debes escribir C# o Java");
        tecnologia = prompt("Que tecnologia queres estudiar? C# o Java?").toLowerCase();
        } if (tecnologia == "c#" || tecnologia == "java");{
        tecnologiaBackEnd.push(tecnologia);
        console.log(tecnologia);
        especializacion = prompt("Queres especializarte en Back-End o queres estudiar Fullstack?").toLowerCase();
        console.log(especializacion);
    }
}

let tecnonologias = [];
let pregunta2 = prompt("Le gustaria especializarse en ota tecnologia, escrina ok o no ?").toLowerCase();
while (pregunta2 == "ok") {
    let tecnologia1 = prompt("Digite la tecnologia").toLowerCase();
    tecnonologias.push(tecnologia1);
    pregunta2 = prompt("Le gustaria especializarse en ota tecnologia, escrina ok o no ?").toLowerCase();
}
if (pregunta2 != "ok" && pregunta2 != "no") {
    alert("Respuesta no valida, por favor ingrese ok o no");
    pregunta2 = prompt("Le gustaria especializarse en ota tecnologia, escrina ok o no ?").toLowerCase();
} 
if (pregunta2 == "no") {
    alert("Gracias por su visita, ");
}