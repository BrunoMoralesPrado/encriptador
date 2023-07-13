function Linkedin(){
    window.location.href = "https://www.linkedin.com/in/bruno-morales-prado-24bmp";
}


function encriptar(){
    let encriptar = document.getElementById("areadetexto").value;

    let textoaencriptar = encriptar
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (document.getElementById("areadetexto").value.length !=0){
        document.getElementById("areadetexto").value = textoaencriptar;
        document.getElementById("texto-encriptado").value = document.getElementById("areadetexto").value;
        document.getElementById("areadetexto").value = "";
    }
}

function desencriptar(){
    let desencriptar = document.getElementById("areadetexto").value;

    let textoaencriptar = desencriptar
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (document.getElementById("areadetexto").value.length !=0){
        document.getElementById("areadetexto").value = textoaencriptar;
        document.getElementById("texto-encriptado").value = document.getElementById("areadetexto").value;
        document.getElementById("areadetexto").value = "";
    }


}

function copiarAlPortapapeles() {
    var texto = document.getElementById("texto-encriptado").value;
  
    // Crear un elemento de input temporal
    var inputTemp = document.createElement("input");
    inputTemp.setAttribute("type", "text");
    inputTemp.setAttribute("value", texto);
  
   
    document.body.appendChild(inputTemp);
  
    // Seleccionar el contenido del input
    inputTemp.select();
  
    // Copiar el contenido al portapapeles
    document.execCommand("copy");
  
    // Remover el elemento del DOM
    document.body.removeChild(inputTemp);
  
    // Mensaje de confirmación
    alert("Texto copiado al portapapeles: " + texto);
  }
  