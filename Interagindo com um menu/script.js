/*
DADOS DE ENTRADA DO USUARIO

1.NUMERO DEEJADO
2. LISTA


VARIAVEIS
1. OPÇÃO DIGITADA
2. LISTA DE ITENS

*/
let option;
let items =[];

while (option != 3) {

    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada:
    
    1.  Cadastrar um item na lista
    2.  Mostrar itens cadastrados
    3.  Sair do programa
    `))


    switch(option){
        case 1:
            items.push(prompt(`Cadastre um valor na lista:`))
            break;
        case 2:
            if (items.length == 0) {
                alert("Não existem itens cadastrados")
            }else{
                alert(items)
            }
            break;
        case 3:
            alert('Saindo do programa ...')
            break;
        default:
            alert('opção invalida, tente novamente')
    }

}

