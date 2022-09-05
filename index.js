const jantar = document.getElementById('jantar');
const taxa = Number(document.getElementById('taxa').value);
const pessoas = document.getElementById('pessoas');
const botao = document.querySelector('button');
const valorPessoa = document.getElementById('valorPessoa');

botao.addEventListener('click', somarJantarTaxa);

function somarJantarTaxa(){
    let valorJantar = Number(jantar.value);   //transformando string em numbers
    let numeroPessoas = Number(pessoas.value);

    let soma = valorJantar + (valorJantar * taxa);
    console.log(soma);    
}
