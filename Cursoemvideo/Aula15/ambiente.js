let num = [5, 8, 4]
console.log(`Nosso vetor é o ${num}`) //sem a template string o log mostra os colchetes // withou the template string the log will show the array with colchetes on the sides
num[3] = 6 //colocando 6 na posicao de indice 3 (0,1,2,3) //adding a 6 to the position whose index is 3 (0,1,2,3)
console.log(num) 
num.push(7) //colocando 7 na última posiçao //adding a 7 to the arrays last position
console.log(num)
console.log(num.length) //retornando o valor do comprimento do array //returning the arrays length
console.log(num.sort()) //organizando o vetor do menor valor para o maior //organizing teh array from smallest to greatest

for(let pos = 0; pos < num.length; pos++){ //exibindo um array de maneira mais tradicional //exibiting an array the traditional way
    console.log(`A posição ${pos} tem valor ${num[pos]}, `)
}

console.log('') //separacao //separation

for (let pos in num){ //exibindo um array como permitem as versões mais novas do js // exibiting an array the way newer js versions allow
    console.log(`A posição ${pos} tem valor ${num[pos]}, `)
}

console.log(num.indexOf(7)) //mostrando o índice do valor 7 //showing the index of the value 7
console.log(num.indexOf(3)) //aqui ele mostra -1 pq não encontrou o valor indicado (3) //here it returns -1 bc there's no 3 stored in num