//                 0       1        2       3       4         5
const frutas = ["Maçã", "Banana", "Uva", "Laranja", "Abacaxi", "Melancia"];
console.log(frutas[3]);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[5]);
console.log(frutas); // [ 'Maçã', 'Banana', 'Uva', 'Laranja', 'Abacaxi', 'Melancia' ]
console.log(frutas.length);  // 6 quantidaede de elementos do array
frutas[0] = "Pera"; // substitui o valor do indice 0
console.log(frutas); // [ 'Pera', 'Banana', 'Uva', 'Laranja', 'Abacaxi', 'Melancia' ]