document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = form.nome.value;
        const email = form.email.value;
        const mensagem = form.mensagem.value;

        // Aqui, você pode adicionar lógica para enviar os dados do formulário a um servidor.
        // Por exemplo, usando Fetch ou XMLHttpRequest.

        alert(`Mensagem enviada por: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
        form.reset();
    });
});
