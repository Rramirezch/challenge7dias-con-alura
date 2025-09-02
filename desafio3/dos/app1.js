
let estudiarTecnologias = [];


function pregunta() {
    let respuesta = prompt("quieres estudiar tecnologia?, escriba ok si es afirmativo, o no para finalizar").toLowerCase();
    if (respuesta === 'no') {
        alert("gracias por usar el programa,esta son las tecnologias que elegiste estudiar: " + estudiarTecnologias);
        console.log("tecnologias a estudiar: " + estudiarTecnologias);  
    }else if (respuesta !== 'ok') {
        alert("respuesta no valida, por favor ingresa ok o no");
        pregunta();
    }else{
        cualtecnologia();
        pregunta();
    }
}
function cualtecnologia() {
    let tecnologia = prompt("cual tecnologia quieres estudiar?");
    return estudiarTecnologias.push(tecnologia);
}
pregunta();
