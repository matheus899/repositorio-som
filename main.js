

//Declaração/criação da função tocaSom
function tocaSom(idElementoAudio){
    document.queryselector (idElementoAudio).play();

}

//criando a referências constante listaDeTeclas e busando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//chamando a constante listaDeTeclas e o índice "0" do somPom
listaDeTecals [0].onlick = tocaSomPom;

let contador = 0;
while(contador < listaDeTecals.length){
   const efeito= listaDeTecals[contador] . classList[1];
   const idAudio= "#som_" + efeito;
      listadeteclados[contador]. olick = function() {
        tocasom(idAudio);
      }
      contador = contador + 1;
      console.log(contador);

}