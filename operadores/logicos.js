let temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = false;

let resultadoAND = " Voce vai ao shopping?";
resultadoAND += "\n" + (temDinheiro && estaChovendo);
console.log(resultadoAND);

let resultadoOR = " Voce vai ao shopping?";
resultadoOR += "\n" + (temDinheiro || carroEstaNaGaragem);
console.log(resultadoOR);
