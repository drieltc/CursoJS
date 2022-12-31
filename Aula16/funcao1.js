function parimp(n){ //decarando uma funcao que determina se um número é par ou impar //declaring a function that determines if a number is either even or odd
    if (n%2 == 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}

let a = 11
let res = parimp(a)
console.log(`O número ${a} é ${res}`)