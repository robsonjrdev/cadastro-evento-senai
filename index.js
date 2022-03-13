// Data Atual
const now = new Date();
// Entrada de data cliente
const dataEvento = "20/03/2022";
// Entrada idade cliente
const idade = 18;
const nome = "Robson Junior"
// Tratando data do evento para verificar 
const dataConvertida = dataEvento.split("/");
const dataVerificar = new Date(dataConvertida[2],dataConvertida[1]-1,dataConvertida[0]);

const listaParticipantes  = ["Caio", "Thiago", "Telma", "João"];
let listaPalestrantes = ["Monica", "Arthur", "Catarina", "Fabio", "Valdete"];
//inicio 

// verificando se a data e posterior

if (dataVerificar > now){

    // verificando se idade e maior igual a 18

    if (idade >= 18){
        //exibindo lista de participants com o for
        console.log("Lista de Participantes")
        for (let indice = 0; indice < listaParticipantes.length; indice++){
            console.log(listaParticipantes[indice]);
        }
        console.log("Lista de Palestrantes");
        for(let indice =0; indice < listaParticipantes.length; indice++){
            console.log(listaParticipantes[indice])
        }

        if(listaParticipantes.length < 100){
            listaParticipantes.push(nome);
            console.log("Participante cadastrado com sucesso.")
        }else{
            console.log("cadastro não permitido, excedido o limite.")
        }

    }else{
        console.log("Você não pode se cadastra por ser menor de idade.")
    }
}else{
    console.log("Data inválida.")
}
 


