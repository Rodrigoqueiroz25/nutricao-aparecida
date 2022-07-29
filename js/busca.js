const busca = document.querySelector("#busca-tabela");

busca.addEventListener("input",filtro);

//filtrando com expressao regular.
function filtro(){
    let pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0){
        pacientes.forEach(paciente => {
        const nome = paciente.querySelector(".info-nome").textContent;
        const expressao = new RegExp(this.value,"i");
        if(!expressao.test(nome)){
            paciente.classList.add("invisivel");
        }
        else{
            paciente.classList.remove("invisivel");
        }
    });
    }
    else{
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        })
    }    
}

//filtro com o nome completo.
// function filtro(){
//     let pacientes = document.querySelectorAll(".paciente");
//     if(this.value.length > 0){
//         pacientes.forEach(paciente => {
//             const nome = paciente.querySelector(".info-nome").textContent;
//             if(nome != this.value){
//                 paciente.classList.add("invisivel");
//             }
//             else{
//                 paciente.classList.remove("invisivel");
//             }
//         });
//     }
//     else{
//         pacientes.forEach(paciente => {
//             paciente.classList.remove("invisivel");
//         })
//     }    
// }