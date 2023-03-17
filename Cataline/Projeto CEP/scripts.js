const urlCEP = "https://viacep.com.br/ws/"

var button = document.querySelector("#app form button")
var input = document.querySelector("#app form input")
var result = document.querySelector("#app main")

button.addEventListener('click', run)

function tratarCEP(CEP){
    while(CEP.indexOf(' ') != -1){
        CEP = CEP.replace(' ', '')
    }
    while(CEP.indexOf(',') != -1){
        CEP = CEP.replace(',', '')
    }
    while(CEP.indexOf('-') != -1){
        CEP = CEP.replace('-', '')
    }
    while(CEP.indexOf('.') != -1){
        CEP = CEP.replace('.', '')
    }
    while(CEP.indexOf(';') != -1){
        CEP = CEP.replace(';', '')
    }
    while(CEP.indexOf('=') != -1){
        CEP = CEP.replace('=', '')
    }
    return CEP
}

function run(event){
    event.preventDefault() //não recarregar a página
    var CEP = tratarCEP(input.value)

    axios
    .get(urlCEP + CEP + "/json/")
    .then(function(response){
        result.innerHTML = '' 
        console.log(response.data)
        if (response.data.erro){
            createLine('CEP Inválido')
            throw new Error('CEP Inválido')
        }else{
            createLine(response.data.logradouro)
            createLine(response.data.bairro)
            createLine(response.data.localidade + '/' + response.data.uf)
        }
    })
    .catch(function(error){
        result.innerHTML = '' 
        console.log(error)
        createLine('Algo deu errado. Digite novamente')
    })
}

function createLine(param){
    let line = document.createElement('p')
    let text = document.createTextNode(param)
    console.log(text)

    line.appendChild(text)
    result.appendChild(line)
}