
/* 

    JOGO DA ADVINHAÇÃO

    Apresente a mensagem ao usuário:
    "advinhe o número que estou pensando? Está entre 0 e 10"

    Crie um lógica para gerar um número aleatório
    e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema

    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Error, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você adivinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo numero de tentativas

*/

const result = prompt("Advinhe qual o numero que estou pensando? Está entre 0 e 10")

const randomNumber = Math.round(Math.random() *10)
console.log(randomNumber)

const match = result == randomNumber

console.log(match)