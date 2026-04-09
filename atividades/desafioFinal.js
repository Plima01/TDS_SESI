//crie uma array chamada estoque contendo 5 nomes de componentes de hardware
//addcione um novo iten na lista usano o método push
//crie uma varievel chamado clinteNome e uma variavel clienteIdade
//crie uma variavel possuiCupom (boolean)
const estoque = ['HD', 'Memória RAM', 'Placa de Vídeo', 'Processador', 'Placa Mãe'];
estoque.push('Fonte de Alimentação');
const clienteNome = "João";
const clienteIdade = 20;
const possuiCupom = true;

//sessao de seguranca
if(clienteIdade >= 16){
    console.log("Venda autorizada para " + clienteNome )
    function processarVenda(valorTotal, cupomAtivo) {
    const DESCONTO = 0.15;
    const valorFinal = (valorTotal > 500 || cupomAtivo) ? valorTotal * (1 - DESCONTO) : valorTotal;
    return valorFinal;
    }
        for (let i = 0; i < 4; i++) {
    console.log("Saindo do estoque: " + estoque[i]);
    }
        if(i = 1){
    estoque.shift()
        }
        else if(i = 2){
            estoque.shift()
            estoque.shift()
        }
        else if(i = 3){
            estoque.shift()
            estoque.shift()
            estoque.shift()
        }
        else if(i = 4){
            estoque.shift()
            estoque.shift()
            estoque.shift()
            estoque.shift()
        }   
        else if(i = 5){
            estoque.shift()
            estoque.shift()
            estoque.shift()
            estoque.shift()
            estoque.shift()
        }
        else{
            console.log("Estoque vazio")
        }
    
    console.log("A quantidade de itens no estoque é de " + estoque.length)
    
    
        console.log("Valor total:" + processarVenda(600, false, 3));
    }
else{
    console.log(clienteNome + " voce precisa de um responsavel")
}

//simule a saida dos itens do estoque utilize loop for ou while para percorrer array estoque
//cada interação exiba a mensagen "Saindo do estoque: " + nome do item
//exiba a mensagem "Estoque vazio" ao final do processo
//apos o loop utilize o metodo array adequado pra remover primeiro item da lista( simulando a primeira saida do estoque)