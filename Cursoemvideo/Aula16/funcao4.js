function fat(n=0){
    let num = 1
    for (let c = n; c > 1; c--){
        num*=c
    }
    return num
}

console.log(fat(5))