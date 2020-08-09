//Procurar Botao
document.querySelector("#add-time")
//Quando Clicar no botão
.addEventListener('click', cloneField) // Ação, executar a function cloneField

//Executar uma ação
function cloneField(){
    //Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-items').cloneNode(true) 

    //Pegar os Campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pega o field do momento e limpa
        field.value = ""
    })

    //colocar na pagina onde
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}