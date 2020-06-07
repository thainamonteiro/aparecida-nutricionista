var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for(i = 0 ; i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if(!pesoValido) {
        pesoValido = false;
        tdImc.textContent = 'Peso inválido';
        paciente.classList.add("paciente-invalido");
        
    }
    if  (!alturaValido) {
        alturaValido = false;
        tdImc.textContent = 'Altura inválida';
        paciente.classList.add("paciente-invalido");
    }
    if(pesoValido && alturaValido){
        var imc = calculaIMC(peso, altura);
        tdImc.textContent = imc
    } 
}
//Criou-se uma função para reaproveitar o código. Não ter que ficar digitando toda hora
function calculaIMC(peso, altura) { 
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
//Criando uma função para validar o peso
function validaPeso(peso) {
    if(peso >= 0 && peso < 300) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura){
    if(altura >=0 && altura <= 3.00){
        return true;
    } else {
        return false;
    }
}