/*  Colocar 5 itens em um vetor,
    usando estrutura de repetição e
    mostrar os itens inseridos no vetor */


// criando o vetor vazio para receber os itens
const arrayListaDeItens = []

// usando o for (para fazer repetição 5 vezes, 
// usando o metodo push() para enviar os valores dentro do array
// com a função prompt() para receber os valores digitados
for(let item = 0; item < 5; item++){
    arrayListaDeItens.push(prompt("Digite o valor"))
}

// mostrando os itens inseridos dentro do vetor 
alert(arrayListaDeItens)