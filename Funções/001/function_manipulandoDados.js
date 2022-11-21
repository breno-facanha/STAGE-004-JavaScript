// function expression
const sum = function(number1, number2) {
    return number1 + number2
}

// console.log(sum(0,2))

// let fruit = "banana";
// function getFruit(fruit) {
//   fruit = "orange";
//   return fruit
// }

// console.log(fruit);
// console.log(getFruit(fruit));

// MANIPULANDO DADOS \\


const contador = ["sdlçgkssdafolsd", "0", "3"]
console.log(contador.length)

// colocar virgula e duas casas decimais
let number = 10.500
console.log(number.toFixed(2).replace(".", ","))

// separa frase e colocar dentro de um array e colocar outro separador _ e deixando tudo Maiusculo

let frase = "Eu vou me tornar um desenvoldedor"
let arrayFrase = frase.split(" ")
let separadorFrase = arrayFrase.join("_")
console.log(separadorFrase.toLocaleUpperCase())

// verificar se o texto contém alguma palavra

let frase2 = "Eu vou me tornar um desenvoldedor"
console.log(frase2.includes("eu")) // false
console.log(frase2.includes("Eu")) // verdadeiro (é case sensitve)

// criar array com construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// transformar uma cadeira de caracteres ou string em um elemento array
let manipulation = "manipulação"
console.log(Array.from(manipulation)) 

//adicionar um item no fim do array
let language = ["html", "css", "js"]
language.push("nodeJS")
language.unshift("sql") //adiciona no inicio do array
language.pop() // remove o ultimo item do fim do array
language.shift // remove o primeiro item do fim do array
console.log(language.slice(1,3)) // pegar somentes alguns elementos do array ( a primeira desacarta)
console.log(language.indexOf('css')) // mostra a posição exata do elemento que está no array
language.splice(1,1) //remove o elemento na posição 1 e apartir dele quantos elementos a mais nesse caso foi só ele mesmo


console.log(language)


// deletar algo dentro do objeto

const pessoa = {
    name:'breno',
    age: 29,
    peso: 95.5
}

delete pessoa.peso

console.log(pessoa)
