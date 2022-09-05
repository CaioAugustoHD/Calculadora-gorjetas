const jantar = document.getElementById('jantar');
const taxa = Number(document.getElementById('taxa').value);
const pessoas = document.getElementById('pessoas');
const botao = document.querySelector('button');
const valorPessoa = document.getElementById('valorPessoa');
const sectionResultado = document.getElementById('sectionResultado');

sectionResultado.style.visibility = "hidden";

botao.addEventListener('click', ()=>{
    if((jantar.value == "") || (pessoas.value == "")){
        alert('Insira valores válidos!!!');
    } else if (pessoas.value == 0){
        alert('o número de pessoas não pode ser 0!!!');
    } else {
        somarJantarTaxa();
    }
});

function somarJantarTaxa(){
    sectionResultado.style.visibility = "visible";                   //exibe a seção de resultado
    let valorJantar = Number(jantar.value);                          //transformando string em numbers
    let numeroPessoas = Number(pessoas.value);

    let soma = (valorJantar + (valorJantar * taxa)) / numeroPessoas;
    console.log(soma);
}
