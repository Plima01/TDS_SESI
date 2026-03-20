function criarCalculadroaDesconto (desconto) {
    return function (preco) {
        return preco - (preco * desconto);
    }
}

const desconto10 = criarCalculadroaDesconto(0.10);
const desconto50 = criarCalculadroaDesconto(0.50);

console.log(`${desconto10(200)}`);
console.log(`${desconto50(1230)}`);
