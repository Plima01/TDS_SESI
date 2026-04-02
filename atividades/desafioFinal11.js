//crie uma lista com array com nome de 10 alunos 

let listaDeAlunos = ["jorge do bem", "Bob marlon", "lebron jaime", "virgulino", "acentolino", "interrogalino", "esclamalino", "mano lima", "craselino", "Jack daniel"];
console.log(listaDeAlunos);

//escreva u codigo que verifia s o nome acentlino esta presente na lista de alunos

if (listaDeAlunos.includes("acentolino")) {
    console.log("O nome acentolino está presente na lista de alunos.");
} else {
    console.log("O nome acentolino não está presente na lista de alunos.");
}