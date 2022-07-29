const botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", buscaPaciente);


//ajax
function buscaPaciente(){
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacie1ntes");

    xhr.addEventListener("load", function() {

        if(xhr.status == 200){
            document.querySelector("#erro-ajax").classList.add("invisivel");
            const resposta = JSON.parse(xhr.responseText);
            resposta.forEach(paciente => {
                adicionaPacienteTabela(paciente);
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            document.querySelector("#erro-ajax").classList.remove("invisivel");
        }
    })
    
    xhr.send();
}