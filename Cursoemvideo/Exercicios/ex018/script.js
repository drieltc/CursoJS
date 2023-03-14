var vet = [] //declarando meu vetor, onde serão guardados os valores vindos do usuário //declaring my array, where the values from the user will be stored
var sel = document.getElementById('vetsel') //associando a var sel ao elemento de selecao 'vetsel' lá do modelo.html //associating the var 'sel' to the selection element 'vetsel' from the .html
var res = document.getElementById('res') //mesama coisa de cima //same
var soma = 0 //declarando minha variável de soma //declaring my sum var
var med //declarando minha variavel de média //declaring my mean vat

function adicionar(){ //declarando a funcao 'adicionar' //declaring a function to add the elements to the array
    let num = document.getElementById('txtnum') //associand... // associating...
    if (num.value.length == 0){ //checando se o input está vazio //checking if the input is empty
        window.alert('[ERRO] Campo "Número" vazio. Digite algo antes de adicionar')
    }else{
        num = Number(num.value) //convertendo str para number // converting str to number
        if (!inLista(num, vet)){ //checando se o valor digitado ja esta na lista //checking if the inputed value has already been stored 
            if (num < 1 || num > 100){ //checando se o valor digitado está no intervalo [1, 100] //checking if the value is in [1, 100]
                window.alert(`[ERRO] O número ${num} está fora do intervalo permitido. Digite um outro número`)
            }else{
                vet.push(num) //guardando o valor no vetor //storing num into the array
                soma += num //fazendo a soma //summing 
                if (vet.length <= 1){ //apagando a mensagem padrão que fica na primeira posição da seleçao caso algum valor tenha sido digitado
                    sel.innerHTML = '' //erasing the default message that stays in the 1st position of the selection (only happens for the 1st input)
                }
                let item = document.createElement('option') //criando uma option para a selection //creating an option for the selection
                item.text = `Número ${num} adicionado com sucesso` //avisando que o número foi adicionado com sucesso // saying that the number has been successfully added to the array
                sel.appendChild(item) //enviando a option para a selection //sending the option to the selection
                res.innerHTML = '' //apagando o resultado de iteraçoes anteriores (so acontece se for feito um input após análise) //erasing th results from previous iterations in case of input after analysis
            }
        }else{
            window.alert(`[ERRO] O valor ${num} já está cadastrado`) //avisando que o número já está cadastrado //saying that the number has been stored previously
        }
    }
    num = document.getElementById('txtnum') //as 3 linhas sao para apagar o número digitado e colocar o ponteiro do mouse no input
    num.value = '' //theses 3 lines are to erase the inputed value and put the mouse's pointer on the place to type again
    num.focus()
}

function inLista(n, val){ //checando se um número já está na lista //seeing if a number is already in the array
    if (val.indexOf(Number(n)) != -1){ //lembre que se um número não  está numa lista, seu indexOf retorna -1 //remember that if a number is not in a list, its indexOf returns -1
        return true
    }else{
        return false
    }
}

function analisar(){
    med = soma/vet.length //calculando a meadia // calculating the mean
    res.innerHTML = '' //apagando iteracoes anteriores //erasing previous iterations
    vet = vet.sort() //colocando o vetor em ordem do menor para o menor //sorting the array from smallest to greatest value
    res.innerHTML += `Temos ao todo ${vet.length} cadastrados <br>` //qtd de numeros cadastrados //amount of stored numbers
    res.innerHTML += `O maior valor é ${vet[vet.length -1]} <br>` //maior valor //greatest value
    res.innerHTML += `O menor valor é ${vet[0]} <br>` //menor valor // smallest value
    res.innerHTML += `Somando todos os valores, temos: ${soma} <br>` //soma dos valores //sum
    res.innerHTML += `A média dos valores cadastrados é ${med} <br>` //media //mean
}