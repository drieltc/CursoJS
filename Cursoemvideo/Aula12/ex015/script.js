function verificar(){
    var anoA = new Date().getFullYear() //criando uma variável do tipo Nova DATA e guardando o ano atual nela
    var anoN = document.getElementById('txtano') //puxando do HTML o elemento com ID 'txtano' e gurdando-o na variável anoN
    var res = document.querySelector('div#res') //pegando o elemento 'div' com ID 'res' e guardando-o na variável 'res'
    var img = document.createElement('img') //criando uma variável do tipo 'img'
    img.setAttribute('id', 'foto') //dizendo que o id dessa variável é 'foto'
    if (anoN.value.length == 0 || Number(anoN.value) > anoA){ //verificando se a resposta está vazia ou se o ano informado é maior que o ano atual
        window.alert('[ERRO] Ano inválido. Tente novamente!')
    }else{
        var idade = anoA - Number(anoN.value) //pegando o valor numérico de 'anoN'  usando-o para calcular a idade
        var sexo = document.getElementsByName('radsex') // existem 2 elementos cujo nome é 'radsex', por isso precisa-se do if abaixo para determinar qual dos dois está marcado. 
        if (sexo[0].checked){
            //o primeio elemento com nome 'radsex' é o masculino, então se ele estiver marcado, a variável 'sexo' se tornará 'Masculino' 
            sexo = 'Masculino'
            if (idade >= 0 && idade <= 10){
                //crianca
                img.setAttribute('src', 'images/bbM.png')
            } else if (idade <=21){
                //jovem
                img.setAttribute('src', 'images/jovemM.png')
            } else if(idade <=50){
                //adulto
                img.setAttribute('src', 'images/adultoM.png')
            } else{
                //velho
                img.setAttribute('src', 'images/oldM.png')
            }

        } else{
            sexo = 'Feminino'
            if (idade >= 0 && idade <= 10){
                //crianca
                img.setAttribute('src', 'images/bbF.png')
            } else if (idade <=21){
                //jovem
                img.setAttribute('src', 'images/jovemF.png')
            } else if(idade <=50){
                //adulto
                img.setAttribute('src', 'images/adultoF.png')
            } else{
                //velho
                img.setAttribute('src', 'images/oldF.png')
            }
        }
    }
    res.style.textAlign = 'center' //centralizando o resultado
    res.innerHTML = `Idade Calulada: ${idade} <br> Sexo Informado: ${sexo}`
    res.appendChild(img) //mostrar a variável img
}