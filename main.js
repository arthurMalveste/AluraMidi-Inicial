function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

if (elemento && elemento.localName === 'audio') {
    elemento.play() && console.log("tocou");
}
else { 
    console.log('Elemento não encontrado ou seletor inválido');
}
}

const listaDeTeclas = document.querySelectorAll ('.tecla')

for (let contador = 0; contador < listaDeTeclas.length;contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

   console.log(instrumento);

   tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList ('ativa')
        }

        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

    console.log(contador);
}

/*function console () {
    if (listaDeTeclas = idAudio) {
        console.log(idAudio);
    }
}
*/
