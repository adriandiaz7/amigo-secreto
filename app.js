// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo(){
    if(document.getElementById("amigo").value == ""){
        alert("Ingrese un nombre");
} else{
    let nombre = document.getElementById("amigo").value;
    listaNombres.push(nombre);
    actualizar();
    limpiarCaja();
    
    }   
}

function limpiarCaja(){
    valorCaja =document.getElementById("amigo")
    valorCaja.value = "";
}

function actualizar() {
    let lista = document.getElementById("listaAmigos");  
    lista.innerHTML = "";
    for (let i = 0; i < listaNombres.length; i++) {
        let li = document.createElement("li");  
        li.textContent = listaNombres[i]; 
        lista.appendChild(li); 
    } 

}

function sortearAmigo(){
    let sorteo = Math.floor(Math.random() * listaNombres.length);
    let lista = document.getElementById("listaAmigos");  
    lista.innerHTML = "";
    let li = document.createElement("li");  
    li.textContent = listaNombres[sorteo]; 
    lista.appendChild(li); 
}