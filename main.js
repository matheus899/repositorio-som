//Declaração/criação da função tocaSom
function tocaSom (idElementoAudio){
  document.querySelector(idElementoAudio).play();
}

//criando a referência constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//criação da repetição "while" e trocado pelo "for"com variavel,condição e incremento
for(let contador = 0;contador < listaDeTeclas.length; contador = contador ++){
  const teclas = listaDeTeclas[contador]; //guarda o contador da lista 
  const efeito = teclas.classList[1]; //chama 0 2º item classe individual do som 
  const idAudio = `#som_${efeito}`; //utilizaa junção teplate string ${}
  teclas.onlick = function(){      //função anônima auxiliar para chamar tocaSom
    tocasom(idAudio);            //chamada da função tocaSom com parâmetro idAUDIO
  }
}