// selecionar os botoes
// selecionar o numero
// funcao para adicionar umero e subtrair
// fazer contador parar no 0

var numeroTag = document.getElementById('number')
var numero = 0;

function adicionar() {
    numero = numero + 1;
    numeroTag.innerHTML = numero;
   }

function subtrair() {
    numero = numero - 1;
    if (numero.innerHTML >= 0) numeroTag.innerHTML = numero;
}

console.log(numeroTag.innerHTML)