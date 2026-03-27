let MaiorDeIdade = true
let possuiConvite = false

let verificaoAND = " Voce possui acesso?";
verificaoAND += "\n" + (MaiorDeIdade && possuiConvite);
console.log(verificaoAND);
if(verificaoAND =  false){
    console.log("você possui o convite, entrada autorizada")
}
else{
    console.log("acesso negado, voce nao possui o convite VIP")
}