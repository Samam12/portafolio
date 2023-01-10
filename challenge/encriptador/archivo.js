var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


function encriptar(){
    ocultarAdelante();
    var area = recuperartexto()   
    resultado.textContent = Encriptartexto(area)
}

    function desencriptar(){
        ocultarAdelante();
        var area = recuperartexto()   
        resultado.textContent = Desencriptartexto(area)
}
function copiar(){
    var Desencriptartexto = resultado.textContent;
navigator.clipboard.writeText(Desencriptartexto);

}


function recuperartexto(){
     var area = document.querySelector(".area");
     return area.value;
}
function ocultarAdelante(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
function Encriptartexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
    if(texto[i] =="a"){
        textofinal=textofinal + "ai"
    }
    else if(texto[i] == "e"){
        textofinal=textofinal + "enter"
    }
    else if(texto[i] =="i"){
        textofinal=textofinal + "imes"
    }
    else if(texto[i] == "o"){
        textofinal=textofinal + "ober"
    }
    else if(texto[i] == "u"){
        textofinal=textofinal + "ufat"
    }
    else{ 
        textofinal = textofinal + texto[i];
    }
}
  
  return textofinal;

}

function Desencriptartexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
    if(texto[i] =="a"){
        textofinal=textofinal + "a"
        i = i+1;
    }
    else if(texto[i] == "e"){
        textofinal=textofinal + "e"
        i = i+4;
    }
    else if(texto[i] =="i"){
        textofinal=textofinal + "i"
        i = i+3;
    }
    else if(texto[i] == "o"){
        textofinal=textofinal + "o"
        i = i+3;
    }
    else if(texto[i] == "u"){
        textofinal=textofinal + "u"
        i = i+3;
    }
    else{ 
        textofinal = textofinal + texto[i];
    }
}
  
  return textofinal;

}