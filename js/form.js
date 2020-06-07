var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    //Trazendo o form para o mundo JS.
    var form = document.querySelector('#adicionar-pacientes');
    //Pegando o valor de cada name dentro das tag HTML

    var paciente = obtemInformacoes(form);
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMsgErros(erros);
        return; 
    }
         
    //Criando uma TR
    //Colocando dentro da Tabela os TD que foram criados.
    if(!validaPaciente(paciente)) {
        console.log("Paciente inválido");
        return;
    }
    adicionaPacienteNaTabela(paciente);
    form.reset();
})

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = criaTR(paciente);
    var tabela = document.querySelector('#tabela-pacientes'); 
    tabela.appendChild(pacienteTr);
}


function exibeMsgErros(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}


function obtemInformacoes(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)

    }
    return paciente;
}

function criaTR(pacientes){
    var pacienteTr = document.createElement("tr");
    //Adicionando uma classe no TR
    pacienteTr.classList.add("paciente");


    //Adicionando dentro das TR os valores

    pacienteTr.appendChild(criaTD(pacientes.nome, "info-nome"));
    pacienteTr.appendChild(criaTD(pacientes.peso, "info-peso"));
    pacienteTr.appendChild(criaTD(pacientes.altura, "info-altura"));
    pacienteTr.appendChild(criaTD(pacientes.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTD(pacientes.imc, "info-imc"));

    return pacienteTr;
}

function criaTD(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(pacientes){
    var erros = [];
    if(pacientes.nome.length == 0) {
        erros.push("Nome incorreto")
    }
    if(pacientes.altura.length == 0) {
        erros.push("Altura não pode ser em branco");
    }
    if(pacientes.peso.length == 0) {
        erros.push("Peso não pode ser em branco");
    }
    if (pacientes.gordura.length == 0) {
        erros.push("Gordura não pode ser em branco");
    }
    if(!validaPeso(pacientes.peso)) erros.push("Peso inválido");
    if(!validaAltura(pacientes.altura)) erros.push("Altura inválida");

    return erros;
}