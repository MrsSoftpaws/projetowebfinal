var pessoas = [];
var adicionaPessoa = function() {
	let confirma = window.confirm("Deseja enviar sua mensagem?");
	if (confirma == true) {
		let check = document.querySelector(".check").checked;

		var pessoa = new Object();
		pessoa.nome = document.getElementsByName("nome")[0].value;
		pessoa.sobrenome = document.getElementsByTagName("input")[1].value;
		pessoa.telefone = $("#telefone").val();
		pessoa.email = $("#email").val();
		pessoa.mensagem = $("#mensagem").val();
		pessoa.status = check;

		pessoas.push(pessoa);

		localStorage.setItem("usuarios", JSON.stringify(pessoas));

		let nomeSobrenome = pessoa.nome.concat(" ").concat(pessoa.sobrenome);

		window.alert(nomeSobrenome + ", sua mensagem foi enviada. Obrigada!");

		if (pessoa.status == true) {
			window.alert("Você receberá as nossas notificações por Email!");
		} else {
			window.alert("Você não receberá as nossas notificações por Email!");
		}


		return false;
	} else
		return false;
}