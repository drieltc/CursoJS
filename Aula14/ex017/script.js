function tabuada(){
    var num = document.getElementById('txtnum') //pegando o input do usuário //getting users input
    var tab = document.getElementById('seltab') //associando a var tab com a select de id 'seltab' //associating the 'tab'var with the select whose id is 'seltab'
    if (num.value.length == 0){
        window.alert('[ATENÇÃO] Campo "Número" vazio. Considerando Número = 1.') //caso o usuário não informe um número a mensagem é mostrada //in case the user doesnt input a number the message warns him that the multiplication table of 1 is going to be shown
        num = 1
    }else{
        num = Number(txtnum.value) //convertendo de str para num //converting a str to num
    }
    tab.innerHTML = '' //apagando dados de iteraçoes anteriores //erasing previous iterations data
    for(var c = 1; c <= 10; c++){
        var item = document.createElement('option') //criando um elemento option. eles existem dentro do 'select' //creating an element called 'option'. they exist within the 'select'
        item.text = `${num} x ${c} = ${c*num}`
        item.value = `${c}`
        tab.appendChild(item) //colocand o valor calculado na variavel 'tab' //putting the calculate value into the 'tab' var
    }
}