let n1 = 10;
let n2 = 5;

let media = (n1 + n2) / 2;
if(n1 < 11 && n2 < 11){

    if(media >= 7.5){
    console.log("Aprovado");    
    }
    else if(media >= 5 || media >= 6.9){
    console.log("Recuperação"); 
    }
    else{
    console.log("Reprovado");
    }
}
else{
    console.log("coloque uma media menor ou iual a 10")
}