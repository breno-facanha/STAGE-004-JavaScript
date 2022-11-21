const students = [
    {
        name: "Breno" , 
        notaPrimeiraProva: 6,
        notaSegundaProva: 9
    },
    {
        name: "Bruno", 
        notaPrimeiraProva: 7,
        notaSegundaProva: 6
    },
    {
        name: "Bernado", 
        notaPrimeiraProva: 3,
        notaSegundaProva: 9
    },
    {
        name: "Benicio", 
        notaPrimeiraProva: 5,
        notaSegundaProva: 9
    },
    {
        name: "Façanha", 
        notaPrimeiraProva: 7,
        notaSegundaProva: 8
    },
]


function mediaNota( nota1, nota2){
    media = (nota1 + nota2) / 2
    return media
} 

console.log(mediaNota (6, 8))
