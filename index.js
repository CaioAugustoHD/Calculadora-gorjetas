const jantar = document.getElementById('jantar');
const taxa = document.getElementById('taxa').value;
const pessoas = document.getElementById('pessoas').value;
const botao = document.querySelector('button');
const valorPessoa = document.getElementById('valorPessoa');

botao.addEventListener('click', somarJantarTaxa);

function somarJantarTaxa(){
    let soma = jantar + taxa;
    console.log(soma);
}