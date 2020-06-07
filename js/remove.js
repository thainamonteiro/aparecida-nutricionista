var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
	event.target.parentNode.classList.add("fadeOut"); // adicionei uma classe.

	setTimeout(function(){ //setTimeOut faz o JS esperar algum tempo pra executar alguma coisa.
		event.target.parentNode.remove(); // remove.
	},500); // tempo do SetTimeOut é medido em milissegundos.
})
/*
Estamos criando um evento, ao invés de usar o PACIENTE que já está feito, agora vamos utilizar a tabela para poder
remover. Isso faz com que eu consiga remover até os novos pacientes que são cadastrados.

*/
/* pacientes.forEach(function(paciente){
	paciente.addEventListener("dblclick", function(event){
		var alvoFilho = event.target;
		var alvoPai = alvoFilho.parentNode;
		console.log(alvoFilho);
		console.log(alvoPai);
		alvoPai.remove();
	})
}) */