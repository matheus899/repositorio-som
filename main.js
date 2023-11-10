//Declaração/criação da função tocaSom
function tocaSom (idElementoAudio){
  document.querySelector(idElementoAudio).play();
}

//criando a referência constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while(contador < listaDeTeclas.length){
  const teclas = listaDeTeclas[contador]
  const efeito = teclas.classList[1];
  const idAudio = "#som_" ${efeito};
  teclas.onlick = function(){
    tocasom(idAudio);
  };
  contador = contador + 1;
  console.log(contador);
}