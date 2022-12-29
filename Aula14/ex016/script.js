function contar(){
    var inicio = document.getElementById('txti') //pegando o que vem do input do usuário e guardando na variável 'inicio' //getting users input an putting it on 'start'
    var fim = document.getElementById('txtf')    //pegando o que vem do input do usuário e guardando na variável 'fim' //getting users input an putting it on 'end'
    var passo = document.getElementById('txtp')  //pegando o que vem do input do usuário e guardando na variável 'passo' //getting users input an putting it on 'step'
    var res = document.getElementById('res')     //controlando a div onde ficarão as respostas //getting the div where the answers are gonna be
    res.innerHTML = ''                           //zerando o conteúdo da div para ão atrapalhar nos códigos //erasing the div's content just so it doesnt cause problems

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ //verificando se todos os campos de input foram preenchidos //checking if all the inputs have been inputed
        window.alert('[ERRO] Algum dado está inválido. Por favor preencha novamente!') //mandando um erro caso seja verdadeiro //showing an error message
    } else{
        inicio = Number(inicio.value) //transformando string para inteiro //converting from txt to number
        fim = Number(fim.value)       //transformando string para inteiro //converting from txt to number
        passo = Number(passo.value)   //transformando string para inteiro //converting from txt to number
        if (passo === 0){ //verificando se o valor do passo é '0'. Isso obviamente causaria problemas, então é melhor evitar //verifying if the step is '0' that'd cause problems, better avoid
            passo = 1     //atribuindo um valor para o passo //giving a value to the 'step'
            window.alert('[ERRO] O passo está com valor 0. Considerando "Passo = 1"') //informando ao usuário que o passo inserido não faz sentido e, por isso, está sendo alterado //informing to the user that the value doesnt make sense and therefore is being changed
        }
        if (inicio > fim){ //verificando se o inicio é maior que o fim para determinar se será uma contagem crescente ou decrescente
            if (passo > 0){passo *= -1} //para o caso de uma contagem decrescente pode ser que o usuário digite um número negativo no passo, mas também pode ser que não, então é bom garantir//for a decresing counting the user may or may not input a negative number to the step, so im making sure my code can handle it
            res.innerHTML += 'Contagem decrescente <br>' //informando o tipo de contagem //informing the type of counting (this case is decreasing)
            for (var c = inicio; c >= fim; c += passo){
                if (c!= inicio){
                    res.innerHTML += ` \u{1F449} ` //motrando a mãozinha apontando para o próximo número caso a posição não seja a primeira //showing a little hand pointing towards the next number (only happens if not in the beginning)
                }
                res.innerHTML += `${c}` //mostrando o número //showing the number
            }
        }else{
            if (passo < 0){passo *= -1} //para uma contagem crescente não faz muito sentido o usuário digitar um valor negativo, mas é bom garantir né //for a increasing counting doesnt make a lot of sense for the user to input a negative number, but im just making sure that if it happens my code works the same
            res.innerHTML += 'Contagem crescente <br>' //informando o tipo de contagem //informing the type of counting (this case is incresing)
            for (var c = inicio; c <= fim; c += passo){
                if ( c!= inicio){
                    res.innerHTML += ` \u{1F449} `
                }
                res.innerHTML += `${c}` //mostrando o número //showing the number
            }
        }
        res.innerHTML += ` \u{1F3C1} ` //mostrando a bandeira de chegada (indicar que acabou) //showing a flag (it's done counting)
    }
    }