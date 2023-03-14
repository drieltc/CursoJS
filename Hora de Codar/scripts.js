//repeticao


//condicionais
const a = 10
if(a > 8){
    console.log('a é maior que 8')
}

const b = 'Adriel'
if (b === 'driel'){
    console.log("b é igual em tipo e valor a 'driel'")
}else{
    console.log("b não é igual em tipo e valor a 'driel'")
}

//if ternario
const someNumber = 24
console.log(someNumber < 20? 'Yes' : 'No')

//json
const dog = {
    name: 'Gato',
    age: 10,
}

const json = JSON.stringify(dog) //o método stringfy deve sempre ser usado para transformar um objeto tradicional num json
console.log(json)

const obj = JSON.parse(json)//agora estamos transformando um json num objeto tradicional
console.log(obj)

const jsonErrado = '{"name": "Teste", "surname": "Testando"}'
const obj2 = JSON.parse(jsonErrado)
console.log(obj2)

//objetos
const product = {
    name: 'Camisa',
    price: 49.99,
    inStock: true,
    tamanhos: ['P', 'M', 'G'],
    'main color': 'blue'
}
console.log(product.name)
console.log(product['name']) //essa forma de chamada é útil para casos em que o atributo seja um nome composto

//destructurig
const {price, inStock} = product //devem ser os mesmos nomes utilizados na construcao do objeto
console.log(price)
console.log(inStock)

const lista = ['a', 'b', 'c', 'd', 'e']
const [n1, n2] = lista
console.log(n1)
console.log(n2)

//manipulação de arrays
const list = ['a', 'b', 'c', 'd', 'e']
console.log(list.length) //mostrar o tamanho da lista
console.log(list[2]) //mostrar o elemento de índice 2
list[5] = 'f' //adicionando f ao elemento de indice 5
console.log(list) //mostrando toda a lista
console.log(list[list.length]) //vai retornar undefined, já que o último indice de um array é seu comprimento -1
console.log(list[list.length -1]) //mostrando o último elemento de um array
console.log(list[-1]) //diferente do pyhton, JS não aceita esse tipo de sintaxe para mostrar o ultimo elemento de um array
list.push('g')//adicionar um elemento ao final de um array
console.log(list)
list.pop()//remover o ultimo elemento
console.log(list)
list.shift()//remover o primeiro elemento
console.log(list)
list.unshift('a')//inserir um elemento ao inicio
console.log(list)

//manipulação de strings
const fullName = 'Adriel Torquato'
console.log(fullName.length)
console.log(fullName.split(' '))
console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())
console.log(fullName.indexOf('Tor'))
console.log(fullName.indexOf('tor'))
console.log(fullName.slice(0, 8))

//tipos de dados
const name = "Adriel"
console.log(name)
console.log(typeof name)

const qtd_shirts = 4
console.log(qtd_shirts)
console.log(typeof qtd_shirts)

const decimal = 12.3
console.log(decimal)
console.log(typeof decimal)

const isApproved = false
console.log(isApproved)
console.log(typeof isApproved)

const surname = null
console.log(surname)
console.log(typeof surname)

let age
console.log(age)
console.log(typeof age)

const languages = ['JavaScript', 'PHP', 'Python']
console.log(languages)
console.log(typeof languages)

const user = {email: 'adriel.techinfo@gmail.com', password: '12345', age: 30} //object literal
console.log(user)
console.log(typeof user)

//variaveis
var x = 10
let y = 15 //
const z = 20

if (1){
    let y = 55
    console.log(y)
}

console.log(x)
console.log(y)
console.log(z)

//console
console.log("Mensagem")
console.warn('Aviso')
console.error('Erro')