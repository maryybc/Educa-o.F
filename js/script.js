try {
    const form = document.querySelector("form") ?? null;
    const nomeInput = document.querySelector("#nome");
    const assuntoSelect = document.querySelector("#assunto");
    const mensagemTextarea = document.querySelector
        ("#mensagem");
    const enviarBtn = document.querySelector("#enviar-btn");

    // validar o formulario
    // 1- que o nome nao seja vazio
    // 2- que a mensagem nao seja vazia e deve ser menos de 500 caracteres

    function validarFormulario(evento) {
        evento.preventDefault();
        let valido = true;
        if (nomeInput.value.trim() === '') {
            valido = false;
            alert("O campo de nome não pode ser vazio!");
        }

        if (mensagemTextarea.value.trim() === '') {
            valido = false;
            alert("Mensagem não pode ser vazia! ");
        } else if (mensagemTextarea.value.trim().length > 500) {
            valido = false;
            alert("Mensagem deve ser menos que 500 caracteres.");
        }

        if (valido) {
            alert("Agradecemos o seu contato!");
            form.submit();
        }
    }

    enviarBtn.addEventListener('click', validarFormulario);
} catch (exeption) {
    console.log(exeption.message);
}