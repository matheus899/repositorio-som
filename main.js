
//Declaração/criação da função tocaSomkiko
function tocaSomkiko(){
     document.queryselector ('#som_tecla_pom').play

}
 //chamda ou invocação da função tocaSomkiko ao clicar no botão
document.querySelector('.tecla_pom').onlick = tocapom;

//Declaração/criação da função tocaSomuepa
function tocaSomuepa(){
    document.queryselector ('#som_tecla_uepa').play

}
//chamda ou invocação da função tocaSomkiko ao clicar no botão
document.querySelector('.tecla_uepa').onlick = tocapom;

//criando a referências constante listaDeTeclas e busando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//chamando a constante listaDeTeclas e o índice "0" do somPom
listaDeTecals [0].onlick = tocaSomPom;