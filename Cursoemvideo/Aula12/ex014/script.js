function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 7
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 18|| hora < 6){
        //BOA NOITE
        img.src = "fotonoite.png"
        document.body.style.background = "#16263E"
    } else if (hora < 12){
        //BOM DIA
        img.src = "fotomanha.png"
        document.body.style.background = "#9EA071"
    } else{
        //BOA TARDE
        img.src = "fototarde.png"
        document.body.style.background = "#A5816D"

    }
}