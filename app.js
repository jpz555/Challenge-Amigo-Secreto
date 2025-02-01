// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variable que almacena amigos.
let amigos = [];
let titulo = 'h1';
let = cuerpoHTML = 'body';
let listaDeElementos = ['amigo','listaAmigos', 'resultado'];

function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo').value;
    if (amigoAgregado == '') {
        alert("Por favor, inserte un nombre valido.")
    } else if (amigos.includes(amigoAgregado)){
        alert("Este nombre ya esta incluido en la lista. ");
    } else {
        amigos.push(amigoAgregado);
        recorrerListaAmigos();
        limpiarCampo(listaDeElementos[0], 'si');  
        limpiarCampo(listaDeElementos[2]);
        cambiarCondicionesHTML(titulo, cuerpoHTML,'#4B69FD', 'Amigo secreto' );
    } 
}


function recorrerListaAmigos(){
    limpiarCampo(listaDeElementos[1]);
    console.log(amigos);
    for (let i = 0; i < amigos.length; i++) {
        mostrarValoresLista('listaAmigos', amigos[i]);
    } 
}


function sortearAmigo(){
    if (amigos. length == 0) {
        alert("No ha añadido ningún nombre de un amigo valido.")
    } else {
        let numeroAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSeleccionado = amigos[numeroAleatorio];
        // console.log(amigoSeleccionado);
        cambiarCondicionesHTML(titulo, cuerpoHTML, '#3498db', '¡Felicidades, tu amigo secreto esta en el portapapeles!');
        limpiarCampo(listaDeElementos[1]);
        limpiarCampo(listaDeElementos[2]);
        mostrarValoresLista('resultado',`El amigo secreto sorteado es: ${amigoSeleccionado}`);
        navigator.clipboard.writeText(amigoSeleccionado);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    
}

function limpiarCampo(id, input='no'){
    let elementoHTML = document.getElementById(id);
    if (input == 'si') {
        elementoHTML.value = "";

    } else {
        elementoHTML.innerHTML = "";
    }
}


function mostrarValoresLista(idDeLaLista, elemento, /*limpiar='no'*/) {
    let elementoUL = document.getElementById(idDeLaLista);
    let li = document.createElement("li");
    li.innerHTML = elemento;
    elementoUL.appendChild(li);
}



function cambiarCondicionesHTML(tag1, tag2, propiedadTag1, propiedadTag2) {
    let titulo = document.querySelector(tag1);
    let fondoHTML = document.querySelector(tag2);
    fondoHTML.style.backgroundColor = propiedadTag1;
    titulo.innerHTML = propiedadTag2;
}


function condicionesIniciales(){
    cambiarCondicionesHTML(titulo, cuerpoHTML,'#4B69FD', 'Amigo secreto' );
    amigos = [];
    limpiarCampo(listaDeElementos[0], 'si');
    limpiarCampo(listaDeElementos[1]);
    limpiarCampo(listaDeElementos[2]);
    
}

function reiniciarSorteo(){
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();

