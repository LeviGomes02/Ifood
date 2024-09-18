document.getElementById('btn-entrar').addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão, caso o botão esteja dentro de um formulário
    window.location.href = './html/dashboard.html'; // Redireciona para a página desejada
});