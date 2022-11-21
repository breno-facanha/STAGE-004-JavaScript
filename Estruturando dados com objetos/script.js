const patients = [
    {
        name: "Breno",
        age: 29,
        weight: 95,
        height: 1.75
    },
    {
        name: "Samara",
        age: 24,
        weight: 72,
        height: 1.50
    },
    {
        name: "Samyle",
        age: 18,
        weight: 73,
        height: 1.55
    },
]

for( let index = 0; patients.length; index++){
    let nomePacientes = patients[index].name
    let idadePacientes = patients[index].age
    let pesoPacientes = patients[index].weight
    let alturaPacientes = patients[index].height
    console.log(`
     Paciente ${nomePacientes} tem idade de ${idadePacientes} anos, pesa ${pesoPacientes}Kg e tem altura de ${alturaPacientes}m
    `
    )
}