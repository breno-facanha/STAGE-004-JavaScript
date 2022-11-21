const numberOne = Number(prompt('Digite o primeiro numero:'))
const numberTwo = Number(prompt('Digite o segundo numero:'))


const soma = numberOne + numberTwo;
const subtração = numberOne - numberTwo;
const multiplicação = numberOne * numberTwo;
const divisão = numberOne / numberTwo;

let ImparOuPar = soma % 2 == 0 ? 'Par' : 'Impar'
let NumberEquals = numberOne == numberTwo ? 'iguas' : 'diferentes'

alert(
    `
    A Soma dos dois numeros é: ${soma} 
    `
)
alert(
    `
    A Subtração dos dois numeros é: ${subtração} 
    `
)
alert(
    `
    A Multiplicação dos dois numeros é: ${multiplicação} 
    `
)
alert(
    `
    A Divisão dos dois numeros é: ${divisão} 
    `
)
alert(
    `
    A Soma dos dois numeros são: ${ImparOuPar} 
    `
)
alert(
    `
    Os numéros inseridos são ${NumberEquals} 
    `
)