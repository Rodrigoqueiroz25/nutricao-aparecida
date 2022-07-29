var altura;
var peso;
var imc;

function validaPeso(peso){
    if(peso <= 0 || peso >= 600){
        return false;
    }
    else{
        return true;
    }    
}


function validaAltura(altura){
    if(altura <= 0 || altura >= 3){
        return false;
    }
    else{
        return true;
    }    
}

function calculaImc(peso, altura){
    const imc = peso / (altura*altura);
    return imc.toFixed(2);
}

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//calculo imc
var pacientes = document.querySelectorAll(".paciente");


for (let i = 0; i < pacientes.length; i++) {
    altura = pacientes[i].querySelector(".info-altura").textContent;
    peso = pacientes[i].querySelector(".info-peso").textContent;
    imc = pacientes[i].querySelector(".info-imc");

    pesoValido = validaPeso(peso);
    alturaValida = validaAltura(altura);

    if(!alturaValida){
        imc.textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if(!pesoValido){
        imc.textContent = "Peso inválido";
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if(pesoValido && alturaValida){
        imc.textContent = calculaImc(peso,altura);
    }
}

