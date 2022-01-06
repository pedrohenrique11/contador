var numeroTag = document.getElementById('number')
var numero = 0;

function adicionar() {
    numero = numero + 1;
    numeroTag.innerHTML = numero;
   }

function subtrair() {
    numero = numero - 1;
    numeroTag.innerHTML = numero;
}


// features //

// usar o addEventListener
// colocar limite no contador
// usar cor vermelha nos numeros negativos