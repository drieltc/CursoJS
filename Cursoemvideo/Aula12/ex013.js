var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    6 = Sexta
    7 = Sábado
    não sei se é exatamente esse o motivo, mas como programação é algo universal, os devs do JS
    preferiram colocar assim pra não puxar em inglês sempre
*/
//diaSem = 9
switch(diaSem){
    case 0:
        diaSem = "Domingo"
        break
    case 1:
        diaSem = "Segunda"
        break
    case 2:
        diaSem = "Terça"
        break
    case 3:
        diaSem = "Quarta"
        break
    case 4:
        diaSem = "Quinta"
        break
    case 5:
        diaSem = "Sexta"
        break
    case 6:
        diaSem = "Sábado"
        break
    default:
        diaSem = "[ERRO] Dia inválido"
        break
}
console.log(`Hoje é ${diaSem}`)