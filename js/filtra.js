var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.focus();

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i")
            console.log(nome);
            if(!expressao.test(nome)){
                //adicionando uma classe para esconder
                paciente.classList.add("invisivel");
            }else {
                paciente.classList.remove("invisivel");
            }
        }
    }else {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
            
        }
    
    
})