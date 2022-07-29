
const tabela = document.querySelector("table");
tabela.addEventListener("dblclick", removePaciente);

function removePaciente(event){
    if(event.target.tagName == 'TD'){
        event.target.parentNode.classList.add("fadeout");
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    }
    
}