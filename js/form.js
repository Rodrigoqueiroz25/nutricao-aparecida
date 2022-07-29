let botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click",(event) => {
    event.preventDefault();
    const form = document.querySelector("#form-adiciona");
    const paciente = obtemPacienteFormulario(form);
    const erros = validaPaciente(paciente);
    //validacao do paciente
    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    adicionaPacienteTabela(paciente);
    form.reset();

    document.querySelector("#mensagens-erro").innerHTML = "";
})

function adicionaPacienteTabela(paciente){
    const pacienteTr = montaTr(paciente);
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}


function exibeMensagensErro(erros){
    const ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(erro => {
        const li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
//necessário remover os erros antigos quando clica novamente em adicionar.


function montaTd(valor,classe){
    const td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = valor;
    return td;
}

function montaTr(paciente){
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;

}

function obtemPacienteFormulario(form){
    return {
        altura: form.altura.value,
        peso: form.peso.value,
        nome: form.nome.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

}


function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}