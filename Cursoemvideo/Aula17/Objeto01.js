let amigo = {
    nome:'José', 
    sexo:'M', 
    peso:85.4, 
    engordar(p=0){
        this.peso+=p
    }
}
amigo.engordar(2)
console.log(`Meu amigo ${amigo.nome} pesa ${amigo.peso}Kg e precisa engordar}`)