const jantar = document.getElementById('jantar').value;
const taxa = document.getElementById('taxa').value;
const pessoas = document.getElementById('pessoas').value;
const valorPessoa = document.getElementById('valorPessoa');

function somarJantarTaxa(){
    let soma = jantar + taxa;
    console.log(soma);
}

somarJantarTaxa();