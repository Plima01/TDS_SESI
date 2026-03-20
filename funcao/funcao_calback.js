function processoPedido (valor, quantidade, operacao) {
    return operacao(valor, quantidade);
}

function calcularTotal (preco, quantidade) {
    return preco * quantidade;
}

let resultado = processoPedido(30, 50, calcularTotal);
console.log(`O total do pedido é ${resultado}`);
