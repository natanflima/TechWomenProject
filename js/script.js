//Regras de interações
//  se os campos de nome e email estiverem preenchidos 
//      envie os dados
//  senao
//      peça para o usuario que preencha os campos nome e email

// dequemviráoevento.addEventListener(“button”, oquedevefazer)
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if (document.getElementById("nome-da-usuaria").value != "" && document.getElementById("email-da-usuaria").value != "") {
        alert("Pronto! Você receberá as novidades por email.")
    } else {
        alert("Favor preencher os campos Nome e Email!")
    }
}