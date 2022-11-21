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



for (let item = 0; students.length; item++){
    let aprovados = mediaNota(students[item].notaPrimeiraProva, students[item].notaSegundaProva) >= 7 ? `Parabéns, ${students[item].name}! Você foi aprovado no concurso` : `Não foi dessa ves, ${students[item].name}! Tente novamente`
alert(`
    A média do aluno ${students[item].name} é: ${mediaNota(students[item].notaPrimeiraProva, students[item].notaSegundaProva)}
    ${aprovados}
    `)
console.log(aprovados)
}


