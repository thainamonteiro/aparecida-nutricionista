var botaoBuscar = document.querySelector("#adicionar-paciente");

botaoBuscar.addEventListener("click", function(){
    console.log("Buscando...");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){

        if(xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            })
        } else {
            console.log(xhr.status);
        }
    
       
    })
    xhr.send();
})