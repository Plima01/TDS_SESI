/* desafio 
criar uma funcao que receba preco e desconto em % e mostrar o valor final com desconto,
criar outra funcao que reeba preco e quantidade e mostre o valor totatl da compra.
 */
const produto1 = "Notebook";
const preco1 = 3500;
const desconto1 = calcularDesconto(preco1, 0.10);
const quantidade1 = 5;
const valorTotal1 = calcularCompra(preco1, quantidade1, desconto1);
const desconto = 0.10;

function calcularDesconto (preco, desconto) {
    return preco - (preco * desconto);
} 
console.log(`O preco do ${produto1} com desconto é R$${desconto1}`);

function calcularCompra (preco, quantidade, desconto) {
    return quantidade * desconto;
}
console.log(`O valor total da compra do ${produto1} é R$${valorTotal1}`);